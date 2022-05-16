export const valueMap = new Map<number, string>([
    [0, "Tak"],
    [1, "W przygotowaniu"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";