// audioRoutes.js

const express = require('express');
const router = express.Router();
const { processAudio } = require('../services/audioService');

router.post('/process-audio', processAudio);

module.exports = router;
