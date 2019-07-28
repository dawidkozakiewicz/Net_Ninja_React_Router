const Redux = require('redux')

const { createStore } = Redux;

const initState = {
    todos: [],
    posts: []
}

function myreducer(state = initState, action) {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
    if (action.type === 'POST_TODO') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
}

const store = createStore(myreducer);

store.subscribe(() => {
    console.log('store updated')
    console.log(store.getState())
})

store.dispatch({ type: 'ADD_TODO', todo: 'buy milk' })
store.dispatch({ type: 'ADD_TODO', todo: 'sleep some more' })
store.dispatch({ type: 'POST_TODO', post: 'play guitar' })
