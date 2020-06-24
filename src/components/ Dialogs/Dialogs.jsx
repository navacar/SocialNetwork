import React from 'react';
import './Dialogs.css'

const Dialogs = (props) => {
    
    let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.sendMessage()
        newMessageElement.current.value = ''
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    }
    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {props.DialogsElements}
            </div>
            <div className='messages'>
                {props.MessageElements}
                <div className='SendArea'>
                    <div>
                        <textarea placeholder="Enter message text" onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
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