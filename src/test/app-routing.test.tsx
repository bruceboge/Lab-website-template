import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("Next.js App Router", () => {
  it("contains the main route entrypoints", () => {
    expect(existsSync(resolve("app/page.tsx"))).toBe(true);
    expect(existsSync(resolve("app/about/page.tsx"))).toBe(true);
    expect(existsSync(resolve("app/resources/page.tsx"))).toBe(true);
  });
});
