export const valueMap = new Map<number, string>([
  [0, "Firma"],
  [1, "Prosument"],
  [2, "Rolnik"],
]);

export const map = (value: number): string => valueMap.get(value) ?? "";
