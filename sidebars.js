/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Framework: [
    {
      type: 'category',
      label: 'Core Framework',
      items: ['jungle-decision-framework', 'foundations', 'decision-rules', 'decision-tree'],
    },
    {
      type: 'category',
      label: 'Practice',
      items: ['examples', 'common-mistakes'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['glossary'],
    },
  ],
};

module.exports = sidebars;
