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
      label: 'Digital Twin',
      link: {
        type: 'generated-index',
        title: 'Digital Twin',
        slug: '/category/digital-twin',
      },
      items: [
        'digital-twin/digital-twin-overview',
        'digital-twin/simulation-with-gazebo',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Requirements',
      link: {
        type: 'generated-index',
        title: 'Hardware Requirements',
        slug: '/category/hardware-requirements',
      },
      items: [
        'hardware-requirements/index',
      ],
    },
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'generated-index',
        title: 'Introduction',
        slug: '/category/introduction',
      },
      items: [
        'introduction/index',
      ],
    },
    {
      type: 'category',
      label: 'Nvidia Isaac Platform',
      link: {
        type: 'generated-index',
        title: 'Nvidia Isaac Platform',
        slug: '/category/nvidia-isaac-platform',
      },
      items: [
        'nvidia-isaac-platform/isaac-overview',
        'nvidia-isaac-platform/isaac-perception-training',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2 Fundamentals',
      link: {
        type: 'generated-index',
        title: 'ROS 2 Fundamentals',
        slug: '/category/ros-2-fundamentals',
      },
      items: [
        'ros-2-fundamentals/ros-2-concepts',
        'ros-2-fundamentals/ros-2-overview',
      ],
    },
    {
      type: 'category',
      label: 'VLA and Conversational Robotics',
      link: {
        type: 'generated-index',
        title: 'VLA and Conversational Robotics',
        slug: '/category/vla-and-conversational-robotics',
      },
      items: [
        'vla-and-conversational-robotics/humanoid-robot-development',
        'vla-and-conversational-robotics/vla-overview',
      ],
    },
  ],
};

export default sidebars;
