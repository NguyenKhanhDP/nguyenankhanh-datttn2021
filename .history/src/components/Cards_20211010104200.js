import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hoạt động doanh nghiệp</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cart1.jpg'
              text='Những điều cần phải biết khi tham gia giao thông '
              label='YAMMAHA'
              path='/services'
              /*https://www.google.com/search?q=yammaha&tbm=isch&ved=2ahUKEwi-p5DZy73zAhXKAqYKHe5GB10Q2-cCegQIABAA&oq=yammaha&gs_lcp=CgNpbWcQAzIFCAAQgAQyBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB46CAgAEIAEELEDOgcIIxDvAxAnOgQIABBDOgsIABCABBCxAxCDAToGCAAQChAeUJ2FVFiAmFRg8JxUaABwAHgAgAGFAYgB-QaSAQMwLjeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=H65hYf6bDsqFmAXujZ3oBQ&bih=692&biw=1583&hl=vi#imgrc=ho1MbRzY1_cAzM
            *//>
            <CardItem
              src='images/lxan.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Lái xe an toàn'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
