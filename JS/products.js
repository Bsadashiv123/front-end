
async function getapidata(url) {
  
        let response = await fetch(url);
        let data = await  response.json();
        return data

};

let url = `https://fakestoreapi.com/products`;


let productBody = document.getElementById('productBody');
let viewproduct = document.querySelector('.view-product-container');


getapidata(url).then(function(data) {
    let productsarray = data;

    productsarray.map((product) => {

        let tr = generateTag('tr', null, productBody)
     
        generateTag('td', product.id, tr, null, null)
        
        let imgTd = generateTag('td', null, tr, null, null)
            generateTag('img', null, imgTd, 'src', product.image)
        
        generateTag('td', product.title, tr, null, null)
        generateTag('td', product.category, tr, null, null)
        generateTag('td', product.price, tr, null, null)
        let buttonTd = generateTag('td', null, tr, null, null)
            generateTag('button', 'view product', buttonTd, 'class', 'btn')

            // let viewButton = document.querySelectorAll('.btn')

            // viewButton.forEach((btn)=> {
            //     btn.addEventListener('click', function() {
            //         console.log(product.title);
            
            //     })
            //   })


        //console.log(product);

     
    })




})




function viewProduct(product) {
    generateTag('div', product.description, viewproduct, null, null)
 

}

function generateTag(ele, text, parent, attrtype, attr) {
    let element = document.createElement(ele);
    parent.appendChild(element)
    element.textContent = text;
    element.setAttribute(attrtype, attr)

    return element;

}





