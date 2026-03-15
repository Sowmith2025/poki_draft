const availableRoles = [
  'Captain', 'Vice Captain', 'Support 1', 'Support 2', 'Tank', 'Healer', 'Combat Power', 'Speed', 'IQ', 'Willpower',
  'Champion', 'Elite Four', 'Ace', 'Starter', 'Rival', 'Legendary', 'Wild'
];
let selectedRoles = [...availableRoles];

const trainersData = [
  { id: 'T1', name: 'red', base_experience: 600, stats: [{base_stat: 600}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/red.png', other: {'official-artwork': {}} } },
  { id: 'T2', name: 'blue', base_experience: 580, stats: [{base_stat: 580}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/blue.png', other: {'official-artwork': {}} } },
  { id: 'T3', name: 'cynthia', base_experience: 620, stats: [{base_stat: 620}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/cynthia.png', other: {'official-artwork': {}} } },
  { id: 'T4', name: 'lance', base_experience: 550, stats: [{base_stat: 550}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/lance.png', other: {'official-artwork': {}} } },
  { id: 'T5', name: 'steven', base_experience: 580, stats: [{base_stat: 580}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/steven.png', other: {'official-artwork': {}} } },
  { id: 'T6', name: 'leon', base_experience: 610, stats: [{base_stat: 610}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/leon.png', other: {'official-artwork': {}} } },
  { id: 'T7', name: 'geeta', base_experience: 540, stats: [{base_stat: 540}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/geeta.png', other: {'official-artwork': {}} } },
  { id: 'T8', name: 'misty', base_experience: 300, stats: [{base_stat: 300}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/misty.png', other: {'official-artwork': {}} } },
  { id: 'T9', name: 'brock', base_experience: 300, stats: [{base_stat: 300}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/brock.png', other: {'official-artwork': {}} } },
  { id: 'T10', name: 'ash', base_experience: 700, stats: [{base_stat: 700}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/ash.png', other: {'official-artwork': {}} } },
  { id: 'T11', name: 'wallace', base_experience: 560, stats: [{base_stat: 560}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/wallace.png', other: {'official-artwork': {}} } },
  { id: 'T12', name: 'alder', base_experience: 590, stats: [{base_stat: 590}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/alder.png', other: {'official-artwork': {}} } },
  { id: 'T13', name: 'diantha', base_experience: 570, stats: [{base_stat: 570}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/diantha.png', other: {'official-artwork': {}} } },
  { id: 'T14', name: 'mustard', base_experience: 630, stats: [{base_stat: 630}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/mustard.png', other: {'official-artwork': {}} } },
  { id: 'T15', name: 'clavel', base_experience: 450, stats: [{base_stat: 450}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/clavel.png', other: {'official-artwork': {}} } },
  { id: 'T16', name: 'nemona', base_experience: 580, stats: [{base_stat: 580}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nemona.png', other: {'official-artwork': {}} } },
  { id: 'T17', name: 'arven', base_experience: 480, stats: [{base_stat: 480}], types: [{type: {name: 'support'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/arven.png', other: {'official-artwork': {}} } },
  { id: 'T18', name: 'penny', base_experience: 470, stats: [{base_stat: 470}], types: [{type: {name: 'support'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/penny.png', other: {'official-artwork': {}} } },
  { id: 'T19', name: 'hop', base_experience: 490, stats: [{base_stat: 490}], types: [{type: {name: 'rival'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/hop.png', other: {'official-artwork': {}} } },
  { id: 'T20', name: 'marnie', base_experience: 510, stats: [{base_stat: 510}], types: [{type: {name: 'rival'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/marnie.png', other: {'official-artwork': {}} } },
  { id: 'T21', name: 'koga', base_experience: 400, stats: [{base_stat: 400}], types: [{type: {name: 'elite four'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/koga.png', other: {'official-artwork': {}} } },
  { id: 'T22', name: 'lorelei', base_experience: 420, stats: [{base_stat: 420}], types: [{type: {name: 'elite four'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/lorelei.png', other: {'official-artwork': {}} } },
  { id: 'T23', name: 'bruno', base_experience: 420, stats: [{base_stat: 420}], types: [{type: {name: 'elite four'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/bruno.png', other: {'official-artwork': {}} } },
  { id: 'T24', name: 'agatha', base_experience: 440, stats: [{base_stat: 440}], types: [{type: {name: 'elite four'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/agatha.png', other: {'official-artwork': {}} } },
  { id: 'T25', name: 'clair', base_experience: 430, stats: [{base_stat: 430}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/clair.png', other: {'official-artwork': {}} } },
  { id: 'T26', name: 'whitney', base_experience: 380, stats: [{base_stat: 380}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/whitney.png', other: {'official-artwork': {}} } },
  { id: 'T27', name: 'volkner', base_experience: 430, stats: [{base_stat: 430}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/volkner.png', other: {'official-artwork': {}} } },
  { id: 'T28', name: 'riley', base_experience: 460, stats: [{base_stat: 460}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/riley.png', other: {'official-artwork': {}} } },
  { id: 'T29', name: 'elesa', base_experience: 400, stats: [{base_stat: 400}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/elesa.png', other: {'official-artwork': {}} } },
  { id: 'T30', name: 'skyla', base_experience: 390, stats: [{base_stat: 390}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/skyla.png', other: {'official-artwork': {}} } },
  { id: 'T31', name: 'raihan', base_experience: 500, stats: [{base_stat: 500}], types: [{type: {name: 'gym leader'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/raihan.png', other: {'official-artwork': {}} } },
  { id: 'T32', name: 'dawn', base_experience: 480, stats: [{base_stat: 480}], types: [{type: {name: 'support'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/dawn.png', other: {'official-artwork': {}} } },
  { id: 'T33', name: 'serena', base_experience: 470, stats: [{base_stat: 470}], types: [{type: {name: 'support'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/serena.png', other: {'official-artwork': {}} } },
  { id: 'T34', name: 'may', base_experience: 460, stats: [{base_stat: 460}], types: [{type: {name: 'support'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/may.png', other: {'official-artwork': {}} } },
  { id: 'T35', name: 'gary', base_experience: 580, stats: [{base_stat: 580}], types: [{type: {name: 'rival'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/gary.png', other: {'official-artwork': {}} } },
  { id: 'T36', name: 'paul', base_experience: 560, stats: [{base_stat: 560}], types: [{type: {name: 'rival'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/paul.png', other: {'official-artwork': {}} } },
  { id: 'T37', name: 'lillie', base_experience: 300, stats: [{base_stat: 300}], types: [{type: {name: 'support'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/lillie.png', other: {'official-artwork': {}} } },
  { id: 'T38', name: 'gladion', base_experience: 520, stats: [{base_stat: 520}], types: [{type: {name: 'rival'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/gladion.png', other: {'official-artwork': {}} } },
  { id: 'T39', name: 'hau', base_experience: 490, stats: [{base_stat: 490}], types: [{type: {name: 'rival'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/hau.png', other: {'official-artwork': {}} } },
  { id: 'T40', name: 'kukui', base_experience: 600, stats: [{base_stat: 600}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/kukui.png', other: {'official-artwork': {}} } },
  { id: 'T41', name: 'giovanni', base_experience: 650, stats: [{base_stat: 650}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/giovanni.png', other: {'official-artwork': {}} } },
  { id: 'T42', name: 'maxie', base_experience: 500, stats: [{base_stat: 500}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/maxie.png', other: {'official-artwork': {}} } },
  { id: 'T43', name: 'archie', base_experience: 500, stats: [{base_stat: 500}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/archie.png', other: {'official-artwork': {}} } },
  { id: 'T44', name: 'cyrus', base_experience: 580, stats: [{base_stat: 580}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/cyrus.png', other: {'official-artwork': {}} } },
  { id: 'T45', name: 'ghetsis', base_experience: 590, stats: [{base_stat: 590}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/ghetsis.png', other: {'official-artwork': {}} } },
  { id: 'T46', name: 'lysandre', base_experience: 570, stats: [{base_stat: 570}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/lysandre.png', other: {'official-artwork': {}} } },
  { id: 'T47', name: 'guzma', base_experience: 540, stats: [{base_stat: 540}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/guzma.png', other: {'official-artwork': {}} } },
  { id: 'T48', name: 'lusamine', base_experience: 550, stats: [{base_stat: 550}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/lusamine.png', other: {'official-artwork': {}} } },
  { id: 'T49', name: 'rose', base_experience: 560, stats: [{base_stat: 560}], types: [{type: {name: 'ace'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/rose.png', other: {'official-artwork': {}} } },
  { id: 'T50', name: 'volo', base_experience: 630, stats: [{base_stat: 630}], types: [{type: {name: 'champion'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/volo.png', other: {'official-artwork': {}} } }
];

const healersData = [
  { id: 'H1', name: 'nurse-joy', base_experience: 100, stats: [{base_stat: 85}, {base_stat: 50}, {base_stat: 60}, {base_stat: 90}, {base_stat: 100}, {base_stat: 65}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H2', name: 'doctor', base_experience: 90, stats: [{base_stat: 80}, {base_stat: 40}, {base_stat: 70}, {base_stat: 80}, {base_stat: 90}, {base_stat: 50}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/doctor.png', other: {'official-artwork': {}} } },
  { id: 'H3', name: 'nurse-joy-kanto', base_experience: 110, stats: [{base_stat: 95}, {base_stat: 55}, {base_stat: 65}, {base_stat: 95}, {base_stat: 105}, {base_stat: 70}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H4', name: 'nurse-joy-johto', base_experience: 110, stats: [{base_stat: 95}, {base_stat: 55}, {base_stat: 65}, {base_stat: 95}, {base_stat: 105}, {base_stat: 70}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H5', name: 'nurse-joy-hoenn', base_experience: 120, stats: [{base_stat: 100}, {base_stat: 60}, {base_stat: 70}, {base_stat: 100}, {base_stat: 110}, {base_stat: 75}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H6', name: 'nurse-joy-sinnoh', base_experience: 130, stats: [{base_stat: 105}, {base_stat: 65}, {base_stat: 75}, {base_stat: 105}, {base_stat: 115}, {base_stat: 80}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H7', name: 'nurse-joy-unova', base_experience: 140, stats: [{base_stat: 110}, {base_stat: 70}, {base_stat: 80}, {base_stat: 110}, {base_stat: 120}, {base_stat: 85}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H8', name: 'nurse-joy-kalos', base_experience: 150, stats: [{base_stat: 115}, {base_stat: 75}, {base_stat: 85}, {base_stat: 115}, {base_stat: 125}, {base_stat: 90}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H9', name: 'nurse-joy-alola', base_experience: 160, stats: [{base_stat: 120}, {base_stat: 80}, {base_stat: 90}, {base_stat: 120}, {base_stat: 130}, {base_stat: 95}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } },
  { id: 'H10', name: 'nurse-joy-galar', base_experience: 170, stats: [{base_stat: 125}, {base_stat: 85}, {base_stat: 95}, {base_stat: 125}, {base_stat: 135}, {base_stat: 100}], types: [{type: {name: 'healer'}}], sprites: { front_default: 'https://play.pokemonshowdown.com/sprites/trainers/nurse.png', other: {'official-artwork': {}} } }
];

// State
let passes = { 1: 3, 2: 3 };
let currentPlayer = 1;
let currentRoleIndex = 0;
let p1Roster = [];
let p2Roster = [];
let currentOptions = [];

const regionRanges = {
  'All': { start: 1, end: 1025 },
  'Kanto': { start: 1, end: 151 },
  'Johto': { start: 152, end: 251 },
  'Hoenn': { start: 252, end: 386 },
  'Sinnoh': { start: 387, end: 493 },
  'Unova': { start: 494, end: 649 },
  'Kalos': { start: 650, end: 721 },
  'Alola': { start: 722, end: 809 },
  'Galar': { start: 810, end: 898 },
  'Paldea': { start: 899, end: 1025 }
};
let activeRegion = 'All';

// Region Selectors
const regionLinks = document.querySelectorAll('.region-link');
const poolCountDisplay = document.querySelector('.pool-count');

regionLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    regionLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    activeRegion = link.dataset.region;
    poolCountDisplay.textContent = regionRanges[activeRegion].end - regionRanges[activeRegion].start + 1;
    // Reset gallery pagination when switching regions
    galleryOffset = 0;
    if (!galleryScreen.classList.contains('hidden')) {
      loadGallery();
    }
  });
});

// DOM Elements - Setup
const rolesList = document.getElementById('roles-list');
const roleCountDisplay = document.getElementById('role-count-display');
const btnStartDraft = document.getElementById('btn-start-draft');
const setupScreen = document.getElementById('setup-screen');
const draftScreen = document.getElementById('draft-screen');
const passesSelect = document.getElementById('passes-select');

// DOM Elements - Draft
const draftTurnTitle = document.getElementById('draft-turn-title');
const draftRoleSubtitle = document.getElementById('draft-role-subtitle');
const pokemonOptionsContainer = document.getElementById('pokemon-options');
const p1PassesSpan = document.getElementById('p1-passes');
const p2PassesSpan = document.getElementById('p2-passes');
const btnPass = document.getElementById('btn-pass');
const team1Panel = document.getElementById('team1-panel');
const team2Panel = document.getElementById('team2-panel');
const p1RosterList = document.getElementById('p1-roster');
const p2RosterList = document.getElementById('p2-roster');

// DOM Elements - Battle Screen
const battleScreen = document.getElementById('battle-screen');
const p1BattleScore = document.getElementById('p1-battle-score');
const p2BattleScore = document.getElementById('p2-battle-score');
const p1BattleRoster = document.getElementById('p1-battle-roster');
const p2BattleRoster = document.getElementById('p2-battle-roster');
const battleWinner = document.getElementById('battle-winner');
const btnRestart = document.getElementById('btn-restart');

// 1. Initialize Roles UI
function initRolesUI() {
  rolesList.innerHTML = '';
  availableRoles.forEach(role => {
    const badge = document.createElement('span');
    badge.className = `role-badge ${selectedRoles.includes(role) ? 'selected' : ''}`;
    badge.textContent = role;
    badge.onclick = () => toggleRole(role, badge);
    rolesList.appendChild(badge);
  });
  updateRoleCount();
}

function toggleRole(role, element) {
  if (selectedRoles.includes(role)) {
    if (selectedRoles.length <= 1) return; // Must have at least 1 role
    selectedRoles = selectedRoles.filter(r => r !== role);
    element.classList.remove('selected');
  } else {
    selectedRoles.push(role);
    element.classList.add('selected');
  }
  updateRoleCount();
}

function updateRoleCount() {
  roleCountDisplay.textContent = `${selectedRoles.length}/${availableRoles.length}`;
}

// 2. Start Draft
btnStartDraft.addEventListener('click', () => {
  const passesCount = parseInt(passesSelect.value);
  passes = { 1: passesCount, 2: passesCount };
  currentPlayer = 1;
  currentRoleIndex = 0;
  p1Roster = [];
  p2Roster = [];
  
  setupScreen.classList.add('hidden');
  draftScreen.classList.remove('hidden');
  
  updateDraftUI();
  fetchNewOptions();
});

// 3. Draft Flow Logic
function updateDraftUI() {
  draftTurnTitle.textContent = `Player ${currentPlayer}'s Turn`;
  draftTurnTitle.style.color = currentPlayer === 1 ? 'var(--p1-color)' : 'var(--p2-color)';
  
  const currentRole = selectedRoles[currentRoleIndex];
  draftRoleSubtitle.innerHTML = `Select a Pokémon for role: <strong class="highlight-role">${currentRole}</strong>`;
  
  p1PassesSpan.textContent = passes[1];
  p2PassesSpan.textContent = passes[2];
  
  if (currentPlayer === 1) {
    team1Panel.classList.add('active-panel');
    team2Panel.classList.remove('active-panel');
  } else {
    team2Panel.classList.add('active-panel');
    team1Panel.classList.remove('active-panel');
  }
  
  btnPass.disabled = passes[currentPlayer] <= 0;
  btnPass.style.opacity = passes[currentPlayer] <= 0 ? '0.5' : '1';
}

async function fetchNewOptions() {
  pokemonOptionsContainer.innerHTML = '<div class="loading-spinner">Locating Options...</div>';
  btnPass.disabled = true; // Disable pass while loading
  
  currentOptions = [];
  
  const currentRole = selectedRoles[currentRoleIndex];
  if (currentRole === 'Trainer' || currentRole === 'Captain' || currentRole === 'Vice Captain') {
    // Pick 4 random trainers
    const shuffled = [...trainersData].sort(() => 0.5 - Math.random());
    currentOptions = shuffled.slice(0, 4);
    renderOptions();
    btnPass.disabled = passes[currentPlayer] <= 0;
    return;
  }
  
  if (currentRole === 'Healer') {
    // Pick 4 random healers
    const shuffled = [...healersData].sort(() => 0.5 - Math.random());
    currentOptions = shuffled.slice(0, 4);
    renderOptions();
    btnPass.disabled = passes[currentPlayer] <= 0;
    return;
  }
  
  const fetches = [];
  const rBounds = regionRanges[activeRegion];
  for(let i=0; i<4; i++) {
    const randomId = Math.floor(Math.random() * (rBounds.end - rBounds.start + 1)) + rBounds.start;
    fetches.push(fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()));
  }
  
  try {
    const results = await Promise.all(fetches);
    currentOptions = results;
    renderOptions();
    btnPass.disabled = passes[currentPlayer] <= 0; // Re-enable if needed
  } catch (err) {
    console.error(err);
    pokemonOptionsContainer.innerHTML = '<div class="loading-spinner">Error loading. Please try again.</div>';
  }
}

function getTypeClass(typeString) {
  const validTypes = ['fire', 'water', 'grass', 'electric', 'normal'];
  return validTypes.includes(typeString) ? `type-${typeString}` : 'type-default';
}

function getStatBarsHtml(stats) {
  if (!stats) return '';
  const statLabels = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
  
  return `<div class="stat-bars-container">` + stats.slice(0, 6).map((s, i) => {
    const val = s.base_stat || 0;
    const max = 255;
    const pct = Math.min((val / max) * 100, 100);
    const label = statLabels[i] || 'Stat';
    return `
      <div class="stat-row">
        <div class="stat-labels">
          <span class="stat-name">${label}</span>
          <span class="stat-val">${val}</span>
        </div>
        <div class="stat-bar-bg">
          <div class="stat-bar-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('') + `</div>`;
}

function renderOptions() {
  pokemonOptionsContainer.innerHTML = '';
  currentOptions.forEach(poke => {
    const card = document.createElement('div');
    card.className = 'poke-card';
    
    // Some Gen 9 pokemon don't have front_default in standard sprites, fallback to empty string
    const spriteUrl = poke.sprites.other['official-artwork'].front_default || poke.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
    const typeHtml = poke.types.map(t => `<span class="poke-type ${getTypeClass(t.type.name)}">${t.type.name}</span>`).join('');
    
    card.innerHTML = `
      <img src="${spriteUrl}" alt="${poke.name}" />
      <div class="poke-name">${poke.name.replace('-', ' ')}</div>
      <div class="poke-types" style="margin-bottom: 5px;">${typeHtml}</div>
      ${getStatBarsHtml(poke.stats)}
    `;
    
    card.onclick = () => selectPokemon(poke);
    pokemonOptionsContainer.appendChild(card);
  });
}

function selectPokemon(poke) {
  const currentRole = selectedRoles[currentRoleIndex];
  const statTotal = poke.stats ? poke.stats.reduce((acc, s)=>acc+s.base_stat, 0) : 0;
  const spriteUrl = poke.sprites?.other?.['official-artwork']?.front_default || poke.sprites?.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
  
  const rosterEntry = { 
    role: currentRole, 
    name: poke.name.replace('-', ' '),
    originalRole: poke.types[0].type.name,
    spriteUrl: spriteUrl,
    statTotal: statTotal + (poke.base_experience || 0)
  };
  
  if (currentPlayer === 1) {
    p1Roster.push(rosterEntry);
    addRosterItemUI(p1RosterList, rosterEntry);
    currentPlayer = 2; // Switch to P2
  } else {
    p2Roster.push(rosterEntry);
    addRosterItemUI(p2RosterList, rosterEntry);
    currentPlayer = 1; // Back to P1
    currentRoleIndex++; // Next round
  }
  
  if (currentRoleIndex >= selectedRoles.length) {
    finishDraft();
  } else {
    updateDraftUI();
    fetchNewOptions();
  }
}

function addRosterItemUI(list, entry) {
  const li = document.createElement('li');
  li.className = 'roster-item';
  li.innerHTML = `
    <span class="roster-poke">${entry.name}</span>
    <span class="roster-role">${entry.role}</span>
  `;
  list.appendChild(li);
}

btnPass.addEventListener('click', () => {
  if (passes[currentPlayer] > 0) {
    passes[currentPlayer]--;
    updateDraftUI();
    fetchNewOptions();
  }
});

// Finish Draft & Battle Simulation
function finishDraft() {
  pokemonOptionsContainer.innerHTML = '<div class="loading-spinner" style="color:var(--accent-green); font-size:1.5rem; font-weight:bold;">Draft Complete! Generating Battle...</div>';
  draftTurnTitle.textContent = 'Matchup Ready';
  draftTurnTitle.style.color = '#fff';
  draftRoleSubtitle.textContent = 'Preparing the arena...';
  btnPass.style.display = 'none';
  document.querySelector('.timer-section span').style.display = 'none';
  team1Panel.classList.remove('active-panel');
  team2Panel.classList.remove('active-panel');
  
  setTimeout(() => {
    simulateBattle();
  }, 2000);
}

function simulateBattle() {
  draftScreen.classList.add('hidden');
  battleScreen.classList.remove('hidden');

  const p1Total = p1Roster.reduce((sum, poke) => sum + poke.statTotal, 0);
  const p2Total = p2Roster.reduce((sum, poke) => sum + poke.statTotal, 0);

  // Render Roster Previews
  p1BattleRoster.innerHTML = p1Roster.map(p => `
    <img src="${p.spriteUrl}" title="${p.name} | Power: ${p.statTotal}" style="width:50px; height:50px; object-fit:contain; background:rgba(255,255,255,0.1); border-radius:10px; padding:5px; border:1px solid rgba(255,255,255,0.2);">
  `).join('');
  
  p2BattleRoster.innerHTML = p2Roster.map(p => `
    <img src="${p.spriteUrl}" title="${p.name} | Power: ${p.statTotal}" style="width:50px; height:50px; object-fit:contain; background:rgba(255,255,255,0.1); border-radius:10px; padding:5px; border:1px solid rgba(255,255,255,0.2);">
  `).join('');

  // Animate numbers
  let p1Val = 0, p2Val = 0;
  const interval = setInterval(() => {
    p1Val += Math.ceil(p1Total / 30);
    p2Val += Math.ceil(p2Total / 30);
    if(p1Val >= p1Total) p1Val = p1Total;
    if(p2Val >= p2Total) p2Val = p2Total;
    
    p1BattleScore.textContent = p1Val;
    p2BattleScore.textContent = p2Val;
    
    if(p1Val === p1Total && p2Val === p2Total) {
      clearInterval(interval);
      if (p1Total > p2Total) {
        battleWinner.textContent = "🏆 Player 1 Wins!";
        battleWinner.style.color = "var(--p1-color)";
      } else if (p2Total > p1Total) {
        battleWinner.textContent = "🏆 Player 2 Wins!";
        battleWinner.style.color = "var(--p2-color)";
      } else {
        battleWinner.textContent = "🤝 It's a Tie!";
        battleWinner.style.color = "#ccc";
      }
    }
  }, 50);
}

btnRestart.addEventListener('click', () => {
  battleScreen.classList.add('hidden');
  document.getElementById('setup-screen').classList.remove('hidden');
  p1RosterList.innerHTML = '';
  p2RosterList.innerHTML = '';
  document.querySelector('.timer-section span').style.display = 'inline';
  btnPass.style.display = 'inline-block';
});

// --- Gallery Logic ---
const btnGallery = document.querySelector('.btn-gallery');
const galleryScreen = document.getElementById('gallery-screen');
const btnCloseGallery = document.getElementById('btn-close-gallery');
const galleryContent = document.getElementById('gallery-content');

let galleryLoaded = false;

btnGallery.addEventListener('click', () => {
  setupScreen.classList.add('hidden');
  galleryScreen.classList.remove('hidden');
  if (!galleryLoaded) {
    loadGallery();
  }
});

btnCloseGallery.addEventListener('click', () => {
  galleryScreen.classList.add('hidden');
  setupScreen.classList.remove('hidden');
});

async function loadGallery() {
  galleryContent.innerHTML = '<div class="loading-spinner" style="display:flex; justify-content:center; align-items:center; height:200px; color:var(--text-secondary); font-size:1.2rem;">Booting Pokédex Data for 1025 Pokémon...</div>';
  
  const query = `
    query {
      pokemon_v2_pokemon(limit: 1025, order_by: {id: asc}) {
        id
        name
        base_experience
        pokemon_v2_pokemonstats {
          base_stat
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  `;
  
  try {
    const res = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const json = await res.json();
    const pokemons = json.data.pokemon_v2_pokemon;
    
    galleryContent.innerHTML = '';
    
    // Inject Trainers Section cleanly
    const tSection = document.createElement('div');
    tSection.className = 'region-section';
    tSection.innerHTML = `
        <br/><h2 style="color:var(--accent-gold); border-bottom: 2px solid var(--panel-border); padding-bottom: 10px; margin-bottom: 15px; font-family:'Outfit';">Trainers Region (#T1 - #T50)</h2>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-bottom: 30px;">
          ${trainersData.map(poke => {
            const types = poke.types.map(t => t.type.name);
            const typeHtml = types.map(t => `<span class="poke-type ${getTypeClass(t)}">${t}</span>`).join('');
            
            return `
              <div class="poke-card" style="padding:10px; min-height:140px; display:flex; flex-direction:column; align-items:center;">
                <img src="${poke.sprites.front_default}" alt="${poke.name}" loading="lazy" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 5px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));"/>
                <div class="poke-name" style="font-size: 0.9rem; font-weight:700; text-transform:capitalize; text-align:center;">${poke.name.replace('-', ' ')}</div>
                <div class="poke-types" style="margin-top: 5px; display:flex; gap:5px; flex-wrap:wrap; justify-content:center; margin-bottom: 5px;">${typeHtml}</div>
                ${getStatBarsHtml(poke.stats)}
              </div>
            `;
          }).join('')}
        </div>
        <h2 style="color:var(--accent-gold); border-bottom: 2px solid var(--panel-border); padding-bottom: 10px; margin-bottom: 15px; font-family:'Outfit';">Healers Region (#H1 - #H10)</h2>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px;">
          ${healersData.map(poke => {
            const types = poke.types.map(t => t.type.name);
            const typeHtml = types.map(t => `<span class="poke-type ${getTypeClass(t)}">${t}</span>`).join('');
            
            return `
              <div class="poke-card" style="padding:10px; display:flex; flex-direction:column; align-items:center;">
                <img src="${poke.sprites.front_default}" alt="${poke.name}" loading="lazy" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 5px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));"/>
                <div class="poke-name" style="font-size: 0.9rem; font-weight:700; text-transform:capitalize; text-align:center;">${poke.name.replace('-', ' ')}</div>
                <div class="poke-types" style="margin-top: 5px; display:flex; gap:5px; flex-wrap:wrap; justify-content:center; margin-bottom: 5px;">${typeHtml}</div>
                ${getStatBarsHtml(poke.stats)}
              </div>
            `;
          }).join('')}
        </div>
      `;
    galleryContent.appendChild(tSection);

    // For each pokemon region, create a section
    Object.keys(regionRanges).forEach(region => {
      if(region === 'All') return;
      
      const bounds = regionRanges[region];
      const regionPokemons = pokemons.filter(p => p.id >= bounds.start && p.id <= bounds.end);
      if(regionPokemons.length === 0) return;
      
      const section = document.createElement('div');
      section.className = 'region-section';
      
      section.innerHTML = `
        <h2 style="color:var(--accent-gold); border-bottom: 2px solid var(--panel-border); padding-bottom: 10px; margin-bottom: 15px; font-family:'Outfit';">${region} Region (#${bounds.start} - #${bounds.end})</h2>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px;">
          ${regionPokemons.map(poke => {
            const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`;
            const types = poke.pokemon_v2_pokemontypes.map(t => t.pokemon_v2_type.name);
            const typeHtml = types.map(t => `<span class="poke-type ${getTypeClass(t)}">${t}</span>`).join('');
            const stats = poke.pokemon_v2_pokemonstats;
            const statTotal = stats ? stats.reduce((acc, s) => acc + s.base_stat, 0) : '???';
            
            return `
              <div class="poke-card" style="padding:10px; display:flex; flex-direction:column; align-items:center;">
                <img src="${spriteUrl}" alt="${poke.name}" loading="lazy" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 5px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));"/>
                <div class="poke-name" style="font-size: 0.9rem; font-weight:700; text-transform:capitalize; text-align:center;">${poke.name.replace('-', ' ')}</div>
                <div class="poke-types" style="margin-top: 5px; display:flex; gap:5px; flex-wrap:wrap; justify-content:center;">${typeHtml}</div>
                ${getStatBarsHtml(poke.pokemon_v2_pokemonstats)}
              </div>
            `;
          }).join('')}
        </div>
      `;
      galleryContent.appendChild(section);
    });
    galleryLoaded = true;
  } catch (err) {
    console.error(err);
    galleryContent.innerHTML = '<div class="loading-spinner" style="text-align:center; color:red;">Error loading Pokedex DB. Please try again.</div>';
  }
}

// Init
initRolesUI();
