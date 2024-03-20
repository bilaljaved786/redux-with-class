import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "../consts/type"

const INCREMENT = () => {
    console.log("plus")
    return {
        type: INCREMENT_NUMBER
    }
}

const DECREMENT = () => {
    console.log("minus")
    return {
        type: DECREMENT_NUMBER
    }
}

export { INCREMENT, DECREMENT }
