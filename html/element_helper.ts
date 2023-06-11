import { attr, type AttributeValue } from "../deps.ts";

export const attributeList = <T>(
  attributes?: T,
  options: { prioritySort?: string } = {},
) => {
  if (!attributes) return "";

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
