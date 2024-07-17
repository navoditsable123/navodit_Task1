import axios from "axios"
import { Button } from "bootstrap"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


const ShowEvents = () => {
    const [events, setevents] = useState([])
    async function getdata() {
        const result = await axios.get("http://localhost:8080/events")
        setevents(result.data)
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((eve) => {
                            <tr key={eve.id}>
                                <td>{eve.id}</td>
                                <td>{eve.name}</td>
                                <td>{eve.date}</td>
                                <td>{eve.loc}</td>
                                <td>{eve.des}</td>
                                <td>
                                    <NavLink to={`/show/${eve.id}`}><Button>Update</Button></NavLink>
                                </td>
                            </tr>
                        }

                        )
                    }
                </tbody>
            </table>

        </>
    )
}
export default ShowEvents;