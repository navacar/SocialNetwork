

let rerenderEntireTree = () => {

}

let State = {
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
}

export const ChangeNewPostText = (Text) => {
    State.ProfilePage.newPostText = Text
    rerenderEntireTree(State, addPost, ChangeNewPostText)
}

export const addPost = () => {

    let newPost = {
        id: 3,
        message: State.ProfilePage.newPostText,
        likeCount: 0
    }; 

    State.ProfilePage.Posts.push(newPost)
    State.ProfilePage.newPostText = ''
    rerenderEntireTree(State, addPost, ChangeNewPostText)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default State;