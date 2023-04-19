import React from "react"
import './style/User.css'

const User = (prop) => {

    return (
        <table className="user-section2">
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
            </tr>
            {prop.employees.map((item, i) => {
                return (
                    <tr key={i+1}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default User