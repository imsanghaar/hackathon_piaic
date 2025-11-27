import React from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import Spectrum from '@site/src/components/Spectrum';
import Differentiators from '@site/src/components/Differentiators';
import MaturityLevels from '@site/src/components/MaturityLevels';
import Comparison from '@site/src/components/Comparison';

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Home`}
      description="Colearning Agentic AI with Python and TypeScript – Spec Driven Reusable Intelligence">
      <Hero />
      <main>
        <Spectrum />
        <Differentiators />
        <MaturityLevels />
        <Comparison />
      </main>
    </Layout>
  );
}
