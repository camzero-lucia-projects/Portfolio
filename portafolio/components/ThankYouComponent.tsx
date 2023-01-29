import React from 'react'
import Image from 'next/image'
import Thick from '../public/assets/404-tick.png'
import Link from 'next/link'

const ThankYouComponent: React.FC = () => {
  return (
    <div className={`Container_thankyou`}>
      <div className={`popup_img`}>
        <Image src={Thick} alt={'Thick'} objectFit='contain' fill={true} />
      </div>
      <div className={`popup`}>
        <h2>Thank you</h2>
        <p className='body_1'>
          Your Details has been succesfully submitted. Thanks!
        </p>
        <Link href={'/'}>
          <button type='button'>Ok</button>
        </Link>
      </div>
    </div>
  )
}

export default ThankYouComponent
