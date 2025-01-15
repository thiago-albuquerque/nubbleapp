import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\w][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido!').toLowerCase(),
  fullname: z
    .string()
    .min(3, 'Nome muito curto!')
    .max(50, 'Nome muito grande!')
    .transform(value => {
      return value
        .split(' ')
        .map(
          word =>
            word.charAt(0).toLocaleUpperCase() +
            word.slice(1).toLocaleLowerCase(),
        )
        .join(' ');
    }),
  email: z.string().email('Email inválido!').toLowerCase(),
  password: z.string().min(6, 'Mínimo de 6 dígitos'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
