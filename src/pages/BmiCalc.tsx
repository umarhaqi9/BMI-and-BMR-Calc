import { IonApp, IonButtons, IonBackButton , IonCol, IonContent, IonGrid, IonHeader,  IonInput, IonItem, IonLabel,  IonRow, IonTitle, IonToolbar, setupIonicReact, IonAlert} from '@ionic/react';


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
import BmiControls from '../components/BmiControls';
import InputControl from '../components/InputControl';
import BmiResult from '../components/BmiResult';


setupIonicReact();

const BmiCalc: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [kategori ,setKategori] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const [warna, setWarna] = useState<string>();

  const clearError = () => {
    setError('');
  };

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if(!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0){
      setError('Please enter a valid (non-negative) input number');
      return;
    } 

    const weight = calcUnits === 'cmkg' ? enteredWeight : (+enteredWeight * 0.453592);
    const height = calcUnits === 'cmkg' ? enteredHeight : (+enteredHeight * 30.48);

    const bmi = +weight / ((+height/100) * (+height/100));

    if(bmi < 18.5){
        setKategori("Kurus");
        setWarna("warning");
    } else if(bmi >= 18.5 && bmi < 24.9){
        setKategori("Normal");
        setWarna("success");
    } else if(bmi >= 25 && bmi < 29.9){
        setKategori("Gemuk");
        setWarna("warning");
    } else {
        setKategori("Obesitas");
        setWarna("danger");
    }

    console.log(bmi);
    setCalculatedBMI(bmi);
  };
  

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBMI(undefined);
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
            <IonTitle>BMI Calculator</IonTitle>
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
                  
                  
                  <BmiControls onCalculate={calculateBMI} onReset={resetInputs}></BmiControls>

                  {calculatedBMI && (
                    
                    <BmiResult BMICalculated={calculatedBMI} onKategori={kategori} onColor={warna}/>
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

export default BmiCalc;
