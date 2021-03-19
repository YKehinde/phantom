import React from 'react';

// List item with anchor tag inside it to allow the user to click through to bookmarked site
const Item = (props) => {
  return ( 
    <li key={props.index}><a href={props.listItem} target="_blank">{props.listItem}</a></li>
   );
}
 
export default Item;