export const groupBy = <TItem>(arr: TItem[], selector: (item: TItem) => string) => {
  return arr.reduce((acc, item) => {
    let groupName = selector(item);
    if(groupName === "constructor") {
      groupName = "ctor";
    }

    if (!acc[groupName]) {
      acc[groupName] = [];
    }
  
    acc[groupName].push(item);
  
    return acc;
  }, <Record<string, any>>{});
};