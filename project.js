
const TipCLick = document.querySelector(".tipcalc");
const Print = document.querySelector(".tip");
const error = document.querySelector(".dispalyerror");
const TotalPrint = document.querySelector(".totalBill");
const Reset = document.querySelector(".reset");
const Custom = document.querySelector("#custom");


//Event listener
TipCLick.addEventListener("click", TipCalculator);
Reset.addEventListener("click", Resetall);
Custom.onClick = TipCalculator;
console.log(Custom);


//function
function TipCalculator(e) {
  //prevent from default submit
  e.preventDefault();
  //values grab from form
  const BillValue = document.querySelector(".Bill").value;
  BillValueInt = parseFloat(BillValue);
  const PersonCheck = document.querySelector("#person").value;
  PersonCheckInt = parseInt(PersonCheck);


  //for error msg
  if (PersonCheck.value === "" || PersonCheck <= 1) {
    document.getElementById("person").style.outline = "1px solid red";
    error.style.display = "inline";

  } else {
    error.style.display = "none";
  }
  // for button targeted value


  let TipCalc = e.target.value;

  let total = (BillValueInt * (TipCalc / 100)) / PersonCheckInt;
  Print.innerHTML = `$${total.toFixed(2)}`;
  //for bill split in per person
  let totalB = total + BillValueInt / PersonCheckInt;
  TotalPrint.innerHTML = `$${totalB.toFixed(2)}`;
}
function Resetall() {
  Print.innerHTML = "$0.00";
  TotalPrint.innerHTML = "$0.00";
  document.getElementById("person").style.outline = "none";
  error.style.display = "none";
}



