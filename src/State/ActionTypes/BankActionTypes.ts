export enum BankActionType {
    WITHDRAW = "WITHDRAW",
    DEPOSIT = "DEPOSIT",
    BANKRUPT = "BANKRUPT"
}

interface IDeposit {
    type: BankActionType.DEPOSIT;
    payload: number;
}

interface IWithdraw {
    type: BankActionType.WITHDRAW;
    payload: number;
}

interface IBankrupt {
    type: BankActionType.BANKRUPT;
}

export type BankDispatchTypes = IDeposit | IWithdraw | IBankrupt