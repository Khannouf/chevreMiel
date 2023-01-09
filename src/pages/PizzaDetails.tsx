import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

type PizzaResponse = {
  id: number,
  nom: string,
  ingredients: string[],
  description: string,
  photo: string,
  prix: number
}
type PizzaInterface = {
  id: number,
  nom: string,
  ingredients: {
    id: number,
    nom: string
  }[],
  description: string,
  photo: string,
  prix: number
}

const PizzaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [pizzaDetail, setPizzaDetail] = useState<PizzaInterface | null>(null)
  const getResources = useCallback(async () => {
    const response = await fetch('https://ynov.jcatania.io/pizzas/' + id)
      .then(res => res.json() as Promise<PizzaResponse>)
      .catch(() => null);
    if (!response) return
    const ingredients = await Promise.all(response.ingredients.map(async ingredient =>{
      const response = await fetch('https://ynov.jcatania.io/ingredients/' + ingredient)
      .then(res => res.json() as Promise<{
        id: number,
        nom: string
      }>)
      return response
    }))
    setPizzaDetail({...response, ingredients: ingredients})
    console.log(ingredients);
    
  }, [id]);
  useEffect(() => {
    getResources()
  }, [getResources])


  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 2</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      {pizzaDetail ? <>
        <IonCard>
          <img alt="Pizza image" src={pizzaDetail.photo} />
          <IonCardHeader>
            <IonCardTitle>{pizzaDetail.id} - {pizzaDetail.nom}</IonCardTitle>
            <IonCardSubtitle>{pizzaDetail.description}</IonCardSubtitle>
          </IonCardHeader>
          {pizzaDetail.ingredients.map(ingredient =>
            <IonCardContent key={ingredient.id}>
            ingredient : { ingredient.nom }
          </IonCardContent>
            )}
          <IonCardContent>
            Here's a small text description for the card content. Nothing more, nothing less.
          </IonCardContent>
        </IonCard>
      </> : <>loading</>}
    </IonContent>
  </IonPage>
};

export default PizzaDetails;
