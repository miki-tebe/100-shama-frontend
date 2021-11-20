import React from "react"
import Card from "./card"

const Sessions = ({ sessions }) => {
  return (
    <div>
      {sessions.map((session, i) => {
        return <Card session={session} key={session.id} />
      })}
    </div>
  )
}

export default Sessions
