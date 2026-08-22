const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MEMBERS_DIR = path.join(__dirname, '../members');
const SCHEMA_FILE = path.join(__dirname, 'schema.json');
const OUTPUT_FILE = path.join(__dirname, '../api/members.json');

let schema;
try {
  schema = JSON.parse(fs.readFileSync(SCHEMA_FILE, 'utf8'));
} catch (err) {
  console.error('Error reading schema.json:', err.message);
  process.exit(1);
}

function validate(data, schema, filename) {
  for (const field of schema.required) {
    if (data[field] === undefined || data[field] === null) {
      throw new Error(`[${filename}] Missing required field: "${field}"`);
    }
  }

  for (const key of Object.keys(data)) {
    if (!schema.properties[key]) {
      throw new Error(`[${filename}] Unexpected property: "${key}"`);
    }

    const val = data[key];
    const propSchema = schema.properties[key];

    if (propSchema.type === 'string') {
      if (typeof val !== 'string') {
        throw new Error(`[${filename}] Field "${key}" must be a string`);
      }
      if (propSchema.minLength && val.length < propSchema.minLength) {
        throw new Error(`[${filename}] Field "${key}" is too short (min ${propSchema.minLength} chars)`);
      }
      if (propSchema.maxLength && val.length > propSchema.maxLength) {
        throw new Error(`[${filename}] Field "${key}" is too long (max ${propSchema.maxLength} chars)`);
      }
      if (propSchema.pattern) {
        const regex = new RegExp(propSchema.pattern);
        if (!regex.test(val)) {
          throw new Error(`[${filename}] Field "${key}" does not match pattern ${propSchema.pattern}`);
        }
      }
    } else if (propSchema.type === 'integer') {
      if (!Number.isInteger(val)) {
        throw new Error(`[${filename}] Field "${key}" must be an integer`);
      }
      if (propSchema.minimum !== undefined && val < propSchema.minimum) {
        throw new Error(`[${filename}] Field "${key}" must be >= ${propSchema.minimum}`);
      }
    } else if (propSchema.type === 'array') {
      if (!Array.isArray(val)) {
        throw new Error(`[${filename}] Field "${key}" must be an array`);
      }
      if (propSchema.minItems && val.length < propSchema.minItems) {
        throw new Error(`[${filename}] Field "${key}" must have at least ${propSchema.minItems} items`);
      }
      if (propSchema.maxItems && val.length > propSchema.maxItems) {
        throw new Error(`[${filename}] Field "${key}" can have at most ${propSchema.maxItems} items`);
      }
      for (const item of val) {
        if (typeof item !== 'string') {
          throw new Error(`[${filename}] Array items in "${key}" must be strings`);
        }
        if (propSchema.items.minLength && item.length < propSchema.items.minLength) {
          throw new Error(`[${filename}] Skill "${item}" is too short`);
        }
        if (propSchema.items.maxLength && item.length > propSchema.items.maxLength) {
          throw new Error(`[${filename}] Skill "${item}" is too long`);
        }
      }
    }
  }
}

function getCanonicalString(data) {
  const sortedData = {};
  const keys = Object.keys(data).sort();
  for (const key of keys) {
    sortedData[key] = data[key];
  }
  return JSON.stringify(sortedData);
}

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

function build() {
  console.log('--- Starting BRL Trainees 2026 Blockchain Build ---');

  if (!fs.existsSync(MEMBERS_DIR)) {
    console.error(`Members directory not found at ${MEMBERS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(MEMBERS_DIR);
  const memberFiles = files.filter(f => f.endsWith('.json') && f !== 'example.json');

  console.log(`Found ${memberFiles.length} trainee profiles to process.`);

  const blocks = [];

  for (const file of memberFiles) {
    const filePath = path.join(MEMBERS_DIR, file);
    let rawContent;
    try {
      rawContent = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      console.error(`Error reading ${file}:`, err.message);
      process.exit(1);
    }

    let data;
    try {
      data = JSON.parse(rawContent);
    } catch (err) {
      console.error(`Error parsing JSON in ${file}:`, err.message);
      process.exit(1);
    }

    const expectedFilename = `${data.githubID.toLowerCase()}.json`;
    if (file.toLowerCase() !== expectedFilename) {
      console.error(`Error: Filename "${file}" must exactly match githubID "${data.githubID.toLowerCase()}.json"`);
      process.exit(1);
    }

    try {
      validate(data, schema, file);
    } catch (err) {
      console.error('Validation Error:', err.message);
      process.exit(1);
    }

    const canonicalStr = getCanonicalString(data);
    const selfHash = sha256(canonicalStr);

    blocks.push({
      githubID: data.githubID.toLowerCase(),
      data: data,
      selfHash: selfHash
    });
  }

  blocks.sort((a, b) => a.githubID.localeCompare(b.githubID));

  const blockchain = [];
  let prevHash = '0000000000000000000000000000000000000000000000000000000000000000';

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const blockIndex = i + 1;

    const chainHash = sha256(block.selfHash + prevHash);

    blockchain.push({
      index: blockIndex,
      data: block.data,
      selfHash: block.selfHash,
      prevHash: prevHash,
      chainHash: chainHash
    });

    prevHash = chainHash;
  }

  const apiDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blockchain, null, 2), 'utf8');
  console.log(`Success! Compiled blockchain with ${blockchain.length} blocks to ${OUTPUT_FILE}`);
  console.log('--- Build Completed Successfully ---');
}

build();