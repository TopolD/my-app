
import {z} from "zod";

export const CardShema = z.object({
    id:z.number(),
    name:z.string(),
    value:z.number(),
    history_transaction:z.array(z.string()),
})

export const CardsShema= z.array(CardShema);
export type CardFormValues = z.infer<typeof CardShema>;