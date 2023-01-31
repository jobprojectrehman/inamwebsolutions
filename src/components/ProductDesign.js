import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductDesign = ({ item }) => {
  const image = item.uploadImage[0].secure_url

  return (
    <Wrapper>
      <Link to={item._id}>
        <div>
          <p className='title'>
            <strong>{item.title}</strong>
          </p>
          <div className='img-container'>
            <img src={image} alt='' />
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  margin: 5px;
  position: relative;
  transition: var(--transition-1);
  :hover {
    box-shadow: var(--shadow-3);
    p {
      background-color: var(--primary-1);
      color: var(--primary-9);
    }
  }
  .title {
    transition: var(--transition-1);
    padding: 5px;
    width: 100%;
    position: absolute;
    top: -17px;
    color: var(--primary-7);
    background-color: var(--white);

    margin-bottom: 0px;
  }
  .img-container {
    max-width: 250px;
    max-height: 250px;
    transition: var(--transition-1);

    img {
      width: 100%;
    }
  }
  @media (max-width: 620px) {
    .img-container {
      max-width: 180px;
      max-height: 180px;
    }
  }
  @media (max-width: 400px) {
    .img-container {
      max-width: 160px;
      max-height: 160px;
    }
  }
`
export default ProductDesign
