import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'dist',
    'coverage'
  ],
  build: [
    '*.js'
  ],
  test: [
    'test.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },
  ...bpmnIoPlugin.configs.recommended.map(config => ({
    ...config,
    files: files.build
  })),
  ...bpmnIoPlugin.configs.esm.map(config => ({
    ...config,
    files: files.build
  })),
  ...bpmnIoPlugin.configs.mocha.map(config => ({
    ...config,
    files: files.test
  }))
];
