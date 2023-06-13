import { PatientInterface } from 'interfaces/patient';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  patient: PatientInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  filter: {
    roq_user_id?: string;
    tenant_id?: string;
  };
}
