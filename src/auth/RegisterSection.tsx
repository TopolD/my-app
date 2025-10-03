import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { UserShemaCreate, type UserFormCreate } from "./shema";

import api from "../api_intercepto";

export default function Register() {
  const {
    register,
    handleSubmit,
  } = useForm<UserFormCreate>({
    resolver: zodResolver(UserShemaCreate),
    defaultValues: {
      username: "",
      phone_number: "",
      password: "",
      confirm_password: "",
    },
  });
  const onSubmit: SubmitHandler<UserFormCreate> = async (data) => {
    try {
      api.post("/auth/register", data);
      window.location.href = "/";
    } catch (error) {
      console.log("Неверный логин или пароль");
    }
  };

  return (
    <section className="scale-wrapper">
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Sign In</p>
          <hr />
          <form
            className="form_auth_style"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            <span className="form_label">Username</span>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="faikol"
            />
            <span className="form_label">Phone</span>
            <input
              type="tel"
              {...register("phone_number", { required: true })}
              placeholder="380987676123"
            />
            <span className="form_label">Password</span>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="******"
            />
            <span className="form_label">Password Confirm</span>
            <input
              type="password"
              {...register("confirm_password", { required: true })}
              placeholder="******"
            />
            {/* <label className={`radio-btn ${errors.privacyPolicy ? "radio-error" : ""}`}>
              <input
                type="radio"
                value="Privacy Policy"
               
              />
              <span className="radio-custom"></span>
              <span className="text-radio-button">I agree to the Terms of Service and Privacy Policy</span>
            </label> */}
            <button
              className="form_auth_button"
              type="submit"
              name="form_auth_submit"
            >
              Sign Up
            </button>
            <a href="/login">Already have an account? </a>
          </form>
        </div>
      </div>
    </section>
  );
}
