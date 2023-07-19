const gender = document.getElementsByName("gender");
const usia = document.getElementById("usia");
const berat = document.getElementById("berat");
const tinggi = document.getElementById("tinggi");
const answer = document.getElementsByName("answer");
const bmiResult = document.getElementById("bmi-result");
const kategoriBMI = document.getElementById("kategori-bmi");
const deskripsiBMI = document.getElementById("deskripsi-bmi");
const deskripsiArray = [
  'Makan makanan bergizi, konsumsi protein lebih banyak dan olahraga secara teratur agar mencapai berat badan ideal',
  'Pertahankan pola makan saat ini dan lakukan aktivitas fisik 3 kali dalam seminggu agar tubuh tetap dalam kondisi optimal',
  'Jaga pola makan dengan mengurangi makanan tinggi gula ataupun lemak, serta tingkatan aktivitas dan olahraga secara teratur'
]

function submitForm(event) {
  event.preventDefault();
  let selectedGender;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
      break;
    }
  }
  const tinggiMeter = tinggi.value / 100;
  const bmi = parseFloat(berat.value / tinggiMeter ** 2).toFixed(1);
  answer[0].innerHTML = selectedGender;
  answer[1].innerHTML = usia.value;
  answer[2].innerHTML = berat.value;
  answer[3].innerHTML = tinggi.value;
  bmiResult.innerHTML = bmi;
  kategoriBMI.innerHTML = kategori(bmi);
  deskripsiBMI.innerHTML = deskripsi(bmi);
  console.log([selectedGender, usia.value, berat.value, tinggi.value])
}
function kategori(bmi) {
  if (bmi < 18.5) {
    kategoriBMI.style.color = 'blue';
    return "Kekurangan berat badan";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    kategoriBMI.style.color = 'green';
    return "Berat ideal";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    kategoriBMI.style.color = 'orange';
    return "Kelebihan berat badan";
  }
  if (bmi >= 30) {
    kategoriBMI.style.color = 'red';
    return "Obesitas";
  }
}
function deskripsi(bmi) {
  if (bmi < 18.5) {
    return deskripsiArray[0];
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return deskripsiArray[1];
  }
  if (bmi >= 25 && bmi <= 29.9) {
    return deskripsiArray[2];
  }
  if (bmi >= 30) {
    return deskripsiArray[2];
  }
}
const message = document.getElementsByClassName('info-answer');
const arrowClass = document.getElementsByClassName('arrow');
function rotate(num){
  arrowClass[num].classList.toggle('rotates');
  message[num].classList.toggle('show');
}

