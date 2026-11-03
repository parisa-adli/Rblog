"use client";

import { useForm } from "react-hook-form";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import SubmitButton from "@/ui/SubmitButton";
import RHFSelect from "@/ui/RHFSelect";
import Button from "@/ui/Button";
import useUpdateComment from "../useUpdateComment";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";

const options = [
  {
    id: 1,
    label: "رد شده",
    value: 0,
  },
  {
    id: 2,
    label: "در انتظار تایید",
    value: 1,
  },
  {
    id: 3,
    label: "قبول",
    value: 2,
  },
];

function UpdateCommentForm({ comment, onClose }) {
  const { isUpdating, updateComment } = useUpdateComment();
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: { status: comment.status },
  });
  const onSubmit = ({ status }) => {
    comment.status = status;
    updateComment(
      { id: comment._id, data: comment },
      {
        onSuccess: () => {
          router.refresh("/profile/comments");
          onClose();
        },
      }
    );
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label="تغییر وضعیت"
        required
        name="status"
        register={register}
        options={options}
      />
      {isUpdating ? (
        <SpinnerMini />
      ) : (
        <Button type="submit" variant="primary" className="w-full">
          تایید
        </Button>
      )}
    </form>
  );
}
export default UpdateCommentForm;
