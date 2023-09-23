function updatePhoneNumber(isIncrease) {
    const previousPhoneNumber = document.getElementById('phone-number');
    const previousPhoneNumberString = previousPhoneNumber.value;
    const previousPhoneNumberInt = parseInt(previousPhoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumberInt + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumberInt - 1;
    }
    previousPhoneNumber.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneTotalPrice;
}

document.getElementById('price-plus').addEventListener('click', function () {
    const newPhonePrice = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhonePrice);

    const newPriceElement = getPriceById('phone-price');
    const newCasePriceElement = getPriceById('case-price');
    const subTotalPrice = newCasePriceElement + newPriceElement;
    const subTotalPriceTaxString = (subTotalPrice * 0.1).toFixed(2);
    const subTotalPriceTax = parseFloat(subTotalPriceTaxString)
    const finalTotal = subTotalPrice + subTotalPriceTax;
    subTotalById('sub-total', subTotalPrice);
    subTotalById('tax-total', subTotalPriceTax);
    subTotalById('final-total', finalTotal);
})
document.getElementById('price-minus').addEventListener('click', function () {
    const newPhonePrice = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhonePrice);
    const newPriceElement = getPriceById('phone-price');
    const newCasePriceElement = getPriceById('case-price');
    const subTotalPrice = newCasePriceElement + newPriceElement;
    const subTotalPriceTaxString = (subTotalPrice * 0.1).toFixed(2);
    const subTotalPriceTax = parseFloat(subTotalPriceTaxString)
    const finalTotal = subTotalPrice + subTotalPriceTax;
    subTotalById('sub-total', subTotalPrice);
    subTotalById('tax-total', subTotalPriceTax);
    subTotalById('final-total', finalTotal);
})