import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container text-title text-auto mx-auto text-uppercase pt-5">
       <h1 className="display-3">404</h1>
       <h1>error</h1>
       <h2>page not found</h2>
       <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
      </div>
    )
  }
}
