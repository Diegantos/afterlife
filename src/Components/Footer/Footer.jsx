import { GetAccessBtn, Input } from '../Common/Common'
import './Footer.scss'

export const Footer = ()=>{
    return(
        <div className="Footer Wrapper">
            <div className="Footer-copy">
                <p>© Copyright 2022. All rights reserved.</p>
                <p>Made with ♥ in Sunnyvale, California.</p>
            </div>
            <div className="Footer-contact">
                <Input clase='Footer-input'></Input>
                <GetAccessBtn>GET ACCESS</GetAccessBtn>
            </div>
        </div>
    )
}