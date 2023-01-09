import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ListRessource from '../components/ListUser';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste de pizza</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Liste de pizza</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Liste de pizza">
          <ListRessource />
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
