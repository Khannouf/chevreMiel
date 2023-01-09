
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { log } from 'console';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const PizzaDetail = ({ }) => {
    const url:string = window.location.href;
    const id = parseInt(url.slice(27));
    //getData.map(user => <li>{user.username}</li>)(USER_KEY).then((data) => {})
    const [pizzaDetail, setPizzaDetail] = useState<any[]>([])

    const getResources = async () => {
        const response = await fetch('https://ynov.jcatania.io/pizzas/' + id).then(res => res.json()).catch(() => null);
        if (response) setPizzaDetail(response)
    };

    useEffect(() => {
        getResources()
        
    }, []);
    console.log(pizzaDetail);
    

     return pizzaDetail.map(pizza => (
                 <IonCard>
                 <img alt="Pizza image" src={pizza.photo} />
                 <IonCardHeader>
                 <IonCardTitle>{pizza.id} - {pizza.nom}</IonCardTitle>
                 <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                 </IonCardHeader>
  
                 <IonCardContent>
                 Here's a small text description for the card content. Nothing more, nothing less.
                 </IonCardContent>
             </IonCard>
                 ));
};

export default PizzaDetail