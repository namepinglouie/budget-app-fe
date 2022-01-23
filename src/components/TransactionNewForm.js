import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const APP_API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${APP_API}/transactions`, transaction)
             .then(res => navigate("/transactions"))
             .catch(err => console.log(err))
    };

    return (
        <div className="new-form">
            <div className = "form-center">
                <form onSubmit={handleSubmit}>
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TransactionNewForm;