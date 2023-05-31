import './index.css'

const MoneyDetails = props => {
  const {income, expense} = props
  return (
    <div className="balance-income-expense-container">
      <div className="item-container balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">
            Rs. {parseInt(income) - parseInt(expense)}
          </p>
        </div>
      </div>
      <div className="item-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs. {income}</p>
        </div>
      </div>
      <div className="item-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs. {expense}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
