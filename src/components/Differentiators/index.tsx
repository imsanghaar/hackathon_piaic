import React from 'react';
import styles from './styles.module.css';

const differentiatorsData = [
  {
    icon: '💡', // Placeholder for actual icon
    title: 'Co-Learning Philosophy',
    description: 'Learn alongside AI agents. Not just using AI as a tool, but co-creating where both human and AI learn together.',
    isPopular: true,
  },
  {
    icon: '🗣️', // Placeholder for actual icon
    title: 'Dual Language Mastery',
    description: 'Python for reasoning & intelligence, TypeScript for interaction & UI. Master the bilingual AI-native stack.',
    isPopular: false,
  },
  {
    icon: '📝', // Placeholder for actual icon
    title: 'Spec-Driven Development',
    description: 'Write specifications that both humans and AI understand. Specs become executable blueprints for intelligent systems.',
    isPopular: false,
  },
  {
    icon: '🤖', // Placeholder for actual icon
    title: 'Agentic AI Systems',
    description: 'Build with OpenAI Agents SDK and Google ADK. Create agents that reason, act, and collaborate autonomously.',
    isPopular: false,
  },
  {
    icon: '⚙️', // Placeholder for actual icon
    title: 'Production-Ready Architecture',
    description: 'Cloud-native deployment with Docker, Kubernetes, Dapr, and Ray. Scalable, secure, fault-tolerant systems.',
    isPopular: false,
  },
  {
    icon: '🗺️', // Placeholder for actual icon
    title: 'Complete Learning Journey',
    description: '46 comprehensive chapters from programming basics to deploying enterprise agentic AI systems in production.',
    isPopular: true,
  },
];

function DifferentiatorCard({ data }) {
  return (
    <div className={styles.card}>
      {data.isPopular && <div className={styles.popularBanner}>MOST POPULAR</div>}
      <div className={styles.cardIcon}>{data.icon}</div>
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <p className={styles.cardDescription}>{data.description}</p>
    </div>
  );
}

export default function Differentiators(): JSX.Element {
  return (
    <section className={styles.differentiatorsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What Makes This Book Different</h2>
        <p className={styles.sectionSubtitle}>
          A comprehensive, production-focused approach to co-learning with AI in the spec-driven way.
        </p>
        <div className={styles.cardGrid}>
          {differentiatorsData.map((data, index) => (
            <DifferentiatorCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
