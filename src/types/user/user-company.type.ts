export type UserCompanyType = {
    company: any;
    id: string,
    name: string;
    email: string;
    profile: string;
    phone: string;
    active: Boolean;
    createdAt?:Date | undefined;
    updatedAt?:Date | undefined;
    aceleraCompanyId: string;
  
  }

// id: '6523f8c4aea99de87fc80d4b',
// email: 'fernando.sorrentino@aceleraia.com.br',
// name: 'Fernando Sorrentino',
// profile: 'master',
// phone: '19997313515',
// active: true,
// createdAt: '2023-10-09T12:57:40.817Z',
// updatedAt: '2023-10-09T12:57:40.817Z',
// aceleraCompanyId: '6523f77caea99de87fc80d4a',
// company: {
//   id: '6523f77caea99de87fc80d4a',
//   name: 'AceleraIa',
//   active: true,
//   createdAt: '2023-10-09T12:52:12.009Z',
//   updatedAt: '2023-10-18T11:17:19.800Z',
//   acelera_parceiro_configs: [ [Object], [Object], [Object], [Object], [Object] ]
// }