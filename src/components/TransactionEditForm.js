import {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const APP_API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
    let {index} = useParams();

    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: ""
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    };

    useEffect(() => {
        axios.get(`${APP_API}/transactions/${index}`)
             .then(res => setTransaction(res.data))
             .catch(err => console.log(err))
    }, [index]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`${APP_API}/transactions/${index}`, transaction)
             .then(res => navigate("/transactions"))
             .catch(err => console.log(err))
    };

    return (
       <div className="edit-form">
           <div class = "form-center">
                <h2 className="transaction-index">Transaction #{index}</h2>
                <form onSubmit={handleEdit}>
                    <div className="form-section">
                        <label htmlFor="date">DATE</label>
                        <input id = "date" value = {transaction.date} type = "text" onChange = {handleText} required />
                    </div>

                    <div className="form-section">
                        <label htmlFor="name">TRANSACTION NAME</label>
                        <input id = "name" value = {transaction.name} type = "text" onChange = {handleText} required />
                    </div>

                    <div className="form-section">
                        <label htmlFor="amount">AMOUNT</label>
                        <input id = "amount" value = {transaction.amount} type = "number" onChange = {handleText} required />
                    </div>

                    <div className="form-section">
                        <label htmlFor="from">FROM</label>
                        <input id = "from" value = {transaction.from} type = "text" onChange = {handleText} required />
                    </div>

                    <div className="center">
                        <button className="submit-btn" type="submit">Submit</button>
                        <Link to = {`/transactions/${index}`}><button className="submit-btn">Back</button></Link>
                    </div>
                </form>
           </div>
       </div> 
    )
}

export default TransactionEditForm;