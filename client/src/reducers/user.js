import * as actionType from '../constants/actionTypes'

const userReducer = (state = { userData: null}, action) => {
    switch (action.type) {
        case actionType.AUTH:
            // store the data from action to local storage 
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, userData: action.data, loading: false, errors: null}
        default: 
            return state;
    }
}

export default userReducer;