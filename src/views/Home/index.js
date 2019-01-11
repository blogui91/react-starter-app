import React, { Component } from 'react';
export default class Home extends Component {

  actions () {
    return [
      <a href='/link'>This is a Link</a>,
      <a href='/link'>This is otro link</a>
    ]
  }

  render () {
    return (
      <div>
        <h1> Home </h1>
        { console.log(process.env) }
        <p>Sit esse labore et consequat reprehenderit ut duis cillum qui cillum. Enim qui et esse nostrud laboris anim laboris excepteur tempor. Cupidatat commodo ea id magna nulla dolor minim.</p>
      </div>
    )
  }
}
