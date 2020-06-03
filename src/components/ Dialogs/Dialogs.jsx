import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let DialogsElements = props.DialogData.map(Dialog => (<DialogItem name={Dialog.name} id={Dialog.id} />));

    let MessageElements = props.MessageData.map(message => <Message message={message.message} />);

    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {DialogsElements}
            </div>
            <div className='messages'>
                {MessageElements}
            </div>
        </div>

    )
}

export default Dialogs;