// Set up the transient state data structure and provide initial values
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0,
}

// Functions to modify each property of transient state
export const setMetalChoice = (chosenMetalId) => {
    transientState.metalId = chosenMetalId
    console.log(transientState)
}

export const setSizeChoice = (chosenSizeId) => {
    transientState.sizeId = chosenSizeId
    console.log(transientState)
}

export const setStyleChoice = (chosenStyleId) => {
    transientState.styleId = chosenStyleId
    console.log(transientState)
}

// Function to convert transient state to permanent state and dispatch a custom event
export const saveCustomOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState) // Convert the transient state to JSON
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    // Dispatch a custom event after saving the order
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}
