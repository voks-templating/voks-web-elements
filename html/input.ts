import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { InputAttributes, TypedInputAttributes } from "./input_attributes.ts";

export const input = <T>(
  attributes: InputAttributes<T>,
) => {
  return html`<input${
    attributeList<InputAttributes<T>>(attributes, {
      prioritySort: "type",
    })
  } />`;
};

export const buttonInput = (
  attributes: TypedInputAttributes<"button"> = {},
) => input({ ...attributes, type: "button" });

export const checkboxInput = (
  attributes: TypedInputAttributes<"checkbox"> = {},
) => input({ ...attributes, type: "checkbox" });

export const colorInput = (
  attributes: TypedInputAttributes<"color"> = {},
) => input({ ...attributes, type: "color" });

export const dateInput = (
  attributes: TypedInputAttributes<"date"> = {},
) => input({ ...attributes, type: "date" });

export const datetimeLocalInput = (
  attributes: TypedInputAttributes<"datetime-local"> = {},
) => input({ ...attributes, type: "datetime-local" });

export const emailInput = (
  attributes: TypedInputAttributes<"email"> = {},
) => input({ ...attributes, type: "email" });

export const fileInput = (
  attributes: TypedInputAttributes<"file"> = {},
) => input({ ...attributes, type: "file" });

export const hiddenInput = (
  attributes: TypedInputAttributes<"hidden"> = {},
) => input({ ...attributes, type: "hidden" });

export const imageInput = (
  attributes: TypedInputAttributes<"image"> = {},
) => input({ ...attributes, type: "image" });

export const monthInput = (
  attributes: TypedInputAttributes<"month"> = {},
) => input({ ...attributes, type: "month" });

export const numberInput = (
  attributes: TypedInputAttributes<"number"> = {},
) => input({ ...attributes, type: "number" });

export const passwordInput = (
  attributes: TypedInputAttributes<"password"> = {},
) => input({ ...attributes, type: "password" });

export const radioInput = (
  attributes: TypedInputAttributes<"radio"> = {},
) => input({ ...attributes, type: "radio" });

export const rangeInput = (
  attributes: TypedInputAttributes<"range"> = {},
) => input({ ...attributes, type: "range" });

export const resetInput = (
  attributes: TypedInputAttributes<"reset"> = {},
) => input({ ...attributes, type: "reset" });

export const searchInput = (
  attributes: TypedInputAttributes<"search"> = {},
) => input({ ...attributes, type: "search" });

export const submitInput = (
  attributes: TypedInputAttributes<"submit"> = {},
) => input({ ...attributes, type: "submit" });

export const telInput = (
  attributes: TypedInputAttributes<"tel"> = {},
) => input({ ...attributes, type: "tel" });

export const textInput = (
  attributes: TypedInputAttributes<"text"> = {},
) => input({ ...attributes, type: "text" });

export const timeInput = (
  attributes: TypedInputAttributes<"time"> = {},
) => input({ ...attributes, type: "time" });

export const urlInput = (
  attributes: TypedInputAttributes<"url"> = {},
) => input({ ...attributes, type: "url" });

export const weekInput = (
  attributes: TypedInputAttributes<"week"> = {},
) => input({ ...attributes, type: "week" });
