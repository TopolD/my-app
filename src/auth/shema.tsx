import {z} from "zod";

export const userShema = z.object({
  phone_number:z.string(),
  password:z.string(),
})

export type UserFormValues = z.infer<typeof userShema>;

export const UserShemaCreate = z.object({
  username:z.string(),
  phone_number:z.string().max(13),
  password:z.string(),
  confirm_password:z.string(),
})
.refine((data) => data.password === data.confirm_password, {
  message: "Пароли не совпадают",
  path:['confirm_password']
});


export type UserFormCreate = z.infer<typeof UserShemaCreate>
