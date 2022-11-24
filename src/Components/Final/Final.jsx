import { Paragraph, Title } from '../Common/Common'
import './Final.scss'

export const Final = ()=>{

    const Grids = [
        { id : 0, svg : '/assets/image1.svg' , title : 'Add and manage all beneficiaries' , parrafo : 'Add kids, partner, siblings, parents etc anyone as a beneficiary regardless of whether they use the app or not.'},
        { id : 1, svg : '/assets/image7.svg' , title : 'Start with a basic will and update over time.' , parrafo : 'Get set up with an individual will in 10 minutes free-of-cost in 10 minutes. Once ready, you can also setup a joint will, mirror will and more.'},
        { id : 2, svg : '/assets/image3.svg' , title : 'Link your bank accounts' , parrafo : 'You can link your various bank accounts to see their balance and allow your beneficiaries later on to know what exactly what to expect.'},
        { id : 3, svg : '/assets/image8.svg' , title : 'Connect to your brokerage accounts' , parrafo : 'Connect to your brokerage account and have it sync automatically so that you don’t have to update your stock holdings one by one.'},
        { id : 4, svg : '/assets/image1.svg' , title : 'Securely stored' , parrafo : 'Create a will without having to share the intimate details of all your assets with any lawyer or having to worry about secure storage of the will. Your will is secured digitally and physically on Afterlife.'},
        { id : 5, svg : '/assets/image6.svg' , title : 'Assign and manage witnesses and executors at the click of a button.' , parrafo : 'Get signatures from witnesses, assign (or choose us) as executors through the app without sharing intricate details of your Will and underlying assets.'},
        { id : 6, svg : '/assets/image7.svg' , title : 'Register your will' , parrafo : 'Every time you make a change Afterlife will register your will for you to ensure it’s authenticity and avoid disputes later.'},
        { id : 7, svg : '/assets/image8.svg' , title : 'Create personalized memories' , parrafo : 'Leave behind notes or videos for your loved ones as part of your will so they have additional memories to cheris you by'},
        { id : 8, svg : '/assets/image1.svg' , title : 'Add details for your assets' , parrafo : 'For assets like land property, add specific addresses, locations, known issues, points of contact etc. Or add photos and detailed info for your jewely to make the estate distribution process much smoother.'},
    ]

    return(
        <div className="Final">
            <div className="Wrapper">
                <Title clase='Final-title'>Wills are meant for everyone.</Title>
                <Paragraph clase='Final-p'>Afterlife allows all Indians to secure their family's future without the need of expensive lawyers.</Paragraph>
                <div className="Final-grid">
                    {Grids.map( card =>
                        <Card key={ card.id } {...card} />
                    )}
                </div>
            </div>
        </div>
    )
}

const Card = ({ svg, title, parrafo})=>{
    return(
        <div className="Card">
            <img 
                className='Card-svg' 
                src={ svg } 
                alt={ 'Icon' } />
            <Title clase='Card-title'>{ title }</Title>
            <Paragraph clase='Card-p'>{ parrafo }</Paragraph>
        </div>
    )
}