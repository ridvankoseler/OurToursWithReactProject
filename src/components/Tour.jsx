import React, { useState } from 'react'

const Tour = ({tour , removeTour}) => {
  const [show, setShow] = useState(true)

  

  const handleClick = () => {
    setShow(!show)
  }
  // console.log(tour);
  return (
    <div>
      {
        tour.map((item)=>{
          // console.log(item);
          const {id,name,info,image,price} = item;
          return (
            <div
              key={id}
              className='container main-container mt-3 p-1 d-flex justify-content-between align-items-center flex-column'
            >
              <div className='mt-3 box p-3 rounded-3'>
                <div className='imgDiv text-center '>
                  <img
                    className='rounded-5 imgDiv text-center'
                    src={image}
                    alt='img'
                  />
                </div>
                <div className='header d-flex justify-content-between align-items-center m-auto mt-2 gap-5'>
                  <h3 className='fs-5 p-1'>{name}</h3>
                  <h2 className='price fs-5 p-1 text-danger '>{price}</h2>
                </div>
                {show ? (
                  <div className='info'>
                    <p>
                      {info.slice(0, 200)}...
                      <button
                        onClick={handleClick}
                        className='border-0 fs-6 text-success bg-white'
                      >
                        Read More
                      </button>
                    </p>
                  </div>
                ) : (
                  <div className='info'>
                    <p>
                      {info}
                      <button
                        onClick={handleClick}
                        className='border-0 bg-white fs-6 text-success'
                      >
                        Show Less
                      </button>
                    </p>
                  </div>
                )}
                <div className='text-center mt-3 '>
                  <button
                    className='bg-primary text-light rounded-3 p-1 notInterested'
                    onClick={() => removeTour(id)}
                  >
                    Not Interested
                  </button>
                </div>
              </div>
            </div>
          );
        })
      }
      
    </div>
  )
}

export default Tour