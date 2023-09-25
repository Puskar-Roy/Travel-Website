import React from 'react'
import '../../css/Card.css'
const Card = () => {
  return (
    <>
      <div className="cardContainer">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/463617226.jpg?k=3c0f41bdd8c00150a3d6167da53544cd618f59667d173f478af8d2e22fcd2407&o=&hp=1"
          alt="ITC Royal Bengal"
        />
        <div className="cardContent">
          <h1>ITC Royal Bengal</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            architecto.
          </p>
          <button className='btn'>Visit Now!</button>
        </div>
      </div>
    </>
  );
}

export default Card
