import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const Rating = ({ rating,onClick,style }) => {
    return (
        <>
            {
                [...Array(5)].map((_,i) =>(
                <span key={i} onClick={ () => onClick(i)} style={style} >
                    { rating > i ? (
                        <AiFillStar fontSize="15px"/>
                    ):(
                        <AiOutllStar fontSize="15px"/>
                    ) }
                </span>
            ))}
        </>
    )
}
