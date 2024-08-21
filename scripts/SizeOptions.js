// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()

//     let optionsHTML = "<h2>Sizes</h2>"

//     for (const size of sizes) {
//         optionsHTML += `<div>
//             <input type='radio' name='size' value='${size.id}' /> ${size.carets} carats (${size.price.toFixed(2)})
//         </div>`
//     }

//     return optionsHTML
// }

import { setSizeChoice } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", (event) => {
        if (event.target.name === "size") {
            setSizeChoice(parseInt(event.target.value))
        }
    })

    let optionsHTML = "<h2>Sizes</h2>"

    const divStringArray = sizes.map((size) => {
        return `
        <div>
            <input type='radio' name='size' value='${size.id}' /> ${size.carets} carats (${size.price.toFixed(2)})
        </div>`
    })

    optionsHTML += divStringArray.join("")
    return optionsHTML
}

