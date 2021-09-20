import React, {useState} from "react";

export const Toast = ({msg}) => {
  const [state, setState] = useState('block');
  return (
  <div className="toast-msg" style={{display : state}}>
    <span className="close" onClick={() => setState('none')}>&times;</span>
    {msg}
  </div>
  );
};
