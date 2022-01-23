import {Link} from "react-router-dom";
import axios from "axios";

const APP_API = process.env.REACT_APP_API_URL;

function Transaction({transaction, index}) {
    let {date, name, amount} = transaction;

    const handleDelete = (e) => {
        axios.delete(`${APP_API}/transactions/${index}`)
             .then(window.location.reload())
             .catch(err => console.log(err))
    }

    return (
        <tr className = "each-transaction">
            <td>{date}</td>
            <td>{name}</td>
            <td>$ {amount}</td>
            <td>
                [ <Link to = {`/transactions/${index}`}>Edit</Link> ]
                [ <a onClick = {handleDelete}>Delete</a> ]
            </td>
        </tr>
    )
}

export default Transaction;