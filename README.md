# url-shortener

This is a URL shortener project that utilizes POSTGRESQL and REDIS to shorten URLs.The short URL is generated using a combination of a UUID and a base62-encoded number. The uuid function generates a random UUID, and the numToBase62 function converts a counter value into a base62 string. The short URL is stored in redis with a ttl of 3 days to reduce latency.

### Installation 
`Clone the repository:` git clone https://github.com/Eric-Vondee/url-shortener.git
`Install dependencies:` yarn install

### Environment Variables
Create a .env file with the following environment variables
- `PORT`
- `NODE_ENV`
- `REDIS_HOST`
- `REDIS_PORT`
- `BASE_URL`
- `POSTGRES_HOST`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`
- `POSTGRES_PORT`

`Start the server:` yarn start

