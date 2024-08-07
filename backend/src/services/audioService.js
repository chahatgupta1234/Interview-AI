// audioService.js

const { transcribeAudio } = require('../../ai_model/speech_to_text');

const processAudio = async (req, res) => {
  const { audioBlob } = req.body;
  // Save and process the audio file using ffmpeg
  // Example: const transcription = await transcribeAudio('path/to/audio/file.wav');
  res.json({ transcript: 'transcription result here' });
};

module.exports = { processAudio };
