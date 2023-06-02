import { attr, type AttributeValue } from "../deps.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export const attributeList = <T>(
  attributes?: T,
  classes?: (string | undefined)[],
  options: { prioritySort?: string } = {},
) => {
  if (!attributes) return "";

  if (classes && classes.length > 0) {
    (attributes as HTMLGlobalAttributes).class = classes.concat([
      (attributes as HTMLGlobalAttributes).class,
    ])
      .filter((c) => c !== undefined)
      .join(" ");
  }

  return (options.prioritySort
    ? Object.entries(attributes)
      .sort(([a], [b]) => {
        if (a === options.prioritySort) return -1;
        else if (b === options.prioritySort) return 1;
        return a.localeCompare(b);
      })
    : Object.entries(attributes)) // always start with type attribute!
    .map(([attribute, value]) => attr(attribute, value as AttributeValue));
};
