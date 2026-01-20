import { cp, rm } from "fs/promises";
import path from "path";

const repoRoot = path.resolve(process.cwd(), "..");
const publicDir = path.resolve(process.cwd(), "public");
const folders = ["assets", "css", "js"];

const copyFolder = async (folder) => {
  const src = path.join(repoRoot, folder);
  const dest = path.join(publicDir, folder);
  await rm(dest, { recursive: true, force: true });
  await cp(src, dest, { recursive: true });
};

await Promise.all(folders.map(copyFolder));
