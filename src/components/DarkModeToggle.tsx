import { IonCol, IonIcon, IonItem, IonLabel, IonRow, IonToggle } from '@ionic/react';
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
                onIonChange={toggleDarkModeHandler}
            />
        </>
    );
};

export default DarkModeToggle;
