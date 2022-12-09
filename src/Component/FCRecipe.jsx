import React from 'react'


export default function FCRecipe(props) {

  // const btnPress=()=>{



  // id : props.id;
  return (
    <div  className='col-sm-4' style={{padding:5, border: 'dashed green 2px'}}>
      <img src={props.imgUrl} alt="תמונה של מנה" style={{width:250, hight:600}} />
      <h1>{props.name}</h1>
      <p>
        {props.desc}
      </p>
      <button onClick={() => {props.sentData(props.name,props.btnText) }}>
        {props.btnText}
      </button>


    </div>
  )
}
