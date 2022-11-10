/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      link: {
        type: 'generated-index',
        title: 'React Tutorial',
        description: 'Learn about some react components implementation method',
        slug: '/',
        keywords: ['guides']
      },
      items: [
        'tutorial/carousel/index',
        'tutorial/image-lazyload/index',
        'tutorial/slider/index',
        'tutorial/sticky-header/index',
        'tutorial/infinite-scroll/index',
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
