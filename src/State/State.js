const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'


let Store = {
    _State: {
        ProfilePage: {
            Posts: [
                { id: 1, message: "Hi, how are you?", likeCount: 100 },
                { id: 2, message: "It's my first post!", likeCount: 59 }
            ],
            newPostText: '',
        },
        DialogsPage: {
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
        },
        NavBarPage: {
            FriendsOnline: [
                {name: "Artem"},
                {name: "Sasha"},
                {name: "Vova"}
            ]
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return (this._State)
    },
    _callSubscriber() {
    },
    ChangeNewPostText(Text) {
        this._State.ProfilePage.newPostText = Text
        this._callSubscriber()
    },
    ChangeNewMessageText(Text) {
        this._State.DialogsPage.newMessageText = Text
        this._callSubscriber()
    },
    sendMessage(){
        let newMessage = {
            message: this._State.DialogsPage.newMessageText
        }
        if (newMessage.message != ''){
            this._State.DialogsPage.MessageData.push(newMessage)
            this._State.DialogsPage.newMessageText = ''
            this._callSubscriber()
        }

    },
    addPost() {

        let newPost = {
            id: this._State.ProfilePage.Posts[this._State.ProfilePage.Posts.length - 1].id + 1,
            message: this._State.ProfilePage.newPostText,
            likeCount: 0
        };

        if (newPost.message != ''){
            this._State.ProfilePage.Posts.unshift(newPost)
            this._State.ProfilePage.newPostText = ''
            this._callSubscriber()
        }
    },
    dispatch(action) {
        if (action.type === ADD_POST) 
            this.addPost()
        else if (action.type === CHANGE_NEW_POST_TEXT)
            this.ChangeNewPostText(action.Text)
        else if (action.type === SEND_MESSAGE)
            this.sendMessage()
        else if (action.type === CHANGE_NEW_MESSAGE_TEXT)
            this.ChangeNewMessageText(action.Text)
    }
}
export const changeMessageActionCreator = (text) => (
    {   
        type: CHANGE_NEW_MESSAGE_TEXT, 
        Text: text
    }
)

export const changePostActionCreator = (text) => (
    {   
        type: CHANGE_NEW_POST_TEXT, 
        Text: text
    }
)

export const sendMessageActionCreator = () => (
    {type: SEND_MESSAGE}
)

export const addPostActionCreator = () => (
    {type: ADD_POST}
)

export default Store;