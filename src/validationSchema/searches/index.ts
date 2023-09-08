import * as yup from 'yup';

export const searchValidationSchema = yup.object().shape({
  query: yup.string().required(),
  user_id: yup.string().nullable().required(),
  platform_id: yup.string().nullable().required(),
});
