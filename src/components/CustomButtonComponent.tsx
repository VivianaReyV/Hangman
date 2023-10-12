import React from "react";

interface Props {
  height: string;
  onClick: () => void;
  width: string;
  background: string;
}

const Button: React.FC<Props> = ({ 
    height,
    onClick, 
    width,
    
  }) => { 
  return (
    <button 
      className='restart_button'
      onClick={onClick}
      style={{
         background: `url("https://cdn.iconscout.com/icon/premium/png-512-thumb/restart-4712838-3906913.png?f=webp&w=40")` ,
         height,
         width,
      }}
    >
    </button>
  );
}

export default Button;