import { attr, type AttributeValue } from "../deps.ts";

export const attributeList = <T>(
  attributes?: T,
  options: { prioritySort?: string } = {},
) => {
  if (!attributes) return "";

  return (options.prioritySort
    ? Object.entries(attributes)
      .sort(([a], [b]) => a.localeCompare(b))
      .sort(([a], [b]) => { // always start with priority attribute!
        if (a === options.prioritySort) return -1;
        else if (b === options.prioritySort) return 1;
        return 0;
      })
    : Object.entries(attributes).sort(([a], [b]) => a.localeCompare(b)))
    .map(([attribute, value]) => attr(attribute, value as AttributeValue));
};
