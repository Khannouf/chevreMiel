import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea,  } from '@ionic/react';
import React, { useEffect, useState } from 'react';


export default function CreatePizza() {
    const [nom, setNom] = useState('');
    // const [ingredients, setIngredients] = useState([]);
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState<any[]>([])


    const getIngredients = async () => {
        const response = await fetch('https://ynov.jcatania.io/ingredients').then(res => res.json()).catch(() => null);
        if (response) setIngredients(response)
    };

    useEffect(() => {
        getIngredients()
    }, []);

    return (
        <div>
           <form /*onSubmit={createPizza}*/>
                <IonList>
                    <IonItem>
                        <IonLabel>Nom</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Ingredients</IonLabel>
                        <IonSelect placeholder="Select ingredients" multiple>
                        {ingredients.map(ingredient => (
                            <IonSelectOption value={ingredient.id} key={ingredient.id}>{ingredient.nom}</IonSelectOption>
                        ))}
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Description</IonLabel>
                        <IonTextarea placeholder="Description"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Default input</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                    <IonButton expand="block" type="submit">Créer</IonButton>
                </IonList>
            </form>
        </div>
    


    )
}