import fs from 'fs';
import { Command } from 'commander';
import { load } from 'js-yaml';
import { PlaybookData } from './types';

class Playbook {
  data: PlaybookData;
  
  constructor(data: PlaybookData) {
    this.data = data;
  }
}

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
  const source = fs.readFileSync(options.source, 'utf8');
  const data: PlaybookData = load(source);
  const playbook = new Playbook(data);
  console.log(playbook);

} catch (e) {
  console.log(e);
}