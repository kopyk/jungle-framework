/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Samples: [
    'samples/overview',
    {
      type: 'category',
      label: 'Artificial Intelligence',
      collapsed: false,
      items: [
        'samples/model-card',
        'samples/rag-tutorial',
        'samples/api-reference',
        'samples/eval-rubric',
      ],
    },
    {
      type: 'category',
      label: 'Defense & Aerospace',
      collapsed: false,
      items: ['samples/maintenance-procedure', 'samples/interface-control-document'],
    },
  ],
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
