import React from 'react';

export default function DateTimee() {
  
  const date = new Date ();
  const currentTime = date.getHours();

  console.log(currentTime);

  let greeting;  

  const customStyle = {
    color : " "
  }

  if (currentTime > 12 ) {
    greeting = 'Good Morning'
    customStyle.color = 'blue'
  } else if (currentTime > 16) {
    greeting = 'Good Evening'
    customStyle.color = 'green'
  } else if (currentTime > 18) {
    greeting = 'Good Evening'
    customStyle.color = 'orange'
  } else {
    greeting = 'Good Night'
    customStyle.color = 'red'
}

  return (
    <div>
        <h1 className='m-5' style={customStyle}><u>{greeting}</u></h1>
    </div>
  );
}
