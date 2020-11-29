import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/logo-full.png'

const LockScreen = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('h-100')
  }, [])

  const [lockScreenData, setLockScreenData] = useState({})
  const handleBlur = (e) => {
    const newLockScreenData = { ...lockScreenData }
    newLockScreenData[e.target.name] = e.target.value
    setLockScreenData(newLockScreenData)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const unlock = { ...lockScreenData }
  }
  return (
    <div class='authincation h-100'>
      <div class='container h-100'>
        <div class='row justify-content-center h-100 align-items-center'>
          <div class='col-md-6'>
            <div class='authincation-content'>
              <div class='row no-gutters'>
                <div class='col-xl-12'>
                  <div class='auth-form'>
                    <div class='text-center mb-3'>
                      <Link to='/'>
                        <img src={img} alt='' />
                      </Link>
                    </div>
                    <h4 class='text-center mb-4 text-white'>Account Locked</h4>
                    <form
                      action=''
                      onSubmit={(e) => e.preventDefault(submitHandler)}
                    >
                      <div class='form-group'>
                        <label class='text-white'>
                          <strong>Password</strong>
                        </label>
                        <input
                          type='password'
                          class='form-control'
                          name='password'
                          onChange={handleBlur}
                        />
                      </div>
                      <div class='text-center'>
                        <button
                          type='submit'
                          class='btn bg-white text-primary btn-block'
                          onClick={() => submitHandler}
                        >
                          Unlock
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

export default LockScreen
