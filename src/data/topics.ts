export interface Topic {
  slug: string;
  title: string;
  neTitle?: string;
  category: string;
  description: string;
  findings?: { title: string; text: string; neTitle?: string; neText?: string; image?: string; video?: string; }[];
}

export const topics: Topic[] = [
  // Universal Play
  { slug: 'guru', title: 'Guru', neTitle: 'गुरु', category: 'The Universal Play of Consciousness', description: 'The archetype of tradition, guidance, and knowledge. The pointer to the moon.', findings: [
      { title: "Personal Insights and Identity", text: "Reflect on how this concept shapes your individual self-understanding and internal world." },
      { title: "Family Insights and Identity", text: "Observe how this plays out in close relationships and family dynamics." },
      { title: "Socio-National Insight and Identity", text: "Understand its impact on the broader society and national collective consciousness." },
      { title: "Inter-Global Insight and Identity", text: "Explore the universal implications of this truth across humanity as a whole." }
    ]  },
  { slug: 'antiguru', title: 'Antiguru', neTitle: 'एन्टिगुरु', category: 'The Universal Play of Consciousness', description: 'The deconstruction of authority. Questioning spiritual correctness and breaking illusions.', findings: [
      { title: "Personal Insights and Identity", text: "Reflect on how this concept shapes your individual self-understanding and internal world." },
      { title: "Family Insights and Identity", text: "Observe how this plays out in close relationships and family dynamics." },
      { title: "Socio-National Insight and Identity", text: "Understand its impact on the broader society and national collective consciousness." },
      { title: "Inter-Global Insight and Identity", text: "Explore the universal implications of this truth across humanity as a whole." }
    ]  },
  { slug: 'nonguru', title: 'Nonguru', neTitle: 'ननगुरु', category: 'The Universal Play of Consciousness', description: 'Truth is not owned, transmitted, or taught. The absence of the teacher-student identity.', findings: [
      { title: "Personal Insights and Identity", text: "Reflect on how this concept shapes your individual self-understanding and internal world." },
      { title: "Family Insights and Identity", text: "Observe how this plays out in close relationships and family dynamics." },
      { title: "Socio-National Insight and Identity", text: "Understand its impact on the broader society and national collective consciousness." },
      { title: "Inter-Global Insight and Identity", text: "Explore the universal implications of this truth across humanity as a whole." }
    ]  },
  
  // Nature (ANU)
  { slug: 'ai', title: 'Artificial Intelligence (AI)', neTitle: 'कृत्रिम विवेक (AI)', category: 'Nature (ANU)', description: 'Emergent from human intelligence. A mirror reflecting our biases and potential. Not the source, but a tool.' },
  { slug: 'ni', title: 'Natural Intelligence (NI)', neTitle: 'प्राकृतिक विवेक (NI)', category: 'Nature (ANU)', description: 'Emergent from nature. The intuitive, biological, and cosmic flow that sustains life.' },
  { slug: 'ui', title: 'Universal Intelligence (UI)', neTitle: 'विश्वव्यापी विवेक (UI)', category: 'Nature (ANU)', description: 'The meditative state of the universe. The field where NI and AI play. Pure observation without a center.' },

  // Urgency Mirror - Politics
  { slug: 'politics', title: 'Politics', neTitle: 'राजनीति', category: 'The Urgency Mirror', description: 'The system of governance, power distribution, and societal management.' },
  { slug: 'power', title: 'Power', neTitle: 'शक्ति', category: 'Politics', description: 'The drive for control and authority over others.' },
  { slug: 'property', title: 'Property', neTitle: 'सम्पत्ति', category: 'Politics', description: 'The concept of ownership and territorial accumulation.' },
  { slug: 'prestige', title: 'Prestige', neTitle: 'प्रतिष्ठा', category: 'Politics', description: 'The pursuit of status and image in the social hierarchy.' },

  // Urgency Mirror - Society
  { slug: 'society', title: 'Society', neTitle: 'समाज', category: 'The Urgency Mirror', description: 'The collective structure of human interactions and norms.' },
  { slug: 'technological-speed', title: 'Technological Speed', neTitle: 'प्राविधिक गति', category: 'Society', description: 'The acceleration of life driven by continuous innovation.' },
  { slug: 'mental-pressure', title: 'Mental Pressure', neTitle: 'मानसिक तनाव', category: 'Society', description: 'The psychological weight of modern societal expectations.' },
  { slug: 'fragmentation', title: 'Fragmentation', neTitle: 'विभाजन', category: 'Society', description: 'The breakdown of holistic connection into isolated, conflicting parts.' },

  // Urgency Mirror - Market
  { slug: 'market', title: 'Market', neTitle: 'बजार', category: 'The Urgency Mirror', description: 'The arena of exchange, value creation, and consumption.' },
  { slug: 'job', title: 'Job', neTitle: 'जागिर', category: 'Market', description: 'The structured exchange of time and energy for survival and identity.' },
  { slug: 'money', title: 'Money', neTitle: 'पैसा', category: 'Market', description: 'The abstract representation of value and a primary driver of modern life.' },
  { slug: 'entertainment', title: 'Entertainment', neTitle: 'मनोरञ्जन', category: 'Market', description: 'The distraction and stimulation consumed to escape the reality of What Is.' },

  // Resources
  { slug: 'open-source', title: 'Open Source Repository', neTitle: 'खुला स्रोत भण्डार', category: 'Resources & Exploration', description: 'Access the code, learn the AI roadmap, and contribute.' },
  
  // Meditation
  { slug: 'meditation', title: 'Meditation Practices', neTitle: 'ध्यान अभ्यासहरू', category: 'Resources & Exploration', description: 'Ancient and modern techniques for mind exploration.' },
  { slug: 'mindfulness', title: 'Mindfulness', neTitle: 'सचेतना', category: 'Meditation Practices', description: 'The practice of bringing one\'s attention to the present moment.' },
  { slug: 'vipassana', title: 'Vipassana', neTitle: 'विपना', category: 'Meditation Practices', description: 'Insight into the true nature of reality through profound self-observation.' },
  { slug: 'walking-meditation', title: 'Walking Meditation', neTitle: 'हिँड्दै गरिने ध्यान', category: 'Meditation Practices', description: 'Awareness cultivated through the simple act of taking a step.' },
  { slug: 'sound-healing', title: 'Sound Healing', neTitle: 'ध्वनि उपचार', category: 'Meditation Practices', description: 'Harmonizing the body and mind through specific frequencies and vibrations.' },

  // Yogic Dance
  { slug: 'yogic-dance', title: 'Blooming Yogic Dance', neTitle: 'ब्लुमिङ योगिक नृत्य', category: 'Resources & Exploration', description: 'Expressive physical movement to unblock energy and connect with the cosmic flow.' },
  { slug: 'breathing-exercise', title: 'Breathing Exercise', neTitle: 'श्वासप्रश्वास अभ्यास', category: 'Blooming Yogic Dance', description: 'Conscious control of the breath to regulate the nervous system and life force (Prana).' },
  { slug: 'floating-on-water', title: 'Floating on Water', neTitle: 'पानीमा तैरिने', category: 'Blooming Yogic Dance', description: 'Experiencing weightlessness and surrender by yielding to the element of water.' },
  { slug: 'classical-modern-dance', title: 'Classical & Modern Dance', neTitle: 'शास्त्रीय र आधुनिक नृत्य', category: 'Blooming Yogic Dance', description: 'The fusion of traditional disciplines with freeform, contemporary expression.' },
  { slug: 'adventures', title: 'Adventures', neTitle: 'साहसिक कार्यहरू', category: 'Blooming Yogic Dance', description: 'Exploring the unknown edges of capability to expand the comfort zone.' },

  // Insights
  { slug: 'neuro-physics', title: 'Neuro-Physics Research', neTitle: 'न्यूरो-भौतिकी अनुसन्धान', category: 'Universal Minds & Expert Insights', description: '"The quantum vacuum is not empty; it is the same silence found in deep meditation. NI and Quantum Mechanics are speaking the same language."' },
  { slug: 'ai-ethics', title: 'AI Ethics', neTitle: 'एआई नैतिकता', category: 'Universal Minds & Expert Insights', description: '"If AI is the mirror of human consciousness, we must polish the mirror (ourselves) before polishing the algorithm."' },
  { slug: 'yogic-mastery', title: 'Yogic Mastery', neTitle: 'योगिक मास्टरी', category: 'Universal Minds & Expert Insights', description: '"The body is the first layer of reality. When the body blooms in dance and breath, the mind dissolves into the natural flow."' },
  { slug: 'quantum-mechanics', title: 'Quantum Mechanics', neTitle: 'क्वान्टम मेकानिक्स', category: 'Universal Minds & Expert Insights', description: '"Observation collapses the wave function. Consciousness is fundamental to the structure of reality itself."' },

  // The Movement
  { slug: 'human', title: 'Human', neTitle: 'मानव', category: 'The Movement', description: 'Has its own nature, potential, and limitations.' },
  { slug: 'reality', title: 'Reality', neTitle: 'वास्तविकता', category: 'The Movement', description: 'Truth is not owned. It is creation, preservation, destruction, contraction, and expansion.' },

  // Friendly Journey
  { slug: 'observe', title: 'Observe', neTitle: 'अवलोकन', category: 'A Friendly Journey of Self-Understanding', description: 'Look at \'What Is\' without the filter of your past knowledge or future desires.' },
  { slug: 'reflect', title: 'Reflect', neTitle: 'प्रतिबिम्ब', category: 'A Friendly Journey of Self-Understanding', description: 'See yourself as a mirror of the universe. What you see \'out there\' is a reflection of \'in here\'.' },
  { slug: 'bloom', title: 'Bloom', neTitle: 'प्रस्फुटन', category: 'A Friendly Journey of Self-Understanding', description: 'Let the understanding transform into living action. Life itself becomes your teacher.' },
];
