import React from "react";

function EyesOnMe () {
    function focus(event) {
        event.preventDefault()
        console.log('Good!')
    }

    function blur(event) {
        event.preventDefault()
        console.log('Hey! Eyes on me!')        
    }

    return (
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )

}

export default EyesOnMe