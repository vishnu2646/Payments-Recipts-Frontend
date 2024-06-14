import { RefObject, useEffect, useRef, useState } from "react";
import { Modal, Box } from '../MuiCompos'
import { useDispatch } from "react-redux";
import { createIncome } from "../Redux/incomeSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const IncomeNameModal = ({ isFocused, setIsFocused, incomeName, setIncomeName, income, setIncome }: any) => {
    const list = ["hello", "world"]
    const handleIncomeNameSelect = (listItem: string) => {
        setIncomeName(listItem); 
        setIsFocused(!isFocused);
        setIncome({
            ...income,
            income_name: listItem
        })
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {list.map(listItem => {
                            return(
                                <p 
                                    key={listItem} 
                                    onClick={() => handleIncomeNameSelect(listItem)} 
                                    data-bs-dismiss="modal"
                                >
                                    {listItem}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Form = ({toggle, setToggle, income, setIncome}: any) => {

    const inputRef: RefObject<HTMLInputElement> = useRef(null);
    const options = [
        "Cash",
        "Check",
        "Demand Draft",
        "Transaction"
    ]
    const dispatch = useDispatch();
    const [bankDetails, setBankDetails] = useState(true);
    const [mode, setMode] = useState<string>(options[0]);
    const [incomeName, setIncomeName] = useState<string>('');
    const [isFocused, setIsFocused] = useState<Boolean>(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(mode !== "Cash") {
            setBankDetails(true);
        } else {
            setBankDetails(false);
        }
        setIncome({
            ...income,
            mode: mode
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode]);

    const handleFocus = () => {
        if(inputRef.current) {
            setIsFocused(true);
        }
    }

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (event: any) => {
        setIncome({
            ...income,
            [event.target.name]: event.target.value || event.target.defaultValue
        });
    }

    const handleNewIncomeCreation = () => {
        console.log(income);
        dispatch(createIncome(token, income));
    }

    return (
        <Modal
            keepMounted
            open={toggle}
            onClose={() => setToggle(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`model mt-3`} sx={style}>
                <div className="container">
                    <form>
                        <div className='form first'>
                            <div className='deatils income'>
                                <span className='title'>Income Details</span>
                            </div>
                            <div className="fields">
                                <div className='input-field'>
                                    <label htmlFor="income_name">Income Name</label>
                                    <input 
                                        type="text" 
                                        placeholder='Income Name' 
                                        name='income_name' 
                                        required 
                                        ref={inputRef}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal"
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={incomeName}
                                    />
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="date">Income Date</label>
                                    <input type="date" placeholder='Income Date' name='date' required onChange={handleChange}/>
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="amount">Income Amount</label>
                                    <input type="number" placeholder='Income Amount' name='amount' required onChange={handleChange}/>
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="income_by">Income By</label>
                                    <input type="text" placeholder='Income By' name='income_by' required onChange={handleChange}/>
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="reason">Income Reason</label>
                                    <input type="text" placeholder='Income Reason' name='reason' required onChange={handleChange}/>
                                </div>

                                <div className='input-field'>
                                    <label htmlFor="mode">Income Amount</label>
                                    <select name="mode" id="mode" defaultValue={mode} onChange={e => {setMode(e.target.value); handleChange(e)}}>
                                        {options.map((option, i) => {
                                            return(
                                                <option defaultValue={option} key={i}>{option}</option>
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
                                        <input type="text" placeholder='Bank Name' name='bankname' onChange={handleChange}/>
                                    </div>

                                    <div className='input-field'>
                                        <label htmlFor="chequeordd">check / DD No</label>
                                        <input type="number" placeholder='Check / DD No' name='chequeordd' onChange={handleChange}/>
                                    </div>

                                    <div className='input-field'>
                                        <label htmlFor="dateinbank">Bank Date</label>
                                        <input type="text" placeholder='Bank Date' name='dateinbank' onChange={handleChange}/>
                                    </div>

                                    <div className='input-field'>
                                        <label htmlFor="details">Details</label>
                                        <input type="text" placeholder='Details' name='details' onChange={handleChange}/>
                                    </div>
                                </div>
                            </> : null}
                        </div>
                        <button 
                            className='btn btn-outline-success'
                            onClick={() => {
                                alert("Submitted Successfully");
                                handleNewIncomeCreation();
                                setToggle(!toggle)
                            }}
                        >
                            Add Income
                        </button>
                        <button 
                            className='btn btn-outline-danger ms-3'
                            onClick={() => {
                                setToggle(!toggle)
                            }}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
                <IncomeNameModal 
                    isFocused={isFocused} 
                    setIsFocused={setIsFocused} 
                    incomeName={incomeName}
                    setIncomeName={setIncomeName}
                    income={income}
                    setIncome={setIncome}
                />
            </Box>
        </Modal>
    );
};

export default Form;
