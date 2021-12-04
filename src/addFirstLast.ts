export const addFirstLast = (obj: any) => {
  if(Array.isArray(obj)) {
    obj.forEach((item, index) => {
      item._first_ = index === 0;
      item._last_ = index === obj.length - 1;
      
      addFirstLast(item);
    });
  } else if(typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      if(obj.hasOwnProperty(key)) {
        addFirstLast(obj[key]);
      }
    });
  }
};