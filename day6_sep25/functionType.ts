
  //interface types

  interface StringFormat {
    (str: string, isUpper: boolean): string
    }
  let format: StringFormat;

  format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
   };

   console.log(format('hi', true));