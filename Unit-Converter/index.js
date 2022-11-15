let inputEl = document.querySelector("input");
let conversion_m_ft = document.getElementById("conversion-ft");
let conversion_l_g = document.getElementById("conversion-g");
let conversion_kg_p = document.getElementById("conversion-p");
let button_input = document.getElementById("convert-btn");
// on click event
button_input.addEventListener("click", () => {
  conversion();
});
//meter-feet conversion
function conversion() {
  let input_num = inputEl.value;
  //1 m = 3.28084 feet | 0.3048 m = 1 foot
  conversion_m_ft.textContent = `${input_num} meters = ${(
    input_num * 3.28084
  ).toFixed(3)} feet | ${input_num} feet = ${(input_num / 3.28084).toFixed(
    3
  )} meters`;
  conversion_l_g.textContent = `${input_num} liters = ${(
    input_num * 0.264172
  ).toFixed(3)} gallons | ${input_num} gallons = ${(
    input_num / 0.264172
  ).toFixed(3)} liters`;
  conversion_kg_p.textContent = `${input_num} kilograms = ${(
    input_num * 2.20462
  ).toFixed(3)} pounds | ${input_num} gallons = ${(input_num / 2.20462).toFixed(
    3
  )} pounds`;
  inputEl.value = " ";
}
