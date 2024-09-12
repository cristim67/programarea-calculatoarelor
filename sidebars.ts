import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
      'README',
    {
      type: "category",
      label: "PC",
      link: { type: "doc", id: "pc/README" },
      items: [
        "pc/lab1",
        "pc/lab2",
        "pc/lab3",
        "pc/lab4",
        "pc/lab5",
        "pc/lab6",
        "pc/lab7",
        "pc/lab8",
        "pc/lab9",
        "pc/lab10",
        "pc/lab11",
        "pc/lab12",
      ],
      collapsible: true,
    },
    {
      type: "category",
      label: "SDA",
      link: { type: "doc", id: "sda/README" },
      items: [
        "sda/lab1"
      ],
      collapsible: true,
    },
  ],
};

export default sidebars;
