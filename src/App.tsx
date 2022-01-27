import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bankActionCreators } from './State/Store'
import { State } from './State/Reducers/rootReducer'

const App: React.FC = () => {
  
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(bankActionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <header className="App-header">
      <h1>{amount}</h1>
      <div className="btn-grp">
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(500)}>Withdraw</button>
          <button onClick={() => bankruptMoney()}>Bankrupt</button>
        </div> 
        <img src={logo} className="App-logo" alt="logo" />     
      </header>
    </div>
  )
}

export default App
