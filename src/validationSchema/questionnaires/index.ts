import * as yup from 'yup';

export const questionnaireValidationSchema = yup.object().shape({
  title: yup.string().required(),
  clinic_id: yup.string().nullable().required(),
});
