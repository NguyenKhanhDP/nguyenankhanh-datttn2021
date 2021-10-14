import React from 'react'

export const Raiting = ({ raiting,onClick,stype }) => {
    return (
        <>
            {[...Array(3)].map((_,i) =>(
                <span>
                    { raiting > i ? (
                        <Ai
                    ) }
                </span>
            ))}
        </>
    )
}
