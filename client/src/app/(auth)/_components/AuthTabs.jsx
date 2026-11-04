"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "context/AuthContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const signinSchema = yup.object({
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

const signupSchema = yup.object({
  name: yup
    .string()
    .min(5, "نام و نام خانوادگی الزامی است")
    .max(30, "حداکثر 30 کاراکتر وارد شود")
    .required(),
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(signinSchema),
    mode: "onTouched",
    defaultValues: { email: "demo@demo.com", password: "demo1234" },
  });
  const { signin } = useAuth();

  return (
    <form onSubmit={handleSubmit((v) => signin(v))} className="space-y-10">
      <RHFTextField
        label="ایمیل"
        name="email"
        register={register}
        dir="ltr"
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="رمز عبور"
        name="password"
        register={register}
        type="password"
        dir="ltr"
        isRequired
        errors={errors}
      />
      <div className="flex justify-center">
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Button type="submit" variant="primary" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });
  const { signup } = useAuth();

  return (
    <form onSubmit={handleSubmit((v) => signup(v))} className="space-y-10">
      <RHFTextField
        label="نام و نام خانوادگی"
        name="name"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="ایمیل"
        name="email"
        register={register}
        dir="ltr"
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="رمز عبور"
        name="password"
        register={register}
        type="password"
        dir="ltr"
        isRequired
        errors={errors}
      />
      <div className="flex justify-center">
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Button type="submit" variant="primary" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

function AuthTabs({ defaultTab = "login" }) {
  const [tab, setTab] = useState(defaultTab);
  const tabClass = (active) =>
    `flex-1 pb-2 text-center font-bold transition-colors ${
      active
        ? "text-primary-900 border-b-2 border-primary-900"
        : "text-secondary-400 border-b border-secondary-200"
    }`;

  return (
    <div>
      <div className="flex mb-8">
        <button
          type="button"
          onClick={() => setTab("login")}
          className={tabClass(tab === "login")}
        >
          ورود
        </button>
        <button
          type="button"
          onClick={() => setTab("signup")}
          className={tabClass(tab === "signup")}
        >
          ثبت نام
        </button>
      </div>
      {tab === "login" ? <SigninForm /> : <SignupForm />}
    </div>
  );
}
export default AuthTabs;
