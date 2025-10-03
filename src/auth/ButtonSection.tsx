import { Controller,  type Control,  type UseFormRegister } from "react-hook-form";
import { InputMask } from "@react-input/mask";
import type { UserFormValues } from "./shema";


interface ButtonPhoneProps {
  control: Control<UserFormValues>;
}


export default function ButtonPhone({ control }: ButtonPhoneProps) {
  return (
    <div>
      <span className="form_label">Phone</span>
      <Controller
        name="phone_number"
        control={control}
        render={({ field }) => (
          <InputMask
            {...field}
            mask="+380_________"
            replacement={{ _: /\d/ }}
            showMask
          />
        )}
      />
    </div>
  );
}

export function ButtonPass({
  register,
}: {
  register: UseFormRegister<UserFormValues>;
}) {
  return (
    <div>
      <span className="form_label">Password</span>
      <input type="password" {...register("password", { required: true })} />
    </div>
  );
}
