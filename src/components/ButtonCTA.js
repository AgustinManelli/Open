import React from 'react';
import '../stylesheets/ButtonCTA.css'

function ButtonCTA (props) {

  return(
    <div class="wrap">
      <button className="button">{props.name}</button>
    </div>
  )
}

export default ButtonCTA ;