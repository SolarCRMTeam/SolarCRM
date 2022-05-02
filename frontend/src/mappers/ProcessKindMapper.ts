export const valueMap = new Map<number, string>([
    [0, "Własne"],
    [1, "Call center"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";
  