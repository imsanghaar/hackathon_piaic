import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HackathonInfo() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Hackathon: Create a Textbook for Teaching Physical AI & Humanoid Robotics</h2>
                <p className={styles.subtitle}>
                    The future of work will be a partnership between people, intelligent agents, and robots.
                    Join us to build the educational foundation for this future.
                </p>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>The Mission</h3>
                        <p>
                            We want you to write a textbook to teach a course in Physical AI & Humanoid Robotics.
                            This shift won't necessarily eliminate jobs but will change what humans do, leading to a massive demand for new skills.
                        </p>
                        <p>
                            <strong>Excel and Launch Your Journey:</strong> Perform well, and you may be invited to join the Panaversity core team
                            or potentially step into the role of a startup founder.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Core Requirements</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>AI/Spec-Driven Book Creation:</strong> Write using Docusaurus, Spec-Kit Plus, and Claude Code.</li>
                            <li className={styles.listItem}><strong>Integrated RAG Chatbot:</strong> Build a chatbot using OpenAI Agents, FastAPI, and Qdrant.</li>
                            <li className={styles.listItem}><strong>Bonus Points (50 each):</strong>
                                <ul>
                                    <li>Reusable intelligence via Claude Code Subagents.</li>
                                    <li>Signup/Signin with Better-Auth & Personalization.</li>
                                    <li>Chapter-level Content Personalization.</li>
                                    <li>Urdu Translation Feature.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={clsx(styles.card, styles.timeline)}>
                    <h3 className={styles.cardTitle}>Timeline & Submission</h3>
                    <div className={styles.timelineItem}>
                        <strong>Submission Deadline:</strong> Sunday, Nov 30, 2025 at 06:00 PM
                    </div>
                    <div className={styles.timelineItem}>
                        <strong>Live Presentations:</strong> Sunday, Nov 30, 2025 starting at 6:00 PM on Zoom
                    </div>
                    <div className={styles.timelineItem}>
                        <strong>Zoom Details:</strong> Meeting ID: 849 7684 7088 | Passcode: 305850
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <a href="https://forms.gle/CQsSEGM3GeCrL43c8" className={styles.button} target="_blank" rel="noopener noreferrer">
                            Submit Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
