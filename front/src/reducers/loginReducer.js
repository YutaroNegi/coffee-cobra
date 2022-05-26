function loginReducer(state = 0, action){
    switch (action.type) {
        case 'LOGIN':
            let user = {
                username: action.payload.username ? action.payload.username : '',
                recipes: action.payload.recipes ? action.payload.recipes : [],
                login: action.payload.login ? action.payload.login : 0
            }

            return user

        default:
            return state
    }
}

export default loginReducer