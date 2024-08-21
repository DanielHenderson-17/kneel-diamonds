import { setStyleChoice } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", (event) => {
        if (event.target.name === "style") {
            setStyleChoice(parseInt(event.target.value))
        }
    })

    let optionsHTML = "<h2>Styles</h2>"

    const divStringArray = styles.map((style) => {
        return `
        <div>
            <input type='radio' name='style' value='${style.id}' /> ${style.style} (${style.price.toFixed(2)})
        </div>`
    })

    optionsHTML += divStringArray.join("")
    return optionsHTML
}

