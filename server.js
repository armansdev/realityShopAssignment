const express = require("express");

const app = express();

app.use(express.json());

const findKUniqueChar = function (str, k) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  let k_unique_char = "";
  let k_unique_char_index = 0;
  let count = 0;

  for (let key in freq) {
    if (freq[key] === 1 && count < k) {
      k_unique_char = key;
      k_unique_char_index = str.indexOf(key);
      count++;
    }
  }

  let timestamp = new Date().toISOString();

  return {
    k_unique_char,
    k_unique_char_index,
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

app.post("/k-unique-character", validationMiddleware, async (req, res) => {
  try {
    const str = req.body.text_to_process;
    const k = req.body.k;

    console.log(
      `[${new Date().toISOString()}] Endpoint /k-unique-character called with input string: ${str}, and k: ${k}`
    );

    const result = findKUniqueChar(str, k);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
