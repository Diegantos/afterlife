import { useState } from 'react'
import { Paragraph, Title } from '../Common/Common'
import './Options.scss'

export const Options = ()=>{

    const [ position, setPosition ] = useState(0)
    const change = ( valor ) => setPosition( valor )

    const options = [
        { id : 0 , src : '/assets/AssetsNLiabilities.svg'},
        { id : 1 , src : '/assets/BeneficiaryView.svg'},
        { id : 2 , src : '/assets/AssetDetail.svg'},
    ]
    const buttons = [
        { id : 0 , nombre : 'manage', title : 'Manage all assets and liabilities at your fingertips', text : 'Link your bank accounts, brokerage accounts and loans, add physical assets such as jewelery, land etc, and manage how they should get split up.'},
        { id : 1 , nombre : 'legal', title : 'Leave your loved ones in safe hands', text : 'Assign legal guardianship for your kids. Leave personal notes, images and videos for your loved ones as part of your will.'},
        { id : 2 , nombre : 'catalog', title : 'Keep your beneficiaries in the know.', text : 'Catalog and add physical assets, add details including notes, photos, deeds and certificates.'},
    ]

    return(
        <div className='Options'>
            <div className="Wrapper">
                <div className="Options-titles">
                    <Title clase='Options-title'>Manage, safeguard, and update the most important information at your fingertips.</Title>
                    <Paragraph clase='Options-p'>Your family's future is too important be left to some stale piece of paper hidden in some box along with winter clothing.</Paragraph>
                </div>
                <div className="Options-content">
                    <div className="Options-img">
                        <img className='Options-img-phone' src="/assets/phone-frame.svg" alt="Phone Image" />
                        <div className="Options-fondos">
                            { options.map(({ id, src })=>
                                <img key={ id } className={ `Options-photos ${ position === (id) ? 'Active' : '' }` } src={ src } alt="Phone Image" />
                            )}
                        </div>
                    </div>
                    <div className={ `Options-tab active${ position }`}>
                        { buttons.map(({ id, nombre, title, text })=>
                            <div onClick={ ()=> change(id) } className="Options-tab-content">
                                <Icono nombre={ nombre } />
                                <h3 className='Options-subtitle'>{ title }</h3>
                                <p className='Options-subp'>{ text }</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


const Icono = ({ nombre }) => {
    return (
        <>
        { nombre === 'manage' && <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" class="h-8 w-8"><defs><linearGradient id=":Rpdpm:-gradient" x1="14" y1="14.5" x2="7" y2="17" gradientUnits="userSpaceOnUse"><stop stop-color="#737373"></stop><stop offset="1" stop-color="#D4D4D4" stop-opacity="0"></stop></linearGradient></defs><circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z" fill="#A3A3A3"></path><path d="M7 22c0-4.694 3.5-8 8-8" stroke="url(#:Rpdpm:-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z" fill="#A3A3A3"></path></svg>}
        
        { nombre === 'legal' && <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8"><circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z" fill="#737373"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z" fill="#A3A3A3"></path></svg>}
        
        { nombre === 'catalog' && <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8"><circle cx="16" cy="16" r="16" fill="#A3A3A3" fill-opacity="0.2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#A3A3A3"></path><path d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z" fill="#737373"></path></svg>}
        
        { nombre === 'icono1' && <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}

        
        </>
    )
}