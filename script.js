//button
const refreshBtn = document.getElementById("refresh");
if (refreshBtn) refreshBtn.addEventListener("click", fetchContacts);

const addContactBtn = document.getElementById("addContact");
if (addContactBtn) addContactBtn.addEventListener("click", addContact);

const submitFormBtn = document.getElementById("submitForm");
if (submitFormBtn) submitFormBtn.addEventListener("click", submitForm);

const homeLinkBtn = document.getElementById("homeLink");
if (homeLinkBtn) homeLinkBtn.addEventListener("click", homeLink);

const updateContactBtn = document.getElementById("editContact");
if (updateContactBtn) updateContactBtn.addEventListener("click", updateContact);

const deleteContactBtn = document.getElementById("deleteContact");
if (deleteContactBtn) deleteContactBtn.addEventListener("click", deleteContact);

//fetching contacts
function fetchContacts() {
  fetch(rootPath + "controller/get-contacts/")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayOutput(data);
      //console.log(data)
    });
}

function displayOutput(data) {
  output = "<div>";

  for (a in data) {
    //     <tr onclick="editContact(${data[a]
    //       .id})" style="cursor: pointer;">
    // <td><img src ="${rootPath}controller/uploads/${data[a].avatar}" width=40px></td>
    // <td><h5>${data[a].firstname}</h5></td>
    // <td><h5>${data[a].lastname}</h5></td>
    // </tr>

    output += `

  <div class="box" onclick="editContact(${data[a]
    .id})" style="cursor: pointer;">
                <div class="box-top">
                    <img
                        class="box-image"
                        src="${rootPath}controller/uploads/${data[a].avatar}"
                        alt="${data[a].firstname} ${data[a].lastname}'s Avatar"
                    />
                    <div class="title-flex">
                        <h3 class="box-title">${data[a].firstname} ${data[a]
      .lastname}</h3>
                        <p class="user-follow-info">Phone Number: ${data[a]
                          .mobile
                          ? data[a].mobile
                          : "N/A Mobile"}</p>
                        </div>
                    <p class="description">
                        Email: ${data[a].email ? data[a].email : "N/A"}
                        </p>
                </div>
                <a href="javascript:void(0);" class="button" onclick="">About:  ${data[
                  a
                ].firstname}</a>
                </div>
                     </div>


`;
  }
  output += "</div>";
  //document.getElementById("wrap").innerHTML = output;
  document.getElementById("table").innerHTML = output;
}

function addContact() {
  window.open("add-contacts.html", "_self");
}

// submit form

function submitForm(e) {
  e.preventDefault();

  const form = new FormData(document.querySelector("#editForm"));
  form.append("apiKey", apiKey);
  // Append the id to the form data for editing
  form.append("id", id);

  fetch(rootPath + "controller/insert-contact/", {
    method: "POST",
    headers: { Accept: "application/json,*.*" },
    body: form
  })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      if (data == "1") {
        alert("Contact Added.");
        //link to home page
        //homeLink();
      } else {
        alert(data);
        //link back to home page
        homeLink();
      }
    });

  // UPdatING the contact
  fetch(rootPath + "controller/edit-contact/", {
    method: "POST",
    headers: { Accept: "application/json,*.*" },
    body: form
  })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      if (data == "1") {
        alert("Contact Updated.");
        //link to home page
        homeLink();
      } else {
        alert(data);
        //link back to home page
        homeLink();
      }
    });
}

//takes back to this home page
function homeLink() {
  window.open("index.html", "_self");
}

function editContact(id) {
  window.open("edit-contact.html?id=" + id, "_self");
}

//Getting the id from the URL to edit the contact
var id = getId();

// console.log("The Id is :" + id);

function getId() {
  var url = window.location.href;
  var pos = url.search("=");
  var id = url.slice(pos + 1);
  return id;
}

// Fetching the contact details for editing
function getContact() {
  fetch(rootPath + "controller/get-contacts/?id=" + id)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //Display the contact info
      displayEditOutput(data);
      console.log(data);
    });
}

// Displaying the data to edit
function displayEditOutput(data) {
  avatarImg = `
     <img src="${rootPath}/controller/uploads/${data[0]
    .avatar}" width="200px" />`;

  document.getElementById("avatarImage").innerHTML = avatarImg;
  document.getElementById("firstname").value = data[0].firstname;
  document.getElementById("lastname").value = data[0].lastname;
  document.getElementById("email").value = data[0].email;
  document.getElementById("mobile").value = data[0].mobile;
}

//if the text field is clicked, it will be editable
function updateContact() {
  document.getElementById("firstname").readOnly = false;
  document.getElementById("lastname").readOnly = false;
  document.getElementById("email").readOnly = false;
  document.getElementById("mobile").readOnly = false;
  document.getElementById("avatar").hidden = false;
  document.getElementById("submitForm").style.display = "block";
}

//delete contact
function deleteContact() {
  if (confirm("Are you sure you want to delete this contact?")) {
    fetch(rootPath + "controller/delete-contact/?id=" + id, {
      method: "DELETE",
      headers: { Accept: "application/json,*.*" }
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(data) {
        if (data == "1") {
          alert("Contact Deleted.");
          homeLink();
        } else {
          alert(data);
        }
      });
  }
}
