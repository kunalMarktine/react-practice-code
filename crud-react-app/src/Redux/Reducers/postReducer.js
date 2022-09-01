import { GET_POSTS, DELETE_POST, GET_POST, UPDATE_POST, ADD_POST } from '../Actions/types'

const initialState = {
    posts: [],
    post: {}, 
    loading : true
    
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:

            return {
                posts: payload,
                loading : false
            }
        case GET_POST:
            return {
                ...state,
                post: payload
                
            }
        case ADD_POST:
            return {
                ...state,
                posts: [payload.body, ...state.posts]
            }
        case UPDATE_POST:
            return {
                ...state,
                post: payload.body

            }
        case DELETE_POST:
            return {
                posts: state.posts.filter((post) => post.id !== payload)
            }
        default:
            return state
    }
}