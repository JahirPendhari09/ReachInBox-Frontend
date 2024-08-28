# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend  App using React with Typescript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Typescript
  - React
  - Tailwind css

## Deployment

The application is deployed on netlify and can be accessed [here](https://reachinbox-coding-assignment.vercel.app/).

## Demo Video :- 
----
## Login Page

![Screenshot (73)](https://github.com/user-attachments/assets/c997107d-5b27-4508-bb3f-7b9b12bbaaf9)


## Landing Page

![Screenshot (74)](https://github.com/user-attachments/assets/da9eacf0-a2a7-4697-8b98-f27bbb406323)


## Deshboard with Dark Mode

 ![Screenshot (75)](https://github.com/user-attachments/assets/82f5438e-6f34-4e7b-9b0c-417f25a771a7)


## Dashboard with Light Mode

![Screenshot (76)](https://github.com/user-attachments/assets/bc4bb7c0-8792-4d89-a069-aabf2516d42b)

## Delete Email 

![Screenshot (77)](https://github.com/user-attachments/assets/4af766f7-56f7-47ac-b37b-3b5ae9a8ae8d)

## Reply Email

![Screenshot (78)](https://github.com/user-attachments/assets/793269a7-a9ff-46e7-b04c-9bac785de6dc)


 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` git clone https://github.com/AmanS09/Reachinbox-Coding-Assignment.git  ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>
   

   ## Features 
   
  - Authentication
  - Get Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>All Emails from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Add Onebox Mail</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
   # Credits <br/>
   This project was developed by ```Jahir Pendhari``` as a part of ```Masai School``` training program.

   <p>Feel free to explore and integrate these endpoints into your application.</p>
  
