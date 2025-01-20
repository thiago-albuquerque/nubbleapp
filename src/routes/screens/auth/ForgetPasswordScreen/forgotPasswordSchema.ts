import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido!').toLowerCase(),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
