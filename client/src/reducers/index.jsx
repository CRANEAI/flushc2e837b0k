import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import fﬁends from "./reducer_fﬁends"

const rootReducer = combineReducers({
  fﬁends: fﬁends
})

export default rootReducer
