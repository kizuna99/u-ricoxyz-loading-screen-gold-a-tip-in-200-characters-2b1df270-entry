// SPDX-License-Identifier: MIT
// Loading Screen Gold — make.fun entry.
// Writes exactly one line (the tip plus a trailing newline) to the output file.
// The tip: a vague instruction, heard by a confident agent as a plan,
// with the loading screen as the moment both sides find out it was not one.
// It is kept as a single constant so the judged text can never drift:
// one line, well under the 200-character gate, no trailing spaces.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: When you said 'just make it work,' your agent heard a plan. This loading screen is you both finding out it wasn't.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP + "\n", "utf8");
