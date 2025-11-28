import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function CourseDetails() {
    return (
        <section className={clsx(styles.section, styles.sectionDark)}>
            <div className={styles.container}>
                <h2 className={styles.title}>Physical AI & Humanoid Robotics</h2>
                <p className={styles.subtitle}>
                    <em>Focus and Theme: AI Systems in the Physical World. Embodied Intelligence.</em><br />
                    <em>Goal: Bridging the gap between the digital brain and the physical body. Students apply their AI knowledge to control Humanoid Robots in simulated and real-world environments.</em>
                </p>

                <div className={styles.quarterOverview}>
                    <h3 className={styles.cardTitle} style={{ textAlign: 'center' }}>Quarter Overview</h3>
                    <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto', color: 'var(--ifm-color-emphasis-700)' }}>
                        The future of AI extends beyond digital spaces into the physical world. This capstone quarter introduces Physical AI—AI systems that function in reality and comprehend physical laws. Students learn to design, simulate, and deploy humanoid robots capable of natural human interactions using ROS 2, Gazebo, and NVIDIA Isaac.
                    </p>
                </div>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Module 1: The Robotic Nervous System (ROS 2)</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Focus:</strong> Middleware for robot control.</li>
                            <li className={styles.listItem}>ROS 2 Nodes, Topics, and Services.</li>
                            <li className={styles.listItem}>Bridging Python Agents to ROS controllers using rclpy.</li>
                            <li className={styles.listItem}>Understanding URDF (Unified Robot Description Format) for humanoids.</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Module 2: The Digital Twin (Gazebo & Unity)</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Focus:</strong> Physics simulation and environment building.</li>
                            <li className={styles.listItem}>Simulating physics, gravity, and collisions in Gazebo.</li>
                            <li className={styles.listItem}>High-fidelity rendering and human-robot interaction in Unity.</li>
                            <li className={styles.listItem}>Simulating sensors: LiDAR, Depth Cameras, and IMUs.</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Module 3: The AI-Robot Brain (NVIDIA Isaac™)</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Focus:</strong> Advanced perception and training.</li>
                            <li className={styles.listItem}>NVIDIA Isaac Sim: Photorealistic simulation and synthetic data generation.</li>
                            <li className={styles.listItem}>Isaac ROS: Hardware-accelerated VSLAM (Visual SLAM) and navigation.</li>
                            <li className={styles.listItem}>Nav2: Path planning for bipedal humanoid movement.</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Module 4: Vision-Language-Action (VLA)</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Focus:</strong> The convergence of LLMs and Robotics.</li>
                            <li className={styles.listItem}>Voice-to-Action: Using OpenAI Whisper for voice commands.</li>
                            <li className={styles.listItem}>Cognitive Planning: Using LLMs to translate natural language ("Clean the room") into a sequence of ROS 2 actions.</li>
                            <li className={styles.listItem}>Capstone Project: The Autonomous Humanoid. A final project where a simulated robot receives a voice command, plans a path, navigates obstacles, identifies an object using computer vision, and manipulates it.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
