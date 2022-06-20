import {  IonCol,  IonRow, IonCard, IonCardHeader, IonCardSubtitle,  IonCardContent } from "@ionic/react";
import React from "react";
import './BmiResult.css';

const BmrResult: React.FC<{BMRCalculated: number | undefined, onKategori: string|undefined,
onBmr1: number | undefined, onBmr2: number | undefined, onBmr3: number | undefined, onBmr4: number | undefined, onBmr5: number | undefined}> = props => {
    return(
      <IonCard id="result">
        <IonCardHeader className='ion-text-center'>
            
            <IonCardSubtitle>BMR = {props.BMRCalculated} Calories/day</IonCardSubtitle>
            <IonCardSubtitle>Daily calorie needs based on activity level</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <IonRow>
                <IonCol>
                    <b>Activity Level</b>
                </IonCol>
                <IonCol className='ion-text-right'>
                    <b>Calorie</b>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p>Sedentery: little or no exercise</p>
                </IonCol>
                <IonCol className='ion-text-right'>
                    <p>{props.onBmr1}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p>Exercise 1-3 times/week</p>
                </IonCol>
                <IonCol className='ion-text-right'>
                    <p>{props.onBmr2}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p>Exercise 4-5 times/week</p>
                </IonCol>
                <IonCol className='ion-text-right'>
                    <p>{props.onBmr3}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p>Daily exercise or Intense exercise 3-4 times/week</p>
                </IonCol>
                <IonCol className='ion-text-right'>
                    <p>{props.onBmr4}</p>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p>Intense exercise 6-7 times/week</p>
                </IonCol>
                <IonCol className='ion-text-right'>
                    <p>{props.onBmr5}</p>
                </IonCol>
            </IonRow>
        </IonCardContent>
    </IonCard>
    )
}

export default BmrResult;