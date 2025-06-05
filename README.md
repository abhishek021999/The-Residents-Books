# The Residents Book

A modern web application for managing and displaying resident profiles with social media integration. Built with React, Node.js, and MongoDB.

## Features

- 📝 Create and manage resident profiles
- 🖼️ Upload and display profile images
- 🔗 Social media integration (LinkedIn & Twitter)
- 🎨 Modern and responsive UI
- ⚡ Real-time data updates
- 🔄 Automatic data refresh after profile addition

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Modern CSS with animations
- Responsive design

### Backend
- Node.js
- Express.js
- MongoDB
- Multer (for file uploads)
- Cloudinary (for image hosting)

## Project Structure

```
TheResidentsBook/
├── frontend/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── CardPage.jsx      # Main profile display page
│   │   │   └── ModalForm.jsx     # Profile creation form
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
└── backend/
    ├── Config/
    │   └── db.js                 # Database configuration
    ├── Controller/
    │   └── profile.controller.js # Profile CRUD operations
    ├── Middleware/
    │   └── multer.js            # File upload configuration
    ├── Models/
    │   └── Profile.model.js     # Profile schema
    ├── Routes/
    │   └── profile.route.js     # API routes
    └── server.js                # Express server setup
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account

### Installation


1. Install backend dependencies:
```bash
cd backend
npm install
```

2. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## API Endpoints

### Profiles
- `GET /api/profile/get` - Get all profiles
- `POST /api/profile/add` - Add a new profile
  - Required fields: firstName, role
  - Optional fields: lastName, photo, linkedin, twitter

## Features in Detail

### Profile Management
- Create new profiles with personal information
- Upload profile images
- Add social media links
- View all profiles in a responsive grid layout

### Image Handling
- Secure image upload using Multer
- Cloud storage with Cloudinary
- Automatic image optimization
- Fallback placeholder for missing images

### Social Media Integration
- LinkedIn profile linking
- Twitter profile linking
- Clickable social media icons
- Visual feedback on hover

### UI/UX Features
- Loading states with spinners
- Smooth animations
- Responsive design
- Form validation
- Error handling
- Success notifications


