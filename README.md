# JavaScript Notes API

API for JavaScript Notes.

### Technologies Used:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt

### To Run Locally

- Clone this repository with ```git clone https://github.com/Riccardo9190/javascript-notes-api.git```

- Access the API folder with ```cd javascript_notes_api```

- Install all dependencies with ```npm install```

- Create a file named '.env' on the root of the project with ```touch .env```

- Set the environment variables for API with: 

<br>

ㅤㅤ1)ㅤ```echo "JWT_TOKEN=aleatorystring" > .env```

ㅤㅤExample: ```echo "JWT_TOKEN=fwa98d739hr391r2j0921j029h0 > .env```
<p>
ㅤㅤ<em><strong>Note: After save this environment variable, you can't change it again. If you do that, JWT tokens will not work anymore.</strong></em>
</p>

<br>

ㅤㅤ
2)ㅤ```echo "MONGO_URL=mongodb://localhost/nameofdatabase" > .env```

ㅤㅤExample: ```echo "MONGO_URL=mongodb://localhost/todolistdatabase" > .env```

<br>

- Run the API with  ```npm run dev```

