export const valueMap = new Map<number, string>([
    [0, "Tak"],
    [1, "Nie – projekt w weryfikacji"],
    [2, "Nie – projekt w ponownej weryfikacji"],
    [3, "Nie – rezygnacja z instalacji"],
  ]);
  
  export const map = (value: number): string => valueMap.get(value) ?? "";