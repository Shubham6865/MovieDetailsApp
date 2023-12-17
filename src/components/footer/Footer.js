import React from 'react'
import './footer.scss'

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <div className='footerapp'style={{alignItems:'center',
    display: 'flex',flexDirection: 'column',backgroundColor:'#1a242f',height:'72px',justifyContent:'center'}} >
      <div className='footer-Movieapp'>Movie App</div>
      <div> &copy; {currentYear} Movie,Inc.  @Shubham Parade</div>
    </div>
  )
}

export default Footer
