import { HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";

export type WebElementContent =
  | undefined
  | null
  | boolean
  | string
  | HTMLTemplate
  | (
    | undefined
    | null
    | boolean
    | string
    | HTMLTemplate
    | HTMLTemplateGenerator
  )[];
