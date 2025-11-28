import React from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import CourseDetails from '@site/src/components/HomeContent/CourseDetails';

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Home`}
      description="Colearning Agentic AI with Python and TypeScript – Spec Driven Reusable Intelligence">
      <Hero />
      <main>
        <CourseDetails />

        {/* Who Should Read This? / Prerequisites Section */}
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2>Who Should Read This?</h2>
            <p>This book is designed for:</p>
            <ul>
              <li>Aspiring Roboticists and AI Engineers</li>
              <li>Students and Professionals interested in Physical AI, Humanoid Robotics, and Embodied Intelligence</li>
              <li>Developers looking to integrate Large Language Models (LLMs) with robotic systems</li>
              <li>Researchers and enthusiasts eager to bridge the gap between simulation and real-world robot deployment</li>
            </ul>
            <h2>Prerequisites</h2>
            <p>To get the most out of this course, a basic understanding of programming (Python preferred) and fundamental AI/ML concepts is recommended. Familiarity with Linux environments will also be beneficial.</p>
          </div>
        </section>

        {/* Expand navigation/information depth Section */}
        <section style={{ padding: '2rem 0', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
          <div className="container">
            <h2>Explore Further</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 30%', margin: '1rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
                <h3>Sample Content</h3>
                <p>Dive into selected chapters to get a taste of the in-depth material.</p>
                <a href="/docs/intro" className="button button--secondary">View Samples</a> {/* Placeholder link */}
              </div>
              <div style={{ flex: '1 1 30%', margin: '1rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
                <h3>Frequently Asked Questions</h3>
                <p>Find answers to common questions about the course and its content.</p>
                <a href="/faq" className="button button--secondary">Read FAQs</a> {/* Placeholder link */}
              </div>
              <div style={{ flex: '1 1 30%', margin: '1rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
                <h3>Contact Us</h3>
                <p>Have more questions? Get in touch with the course creators.</p>
                <a href="/contact" className="button button--secondary">Contact Form</a> {/* Placeholder link */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
