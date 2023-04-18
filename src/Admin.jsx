import React from "react"
import { useState, useEffect } from "react"


const Admin = () => {

    const mockEmployees = [
        {
          id: 0,
          name: "mock",
          lastname: 'mocklastname',
          position: "Manager"
        },
        {
          id: 1,
          name: "employee 1",
          lastname: "em",
          position: "Engineer"
        },
        {
          id: 2,
          name: "employee 2",
          lastname: "lord",
          position: "Designer"
        },
    ]
    
    const [user, setUser] = useState(mockEmployees)

    const addUser = (userPrm) => {
        userPrm.id = user.length + 1
        setUser([...user, userPrm])
    }

    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [position, setPosition] = useState();

    return (
        <div id="home-section2-Admin">
            <h2>Create User Here</h2>
            <div>
                <input onChange={(event) => {setName(event.target.value)}} type="text" placeholder="Name" />
                <input onChange={(event) => {setLastname(event.target.value)}} type="text" placeholder="Last Name" />
                <input onChange={(event) => {setPosition(event.target.value)}} type="text" placeholder="Position" />
                <button onClick={() => addUser({
                    name: name,
                    lastname: lastname,
                    position: position})}>Save</button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            {user.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td><button>Delete</button></td>
                    </tr>
                )
            })}
            </table>
        </div>
    )
}

export default Admin