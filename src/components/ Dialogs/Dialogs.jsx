import React from 'react';
import './Dialogs.css'

const Dialogs = () =>(
    <div className ='dialogs'>
        <div className='dialogs-items'>
            <div className='dialog' class ='active'>
                Alexandr
            </div>
            <div className='dialog'>
                Misha
            </div>
            <div className='dialog'>
                Sveta
            </div>
            <div className='dialog'>
                Valera
            </div>
            <div className='dialog'>
                Maria
            </div>
        </div>
        <div className='messages'>
            <div className="messge">Hi</div>
            <div className="messge">How are you?</div>
            <div className="messge">I'm fine thank you</div>
        </div>
    </div>

)

export default Dialogs;