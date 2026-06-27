import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {

    const { products }= useContext(ShopContext);
   
           
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
             <p CLASnAME='w-3/4 m-auto text-xm sm:text-sm md:text-base text-gray-600'>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque earum nemo maxime architecto laborum hic modi optio delectus reiciendis ad voluptas, ipsa quas, voluptatum necessitatibus eveniet deserunt debitis minus!
             </p>
      
      </div>

    </div>
  )
}

export default LatestCollection