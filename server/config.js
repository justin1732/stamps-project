require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

const config = {
    shipengine: {
        apiKey: process.env.SHIPENGINE_SANDBOX_API_KEY
      },
port: process.env.PORT || 8000,


};

config.shippenguin.url = isProd ? process.env.SHIPPENGUIN_URL : `http://localhost:${config.port}`;

module.exports = config;