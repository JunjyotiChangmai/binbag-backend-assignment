# User Profile Management API

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/JunjyotiChangmai/binbag-backend-assignment.git
   cd binbag-backend-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```sh
   MONGO_URI = your_mongodb_uri_here
   JWT_SECRET = your_jwt_secret_key_here
   PORT = 5000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Documentation
- **Register:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`
- **Get Profile:** `GET /api/user/profile` (Protected)
- **Update Profile:** `PUT /api/user/profile` (Protected)
