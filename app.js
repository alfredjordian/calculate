let heldValue = null;
let heldOperation = null;
let nextValue = null;

function onDigitClick() {
  let buttonValue = $(this).text()
  
  if(nextValue === null) {
    nextValue = 0;
  }

  nextValue += buttonValue;
  
  $('.next-value').text(nextValue);
  
  console.log(nextValue);
  updateDisplay();
}

function showValue(location, value) {
  if(value=== null){
    $(location).text( '' );
  }
  else {
      $(location).text(Number(value))
  }
}

function updateDisplay() {
  console.log(heldValue, heldOperation, nextValue);
  showValue( '.held-value', heldValue );
  showValue( '.next-value', nextValue );
}

function onClearAllClick() {
  heldValue = null;
  heldOperation = null;
  nextValue = null;

  updateDisplay();
}

function onClearEntryClick () {
  nextValue = null;

  updateDisplay();
}

function onAddClick(x, y) {
  return Number(x)+Number(y);
}
function onSubtractClick(x, y) {
  return Number(x)-Number(y);
}
function onMultiplyClick(x, y) {
  return Number(x)*Number(y);
}
function onDivideClick(x, y) {
  return Number(x)/Number(y); // <<<--- Number coerces the string value into a number
}
function onEqualsClick(x, y) {

}

function setHeldOperation(operation) { 
  if (heldOperation !== null) {
    heldValue = heldOperation(heldValue, nextValue); //
  } else if (nextValue !== null) {
    heldValue = nextValue;
  } 

  nextValue = null; // <<<----- clears the next value when you click an operation
  heldOperation = operation;
}



$('.digits button').click(onDigitClick);
$('.add').click(function(){
  setHeldOperation(onAddClick)
  $('.next-operation').text('+')
  updateDisplay();
});
$('.subtract').click(function () {
  setHeldOperation(onSubtractClick)
  $('.next-operation').text('-');
  updateDisplay();
});

$('.multiply').click(function () {
  setHeldOperation(onMultiplyClick)
  $('.next-operation').html('&times;');
  updateDisplay();
});

$('.divide').click(function () {
  setHeldOperation(onDivideClick)
  $('.next-operation').text('/');
  updateDisplay();
});

$('.equals').click(function () {
  setHeldOperation(null);
  $('.next-operation').text('');
  updateDisplay();
});

$('.clear-all').click(function () {
  onClearAllClick();
  $('.next-operation').text('');
});

$('.clear-entry').click(function () {
  onClearEntryClick();
});




