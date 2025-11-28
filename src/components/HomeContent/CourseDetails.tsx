import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const modules = [
    {
        icon: '🤖',
        title: 'Module 1: The Robotic Nervous System (ROS 2)',
        focus: 'Middleware for robot control',
        topics: [
            'ROS 2 Nodes, Topics, and Services',
            'Bridging Python Agents to ROS controllers using rclpy',
            'Understanding URDF (Unified Robot Description Format) for humanoids',
        ],
    },
    {
        icon: '🌐',
        title: 'Module 2: The Digital Twin (Gazebo & Unity)',
        focus: 'Physics simulation and environment building',
        topics: [
            'Simulating physics, gravity, and collisions in Gazebo',
            'High-fidelity rendering and human-robot interaction in Unity',
            'Simulating sensors: LiDAR, Depth Cameras, and IMUs',
        ],
    },
    {
        icon: '🧠',
        title: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
        focus: 'Advanced perception and training',
        topics: [
            'NVIDIA Isaac Sim: Photorealistic simulation and synthetic data generation',
            'Isaac ROS: Hardware-accelerated VSLAM (Visual SLAM) and navigation',
            'Nav2: Path planning for bipedal humanoid movement',
        ],
    },
    {
        icon: '🗣️',
        title: 'Module 4: Vision-Language-Action (VLA)',
        focus: 'The convergence of LLMs and Robotics',
        topics: [
            'Voice-to-Action: Using OpenAI Whisper for voice commands',
            'Cognitive Planning: Using LLMs to translate natural language into ROS 2 actions',
            'Capstone Project: The Autonomous Humanoid with voice command, path planning, and object manipulation',
        ],
    },
];

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

                <div className={styles.moduleGrid}>
                    {modules.map((module, index) => (
                        <div key={index} className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>{module.icon}</div>
                            <h3 className={styles.moduleTitle}>{module.title}</h3>
                            <p className={styles.moduleFocus}>
                                <strong>Focus:</strong> {module.focus}
                            </p>
                            <ul className={styles.moduleList}>
                                {module.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className={styles.moduleListItem}>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
