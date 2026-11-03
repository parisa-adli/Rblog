"use client";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";
import useDeleteComment from "../useDeleteComment";
import { useRouter } from "next/navigation";
import UpdateCommentForm from "./UpdateCommentForm";

export function DeleteComment({ id }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, deleteComment } = useDeleteComment();
  const router = useRouter();

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف نظر`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          title={`حذف نظر`}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deleteComment(
              { id },
              {
                onSuccess: () => {
                  setIsDeleteOpen(false);
                  router.refresh("/profile/comments");
                },
              }
            );
          }}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}

export function UpdateComment({ comment }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon className="text-error" />
      </ButtonIcon>

      <Modal
        title={`ویرایش نظر`}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      >
        <UpdateCommentForm
          onClose={() => setIsEditOpen(false)}
          comment={comment}
        />
      </Modal>
    </>
  );
}
