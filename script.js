window.onload = function () {


    // Slecting all elements
    let DOM = {
        billAmt: document.getElementById('amount'),
        tipPercent: document.getElementById('percent'),
        numPeople: document.getElementById('people'),
        checkBox: document.getElementById('round'),

        // Table DOMs
        tipTotal: document.getElementById('tip__total'),
        tipEachPerson: document.getElementById('tip__each__person'),
        totalBt: document.getElementById('total__bt'),
        totalEachPerson: document.getElementById('total__each__person')
    };

    // Calculate function
    function calculate(isChecked) {
        const billAmt = parseFloat(DOM.billAmt.value);
        const tipPercent = parseFloat(DOM.tipPercent.value);
        const numPeople = parseFloat(DOM.numPeople.value);

        // Array to be returned
        const arr = [];

        const tipTotal = (tipPercent * billAmt)/100;
        const tipEachPerson = tipTotal/numPeople;
        const totalBill = billAmt + tipTotal;
        const totalEachPerson = totalBill/numPeople;

        if (isChecked) {
            arr.push(Math.round(tipTotal), Math.round(tipEachPerson), Math.round(totalBill), Math.round(totalEachPerson));
            console.log(arr);
            return arr;
        } else {
            arr.push(tipTotal, tipEachPerson, totalBill, totalEachPerson);
            console.log(arr);
            return arr;
        }
    };

    // Call calculate function when calculate button is pressed
    document.querySelector('.calculate').addEventListener("click", show);

    // Call clear function when clear button is pressed
    document.querySelector('.clear').addEventListener("click", clear);

    function show() {
        let c = calculate(DOM.checkBox.checked);
        console.log(c[0], c[1], c[2], c[3]);
        DOM.tipTotal.textContent = `$ ${c[0]}`;
        DOM.tipEachPerson.textContent = `$ ${c[1]}`;
        DOM.totalBt.textContent = `$ ${c[2]}`;
        DOM.totalEachPerson.textContent = `$ ${c[3]}`;
    }

    function clear() {
        DOM.billAmt.value = '';
        DOM.tipPercent.value = '';
        DOM.numPeople.value = '1';

        // Clear table content
        DOM.tipTotal.textContent = '';
        DOM.tipEachPerson.textContent = '';
        DOM.totalBt.textContent = '';
        DOM.totalEachPerson.textContent = '';
    }


}