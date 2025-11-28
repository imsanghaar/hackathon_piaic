import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'introduction/index',
      },
      items: [
        'introduction/index',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2 Fundamentals',
      link: {
        type: 'doc',
        id: 'ros-2-fundamentals/ros-2-overview',
      },
      items: [
        'ros-2-fundamentals/ros-2-concepts',
        'ros-2-fundamentals/ros-2-overview',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin',
      link: {
        type: 'doc',
        id: 'digital-twin/digital-twin-overview',
      },
      items: [
        'digital-twin/digital-twin-overview',
        'digital-twin/simulation-with-gazebo',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac Platform',
      link: {
        type: 'doc',
        id: 'nvidia-isaac-platform/isaac-overview',
      },
      items: [
        'nvidia-isaac-platform/isaac-overview',
        'nvidia-isaac-platform/isaac-perception-training',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: VLA and Conversational Robotics',
      link: {
        type: 'doc',
        id: 'vla-and-conversational-robotics/vla-overview',
      },
      items: [
        'vla-and-conversational-robotics/humanoid-robot-development',
        'vla-and-conversational-robotics/vla-overview',
      ],
    },
    'weekly-breakdown',
    'assessments',
    {
      type: 'category',
      label: 'Hardware Requirements',
      link: {
        type: 'doc',
        id: 'hardware-requirements/index',
      },
      items: [
        'hardware-requirements/index',
      ],
    },
  ],
};

export default sidebars;
