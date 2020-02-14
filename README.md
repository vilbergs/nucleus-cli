# nucleus-cli

An atomic component generator.

Issues and PR's Welcome

## Requirements

- [Deno](https://deno.land/)

## Installing

```bash
  $ deno install --allow-write --allow-read --dir /usr/local/bin nucleus https://raw.githubusercontent.com/vilbergs/nucleus-cli/master/cli.ts

  // ✅ Successfully installed nucleus
```

## How to use

The CLI takes 2 arguments; the type of module and the name of it.

```bash
    $ nucleus [atom | molecule | organism] MyAtomicComponent

    // ✅ Successfully created MyAtomicComponent
```

**Example:**

`$ nucleus atom BrandNewAtom`

This will create ./src/Atoms/BrandNewAtom in your working directory.
