import { MarkdownToc } from "../../helpers/markdown";

type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

type WithBody = GConstructor<{ body?: string }>;

export default function Toc<TBase extends WithBody>(Base: TBase) {
  return class TOCMixin extends Base {
    get toc() {
      return this.body && MarkdownToc(this.body).content;
    }

    get tocRaw() {
      return this.body && MarkdownToc(this.body).json;
    }
  };
}
