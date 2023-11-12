function extractQuizData() {
  let quizElement = document.querySelector(".formulation");
  let questionText = quizElement.querySelector(".qtext").innerText.trim();

  let answerElements = quizElement.querySelectorAll(".answer label");
  let choices = Array.from(answerElements).map((label) => label.innerText.trim());
  choices = choices.map((choice) => choice.replace(/\n/g, ""));

  let quizString = `${questionText}\n\n${choices.join("\n")}\n\nPilih jawaban yang benar, cukup sebutkan hurufnya saja!`;
  return quizString;
}

function markCorrectAnswer(answerLetter) {
  const answerIndex = answerLetter.charCodeAt(0) - "A".charCodeAt(0);
  const answerElements = document.querySelectorAll(".answer label");

  if (answerIndex >= 0 && answerIndex < answerElements.length) {
    answerElements[answerIndex].style.fontStyle = "italic";
  }
}

const quizData = extractQuizData();
const apiKey = "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"; //
const apiUrl = "https://api.openai.com/v1/completions";

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: "text-davinci-003",
    prompt: quizData,
    max_tokens: 100,
    temperature: 0,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    const answer = data.choices[0].text.trim()[0].toUpperCase();
    console.log(answer);
    markCorrectAnswer(answer);
  })
  .catch((error) => console.log(error));
