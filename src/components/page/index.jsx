import React from "react";
import { useState } from "react";
import './css/Listas_module.css';

function Listas () {
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);
    const [buttonTask, setButtonTask] = useState(0); // não finalizado

    const nowDate = new Date().toLocaleDateString();

    const createTask = () => {
        if (text !== '') {
            setTask ([...task, { text: text, date: nowDate}]);
            setText ('');
        };
    };

    const clearTask = () => {
        setTask ([]);
    };

    const buttonTaskOn = () => {
        if (buttonTask === 0) {
            
        };
    }; // não Finalizado

    return (
            <div className="flex_wrapper_listas">

                <ol>
                    <div className="flex_wrapper_task">

                        <div className="box_task">
                            {task.map((task, index) => (
                            <div className="task">
                                <div className="task_text">{task.text}</div>
                                <div className="task_date">{task.date}</div>
                                <div className="task_button">{task.buttonTask}</div>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </ol>
                
                <div className="input_wrapper">
                    <input placeholder="Ex: Receber Encomenda" type="text" value={text} onChange={(e) => setText(e.target.value)}/>

                    <button onClick={createTask}>ADD TASK</button>
                    <button onClick={clearTask}>CLEAR</button>
                </div> 
                      
            </div>
    );
}

export default Listas