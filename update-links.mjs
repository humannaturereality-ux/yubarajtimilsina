import fs from 'fs';
import path from 'path';

const indexPath = path.join(process.cwd(), 'src/pages/index.astro');
let content = fs.readFileSync(indexPath, 'utf-8');

const replacements = [
  // GAN
  { search: /href="#gan"([^>]*data-en="Nonguru")/g, replace: 'href="/explore/nonguru"$1' },
  { search: /href="#gan"([^>]*data-en="Guru")/g, replace: 'href="/explore/guru"$1' },
  { search: /href="#gan"([^>]*data-en="Antiguru")/g, replace: 'href="/explore/antiguru"$1' },

  // ANU
  { search: /href="#anu"([^>]*data-en="Universal Intelligence")/g, replace: 'href="/explore/ui"$1' },
  { search: /href="#anu"([^>]*data-en="Artificial Intelligence")/g, replace: 'href="/explore/ai"$1' },
  { search: /href="#anu"([^>]*data-en="Natural Intelligence")/g, replace: 'href="/explore/ni"$1' },

  { search: /href="#anu"([^>]*data-en="Universal Intelligence \(UI\)")/g, replace: 'href="/explore/ui"$1' },
  { search: /href="#anu"([^>]*data-en="Artificial Intelligence \(AI\)")/g, replace: 'href="/explore/ai"$1' },
  { search: /href="#anu"([^>]*data-en="Natural Intelligence \(NI\)")/g, replace: 'href="/explore/ni"$1' },

  // Mirror
  { search: /href="#"([^>]*data-en="Power")/g, replace: 'href="/explore/power"$1' },
  { search: /href="#"([^>]*data-en="Property")/g, replace: 'href="/explore/property"$1' },
  { search: /href="#"([^>]*data-en="Prestige")/g, replace: 'href="/explore/prestige"$1' },
  { search: /href="#"([^>]*data-en="Technological Speed")/g, replace: 'href="/explore/technological-speed"$1' },
  { search: /href="#"([^>]*data-en="Mental Pressure")/g, replace: 'href="/explore/mental-pressure"$1' },
  { search: /href="#"([^>]*data-en="Fragmentation")/g, replace: 'href="/explore/fragmentation"$1' },
  { search: /href="#"([^>]*data-en="Job")/g, replace: 'href="/explore/job"$1' },
  { search: /href="#"([^>]*data-en="Money")/g, replace: 'href="/explore/money"$1' },
  { search: /href="#"([^>]*data-en="Entertainment")/g, replace: 'href="/explore/entertainment"$1' },

  // Resources
  { search: /href="#"([^>]*data-en="Mindfulness")/g, replace: 'href="/explore/mindfulness"$1' },
  { search: /href="#"([^>]*data-en="Vipassana")/g, replace: 'href="/explore/vipassana"$1' },
  { search: /href="#"([^>]*data-en="Walking Meditation")/g, replace: 'href="/explore/walking-meditation"$1' },
  { search: /href="#"([^>]*data-en="Sound Healing")/g, replace: 'href="/explore/sound-healing"$1' },
  { search: /href="#"([^>]*data-en="Breathing Exercise")/g, replace: 'href="/explore/breathing-exercise"$1' },
  { search: /href="#"([^>]*data-en="Floating on Water")/g, replace: 'href="/explore/floating-on-water"$1' },
  { search: /href="#"([^>]*data-en="Classical & Modern Dance")/g, replace: 'href="/explore/classical-modern-dance"$1' },
  { search: /href="#"([^>]*data-en="Adventures")/g, replace: 'href="/explore/adventures"$1' },
];

for (const r of replacements) {
  content = content.replace(r.search, r.replace);
}

// Replace the main headings to make them clickable too, if desired
// But let's stick to the subtopics mostly

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully updated index.astro links!');
