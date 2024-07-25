

function appendToDisplay(value) {
    document.getElementById('screen').value += value;
}

function calculate() {
    let display = document.getElementById('screen').value;
    display = display.replace(/\s/g, ''); 
    display = display.replace(/X/g, '*'); 
    try {
        const result = eval(display);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}

function cleardisplay() {
    document.getElementById('screen').value = '';
}