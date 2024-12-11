import React, { useState } from 'react'

function Count (){
  const[count, setCount] = useState(0);
  const increament = () => setCount(count +1);
  const decreament = () => setCount(count -1);
  const Reset = () => setCount(0);
  return(
    <div>
        Counter :{count}
        <button onClick={increament} className="">
            Increament
            </button>
        
        <div>
        Counter :{count}
        <button onClick={decreament} className="">
            decreament
            </button>
        </div>

        <div>
        Counter :{count}
        <button onClick={Reset} className="">
            Reset
            </button>
        </div>
    </div>
  );
}

export default Count