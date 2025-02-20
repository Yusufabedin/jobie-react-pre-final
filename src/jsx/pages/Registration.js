import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/logo-full.png'

const Registration = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('h-100')
  }, [])

  const [registrationData, setRegistrationData] = useState({})
  const handleBlur = (e) => {
    const newRegistrationData = { ...registrationData }
    newRegistrationData[e.target.name] = e.target.value
    setRegistrationData(newRegistrationData)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const submitRegister = { ...registrationData }
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
                      Sign up your account
                    </h4>
                    <form
                      action=''
                      onSubmit={(e) => e.preventDefault(submitHandler)}
                    >
                      <div className='form-group'>
                        <label className='mb-1 text-white'>
                          <strong>Username</strong>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='username'
                          name='name'
                          onChange={handleBlur}
                        />
                      </div>
                      <div className='form-group'>
                        <label className='mb-1 text-white'>
                          <strong>Email</strong>
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='hello@example.com'
                          name='Email'
                          onChange={handleBlur}
                        />
                      </div>
                      <div className='form-group'>
                        <label className='mb-1 text-white'>
                          <strong>Password</strong>
                        </label>
                        <input
                          type='password'
                          className='form-control'
                          name='password'
                          onChange={handleBlur}
                        />
                      </div>
                      <div className='text-center mt-4'>
                        <button
                          type='submit'
                          className='btn bg-white text-primary btn-block'
                          onClick={() => submitHandler}
                        >
                          Sign me up
                        </button>
                      </div>
                    </form>
                    <div className='new-account mt-3'>
                      <p className='text-white'>
                        Already have an account?{' '}
                        <Link className='text-white' to='/page-login'>
                          Sign in
                        </Link>
                      </p>
                    </div>
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

export default Registration
