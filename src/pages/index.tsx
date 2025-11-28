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
      </main>
    </Layout>
  );
}
