import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../../utils/helper'

const SubCategoryHolder = ({ subCategoryProducts }) => {
  return (
    <Wrapper>
      {subCategoryProducts.map((item, index) => {
        return (
          <div key={index}>
            <div className='box-holder'>
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
