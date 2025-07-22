import React from 'react'
import { useState } from 'react';


function Course({id, name, info, image, price, removeCourse}) {
    const [readmore, setreadmore] = useState(false);

    let showText = readmore ? info : `${info.substring(0,100)}`

    function showTextsetreadmore() {
        setreadmore(!readmore)
    }

  return (
    <div className='w-3/7 bg-blue-950 rounded-sm p-6'>

        <div className='h-full gap-3 w-full flex flex-col justify-center'>
            
            <div>
                <img src={image}/>
            </div>

            <div className='flex justify-between mt-1.5'>
                <p className='text-gray-300 text-2xl font-bold'>
                    {name}
                </p>

                <p className='text-gray-300 text-2xl underline'>
                    ₹{price}
                </p>
            </div>

            <p className='text-gray-300 mt-3 mb-3'>
                {showText}
                <span onClick={showTextsetreadmore} className='cursor-pointer'>
                    {
                        readmore ? ` ...show less` : ` ...read more`
                    }
                </span>
            </p>

            <button onClick={ () => removeCourse(id) } className='cursor-pointer w-1/4 p-2 rounded-sm text-blue-800 px-2 bg-gray-300 m-auto mt-3 mb-0'>
                Not Intrested
            </button>

        </div>

    </div>
  )
}

export default Course