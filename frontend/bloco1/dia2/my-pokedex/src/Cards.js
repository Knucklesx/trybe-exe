import React from 'react';
import './Cards.css';

class Cards extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    const { measurementUnit, value } = averageWeight;

    return (
    <section className='card'>
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Average weight { value }{ measurementUnit }</p>
      </div>
      <img src={image} alt={ `${name} sprite` } />
    </section>)
  }

}

export default Cards