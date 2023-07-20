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
  console.log([selectedGender, usia.value, berat.value, tinggi.value]);
  if (validated(usia.value, berat.value, tinggi.value)) {
    const tinggiMeter = tinggi.value / 100;
    const bmi = parseFloat(berat.value / tinggiMeter ** 2).toFixed(1);
    answer[0].innerHTML = selectedGender;
    answer[1].innerHTML = usia.value;
    answer[2].innerHTML = berat.value;
    answer[3].innerHTML = tinggi.value;
    bmiResult.innerHTML = bmi;
    kategoriBMI.innerHTML = kategori(bmi);
    deskripsiBMI.innerHTML = deskripsi(bmi);
  };
}

function validated(age, weight, height) {
  const usiaNull = document.getElementById('usiaNull');
  const usiaRange = document.getElementById('usiaRange');
  const beratNull = document.getElementById('beratNull');
  const beratRange = document.getElementById('beratRange');
  const tinggiNull = document.getElementById('tinggiNull');
  const tinggiRange = document.getElementById('tinggiRange');
 
  let condition = true;
  //age validation
  switch (true) {
    case (age == ''):
      usiaNull.style.display = 'block';
      usiaRange.style.display = 'none';
      condition = false;
      break;
    case (age < 2 || age > 120):
      usiaNull.style.display = 'none';
      usiaRange.style.display = 'block';
      condition = false;
      break;
    default:
      usiaNull.style.display = 'none';
      usiaRange.style.display = 'none';
      break;
  }
  //weight validation
  switch (true) {
    case (weight == ''):
      beratNull.style.display = 'block';
      beratRange.style.display = 'none';
      condition = false;
      break;
    case (weight < 3 || weight > 600):
      beratNull.style.display = 'none';
      beratRange.style.display = 'block';
      condition = false;
      break;
    default:
      beratNull.style.display = 'none';
      beratRange.style.display = 'none';
      break;
  }
  //height validation
  switch (true) {
    case (height == ''):
      tinggiNull.style.display = 'block';
      tinggiRange.style.display = 'none';
      condition = false;
      break;
    case (height < 40 || height > 300):
      tinggiNull.style.display = 'none';
      tinggiRange.style.display = 'block';
      condition = false;
      break;
    default:
      tinggiNull.style.display = 'none';
      tinggiRange.style.display = 'none';
      break;
  }
  return condition;
}
function hideError(num) {
  // const errorClass = document.getElementsByClassName('error');
  // console.log(errorClass);
  // errorClass[num].classList.add('hide');
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
const question = document.getElementsByClassName('info-question');
function rotate(num) {
  arrowClass[num].classList.toggle('rotates');
  let content = question[num].nextElementSibling;
  console.log(content);
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";

  }
}

