// using CapitalizedLetter instead of Capitalize<string> because of other allowed characters like +, -, etc.
// deno-fmt-ignore
type CapitalizedLetter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L"| "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"| "U" | "V" | "W" | "X" | "Y" | "Z";

type DataAttribute = `data${CapitalizedLetter}${string}`;
type DashedDataAttribute = `data-${string}`;

type ariaAttribute = `aria${CapitalizedLetter}${string}`;
type DashedAriaAttribute = `aria-${string}`;

export interface HTMLGlobalAttributes {
  accesskey?: string;
  autocapitalize?: string;
  autofocus?: boolean;
  class?: string;
  contenteditable?: string;
  contextmenu?: string;
  dir?: string;
  draggable?: string;
  enterkeyhint?: string;
  hidden?: string;
  id?: string;
  inert?: boolean;
  inputmode?: string;
  is?: string;
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: string;
  itemtype?: string;
  lang?: string;
  nonce?: string;
  part?: string;
  popover?: string;
  role?: string;
  slot?: string;
  spellcheck?: boolean;
  style?: string;
  tabindex?: number;
  title?: string;
  translate?: string;
  virtualkeyboardpolicy?: string;
  [k: DataAttribute | DashedDataAttribute]:
    | string
    | number
    | boolean
    | undefined;
  // TODO: can be improved by allowing only the allowed attributes per element
  [k: ariaAttribute | DashedAriaAttribute]:
    | string
    | number
    | boolean
    | undefined;
}
