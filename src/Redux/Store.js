import ProfileReducer from "./ProfileReducer"
import DialogsReducer from "./DialogsReducer"
import sideBarReducer from "./sideBarReducer"

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
        sideBar: {
            FriendsOnline: [
                { name: "Artem", avatar: '/icons/ObiWan.png' },
                { name: "Sasha", avatar: '/icons/ObiWan.png' },
                { name: "Vova", avatar: '/icons/ObiWan.png' }
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
    dispatch(action) {
        this._State.ProfilePage = ProfileReducer(this._State.ProfilePage, action)
        this._State.DialogsPage = DialogsReducer(this._State.DialogsPage, action)
        this._State.sideBar = sideBarReducer(this._State.sideBar, action)
        this._callSubscriber()
    }
}

export default Store;