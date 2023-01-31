import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Category } from '../components/prices'

const Prices = () => {
  const { initialProductList: products } = useSelector((state) => state.product)

  const uniqueValues = (product, value) => {
    const result = products
      .map((item) => item[value])
      .filter((item) => item !== '')
    return [...new Set(result)]
  }
  const category = uniqueValues(products, 'category')

  return (
    <Wrapper>
      {category.map((item, index) => {
        return (
          <div className='container' key={index}>
            <h3 className='title header'> {item}</h3>
            <div className='title-underline'></div>
            <Category category={item} products={products} />
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;

  .container {
    margin: 1rem;
    background-color: var(--grey-2);
    box-shadow: var(--shadow-2);
    border-radius: var(--radius);
    padding: 1rem;
    .header {
      text-transform: uppercase;
    }
  }

  @media (max-width: 792px) {
    grid-template-columns: 1fr;
  }
`
export default Prices
