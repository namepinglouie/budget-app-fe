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

    // let income = totalArr.reduce((acc, curr) => {
    //     if(Number(curr) > 0) {
    //         return Number(acc) + Number(curr);
    //     }
    // }, 0);

    // console.log(totalArr);
    
    return(
        <div>
            <h1 className="display-total">Income: $ 0</h1>
            <div className="Transactions">
                <table className="table-transactions">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => {
                    return <Transaction key = {index} transaction = {transaction} index = {index} />
                })}
                </tbody>
                </table>
            </div>
            <h1 className="display-total">Total: $ {totalNum.toFixed(2)}</h1>
        </div>
    )
}

export default Transactions;