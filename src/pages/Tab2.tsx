import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CreatePizza from '../components/CreatePizza';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Créer une pizza</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Créer une pizza</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Créer une pizza">
          <CreatePizza />
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
