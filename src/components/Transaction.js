import {Link} from "react-router-dom";
import axios from "axios";

const APP_API = process.env.REACT_APP_API_URL;

function Transaction({transaction, index, setTransactions}) {
    let {date, name, amount} = transaction;

    const handleDelete = (e) => {
        axios.delete(`${APP_API}/transactions/${index}`)
             .then(res => setTransactions(res.data))
             .catch(err => console.log(err))
    }

    const handleDate = (dateStr) => {
        let date = new Date(`${dateStr} 00:00:00`);
        let mdyName = date.toLocaleString("en-us", {month: "long", day: "numeric", year: "numeric"});
        return mdyName;
    };

    return (
        <tr className = "each-transaction">
            <td>{handleDate(date)}</td>
            <td>{name}</td>
            <td>$ {amount}</td>
            <td>
                [ <Link to = {`/transactions/${index}`}>Edit</Link> ]
                [ <Link to = "" onClick = {handleDelete}>Delete</Link> ]
            </td>
        </tr>
    )
}

export default Transaction;