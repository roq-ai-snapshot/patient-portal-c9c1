import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  file_name: string;
  file_path: string;
  user_id: string;
  clinic_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_name?: string;
  file_path?: string;
  user_id?: string;
  clinic_id?: string;
}
