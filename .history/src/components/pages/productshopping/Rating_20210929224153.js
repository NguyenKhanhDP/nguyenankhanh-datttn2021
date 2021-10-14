import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const Raiting = ({ raiting,onClick,style }) => {
    return (
        <>
            {[...Array(5)].map((_,i) =>(
                <span key={i} onClick={ () => onClick(i)} style={style} >
                    { raiting > i ? (
                        <AiFillStar fontSize="15px"/>
                    ):(
                        <AiFillStar fontSize="15px"/>
                    ) }
                </span>
            ))}
        </>
    )
}
