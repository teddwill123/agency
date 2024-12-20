# Backend Functionalities for Agency Website

This document outlines the various backend functionalities required to complete the development of the agency website. These functionalities are necessary for seamless data management, form submissions, and dynamic content retrieval. The backend will be implemented using **Supabase** as the database service.

**Note:** The frontend has already been implemented. Cursor AI only needs to analyze the code and implement the backend functionalities using Supabase. Additionally, only authenticated users can book a consultation.

## 1. Services Management

- **Description**: CRUD (Create, Read, Update, Delete) operations for the services offered by the agency.
- **Endpoints**:
  - `GET /api/services` - Fetch all services.
  - `POST /api/services` - Add a new service.
  - `PUT /api/services/:id` - Update an existing service by ID.
  - `DELETE /api/services/:id` - Delete a service by ID.
- **Data Schema**:
  | Field Name | Type | Description |
  |---------------|------------|----------------------------------------|
  | `id` | SERIAL | Primary Key. |
  | `title` | VARCHAR | Service title. |
  | `description` | TEXT | Description of the service. |
  | `icon_url` | VARCHAR | URL to the service icon (optional). |

## 2. Portfolio Management

- **Description**: CRUD operations for managing the agency's portfolio projects.
- **Endpoints**:
  - `GET /api/portfolio` - Fetch all portfolio projects.
  - `POST /api/portfolio` - Add a new portfolio project.
  - `PUT /api/portfolio/:id` - Update an existing project by ID.
  - `DELETE /api/portfolio/:id` - Delete a project by ID.
- **Data Schema**:
  | Field Name | Type | Description |
  |---------------|------------|----------------------------------------|
  | `id` | SERIAL | Primary Key. |
  | `title` | VARCHAR | Project title. |
  | `description` | TEXT | Description of the project. |
  | `category` | VARCHAR | Project category (e.g., web, mobile). |
  | `image_url` | VARCHAR | URL to the project image. |

## 3. Testimonials Management

- **Description**: CRUD operations for managing client testimonials.
- **Endpoints**:
  - `GET /api/testimonials` - Fetch all testimonials.
  - `POST /api/testimonials` - Add a new testimonial.
  - `PUT /api/testimonials/:id` - Update a testimonial by ID.
  - `DELETE /api/testimonials/:id` - Delete a testimonial by ID.
- **Data Schema**:
  | Field Name | Type | Description |
  |-----------------|------------|----------------------------------------|
  | `id` | SERIAL | Primary Key. |
  | `client_name` | VARCHAR | Name of the client. |
  | `company` | VARCHAR | Client's company name. |
  | `testimonial` | TEXT | Testimonial content. |

## 4. Consultation Form Submissions

- **Description**: Handle form submissions for consultation requests. Only authenticated users can submit this form.
- **Endpoints**:
  - `POST /api/consultations` - Submit a consultation request (requires authentication).
  - `GET /api/consultations` - Retrieve submitted consultation requests.
- **Data Schema**:
  | Field Name | Type | Description |
  |-----------------|------------|----------------------------------------|
  | `id` | SERIAL | Primary Key. |
  | `name` | VARCHAR | User's name. |
  | `email` | VARCHAR | User's email. |
  | `service` | VARCHAR | Selected service type. |
  | `message` | TEXT | User's message. |
  | `submitted_at` | TIMESTAMP | Timestamp of submission. |

## 5. Contact Form Submissions

- **Description**: Handle form submissions for contact inquiries.
- **Endpoints**:
  - `POST /api/contact` - Submit a contact message.
  - `GET /api/contact` - Retrieve submitted contact messages.
- **Data Schema**:
  | Field Name | Type | Description |
  |-----------------|------------|----------------------------------------|
  | `id` | SERIAL | Primary Key. |
  | `name` | VARCHAR | User's name. |
  | `email` | VARCHAR | User's email. |
  | `message` | TEXT | User's message. |
  | `submitted_at` | TIMESTAMP | Timestamp of submission. |

## 6. Authentication

- **Description**: Secure admin access for managing data and restrict consultation bookings to authenticated users.
- **Features**:
  - Use Supabase authentication for user login (email/password).
  - Protect the `POST /api/consultations` endpoint with middleware to validate user tokens.
- **Steps**:
  - Enable Supabase Auth with email/password login.
  - Protect sensitive endpoints using middleware to verify authentication tokens.

## 7. Deployment and Hosting

- **Backend Hosting**: Supabase provides automatic hosting for the database.
- **Frontend Integration**:
  - Use the `@supabase/supabase-js` client library to connect the frontend to Supabase.
  - Fetch and display data dynamically for the following sections:
    - Services
    - Portfolio
    - Testimonials

## 8. API Endpoint Summary

| Endpoint             | Method | Description                             |
| -------------------- | ------ | --------------------------------------- |
| `/api/services`      | GET    | Fetch all services.                     |
| `/api/services`      | POST   | Add a new service.                      |
| `/api/services/:id`  | PUT    | Update a service by ID.                 |
| `/api/services/:id`  | DELETE | Delete a service by ID.                 |
| `/api/portfolio`     | GET    | Fetch all portfolio projects.           |
| `/api/portfolio`     | POST   | Add a new portfolio project.            |
| `/api/testimonials`  | GET    | Fetch all testimonials.                 |
| `/api/testimonials`  | POST   | Add a new testimonial.                  |
| `/api/consultations` | POST   | Submit a consultation form (Auth only). |
| `/api/contact`       | POST   | Submit a contact form.                  |

## Notes

- Use Supabase Realtime for live updates (optional).
- Implement error handling for all API routes.
- Validate form submissions using basic input validation.
- Protect sensitive data and endpoints with Supabase Auth.

---

**Next Steps**:

1. Create the required database tables using the provided SQL commands.
2. Set up API endpoints for each functionality.
3. Integrate the backend with the frontend using Supabase client library.
4. Test all endpoints and ensure proper error handling.
