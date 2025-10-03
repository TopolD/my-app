

import {  type CardFormValues } from "./shema";
import { useEffect, useState } from "react";
import { Card_of_user } from "./dependencies";




export default function MainWindow (){
  const [cards,setCards] = useState<CardFormValues[]>([]);
  const [loading,setLoading] = useState (true);
  
  useEffect(()=>{
    (async ()=>{
      const data = await Card_of_user();
      setCards(data);
      setLoading(false);
    })
  })
    if (loading) return <p>Загрузка...</p>;
    return (
        <section>
            <div>
                <div>
                    <div className="form_for_card_block">
                        <div className="form_for_card_content">
                          <ul>
                            {cards.map((CardFormValues)=>(
                              <li key={CardFormValues.name}>{CardFormValues.name}</li>
                            ))}
                          </ul>
                        </div>
                    </div>
                    <div className="form_for_transaction"></div>
                    <div className="form_for_calendar"></div>
                </div>
            </div>
        </section>
    )
}
    