import React from 'react'
import Layout from '../../components/Layout'
import '../../components/style.scss'
import BlogRoll from '../../components/BlogRoll'
import EmailSignUp from '../../components/EmailSignUp'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="full-width-image">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: '#1C2330',
              padding: '1rem',
              textAlign:'center',
            }}
          >
            Latest Post
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
              <EmailSignUp/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
