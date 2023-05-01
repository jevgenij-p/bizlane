import { Command } from 'commander';

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

console.log(`SOurce file: ${options.source}`);