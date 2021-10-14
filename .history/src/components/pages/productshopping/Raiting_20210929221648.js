import React from 'react'
import {  } 

export const Raiting = ({ raiting,onClick,stype }) => {
    return (
        <>
            {[...Array(3)].map((_,i) =>(
                <span>
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
