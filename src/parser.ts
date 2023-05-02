import { Command } from 'commander';
import { load } from 'js-yaml';
import fs from 'fs';

const program = new Command();
program
  .version("0.0.1")
  .description("Bizlane parser for testing playbooks")
  .option("-s, --source <path>", "set path to the playbook file")
  .parse(process.argv);

const options = program.opts();

if (!options.source) {
  program.help();
}

if (!fs.existsSync(options.source)) {
  console.log(`ERROR: File '${options.source}' does not exist.`);
  process.exit(1);
}

try {
  const doc = load(fs.readFileSync(options.source, 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}