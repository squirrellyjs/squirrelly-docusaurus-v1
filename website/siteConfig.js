/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "Ben Gubler",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/nebrelbug.png",
    infoLink: "https://github.com/nebrelbug",
    pinned: true
  }
];

const siteConfig = {
  title: "Squirrelly" /* title for your website */,
  tagline: "A fast, lighweight, and simple JavaScript template engine",
  url: "https://squirrelly.js.org" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  cleanUrl: true,

  // Used for publishing and more
  projectName: "squirrelly.js.org",
  organizationName: "squirrellyjs",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { page: "demo", label: "Demo" },
    // { page: "performance", label: "Performance" },
    { blog: true, label: "Blog" },
    { page: "help", label: "Help" },
    { href: "https://github.com/nebrelbug/squirrelly", label: "GitHub" }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/Squirrelly.svg",
  footerIcon: "img/Squirrelly.svg",
  favicon: "img/favicon.png",
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,
  /* colors for website */
  colors: {
    primaryColor: "#ca5010",
    secondaryColor: "rgb(0,0,0)"
  },
  highlight: {
    theme: "atom-one-dark"
  },

  /* custom fonts for website */
  /*fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " SquirrellyJS",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags
  //   scripts: ["https://rawgit.com/nebrelbug/squirrelly/master/squirrelly.js"],
  scripts: ["https://buttons.github.io/buttons.js"],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  ogImage: "img/Squirrelly.svg",
  twitterImage: "img/Squirrelly.svg",
  gaTrackingId: "UA-122013092-1",
  // cname: "squirrelly.js.org"

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/nebrelbug/squirrelly"
};

module.exports = siteConfig;
