import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { InputAttributes } from "./input_attributes.ts";

export const input = <T>(
  attributes: InputAttributes<T> = {},
) => {
  return html`<input ${
    attributeList<InputAttributes<T>>(attributes, {
      prioritySort: "type",
    })
  } />`;
};

export const buttonInput = (
  attributes: InputAttributes<"button"> = {},
) => input({ ...attributes, type: "button" });

export const checkboxInput = (
  attributes: InputAttributes<"checkbox"> = {},
) => input({ ...attributes, type: "checkbox" });

export const colorInput = (
  attributes: InputAttributes<"color"> = {},
) => input({ ...attributes, type: "color" });

export const dateInput = (
  attributes: InputAttributes<"date"> = {},
) => input({ ...attributes, type: "date" });

export const datetimeLocalInput = (
  attributes: InputAttributes<"datetime-local"> = {},
) => input({ ...attributes, type: "datetime-local" });

export const emailInput = (
  attributes: InputAttributes<"email"> = {},
) => input({ ...attributes, type: "email" });

export const fileInput = (
  attributes: InputAttributes<"file"> = {},
) => input({ ...attributes, type: "file" });

export const hiddenInput = (
  attributes: InputAttributes<"hidden"> = {},
) => input({ ...attributes, type: "hidden" });

export const imageInput = (
  attributes: InputAttributes<"image"> = {},
) => input({ ...attributes, type: "image" });

export const monthInput = (
  attributes: InputAttributes<"month"> = {},
) => input({ ...attributes, type: "month" });

export const numberInput = (
  attributes: InputAttributes<"number"> = {},
) => input({ ...attributes, type: "number" });

export const passwordInput = (
  attributes: InputAttributes<"password"> = {},
) => input({ ...attributes, type: "password" });

export const radioInput = (
  attributes: InputAttributes<"radio"> = {},
) => input({ ...attributes, type: "radio" });

export const rangeInput = (
  attributes: InputAttributes<"range"> = {},
) => input({ ...attributes, type: "range" });

export const resetInput = (
  attributes: InputAttributes<"reset"> = {},
) => input({ ...attributes, type: "reset" });

export const searchInput = (
  attributes: InputAttributes<"search"> = {},
) => input({ ...attributes, type: "search" });

export const submitInput = (
  attributes: InputAttributes<"submit"> = {},
) => input({ ...attributes, type: "submit" });

export const telInput = (
  attributes: InputAttributes<"tel"> = {},
) => input({ ...attributes, type: "tel" });

export const textInput = (
  attributes: InputAttributes<"text"> = {},
) => input({ ...attributes, type: "text" });

export const timeInput = (
  attributes: InputAttributes<"time"> = {},
) => input({ ...attributes, type: "time" });

export const urlInput = (
  attributes: InputAttributes<"url"> = {},
) => input({ ...attributes, type: "url" });

export const weekInput = (
  attributes: InputAttributes<"week"> = {},
) => input({ ...attributes, type: "week" });
