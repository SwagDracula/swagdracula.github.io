# Twitch Jumpscare Wheel

This project is a web application that integrates a spinning wheel feature, allowing users to use tokens earned from gifting subscriptions on a Twitch channel to trigger random jumpscares based on the wheel's outcome.

## Features

- **Spinning Wheel**: Users can spin a wheel to trigger random jumpscares.
- **Token System**: Users earn tokens by gifting subscriptions on Twitch, which can be used to spin the wheel.
- **Jumpscare Management**: The application manages various jumpscares, including audio and visual effects.
- **User Profiles**: Users can view their token balance and profile information.

## Project Structure

```
twitch-jumpscare-wheel
├── src
│   ├── components
│   │   ├── wheel
│   │   ├── jumpscares
│   │   ├── user
│   │   └── common
│   ├── services
│   ├── utils
│   ├── assets
│   ├── styles
│   ├── config
│   └── app.js
├── server
│   ├── routes
│   ├── middleware
│   ├── models
│   └── controllers
├── public
│   ├── index.html
│   ├── wheel.html
│   └── manifest.json
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/twitch-jumpscare-wheel.git
   ```

2. Navigate to the project directory:
   ```
   cd twitch-jumpscare-wheel
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables by copying `.env.example` to `.env` and filling in the required values.

5. Start the server:
   ```
   npm run server
   ```

6. Start the client:
   ```
   npm start
   ```

## Usage

- Users can log in using their Twitch accounts.
- Earn tokens by gifting subscriptions on Twitch.
- Use tokens to spin the wheel and trigger jumpscares.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.