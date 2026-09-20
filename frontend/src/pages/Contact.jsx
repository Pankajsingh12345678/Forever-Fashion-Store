import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      {/* Page Title */}
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-20'>

        {/* Contact Image */}
        <img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt='Contact Forever'
        />

        {/* Contact Information */}
        <div className='flex flex-col justify-center gap-6 text-gray-600'>

          <p className='font-semibold text-xl text-gray-800'>
            Our Store
          </p>

          <p>
            123 Fashion Street
            <br />
            New Delhi, India
          </p>

          <p>
            Tel: +91 98765 43210
            <br />
            Email: support@forever.com
          </p>

          <p className='font-semibold text-xl text-gray-800'>
            Careers at Forever
          </p>

          <p>
            Want to join our team? Explore exciting opportunities
            and build your career with us.
          </p>

          <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all w-fit'>
            EXPLORE JOBS
          </button>

        </div>

      </div>

      {/* Contact Form */}
      <div className='mb-20'>

        <div className='text-2xl mb-8'>
          <Title text1={'GET IN'} text2={'TOUCH'} />
        </div>

        <form className='max-w-2xl mx-auto flex flex-col gap-4'>

          {/* Name */}
          <input
            type='text'
            placeholder='Your Name'
            required
            className='border border-gray-300 px-4 py-3 outline-none'
          />

          {/* Email */}
          <input
            type='email'
            placeholder='Your Email'
            required
            className='border border-gray-300 px-4 py-3 outline-none'
          />

          {/* Subject */}
          <input
            type='text'
            placeholder='Subject'
            required
            className='border border-gray-300 px-4 py-3 outline-none'
          />

          {/* Message */}
          <textarea
            rows='6'
            placeholder='Your Message'
            required
            className='border border-gray-300 px-4 py-3 outline-none resize-none'
          ></textarea>

          {/* Submit */}
          <button
            type='submit'
            className='bg-black text-white px-8 py-3 text-sm w-fit mx-auto hover:bg-gray-800 transition-all'
          >
            SEND MESSAGE
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact
