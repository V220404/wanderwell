import React from 'react';
import '../../App.css';

export default function Services() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const itemStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '28%',
    transition: 'transform 0.2s ease-in-out',
    boxSizing: 'border-box',
    overflow: 'hidden', // Ensure the content stays within the borders
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'opacity 0.5s ease-in-out', // Smooth transition for image change
  };

  const hiddenImgStyle = {
    ...imgStyle,
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '0',
  };

  const hoverEffect = {
    transform: 'scale(1.02)',
  };

  const services = [
    {
      title: 'Beach Vacation',
      description: 'Enjoy a relaxing beach vacation with crystal clear waters and beautiful sunsets.',
      img: 'https://via.placeholder.com/150',
      hoverImg: 'https://via.placeholder.com/150/0000FF/808080',
    },
    {
      title: 'Mountain Adventure',
      description: 'Experience the thrill of mountain adventures with hiking, climbing, and breathtaking views.',
      img: 'https://via.placeholder.com/150',
      hoverImg: 'https://via.placeholder.com/150/0000FF/808080',
    },
    {
      title: 'City Tours',
      description: 'Discover the history and culture of top cities around the world with guided tours.',
      img: 'https://via.placeholder.com/150',
      hoverImg: 'https://via.placeholder.com/150/0000FF/808080',
    },
    {
      title: 'Safari Expedition',
      description: 'Embark on a safari expedition to witness wildlife in their natural habitats.',
      img: 'https://via.placeholder.com/150',
      hoverImg: 'https://via.placeholder.com/150/0000FF/808080',
    },
    {
      title: 'Cruise Trips',
      description: 'Set sail on luxury cruise trips with fine dining, entertainment, and exotic destinations.',
      img: 'https://via.placeholder.com/150',
      hoverImg: 'https://via.placeholder.com/150/0000FF/808080',
    },
    {
      title: 'Cultural Exploration',
      description: 'Immerse yourself in different cultures and traditions with our curated cultural tours.',
      img: 'https://via.placeholder.com/150',
      hoverImg: 'https://via.placeholder.com/150/0000FF/808080',
    },
  ];

  return (
    <>
      <h1 className='services'>Our Packages</h1>
      <div style={containerStyle}>
        {services.map((service, index) => (
          <div
            key={index}
            style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.default-img').style.opacity = '0';
              e.currentTarget.querySelector('.hover-img').style.opacity = '1';
              e.currentTarget.style.transform = hoverEffect.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('.default-img').style.opacity = '1';
              e.currentTarget.querySelector('.hover-img').style.opacity = '0';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img src={service.img} alt={service.title} style={imgStyle} className='default-img' />
            <img src={service.hoverImg} alt={service.title} style={hiddenImgStyle} className='hover-img' />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
