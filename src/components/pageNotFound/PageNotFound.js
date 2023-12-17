import React from 'react'
import {Link} from 'react-router-dom';
import './pageNotFound.scss'
const PageNotFound = () => {
  return (
    <div className="pnf">
      <div className="pagenotfound">
        <div className="pnf-container">

          <p>Look like you're lost </p>
          <h1>404</h1>
          <button><Link to='/'>Back</Link></button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
