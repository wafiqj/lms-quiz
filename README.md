# Quiz with GPT Extension

This Chrome extension, named "Quiz with GPT," is designed to assist you in completing quizzes on the Telkom University LMS without having to switch between windows for ChatGPT. The extension leverages OpenAI's GPT-3.5 for generating answers to quiz questions.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded this extension.

## Usage

1. Ensure that you are on the Telkom University LMS quiz page (e.g., https://lms.telkomuniversity.ac.id/).
2. The extension will automatically run when you visit the quiz page.
3. It extracts quiz data, sends it to the OpenAI API, and highlights the correct answer on the page.
4. The correct answer will be marked with italic styling.

## Configuration

To use this extension, you need to set up an OpenAI API key. Follow these steps:

1. Visit [OpenAI](https://beta.openai.com/signup/) to sign up or log in.
2. Retrieve your API key from the OpenAI dashboard.
3. Open the `content.js` file and replace `YOUR_OPENAI_API_KEY` with your actual API key.

```javascript
const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key
```


> [!NOTE]
> Bear in mind, using the OpenAI API is like entering a GKU Swimming Pool—
> there's a cover charge.
> So, embrace the reality that nothing in this world is truly free
>
> 