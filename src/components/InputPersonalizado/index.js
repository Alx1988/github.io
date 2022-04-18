import React from 'react';
import './Input.Styles.css';
export function InputPersonalizado() {
 return (
   <div>
       <form>
           <div className="single_input">
             <input type="text" name="name" id="name" className="input" required/>
             <label for='name'>Nome</label>
           </div>

           <div className="single_input">
             <input type="text" name="lastname" id="lastame" className="input" required/>
             <label for='name'>Sobrenome</label>
           </div>
       </form>
   </div>
 );
}