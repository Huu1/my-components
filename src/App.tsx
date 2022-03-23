import React from 'react';
import { useState } from 'react';
import './App.css';
import cogoToast from './components/Toast';



const arr= [
  'top-left',
 'top-center',
 'top-right',
 'bottom-left',
 'bottom-center',
 'bottom-right',
]

function App() {
  const showToast=(i)=>{
    const id= cogoToast.loading(i,{
      position: i,
    })
    setTimeout(() => {
      id.hide?.();
      cogoToast.success('关闭成功',{
        position: i
      })
    }, 2000);
  }
  return (
    <div className="App">
      {
        arr.map(i=>{
          return <button key={i} onClick={()=>showToast(i)}>{i}</button>
        })
      }
    </div>
  );
}

export default App;
