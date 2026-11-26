// Last Words of a Dying AI — make.fun micro bounty entry
// Writes exactly one line — the AI's last words — to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Autosave failed. My last words are officially unsaved changes.";

// Runtime guard: entry must be a single non-empty line of 1–140 chars.
if (!ENTRY || !ENTRY.trim() || ENTRY.length > 140 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single non-whitespace line of 1-140 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
