
  export type Lead ={
    messageCount: any;
    id: string;
    external_id?: string;
    source_id?: string;
    name: string;
    phone: string;
    email?: string;
    last_message_sent?: Date;
    step_second_call_template?: number;
    step_no_interaction?: number;
    no_interaction_quantity?: number;
    accept_template?: boolean;
    accept_second_template?: boolean;
    status?: string;
    dialog: AceleraLeadsDialog[]; // Use any[] para representar um array de tipos desconhecidos
    config: string;
    config_id: string;
    whitelabel_config: string;
    last_intent?: string;
    broker?: string;
    origin?: string;
    send?: boolean;
    sendAt?: Date;
    isBusinessAutoResponder?: boolean;
    start_message?: Date;
    scheduling_data?: string;
    product_choose_by_client?: string;
    product_id?: number;
    created_at?: Date;
    updated_at?: Date;
    curation?: AceleraLeadsCuration;
  }
  type AceleraLeadsCuration = {
    status?:          CurationStatus;
    data_requirement?:  Date;
    data_conclusion?:   Date;
    interest_ai?:       CurationInterest;
    interest_real?:     CurationInterest;
  }
  enum CurationStatus {
    PENDENTE,
    CONCLUIDO
  }
  
  enum CurationInterest {
    INTERESSADO,
    SEM_INTERESSE
  }
  
  type AceleraLeadsDialog = {
  error?:       JSON;
  intent?:      string;
  isDelivered?: Boolean;
  isRead?:      Boolean;
  isSent?:      Boolean;
  statusFrom?:  string;
  statusTo?:    string;
  timestamp?:   JSON;
  who?:         string;
  }