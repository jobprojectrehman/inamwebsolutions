import React from 'react'
import styled from 'styled-components'

const TeamMember = ({ image, name, profession, paragraph }) => {
  return (
    <Wrapper>
      <div className='image'>
        <img src={image} alt={name} />
      </div>
      <div className='body'>
        <div className='spanHolder'>
          <span>{name}</span>
          <span>{profession}</span>
        </div>
        <p className=''>{paragraph}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Team Members */

  box-shadow: var(--shadow-2);
  width: 80vw;
  margin: 1rem auto;
  background: var(--white);
  .image {
    background: var(--grey-4);
    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
  }
  img {
    width: 80vw;
    height: 30vh;
    object-fit: contain;
    border-bottom: 2px solid var(--primary-5);
  }
  .body {
    margin-top: -8px;
    padding: 1rem;
    background: var(--white);
  }
  .spanHolder {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }
  p {
    margin-bottom: 0;
    color: var(--grey-5);
  }
  @media (min-width: 600px) {
    width: 45vw;
    img {
      width: 45vw;
    }
  }
  @media (min-width: 1024px) {
    width: 30vw;
    img {
      width: 30vw;
    }
  }
`
export default TeamMember
