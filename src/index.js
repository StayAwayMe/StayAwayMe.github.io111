import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store/index'
import TextProxy from './TextProxy'
ReactDOM.render( 
    <Provider store={store}>
        {/* <App/> */}
        <TextProxy/>
    </Provider>
    ,
	document.getElementById('app')
)