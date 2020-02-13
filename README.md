# nucleus-cli

An atomic component generator.

## Requirements

- [Deno](https://deno.land/)

## Installing

`$ deno install --allow-write --allow-read --dir /usr/local/bin nucleus https://raw.githubusercontent.com/vilbergs/nucleus-cli/master/cli.ts`

## How to use

`$ deno -t [atom | molecule | organism] -m MyAtomicComponent`

- **-t**:  The component type, either "atom", "molecule" or "organism"
- **-m**: The component name