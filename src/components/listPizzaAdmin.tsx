
import { IonButton, IonIcon, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { log } from 'console';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/cart';

const ListPizza = () => {
    const { name, setName } = useCart();
    //getData.map(user => <li>{user.username}</li>)(USER_KEY).then((data) => {})
    const [data, setData] = useState<any[]>([])

    const getResources = async () => {
        const response = await fetch('https://ynov.jcatania.io/pizzas').then(res => res.json()).catch(() => null);
        if (response) setData(response)
    };

    useEffect(() => {
        getResources()
    }, []);

    const putInCart = async () => {
        alert('put in cart');
    };

    const deletePizza = async () => {
        if (window.confirm("Souhaitez vous vraiment supprimer cette pizza")) {
            alert('supprimé')
        }
    };

    return <>
        <h1>{name}</h1>
        <IonInput value={name} onIonChange={e => setName(e.target.value as string)} />
        <IonList inset={true}>
            {data.map(pizza => (
                <IonItem key={pizza.id} href={`http://localhost:3000/tab1/${pizza.id}`}>
                    <IonLabel>{pizza.nom}</IonLabel>
                    <IonButton onClick={putInCart}><IonIcon name="cart-outline" /></IonButton>
                </IonItem>
            ))}
        </IonList>
    </>
};

export default ListPizza