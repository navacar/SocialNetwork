import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => (
    <div className='dialogs'>
        <div className='dialogs-items'>
            <div className='dialog' class='active'>
                <NavLink to='/dialogs/alexandr'>Alexandr</NavLink>
            </div>
            <div className='dialog' class='active'>
                <NavLink to='/dialogs/misha'>Misha</NavLink>
            </div>
            <div className='dialog' class='active'>
                <NavLink to='/dialogs/sveta'>Sveta</NavLink>
            </div>
            <div className='dialog' class='active'>
                <NavLink to='/dialogs/valera'>Valera</NavLink>
            </div>
            <div className='dialog' class='active'>
                <NavLink to='/dialogs/maria'>Maria</NavLink>
            </div>
        </div>
        <div className='messages'>
            <div className="message">Hi</div>
            <div className="message">How are you?</div>
            <div className="message">I'm fine thank you</div>
        </div>
    </div>

)

export default Dialogs;