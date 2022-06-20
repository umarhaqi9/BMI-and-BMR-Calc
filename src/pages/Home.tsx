import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRow,  IonText,  IonTitle,  IonToolbar } from '@ionic/react';
import './Home.css';
import React from "react";
import DarkModeToggle from '../components/DarkModeToggle';
import { calculator } from 'ionicons/icons';

const Home: React.FC = () => {
  

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar color='primary'>
          <IonIcon size='large' className='logo' icon={calculator} slot='start'/>
          <IonTitle>BMCalculator</IonTitle>
          <DarkModeToggle/>
        </IonToolbar>
      </IonHeader>
      <IonContent color='secondary' className='ion-padding'>
        <h2 className='ion-text-center'>Pick your calculator</h2>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton strong color='primary' className='nav-button' size='large' expand='block' routerLink='/bmi'>BMI Calculator</IonButton>
            </IonCol>
            <IonCol>
              <IonButton strong color='primary' className='nav-button' size='large' expand='block' routerLink='/bmr'>BMR Calculator</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar color='primary' className='ion-text-center'>
          <IonText >Copyright © 2022 Umar Haqi</IonText>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
