import mysql2 from 'mysql2';

const connection = mysql2.createConnection(
     {
          host: 'localhost',
          database: 'loginSample',
          user: 'root',
          password: '1220'
     }
);

connection.connect((err) => {
     if(err){
          throw err;
     }else{
          console.log("Database has been connected successfully");
     }
} );

export default connection;