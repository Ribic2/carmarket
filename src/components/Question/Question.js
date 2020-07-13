import React from 'react';
import './Question.css';
import Anwser from '../Anwser/Anwser';


const question = props => {

    return(
        <div className="question">
            <div className="card">
                {props.question}
            </div>
            {
                props.anwsers.map(anwser => {
                    return <Anwser {...anwser} key={anwser.id} />
                })
            }
        </div>
    );
}

export default question;