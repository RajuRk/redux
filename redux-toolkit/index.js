const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecream').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(()=> {})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(icecreamActions.orderded())
// store.dispatch(icecreamActions.orderded())
// store.dispatch(icecreamActions.orderded())
// store.dispatch(icecreamActions.restocked(10))

// unsubscribe()

