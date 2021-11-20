import React from "react"
import Link from "next/link"

const Card = ({ session }) => {
  return (
    <div className="uk-grid-small uk-text-center uk-margin uk-child-width-1-2 uk-flex uk-flex-center">
      <div className="uk-card uk-card-default uk-card-body uk-card-hover">
        <Link href={`/session/${session.id}`}>
          <a className="uk-link-reset">
            <h4 id="title" className="uk-card-title">
              {session.title}
            </h4>
            <p id="date" className="uk-text-meta">
              {session.description}
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card
