import React from 'react';
import styles from './styles.module.css';

const spectrumData = [
  {
    icon: '✨',
    title: 'AI Assisted',
    subtitle: 'AI is a Helper',
    description: 'AI enhances your productivity with code completion, debugging assistance, and documentation generation.',
    examples: [
      'Code completion & suggestions',
      'Bug detection & debugging',
      'Documentation generation',
    ],
    isFocus: false,
    exampleText: 'Example: Using Copilot to build a React website faster',
  },
  {
    icon: '🚀',
    title: 'AI Driven',
    subtitle: 'AI is a Co-Creator',
    description: 'AI generates significant code from specifications. You act as an architect, director, and reviewer.',
    examples: [
      'Code generation from specs',
      'Automated testing & optimization',
      'Architecture from requirements',
    ],
    isFocus: true,
    exampleText: 'Example: Writing a spec for a REST API, AI generates a complete Flask/FastAPI backend',
  },
  {
    icon: '🧠',
    title: 'AI Native',
    subtitle: 'AI IS the Software',
    description: 'Applications architected around AI capabilities. LLMs and agents are core functional components.',
    examples: [
      'Natural language interfaces',
      'Intelligent automation & reasoning',
      'Agent orchestration systems',
    ],
    isFocus: true,
    exampleText: 'Example: Building a customer support agent that autonomously resolves tickets',
  },
];

function SpectrumCard({ data }) {
  return (
    <div className={styles.card}>
      {data.isFocus && <div className={styles.focusBanner}>FOCUS OF THIS BOOK</div>}
      <div className={styles.cardIcon}>{data.icon}</div>
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <p className={styles.cardDescription}>{data.description}</p>
      <ul className={styles.cardExamples}>
        {data.examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
      <div style={{marginTop: 'auto', paddingTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem'}}>
          {data.exampleText}
      </div>
    </div>
  );
}

export default function Spectrum(): JSX.Element {
  return (
    <section className={styles.spectrumSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>The AI Development Spectrum</h2>
        <p className={styles.sectionSubtitle}>
          Three distinct approaches to AI in software development. This book teaches you both AI-Driven and AI-Native development.
        </p>
        <div className={styles.cardContainer}>
          {spectrumData.map((data, index) => (
            <SpectrumCard key={index} data={data} />
          ))}
        </div>
        <div className={styles.stepper}>
          {spectrumData.map((data, index) => (
            <React.Fragment key={index}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepTitle}>{data.title}</div>
                <div className={styles.stepSubtitle}>{data.subtitle}</div>
              </div>
              {index < spectrumData.length - 1 && <div className={styles.connector}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
