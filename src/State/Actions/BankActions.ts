import { BankActionType, BankDispatchTypes } from '../ActionTypes/BankActionTypes'
import { Dispatch } from 'redux'

export const depositMoney = (amount: number) => (dispatch: Dispatch<BankDispatchTypes>) => {
    dispatch({
        type: BankActionType.DEPOSIT,
        payload: amount
    })
}

export const withdrawMoney = (amount: number) => (dispatch: Dispatch) => {
    dispatch({
        type: BankActionType.WITHDRAW,
        payload: amount
    })
}

export const bankruptMoney = () => (dispatch: Dispatch) => {
    dispatch({
        type: BankActionType.BANKRUPT
    })
}