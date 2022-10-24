import React from 'react'

function adminLayout() {
  return (
    <div className=''>
      <header style={{height:80, width:'100%', backgroundColor: 'black', color:'white', position:'fixed'}} className="p-3 fw-bold fs-3">
        Admin Panel
      </header>
      <div className="d-flex" style={{width:'100px', height:'100%', backgroundColor: 'black'}}>
        <div className="left">

        </div>
        <div className="right" style={{width:500, backgroundColor: 'yellow'}}></div>
      </div>
    </div>
  )
}

export default adminLayout