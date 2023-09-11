# Javascript Notes API

API for JavaScript Notes.

### Technologies Used:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt

### To Run Locally

To run locally you need to have MongoDB installed and running on your machine. Don't have it? Get it [here](https://docs.mongodb.com/manual/installation/).
Once you have your MongoDB service running you can do the following steps:

- Clone this repository with ```git clone https://github.com/Riccardo9190/javascript-notes-api.git```

- Access the API folder with ```cd javascript-notes-api```

- Install all dependencies with ```npm install```

- Set the environment variables for API with: 

```shell
echo "JWT_TOKEN=your_aleatory_string_here" > .env
```
<em><strong>Note: After saving this environment variable, you can't change it again. If you do so, JWT tokens will no longer work.</strong></em>

```shell
echo "MONGO_URL=mongodb://localhost/your_databasename" >> .env
```


- Run the API with  ```npm run dev```
