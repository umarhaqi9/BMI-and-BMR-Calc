import {  IonIcon, IonToggle } from '@ionic/react';
import { moon } from 'ionicons/icons';
import '../pages/Home.css';

const DarkModeToggle: React.FC<{}> = () => {
    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
      };

    return (
        <>
            <IonIcon 
                icon={moon} 
                slot='end' 
                className="component-icon component-icon-dark"/>
            <IonToggle
                slot="end"
                name="darkMode"
                color='secondary'
                onIonChange={toggleDarkModeHandler}
            />
        </>
    );
};

export default DarkModeToggle;
