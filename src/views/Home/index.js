import React, { Component } from 'react';
import { env } from '../../helpers'
export default class Home extends Component {

  actions () {
    return [
      <a href='/link'>This is a Link</a>,
      <a href='/link'>This is otro link</a>
    ]
  }

  render () {
    return (
      <div style={{padding: '80px 0 80px 0'}}>
        <h1> Home </h1>
        { (env('API_SECRET', 'ds')) }
        <p>Sit esse labore et consequat reprehenderit ut duis cillum qui cillum. Enim qui et esse nostrud laboris anim laboris excepteur tempor. Cupidatat commodo ea id magna nulla dolor minim.</p>
      </div>
    )
  }
}
