import React from 'react';

const Item = (props) => {
  return ( 
    <li key={props.index}>{props.listItem}</li>
   );
}
 
export default Item;