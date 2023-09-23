function getPriceById(elementId) {
    const phoneTotalPriceElement = document.getElementById(elementId);
    const phoneTotalPriceElementString = phoneTotalPriceElement.innerText
    const phoneTotalPriceElementInt = parseInt(phoneTotalPriceElementString);
    return phoneTotalPriceElementInt
}

function subTotalById(elementId, value) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}