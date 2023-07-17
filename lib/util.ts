import { HTMLTemplate } from "../deps.ts";

export const isObjectLiteral = (thing: unknown) => {
  return Object.getPrototypeOf(thing) === Object.prototype;
};

export const attributesAndContentFromArgs = <T>(
  ...args: [unknown, unknown?]
) => {
  let attributes, content;

  if (!isObjectLiteral(args[0])) {
    attributes = {};
    content = args[0] as string | HTMLTemplate;
  } else if (isObjectLiteral(args[0])) {
    attributes = args[0] as T;
    content = args[1] as string | HTMLTemplate;
  }

  return { attributes, content };
};
