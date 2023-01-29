import React, { useContext } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import ThankYouComponent from '../ThankYouComponent'

const ContactMeFormComponent: React.FC = () => {
  const [state, handleSubmit] = useForm('xeqwegwz')


  if (state.succeeded) {
    return <ThankYouComponent/> 
  }
  return (
    <>
      <div className={'lineSeparator_ctme_top'} />
      <h1 className={'title_1'}>Get in Touch</h1>
      <div className={'text_ctme'}>
        <p className='body_2'>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in Backend
          Engineering solutions. But I’m also happy to hear about opportunites
          that don’t fit that positions. I’m a hard-working and positive person
          who will always approach each task with a sense of purpose and
          attention to detail. Please do feel free to check out my online
          profiles below and get in touch using the form.
        </p>
      </div>
      <div className={'logos_tw'}>
        <div className={'git'} />
        <div className={'tw'} />
        <div className={'link'} />
      </div>
      <div className={'lineSeparator_ctme_down'} />
      <div className={'Box_ctme'}>
        <h1 className={'title_2'}>Contact Me</h1>
        <div className={'Box_form'}>
          <p className='body_1 name_title_form'>Name</p>
          <p className='body_1 email_title_form'>Email Address</p>
          <p className='body_1 mssg_title_form'>Message</p>
          <form onSubmit={handleSubmit}>
            <input
              className='body_1 form_name name_ctme'
              type='text'
              id='name'
              placeholder='Jane Doe'
              name='name'
              required
              minLength={10}
              maxLength={50}
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
            <input
              className='body_1 form_name email_ctme'
              type='text'
              id='email'
              placeholder='admin@hotmail.com'
              name='email'
              required
              minLength={10}
              maxLength={50}
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <textarea
              className='body_1 form_mssg mssg_ctme'
              id='message'
              placeholder='How Can I help?'
              name='message'
              required
              minLength={10}
              maxLength={200}
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button className={'buttonPrimary'} type={"submit"} disabled={state.submitting}>
              <div className='arrow-container'>
                <div className='arrow-img'></div>
              </div>
              <div className='text'>Send Message</div>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactMeFormComponent
