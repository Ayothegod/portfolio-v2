import * as z from "zod";

export const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(6, { message: "name is too short" }).max(100, {message: "your name should be less than 100 characters"}),
  subject: z.string().min(6, { message: "subject is too short" }).max(100, {message: "subject should be less than 100 characters"}),
  message: z.string().min(6, { message: "message is too short" }).max(300, {message: "message cannot should be less than 300 characters"}),
});
