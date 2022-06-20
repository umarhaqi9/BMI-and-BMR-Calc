import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButtons, IonBackButton ,IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAlert, IonRadioGroup, IonListHeader, IonRadio, IonText, IonToggle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { calculatorOutline, moon, refreshOutline} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

import {useRef, useState} from "react";
import BmrControls from '../components/BmrControls';
import InputControl from '../components/InputControl';
import BmrResult from '../components/BmrResult';
import DarkModeToggle from '../components/DarkModeToggle';

setupIonicReact();

const BmrCalc: React.FC = () => {
  const [calculatedBMR, setCalculatedBMR] = useState<number>();
  const [BMR1, setBMR1] = useState<number>();
  const [BMR2, setBMR2] = useState<number>();
  const [BMR3, setBMR3] = useState<number>();
  const [BMR4, setBMR4] = useState<number>();
  const [BMR5, setBMR5] = useState<number>();
  const [kategori ,setKategori] = useState<string>();
  const ageInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const [gender, setGender] = useState<string>('male');

  const clearError = () => {
    setError('');
  };

  const calculateBMR = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    const enteredAge = ageInputRef.current!.value;

    if(!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0 || !enteredAge || +enteredAge <= 0){
      setError('Please enter a valid (non-negative) input number');
      return;
    } 

    const weight = calcUnits === 'cmkg' ? enteredWeight : (+enteredWeight * 0.453592);
    const height = calcUnits === 'cmkg' ? enteredHeight : (+enteredHeight * 30.48);

    const bmr = gender === 'male' ? 66 + (13.7 * +weight) + (5 * +height) - (6.8 * +enteredAge) : 
                                    655 + (9.6 * +weight) + (1.8 * +height) - (4.7 * +enteredAge);

    

    console.log(bmr);
    setCalculatedBMR(bmr);
    setBMR1(bmr*1.2);
    setBMR2(bmr*1.375);
    setBMR3(bmr*1.55);
    setBMR4(bmr*1.725);
    setBMR5(bmr*1.9);
  };
  

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    ageInputRef.current!.value = '';
    setCalculatedBMR(undefined);
  };

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  }

  

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {text: 'Okay', handler: clearError}
        ]}></IonAlert>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonButtons slot="start">
                <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>BMR Calculator</IonTitle>
            {/* <DarkModeToggle/> */}
          </IonToolbar>
        </IonHeader>
        <IonContent color='secondary' className='ion-padding'>
          <IonGrid>
            <IonRow>
              <IonCol size-sm='8' offset-sm='2' size-md='6' offset-md='3'>
                <IonGrid className='ion-no-padding'>
                  <IonRow>
                    <IonCol>
                      <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}/>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonItem color='tertiary'>
                              <IonLabel  position='floating'>Age</IonLabel>
                              <IonInput ref={ageInputRef}></IonInput>
                          </IonItem>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonItem color='tertiary'>
                              
                              <IonRadioGroup  value={gender} onIonChange={e => setGender(e.detail.value)}>
                                  <IonListHeader>
                                      <IonLabel>Gender</IonLabel>
                                  </IonListHeader>
                                  <IonItem color='tertiary'>
                                      <IonLabel>Male</IonLabel>
                                      <IonRadio  slot='start' value="male"/>
                                  </IonItem>
                                  <IonItem color='tertiary'>
                                      <IonLabel>Female</IonLabel>
                                      <IonRadio  slot='start' value="female"/>
                                  </IonItem>
                              </IonRadioGroup>
                          </IonItem>
                      </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol>
                      <IonItem color='tertiary'>
                        <IonLabel  position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                        <IonInput ref={heightInputRef}></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  
                  <IonRow>
                    <IonCol>
                      <IonItem color='tertiary'>
                        <IonLabel  position="floating">Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                        <IonInput ref={weightInputRef}></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>

                  
                  
                  <BmrControls onCalculate={calculateBMR} onReset={resetInputs}/>
                  {calculatedBMR && (
                    <BmrResult BMRCalculated={calculatedBMR} onKategori={kategori}
                    onBmr1={BMR1} onBmr2={BMR2} onBmr3={BMR3} onBmr4={BMR4} onBmr5={BMR5}/>
                  )}
                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        </IonContent>
      </IonApp>
    </>
  )
};

export default BmrCalc;
