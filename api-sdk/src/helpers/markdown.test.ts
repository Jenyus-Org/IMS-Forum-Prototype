import chai from "chai";
import { Markdown, MarkdownToc } from "./markdown";

const expect = chai.expect;

describe("Markdown", () => {
  it("Should be able to render HTML from markdown.", () => {
    const md = Markdown();
    expect(
      md.render(`# My Tutorial

Some text.

## Subheading

Here I talk more in-depth about shit.

# Another Top-Level Heading

Almost done.`)
    ).to.be.equal(
      `<h1 id="my-tutorial">My Tutorial</h1>
<p>Some text.</p>
<h2 id="subheading">Subheading</h2>
<p>Here I talk more in-depth about shit.</p>
<h1 id="another-top-level-heading">Another Top-Level Heading</h1>
<p>Almost done.</p>
`
    );
  });

  it("Should be able to generate a markdown table of contents.", () => {
    const toc = MarkdownToc(`# My Tutorial

Some text.

## Subheading

Here I talk more in-depth about shit.

# Another Top-Level Heading

Almost done.`);
    expect(toc.content).to.be.equal(
      `- [My Tutorial](#my-tutorial)
  * [Subheading](#subheading)
- [Another Top-Level Heading](#another-top-level-heading)`
    );
  });

  it("Should be able to generate a JSON of headings from markdown.", () => {
    const toc = MarkdownToc(`# My Tutorial

Some text.

## Subheading

Here I talk more in-depth about shit.

# Another Top-Level Heading

Almost done.`);
    expect(toc.json).to.be.an.instanceof(Array);
    expect(toc.json).to.be.eql([
      {
        content: "My Tutorial",
        i: 0,
        lvl: 1,
        seen: 0,
        slug: "my-tutorial",
      },
      {
        content: "Subheading",
        i: 1,
        lvl: 2,
        seen: 0,
        slug: "subheading",
      },
      {
        content: "Another Top-Level Heading",
        i: 2,
        lvl: 1,
        seen: 0,
        slug: "another-top-level-heading",
      },
    ]);
  });
});
