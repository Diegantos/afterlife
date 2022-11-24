import { GetAccessBtn, Input, Paragraph, Title } from '../Common/Common'
import './Intro.scss'

export const Intro = ()=>{
    return(
        <div className="Intro Wrapper">
            <div className="Intro-content">
                <Title clase='Intro-h3' >Write, draft, and store your will in 10 minutes!</Title>
                <Paragraph>Establish a will today on any device and safeguard your life's work in case of the unthinkable.</Paragraph>
                <div className="Intro-contact">
                    <Input clase='Intro-input'></Input>
                    <GetAccessBtn>GET ACCESS</GetAccessBtn>
                </div>
                <Paragraph clase='Intro-p'>Limited spots available for early access.</Paragraph>
                <a className='Intro-featured' target='_blank' href="https://www.producthunt.com/posts/afterlife?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-afterlife">
                    <img src="/assets/featured.svg" alt="Featured img" loading='lazy' />
                </a>
            </div>
            <div className="Intro-img">
                <h2 className='Intro-h2'>Afterlife</h2>
                <h4 className='Intro-h4'>Your trusted partner for this life and beyond.</h4>
                <GetAccessBtn clase='Intro-whiteBtn'>Learn More</GetAccessBtn>
                <GetAccessBtn>Get Started</GetAccessBtn>
            </div>
        </div>
    )
}