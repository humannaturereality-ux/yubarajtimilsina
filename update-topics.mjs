import fs from 'fs';
import path from 'path';

const topicsPath = path.join(process.cwd(), 'src/data/topics.ts');
let content = fs.readFileSync(topicsPath, 'utf8');

const customFindings = `findings: [
      { title: "Personal Insights and Identity", text: "Reflect on how this concept shapes your individual self-understanding and internal world." },
      { title: "Family Insights and Identity", text: "Observe how this plays out in close relationships and family dynamics." },
      { title: "Socio-National Insight and Identity", text: "Understand its impact on the broader society and national collective consciousness." },
      { title: "Inter-Global Insight and Identity", text: "Explore the universal implications of this truth across humanity as a whole." }
    ]`;

// Add findings to 'guru', 'antiguru', and 'nonguru'
const slugsToUpdate = ['guru', 'antiguru', 'nonguru'];

slugsToUpdate.forEach(slug => {
    const regex = new RegExp(`({ slug: '${slug}', [^}]+)( })`, 'g');
    content = content.replace(regex, `$1, ${customFindings} $2`);
});

fs.writeFileSync(topicsPath, content, 'utf8');
console.log('Successfully added custom findings to GAN topics.');
