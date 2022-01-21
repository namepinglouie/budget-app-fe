import {Link} from "react-router-dom";

function Transaction({transaction, index}) {
    let {date, name, amount} = transaction;

    return (
        <tr className = "each-transaction">
            <td>{date}</td>
            <td><Link to = {`/transactions/${index}`}>{name}</Link></td>
            <td>$ {amount}</td>
        </tr>
    )
}

export default Transaction;