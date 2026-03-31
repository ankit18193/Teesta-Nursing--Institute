🧠 🔐 AUTH

🔑 Login
POST /api/auth/login

Body:
{
  "email": "admin@example.com",
  "password": "123456"
}

Response:
{
  "success": true,
  "token": "JWT_TOKEN"
}

📌 Use Token
Authorization: Bearer <JWT_TOKEN>

🧠 📩 LEADS (ENQUIRY FORM)

🟢 Create Lead (Public)
POST /api/leads

Body:
{
  "name": "Rahul",
  "phone": "9876543210",
  "email": "rahul@gmail.com",
  "course": "BSc Nursing",
  "message": "I want admission"
}

🔐 Get Leads (Admin)
GET /api/leads

Query params:
?status=NEW
?search=rahul
?page=1&limit=10

🔐 Update Lead
PATCH /api/leads/:id
Body:
{
  "status": "CONTACTED"
}

🧠 📚 COURSES

🌍 Get All Courses
GET /api/courses

🌍 Get Course by ID
GET /api/courses/:id

🔐 Create Course
POST /api/courses

Body:
{
  "title": "BSc Nursing",
  "duration": "4 years",
  "description": "Course details",
  "eligibility": "12th pass"
}

🔐 Update Course
PATCH /api/courses/:id

🔐 Delete Course
DELETE /api/courses/:id

🧠 ⭐ TESTIMONIALS

🌍 Get Testimonials
GET /api/testimonials

🔐 Create Testimonial
POST /api/testimonials

Body:
{
  "name": "Student Name",
  "message": "Great college",
  "course": "GNM",
  "image": "URL",
  "imageId": "CLOUDINARY_ID"
}

🔐 Delete Testimonial
DELETE /api/testimonials/:id

🧠 📢 NOTICES

🌍 Get Notices
GET /api/notices

🔐 Create Notice
POST /api/notices

Body:
{
  "title": "Admission Open",
  "content": "Apply now"
}

🔐 Update Notice
PATCH /api/notices/:id

🔐 Delete Notice
DELETE /api/notices/:id

🧠 🖼️ GALLERY

🌍 Get Gallery
GET /api/gallery

🔐 Add Image
POST /api/gallery

Body:
{
  "image": "URL",
  "imageId": "CLOUDINARY_ID"
}

🔐 Delete Image
DELETE /api/gallery/:id

🧠 ☁️ FILE UPLOAD

🔐 Upload Image
POST /api/upload

Body:
{
  "image": "base64 string"
}

Response:
{
  "url": "...",
  "public_id": "..."
}

🧠 📊 DASHBOARD

🔐 Get Stats
GET /api/dashboard/stats

Response:
{
  "totalLeads": 10,
  "newLeads": 5,
  "contactedLeads": 5
}