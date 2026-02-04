🚀 Auth + Dashboard Web App

A full-stack web application with authentication, protected dashboard, and backend APIs.
Built as part of an internship assignment focusing on frontend–backend integration, security, and clean architecture.

🧰 Tech Stack
Frontend

React.js (Vite)
React Router DOM
Axios
Tailwind CSS

Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcrypt for password hashing
dotenv for environment variables
CORS middleware

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-github-repo-url>
cd Frontend_Developer_Intern

🔐 Backend Setup
2️⃣ Install dependencies
cd backend
npm install

3️⃣ Create .env file in backend/
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auth_dashboard_db
JWT_SECRET=your_secret_key
Make sure MongoDB is running locally.

4️⃣ Start Backend Server
npm run start
Backend runs on:
http://localhost:5000

🎨 Frontend Setup
5️⃣ Install dependencies
cd ../frontend
npm install

6️⃣ Start Frontend Server
npm run dev


Frontend runs on:

http://localhost:5173

🔑 Demo Credentials (Optional)

You can create a user using the signup page.

Example:

Email: testuser@gmail.com
Password: password123
Email: donadylan.19@gmail.com
Password: 123456

Or create users via Postman (see below).

📬 API Documentation (Postman)
Auth APIs
POST /api/auth/signup – Register new user
POST /api/auth/login – Login user

Dashboard API
GET /api/dashboard – Protected route (JWT required)

Use header:
Authorization: Bearer <JWT_TOKEN>
You can export a Postman collection from your local workspace if required.

🔐 Security Features
Password hashing using bcrypt
JWT-based authentication
Protected routes using middleware
Environment variables for secrets
CORS configured for frontend origin

🚀 How Would You Scale This for Production?
Deploy frontend and backend separately (Vercel / Netlify + AWS / Render)
Use HTTPS and secure cookies for tokens
Implement refresh tokens for better session handling
Add rate limiting to auth routes
Enable centralized logging (Winston / CloudWatch)
Add DB indexing for faster queries
Use Redis for caching frequent reads
Move secrets to cloud secret managers
Enable CI/CD pipelines for automated deployment

✅ Assignment Coverage Checklist

✔ Auth (Signup + Login)
✔ JWT protected routes
✔ Dashboard access control
✔ Backend API versioning (/api/...)
✔ CORS handling
✔ Clean folder structure
✔ README with setup & scaling notes

👤 Author

Dona
Frontend Developer Intern Candidate
