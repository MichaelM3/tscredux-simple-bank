import { BankDispatchTypes, BankActionType } from '../ActionTypes/BankActionTypes'

const initialState = 0

const bankReducer = (state: number = initialState, action: BankDispatchTypes) => {
    switch (action.type) {
        case BankActionType.DEPOSIT:
            return state + action.payload
        case BankActionType.WITHDRAW:
            if (action.payload <= state) {
                return state - action.payload
            } else {
                return state
            }
        case BankActionType.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default bankReducer