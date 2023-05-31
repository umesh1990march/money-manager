import './index.css'

const TransactionItem = props => {
  const {transactionDetail, deleteData} = props
  const {title, amount, type, id} = transactionDetail
  console.log(transactionDetail)

  const deleteHistory = () => {
    deleteData(id)
  }

  return (
    <li>
      <div className="table-heading">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button type="button" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
