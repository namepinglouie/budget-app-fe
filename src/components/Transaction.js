import {Link} from "react-router-dom";

function Transaction({transaction, index}) {
    let {date, name, amount} = transaction;

    return (
        <tr className = "each-transaction">
            <td>{date}</td>
            <td>{name}</td>
            <td>$ {amount}</td>
            <td>
                [ <Link to = {`/transactions/${index}`}>Edit</Link> ]
            </td>
        </tr>
    )
}

export default Transaction;