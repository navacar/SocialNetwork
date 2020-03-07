import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => (
    <div className='dialogs'>
        <div className='dialogs-items'>
            <DialogItem name='Alexandr' id='1'/>
            <DialogItem name='Misha' id='2'/>
            <DialogItem name='Sveta' id='3'/>
            <DialogItem name='Valera' id='4'/>
            <DialogItem name='Maria' id='5'/>
        </div>
        <div className='messages'>
            <Message message='Hi'/>
            <Message message='How are you?'/>
            <Message message="I'm fine thank you"/>
        </div>
    </div>

)

export default Dialogs;