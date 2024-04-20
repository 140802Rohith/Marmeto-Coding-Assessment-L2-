function changeImage(imageUrl) {
    document.getElementById('mainImage').src = imageUrl;
}

function selectColor(color) {
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.classList.remove('selected');
    });
    const selectedOption = document.querySelector(`.color-option[style="background-color: ${color};"]`);
    selectedOption.classList.add('selected');
    document.getElementById('mainImage').style.backgroundColor = color;
}

function updateQuantity(value) {
    const quantitySelector = document.getElementById('quantitySelector');
    let currentValue = parseInt(quantitySelector.value) || 1;
    currentValue += value;
    if (currentValue < 1) {
        currentValue = 1;
    }
    quantitySelector.value = currentValue;
}

function addToCart() {
    const productTitle = document.querySelector('#productTitle h1').textContent;
    const productPrice = document.getElementById('productPrice').textContent;
    const selectedColor = document.querySelector('.color-option.selected').style.backgroundColor;
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const quantity = document.getElementById('quantitySelector').value;

    const message = `Added to cart:
    ${productTitle}
    Color: ${selectedColor}
    Size: ${selectedSize}
    Quantity: ${quantity}
    Total: ${productPrice}`;

    alert(message);
}
