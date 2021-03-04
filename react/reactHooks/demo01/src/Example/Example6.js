import React, { useReducer } from 'react';
import ShwoArea from './showArea'
import Buttons from './Button'
import {Color} from './color'

function Example6() {
  return (
    <div>
      <Color>
        <ShwoArea />
        <Buttons />
      </Color>

    </div>
  )
}
export default Example6