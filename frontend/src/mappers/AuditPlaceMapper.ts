export const valueMap = new Map<number, string>([
    [0, "Dach"],
    [1, "Grunt"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";