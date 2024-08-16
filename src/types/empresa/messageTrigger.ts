export type MessageTrigger = {
    id: string;
    name: string;
    person: string;
    phone: string;
    active: boolean;
    image: string;
    createdAt: string;
    updatedAt: string;
    data: string;
    enviado:boolean;
    interaction:number;
    lastInteractionDate?:Date;
    conteudo?: messagesclient[] | undefined;
    companybarberId: string;
    customMessage: string;

  }

  type messagesclient = {
    text?: string;
    image?: string;
    link?: string;
    data?: string;
};