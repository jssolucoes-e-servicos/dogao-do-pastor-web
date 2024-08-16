// import { MessageTrigger } from "@/types/empresa/messageTrigger";
// import { Profissional } from "@/types/empresa/profissional";
// import { ServiceCompanie } from "@/types/empresa/serviceComponie";

// export type Empresa = {
//     template: any;
//     integration_name: string;
//     message_per_runs: any;
//     acelera_parceiro_configs: any;
//     map(arg0: (item: Empresa) => import("react").JSX.Element): import("react").ReactNode;
//     length: number;

//     id: string;
//     name: string;
//     config_id:string;
//     application: string;
//     fantasy: string;
//     document: string;
//     state: string;
//     email: string;
//     phone: string;
//     city: string;
//     cep: string;
//     street:string;
//     uf: string;
//     number: string;
//     image: string;
//     active: boolean;
//     latitude: string;
//     longitude: string;
//     neighborhoodId: string;
//     enable_whatsapp:boolean;
//     service: Array<ServiceCompanie>;
//     professional: Array<Profissional>;
//     mensagem:Array<MessageTrigger>
//     customMessage:string;
//     //template?: template;
//     intents?:Array<Intention>;
//     companyId: string; // Adicione esta propriedade
//     idCompanie: string;
//     companyData :string;
//     enabled:boolean;
//     enable_to_send_us_to_lead:boolean;
//     enable_to_send_provider?:boolean;
//     whatsapp_provider?: string;
//     campaign_number_business?:string;
//     enable_curation?:boolean;
//     meta_configuration?:JSON;
    
  
//       campaign_number_id: string;
//       campaign_number_token: string;
//       webhook_validation_token: string;
//       messages_by_intent?: {
//         abandono?: ParceiroByIntent[];
//         abandono_smart ?:ParceiroByIntent[];
//         agradecimento?:ParceiroByIntent[];
//         agendamento?: ParceiroByIntent[];
//         agendamento_smart?: ParceiroByIntent[];
//         area_verde                   ?: ParceiroByIntent[];
//         area_verde_smart             ?: ParceiroByIntent[];
//         book                         ?: ParceiroByIntent[];
//         book_smart                   ?: ParceiroByIntent[];
//         confirmacao                  ?: ParceiroByIntent[];
//         confirmacao_agendamento      ?: ParceiroByIntent[];
//         confirmacao_agendamento_smart ?: ParceiroByIntent[];
//         confirmacao_de_contato       ?: ParceiroByIntent[];
//         confirmacao_de_contato_smart ?: ParceiroByIntent[];  
//         confirmacao_smart            ?: ParceiroByIntent[];
//         data_de_lancamento           ?: ParceiroByIntent[];
//         data_de_lancamento_smart     ?: ParceiroByIntent[];
//         decorado                     ?: ParceiroByIntent[];
//         decorado_smart               ?: ParceiroByIntent[];
//         diferenciais                 ?: ParceiroByIntent[];
//         diferenciais_smart           ?: ParceiroByIntent[];
//         empreendimento               ?: ParceiroByIntent[];
//         empreendimento_smart         ?: ParceiroByIntent[];
//         entrega                      ?: ParceiroByIntent[];
//         entrega_smart                ?: ParceiroByIntent[];
//         escola                       ?: ParceiroByIntent[];
//         escola_smart                 ?: ParceiroByIntent[];
//         financiamento                ?: ParceiroByIntent[];
//         financiamento_smart          ?: ParceiroByIntent[];
//         informacao_desconhecida      ?: ParceiroByIntent[];
//         informacao_desconhecida_smart ?: ParceiroByIntent[];
//         apresentacao                  ?: ParceiroByIntent[];
//         inicio                       ?: ParceiroByIntent[];
//         inicio_smart                 ?: ParceiroByIntent[];
//         lazer                        ?: ParceiroByIntent[];
//         lazer_smart                  ?: ParceiroByIntent[];
//         localizacao                  ?: ParceiroByIntent[];
//         localizacao_smart            ?: ParceiroByIntent[];
//         memorial_descritivo          ?: ParceiroByIntent[];
//         messages_business            ?: ParceiroByIntent[];
//         messages_business_smart      ?: ParceiroByIntent[];
//         nome                         ?: ParceiroByIntent[];
//         nome_smart                   ?: ParceiroByIntent[];
//         outras_localidades           ?: ParceiroByIntent[];
//         outras_localidades_smart     ?: ParceiroByIntent[];
//         pets                         ?: ParceiroByIntent[];
//         pets_smart                   ?: ParceiroByIntent[];
//         planta                       ?: ParceiroByIntent[];
//         planta_smart                 ?: ParceiroByIntent[];
//         programa_habitacional        ?: ParceiroByIntent[];
//         programa_habitacional_smart  ?: ParceiroByIntent[];
//         regras_uso_terreno           ?: ParceiroByIntent[];
//         regras_uso_terreno_smart     ?: ParceiroByIntent[];
//         solicitacao_de_contato       ?: ParceiroByIntent[];
//         solicitacao_de_contato_smart ?: ParceiroByIntent[];
//         tamanho_terreno              ?: ParceiroByIntent[];
//         tamanho_terreno_smart        ?: ParceiroByIntent[];
//         unidades_disponiveis         ?: ParceiroByIntent[]; 
//         unidades_disponiveis_smart   ?: ParceiroByIntent[];
//         vagas                        ?: ParceiroByIntent[];
//         vagas_smart                  ?: ParceiroByIntent[];
//         valor                        ?: ParceiroByIntent[];
//         valor_condominio             ?: ParceiroByIntent[];
//         valor_condominio_smart       ?: ParceiroByIntent[];
//         valor_smart?:                 ParceiroByIntent[];
//         // adicione mais propriedades conforme necessário
//       };
     
   
//   }
//   type ParceiroByIntent ={
//     content?: string;
//     step?:     Int32Array;
//     time?:    Int32Array;
//     type?: string;
//     url?: string;
//   }
//   type template = {
//     id: string;
//     phone: string;
//     name: string;
//     text:string;
//     image:string;
//     active:boolean;
//     type:string;
//     interaction:string;
// };

//  type Intention = {
//   id?: string;
//   intent?: string;
//   utterances?: Answer[];
//   answers?: Utterances[];
//   text?: string;
//   image?:string;
//   link?: string;
 
// };

// type Answer = {
//   text?: string;
//   image?: string;
//   link?: string;
// }

// type Utterances ={
//   image: any;
//   text?: string;
// }

// export type IntentionMeta = {
//   id?: string;
//   intent?: string;
//   utterances?: Answer[];
//   answers?: Utterances[];
//   text?: string;
//   image?:string;
//   link?: string;
//   type?:string
// };

// type AnswerMeta = {
//   text?: string;
//   image?: string;
//   link?: string;
// }

// type UtterancesMeta ={
//   image: any;
//   text?: string;
// }

// export interface Template {
//   template_vars: {
//     header: { type: string; content: string }[];
//     body: { type: string; content: string }[];
//   };
//   start_script: { type: string; content: string; url?: string; title?: string }[];
//   // other properties if needed
// }

// export interface MetaConfiguration {
//   template: Template;
//   // other properties if needed
// }


// types/empresa.ts

export interface Template {
  template_vars: {
    header: { type: string; content: string }[];
    body: { type: string; content: string }[];
  };
  start_script: { type: string; content: string; url?: string; title?: string }[];
}

export interface MetaConfiguration {
  template: Template;
  // other properties if needed
}
export interface TemplateListVars {
  name   ?: string;
  image  ?: string;
  content?: string;
}
export type Empresa = {
  DailyDispatch?: Dispatch[];
  
  
  company: any;
  companyUnity: any;
  template: any;
  templatelistvars?: TemplateListVars[];
  integration_name: string;
  message_per_runs: any;
  acelera_parceiro_configs?:any;
  map(arg0: (item: Empresa) => import("react").JSX.Element): import("react").ReactNode;
  length: number;

  id: string;
  name: string;
  config_id: string;
  application: string;
  fantasy: string;
  document: string;
  state: string;
  email: string;
  phone: string;
  city: string;
  cep: string;
  street: string;
  uf: string;
  number: string;
  image: string;
  active: boolean;
  latitude: string;
  longitude: string;
  neighborhoodId: string;
  enable_whatsapp: boolean;
  customMessage: string;
  intents?: Array<Intention>;
  companyId: string; 
  idCompanie: string;
  companyData: string;
  enabled: boolean;
  is_conversation_ia:boolean;
  enable_to_send_us_to_lead: boolean;
  enable_to_send_provider?: boolean;
  whatsapp_provider?: string;
  campaign_number_business?: string;
  no_interation_send?:boolean;
  enable_curation?: boolean;
  meta_configuration?: MetaConfiguration; // Use MetaConfiguration here
  
  campaign_number_id: string;
  campaign_number_token: string;
  webhook_validation_token: string;
  messages_by_intent?: {
    abandono?: ParceiroByIntent[];
    abandono_smart?: ParceiroByIntent[];
    // other properties as needed
  };
};

type Dispatch = {
  id: string;
  dispatchDate: string; // A data de despacho do lead
  dispatchCount: number; // O número de despachos no dia
  createdAt: string; // Data de criação do registro
  updatedAt: string; // Data de atualização do registro
  config_id: string; // ID da configuração associada
  isPrimary: number; // Indica se é disparo primário (1) ou secundário (2)
};

type ParceiroByIntent = {
  content?: string;
  step?: Int32Array;
  time?: Int32Array;
  type?: string;
  url?: string;
};

type Intention = {
  id?: string;
  intent?: string;
  utterances?: Answer[];
  answers?: Utterances[];
  text?: string;
  image?: string;
  link?: string;
};

type Answer = {
  text?: string;
  image?: string;
  link?: string;
};

type Utterances = {
  image: any;
  text?: string;
};

export type IntentionMeta = {
  id?: string;
  intent?: string;
  utterances?: Answer[];
  answers?: Utterances[];
  text?: string;
  image?: string;
  link?: string;
  type?: string;
};

type AnswerMeta = {
  text?: string;
  image?: string;
  link?: string;
};

type UtterancesMeta = {
  image: any;
  text?: string;
};
