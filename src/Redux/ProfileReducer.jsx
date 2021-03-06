const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    Posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 100 },
        { id: 2, message: "It's my first post!", likeCount: 59 }
    ],
    newPostText: '',
}

const ProfileReducer = (State = initialState, action) => {
    if (action.type === ADD_POST) {

        let newPost = {
            id: State.Posts[State.Posts.length - 1].id + 1,
            message: State.newPostText,
            likeCount: 0
        };

        if (newPost.message != '') {
            State.Posts.unshift(newPost)
            State.newPostText = ''
        }
    }
    else if (action.type === CHANGE_NEW_POST_TEXT) {
        State.newPostText = action.Text
    }
    return State
}

export const addPostActionCreator = () => (
    { type: ADD_POST }
)
export const changePostActionCreator = (text) => (
    {
        type: CHANGE_NEW_POST_TEXT,
        Text: text
    }
)

export default ProfileReducer