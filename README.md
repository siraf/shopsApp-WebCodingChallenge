# shopsApp-WebCodingChallenge
This is my solution of a web coding challenge.
## Idea of the App
The task is to implement an app that lists shops nearby, using Spring Boot & MongoDB in the Backend and Angular in the frontend.
## Requirements

  1. Java - 1.8.x
  2. Maven - 3.x.x
  3. MongoDB - 3.x.x
  
## Steps to Setup

### 1. import the database:

Open dumb folder then execute the command below :
      ```
      mongorestore --db shops shops/
      ```
### 2. Build and run the backend app using maven
```
      cd shopsApp-backend
      mvn package
      java -jar target/shopsapp-1.0.0.jar
```
Alternatively, you can run the app without packaging it using :
  ```
      mvn spring-boot:run
  ```

The backend server will start at http://localhost:8080.

### 3. Run the frontend app using npm :
```
      cd shopsApp-frontend
      npm install
      npm start
 ```
 
The frontend server will run on http://localhost:4200.
