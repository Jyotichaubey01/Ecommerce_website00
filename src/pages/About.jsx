import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      {/* About Us Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt="About"
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Our e-commerce platform is dedicated to providing customers with
            high-quality products at affordable prices. We offer a wide range
            of fashion and lifestyle products to meet the needs of modern
            shoppers.
          </p>

          <p>
            Our mission is to deliver an excellent shopping experience through
            quality products, fast delivery, secure payments, and outstanding
            customer support.
          </p>

          <b className='text-gray-800'>Our Mission</b>

          <p>
            Our mission is to make online shopping simple, secure, and enjoyable
            for everyone. We aim to provide high-quality products at affordable
            prices while ensuring excellent customer service and customer
            satisfaction.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b className='text-gray-800'>Quality Assurance:</b>

          <p className='text-gray-600'>
            We are committed to providing high-quality products that meet
            customer expectations. Every product is carefully selected and
            checked to ensure durability, reliability, and customer satisfaction.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b className='text-gray-800'>Convenience:</b>

          <p className='text-gray-600'>
            We provide a seamless and convenient shopping experience with an
            easy-to-use website, secure payment options, and fast delivery
            services.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b className='text-gray-800'>Exceptional Customer Service:</b>

          <p className='text-gray-600'>
            Our support team is always ready to assist customers and provide
            quick responses, reliable support, and complete customer
            satisfaction.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About