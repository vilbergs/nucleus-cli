# nucleus-cli

An atomic component generator.

## Requirements

- [Deno](https://deno.land/)

## How to use

Run `deno --allow-write --allow-read ./index.ts -t [atom | molecule | organism] -m MyAtomicComponent`

- **-t**:  The component type, either "atom", "molecule" or "organism"
- **-m**: The component name