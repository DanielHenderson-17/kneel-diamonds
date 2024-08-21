

// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()

//     let optionsHTML = "<h2>Metals</h2>"

//     for (const metal of metals) {
//         optionsHTML += `<div>
//             <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
//         </div>`
//     }

//     return optionsHTML
// }


import { setMetalChoice } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", (event) => {
        if (event.target.name === "metal") {
            setMetalChoice(parseInt(event.target.value))
        }
    })

    let optionsHTML = "<h2>Metals</h2>"

    const divStringArray = metals.map((metal) => {
        return `
        <div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
    })

    optionsHTML += divStringArray.join("")

    return optionsHTML
}
