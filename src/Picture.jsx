import { useState } from "react"


export default function Picture () {

    
    return (
        <div style={{padding: '200px 300px', backgroundColor:'goldenrod'}}>
            <img style={{height: '400px'}} src="https://media.timeout.com/images/105990233/1920/1080/image.jpg" alt="Alien Image" onClick={'changeColor'}/>
        </div>
    )
}