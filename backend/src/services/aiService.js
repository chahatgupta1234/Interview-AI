// aiService.js

const axios = require('axios'); // Axios for making HTTP requests

const AI_MODEL_URL = 'http://localhost:5000/predict'; // URL to your AI model API

// Function to send audio data to the AI model and get predictions
const getAIModelPrediction = async (audioFilePath) => {
  try {
    const formData = new FormData();
    formData.append('file', audioFilePath); // Append audio file to form data

    const response = await axios.post(AI_MODEL_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // Return the predictions from the AI model
  } catch (error) {
    console.error('Error getting prediction from AI model:', error);
    throw error;
  }
};

module.exports = { getAIModelPrediction };
