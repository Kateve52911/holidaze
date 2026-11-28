import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .regex(/^\w+$/, 'Name can only contain letters, numbers and underscore'),
  email: z
    .email('Enter a valid email address')
    .toLowerCase()
    .endsWith('@stud.noroff.no', 'Use your stud.noroff.no email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  venueManager: z.boolean(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
