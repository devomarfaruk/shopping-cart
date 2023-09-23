function updateCaseNumber(isIncrease) {
    const previousCaseNumber = document.getElementById('case-number');
    const previousCaseNumberString = previousCaseNumber.value;
    const previousCaseNumberInt = parseInt(previousCaseNumberString);
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumberInt + 1;
    }
    else {
        newCaseNumber = previousCaseNumberInt - 1;
    }
    previousCaseNumber.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
    const previousCasePrice = 59 * newCaseNumber
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = previousCasePrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCasePrice = updateCaseNumber(true);
    updateCaseTotalPrice(newCasePrice);

    const newPriceElement = getPriceById('phone-price');
    const newCasePriceElement = getPriceById('case-price');
    const subTotalPrice = newCasePriceElement + newPriceElement;
    const subTotalPriceTaxString = (subTotalPrice * 0.1).toFixed(2);
    const subTotalPriceTax = parseFloat(subTotalPriceTaxString)
    const finalTotal = subTotalPrice + subTotalPriceTax;
    subTotalById('sub-total', subTotalPrice);
    subTotalById('tax-total', subTotalPriceTax);
    subTotalById('final-total', finalTotal);
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCasePrice = updateCaseNumber(false);
    updateCaseTotalPrice(newCasePrice);

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
