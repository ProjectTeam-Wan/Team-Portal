import React from 'react'

function GreekCatTemp({catName, blackCat, redCat, dgCat, controlStation, controlCat, v3}) {

  return (
    <div id='copy-area'> 
      <h4>This cat is version {v3 ? 3 : 2}!</h4>
      <p> my name is {catName}</p>
      <p> my black is {blackCat}</p>
      <p> my red is {redCat}</p>
      <p> my DG is {dgCat}</p>
      {v3 ? null : <p> proxy</p>}
      <p> my control station is {controlStation}</p>
      <p> my control cat is {controlCat}</p>
      <p>Here we need to add the correct configuration needed!</p>
    </div>
  )
}

export default GreekCatTemp
