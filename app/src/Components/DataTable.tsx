const DataTable = ({isFromIncome, data, itemToUpdate, setItemToUpdate}: any) => {
    return (
        <div className="container mt-3">
            <div className="income-table table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Income Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Mode</th>
                            <th>Reason</th>
                            <th>Income By</th>
                            <th>Bank Name</th>
                            <th>Check No (or) DD No</th>
                            <th>Date in Bank</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 || data ? data?.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td onClick={() => setItemToUpdate(item)}>{item.id}</td>
                                    <td>{item.income_name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.date}</td>
                                    <td>{item.mode}</td>
                                    <td>{item.reason}</td>
                                    <td>{item.income_by}</td>
                                    <td>{item.bank_name}</td>
                                    <td>{item.chequeordd}</td>
                                    <td>{item.dateinbank}</td>
                                    <td>{item.details}</td>
                                </tr>
                            )
                        }): <>No Data To Display</>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataTable