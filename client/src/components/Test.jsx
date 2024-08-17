import React from 'react'

function Test({ list }) {
    return (
        <div>
            {list.map((item) => {
                return (
                    <p>{item}</p>
                )
            })}
        </div>
    )
}

export default Test