import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import DataTable from '../Components/DataTable';

const Income = () => {

    const options = [
        "Cash",
        "Check",
        "Demand Draft",
        "Transaction"
    ]

    const [toggle, setToggle] = useState(false);
    const [bankDetails, setBankDetails] = useState(true);
    const [mode, setMode] = useState(options[0]);

    useEffect(() => {
        if(mode !== "Cash") {
            setBankDetails(true);
        } else{
            setBankDetails(false);
        }
    }, [mode])

    return (
        <div className='page'>
            <header className='page-title text-center'>Income Details / Add</header>
            <div className="container">
                <button className="btn btn-success" onClick={() => setToggle(true)}>Add Income</button>
                <button className="btn btn-danger ms-2">Delete All Income</button>
            </div>
            {toggle ? <div className='model mt-3' style={{ padding: "20px" }}>
                <div className="container">
                    <form>
                        <div className='form first'>
                            <div className='deatils income'>
                                <span className='title'>Income Details</span>
                            </div>
                            <div className="fields">
                                <div className='input-field'>
                                    <label htmlFor="incomename">Income Name</label>
                                    <input type="text" placeholder='Income Name' name='incomename' required />
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="incomedate">Income Date</label>
                                    <input type="date" placeholder='Income Date' name='incomedate' required />
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="incomeamount">Income Amount</label>
                                    <input type="number" placeholder='Income Amount' name='incomeamount' required />
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="incomeby">Income By</label>
                                    <input type="text" placeholder='Income By' name='incomeby' required />
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="incomereason">Income Reason</label>
                                    <input type="text" placeholder='Income Reason' name='incomereason' required />
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="incomeamount">Income Amount</label>
                                    <select name="cars" id="cars" value={mode} onChange={e => setMode(e.target.value)}>
                                        {options.map((option, i) => {
                                            return(
                                                <option value={option} key={i}>{option}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            {bankDetails ? <>
                                <div className='deatils income'>
                                    <span className='title'>Income Bank Details</span>
                                </div>
                                <div className="fields">
                                    <div className='input-field'>
                                        <label htmlFor="bankname">Bank Name</label>
                                        <input type="text" placeholder='Bank Name' name='bankname' />
                                    </div>

                                    <div className='input-field'>
                                        <label htmlFor="checkno">check / DD No</label>
                                        <input type="number" placeholder='Check / DD No' name='checkno' />
                                    </div>

                                    <div className='input-field'>
                                        <label htmlFor="bankdate">Bank Date</label>
                                        <input type="text" placeholder='Bank Date' name='bankdate' />
                                    </div>
                                </div>
                            </> : null}
                        </div>
                        <button 
                            className='btn btn-outline-success'
                            onClick={() => {
                                alert("Submitted Successfully")
                                setToggle(!toggle)
                            }}
                        >
                            Add Income
                        </button>
                    </form>
                </div>
            </div> : <DataTable isFromIncome/>}
        </div>
    )
}

export default Income