# Sunrise College Website

## 1. Project Overview

Sunrise College is a responsive college website developed to provide students with essential information about the college, its courses, latest announcements, and contact details.

The website provides a clean and user-friendly interface with simple navigation and interactive features.

## 2. Project Objectives

- To develop a professional and responsive college website.
- To provide information about college courses and facilities.
- To display the latest college announcements dynamically.
- To provide a contact form for user inquiries.
- To practise frontend development using HTML, CSS, and JavaScript.

## 3. Technologies and Tools Used

 HTML5 | Creating the structure of the website. 
 CSS3 | Styling and designing the website. 
 JavaScript | Adding interactivity and functionality. 
 JSON | Storing announcement data. 
 Fetch API | Retrieving announcement data from the JSON file. 
 VS Code | Code editor used for development. 
 Git & GitHub | Version control and project hosting. 

## 4. Why I Selected These Technologies

- **HTML5:** Used to create the basic structure and content of the website.
- **CSS3:** Used to design layouts, apply styling, and make the website responsive using Flexbox, Grid, and media queries.
- **JavaScript:** Used to handle dynamic content, form validation, and DOM manipulation.
- **JSON:** Used to store announcement information in a structured format.
- **Fetch API:** Used to retrieve announcement data from the JSON file without hardcoding the content in HTML.

These technologies were selected because they are lightweight, beginner-friendly, and suitable for developing responsive frontend applications.

## 5. Project Folder Structure

SunriseCollege/
│
├── index.html
├── style.css
├── script.js
├── announcement.json
└── README.md


### File Description

- `index.html` – Contains the structure and different sections of the website.
- `style.css` – Contains the styling and responsive design.
- `script.js` – Handles dynamic announcements, current year display, and contact form functionality.
- `announcement.json` – Stores college announcement data.
- `README.md` – Contains project documentation and setup instructions.

## 6. Features and Functionalities

### 1. Navigation Bar
- Provides navigation to different sections of the website.
- Includes Home, About, Courses, Announcements, and Contact links.
- Includes an Apply Now button.
- Supports a responsive navigation menu.

### 2. Home Section
- Displays a welcome message.
- Includes a background image.
- Provides an Explore Courses button.

### 3. About Section
- Provides information about the college.
- Displays the college building image.
- Describes the college's educational approach.

### 4. Courses Section
- Displays available courses.
- Includes Computer Science, Commerce, Arts, and Science.
- Uses CSS Grid to arrange course cards.

### 5. Announcements Section
- Retrieves announcement data from a JSON file using the Fetch API.
- Uses JavaScript to dynamically create announcement cards.
- Displays announcement titles and descriptions.

### 6. Contact Section
- Provides a contact form with Name, Email, and Message fields.
- Uses HTML form validation.
- Uses JavaScript to handle form submission and display a confirmation message.

### 7. Footer
- Displays college contact information.
- Automatically updates the current year using JavaScript.

### 8. Responsive Design
- Uses CSS Flexbox and Grid for layouts.
- Uses media queries to adjust the layout for different screen sizes.
- Provides a mobile-friendly navigation menu.

## 7. Instructions to Run the Project Locally

**Step 1:** Clone the GitHub repository.

```bash
git clone <repository-url>
```

**Step 2:** Navigate to the project directory.

```bash
cd SunriseCollege
```

**Step 3:** Open the project in Visual Studio Code.

```bash
code .
```

**Step 4:** Install the Live Server extension in VS Code if it is not already installed.

**Step 5:** Right-click on `index.html` and select **Open with Live Server**.

**Step 6:** The website will open in your default browser.

## 8. Dependencies and Libraries Used

- No external JavaScript libraries or frameworks are required.
- No Bootstrap dependency is used in the current implementation.
- Google Fonts and external image URLs can be used if configured in the project.
- VS Code Live Server is used for local development.

## 9. Technical Challenges Faced and Solutions

### Challenge 1: Dynamically Displaying Announcements

**Problem:** Displaying announcement information directly from a JSON file.

**Solution:** Used the Fetch API to retrieve JSON data and JavaScript DOM manipulation to dynamically generate announcement cards.

### Challenge 2: Responsive Navigation

**Problem:** Making the navigation bar suitable for different screen sizes.

**Solution:** Used CSS Flexbox and a checkbox-based menu toggle with media queries.

### Challenge 3: Responsive Layout

**Problem:** Maintaining a consistent layout across desktop and mobile devices.

**Solution:** Used CSS Grid, Flexbox, and media queries to adjust the layout according to screen width.

### Challenge 4: Contact Form Handling

**Problem:** Handling user input and providing feedback after form submission.

**Solution:** Used HTML form validation and JavaScript event handling to display a confirmation message.

## 10. Future Improvements

- Add student registration and login functionality.
- Store registered student details using JSON Server or a database.
- Add an admin dashboard to manage announcements.
- Connect the contact form to a backend to store user inquiries.
- Add a student dashboard to view academic information.
- Improve accessibility and add more interactive features.

---

## Author

**Amrita Priyadarsani Parida**

Web Development Internship Assessment Project

**Project:** Sunrise College Website