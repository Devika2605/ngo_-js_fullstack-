
# NGO Management System

This is a full-stack JavaScript project built using **React.js (frontend)**, **Node.js with Express (backend)**, and **MySQL (phpMyAdmin)** as the database. The project manages NGO operations like donations, volunteers, events, and more.

---

## 🔧 Technologies Used

* **Frontend**: React.js, HTML5, CSS3, JavaScript
* **Backend**: Node.js, Express.js
* **Database**: MySQL (phpMyAdmin)
* **Styling**: Custom CSS

---

## 📁 Project Structure

```
ngo_project/
│
├── backend/ # Node.js + Express backend
│ ├── db.js # MySQL connection setup
│ ├── server.js # Entry point for backend
│ └── routes/ # API route handlers
│ ├── ngo.js
│ ├── donation.js
│ ├── volunteer.js
│ ├── event.js
│ ├── team.js
│ ├── bankAccount.js
│ └── volunteerEvent.js
│
├── frontend/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── NGO/
│ │ │ ├── NGOForm.js
│ │ │ ├── NGOList.js
│ │ ├── Donation/
│ │ │ ├── DonationForm.js
│ │ │ ├── DonationList.js
│ │ ├── Volunteer/
│ │ │ ├── VolunteerForm.js
│ │ │ ├── VolunteerList.js
│ │ ├── Event/
│ │ │ ├── EventForm.js
│ │ │ ├── EventList.js
│ │ ├── Team/
│ │ │ ├── TeamForm.js
│ │ │ ├── TeamList.js
│ │ ├── BankAccount/
│ │ │ ├── BankForm.js
│ │ │ ├── BankList.js
│ │ ├── VolunteerEvent/
│ │ │ ├── VolunteerEventForm.js
│ │ │ ├── VolunteerEventList.js
│ ├── pages/
│ │ ├── NGOPage.js
│ │ ├── DonationPage.js
│ │ ├── VolunteerPage.js
│ │ ├── EventPage.js
│ │ ├── TeamPage.js
│ │ ├── BankAccountPage.js
│ │ ├── VolunteerEventPage.js
│ ├── App.js
│ ├── index.js
│ └── App.css
│
├── database/
│ └── ngo_project.sql # MySQL DB dump for import
│
├── package.json (root OR separate) # npm setup
├── README.md
```



