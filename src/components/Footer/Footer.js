/* eslint-disable */
import React from "react"
// used for making the prop types of this component
// import PropTypes from "prop-types"
import { connect } from 'react-redux'
// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap"

// Actions
import { getArticles } from 'store/articles/actions'

const mapStateToProps = state => {
  const { articlesReducer } = state
  return {
    articles: articlesReducer.articles
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticles())
  }
}

class Footer extends React.Component {
  getPosts = () => {
    const response = this.props.getArticles()
  }

  componentDidMount () {
    // this.getPosts()
  }

  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="javascript:void(0)">Creative Tim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">Blog</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <a
              href="javascript:void(0)"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Tim
            </a>{" "}
            for a better web.
          </div>
        </Container>
      </footer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
