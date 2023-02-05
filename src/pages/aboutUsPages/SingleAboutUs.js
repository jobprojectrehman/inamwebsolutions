import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleAboutUs = () => {
  const { _id } = useParams()
  const { aboutUs } = useSelector((state) => state.websiteContent)
  const person = aboutUs.find((item) => item._id === _id)

  return (
    <Wrapper>
      <div className='box-1'>
        <img src={person?.uploadImage[0]?.secure_url} alt={person.name} />
      </div>
      <div className='box-2'>
        <div className='heading'>
          <span>{person?.name}</span>
          <span>{person?.profession}</span>
        </div>
        <div className='paragraph'>
          <p>{person?.paragraph}</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;

  .box-1 {
    margin: 1rem;
    width: 400px;
    height: 400px;
    box-shadow: var(--shadow-4);
    border-bottom: 5px solid var(--primary-5);
    img {
      margin-top: -5px;
      width: 100%;
    }
  }
  .box-2 {
    margin: 1rem;

    background-color: var(--white);
    box-shadow: var(--shadow-2);
    .heading {
      text-transform: capitalize;
      font-size: 2rem;
      display: flex;
      justify-content: space-around;
      background-color: var(--grey-2);
    }
    .paragraph {
      padding: 1rem;
    }
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    .box-1 {
      width: 350px;
      height: 350px;
      margin: 0 auto;
      img {
      }
    }
  }
`

export default SingleAboutUs
