import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";

const MarkdownToc = require("markdown-toc");

const MarkdownItDeflist = require("markdown-it-deflist");
const MarkdownItSup = require("markdown-it-sup");
const MarkdownItAbbr = require("markdown-it-abbr");
const MarkdownItMark = require("markdown-it-mark");
const MarkdownItIns = require("markdown-it-ins");
const MarkdownItFootnote = require("markdown-it-footnote");

function Markdown() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return ""; // use external default escaping
    },
  });

  md.use(MarkdownItAnchor);
  md.use(MarkdownItDeflist);
  md.use(MarkdownItSup);
  md.use(MarkdownItAbbr);
  md.use(MarkdownItMark);
  md.use(MarkdownItIns);
  md.use(MarkdownItFootnote);

  return md;
}

export { Markdown, MarkdownToc };

