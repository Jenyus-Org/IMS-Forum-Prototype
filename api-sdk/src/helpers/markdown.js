import hljs from "highlight.js";
import MarkdownToc from "markdown-toc-unlazy";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";

function Markdown() {
  const md = new Remarkable({
    html: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}

      return ""; // use external default escaping
    },
  });

  md.core.ruler.enable(["abbr"]);
  md.block.ruler.enable(["footnote", "deflist"]);
  md.inline.ruler.enable(["footnote_inline", "ins", "mark", "sub", "sup"]);

  md.use(function (remarkable) {
    remarkable.renderer.rules.heading_open = function (tokens, idx) {
      return `<h${tokens[idx].hLevel} id="${MarkdownToc.slugify(
        tokens[idx + 1].content
      )}">`;
    };
  });

  md.use(linkify);

  return md;
}

export { Markdown, MarkdownToc };

