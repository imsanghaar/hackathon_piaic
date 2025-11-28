import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const audienceCards = [
  {
    icon: '🎓',
    title: 'Students & Aspiring Roboticists',
    description: 'Begin your journey into Physical AI and Humanoid Robotics with comprehensive, hands-on learning.',
  },
  {
    icon: '🤖',
    title: 'AI Engineers',
    description: 'Expand your expertise into embodied intelligence and learn to deploy AI in the physical world.',
  },
  {
    icon: '💻',
    title: 'Developers',
    description: 'Integrate Large Language Models with robotic systems and build conversational AI robots.',
  },
  {
    icon: '🔬',
    title: 'Researchers',
    description: 'Bridge the gap between simulation and real-world deployment with cutting-edge tools and techniques.',
  },
  {
    icon: '🚀',
    title: 'Entrepreneurs',
    description: 'Build the next generation of robotic products and services with Physical AI capabilities.',
  },
  {
    icon: '🏭',
    title: 'Industry Professionals',
    description: 'Upgrade your skills for the robotics revolution transforming manufacturing and automation.',
  },
];

export default function WhoShouldReadThis() {
  return (
    <section className={clsx(styles.section)}>
      <div className={styles.container}>
        <h2 className={styles.title}>Who Should Read This?</h2>
        <p className={clsx(styles.subtitle, styles.narrowSubtitle)}>
          This book is designed for diverse learners eager to master Physical AI and Humanoid Robotics
        </p>

        <div className={styles.cardsGrid}>
          {audienceCards.map((card, index) => (
            <div key={index} className={styles.audienceCard}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.prerequisitesBox}>
          <h3 className={styles.prerequisitesTitle}>📋 Prerequisites</h3>
          <p className={styles.prerequisitesText}>
            To get the most out of this course, a basic understanding of <strong>programming (Python preferred)</strong> and
            fundamental <strong>AI/ML concepts</strong> is recommended. Familiarity with <strong>Linux environments</strong> will
            also be beneficial.
          </p>
        </div>
      </div>
    </section>
  );
}
