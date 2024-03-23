import React from "react";
import { useState } from "react";
import './css/Listas_module.css';

function Listas () {
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);
    const clearTask = useState();

    const createTask = () => {
        if(text !== '') {
            setTask ([...task, { text: text}]);
            setText ('');
        };
    };

    return (
            <div className="flex_wrapper_listas">

                <ol>
                    <div className="flex_wrapper_task">

                        <div className="box_task">
                            {task.map((task, index) => (
                            <li key={index}>{task.text}</li>
                            ))};
                        </div>
                        
                    </div>
                </ol>
                
                <div className="input_wrapper">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

                    <button onClick={createTask}>ADD TASK</button>
                    <button onClick={clearTask}>CLEAR</button>
                </div> 
                      
            </div>
    );
}

export default Listas