import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface QuestionnaireInterface {
  id?: string;
  title: string;
  clinic_id: string;
  created_at?: any;
  updated_at?: any;

  clinic?: ClinicInterface;
  _count?: {};
}

export interface QuestionnaireGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  clinic_id?: string;
}
