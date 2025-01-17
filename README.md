# First Unique Character API

This project is a Node.js application that provides a RESTful API to find the first unique character in a given string. The API validates the input and returns the first unique character along with its index and a timestamp.

## Features

- Validates JSON payload for proper structure and data types.
- Finds the first unique character in the provided string.
- Returns detailed response including character, index, and timestamp.
- Logs endpoint calls with input for debugging purposes.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/armansdev/realityShopAssignment.git
   cd realityShopAssignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Running the Application

1. **Start the server**

   ```bash
   node server.js
   ```

2. The server will start on port `5000` and can be accessed at `http://localhost:5000`.

## API Endpoint

### POST `/first-unique-character`

**Request**:

- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "text_to_process": "your_string_here"
  }
  ```

**Response**:

- **Success**: Returns the first unique character and its index.

  ```json
  {
    "first_unique_char": "<character>",
    "first_unique_char_index": <index>,
    "timestamp": "<timestamp>"
  }
  ```

- **Error**:
  - Invalid JSON payload:
    ```json
    {
      "message": "Invalid JSON payload"
    }
    ```
  - Missing or invalid `text_to_process`:
    ```json
    {
      "message": "Invalid input: 'text_to_process' must be a string"
    }
    ```

## Logging

When the endpoint is called, the server logs a message in the following format:

```text
[<timestamp>] Endpoint /first-unique-character called with input: <input-string>
```

## Testing

You can test the API using tools like Postman or cURL. For example:

**Using cURL**:

```bash
curl -X POST http://localhost:5000/first-unique-character \
-H "Content-Type: application/json" \
-d '{"text_to_process": "keetnode"}'
```

**Expected Response**:

```json
{
  "first_unique_char": "k",
  "first_unique_char_index": 0,
  "timestamp": "2025-01-17T12:34:56Z"
}
```
