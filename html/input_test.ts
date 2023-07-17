import { assertEquals } from "asserts";
import { html, minify, renderToString } from "../deps.ts";

import {
  buttonInput,
  checkboxInput,
  colorInput,
  dateInput,
  datetimeLocalInput,
  emailInput,
  fileInput,
  hiddenInput,
  imageInput,
  monthInput,
  numberInput,
  passwordInput,
  radioInput,
  rangeInput,
  resetInput,
  searchInput,
  submitInput,
  telInput,
  textInput,
  timeInput,
  urlInput,
  weekInput,
} from "./input.ts";
import { InputAttributes, TypedInputAttributes } from "./input_attributes.ts";
import { label } from "./label.ts";

Deno.test("input", async (t) => {
  await t.step("input[type=button]", async () => {
    const actual = buttonInput({
      name: "name",
      value: "Click me!",
    });

    const expected = `<input type="button" name="name" value="Click me!" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=checkbox]", async () => {
    const actual = checkboxInput({
      name: "name",
      value: "7",
      checked: true,
    });

    const expected = `<input type="checkbox" checked name="name" value="7" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=color]", async () => {
    const actual = colorInput({
      name: "name",
      autocomplete: "given-name",
      list: "#some-list",
      value: "#ff0000",
    });

    const expected =
      `<input type="color" autocomplete="given-name" list="#some-list" name="name" value="#ff0000" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=date]", async () => {
    const actual = dateInput({
      name: "name",
      autocomplete: "given-name",
      list: "#some-list",
      readonly: true,
      step: 1,
    });

    const expected =
      `<input type="date" autocomplete="given-name" list="#some-list" name="name" readonly step="1" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=datetime-local]", async () => {
    const actual = datetimeLocalInput({
      name: "name",
      autocomplete: "given-name",
      list: "#some-list",
      readonly: true,
      step: 1,
    });

    const expected =
      `<input type="datetime-local" autocomplete="given-name" list="#some-list" name="name" readonly step="1" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=email]", async () => {
    const actual = emailInput({
      name: "name",
      autocomplete: "given-name",
      list: "#some-list",
      maxlength: 255,
      minlength: 3,
      multiple: true,
      pattern: ".*",
      placeholder: "Enter your email",
      readonly: true,
      required: true,
      size: 20,
    });

    const expected =
      `<input type="email" autocomplete="given-name" list="#some-list" maxlength="255" minlength="3" multiple name="name" pattern=".*" placeholder="Enter your email" readonly required size="20" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=file]", async () => {
    const actual = fileInput({
      name: "name",
      accept: ".json",
      capture: "user",
      multiple: true,
    });

    const expected =
      `<input type="file" accept=".json" capture="user" multiple name="name" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=hidden]", async () => {
    const actual = hiddenInput({
      name: "givenName",
      autocomplete: "given-name",
    });

    const expected =
      `<input type="hidden" autocomplete="given-name" name="givenName" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=image]", async () => {
    const actual = imageInput({
      name: "avatar",
      alt: "an avatar to show your inner self",
      src: "/images/avatar.png",
      width: 100,
      height: 100,
      formaction: "/upload",
      formenctype: "multipart/form-data",
      formmethod: "post",
      formnovalidate: true,
      formtarget: "_blank",
    });

    const expected =
      `<input type="image" alt="an avatar to show your inner self" formaction="/upload" formenctype="multipart/form-data" formmethod="post" formnovalidate formtarget="_blank" height="100" name="avatar" src="/images/avatar.png" width="100" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=month]", async () => {
    const actual = monthInput({
      name: "month",
      autocomplete: "month",
      list: "#some-list",
      step: 1,
    });

    const expected =
      `<input type="month" autocomplete="month" list="#some-list" name="month" step="1" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=number]", async () => {
    const actual = numberInput({
      name: "name",
      autocomplete: "month",
      list: "#some-list",
      placeholder: "placeholder",
      readonly: true,
    });

    const expected =
      `<input type="number" autocomplete="month" list="#some-list" name="name" placeholder="placeholder" readonly />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=password]", async () => {
    const actual = passwordInput({
      name: "name",
      autocomplete: "current-password",
      inputmode: "verbatim",
      maxlength: 255,
      minlength: 3,
      pattern: ".*",
      placeholder: "Enter your password",
      readonly: true,
      required: true,
      size: 20,
      value: "secret",
    });

    const expected =
      `<input type="password" autocomplete="current-password" inputmode="verbatim" maxlength="255" minlength="3" name="name" pattern=".*" placeholder="Enter your password" readonly required size="20" value="secret" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=radio]", async () => {
    const actual = radioInput({
      name: "name",
      checked: true,
      required: true,
      value: "true",
    });

    const expected =
      `<input type="radio" checked name="name" required value="true" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=range]", async () => {
    const actual = rangeInput({
      name: "name",
      autocomplete: "some-range",
      list: "#some-list",
      min: 0,
      max: 100,
      step: 1,
      value: 10,
    });

    const expected =
      `<input type="range" autocomplete="some-range" list="#some-list" max="100" min="0" name="name" step="1" value="10" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=reset]", async () => {
    const actual = resetInput({
      name: "name",
      value: "reset",
    });

    const expected = `<input type="reset" name="name" value="reset" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=search]", async () => {
    const actual = searchInput({
      name: "name",
      autocomplete: "search",
      list: "#some-list",
      maxlength: 255,
      minlength: 3,
      pattern: ".*",
      placeholder: "Enter your search",
      required: true,
      size: 20,
      value: "reset",
    });

    const expected =
      `<input type="search" autocomplete="search" list="#some-list" maxlength="255" minlength="3" name="name" pattern=".*" placeholder="Enter your search" required size="20" value="reset" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=submit]", async () => {
    const actual = submitInput({
      name: "name",
      value: "submit",
    });

    const expected = `<input type="submit" name="name" value="submit" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=tel]", async () => {
    const actual = telInput({
      name: "name",
      autocomplete: "tel",
      list: "#some-list",
      maxlength: 255,
      minlength: 3,
      pattern: ".*",
      placeholder: "Enter your phone number",
      readonly: true,
      size: 20,
      value: "00497789",
    });

    const expected =
      `<input type="tel" autocomplete="tel" list="#some-list" maxlength="255" minlength="3" name="name" pattern=".*" placeholder="Enter your phone number" readonly size="20" value="00497789" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=text]", async () => {
    const actual = textInput({
      name: "name",
      autocomplete: "given-name",
      list: "#some-list",
      maxlength: 255,
      minlength: 3,
      pattern: ".*",
      placeholder: "Enter your phone number",
      readonly: true,
      required: true,
      value: "John Doe",
    });

    const expected =
      `<input type="text" autocomplete="given-name" list="#some-list" maxlength="255" minlength="3" name="name" pattern=".*" placeholder="Enter your phone number" readonly required value="John Doe" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=time]", async () => {
    const actual = timeInput({
      name: "name",
      autocomplete: "time",
      list: "#some-list",
      readonly: true,
      step: 1,
      value: "John Doe",
    });

    const expected =
      `<input type="time" autocomplete="time" list="#some-list" name="name" readonly step="1" value="John Doe" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=url]", async () => {
    const actual = urlInput({
      name: "name",
      autocomplete: "website",
      list: "#some-list",
      maxlength: 255,
      minlength: 3,
      pattern: ".*",
      placeholder: "Enter your phone number",
      readonly: true,
      required: true,
      size: 30,
      value: "http://example.com",
    });

    const expected =
      `<input type="url" autocomplete="website" list="#some-list" maxlength="255" minlength="3" name="name" pattern=".*" placeholder="Enter your phone number" readonly required size="30" value="http://example.com" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });

  await t.step("input[type=week]", async () => {
    const actual = weekInput({
      name: "name",
      autocomplete: "website",
      list: "#some-list",
      step: 1,
      value: "1",
    });

    const expected =
      `<input type="week" autocomplete="website" list="#some-list" name="name" step="1" value="1" />`;
    const rendered = minify(await renderToString(actual));
    assertEquals(rendered, expected);
  });
});

Deno.test("subtyping input elements", async (t) => {
  const textField = (
    labelText: string,
    attributes: TypedInputAttributes<"text">,
  ) => {
    const id = attributes.id;
    return html`${label(labelText, { for: id })}${textInput(attributes)}`;
  };

  const expected =
      `<label for="my-element">content</label><input type="text" id="my-element" />`;
    const rendered = minify(await renderToString(textField("content", { id: "my-element" })));
    assertEquals(rendered, expected);
})
