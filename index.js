document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Arroz", expiryDate: "2024-05-15" },
        { name: "Feijão", expiryDate: "2024-05-20" },
        { name: "Óleo", expiryDate: "2024-05-10" },
        { name: "Leite", expiryDate: "2024-05-25" }
    ];

    const productsList = document.getElementById("products-list");

    function addProductToList(product) {
        const currentDate = new Date();
        const expiryDate = new Date(product.expiryDate);
        const daysUntilExpiry = Math.floor((expiryDate - currentDate) / (1000 * 60 * 60 * 24));

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        if (daysUntilExpiry <= 10) {
            productDiv.classList.add("critical");
            if (daysUntilExpiry <= 0) {
                alert(`O produto ${product.name} está vencido!`);
            } else {
                alert(`O produto ${product.name} está com vencimento próximo! Restam ${daysUntilExpiry} dias.`);
            }
        } else if (daysUntilExpiry <= 30) {
            productDiv.classList.add("warning");
        }

        productDiv.innerHTML = `
            <strong>${product.name}</strong> - Válido até: ${product.expiryDate} (${daysUntilExpiry} dias restantes)
        `;

        productsList.insertBefore(productDiv, productsList.firstChild); // Insere no topo da lista
    }

    function addProduct() {
        const productNameInput = document.getElementById("product-name");
        const expiryDateInput = document.getElementById("expiry-date");
        const productName = productNameInput.value;
        const expiryDate = expiryDateInput.value;

        if (productName && expiryDate) {
            const newProduct = { name: productName, expiryDate: expiryDate };
            products.unshift(newProduct); // Adiciona no início do array
            addProductToList(newProduct);
            productNameInput.value = "";
            expiryDateInput.value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    const addProductBtn = document.getElementById("add-product-btn");
    addProductBtn.addEventListener("click", addProduct);

    products.forEach(addProductToList);
});
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Arroz", expiryDate: "2024-05-15" },
        { name: "Feijão", expiryDate: "2024-05-20" },
        { name: "Óleo", expiryDate: "2024-05-10" },
        { name: "Leite", expiryDate: "2024-05-25" }
    ];

    const productsList = document.getElementById("products-list");

    function addProductToList(product) {
        const currentDate = new Date();
        const expiryDate = new Date(product.expiryDate);
        const daysUntilExpiry = Math.floor((expiryDate - currentDate) / (1000 * 60 * 60 * 24));

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        if (daysUntilExpiry <= 10) {
            productDiv.classList.add("critical");
            if (daysUntilExpiry <= 0) {
                alert(`O produto ${product.name} está vencido!`);
            } else {
                alert(`O produto ${product.name} está com vencimento próximo! Restam ${daysUntilExpiry} dias.`);
            }
        } else if (daysUntilExpiry <= 30) {
            productDiv.classList.add("warning");
        }

        productDiv.innerHTML = `
            <strong>${product.name}</strong> - Válido até: ${product.expiryDate} (${daysUntilExpiry} dias restantes)
        `;

        productsList.insertBefore(productDiv, productsList.firstChild); // Insere no topo da lista
    }

    function addProduct() {
        const productNameInput = document.getElementById("product-name");
        const expiryDateInput = document.getElementById("expiry-date");
        const productName = productNameInput.value;
        const expiryDate = expiryDateInput.value;

        if (productName && expiryDate) {
            const newProduct = { name: productName, expiryDate: expiryDate };
            products.unshift(newProduct); // Adiciona no início do array
            addProductToList(newProduct);
            productNameInput.value = "";
            expiryDateInput.value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    const addProductBtn = document.getElementById("add-product-btn");
    addProductBtn.addEventListener("click", addProduct);

    products.forEach(addProductToList);
});
