import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { customFetch } from '../../utils/axios'
import FormInput from '../FormInput'

const initialState = {
  user: [],
  isLoading: false,
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  updatedAt: '',
  createdAt: '',
  verified: '',
}
const StripeProfile = ({ setShowCart }) => {
  const [state, setState] = useState(initialState)
  const { user } = useSelector((state) => state)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !state.phone ||
      !state.address ||
      !state.city ||
      !state.province ||
      !state.postalCode
    ) {
      return toast.warning('Please fill all the fields.')
    }

    try {
      await customFetch.patch('/auth/changeprofile', state, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      setShowCart(true)
    } catch (error) {
      console.log(error.response)
    }
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }

  // Get single User
  const getData = async () => {
    setState({ ...state, isLoading: true })
    try {
      const response = await customFetch.get('auth/profile', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      const data = response.data
      setState({ ...state, ...data, isLoading: false })
    } catch (error) {
      setState({ ...state, isLoading: false })
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
  if (state.isLoading) {
    return (
      <div>
        <h1 className='title'>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <h3 className='title'>Confirm your profile </h3>
      <div className='title-underline'></div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='box-1'>
          {/* name input */}
          <FormInput
            label={'First Name'}
            name={'name'}
            value={state.name}
            onChange={handleChange}
          />
          {/* last name input */}
          <FormInput
            label={'Last Name'}
            name={'lastName'}
            value={state.lastName}
            onChange={handleChange}
          />
          {/* Email input */}
          <FormInput
            name={'email'}
            value={state.email}
            onChange={handleChange}
          />
          {/* phone input */}
          <FormInput
            type={'number'}
            name={'phone'}
            value={state.phone}
            onChange={handleChange}
          />
        </div>
        <div className='box-2'>
          {/* Address input */}
          <FormInput
            name={'address'}
            value={state.address}
            onChange={handleChange}
          />
          {/* City input */}
          <FormInput name={'city'} value={state.city} onChange={handleChange} />
          {/* province input */}
          <FormInput
            name={'province'}
            value={state.province}
            onChange={handleChange}
          />
          {/* postalCode input */}
          <FormInput
            label={'postal code'}
            name={'postalCode'}
            value={state.postalCode}
            onChange={handleChange}
          />

          <button type='submit' className='btn'>
            Next
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .dates {
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
  @media (min-width: 600px) {
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      min-width: 800px;
    }
  }
`

export default StripeProfile
