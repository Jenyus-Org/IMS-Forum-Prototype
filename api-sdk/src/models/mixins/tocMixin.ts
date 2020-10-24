import { Markdown, MarkdownToc } from "../../helpers/markdown";

type GConstructor<T = {}> = new (...args: any[]) => T;

type WithBody = GConstructor<{ body?: string }>;

export default function Toc<TBase extends WithBody>(Base: TBase) {
  return class TOCMixin extends Base {
    get toc() {
      return this.body && MarkdownToc(this.body).content;
    }

    get tocHTML() {
      return this.body && Markdown().render(MarkdownToc(this.body).content);
    }

    get tocRaw() {
      return this.body && MarkdownToc(this.body).json;
    }
  };
}
