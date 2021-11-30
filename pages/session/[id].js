import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"

const Session = ({ session }) => {
  return (
    <Layout>
      <article className="uk-comment uk-container">
        <header className="uk-comment-header">
          <div className="uk-grid-medium uk-flex-middle" uk-grid>
            <div className="uk-width-expand">
              <h2 className="uk-comment-title uk-margin uk-margin-top">
                {session.title || "Nothing"}
              </h2>
              <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>
                  <span uk-icon="icon: calendar"></span>
                  <Moment format="MMM Do YYYY">{session.date}</Moment>
                </li>
                <li>#{session.session_number || "Nothing"}</li>
                <li>
                  <span uk-icon="icon: youtube"></span>
                  <a
                    href={session.youtube_link || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recording
                  </a>
                </li>
                <li>
                  <span uk-icon="icon: star"></span>
                  {session.ras}
                </li>
                <li>
                  <span uk-icon="icon: clock"></span>
                  {session.timer || "No timer"}
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="uk-comment-body">
          <p>{session.description || "Nothing"}</p>
        </div>
        <ul uk-accordion="multiple: true">
          <li className="uk-open">
            <a className="uk-accordion-title" href="#">
              <strong>Seeker - {session.seeker.name || "Nothing"}</strong>
            </a>
            <div className="uk-accordion-content">
              <p>{session.seeker.hitch || "Nothing"}</p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <strong>Alchemist - {session.alchemist.name || "Nothing"}</strong>
            </a>
            <div className="uk-accordion-content">
              <p>{session.alchemist.method || "Nothing"}</p>
              <p>{session.alchemist.description || "Nothing"}</p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <strong>Provoker - {session.provoker.name || "Nothing"}</strong>
            </a>
            <div className="uk-accordion-content">
              <p>{session.provoker.provocation || "Nothing"}</p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <strong>Solutions</strong>
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-list uk-list-divider">
                {session.solvers.map((solver, index) => {
                  return (
                    <li key={solver.id}>
                      <article className="uk-comment uk-container">
                        <header className="uk-comment-header">
                          <div
                            className="uk-grid-medium uk-flex-middle"
                            uk-grid
                          >
                            <div className="uk-width-expand">
                              <h4 className="uk-comment-title uk-margin-remove">
                                <strong>
                                  Solver - {solver.name || "Nothing"}
                                </strong>
                              </h4>
                            </div>
                          </div>
                        </header>
                        <div className="uk-comment-body">
                          <a
                            href={solver.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Telegram Link
                          </a>
                          <p>{solver.description || "description"}</p>
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
          <li className="uk-margin-large-bottom">
            <a className="uk-accordion-title" href="#">
              <strong className="uk-text-default">
                Sketcher - {session.sketcher.name || "Nothing"}
              </strong>
            </a>
            <div className="uk-accordion-content">
              <a href={session.sketcher.link} target="_blank" rel="noreferrer">
                Telegram Link
              </a>
            </div>
          </li>
        </ul>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const session = await fetchAPI(`/sessions/${params.id}`)
  return { props: { session } }
}

export default Session
