import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "../consts/type";

const initialState = {
    count: 15
}

const Counter = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT_NUMBER:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT_NUMBER:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }

}

export { Counter }