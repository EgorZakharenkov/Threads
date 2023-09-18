import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(1, { message: "Минимум 1 символ" }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(1, { message: "Минимум 1 символ" }),
});
