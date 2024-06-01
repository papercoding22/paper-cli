#!/usr/bin/env node

const { program } = require("commander");

program
  .version("1.0.0")
  .description("A simple CLI tool")
  .option("-n, --name <name>", "Your name")
  .action((options) => {
    const name = options.name || "World";
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);
