import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactionList = []

class MoneyManager extends Component {
  state = {
    transactionList: initialTransactionList,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    income: 0,
    expense: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, type} = this.state

    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        expense: prevState.expense + parseInt(amount),
      }))
    }
  }

  deleteData = id => {
    const {transactionList} = this.state
    const filterList = transactionList.filter(eachTran => eachTran.id === id)
    this.setState({transactionList: filterList})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {transactionList, title, amount, income, expense, type} = this.state
    console.log(transactionList)
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="heading-container">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details">
            <MoneyDetails income={income} expense={expense} />
          </div>
          <div className="input-details-container">
            <div className="add-transaction-container">
              <h1>Add Transaction</h1>
              <form onSubmit={this.onAddTransaction}>
                <div>
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={this.onChangeTitle}
                    id="title"
                  />
                </div>
                <div>
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    type="text"
                    placeholder="Amount"
                    onChange={this.onChangeAmount}
                    id="amount"
                    value={amount}
                  />
                </div>
                <div>
                  <p>TYPE</p>
                  <select onChange={this.onChangeType} value={type}>
                    {transactionTypeOptions.map(each => (
                      <option value={each.optionId} key={each.optionId}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>
            <div className="history-container">
              <h1>History</h1>
              <ul>
                <li>
                  <div className="table-heading">
                    <p>Title</p>
                    <p>Amount</p>
                    <p>Type</p>
                  </div>
                </li>

                {transactionList.map(eachItem => (
                  <TransactionItem
                    transactionDetail={eachItem}
                    key={eachItem.id}
                    deleteData={this.deleteData}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
