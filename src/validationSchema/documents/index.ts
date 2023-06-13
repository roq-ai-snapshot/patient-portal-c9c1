import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  file_name: yup.string().required(),
  file_path: yup.string().required(),
  user_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
});
