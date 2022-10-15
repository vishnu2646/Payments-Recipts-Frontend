import React from 'react'
import data from '../dummyData/data'
import MaterialTable from 'material-table'; 

const columns=[
    {title: 'UserId', field: 'userId'},
    {title: 'Id', field: 'id'},
    {title: 'Title', field: 'title'},
    {title: 'Completed', field: 'completed'},
]


const DataTable = ({isFromIncome}) => {
    return (
        <div className="container mt-3">
            <MaterialTable
                title="Income Details"
                data={isFromIncome ? data : null}
                columns={columns}
                options={{
                    exportButton: true,
                    filtering: true,
                    sorting: true
                }}
            />
        </div>
    )
}

export default DataTable