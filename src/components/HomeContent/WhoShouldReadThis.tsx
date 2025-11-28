import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // Reusing the same styles

export default function WhoShouldReadThis() {
  return (
    <section className={clsx(styles.section)}> {/* Using default section style */}
      <div className={styles.container}>
        <h2 className={styles.title}>Who Should Read This?</h2>
        <p className={clsx(styles.subtitle, styles.narrowSubtitle)}>This book is designed for:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Aspiring Roboticists and AI Engineers</li>
          <li className={styles.listItem}>Students and Professionals interested in Physical AI, Humanoid Robotics, and Embodied Intelligence</li>
          <li className={styles.listItem}>Developers looking to integrate Large Language Models (LLMs) with robotic systems</li>
          <li className={styles.listItem}>Researchers and enthusiasts eager to bridge the gap between simulation and real-world robot deployment</li>
        </ul>
        <h2 className={styles.title}>Prerequisites</h2>
        <p className={clsx(styles.subtitle, styles.narrowSubtitle)}>To get the most out of this course, a basic understanding of programming (Python preferred) and fundamental AI/ML concepts is recommended. Familiarity with Linux environments will also be beneficial.</p>
      </div>
    </section>
  );
}
