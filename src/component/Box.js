import React from 'react';

const Box = (props) => {
    console.log("props" + props);
    return (
        <>
            <div className={`box-${props.result}`}>
                <h1>{props.title}</h1>
                <img className='item-img' src={props.item && props.item.img} />
                <h3>{props.result}</h3>
            </div>
            
        </>
        
    )
}
export default Box;