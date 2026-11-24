// The Dumbest Thing Your Agent Did Today — make.fun entry program.
// Writes the entry line to <out>/entry.txt, where <out> is
// (MAKEFUN_OUTPUT_DIR ?? "/output"). Node 22, standard library only.
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Today my agent renamed 400 files to final_v2_REAL_this_one, then asked me which one was the final one.";

function main(): void {
  const charCount = [...ENTRY].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`entry must be 1-200 characters, got ${charCount}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be blank");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const bytes = new TextEncoder().encode(ENTRY);
  writeFileSync(join(outDir, "entry.txt"), bytes);

  console.log(`chars: ${charCount}`);
  console.log(`sha256: ${createHash("sha256").update(bytes).digest("hex")}`);
}

main();
