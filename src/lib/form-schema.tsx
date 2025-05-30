import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email must be less than 100 characters' }),
  subject: z
    .string()
    .min(1, { message: 'Subject is required' })
    .max(100, { message: 'Subject must be less than 100 characters' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
  twitter: z
    .string()
    .regex(/^[a-zA-Z0-9_]{1,15}$/, { 
      message: 'Only letters, numbers and underscores (max 15 chars)' 
    })
    .optional()
    .or(z.literal('')),
  linkedin: z
    .string()
    .regex(/^[a-zA-Z0-9-]+$/, { 
      message: 'Only letters, numbers and hyphens allowed' 
    })
    .max(100, { message: 'Must be less than 100 characters' })
    .optional()
    .or(z.literal(''))
});

export type FormValues = z.infer<typeof formSchema>;