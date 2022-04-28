import React, {useState} from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(
) {
  const [value, setValue] = useState(0);
  function incrementPoint (){
    console.log('here')
    setValue(value+1)
  }

  return (
    <Button variant="outlined"
    onClick={incrementPoint}
    >
     Add Point {value}
    </Button>
  );
}