document.addEventListener('DOMContentLoaded', () => {
    const productsData = [
        {
            "id": 1,
            "name": "Product 1",
            "description": "Description for product 1",
            "price": "$10",
            "image": "assets/product1.webp"
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "Description for product 2",
            "price": "$20",
            "image": "assets/product2.avif"
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "Description for product 3",
            "price": "$30",
            "image": "assets/product3.jpg"
        }
    ];

    const productsList = document.getElementById('products-list');

    productsData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;

        productsList.appendChild(productCard);
    });
});
