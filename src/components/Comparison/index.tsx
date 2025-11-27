import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const traditionalPoints = [
  { text: 'Explicit Instruction: You write the logic.', icon: '✍️' },
  { text: 'Instruction-Based: Tell computers exactly what to do with precise syntax.', icon: '📜' },
  { text: 'Safe Coding: Developer owns every line manually.', icon: '🧑‍💻' },
  { text: 'Documentation as Afterthought: Specs are static, contracts written after point facts.', icon: '📄' },
  { text: 'Linear Learning: Learn syntax – build simple projects – Slowly scale.', icon: '📈' },
  { text: 'Code-First: Focus on implementation details from day one.', icon: '💻' },
];

const aiNativePoints = [
  { text: 'Intent-Based: Describe what you want, AI reasons how to build it.', icon: '💡' },
  { text: 'Co-Learning Partnership: You teach AI, and AI teaches you through iteration.', icon: '🤝' },
  { text: 'Specs as Living Blueprints: Specifications are dynamic, code, tests, and documentation.', icon: ' blueprint' },
  { text: 'Production First Learning: Build real agents, systems that stay up to date.', icon: '🚀' },
  { text: 'Architecture First: Design intelligent collaboration, not just code.', icon: '🏛️' },
];

export default function Comparison(): JSX.Element {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <h2 className={styles.mainTitle}>From Automation to Intelligence</h2>
        <h2 className={styles.mainSubtitle}>From Coding to Co-Creating</h2>
        <p className={styles.sectionDescription}>
          AI-native development is not about replacing developers—it's about amplifying intelligence. Learn to collaborate with reasoning entities that learn with you.
        </p>

        <div className={styles.comparisonContainer}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>TRADITIONAL DEVELOPMENT</h3>
            <p className={styles.columnSubtitle}>Tell computers exactly what to do with precise syntax.</p>
            <ul className={styles.columnList}>
              {traditionalPoints.map((point, index) => (
                <li key={index}>
                  <span>{point.icon}</span> {point.text}
                </li>
              ))}
            </ul>
          </div>

          <div className={clsx(styles.column)}>
            <div className={styles.recommendedBanner}>RECOMMENDED</div>
            <h3 className={styles.columnTitle}>AI-NATIVE WAY</h3>
            <p className={styles.columnSubtitle}>Your intelligent co-pilot</p>
            <ul className={styles.columnList}>
              {aiNativePoints.map((point, index) => (
                <li key={index}>
                  <span>{point.icon}</span> {point.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>Ready to Co-Learn with AI?</p>
          <Link to="/docs/intro" className={styles.ctaButton}>
            Begin Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}