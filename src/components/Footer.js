import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Post
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4"><section></section></div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/TheProductLens/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1rem', height: '1rem' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/product_lens">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1rem', height: '1rem' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
