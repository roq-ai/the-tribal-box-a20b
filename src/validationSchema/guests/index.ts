import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  visited_at: yup.date().required(),
  interest: yup.string().nullable(),
  location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  platform_id: yup.string().nullable().required(),
});
