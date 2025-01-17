const express = require("express");

const app = express();

app.use(express.json());

const findFirstUniqueChar = function (str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  let minFreq = Infinity;
  let first_unique_char = "";
  let first_unique_char_index = 0;

  for (let key in freq) {
    if (freq[key] < minFreq) {
      minFreq = freq[key];
      first_unique_char = key;
      first_unique_char_index = str.indexOf(key);
    } else if (freq[key] === minFreq) {
      minFreq = Infinity;
      first_unique_char = "No unique character found";
      first_unique_char_index = -1;
    }
  }
  let timestamp = new Date().toISOString();

  return {
    first_unique_char,
    first_unique_char_index,
    timestamp,
  };
};

const validationMiddleware = async (req, res, next) => {
  try {
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ message: "Invalid JSON payload" });
    }

    if (
      !req.body.text_to_process ||
      typeof req.body.text_to_process !== "string"
    ) {
      return res
        .status(400)
        .json({ message: "Invalid input: 'text_to_process' must be a string" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Error processing request" });
  }
};

app.post("/first-unique-character", validationMiddleware, async (req, res) => {
  try {
    const str = req.body.text_to_process;

    console.log(
      `[${new Date().toISOString()}] Endpoint /first-unique-character called with input: ${str}`
    );

    const result = findFirstUniqueChar(str);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
