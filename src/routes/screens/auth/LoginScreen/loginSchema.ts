import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email inválido!').toLowerCase(),
  password: z.string().min(6, 'Mínimo de 6 dígitos'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
