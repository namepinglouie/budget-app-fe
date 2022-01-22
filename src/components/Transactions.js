import {useState, useEffect} from "react";
import Transaction from "./Transaction";
import axios from "axios";

const APP_API = process.env.REACT_APP_API_URL;

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${APP_API}/transactions`)
             .then(res => setTransactions(res.data))
             .catch(err => {throw err})
    }, []);

    let totalArr = transactions.map(transaction => transaction.amount);

    let totalNum = totalArr.reduce((acc, curr) => {
        return Number(acc) + Number(curr);
    }, 0);

    let income = totalArr.reduce((acc, curr) => {
        if(Number(curr) > 0) {
            return Number(acc) + Number(curr);
        } else {
            return Number(acc) + 0;
        }
    }, 0);

    let spent = totalArr.reduce((acc, curr) => {
        if(Number(curr) < 0) {
            return Number(acc) + Number(curr);
        } else {
            return Number(acc) + 0;
        }
    }, 0);
    
    let highlight = () => {
        if(totalNum > 1000) {
            return <div style = {{backgroundColor: "#2EC4B6", color: "white"}} className="display-total">Balance: $ {totalNum.toFixed(2)}</div>
        } else if (totalNum < 0) {
            return <div style = {{backgroundColor: "red", color: "white"}} className="display-total">Balance: $ {totalNum.toFixed(2)}</div>
        } else {
            return <div style = {{backgroundColor: "white", color: "#2EC4B6"}} className="display-total">Balance: $ {totalNum.toFixed(2)}</div>
        }
    }

    return (
        <div>
            <div className="display-section">
                <div className="display-total">Income: $ {income.toFixed(2)}</div>
                <div className="display-total">Spent: $ {spent.toFixed(2)}</div>
                {highlight()}
            </div>
            <div className="Transactions">
                <table className="table-transactions">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => {
                    return <Transaction key = {index} transaction = {transaction} index = {index} />
                })}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions;