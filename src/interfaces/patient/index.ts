import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  user_id: string;
  clinic_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  clinic_id?: string;
}
