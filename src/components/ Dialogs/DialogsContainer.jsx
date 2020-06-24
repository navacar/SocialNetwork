import React from 'react';
import { changeMessageActionCreator, sendMessageActionCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const DialogsContainer = (props) => {
    let DialogsElements = 
        props.DialogsPage.DialogData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));

    let MessageElements = 
        props.DialogsPage.MessageData.map(message => <Message message={message.message} />);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let updateNewMessageText = (text) => {
        props.dispatch(changeMessageActionCreator(text))
    }
    return (
        <Dialogs 
        updateNewMessageText={updateNewMessageText} 
        sendMessage={sendMessage} 
        DialogsElements={DialogsElements}
        MessageElements={MessageElements}
        newMessageText={props.DialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;