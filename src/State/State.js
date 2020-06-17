let Store = {
    _State: {
        ProfilePage: {
            Posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 100},
                {id: 2, message: "It's my first post!", likeCount: 59}
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
    
        this._State.ProfilePage.Posts.unshift(newPost)
        this._State.ProfilePage.newPostText = ''
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return (this._State)
    }
}

export default Store;