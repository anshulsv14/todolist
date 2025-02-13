import React from 'react'
import {configureStore} from '@reduxjs/toolkit'

import mytodo from './Todoslice'




const store = configureStore({
    reducer:{
     
        mytask:mytodo
    }})
export default store;

