import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const Raiting = ({ raiting,onClick,stype }) => {
    return (
        <>
            {[...Array(3)].map((_,i) =>(
                <span key={i} onClick={ () => onClick(i) }>
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
