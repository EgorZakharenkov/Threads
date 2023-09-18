"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentValidation } from "@/lib/validations/thred";
import * as z from "zod";
import { addCommentToThread } from "@/lib/actions/thread.actions";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Props {
  threadId: string;
  userImage: string;
  currentUserId: string;
}

const Comment = ({ threadId, userImage, currentUserId }: Props) => {
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname,
    );
    form.reset();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex items-center w-full gap-3">
              <FormLabel className="w-14 h-14 relative">
                <Image
                  src={userImage}
                  alt="userImage"
                  fill
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  placeholder="Comment..."
                  {...field}
                  className="no-focus text-light-1 outline-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="bg-primary-500 comment-form_btn" type="submit">
          Reply
        </Button>
      </form>
    </Form>
  );
};

export default Comment;
