import React from 'react'

const Header = () => {
    return (
        <>
          <header>
            <section className='container main-hero-container'>
                <div className='row'>
                  <div className='col-12 col-lg-6 col-md-6 header-left-side d-flex 
                  justify-content-center flex-column align-items-start'>
                      <h1 className='display-2'>Online Payment Made<br /> Easy For You.</h1>
                  <p className='main-hero-para'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                      <h3>Get early access for you</h3>
                      <div className='input-group mt-3'>
                          <input type='text' className='rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text'
                          placeholder='Enter Your Email'/>
                          <div className='input-group-button'> Get it now </div>
                          </div>
                          </div>

                        {/*---------------------main header ----------------------- */}
                           
                           <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center 
                           main-herosection-images'>
                              <img src='./images/main1.jpg' alt='heroImg' className='img-fluid'/>
                              <img src='./images/main2.jpg' alt='heroImg2' className='img-fluid main-hero-img2'/>

                               </div>

                </div>

            </section>  
            </header> 
        </>
    )
}

export default Header
