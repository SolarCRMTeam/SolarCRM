export const valueMap = new Map<number, string>([
    [0, "Zakup i montaż instalacji"],
    [1, "Zakup instalacji"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";