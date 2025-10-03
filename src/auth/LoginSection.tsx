import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { userShema, type UserFormValues } from "./shema";

import "../style/index.css";
import api from "../api_intercepto";
import ButtonPhone, { ButtonPass } from "./ButtonSection";

export default function Login() {
  const { register,handleSubmit,control  } = useForm<UserFormValues>({
    resolver: zodResolver(userShema),
    defaultValues: {
      phone_number: "+380",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserFormValues> = async (data) => {
    try {
      const response = await api.post("/auth/login", data, {
        withCredentials: true,
      });
      localStorage.setItem("bearer", response.data);
    } catch (error) {
      console.log("Ошибка авторизации:", error);
    }
  };

  return (
    <section className="scale-wrapper">
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Sign In</p>
          <hr />
          <form className="form_auth_style" onSubmit={handleSubmit(onSubmit)}>
            <ButtonPhone control ={control}/>
            <ButtonPass register={register}/>
            <label className="radio-btn">
              <input type="radio" value="Yes" />
              <span className="radio-custom"></span>
              <span className="text-radio-button">Remember Me</span>
            </label>
            <button
              className="form_auth_button"
              type="submit"
              name="form_auth_submit"
            >
              Sign In
            </button>

            <a href="/forgot_pass">Forgot Password?</a>
            <a href="/register">Create an Account</a>
          </form>
        </div>
      </div>
    </section>
  );
}
