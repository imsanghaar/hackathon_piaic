import React from 'react';
import styles from './styles.module.css';

const maturityData = [
  {
    level: 1,
    title: 'AI Awareness',
    metrics: 'Experimenting',
    description: 'Individual developers experimenting with AI coding tools. Early AI-Assisted Development.',
    approach: 'Approach: AI-Assisted (Individual)',
    focus: null,
  },
  {
    level: 2,
    title: 'AI Adoption',
    metrics: 'Standardizing',
    description: 'Organization-wide adoption with governance. Established guidelines and security policies.',
    approach: 'Approach: AI-Assisted (Team)',
    focus: null,
  },
  {
    level: 3,
    title: 'AI Integration',
    metrics: 'Transforming Workflows',
    description: 'AI-Driven Development practices. Specs become living documentation. Workflows redesigned around AI collaboration.',
    approach: 'Approach: AI-Driven (Workflow)',
    focus: 'BEGIN FOCUS',
  },
  {
    level: 4,
    title: 'AI-Native Products',
    metrics: 'Building Intelligence',
    description: 'Products where AI/LLMs are core components. Agent orchestration, natural language interfaces, intelligent systems.',
    approach: 'Approach: AI-Native (Product)',
    focus: 'MATURE FOCUS',
  },
  {
    level: 5,
    title: 'AI-First Enterprise',
    metrics: 'Living in the Future',
    description: 'Entire organization AI-Native. Custom models, self-improving systems. AI embedded in every aspect.',
    approach: 'Approach: AI-Native (Enterprise)',
    focus: null,
  },
];

function MaturityCard({ data }) {
  return (
    <div className={styles.card}>
      {data.focus && <div className={styles.focusBanner}>{data.focus}</div>}
      <div className={styles.levelNumber}>{data.level}</div>
      <h3 className={styles.levelTitle}>{data.title}</h3>
      <div className={styles.levelMetrics}>{data.metrics}</div>
      <p className={styles.levelDescription}>{data.description}</p>
      <div className={styles.levelApproach}>{data.approach}</div>
    </div>
  );
}

export default function MaturityLevels(): JSX.Element {
  return (
    <section className={styles.maturityLevelsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Organizational AI Maturity Levels</h2>
        <p className={styles.sectionSubtitle}>
          Where does your organization stand? Understanding these levels helps you chart your path forward.
        </p>
        <div className={styles.cardGrid}>
          {maturityData.map((data, index) => (
            <MaturityCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
