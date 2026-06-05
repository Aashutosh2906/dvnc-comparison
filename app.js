// ── STATE ─────────────────────────────────────────────────
const state = {
  selectedPromptId: null,
  selectedModel: null,
};

const MODEL_LABELS = {
  chatgpt: 'ChatGPT',
  claude:  'Claude',
  gemini:  'Gemini',
};

const MODEL_TAGS = {
  chatgpt: 'GPT-4o',
  claude:  'Claude 3.5 Sonnet',
  gemini:  'Gemini 1.5 Pro',
};

const LOADING_STEPS = [
  { label: 'Initialising knowledge graph…',      pct: 12 },
  { label: 'Routing through agent pipeline…',    pct: 30 },
  { label: 'Querying domain reasoning layer…',   pct: 52 },
  { label: 'Retrieving competitor response…',    pct: 72 },
  { label: 'Running criteria evaluation…',       pct: 88 },
  { label: 'Finalising comparison…',             pct: 100 },
];

// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildPromptCards();
  bindModelButtons();
  document.getElementById('btn-compare').addEventListener('click', startComparison);
  document.getElementById('btn-restart').addEventListener('click', restart);
  document.getElementById('btn-show-table').addEventListener('click', toggleTable);
});

// ── BUILD PROMPT CARDS ────────────────────────────────────
function buildPromptCards() {
  const grid = document.getElementById('prompt-cards');
  PROMPTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="prompt-number">Prompt ${i + 1}</div>
      <div class="prompt-label-text">${p.label}</div>
      <p class="prompt-full">${p.fullText}</p>
      <div class="prompt-check">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
    `;
    card.addEventListener('click', () => selectPrompt(p.id));
    grid.appendChild(card);
  });
}

// ── PROMPT SELECTION ──────────────────────────────────────
function selectPrompt(id) {
  state.selectedPromptId = id;
  document.querySelectorAll('.prompt-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.id === id);
  });
  document.getElementById('model-row').classList.add('visible');
  checkReady();
}

// ── MODEL SELECTION ───────────────────────────────────────
function bindModelButtons() {
  document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedModel = btn.dataset.model;
      document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      checkReady();
    });
  });
}

// ── ENABLE CTA ────────────────────────────────────────────
function checkReady() {
  const btn = document.getElementById('btn-compare');
  btn.disabled = !(state.selectedPromptId && state.selectedModel);
}

// ── START COMPARISON ──────────────────────────────────────
function startComparison() {
  showStep('step-loading');
  runLoadingSequence().then(renderResults);
}

// ── LOADING SEQUENCE ──────────────────────────────────────
function runLoadingSequence() {
  return new Promise(resolve => {
    const statusEl = document.getElementById('loading-status');
    const barEl    = document.getElementById('loading-bar');
    let i = 0;

    function tick() {
      if (i >= LOADING_STEPS.length) {
        setTimeout(resolve, 400);
        return;
      }
      const step = LOADING_STEPS[i];
      statusEl.textContent = step.label;
      barEl.style.width = step.pct + '%';
      i++;
      const delay = i === LOADING_STEPS.length ? 600 : 700 + Math.random() * 400;
      setTimeout(tick, delay);
    }

    tick();
  });
}

// ── RENDER RESULTS ────────────────────────────────────────
function renderResults() {
  const prompt = PROMPTS.find(p => p.id === state.selectedPromptId);
  const model  = state.selectedModel;

  // Prompt label
  const labelEl = document.getElementById('results-prompt-label');
  labelEl.innerHTML = `<strong>Prompt</strong>${prompt.fullText}`;

  // Answers
  document.getElementById('dvnc-answer').textContent       = prompt.answers.dvnc;
  document.getElementById('competitor-answer').textContent = prompt.answers[model];

  // Competitor badge + tag
  document.getElementById('competitor-badge').textContent = MODEL_LABELS[model];
  document.getElementById('competitor-tag').textContent   = MODEL_TAGS[model];
  document.getElementById('th-competitor').textContent    = MODEL_LABELS[model];

  // Build comparison table rows
  const tbody = document.getElementById('compare-tbody');
  tbody.innerHTML = '';
  const scores = prompt.scores[model];

  CRITERIA.forEach((c, idx) => {
    const s = scores[idx];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="td-criterion">${c.label}</td>
      <td>
        <div class="td-cell">
          <span class="score-badge ${scoreClass(s.dvnc)}">${s.dvnc}</span>
          <span class="td-note">${s.dvncNote}</span>
        </div>
      </td>
      <td>
        <div class="td-cell">
          <span class="score-badge ${scoreClass(s.competitor)}">${s.competitor}</span>
          <span class="td-note">${s.competitorNote}</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Hide table on fresh results
  document.getElementById('compare-table-wrap').classList.remove('visible');
  document.getElementById('btn-show-table').classList.remove('open');

  showStep('step-results');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ── TOGGLE TABLE ──────────────────────────────────────────
function toggleTable() {
  const wrap = document.getElementById('compare-table-wrap');
  const btn  = document.getElementById('btn-show-table');
  const isOpen = wrap.classList.toggle('visible');
  btn.classList.toggle('open', isOpen);
  btn.textContent = isOpen ? '↑ Hide comparison' : '↓ View detailed comparison';
  if (isOpen) {
    setTimeout(() => wrap.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
}

// ── RESTART ───────────────────────────────────────────────
function restart() {
  state.selectedPromptId = null;
  state.selectedModel    = null;

  document.querySelectorAll('.prompt-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('model-row').classList.remove('visible');
  document.getElementById('btn-compare').disabled = true;
  document.getElementById('loading-bar').style.width = '0%';

  showStep('step-select');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── HELPERS ───────────────────────────────────────────────
function showStep(id) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function scoreClass(score) {
  const map = {
    'Very High': 'score-very-high',
    'High':      'score-high',
    'Moderate':  'score-moderate',
    'Low':       'score-low',
    'Very Low':  'score-very-low',
  };
  return map[score] || 'score-moderate';
}
