import React from 'react';
import styles from './styles.module.css';

export default function HardwareRequirements() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Hardware Requirements</h2>
                <p className={styles.subtitle}>
                    This course sits at the intersection of Physics Simulation, Visual Perception, and Generative AI.
                </p>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>1. The "Digital Twin" Workstation</h3>
                        <p><strong>Required per Student.</strong> Standard laptops will not work.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>GPU:</strong> NVIDIA RTX 4070 Ti (12GB VRAM) or higher. (Ideal: RTX 3090/4090)</li>
                            <li className={styles.listItem}><strong>CPU:</strong> Intel Core i7 (13th Gen+) or AMD Ryzen 9.</li>
                            <li className={styles.listItem}><strong>RAM:</strong> 64 GB DDR5 (32 GB min).</li>
                            <li className={styles.listItem}><strong>OS:</strong> Ubuntu 22.04 LTS.</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>2. The "Physical AI" Edge Kit</h3>
                        <p>For setting up the nervous system on a desk.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Brain:</strong> NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB).</li>
                            <li className={styles.listItem}><strong>The Eyes:</strong> Intel RealSense D435i or D455.</li>
                            <li className={styles.listItem}><strong>The Inner Ear:</strong> Generic USB IMU (BNO055).</li>
                            <li className={styles.listItem}><strong>Voice Interface:</strong> USB Microphone/Speaker array (e.g., ReSpeaker).</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>3. The Robot Lab Options</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Option A (Budget):</strong> Unitree Go2 Edu (~$1,800 - $3,000).</li>
                            <li className={styles.listItem}><strong>Option B (Miniature):</strong> Unitree G1 (~$16k) or Robotis OP3 (~$12k).</li>
                            <li className={styles.listItem}><strong>Option C (Premium):</strong> Unitree G1 Humanoid.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Alternative: Cloud-Native Lab</h3>
                    <p>
                        If you do not have access to RTX-enabled workstations, you can use cloud instances (AWS/Azure).
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Instance:</strong> AWS g5.2xlarge or g6e.xlarge.</li>
                        <li className={styles.listItem}><strong>Cost:</strong> ~$205 per quarter (estimated).</li>
                        <li className={styles.listItem}><strong>Note:</strong> You still need the Edge AI Kit (~$700) and one physical robot for the final demo.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
