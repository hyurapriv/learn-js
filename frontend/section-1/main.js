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


// Cara lebih kompleks pake arrow function
const getRandomNumber = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const promptGuess = (attempt) => {
  return Number(prompt(`Tebak angka dari 1-10, percobaan ke-${attempt}`));
};

const checkGuess = (guess, target) => {
  if (isNaN(guess)) return "invalid";
  if (guess === target) return "benar";
  if (guess > target) return "terlaluBesar";
  return "terlaluKecil";
};

const playGame = () => {
  const maxAttempts = 5
  const target = getRandomNumber();
  const guesses = [];

  for (let i = 0; i < maxAttempts; i++) {
    const guess = promptGuess(i + 1);
    guesses.push(guess);

    const result = checkGuess(guess, target);
    if (result === "benar") {
      alert(`Selamat jawabanmu benar dalam ${i + 1} percobaan! jawabannya adalah ${target}`);
      return;
    } else if (result === "terlaluBesar") {
      alert("Jawabanmu terlalu besar");
    } else {
      alert("Jawabanmu terlalu kecil");
    }

    if (i === maxAttempts - 1) {
      alert(`😞 Kesempatan habis. jawabannya adalah ${target}`);
    }
  }
}

let playAgain = true;

while (playAgain) {
  playGame();

  playAgain = confirm("Main lagi?");
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


