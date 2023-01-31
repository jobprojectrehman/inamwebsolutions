import React from 'react'
import styled from 'styled-components'
import {
  FaInstagramSquare,
  FaFacebook,
  FaTwitterSquare,

  // FaSignInAlt,
} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const SocialMedia = () => {
  const { facebook, instagram, twitter } = useSelector(
    (state) => state.websiteContent.contentSocialLinks
  )
  const socialIcons = [
    {
      id: 1,
      path: facebook,
      icon: <FaFacebook />,
      title: 'Facebook',
    },
    {
      id: 2,
      path: twitter,
      icon: <FaTwitterSquare />,
      title: 'Twitter',
    },
    {
      id: 3,
      path: instagram,
      icon: <FaInstagramSquare />,
      title: 'Instagram',
    },
  ]
  return (
    <Wrapper className='boxDesign'>
      <h3 className='title'>Follow us</h3>
      <ul>
        {socialIcons.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.path} target='_blank' rel='noreferrer'>
                {item.icon} <span>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--white);
    border-radius: var(--radius-1);
    transition: var(--transition);
    padding-left: 1rem;
    span {
      margin-left: 1rem;
    }

    :hover {
      cursor: pointer;
      background-color: var(--primary-7);
    }
  }
`
export default SocialMedia
