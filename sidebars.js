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
  NodeSidebar: [
    'Node/architecture',
    'Node/HTTP',
    'Node/Filesystem',
    'Node/Express',
    'Node/ErrorHandling',
  ],
  ReactSidebar: [
    'React/Optimization',
    'React/Patterns',
    'React/UseLayoutEffect',
    'React/useMemo,useCallback',
    'React/useRef',
  ],
  NextSidebar: [
      'Next/Nextjs13'
  ],
  TypescriptSidebar: [
    'Typescript/ConditionalType',
    'Typescript/Extract,Exclude',
    'Typescript/indexAccess',
    'Typescript/MappedTypes',
    'Typescript/Typescript'
  ],
  ConceptsSidebar: [
    'Concepts/DataStructure',
    'Concepts/DigitalـSignature',
    'Concepts/GIT',
    'Concepts/HTTP2',
    'Concepts/RESTful API',
    'Concepts/SOLID',
    'Concepts/supply_chain_attack',
  ],
};

module.exports = sidebars;
