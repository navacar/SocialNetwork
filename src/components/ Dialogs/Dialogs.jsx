import React from 'react';
import './Dialogs.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { changeMessageActionCreator, sendMessageActionCreator } from '../../State/DialogsReducer';

const Dialogs = (props) => {
    let DialogsElements = 
        props.DialogsPage.DialogData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));

    let MessageElements = 
        props.DialogsPage.MessageData.map(message => <Message message={message.message} />);

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        newMessageElement.current.value = ''
        props.dispatch(changeMessageActionCreator(text))
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
                        <textarea placeholder="Enter message text" onChange={onMessageChange} ref={newMessageElement} value={props.DialogsPage.newMessageText} />
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