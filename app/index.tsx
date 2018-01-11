import React from 'react'
import ReactDOM from 'react-dom'
import { Test } from './components/Test';

ReactDOM.render(
  <Test
    clientId={require('electron').remote.getGlobal('plaidConfig').clientId}
    secret={require('electron').remote.getGlobal('plaidConfig').secret} />,
  document.getElementsByTagName('body')[0])
  
