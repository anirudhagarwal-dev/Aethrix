const MOCK_MEMBERS = [
  {
    name: "Devansh Kapoor", branch: "CSE-AIML", githubID: "devansh-kapoor-web3",
    url: "https://github.com/devansh-kapoor-web3",
    about: "Web3 developer exploring DeFi protocols, automated market makers, and liquidity pools."
  },
  {
    name: "Aarav Sen", branch: "CSE", githubID: "aarav-sen-zk",
    url: "https://github.com/aarav-sen-zk",
    about: "Systems architect & full-stack Web3 builder. Love Zero-Knowledge proofs, custom consensus modules, and Rust."
  },
  {
    name: "Rohan Gupta", branch: "CS-IT", githubID: "rohan-gupta-dev",
    url: "https://github.com/rohan-gupta-dev",
    about: "Mobile dev pivoting to Web3. Interested in Solana smart contracts and decentralized mobile apps."
  },
  {
    name: "Aryan Verma", branch: "CSE-AIML", githubID: "aryan-verma-dev",
    url: "https://github.com/aryan-verma-dev",
    about: "ML engineer exploring federated learning and on-chain AI model verification pipelines."
  },
  {
    name: "Priya Sharma", branch: "ECE", githubID: "priya-sharma-web3",
    url: "https://github.com/priya-sharma-web3",
    about: "Hardware enthusiast building IoT-blockchain bridges and DePIN sensor networks."
  },
  {
    name: "Rohit Mehra", branch: "CSE", githubID: "rohit-mehra-0x",
    url: "https://github.com/rohit-mehra-0x",
    about: "DeFi protocol researcher with focus on AMM design and MEV protection strategies."
  },
  {
    name: "Sneha Gupta", branch: "IT", githubID: "sneha-gupta-nft",
    url: "https://github.com/sneha-gupta-nft",
    about: "Creative technologist building generative NFT art systems and on-chain provenance tools."
  },
  {
    name: "Karan Bhatia", branch: "CSE-AIML", githubID: "karan-bhatia-zk",
    url: "https://github.com/karan-bhatia-zk",
    about: "ZK circuits developer using Circom and snarkjs to build privacy-preserving voting systems."
  },
  {
    name: "Divya Nair", branch: "CS-IT", githubID: "divya-nair-dao",
    url: "https://github.com/divya-nair-dao",
    about: "DAO governance enthusiast studying token-weighted voting and quadratic funding mechanisms."
  },
  {
    name: "Abhimanyu Tiwari", branch: "CSE", githubID: "abhimanyu-tiwari-eth",
    url: "https://github.com/abhimanyu-tiwari-eth",
    about: "Full-stack Ethereum developer building Layer 2 rollup bridges and cross-chain messaging."
  },
  {
    name: "Tanvi Kapoor", branch: "IT", githubID: "tanvi-kapoor-sol",
    url: "https://github.com/tanvi-kapoor-sol",
    about: "Solana ecosystem builder working on compressed NFTs and token-gated applications."
  },
  {
    name: "Harsh Vardhan", branch: "ECE", githubID: "harsh-vardhan-chain",
    url: "https://github.com/harsh-vardhan-chain",
    about: "Cryptography researcher studying lattice-based post-quantum signatures for blockchain systems."
  },
  {
    name: "Isha Malhotra", branch: "CSE-AIML", githubID: "isha-malhotra-ai",
    url: "https://github.com/isha-malhotra-ai",
    about: "Building decentralized AI data marketplaces where contributors earn tokens for quality datasets."
  },
  {
    name: "Nikhil Pandey", branch: "CSE", githubID: "nikhil-pandey-defi",
    url: "https://github.com/nikhil-pandey-defi",
    about: "Yield optimization strategist building automated vault contracts across multiple DeFi protocols."
  },
  {
    name: "Ritika Joshi", branch: "IT", githubID: "ritika-joshi-web3",
    url: "https://github.com/ritika-joshi-web3",
    about: "Front-end Web3 developer specializing in wallet UX and gasless transaction flows using ERC-4337."
  },
  {
    name: "Saurabh Mishra", branch: "CS-IT", githubID: "saurabh-mishra-0x",
    url: "https://github.com/saurabh-mishra-0x",
    about: "Cross-chain bridge architect using LayerZero and Wormhole to build omnichain dApps."
  },
  {
    name: "Ananya Singh", branch: "CSE-AIML", githubID: "ananya-singh-nft",
    url: "https://github.com/ananya-singh-nft",
    about: "Generative artist and smart contract developer creating fully on-chain SVG NFT collections."
  },
  {
    name: "Varun Saxena", branch: "CSE", githubID: "varun-saxena-rust",
    url: "https://github.com/varun-saxena-rust",
    about: "Systems programmer building high-performance EVM execution environments and custom opcodes."
  },
  {
    name: "Pooja Rawat", branch: "IT", githubID: "pooja-rawat-dao",
    url: "https://github.com/pooja-rawat-dao",
    about: "Community manager turned developer, building contributor reputation systems using soulbound tokens."
  },
  {
    name: "Akash Dubey", branch: "ECE", githubID: "akash-dubey-depin",
    url: "https://github.com/akash-dubey-depin",
    about: "Embedded systems engineer tokenizing real-world sensor data on decentralized physical infrastructure."
  },
  {
    name: "Megha Arora", branch: "CSE-AIML", githubID: "megha-arora-zk",
    url: "https://github.com/megha-arora-zk",
    about: "Research-focused developer building ZK-SNARK proofs for private medical data verification."
  },
  {
    name: "Yash Tripathi", branch: "CSE", githubID: "yash-tripathi-eth",
    url: "https://github.com/yash-tripathi-eth",
    about: "Smart contract security researcher and competitive auditor focused on reentrancy and flash-loan exploits."
  },
  {
    name: "Neha Chaudhary", branch: "IT", githubID: "neha-chaudhary-sol",
    url: "https://github.com/neha-chaudhary-sol",
    about: "Solana program developer building compressed state trees and efficient PDAs for gaming dApps."
  },
  {
    name: "Arjun Chauhan", branch: "CS-IT", githubID: "arjun-chauhan-layer2",
    url: "https://github.com/arjun-chauhan-layer2",
    about: "Rollup engineer contributing to ZK-EVM implementations and validity proof generation pipelines."
  },
  {
    name: "Simran Kaur", branch: "CSE-AIML", githubID: "simran-kaur-defi",
    url: "https://github.com/simran-kaur-defi",
    about: "Quantitative DeFi analyst building on-chain risk assessment models and liquidation bots."
  },
  {
    name: "Rahul Sharma", branch: "ECE", githubID: "rahul-sharma-iot",
    url: "https://github.com/rahul-sharma-iot",
    about: "IoT developer creating tamper-proof supply chain tracking using NFTs and oracle networks."
  },
  {
    name: "Kritika Yadav", branch: "CSE", githubID: "kritika-yadav-nft",
    url: "https://github.com/kritika-yadav-nft",
    about: "3D artist and smart contract developer building metaverse-ready interoperable avatar systems."
  },
  {
    name: "Devesh Pathak", branch: "IT", githubID: "devesh-pathak-chain",
    url: "https://github.com/devesh-pathak-chain",
    about: "Backend developer building decentralized identity solutions using DIDs and Verifiable Credentials."
  },
  {
    name: "Anjali Mehta", branch: "CSE-AIML", githubID: "anjali-mehta-ai",
    url: "https://github.com/anjali-mehta-ai",
    about: "Exploring intersection of reinforcement learning and on-chain agent economies for autonomous trading."
  },
  {
    name: "Kunal Aggarwal", branch: "CS-IT", githubID: "kunal-aggarwal-sec",
    url: "https://github.com/kunal-aggarwal-sec",
    about: "Penetration tester turned Web3 security researcher, specializing in EVM bytecode analysis."
  },
  {
    name: "Pallavi Singh", branch: "ECE", githubID: "pallavi-singh-token",
    url: "https://github.com/pallavi-singh-token",
    about: "Tokenomics designer crafting sustainable emission schedules and bonding curve mechanisms for DAOs."
  },
  {
    name: "Vikram Jain", branch: "CSE", githubID: "vikram-jain-cosmos",
    url: "https://github.com/vikram-jain-cosmos",
    about: "Cosmos SDK developer building appchains with custom IBC modules for cross-chain asset transfers."
  },
  {
    name: "Trisha Mukherjee", branch: "IT", githubID: "trisha-mukherjee-zk",
    url: "https://github.com/trisha-mukherjee-zk",
    about: "Math graduate using PLONK and STARKs to build scalable anonymous credential systems."
  },
  {
    name: "Mohit Bansal", branch: "CSE-AIML", githubID: "mohit-bansal-graph",
    url: "https://github.com/mohit-bansal-graph",
    about: "Subgraph developer indexing on-chain events for DeFi analytics dashboards and MEV bots."
  },
  {
    name: "Aditi Rao", branch: "CS-IT", githubID: "aditi-rao-nft",
    url: "https://github.com/aditi-rao-nft",
    about: "Music NFT pioneer building royalty-splitting smart contracts and streaming micropayment channels."
  },
  {
    name: "Siddharth Kumar", branch: "ECE", githubID: "siddharth-kumar-eth",
    url: "https://github.com/siddharth-kumar-eth",
    about: "Hardware wallet firmware developer ensuring secure key generation and transaction signing at the chip level."
  },
  {
    name: "Bhavna Tomar", branch: "CSE", githubID: "bhavna-tomar-dao",
    url: "https://github.com/bhavna-tomar-dao",
    about: "Legal-tech researcher encoding governance frameworks into smart contracts for compliant DAOs."
  },
];

let blockchain = [];
let selectedIdx = -1;
let isMining = false;
let miningTimer = null;
let minedProfile = null;

let scene3, camera3, renderer3, controls3;
let blocks3D = [], conduits3D = [], packets3D = [], labelSprites = [];
let isAutoRotate = true;
let raf3D = null;
let raycaster3 = new THREE.Raycaster();
let mouse3 = new THREE.Vector2();
const _labelVec = new THREE.Vector3();
let hoveredMesh = null;

document.addEventListener('DOMContentLoaded', boot);

async function boot() {
  lucide.createIcons();
  setDefaultDate();
  bindEvents();
  await loadData();
  populateBranchFilter();
  updateHeroStats();
  renderRailNodes();
  renderGrid();
  try {
    init3D();
  } catch (err) {
    // 3D is a progressive enhancement — never let a WebGL/shader failure take
    // down the rest of the page. Surface the real reason instead of a black canvas.
    console.error('[Aethrix] 3D chain failed to initialize:', err);
  }
}

const DEV_MOCK = false;

async function loadData() {
  if (DEV_MOCK) {
    await buildMockChain();
    return;
  }
  try {
    const r = await fetch('api/members.json');
    if (!r.ok) throw new Error();
    blockchain = await r.json();
    verifyChainSilent();
  } catch {
    await buildMockChain();
    toast('Sandbox mode', '');
  }
}

async function buildMockChain() {
  const sorted = [...MOCK_MEMBERS].sort((a, b) =>
    a.githubID.toLowerCase().localeCompare(b.githubID.toLowerCase()));
  blockchain = [];
  let prev = '0'.repeat(64);
  for (let i = 0; i < sorted.length; i++) {
    const m = sorted[i];
    const self = await sha256(canonical(m));
    const chain = await sha256(self + prev);
    blockchain.push({ index: i + 1, data: m, selfHash: self, prevHash: prev, chainHash: chain });
    prev = chain;
  }
}

async function verifyChainSilent() {
  let prev = '0'.repeat(64), ok = true;
  for (const b of blockchain) {
    const s = await sha256(canonical(b.data));
    if (s !== b.selfHash || b.prevHash !== prev) { ok = false; break; }
    const c = await sha256(b.selfHash + prev);
    if (c !== b.chainHash) { ok = false; break; }
    prev = b.chainHash;
  }
  const el = document.getElementById('h-integrity');
  if (el) {
    el.textContent = ok ? '● Secure' : '● Broken';
    el.className = 'hero-stat-val ' + (ok ? 'integrity-ok' : '');
    el.style.color = ok ? '' : '#ff6b6b';
  }
}

function canonical(data) {
  const s = {}; Object.keys(data).sort().forEach(k => s[k] = data[k]); return JSON.stringify(s);
}

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function setDefaultDate() {
  const d = document.getElementById('f-date');
  if (d) d.value = new Date().toISOString().split('T')[0];
}

function populateBranchFilter() {
  const branches = [...new Set(blockchain.map(b => b.data.branch))];
  const sel = document.getElementById('branch-filter');
  branches.forEach(br => {
    const opt = document.createElement('option');
    opt.value = br; opt.textContent = br;
    sel.appendChild(opt);
  });
}

function updateHeroStats() {
  document.getElementById('h-total').textContent = blockchain.length;
  let base = blockchain.length * 14.8 + 9.3;
  document.getElementById('h-hashrate').textContent = base.toFixed(2) + ' KH/s';
  setInterval(() => {
    base += (Math.random() - 0.5) * 2.4;
    const el = document.getElementById('h-hashrate');
    if (el) el.textContent = Math.max(0, base).toFixed(2) + ' KH/s';
  }, 3000);
}

function renderRailNodes() {
  const container = document.getElementById('rail-nodes');
  if (!container || container.style.display === 'none') return;
  container.innerHTML = '';

  const gen = mkRailNode(true, 0);
  container.appendChild(gen);

  blockchain.forEach((_, i) => {
    const node = mkRailNode(false, i + 1);
    container.appendChild(node);
  });

  requestAnimationFrame(() => alignRailNodes(container));
}

function mkRailNode(isGenesis, idx) {
  const div = document.createElement('div');
  div.className = 'rail-node' + (isGenesis ? ' rail-node-genesis' : '');
  div.dataset.idx = idx;
  div.innerHTML = '<div class="rail-node-dot"></div>';
  div.addEventListener('click', () => {
    if (!isGenesis && blockchain[idx - 1]) openInspector(idx - 1);
  });
  return div;
}

function alignRailNodes(rail) {
  const cards = document.querySelectorAll('.member-card');
  const railRect = rail.getBoundingClientRect();
  const nodes = rail.querySelectorAll('.rail-node:not(.rail-node-genesis)');
  nodes.forEach((node, i) => {
    if (cards[i]) {
      const cardRect = cards[i].getBoundingClientRect();
      const targetY = cardRect.top + cardRect.height / 2 - railRect.top;
      node.style.marginTop = (i === 0 ? targetY - 5 : targetY - node.offsetTop) + 'px';
    }
  });
}

function renderGrid(filtered = null) {
  const grid = document.getElementById('member-grid');
  const empty = document.getElementById('empty-state');
  const list = filtered !== null ? filtered : blockchain;
  grid.innerHTML = '';

  if (list.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  list.forEach((block, i) => {
    const card = buildCard(block, i);
    grid.appendChild(card);
  });

  lucide.createIcons();
}

function buildCard(block, i) {
  const d = block.data;
  const row = document.createElement('div');
  row.className = 'member-row' + (selectedIdx === i ? ' active' : '');
  row.dataset.idx = i;

  const avatarHTML = `
    <div class="row-avatar-wrap">
      <div class="row-avatar-fallback" id="card-av-${i}" data-github="${d.githubID}">
        ${initials(d.name)}
      </div>
    </div>
  `;

  row.innerHTML = `
    <div class="row-col row-col-member">
      ${avatarHTML}
      <span class="row-name">${d.name}</span>
    </div>
    <div class="row-col row-col-branch">${d.branch}</div>
    <div class="row-col row-col-github">
      <a href="${d.url}" target="_blank" rel="noopener noreferrer" class="row-github-link" onclick="event.stopPropagation();">
        @${d.githubID}
      </a>
    </div>
  `;

  row.addEventListener('click', () => openInspector(i));

  const tempImg = new Image();
  tempImg.src = `https://github.com/${d.githubID}.png?size=80`;
  tempImg.onload = () => {
    const fall = document.getElementById(`card-av-${i}`);
    if (fall) {
      const img = document.createElement('img');
      img.src = tempImg.src;
      img.className = 'row-avatar';
      img.alt = d.name;
      fall.replaceWith(img);
    }
  };

  return row;
}

function initials(name) {
  return name.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
}

function applyFilters() {
  const q = document.getElementById('search-input').value.toLowerCase().trim();
  const br = document.getElementById('branch-filter').value;
  const result = blockchain.filter(b => {
    const d = b.data;
    const matchQ = !q ||
      d.name.toLowerCase().includes(q) ||
      d.githubID.toLowerCase().includes(q) ||
      d.about.toLowerCase().includes(q);
    const matchBr = br === 'all' || d.branch === br;
    return matchQ && matchBr;
  });
  renderGrid(result);
  lucide.createIcons();
}

function openInspector(idx) {
  selectedIdx = idx;
  const block = blockchain[idx];
  const d = block.data;

  document.querySelectorAll('.member-row').forEach((c, i) => {
    c.classList.toggle('active', i === idx);
  });

  document.getElementById('insp-name').textContent = d.name;
  document.getElementById('insp-branch').textContent = d.branch;
  document.getElementById('insp-about').textContent = d.about;

  const githubEl = document.getElementById('insp-github');
  document.getElementById('insp-github-id').textContent = `@${d.githubID}`;
  githubEl.href = d.url;

  const av = document.getElementById('insp-avatar');
  const avFall = document.getElementById('insp-avatar-fallback');
  av.style.display = 'none';
  avFall.innerHTML = `<i data-lucide="user"></i>`;
  avFall.style.display = 'flex';
  lucide.createIcons();

  const img = new Image();
  img.src = `https://github.com/${d.githubID}.png?size=90`;
  img.onload = () => { av.src = img.src; av.style.display = 'block'; avFall.style.display = 'none'; };

  const insp = document.getElementById('inspector');
  insp.classList.remove('hidden');
  showBackdrop();
}

function closeInspector() {
  document.getElementById('inspector').classList.add('hidden');
  document.querySelectorAll('.member-row').forEach(c => c.classList.remove('active'));
  selectedIdx = -1;
  hideBackdrop();
}

async function verifyBlock() {
  if (selectedIdx < 0) return;
  const block = blockchain[selectedIdx];

  const statusEl = document.getElementById('verify-status');
  const logEl = document.getElementById('verify-log');
  logEl.innerHTML = '';
  logEl.classList.remove('hidden');
  statusEl.className = 'verify-status';
  statusEl.textContent = 'Verifying…';

  const log = (text, cls = '') => {
    const line = document.createElement('div');
    line.className = cls;
    line.textContent = '› ' + text;
    logEl.appendChild(line);
    logEl.scrollTop = logEl.scrollHeight;
  };

  log('Computing canonical JSON…');
  const cs = canonical(block.data);
  await delay(280);

  log('Running SHA-256 (Web Crypto)…');
  const computedSelf = await sha256(cs);
  await delay(280);
  log('Computed:  ' + computedSelf);
  log('Manifest:  ' + block.selfHash);

  if (computedSelf !== block.selfHash) {
    log('✗ Self-hash mismatch — block data was altered.', 'vlog-err');
    statusEl.textContent = '✗ Integrity Failed';
    statusEl.className = 'verify-status fail';
    return;
  }
  log('✓ Self-hash matches.', 'vlog-ok');
  await delay(280);

  const computedChain = await sha256(block.selfHash + block.prevHash);
  log('Chain link: ' + computedChain);
  log('Manifest:   ' + block.chainHash);

  if (computedChain !== block.chainHash) {
    log('✗ Chain hash mismatch — ordering broken.', 'vlog-err');
    statusEl.textContent = '✗ Chain Broken';
    statusEl.className = 'verify-status fail';
    return;
  }
  log('✓ Chain link verified.', 'vlog-ok');
  statusEl.textContent = '✓ Block Verified';
  statusEl.className = 'verify-status ok';
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function openMiner() {
  document.getElementById('miner-modal').classList.remove('hidden');
  showBackdrop();
  resetMiner();
}

function closeMiner() {
  document.getElementById('miner-modal').classList.add('hidden');
  isMining = false;
  if (miningTimer) clearTimeout(miningTimer);
  if (!document.getElementById('inspector').classList.contains('hidden')) {
    showBackdrop();
  } else {
    hideBackdrop();
  }
}

function resetMiner() {
  showStep('mine-form-step');
  document.getElementById('term-log').innerHTML = '';
  isMining = false;
}

function showStep(id) {
  ['mine-form-step', 'mine-terminal-step', 'mine-success-step'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

function startMining() {
  const name = document.getElementById('f-name').value.trim();
  const branch = document.getElementById('f-branch').value.trim();
  const github = document.getElementById('f-github').value.trim().replace('@', '');
  const bio = document.getElementById('f-bio').value.trim();

  if (bio.length < 10 || bio.length > 200) {
    toast('Bio must be 10–200 chars', 'err'); return;
  }

  const profile = {
    name, branch, githubID: github,
    url: `https://github.com/${github}`, about: bio
  };

  showStep('mine-terminal-step');
  isMining = true;
  mineLoop(profile);
}

async function mineLoop(profile) {
  const log = document.getElementById('term-log');
  const counter = document.getElementById('nonce-counter');

  const write = (t) => { const d = document.createElement('div'); d.textContent = t; log.appendChild(d); log.scrollTop = 9999; };
  write('$ run block_compiler --chain=aethrix-mainnet');
  write('> Canonicalizing JSON profile payload…');
  write('> Computing SHA-256 cryptographic signature…');

  const h = await sha256(canonical(profile));
  if (counter) counter.textContent = '1';
  write('─'.repeat(48));
  write(`✓ BLOCK COMPILED!`);
  write(`✓ Hash:   ${h}`);
  write('─'.repeat(48));
  minedProfile = { ...profile };
  setTimeout(() => showSuccess(minedProfile, h), 800);
}

function showSuccess(profile, hash) {
  showStep('mine-success-step');
  document.getElementById('suc-hash').textContent = hash.substring(0, 36) + '…';
  document.getElementById('suc-commit').textContent = `member: add ${profile.githubID.toLowerCase()}`;
  document.getElementById('suc-filename').textContent = `${profile.githubID.toLowerCase()}.json`;
  const json = JSON.stringify(profile, null, 2);
  document.getElementById('json-preview-code').textContent = json;
  document.getElementById('dl-json').onclick = () =>
    downloadJSON(json, `${profile.githubID.toLowerCase()}.json`);
  lucide.createIcons();
}

function downloadJSON(content, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function showBackdrop() {
  document.getElementById('backdrop').classList.remove('hidden');
}
function hideBackdrop() {
  document.getElementById('backdrop').classList.add('hidden');
}

function toast(msg, type = '') {
  const stack = document.getElementById('toasts');
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  const icon = type === 'ok' ? 'check-circle-2' : type === 'err' ? 'alert-triangle' : 'info';
  el.innerHTML = `<i data-lucide="${icon}"></i> ${msg}`;
  stack.appendChild(el);
  lucide.createIcons();
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(20px)';
    el.style.transition = 'all 0.3s';
    setTimeout(() => el.remove(), 300);
  }, 3800);
}

window.copyId = function (id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => toast('Copied!', 'ok'));
};

// Scrolling up quickly through the member list used to blow straight past the
// vault/hero boundary and dump the reader back into the 3D scene. This acts as a
// speed breaker: momentum scrolling is pinned at the top of the list, and the
// hero is only revealed once the user pauses and scrolls again deliberately.
// Wheel over the hero drives the camera instead of scrolling the page. One
// scroll moves both orbit radius and polar angle, so the view sweeps between
// "close and top-down" and "pulled back and level with the ring". Leaving the
// hero is deliberate — only the scroll-cue arrow navigates to the vault.
function initHeroScrollCamera() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const sph = new THREE.Spherical();
  const off = new THREE.Vector3();
  const MIN_R = 150;      // close in, ring fills the frame
  const MAX_R = 430;      // pulled back, whole ring small
  const MIN_PHI = 0.30;   // steep top-down look
  const MAX_PHI = 1.52;   // almost level with the ring
  const SENS_R = 0.25;
  const SENS_PHI = 0.0005;

  const inHero = () => window.scrollY < hero.offsetHeight * 0.6;

  // Returning from the vault used to leave the camera wherever the upward flick
  // shoved it: those wheel events land the moment we cross back into the hero,
  // so a fast scroll pinned the view at MIN_R/MIN_PHI. Snap back to the default
  // framing on re-entry and swallow the rest of that gesture while it settles.
  let wasInHero = true;
  let settleUntil = 0;

  window.addEventListener('scroll', () => {
    const now = inHero();
    if (now && !wasInHero) {
      reset3DCamera();
      settleUntil = performance.now() + 1000;   // covers the 900ms reset tween
    }
    wasInHero = now;
  }, { passive: true });

  window.addEventListener('wheel', (e) => {
    if (!inHero() || !camera3 || !controls3) return;

    e.preventDefault();
    if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: 'auto' });

    if (performance.now() < settleUntil) return;

    // OrbitControls.update() rebuilds its spherical state from the camera each
    // frame, so writing the position directly is enough - damping/auto-rotate
    // pick the new angle up on the next tick.
    off.subVectors(camera3.position, controls3.target);
    sph.setFromVector3(off);
    sph.radius = Math.min(Math.max(sph.radius + e.deltaY * SENS_R, MIN_R), MAX_R);
    sph.phi = Math.min(Math.max(sph.phi + e.deltaY * SENS_PHI, MIN_PHI), MAX_PHI);
    off.setFromSpherical(sph);
    camera3.position.copy(controls3.target).add(off);
    camera3.lookAt(controls3.target);
  }, { passive: false });
}

function bindEvents() {

  initHeroScrollCamera();

  const btnScroll = document.getElementById('btn-scroll-vault');
  if (btnScroll) btnScroll.addEventListener('click', () =>
    document.getElementById('vault').scrollIntoView({ behavior: 'smooth' }));

  document.getElementById('btn-mine-hero').addEventListener('click', openMiner);
  document.getElementById('btn-mine-top').addEventListener('click', openMiner);
  document.getElementById('miner-close').addEventListener('click', closeMiner);
  document.getElementById('mine-again').addEventListener('click', resetMiner);
  document.getElementById('mine-form').addEventListener('submit', e => { e.preventDefault(); startMining(); });

  document.getElementById('inspector-close').addEventListener('click', closeInspector);

  document.getElementById('backdrop').addEventListener('click', () => {
    closeInspector();
    closeMiner();
  });

  document.getElementById('search-input').addEventListener('input', applyFilters);
  document.getElementById('branch-filter').addEventListener('change', applyFilters);

  const bio = document.getElementById('f-bio');
  const cnt = document.getElementById('bio-count');
  if (bio && cnt) bio.addEventListener('input', () => {
    cnt.textContent = `${bio.value.length} / 200`;
    cnt.style.color = (bio.value.length < 10 || bio.value.length > 200) ? '#dc2626' : '';
  });

  document.getElementById('hud-orbit').addEventListener('click', toggleOrbit);
  document.getElementById('hud-reset').addEventListener('click', reset3DCamera);

  window.addEventListener('resize', () => {
    if (renderer3) {
      const c = document.getElementById('chain-canvas-3d');
      renderer3.setSize(c.clientWidth, c.clientHeight);
      camera3.aspect = c.clientWidth / c.clientHeight;
      camera3.updateProjectionMatrix();
    }
  });
}

function init3D() {
  const canvas = document.getElementById('chain-canvas-3d');
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  scene3 = new THREE.Scene();

  camera3 = new THREE.PerspectiveCamera(46, W / H, 0.5, 2000);
  camera3.position.set(0, 52, 272);

  renderer3 = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer3.setSize(W, H);
  renderer3.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  controls3 = new THREE.OrbitControls(camera3, renderer3.domElement);
  controls3.enableDamping = true;
  controls3.dampingFactor = 0.04;
  controls3.autoRotate = isAutoRotate;
  controls3.autoRotateSpeed = 0.25;
  // OrbitControls grabs the wheel event and preventDefault()s it, so scrolling
  // over the hero zoomed the camera instead of scrolling the page. Drag still
  // rotates; the wheel now belongs to the document.
  controls3.enableZoom = false;
  controls3.maxDistance = 520;
  controls3.minDistance = 30;
  controls3.target.set(0, -4, 0);

  scene3.add(new THREE.AmbientLight(0xffffff, 1.6));
  const dir1 = new THREE.DirectionalLight(0x44aaff, 5.0);
  dir1.position.set(60, 80, 50);
  scene3.add(dir1);
  const dir2 = new THREE.DirectionalLight(0x00ffee, 2.5);
  dir2.position.set(-40, -30, -40);
  scene3.add(dir2);
  const dir3 = new THREE.DirectionalLight(0x0088ff, 3.0);
  dir3.position.set(0, -80, 60);
  scene3.add(dir3);

  const fillLight = new THREE.PointLight(0x00bbff, 4.0, 300);
  fillLight.position.set(40, 20, 0);
  scene3.add(fillLight);

  buildParticles();

  buildGlassChain();

  canvas.addEventListener('mousemove', onHover3D);
  canvas.addEventListener('click', onClick3D);
  canvas.addEventListener('mouseleave', () => {
    if (hoveredMesh) {
      setBlockHighlight(hoveredMesh, false);
      hoveredMesh = null;
    }
    document.getElementById('chain-canvas-3d').style.cursor = 'default';
    if (controls3) controls3.autoRotate = isAutoRotate;
    hideHeroProfileCard();
  });

  loop3D();
}

function buildParticles() {
  const count = 800;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    pos[i] = (Math.random() - 0.5) * 600;
    pos[i + 1] = (Math.random() - 0.5) * 300;
    pos[i + 2] = (Math.random() - 0.5) * 600;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene3.add(new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0x00ccff, size: 1.8, transparent: true, opacity: 0.85
  })));
}

function buildGlassChain() {
  blocks3D.forEach(b => scene3.remove(b.group));
  conduits3D.forEach(c => scene3.remove(c));
  packets3D.forEach(p => scene3.remove(p.mesh));
  blocks3D = []; conduits3D = []; packets3D = []; labelSprites = [];

  const N = blockchain.length;

  const RADIUS = Math.max(110, N * 26 / (2 * Math.PI));
  const angleStep = (2 * Math.PI) / N;

  // Spin rate scales with the size of the batch: a 3-block ring reads as static
  // at the speed a 37-block ring wants, and a big ring whips past at the speed a
  // small one needs. 1/sqrt(N) keeps the perceived motion even as PRs land.
  if (controls3) {
    controls3.autoRotateSpeed = Math.min(Math.max(1.5 / Math.sqrt(Math.max(N, 1)), 0.15), 1.1);
  }

  const gGeo = new THREE.IcosahedronGeometry(19, 0);
  const gMat = new THREE.MeshPhysicalMaterial({
    color: 0x9fe8ff, roughness: 0.08, metalness: 0.0,
    transmission: 0.0, opacity: 0.5, transparent: true,
    reflectivity: 0.8, clearcoat: 1.0, clearcoatRoughness: 0.0,
    emissive: 0x22a0ff, emissiveIntensity: 1.25,
    depthWrite: false,
  });
  const genesis = new THREE.Mesh(gGeo, gMat);
  genesis.position.set(0, 0, 0);
  const gWireMat = new THREE.MeshBasicMaterial({
    color: 0x7ff4ff, wireframe: true, transparent: true, opacity: 0.95
  });
  const gWire = new THREE.Mesh(new THREE.IcosahedronGeometry(20.5, 0), gWireMat);
  gWire.position.set(0, 0, 0);

  const gHaloMat = new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0x33c4ff, transparent: true,
    opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const gHalo = new THREE.Sprite(gHaloMat);
  gHalo.scale.set(96, 96, 1);

  const gLabel = makeTextSprite('GENESIS');
  gLabel.position.set(0, -28, 0);
  gLabel.scale.set(17, 4.6, 1);
  gLabel.material.opacity = 0.55;

  const genesisLight = new THREE.PointLight(0x0088ff, 4.0, 300);
  genesisLight.position.set(0, 0, 0);
  scene3.add(genesisLight, gHalo, genesis, gWire, gLabel);
  blocks3D.push({ group: { position: new THREE.Vector3(0, 0, 0) }, mesh: genesis, wire: gWire, isGenesis: true });

  const ringPositions = [];
  blockchain.forEach((block, idx) => {
    const angle = idx * angleStep - Math.PI / 2;
    const x = Math.cos(angle) * RADIUS;
    const z = Math.sin(angle) * RADIUS;
    const pos = new THREE.Vector3(x, 0, z);
    ringPositions.push(pos);

    const group = new THREE.Group();
    group.position.copy(pos);

    // NOTE: high `transmission` on MeshPhysicalMaterial needs an environment map to
    // pick up any color — without one the faces solve to near-black, which made the
    // front-most blocks read as solid dark boxes. Keep transmission low and let the
    // emissive + opacity carry the "glowing glass" look instead.
    const boxMat = new THREE.MeshPhysicalMaterial({
      color: 0x9fe8ff, roughness: 0.12, metalness: 0.0,
      transmission: 0.0, opacity: 0.42, transparent: true,
      reflectivity: 0.6, clearcoat: 1.0, clearcoatRoughness: 0.05,
      emissive: 0x1e88ff, emissiveIntensity: 0.85,
      depthWrite: false,
    });
    const box = new THREE.Mesh(new THREE.BoxGeometry(11, 11, 11), boxMat);
    group.add(box);

    const edgeMat = new THREE.LineBasicMaterial({ color: 0x5fefff, transparent: true, opacity: 1.0 });
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(11.2, 11.2, 11.2)), edgeMat
    );
    group.add(edges);

    const labelSprite = makeTextSprite(block.data.name.split(' ')[0]);
    const outDir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
    labelSprite.position.set(outDir.x * 15, -9.5, outDir.z * 15);
    group.add(labelSprite);
    labelSprites.push(labelSprite);

    const ringGeo = new THREE.TorusGeometry(8.4, 0.24, 12, 64);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      color: 0x00ccff, transparent: true, opacity: 0.9
    }));
    ring.rotation.x = Math.PI / 3.5;
    group.add(ring);

    // NOTE: per-block PointLights removed. 1 light per block (+1 per packet)
    // pushed the scene to 76 dynamic lights, which exceeds the fragment-shader
    // uniform limit on integrated/laptop GPUs and makes the whole canvas render
    // black. The blocks already glow via their emissive material below.

    group.userData = { blockIdx: idx };
    scene3.add(group);
    blocks3D.push({ group, mesh: box, wire: edges, ring, blockData: block });
  });

  ringPositions.forEach((pos, idx) => {
    buildConduit(pos, ringPositions[(idx + 1) % N]);
  });
}

function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(150,225,255,0.55)');
  g.addColorStop(1, 'rgba(0,140,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function makeTextSprite(message) {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 128);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 52px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lines = message.split('\n');
  lines.forEach((line, i) => ctx.fillText(line, 256, 64 + (i - (lines.length - 1) / 2) * 56));
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    opacity: 1.0,
    depthTest: false,
    sizeAttenuation: true,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(22, 6, 1);
  sprite.renderOrder = 999;
  return sprite;
}

function buildConduit(from, to) {
  const mid = new THREE.Vector3(
    (from.x + to.x) / 2,
    (from.y + to.y) / 2 + 6,
    (from.z + to.z) / 2
  );
  const curve = new THREE.CatmullRomCurve3([from.clone(), mid, to.clone()]);
  const tube = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 24, 0.55, 8, false),
    new THREE.MeshBasicMaterial({ color: 0x00ccff, transparent: true, opacity: 0.75 })
  );
  scene3.add(tube);
  conduits3D.push(tube);

  const pkt = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0x00ffff })
  );
  // per-packet PointLight removed for the same GPU light-limit reason; the
  // packet uses an unlit MeshBasicMaterial so it stays bright on its own.
  scene3.add(pkt);
  packets3D.push({ mesh: pkt, curve, t: Math.random(), speed: 0.006 + Math.random() * 0.005 });
}

function loop3D() {
  raf3D = requestAnimationFrame(loop3D);
  TWEEN.update();
  if (controls3) controls3.update();

  blocks3D.forEach((b, i) => {
    if (b.isGenesis) {
      b.mesh.rotation.y += 0.006;
      if (b.wire) b.wire.rotation.y -= 0.009;
    } else {
      if (b.ring) b.ring.rotation.z += 0.01;
      if (b.wire) b.wire.rotation.y += 0.003;

      if (b.group) b.group.position.y += Math.sin(Date.now() * 0.001 + i) * 0.003;
    }
  });

  packets3D.forEach(p => {
    p.t += p.speed;
    if (p.t > 1) p.t = 0;
    p.mesh.position.copy(p.curve.getPointAt(p.t));
  });

  // Labels draw with depthTest off, so without this the far side of the ring
  // renders a wall of overlapping names. Fade them out with distance and drop
  // the ones behind the genesis entirely.
  const camDist = camera3.position.length();
  labelSprites.forEach(s => {
    s.getWorldPosition(_labelVec);
    const d = _labelVec.distanceTo(camera3.position);
    const fade = 1 - Math.min(Math.max((d - camDist * 0.92) / (camDist * 0.55), 0), 1);
    s.material.opacity = fade * 0.95;
    s.visible = fade > 0.08;
  });

  renderer3.render(scene3, camera3);
}

function getClickedBlock(e) {
  const canvas = document.getElementById('chain-canvas-3d');
  const rect = canvas.getBoundingClientRect();
  mouse3.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse3.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster3.setFromCamera(mouse3, camera3);
  const hits = raycaster3.intersectObjects(scene3.children, true);
  for (const hit of hits) {
    let obj = hit.object;
    while (obj && obj !== scene3) {
      if (obj.userData && obj.userData.blockIdx !== undefined) return obj;
      obj = obj.parent;
    }
  }
  return null;
}

let currentHoveredBlockIdx = -1;

// Hovering a block lifts it, brightens the glass and lights up its wireframe /
// ring so the cursor target is obvious against a ring of 37 near-identical cubes.
function setBlockHighlight(group, on) {
  if (!group) return;
  const s = on ? 1.14 : 1;
  group.scale.set(s, s, s);
  const rec = blocks3D.find(b => b.group === group);
  if (!rec) return;
  if (rec.mesh && rec.mesh.material) {
    rec.mesh.material.emissiveIntensity = on ? 2.1 : 0.85;
    rec.mesh.material.opacity = on ? 0.72 : 0.42;
  }
  if (rec.wire && rec.wire.material) rec.wire.material.color.setHex(on ? 0xffffff : 0x5fefff);
  if (rec.ring && rec.ring.material) rec.ring.material.opacity = on ? 1 : 0.9;
}

function onHover3D(e) {
  const hit = getClickedBlock(e);
  document.getElementById('chain-canvas-3d').style.cursor = hit ? 'pointer' : 'default';
  if (hit !== hoveredMesh) {
    if (hoveredMesh) setBlockHighlight(hoveredMesh, false);
    hoveredMesh = hit;
    if (hoveredMesh) setBlockHighlight(hoveredMesh, true);
  }

  if (hit !== null && hit.userData && hit.userData.blockIdx !== undefined) {
    if (controls3) controls3.autoRotate = false;
    showHeroProfileCard(hit.userData.blockIdx, e.clientX, e.clientY);
  } else {
    if (controls3) controls3.autoRotate = isAutoRotate;
    hideHeroProfileCard();
  }
}

function showHeroProfileCard(idx, clientX, clientY) {
  const card = document.getElementById('hero-profile-card');
  if (!card) return;
  const block = blockchain[idx];
  if (!block || !block.data) {
    hideHeroProfileCard();
    return;
  }

  const d = block.data;

  if (currentHoveredBlockIdx !== idx) {
    currentHoveredBlockIdx = idx;

    document.getElementById('hpc-name').textContent = d.name;
    document.getElementById('hpc-github').textContent = `@${d.githubID}`;
    document.getElementById('hpc-branch').textContent = d.branch;
    const aboutEl = document.getElementById('hpc-about');
    if (aboutEl) aboutEl.textContent = d.about || '';

    const av = document.getElementById('hpc-avatar');
    const avFall = document.getElementById('hpc-avatar-fallback');
    av.style.display = 'none';
    avFall.textContent = initials(d.name);
    avFall.style.display = 'flex';

    const img = new Image();
    img.src = `https://github.com/${d.githubID}.png?size=200`;
    img.onload = () => {
      if (currentHoveredBlockIdx === idx) {
        av.src = img.src;
        av.style.display = 'block';
        avFall.style.display = 'none';
      }
    };
  }

  positionHeroProfileCard(clientX, clientY);
  card.classList.remove('hidden');
}

function hideHeroProfileCard() {
  const card = document.getElementById('hero-profile-card');
  if (card) card.classList.add('hidden');
  currentHoveredBlockIdx = -1;
}

function positionHeroProfileCard(x, y) {
  const card = document.getElementById('hero-profile-card');
  if (!card) return;
  const padding = 16;
  const cardW = 290;
  const cardH = 320;

  let left = x + 20;
  let top = y + 20;

  if (left + cardW > window.innerWidth - padding) {
    left = x - cardW - 20;
  }

  if (top + cardH > window.innerHeight - padding) {
    top = y - cardH - 20;
  }

  if (left < padding) left = padding;
  if (top < padding) top = padding;

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
}

function onClick3D(e) {
  const hit = getClickedBlock(e);
  if (hit !== null && hit.userData.blockIdx !== undefined) {
    hideHeroProfileCard();
    const idx = hit.userData.blockIdx;
    zoomToBlock(idx, () => {
      document.getElementById('vault').scrollIntoView({ behavior: 'smooth' });
      openInspector(idx);
    });
  }
}

function zoomToBlock(idx, cb) {
  const b = blocks3D.find((_, i) => !blocks3D[0].isGenesis ? i === idx : i === idx + 1) ||
    blocks3D[idx + 1];
  if (!b || !b.group) return;
  const target = b.group.position.clone();
  controls3.autoRotate = false;
  document.getElementById('hud-orbit').classList.remove('active');
  isAutoRotate = false;

  new TWEEN.Tween(camera3.position)
    .to(target.clone().add(new THREE.Vector3(0, 10, 40)), 900)
    .easing(TWEEN.Easing.Cubic.Out).start();
  new TWEEN.Tween(controls3.target)
    .to(target, 900)
    .easing(TWEEN.Easing.Cubic.Out)
    .onComplete(() => { if (cb) cb(); })
    .start();
}

function toggleOrbit() {
  isAutoRotate = !isAutoRotate;
  controls3.autoRotate = isAutoRotate;

  const btn = document.getElementById('hud-orbit');
  const icon = document.getElementById('hud-orbit-icon');

  btn.classList.toggle('active', isAutoRotate);

  if (isAutoRotate) {

    btn.title = 'Pause Rotation';
    btn.setAttribute('aria-label', 'Pause Rotation');
    icon.innerHTML = `
      <rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor"/>
      <rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor"/>`;
  } else {

    btn.title = 'Resume Rotation';
    btn.setAttribute('aria-label', 'Resume Rotation');
    icon.innerHTML = `
      <polygon points="7 4 20 12 7 20" fill="currentColor" stroke="currentColor"
        stroke-width="1" stroke-linejoin="round"/>`;
  }
}

function reset3DCamera() {
  new TWEEN.Tween(camera3.position)
    .to({ x: 0, y: 52, z: 272 }, 900)
    .easing(TWEEN.Easing.Cubic.Out).start();
  new TWEEN.Tween(controls3.target)
    .to({ x: 0, y: -4, z: 0 }, 900)
    .easing(TWEEN.Easing.Cubic.Out).start();
}