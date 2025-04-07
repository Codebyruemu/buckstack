import React , { useMemo } from 'react'
import {useTable} from 'react-table'
import Column from  '../Column'
import DUMIE_DATA from '../DUMIE_DATA'

import './basictable.css' 

const DataTable = () => {
    const columns = useMemo(()=>Column,[])
    const data = useMemo(()=>DUMIE_DATA,[])

    const tableInstance= useTable({
        columns: columns,
        data: data
    })
    const {getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow} = tableInstance
    const Bg2={
                backgroundColor:'rgb(5,16,47)',  
            }
  return (
    <div className='container'>
        <div className="row table-responsive p-4" style={Bg2}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => {
                        const { key, ...rest } = headerGroup.getHeaderGroupProps(); // Extract the key
                        return (
                        <tr key={key} {...rest}>
                            {headerGroup.headers.map((column) => {
                            const { key: columnKey, ...columnRest } = column.getHeaderProps(); // Extract the key for <th>
                            return (
                                <th key={columnKey} {...columnRest}>
                                {column.render("Header")}
                                </th>
                            );
                            })}
                        </tr>
                        );
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        const {key, ...rest}=row.getRowProps()
                        return (
                        <tr key={key} {...rest} >
                            {row.cells.map((cell) => {
                            const { key:cellkey, ...cellrest } = cell.getCellProps(); // Extract the key
                            return (
                                <td key={cellkey} {...cellrest}>
                                {/* Conditionally format specific columns */}
                                    {['price', 'Income_Every_20_hours', 'Total_Income'].includes(cell.column.id) ? (
                                        <>
                                        &#8358; {cell.render("Cell")}
                                        </>
                                    ) : (
                                        cell.render("Cell")
                                    )}
                                </td>
                            );
                            })}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DataTable