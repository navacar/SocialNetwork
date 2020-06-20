const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'


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
    addPost() {

        let newPost = {
            id: Store._State.ProfilePage.Posts[Store._State.ProfilePage.Posts.length - 1].id + 1,
            message: Store._State.ProfilePage.newPostText,
            likeCount: 0
        };

        if (newPost.message != ''){
            this._State.ProfilePage.Posts.unshift(newPost)
            this._State.ProfilePage.newPostText = ''
            this._callSubscriber()
        }
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') 
             this.addPost()
        else if (action.type === 'CHANGE-NEW-POST-TEXT')
            this.ChangeNewPostText(action.Text)
    }
}

export const changePostActionCreator = (text) => (
    {   
        type: CHANGE_NEW_POST_TEXT, 
        Text: text
    }
)

export const addPostActionCreator = () => (
    {type: ADD_POST}
)

export default Store;