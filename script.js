// get access to the root element 
let app=document.querySelector('#root')
// set a container element
let container=document.createElement('div')
container.setAttribute('class','container')
// append the container to the root
app.appendChild(container)
// fetch the api
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then((res)=>{
    return res.json()
})
.then(data=>{
    // make a loop at the data
    data.forEach(makeup => {
        console.log("makeup",makeup);
        // set a card element
        let card=document.createElement('div')
        container.appendChild(card)
        // set an element to the name of the brand
        let brand=document.createElement('h1')
        brand.textContent=makeup.brand
        // append the name of the brand to the card
        card.appendChild(brand)
         // set an element to the name of the makeup
        let name=document.createElement('p')
        name.textContent=`Product name: ${makeup.name}`
        // append the name of the makeup to the card
        card.appendChild(name)
        // set an element to the image
        let image_link=document.createElement('img')
        image_link.src=makeup.image_link
        // append the image to the card
        card.appendChild(image_link)
        // set an element to the price
        let price=document.createElement('p')
        price.textContent=`Price: ${makeup.price}`
        // append the price to the card
        card.appendChild(price)
         // set an element to the description
        let description=document.createElement('p')
        description.textContent=` Description: ${makeup.description}`
        // append the description to the card
        card.appendChild(description)
        // set an element to the rating
        let rating=document.createElement('p')
        rating.textContent=` Rating: ${makeup.rating} stars`
        // append the rating to the card
        card.appendChild(rating)
        // set an element to the product type
        let product_type=document.createElement('p')
        product_type.textContent=` Product type: ${makeup.product_type}`
        // append the product type to the card
        card.appendChild(product_type)
        // set attributes give the card a class
        card.setAttribute('class','card')
        
    });
    ;})