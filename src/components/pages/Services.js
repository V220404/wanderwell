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
    position: 'relative',
    borderRadius: '8px',
    margin: '10px',
    padding: '10px', // Reduced padding
    textAlign: 'center',
    width: 'calc(33.33% - 20px)', // Three columns on larger screens
    transition: 'transform 0.2s ease-in-out',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    fontSize: '1em', // Default font size

    // Media query for tablets (max-width: 1024px)
    '@media (max-width: 1024px)': {
      width: 'calc(50% - 20px)', // Two columns on tablets
    },

    // Media query for mobile phones (max-width: 768px)
    '@media (max-width: 768px)': {
      width: 'calc(100% - 20px)', // Single column on mobile phones
      padding: '5px', // Reduced padding for smaller screens
    },
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'opacity 0.5s ease-in-out',
  };

  const hiddenImgStyle = {
    ...imgStyle,
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: '0',
  };

  const services = [
    {
      title: 'Beach Vacation',
      description: 'Enjoy a relaxing beach vacation with crystal clear waters and beautiful sunsets.',
      img: 'https://media.istockphoto.com/id/509394693/photo/sunset-on-beach.jpg?s=612x612&w=0&k=20&c=c2D2um47c7FwYeX_xdKeaIrmhjrZZ8U4O8dDT_jzmXI=',
      hoverImg: 'https://cdn.hometogo.net/assets/media/pics/600_315/6119e9bff3871.jpg',
    },
    {
      title: 'Mountain Adventure',
      description: 'Experience the thrill of mountain adventures with hiking, climbing, and breathtaking views.',
      img: 'https://i1.wp.com/adventure-pulse.com/blog/wp-content/uploads/2022/09/DSCN1288.jpg?resize=640%2C480&ssl=1',
      hoverImg: 'https://www.muchbetteradventures.com/magazine/content/images/2019/06/24093921/mont-blanc-clouds-1600x823.jpeg',
    },
    {
      title: 'City Tours',
      description: 'Discover the history and culture of top cities around the world with guided tours.',
      img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/75/aa/85.jpg',
      hoverImg: 'https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/Bus_10-Potsdamer-Platz_c_visitBerlin_Foto_Lukas_Spoerl_DL_PPT_0.jpg?h=130c1fb9&itok=gkqtlBw0',
    },
    {
      title: 'Safari Expedition',
      description: 'Embark on a safari expedition to witness wildlife in their natural habitats.',
      img: 'https://5.imimg.com/data5/DW/YE/GLADMIN-8883857/hill-and-jungle-expedition.png',
      hoverImg: 'https://safarifrank.com/wp-content/uploads/2018/11/guests-walking-okavango-delta-1920x1080.jpg',
    },
    {
      title: 'Cruise Trips',
      description: 'Set sail on luxury cruise trips with fine dining, entertainment, and exotic destinations.',
      img: 'https://cruisesingoa.com/images/goa-boat-cruise.webp',
      hoverImg: 'https://media.easemytrip.com/media/Deal/DL638376387466688843/Attraction/Attraction1Taefu.jpg',
    },
    {
      title: 'Cultural Exploration',
      description: 'Immerse yourself in different cultures and traditions with our curated cultural tours.',
      img: 'https://qph.cf2.quoracdn.net/main-qimg-0c2d915b7ecf1651298ecad6b411a003-lq',
      hoverImg: 'https://haitiwonderland.com/assets/images/upload/blog/haiti_exploration-culturelle--a-la-decouverte-de-l-ame-haitienne_1700673818.webp',
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
              e.currentTarget.style.transform = 'scale(1.05)';
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
