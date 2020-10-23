import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";

const MarkdownToc = require("markdown-toc");

const MarkdownItDeflist = require("markdown-it-deflist");

function Markdown() {
  const md = new MarkdownIt();
  md.use(MarkdownItAnchor);
  md.use(MarkdownItDeflist);
  return md;
}

export { Markdown, MarkdownToc };

