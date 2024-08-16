export function formatCurrency(value:any) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    return formatter.format(value);
  }
  
//   export function formatCurrency(value) {
//     const formatter = new Intl.NumberFormat("pt-BR", {
//       style: "currency",
//       currency: "BRL",
//     });
  
//     return formatter.format(value);
//   }