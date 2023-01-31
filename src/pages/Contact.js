import React from 'react'
import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { customFetch } from '../utils/axios'
const image =
  'https://res.cloudinary.com/inam6530/image/upload/v1673448474/Default%20project/contactUs/Support_2_toxjey.png'

const Contact = () => {
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = async (e) => {
    // Prepare axios and good to go.
    e.preventDefault()
    let name = nameRef.current.value
    let phone = phoneRef.current.value
    let email = emailRef.current.value
    let subject = subjectRef.current.value
    let message = messageRef.current.value
    console.log(name)
    if (!name || !phone || !email || !message || !subject) {
      return toast.warning('Please fill all fields.')
    } else {
      try {
        const response = await customFetch.post('contacts', {
          name,
          phone,
          email,
          subject,
          message,
        })
        toast.success(
          `Hello, ${response.data.contact.name}. A team member will be in touch soon.`
        )
        nameRef.current.value = ''
        phoneRef.current.value = ''
        emailRef.current.value = ''
        subjectRef.current.value = ''
        messageRef.current.value = ''
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='Welcome to our Contact Form' />
        <link rel='canonical' href='/contact' />
      </Helmet>
      <Wrapper>
        <form onSubmit={handleSubmit} className='form'>
          <h1 className='title'>Get In Touch with us</h1>
          <div className='title-underline'></div>
          {/* name */}
          <div>
            <label htmlFor='name' className='form-label'>
              Full Name
            </label>
            <input className='form-input' type='text' ref={nameRef} />
          </div>
          {/* Mobile */}
          <div className='mobile'>
            <label htmlFor='Mobile' className='form-label '>
              Mobile Number
            </label>
            <input className='form-input' type='number' ref={phoneRef} />
          </div>
          {/* Email */}
          <div>
            <label htmlFor='email' className='form-label'>
              Email Address
            </label>
            <input className='form-input' type='text' ref={emailRef} />
          </div>
          {/* Subject */}
          <div>
            <label htmlFor='subject' className='form-label'>
              Subject
            </label>
            <input className='form-input' type='text' ref={subjectRef} />
          </div>
          {/* Message */}
          <div>
            <label htmlFor='message' className='form-label'>
              Message
            </label>
            <textarea
              className='form-input'
              type='text'
              cols='50'
              rows='5'
              ref={messageRef}
            />
          </div>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
        <div className='contactImage'>
          <div className='address'></div>
          <img src={image} alt='contactUs' />
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  h1 {
    margin-top: 0;
    font-size: 1rem;
  }

  .contactImage {
    margin-left: 2rem;
    box-shadow: var(--shadow-2);
    border-radius: var(--radius-1);
    padding: 1rem;

    background-color: var(--primary-1);
    img {
      margin-bottom: -1.5rem;
      margin-left: -1rem;
      border-bottom-left-radius: var(--radius-1);
      width: 40vw;
    }
  }
  .mobile {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
  }
  @media (max-width: 720px) {
    .contactImage {
      display: none;
    }
  }
`
export default Contact
