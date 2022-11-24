import './Common.scss'

export const GetAccessBtn = ({ children, clase})=>{
    return(
        <button
            className={ `GetAccessBtn ${clase}` }
            title='Get Access'>{ children }</button>
    )
}

// export const Title = ({ children, size })=>{
//     return(
//         <h2 
//             className='Title'
//             style={ {fontSize : size} }>{ children }</h2>
//     )
// }

export const Title = ({ children, clase })=>{
    return(
        <h2 className={ `Title ${clase}`}>{ children }</h2>
    )

}

export const Paragraph = ({ children, clase })=>{
    return(
        <p className={ `Paragraph ${clase}` }>{ children }</p>
    )
}

export const Input = ({ children, clase })=>{
    return(
        <input 
            className={ `Input ${clase}` }
            type='text'
            placeholder='Email'
            value={ children } />
    )
}