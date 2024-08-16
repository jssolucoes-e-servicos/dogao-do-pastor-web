export type Intention = {
    id?: string;
    intent?: string;
    utterances?: Answer[];
    answers?: Utterances[];
    text?: string;
    image?:string;
    link?: string;
    type?:string;
    content?:string;
  };

  type Answer = {
    text?: string;
    image?: string;
    link?: string;
  }
  
  type Utterances ={
    image: any;
    text?: string;
  }