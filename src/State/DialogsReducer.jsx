const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

const DialogsReducer = (State, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            message: State.newMessageText
        }
        if (newMessage.message != '') {
            State.MessageData.push(newMessage)
            State.newMessageText = ''
        }
    }
    else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
        State.newMessageText = action.Text
    }
    return State
}

export const changeMessageActionCreator = (text) => (
    {
        type: CHANGE_NEW_MESSAGE_TEXT,
        Text: text
    }
)

export const sendMessageActionCreator = () => (
    { type: SEND_MESSAGE }
)

export default DialogsReducer