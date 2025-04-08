// SOAL 1: Buatlah sistem tebak angka sederhana

// Cara sederhana

// let playAgain = true;

// while (playAgain) {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   let answer;
//   let attempts = 0;

//   while (true) {
//     answer = prompt("Tebak angka dari 1-10");
//     attempts++;

//     if (answer == randomNumber) {
//       alert(
//         `Selamat jawabanmu benar dalam ${attempts} percobaan! jawabannya adalah ${randomNumber}`
//       );
//       break;
//     } else if (answer > randomNumber) {
//       alert("Jawabanmu terlalu besar");
//     } else {
//       alert("Jawabanmu terlalu kecil");
//     }
//   }

//   playAgain = confirm("Main lagi?");
// }

// alert("Terima kasih telah bermain!");

// Cara lebih kompleks (kepakai di react)

const getRandomNumber = (min = 1, max = 10) => {
  Math.floor(Math.random() * (max - min + 1)) + min;
}


// SOAL 2: Buatlah sistem tebak buah rahasia

// let playAgain = true;

// while (playAgain) {
//   const fruits = ["apel", "semangka", "anggur", "jeruk"];
//   const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
//   let answer;
//   let attempts = 0;

//   while (true) {
//     answer = prompt(`Tebak buah rahasia, pilih antara ${fruits.join(", ")}`);
//     attempts++;
//     if (!fruits.includes(answer)) {
//       alert("Jawabanmu tidak ada dalam daftar buah");
//     }
//     else if (answer === randomFruit) {
//       alert(
//         `Selamat jawabanmu benar dalam ${attempts} percobaan! jawabannya adalah ${randomFruit}`
//       );
//       break;
//     } else if (answer.length > randomFruit.length) {
//       alert("Jawabanmu terlalu panjang");
//     } else {
//       alert("Jawabanmu terlalu pendek");
//     }
//   }

//   playAgain = confirm("Main lagi?");
// }

// alert("Terima kasih telah bermain!");
