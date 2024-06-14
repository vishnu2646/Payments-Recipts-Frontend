import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable, Form, Loader } from "../Components";
import { getIncomes } from "../Redux";
import { useNavigate } from "react-router-dom";
import { isDefined } from "../utils/utils";

interface IncomeType {
    income_name: string;
    amount: number;
    date: string;
    mode: string;
    reason: string;
    income_by: string;
    bankname: string;
    chequeordd: string;
    dateinbank: string;
    details: string;
}

const Income = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const incomeState: any = useSelector((state) => state);
    const [toggle, setToggle] = useState<boolean>(false);
    const [itemToUpdate, setItemToUpdate] = useState<IncomeType>();
    const [income, setIncome] = useState<IncomeType>();
    const token = localStorage.getItem('token')!;

    useEffect(() => {
        handleGetIncome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGetIncome = () => {
        if(!isDefined(token)) {
            navigate('/login');
        }
        dispatch(getIncomes(token));
    }

    if(incomeState.income.isLoading) {
        return <Loader />;
    }

    return (
        <div className='page'>
            <header className='page-title text-center'>Income Details / Add</header>
            <div className="container">
                <button className="btn btn-success" onClick={() => setToggle(true)}>Add Income</button>
                <button className="btn btn-danger ms-2">Delete All Income</button>
            </div>
            {toggle && <Form toggle={toggle} setToggle={setToggle} income={income} setIncome={setIncome} />}
            { incomeState.income.data && <DataTable isFromIncome data={incomeState.income.data} itemToUpdate={itemToUpdate} setItemToUpdate={setItemToUpdate} /> }
        </div>
    )
};

export default Income;
