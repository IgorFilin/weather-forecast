import React from 'react';
import styles from './QuestionsGeoModal.module.css'

interface IQuestionsGeoModal {
    acceptClick:()=>void
    notAcceptClick:()=>void
    opened:boolean
}

export const QuestionsGeoModal:React.FC<IQuestionsGeoModal> = ({acceptClick,notAcceptClick,opened}) => {
  if(!opened){
      return <></>
  }
    return (
        <div className={styles.modalContainer}>
          <h3>Good day!</h3>
          <h4>Do you provide access to geolocation or choose a location manually?</h4>
            <div className={styles.buttonGroup}>
                <button onClick={acceptClick}>I agree to receive</button>
                <button onClick={notAcceptClick}>Not consenting to receive</button>
            </div>
        </div>
    );
};

