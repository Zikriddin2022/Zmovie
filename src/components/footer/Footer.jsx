import React from "react"
import "./footer.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import Instagram from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
      <footer>
        <div className='container'>
          <div className='box'>
          
            <p>© 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
          </div>
          <div className='box' style={{display:"flex",justifyContent: "center",alignItems: "center",padding: "20px"}}>
            <h3 style={{marginRight:"30px"}}>Follow Us</h3>
            <a target="_blank" href="https://instagram.com/uzbekmoliyachisi" style={{marginRight:"20px"}} >
        <div className='icon'> 
            <Instagram/>
        </div>
        </a>  
        <a target="_blank" href="https://telegram.me/Kali1407" style={{marginRight:"20px"}}>
          <div className='icon'> 
            <TelegramIcon/>
          </div>
        </a>
        <a target="_blank" href="https://zikriddin2022surxonidinov@gmail.com" >
          <div className='icon'> 
            <GoogleIcon/> 
          </div>
        </a>    
          </div>
        </div>
      </footer>
  )
}

export default Footer