import React from 'react'

function Test({ list }) {
    return (
        <div>
            {list.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })}
        </div>
    )
}

export default Test