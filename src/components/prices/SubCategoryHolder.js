import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../../utils/helper'

const SubCategoryHolder = ({ subCategoryProducts }) => {
  const navigate = useNavigate()

  const handleClick = (_id) => {
    navigate(`/products/${_id}`)
  }
  return (
    <Wrapper>
      {subCategoryProducts.map((item, index) => {
        return (
          <div key={index}>
            <div onClick={() => handleClick(item._id)} className='box-holder'>
              <span className='box-1'> {item.title}</span>
              <div className='box-2'>
                <div>
                  <span>{formatPrice(item.amount)}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  box-shadow: var(--shadow-2);
  background-color: var(--grey-05);
  padding: 1rem;
  span {
    text-transform: capitalize;
  }
  .box-holder {
    border: 2px solid var(--primary-1);
    /* background-color: var(--primary-1); */
    color: var(--primary-9);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    margin-top: 1rem;
    align-items: center;
    transition: var(--transition-1);
    :hover {
      cursor: pointer;
      box-shadow: var(--shadow-3);
    }
  }
  .box-1 {
  }
  .box-2 {
    text-align: center;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

export default SubCategoryHolder
