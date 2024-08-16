export type Comando = {
    id?: string;
    name?: string;
    descritivo?: string;
   
  };

  export interface Cell {
    id: string;
    name: string;
  }
  
  export interface Dog {
    amount :      number;
    isComplete: Boolean;
    potato: Boolean;
    ketchup: Boolean;
    peas: Boolean;
    mayonnaise: Boolean;
    corn: Boolean;
    redSauce: Boolean;
    cheeseSauce: Boolean;
    mustard: Boolean;
    bread: Boolean;
    gratedCheese: Boolean;
    sausage: Boolean;
  }
  
  export interface Seller {
    id?: string;
    name: string
    phone: string
  }
  
  export interface Customer {
    id: string;
      name: string;
      phone: string;
      address: string;
      reference: string;
  }
 