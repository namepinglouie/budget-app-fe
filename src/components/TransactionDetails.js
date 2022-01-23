import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const APP_API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    let {index} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${APP_API}/transactions/${index}`)
             .then(res => setTransaction(res.data))
             .catch(err => console.log(err))
    }, [index]);

    const handleDelete = () => {
        axios.delete(`${APP_API}/transactions/${index}`)
             .then(res => navigate("/transactions"))
             .catch(err => console.log(err))
    }

    let {date, name, amount, from} = transaction;

    return (
        <div className="center">
            <div className="transaction-info">
                <h2 className="transaction-index">Transaction #{index}</h2>
                <div className="info-section">
                    <div className="section-title">DATE</div>
                    <div className="section-info">{date}</div>
                </div>

                <div className="info-section">
                    <div className="section-title">TRANSACTION NAME</div>
                    <div className="section-info">{name}</div>
                </div>

                <div className="info-section">
                    <div className="section-title">AMOUNT</div>
                    <div className="section-info">{amount}</div>
                </div>

                <div className="info-section">
                    <div className="section-title">FROM</div>
                    <div className="section-info">{from}</div>
                </div>

                <div className="info-links">
                    <Link to={"/transactions"}><button>Back</button></Link>
                    <Link to={`/transactions/${index}/edit`}><button>Edit</button></Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TransactionDetails;