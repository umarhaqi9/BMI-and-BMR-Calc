import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import './Home.css';
import React from "react";
import DarkModeToggle from '../components/DarkModeToggle';

const Home: React.FC = () => {
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
          <DarkModeToggle/>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h2 className='ion-text-center'>Pick your calculator</h2>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton className='nav-button' size='large' expand='block' routerLink='/bmi'>BMI Calculator</IonButton>
            </IonCol>
            <IonCol>
              <IonButton className='nav-button' size='large' expand='block' routerLink='/bmr'>BMR Calculator</IonButton>
            </IonCol>
          </IonRow>
          

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
