import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HTMLInputSharedAttributes = {
  type: string;
  disabled?: boolean;
  form?: string;
  name?: string;
};

export type ButtonInputAttributes = {
  type: "button";
} & ValueAttribute;

export type CheckboxInputAttributes =
  & {
    type: "checkbox";
  }
  & CheckedAttribute
  & ValueAttribute;

export type ColorInputAttributes =
  & {
    type: "color";
  }
  & AutocompleteAttribute
  & ListAttribute
  & ValueAttribute;

export type DateInputAttributes =
  & {
    type: "date";
  }
  & AutocompleteAttribute
  & ListAttribute
  & ReadonlyAttribute
  & StepAttribute
  & ValueAttribute;

export type DatetimeLocalInputAttributes =
  & {
    type: "datetime-local";
  }
  & AutocompleteAttribute
  & ListAttribute
  & ReadonlyAttribute
  & StepAttribute
  & ValueAttribute;

export type EmailInputAttributes =
  & {
    type: "email";
  }
  & AutocompleteAttribute
  & ListAttribute
  & LengthAttributes
  & MultipleAttribute
  & PatternAttribute
  & PlaceholderAttribute
  & ReadonlyAttribute
  & RequiredAttribute
  & SizeAttribute
  & ValueAttribute;

export type FileInputAttributes =
  & {
    type: "file";
  }
  & RequiredAttribute
  & AcceptAttribute
  & CaptureAttribute
  & MultipleAttribute
  & ValueAttribute;

export type HiddenInputAttributes =
  & {
    type: "hidden";
  }
  & AutocompleteAttribute
  & ValueAttribute;

export type ImageInputAttributes =
  & {
    type: "image";
  }
  & AltAttribute
  & SrcAttribute
  & WidthAttribute
  & HeightAttribute
  & FormactionAttribute
  & FormenctypeAttribute
  & FormmethodAttribute
  & FormnovalidateAttribute
  & FormtargetAttribute;

export type MonthInputAttributes =
  & {
    type: "month";
  }
  & AutocompleteAttribute
  & ListAttribute
  & ReadonlyAttribute
  & StepAttribute;

export type NumberInputAttributes =
  & {
    type: "number";
  }
  & AutocompleteAttribute
  & ListAttribute
  & PlaceholderAttribute
  & ReadonlyAttribute;

export type PasswordInputAttributes =
  & {
    type: "password";
  }
  & AutocompleteAttribute
  & InputmodeAttribute
  & LengthAttributes
  & PatternAttribute
  & PlaceholderAttribute
  & ReadonlyAttribute
  & RequiredAttribute
  & SizeAttribute
  & ValueAttribute;

export type RadioInputAttributes =
  & {
    type: "radio";
  }
  & CheckedAttribute
  & RequiredAttribute
  & ValueAttribute;

export type RangeInputAttributes =
  & {
    type: "range";
  }
  & AutocompleteAttribute
  & ListAttribute
  & MaxAttribute
  & MinAttribute
  & StepAttribute
  & ValueAttribute;

export type ResetInputAttributes =
  & {
    type: "reset";
  }
  & ValueAttribute;

export type SearchInputAttributes =
  & {
    type: "search";
  }
  & AutocompleteAttribute
  & ListAttribute
  & LengthAttributes
  & PatternAttribute
  & PlaceholderAttribute
  & RequiredAttribute
  & SizeAttribute
  & ValueAttribute;

export type SubmitInputAttributes =
  & {
    type: "submit";
  }
  & ValueAttribute;

export type TelInputAttributes =
  & {
    type: "tel";
  }
  & AutocompleteAttribute
  & ListAttribute
  & LengthAttributes
  & PatternAttribute
  & PlaceholderAttribute
  & ReadonlyAttribute
  & SizeAttribute
  & ValueAttribute;

export type TextInputAttributes =
  & {
    type: "text";
  }
  & AutocompleteAttribute
  & ListAttribute
  & LengthAttributes
  & PatternAttribute
  & PlaceholderAttribute
  & ReadonlyAttribute
  & RequiredAttribute
  & SizeAttribute
  & ValueAttribute;

export type TimeInputAttributes =
  & {
    type: "time";
  }
  & AutocompleteAttribute
  & ListAttribute
  & ReadonlyAttribute
  & StepAttribute
  & ValueAttribute;

export type UrlInputAttributes =
  & {
    type: "url";
  }
  & AutocompleteAttribute
  & ListAttribute
  & LengthAttributes
  & PatternAttribute
  & PlaceholderAttribute
  & ReadonlyAttribute
  & RequiredAttribute
  & SizeAttribute
  & ValueAttribute;

export type WeekInputAttributes =
  & {
    type: "week";
  }
  & AutocompleteAttribute
  & ListAttribute
  & ReadonlyAttribute
  & StepAttribute
  & ValueAttribute;

export type InputTypeAttributes<T> =
  & { type: T }
  & (
    | ButtonInputAttributes
    | CheckboxInputAttributes
    | ColorInputAttributes
    | DateInputAttributes
    | DatetimeLocalInputAttributes
    | EmailInputAttributes
    | FileInputAttributes
    | HiddenInputAttributes
    | ImageInputAttributes
    | MonthInputAttributes
    | NumberInputAttributes
    | PasswordInputAttributes
    | RadioInputAttributes
    | RangeInputAttributes
    | ResetInputAttributes
    | SearchInputAttributes
    | SubmitInputAttributes
    | TelInputAttributes
    | TextInputAttributes
    | TimeInputAttributes
    | UrlInputAttributes
    | WeekInputAttributes
  );

export type InputAttributes<T> =
  & HTMLGlobalAttributes
  & HTMLInputSharedAttributes
  & InputTypeAttributes<T>;

export type TypedInputAttributes<T> = Omit<InputAttributes<T>, "type">;

export type AcceptAttribute = {
  accept?: string;
};

export type AltAttribute = {
  alt?: string;
};

export type AutocompleteAttribute = {
  autocomplete?: string;
};

export type CaptureAttribute = {
  capture?: string;
};

export type CheckedAttribute = {
  checked?: boolean;
};

export type DirnameAttribute = {
  dirname?: string;
};

export type DisabledAttribute = {
  disabled?: boolean;
};

export type FormAttribute = {
  form?: string;
};

export type FormactionAttribute = {
  formaction?: string;
};

export type FormenctypeAttribute = {
  formenctype?: string;
};

export type FormmethodAttribute = {
  formmethod?: string;
};

export type FormnovalidateAttribute = {
  formnovalidate?: boolean;
};

export type FormtargetAttribute = {
  formtarget?: string;
};

export type HeightAttribute = {
  height?: number;
};

export type InputmodeAttribute = {
  inputmode?: string;
};

export type ListAttribute = {
  list?: string;
};

export type MaxAttribute = {
  max?: number;
};

export type MaxlengthAttribute = {
  maxlength?: number;
};

export type MinAttribute = {
  min?: number;
};

export type MinlengthAttribute = {
  minlength?: number;
};

export type MultipleAttribute = {
  multiple?: boolean;
};

export type NameAttribute = {
  name?: string;
};

export type PatternAttribute = {
  pattern?: string;
};

export type PlaceholderAttribute = {
  placeholder?: string;
};

export type PopovertargetAttribute = {
  popovertarget?: string;
};

export type PopovertargetactionAttribute = {
  popovertargetaction?: string;
};

export type ReadonlyAttribute = {
  readonly?: boolean;
};

export type RequiredAttribute = {
  required?: boolean;
};

export type SizeAttribute = {
  size?: number;
};

export type SrcAttribute = {
  src?: string;
};

export type StepAttribute = {
  step?: number;
};

export type TypeAttribute = {
  type?: string;
};

export type ValueAttribute = {
  value?: string | number;
};

export type WidthAttribute = {
  width?: number;
};

export type LengthAttributes = MaxlengthAttribute & MinlengthAttribute;
