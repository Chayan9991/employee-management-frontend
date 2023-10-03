import React from 'react'

const Employee = ({emp, key, deleteEmployee}) => {
  return (
    <>
        <tr className="mb-4" key={key}>
                    <td className="text-left py-2 font-mono text-slate-400">
                      {emp.full_name}
                    </td>
                    <td className="text-left py-2 font-mono text-slate-400">
                      {emp.address}
                    </td>
                    <td className="text-left py-2 font-mono text-slate-400">
                      {emp.email_id}
                    </td>
                    <td className="font-medium text-slate-200">
                      <div className="flex gap-3 py-1 justify-center">
                        <button className=" rounded-lg text-green-400 hover:text-green-600">Edit</button>
                        <button onClick={(e, id)=>deleteEmployee(e, emp.id)} className=" rounded-lg text-red-400 hover:text-red-600">Delete</button>
                      </div>
                    </td>
                  </tr>
    </>
  )
}

export default Employee