import React from "react"
import Sessions from "../components/sessions"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"

const Home = ({ sessions }) => {
  return (
    <Layout>
      <Sessions sessions={sessions} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const sessions = await fetchAPI("/sessions")

  return {
    props: { sessions },
  }
}

export default Home
