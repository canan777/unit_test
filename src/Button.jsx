import { useState } from "react";

const Button = () => {
    const [isRed,setIsRed] = useState(true);

    console.log(isRed);

  return (
    <button 
    onClick={()=> setIsRed (!isRed)} 
    style={{background: isRed ? 'red' : 'aqua'}}
    >
   {isRed ? 'Maviye Çevir':'Kırmızıya Çevir'}
    </button>
  )
}

export default Button;
