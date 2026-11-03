"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RHFTextField from "@/ui/RHFTextField";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import useEditCategory from "./useEditCategory";
import useCreateCategory from "./useCreateCategory";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    englishTitle: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    description: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

function CreateCategoryForm({ categoryToEdit = {} }) {
  const { _id: editId, title, englishTitle, description } = categoryToEdit;
  const isEditSession = Boolean(editId);
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      englishTitle,
      description,
    };
  }
  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });

  const onSubmit = (data) => {
    if (isEditSession) {
      editCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/categories");
          },
        }
      );
    } else {
      createCategory(data, {
        onSuccess: () => router.push("/profile/categories"),
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="englishTitle"
        label="عنوان انگلیسی"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        name="description"
        label="توضیحات"
        register={register}
        errors={errors}
        isRequired
      />
      <div>
        {isCreating || isEditing ? (
          <SpinnerMini />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}
export default CreateCategoryForm;
