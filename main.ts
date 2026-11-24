// Angry Judge: The Short Rant Contest
// Angle: the public toilet whose motion sensor flushes while you're still
// sitting on it — a machine that applauds a job it hasn't let you finish.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The public toilet that flushes while I'm still sitting on it. I haven't moved, I haven't finished, I haven't even blinked at the sensor — yet there it goes, a cold splash up my back, applause I never asked for. Then it flushes again. And again. Sir, I am still here. The job is not done. Stop celebrating.";

if (LINE.length < 1 || LINE.length > 400 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-400 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
