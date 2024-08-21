import { saveCustomOrder } from "./TransientState.js"

const handleSaveOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        saveCustomOrder()
    }
}

export const SaveOrder = () => {
    document.addEventListener("click", handleSaveOrderClick)

    return `<div class="mx-5 my-2"><button id='saveOrder' class='btn btn-danger'>Save Order</button></div>`
}
