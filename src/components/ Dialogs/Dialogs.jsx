import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { createRef } from 'react';

const Dialogs = (props) => {

    let DialogsElements = props.State.DialogData.map(Dialog => (<DialogItem name={Dialog.name} id={Dialog.id} />));

    let MessageElements = props.State.MessageData.map(message => <Message message={message.message} />);

    let MessageTextRef = React.createRef()

    let sendMessage = () => {
        let MessageText = MessageTextRef.current.value
        alert(MessageText)
    }

    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {DialogsElements}
            </div>
            <div className='messages'>
                {MessageElements}
                <div className='SendArea'>
                    <div>
                        <textarea ref={MessageTextRef}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;