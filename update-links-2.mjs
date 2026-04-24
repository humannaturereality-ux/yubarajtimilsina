import fs from 'fs';
import path from 'path';

const indexPath = path.join(process.cwd(), 'src/pages/index.astro');
let content = fs.readFileSync(indexPath, 'utf-8');

// Expert Insights
content = content.replace(
  /class="p-6 rounded-lg bg-black\/40 border border-white\/10 hover:border-cyan-500\/50 transition-colors"/g,
  'class="p-6 rounded-lg bg-black/40 border border-white/10 hover:border-cyan-500/50 transition-colors cursor-pointer" onclick="window.location.href=\'/explore/neuro-physics\'"'
);
content = content.replace(
  /class="p-6 rounded-lg bg-black\/40 border border-white\/10 hover:border-purple-500\/50 transition-colors"/g,
  'class="p-6 rounded-lg bg-black/40 border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer" onclick="window.location.href=\'/explore/ai-ethics\'"'
);
content = content.replace(
  /class="p-6 rounded-lg bg-black\/40 border border-white\/10 hover:border-yellow-500\/50 transition-colors"/g,
  'class="p-6 rounded-lg bg-black/40 border border-white/10 hover:border-yellow-500/50 transition-colors cursor-pointer" onclick="window.location.href=\'/explore/yogic-mastery\'"'
);
content = content.replace(
  /class="p-6 rounded-lg bg-black\/40 border border-white\/10 hover:border-teal-500\/50 transition-colors"/g,
  'class="p-6 rounded-lg bg-black/40 border border-white/10 hover:border-teal-500/50 transition-colors cursor-pointer" onclick="window.location.href=\'/explore/quantum-mechanics\'"'
);

// The Movement
content = content.replace(
  /class="bg-white\/5 p-8 rounded-2xl border border-white\/10 hover:border-cyan-500\/30 transition-all"/g,
  'class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer" onclick="window.location.href=\'/explore/human\'"'
);
content = content.replace(
  /class="bg-white\/5 p-8 rounded-2xl border border-white\/10 hover:border-purple-500\/30 transition-all"/g,
  'class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer" onclick="window.location.href=\'/explore/reality\'"'
);

// Friendly Journey
content = content.replace(
  /class="group p-8 bg-white\/5 border border-white\/10 rounded-3xl hover:border-cyan-500\/50 transition-all hover:bg-cyan-900\/10 cursor-help"/g,
  'class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all hover:bg-cyan-900/10 cursor-pointer" onclick="window.location.href=\'/explore/observe\'"'
);
content = content.replace(
  /class="group p-8 bg-white\/5 border border-white\/10 rounded-3xl hover:border-purple-500\/50 transition-all hover:bg-purple-900\/10 cursor-help"/g,
  'class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/50 transition-all hover:bg-purple-900/10 cursor-pointer" onclick="window.location.href=\'/explore/reflect\'"'
);
content = content.replace(
  /class="group p-8 bg-white\/5 border border-white\/10 rounded-3xl hover:border-green-500\/50 transition-all hover:bg-green-900\/10 cursor-help"/g,
  'class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-green-500/50 transition-all hover:bg-green-900/10 cursor-pointer" onclick="window.location.href=\'/explore/bloom\'"'
);

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully added click events for insights, movement, and friendly journey cards!');
