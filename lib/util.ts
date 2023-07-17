export const isObjectLiteral = (thing: unknown) => {
  return Object.getPrototypeOf(thing) === Object.prototype;
};
