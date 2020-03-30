import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${''})`}}>
        <CardFront title={this.props.title} rating={this.props.rating} genres={this.props.genres}/>
      </div>
    )
  }
}
