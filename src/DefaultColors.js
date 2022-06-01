import React, { useState, forwardRef, useImperativeHandle } from 'react';

const DefaultColors = forwardRef((props, ref) => {

    const [colors, setColors] = useState([{id: 0, color: 'Yellow'},
    {id: 1, color: 'Blue'},
    {id: 2, color: 'Green'},
    {id: 3, color: 'Purple'}]);

    const updateColor = (color) => {
            setColors([
                    ...colors,
                    {id: colors.length , color: color}])
        }

    useImperativeHandle(ref, () => ({
        updateColor
      }))
console.log(colors)
      

    return <div>
            {colors.map(color=>(
                <li key={color.id}>
                    {color.color}
                </li>))}
        </div>;
  }
    )

export default DefaultColors;