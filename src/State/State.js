import { rerenderEntireTree } from "../render";

let State = {
    ProfilePage: {
        Posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 100},
            {id: 2, message: "It's my first post!", likeCount: 59}
        ]
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

export let addPost = (postMessage) => {

    let newPost = {
        id: 3,
        message: postMessage,
        likeCount: 0
    }; 

    rerenderEntireTree(State, addPost)
    State.ProfilePage.Posts.push(newPost)
}

export default State;