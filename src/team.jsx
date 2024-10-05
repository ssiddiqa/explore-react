import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const handleAdd = () => {
        setTeam(team + 1)
    }
    const handleReduce = () => {
        setTeam(team - 1)
    }
    const teamStyle = {
        border: '2px solid black',
        margin: '20px',
        padding: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button className="Btn" onClick={handleAdd}>Add</button>
            <button className="Btn" onClick={handleReduce}>Reduce</button>
        </div>
    )
}