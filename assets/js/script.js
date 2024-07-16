document.getElementById('calculate').addEventListener('click', function () {
    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);
    const numC = parseFloat(document.getElementById('numC').value);

    if (isNaN(numA) || isNaN(numB) || isNaN(numC) || numA === 0) {
        document.getElementById('result').textContent = 'Invalid';
        return
    };

    let result = ((numC * numB) / numA);

    if (Number.isInteger(result)) {
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = result.toFixed(2).replace('.' , '.');
    }
});