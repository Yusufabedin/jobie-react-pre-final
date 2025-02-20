import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import img from '../../images/logo-full.png'

const ForgotPassword = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('h-100')
  }, [])

  const [forgotData, setForgotData] = useState({})
  const handleBlur = (e) => {
    const newForgotData = { ...forgotData }
    newForgotData[e.target.name] = e.target.value
    setForgotData(newForgotData)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const submit = { ...forgotData }
  }

  return (
    <div className='authincation h-100'>
      <div className='container h-100'>
        <div className='row justify-content-center h-100 align-items-center'>
          <div className='col-md-6'>
            <div className='authincation-content'>
              <div className='row no-gutters'>
                <div className='col-xl-12'>
                  <div className='auth-form'>
                    <div className='text-center mb-3'>
                      <Link to='/'>
                        <img src={img} alt='' />
                      </Link>
                    </div>
                    <h4 className='text-center mb-4 text-white'>
                      Forgot Password
                    </h4>
                    <form
                      action=''
                      onSubmit={(e) => e.preventDefault(submitHandler)}
                    >
                      <div className='form-group'>
                        <label className='text-white'>
                          <strong>Email</strong>
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          name='Email'
                          onChange={handleBlur}
                        />
                      </div>
                      <div className='text-center'>
                        <button
                          type='submit'
                          className='btn bg-white text-primary btn-block'
                          onClick={() => submitHandler}
                        >
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
