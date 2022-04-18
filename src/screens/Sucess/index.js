import React from 'react';
import logoItau from '../../assets/img_logo.png';
import confimation from '../../assets/confirmacao.png';
import ichecked2 from '../../assets/ic_checked2.png';
import './Sucess.Styles.css';
export  function Sucesss() {
  
 return (
   <div className="container_sucess">
       <header className="header_sucess">
            <img src={logoItau} alt="logo" className="logo_itau_sucess" />
       </header>

       <div className="container_confimation_sucess">
                    <div className="bolinha1">1</div>
                    <hr className="line_bolinha1"/>
                    <p className="text_indent">Identificação</p>
                    <div className="bolinha2">2</div>
                    <hr className="line_bolinha2"/>
                    <p className="text_confirm">Confirmação</p>
                    <div className="bolinha3">3</div>
                    <p className="text_conclu">Concluido</p>
       </div>
       
       <div className="container_confirmation_sucess_img">
            <img src={ichecked2} alt="logo" className="confirmation_sucess_img" />
            <h2 className="title">Parabéns</h2>
       </div>
       <p className="sub_title">Confirmação efetuada com sucesso!</p>
       <p className="sub_title_1">Aguarde, você será redirecionado...</p>
      
   </div>
 );
}