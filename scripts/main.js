import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'
import { SaveOrder } from "./SaveOrder.js"
import { OrderList } from "./Orders.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const saveOrderHTML = await SaveOrder()
    const ordersHTML = await OrderList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices d-flex justify-start- ms-5">
            <section class="choices__metals options border border-primary p-3 rounded card shadow" style="border-style: dashed !important;">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options mx-5 border border-primary p-3 rounded card shadow" style="border-style: dashed !important;">
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options border border-primary p-3 rounded card shadow" style="border-style: dashed !important;">
                ${styleOptionsHTML}
            </section>
            
        </article>
        ${saveOrderHTML}
        <article class="order">
        
            <!-- Order summary will be displayed here -->
        </article>

        <article class="customOrders ms-5 mt-5">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
            <!-- List of custom orders will be displayed here -->
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", render)

render()
