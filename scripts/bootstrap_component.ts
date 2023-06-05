import { parse } from "std/flags/mod.ts";
import { join } from "std/path/mod.ts";

type BootstrapOptions = { content?: boolean };

const flags = parse(Deno.args, {
  boolean: ["content"],
  string: ["name"],
  // default: { color: true },
});

if (!flags.name) {
  throw new Error("Please provide a name for the component.");
}

await bootstrap(flags.name, { content: flags.content });

async function bootstrap(
  name: string,
  options: BootstrapOptions,
): Promise<void> {
  const component = componentTemplate(name, options);
  const componentPath = join("html", `${name}.ts`);

  const test = testTemplate(name, options);
  const testPath = join("html", `${name}_test.ts`);

  try {
    await Deno.writeTextFile(componentPath, component, {
      createNew: true,
    });
    await Deno.writeTextFile(testPath, test, {
      createNew: true,
    });
  } catch (error) {
    if (error instanceof Deno.errors.AlreadyExists) {
      console.error(`Component "${name}" already exists.`);
    } else {
      console.log(error);
    }
    Deno.exit(1);
  }

  console.log(`Component "${name}" created successfully.`);
  console.log(`\t${componentPath}`);
  console.log(`\t${testPath}`);
  Deno.exit(0);
}

function componentTemplate(
  name: string,
  { content }: BootstrapOptions = {},
) {
  const capitalized = capitalize(name);
  // deno-fmt-ignore
  return `${
    content
      ? `import { html, HTMLTemplate } from "../deps.ts";`
      : `import { html } from "../deps.ts";`
  }
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ${capitalized}Attributes = HTMLGlobalAttributes;

export interface ${capitalized}ElementOptions {
  classes?: string[];
  attributes?: ${capitalized}Attributes;
}

export const ${name} = (${content ? `
  content: string | HTMLTemplate,` : ""}
  { attributes, classes }: ${capitalized}ElementOptions = {},
) =>
  html\`<${name} \${
    attributeList<${capitalized}Attributes>(attributes, classes)
  }\>${content ? "${content}" : ""}\</${name}>\`;
  `;
}

function testTemplate(name: string, { content }: BootstrapOptions = {}) {
  // deno-fmt-ignore
  return `import { assertEquals } from "asserts";
  import { renderToString } from "../deps.ts";
  import { ${name} } from "./${name}.ts";

  Deno.test("${name} tag element", async (t) => {
    await t.step("${name} with attributes", async () => {

      const actual = ${name}(${content ? `
      "Content",`: ""}
        {
          attributes: {},
        },
      );

      const expected = \`<${name}>${content ? "Content" : ""}</${name}>\`;
      const rendered = await renderToString(actual, { minify: true });
      assertEquals(rendered, expected);
    });
  });

  `;
}

function capitalize(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
