type FormState = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bio: string;
  contact: string;
  course_module: string;
};

type FormAction = {
  type: string;
  field: string;
  value: string;
};

export type { FormAction, FormState };
