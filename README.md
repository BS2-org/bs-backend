bs-backend is the Node.js + Express backend for the BS social platform.
It provides all API services for user accounts, social interactions, and personalization features, while maintaining a clean, scalable structure.

Core responsibilities of this repository include:

* REST API endpoints for users, posts, likes, and comments
* Authentication (email/password + OAuth providers like Google)
* JWT-based session management
* User profile + theme preference storage
* Search, filter, and sorting logic
* Data modeling using MongoDB & Mongoose
* Input validation, rate limiting, and secure middleware

The backend is designed for deployment on AWS or any modern cloud environment, with CI/CD support planned via GitHub Actions.
