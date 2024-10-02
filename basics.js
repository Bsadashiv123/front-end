let product = {
    name: 'goodday',
    quantity: 5,
    price: 10 + 'rs',
    manufactureyear: 2024
}


function makebiscuits(product) { 
    for(let i = 0; i<product.quantity; i++) 
    {
        console.log(`crunchy ${product.name} biscuits at just ${product.price}`)
    }
}

makebiscuits(product)