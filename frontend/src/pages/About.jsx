import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      {/* Page Title */}
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>

        {/* Image */}
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt='About Forever'
        />

        {/* Content */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>
            Forever was created with a simple idea — to make fashion
            accessible, stylish, and easy for everyone. We bring you
            carefully selected products that combine quality, comfort,
            and modern design.
          </p>

          <p>
            Our goal is to provide a smooth shopping experience where
            you can discover products you love and order them with
            confidence. From everyday essentials to stylish pieces,
            we are always looking for products that add value to your
            wardrobe.
          </p>

          <b className='text-gray-800'>
            Our Mission
          </b>

          <p>
            Our mission is to provide high-quality products at
            affordable prices while keeping our customers at the
            center of everything we do. We continuously work to
            improve our products, service, and shopping experience.
          </p>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className='py-10'>

        <div className='text-2xl mb-8'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3'>

          {/* Quality */}
          <div className='border px-8 sm:px-10 py-10 flex flex-col gap-5'>
            <b className='text-gray-800'>
              Quality Assurance
            </b>

            <p className='text-gray-600 text-sm'>
              We carefully select our products and focus on quality
              so you can shop with confidence.
            </p>
          </div>

          {/* Convenience */}
          <div className='border border-l-0 px-8 sm:px-10 py-10 flex flex-col gap-5'>
            <b className='text-gray-800'>
              Convenience
            </b>

            <p className='text-gray-600 text-sm'>
              Our easy-to-use website makes browsing, shopping, and
              ordering your favorite products simple.
            </p>
          </div>

          {/* Customer Service */}
          <div className='border border-l-0 px-8 sm:px-10 py-10 flex flex-col gap-5'>
            <b className='text-gray-800'>
              Customer Service
            </b>

            <p className='text-gray-600 text-sm'>
              Our customers are important to us, and we are always
              working to provide a better shopping experience.
            </p>
          </div>

        </div>

      </div>

      {/* Newsletter */}
      <div className='text-center py-16'>

        <p className='text-2xl font-medium'>
          Subscribe now & get 20% off
        </p>

        <p className='text-gray-500 mt-3'>
          Subscribe to our newsletter and stay updated with our
          latest products and offers.
        </p>

        <div className='w-full sm:w-1/2 flex mx-auto my-6 border border-gray-300'>

          <input
            className='w-full px-4 py-3 outline-none'
            type='email'
            placeholder='Enter your email'
          />

          <button
            className='bg-black text-white px-6 py-3 text-sm'
          >
            SUBSCRIBE
          </button>

        </div>

      </div>

    </div>
  )
}

export default About
