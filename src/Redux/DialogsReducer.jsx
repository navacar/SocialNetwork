const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
    DialogData: [
        { id: 1, name: 'Alexandr' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Maria' },
        { id: 6, name: 'Andrew' }
    ],
    MessageData: [
        { message: 'Hi' },
        { message: 'How are you?' },
        { message: "I'm fine thank you" }
    ],
    newMessageText: '',
}

const DialogsReducer = (State = initialState, action) => {
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