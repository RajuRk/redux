const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESOCKED = 'CAKE_RESOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESOCKED  = 'ICECREAM_RESOCKED'

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function cakeRescocked(qty = 1){
    return {
        type: CAKE_RESOCKED,
        payload: qty,
    }
}

function orderIceCream(){
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function IceCreamRescocked(qty = 1){
    return {
        type: ICECREAM_RESOCKED,
        payload: qty,
    }
}

// const initialState = {
//     numOfCake: 10,
//     numOfIceCreams: 20,
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20,
}

//(previousState, action) => newState

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCakes - 1,
            }
        case CAKE_RESOCKED:
            return {
                ...state,
                numOfCake: state.numOfCakes + action.payload,
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            }
        case ICECREAM_RESOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

const store = createStore(rootReducer)
console.log('initial state', store.getState())

const unSubscribe = store.subscribe(()=>(
    console.log('Update State', store.getState())
))

const actions = bindActionCreators({orderCake, cakeRescocked, orderIceCream, IceCreamRescocked}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.cakeRescocked(5)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.IceCreamRescocked(10)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(cakeRescocked(2))

unSubscribe();