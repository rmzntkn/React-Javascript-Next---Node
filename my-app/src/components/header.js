import React from "react"
import Link from "gatsby-link"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  // handlePurchase = token => {
  //   const amount = 5000
  //   const description = "My awesome product"

  //   const bodyObject = {
  //     tokenId: token.id,
  //     email: token.email,
  //     name: token.name,
  //     description,
  //     amount,
  //   }

  //   fetch("http://localhost:9000/stripe-charge", {
  //     method: "POST",
  //     body: JSON.stringify(bodyObject),
  //   })
  // }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src="/images/logo-designcode.svg" width="30" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
        </div>
      </div>
    )
  }
}

export default Header
