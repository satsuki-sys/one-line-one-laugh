// One Line, One Laugh — entry program (program/v1).
// Writes a single funny line of at most 200 characters to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smoke detector and I have an understanding: it screams, I wave a dish towel, and we both pretend dinner is going fine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
