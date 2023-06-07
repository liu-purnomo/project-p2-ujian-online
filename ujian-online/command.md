npm init -y

npm i express pg sequelize dotenv bcryptjs cors jsonwebtoken

npm i -D nodemon -D sequelize-cli

sequelize init

sequelize model:create --name User --attributes username:string,email:string,password:string,phone:string,name:string,gender:string,avatar:string,role:string,status:string

sequelize model:create --name Question --attributes question:text,option1:text,option2:text,option3:text,option4:text,answer:string,explanation:text

sequelize model:create --name Exam --attributes title:string,description:text,totalQuestions:integer,duration:integer,status:string,pin:string

sequelize model:create --name Session --attributes timeStop:date,ExamId:integer,UserId:integer

sequelize model:create --name QuestionGroup --attributes questionNumber:string,SessionId:integer,UserId:integer,QuestionId:integer

sequelize model:create --name Answer --attributes QuestionNumber:integer,answer:string,isCorrect:boolean,QuestionId:integer,ExamId:integer,UserId:integer

sequelize model:create --name Grade --attributes totalQuestions:integer,totalCorrect:integer,grade:float,ExamId:integer,UserId:integer

sequelize db:drop

sequelize db:create

sequelize db:migrate

touch app.js .env .env_example .gitignore
