
import { CardsShema, type CardFormValues } from "./shema";
import api from "../api_intercepto";

export async function Card_of_user(): Promise<CardFormValues[]> {
  try {
    const response = await api.get("/Card");
    

    const cards = CardsShema.parse(response.data);

    return cards;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    return [];
  }
}