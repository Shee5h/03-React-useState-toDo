import React from 'react';
import { useState } from 'react';
import './ToDo.css';

export default function ToDo(props){

    let {toDoImage} = props;
    let {toDoText} = props;

    const [text, setStatus] = useState({
        taskStatus: "Mokausi",
        status: true
    })

    function updateStatus() {
        setStatus((prevStatus) => {
            return {...prevStatus, status: false}
        })
    }

    return (
        <div className='displayConf'>
            <div>
                <img className='imageSize' src={toDoImage}></img>
                <p style={{margin: "8px 0px"}}>{toDoText}</p>
            </div>
            <div style={{paddingBottom: "4px", color: text.status? "red" : "#68db68" }}>
                {text.status? "Mokausi" : "Išmokau"}
            </div>
            <button onClick={updateStatus} type='button'>OK</button>
        </div>
    )
}