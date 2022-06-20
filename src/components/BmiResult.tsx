import {  IonCol,  IonRow, IonCard, IonCardHeader } from "@ionic/react";
import React from "react";
import './BmiResult.css';

const BmiResult: React.FC<{BMICalculated: number | undefined, onKategori: string|undefined, onColor: string|undefined}> = props => {
    return(
            <IonRow>
              <IonCol>
                <IonCard color={props.onColor} id="result">
                  <IonCardHeader className='ion-text-center'>
                    <h2>{props.BMICalculated}</h2>
                    <h1>{props.onKategori}</h1>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
    )
}

export default BmiResult;