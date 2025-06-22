## Contact Book Application: JavaScript Core
![contact cover](https://github.com/user-attachments/assets/e2471c64-4a61-4d6c-9259-6cde48951a6b)
Core JavaScript functionalities for a web-based Contact Book application. 
This project handles various user interactions, data fetching, and dynamic content rendering for both the main contact listing page and the individual contact editing page.

###🚀 Key Features
Contact Listing: Fetches and displays a list of contacts in a visually appealing card-based grid layout.

Navigation: Facilitates navigation between the contact list, add contact page, and individual edit contact pages.

Contact Details Display: Retrieves and displays detailed information for a single contact on the edit page.

Contact Editing: Allows users to modify existing contact details.

Contact Deletion: Provides functionality to remove contacts from the system.

Form Submission: Handles submitting contact data for both adding new contacts and updating existing ones.

### 🛠️ Technologies Used
Vanilla JavaScript: All client-side logic is implemented using plain JavaScript.

Fetch API: Utilized for asynchronous communication with the backend API to retrieve, insert, update, and delete contact data.

HTML & CSS: Relies on the structure defined in HTML files and styling provided by CSS  for the user interface.

📁 Project Structure 

script.js: Contains all the client-side logic for fetching data, rendering UI, and handling user interactions.

config.js: (Expected) A separate file defining global constants like rootPath (API base URL) and apiKey.

index.html: (Expected) The main page displaying the contact list.

edit-contact.html: (Expected) A page for viewing, editing, and deleting individual contact details.

add-contacts.html: (Expected) A page for adding new contacts.

⚙️ Core JavaScript Functions
The script.js comprises several functions, each responsible for a specific aspect of the application:

Event Listener Setup
refreshBtn, addContactBtn, submitFormBtn, homeLinkBtn, updateContactBtn, deleteContactBtn: These constants acquire references to various buttons on the page.

Event Listeners: Conditional event listeners are attached to these buttons (e.g., click events) to trigger specific functions when pressed. This setup anticipates the buttons' presence on different pages.

Contact Listing and Display (index.html related)
fetchContacts(): Initiates an API call to controller/get-contacts/ to retrieve all contact records.

displayOutput(data): Takes the fetched contact data (an array of objects) and dynamically generates HTML to display contacts in a grid of stylized cards. Each card is clickable to lead to the editContact page.

Navigation
homeLink(): Navigates the user back to the index.html (home page).

addContact(): Opens the add-contacts.html page, typically for creating a new contact.

editContact(id): Navigates to edit-contact.html, passing the id of the selected contact as a URL query parameter for specific contact editing.

Contact Editing and Deletion (edit-contact.html related)
getId(): A utility function that parses the current page's URL to extract the id query parameter. This id is crucial for fetching/updating/deleting specific contact data.

getContact(): Fetches the details of a single contact using the id retrieved from the URL via an API call to controller/get-contacts/?id=....

displayEditOutput(data): Populates the form fields (firstname, lastname, email, mobile) and displays the avatar image (avatarImage) on the edit-contact.html page using the fetched data.

updateContact(): Modifies the readOnly property of form input fields and makes the avatar upload field (avatar) and submit button visible, enabling the user to edit contact details. This function is typically triggered by an "Edit" button click.

deleteContact(): Prompts the user for confirmation and sends a DELETE request to controller/delete-contact/?id=... to remove the contact.

Form Submission (Adding/Updating)
submitForm(e): Handles the form submission event.

It prevents the default form submission behavior.

It collects form data using FormData.

#### API Endpoints: 
A backend API was set up to handle the following endpoints:

GET /controller/get-contacts/: To retrieve all contacts or a specific contact by ID.

POST /controller/insert-contact/: To add a new contact.

POST /controller/edit-contact/ (or update-contact/): To update an existing contact.

DELETE /controller/delete-contact/?id={id}: To delete a contact.

### 🤝 Acknowledgements
This project was developed as part of the FNB App Academy program, which provided the foundational knowledge and guidance for building web applications.
