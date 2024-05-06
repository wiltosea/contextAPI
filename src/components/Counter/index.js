import React, {useContext} from 'react';

import Context from '../../Context/';

export default function Counter(){
  const [total, setTotal] = useContext(Context);

  return (
    <div>
      <h1>{total}</h1>
      <button type="button" onClick={() => setTotal(total + 1)}>Increment</button>
    </div>
  );
}