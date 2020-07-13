import React from 'react';
import './Anwser.css';

const anwser = props => {
    const returnProper = () => {

    }
    console.log(props);
    return(
        <div className="anwser">
                <input type="radio" name="anwser" id={props.id} className="squareRadio" />
            <label for={props.id}>{props.label}</label>
        </div>
    );
}

export default anwser;