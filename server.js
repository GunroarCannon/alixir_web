const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const multer = require("multer");
const fs = require("fs");
const upload = multer();

const port = 3000;


const transporter = nodemailer.createTransport({
    //host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    family:4,
    secure: false, // or 'STARTTLS'. Idk what that means
    auth: {
        user: 'gunroarcannon@gmail.com',
        pass: 'ufopnftxewlrtywk'
        //'kunninggunroar'
    }
});

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use(express.static(__dirname)); // serve static files from base directory
app.use(express.static("public"));
console.log("??");
// Routes? 

app.get('/index.html', (req, res) => { try{
    res.sendFile(path.join(__dirname, 'index.html'));
    //res.send('Alixir Backend');
    console.log('hmm');} catch(err){console.log(err);}
});

console.error('hh');
app.use((req, res, next) => {
  if (req.url === '/') {
    console.log('Root URL requested');
  } else if (req.url === '/index.html') {
    console.log('Index.html requested');
  } else {
    console.log(`Request received: ${req.method} ${req.url}`);
  }
  console.log(req.url+" requested");
console.log(req.body);
  next();
});
const mysql = require("mysql2/promise");
async function main(){
const db = await mysql.createConnection({
    host:"mysql-e52bd23-cit306.b.aivencloud.com",
    //"sql7.freemysqlhosting.net",
    port: 18031,
    database: 'defaultdb',
    user: 'avnadmin',
    password: 'AVNS_1IHx3y-4N3ew0uE8Vyz',
   // 'A1LJCG4Zaw',
    ssl: {
        rejectUnauthorized: true,
        ca:`-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUGelscbVg780A/gtJs7NGMngsH70wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvODRiMTUyY2MtZjM3Zi00MDZhLThmNWEtOTQwZDExZTdk
MWIzIFByb2plY3QgQ0EwHhcNMjQxMTI3MTk0MTUyWhcNMzQxMTI1MTk0MTUyWjA6
MTgwNgYDVQQDDC84NGIxNTJjYy1mMzdmLTQwNmEtOGY1YS05NDBkMTFlN2QxYjMg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANu99Ahl
3sptrlCC7vlfUOf9dki0b91LcyvDl0dop68Roh6Qa3GIKWsQ1KisARR4Q384iVKo
IIxXiZqIsomNJO+3a00QaR94BJj0afF9MR/327GNBuzgpN6kKmLytZp0eLB7d1mn
VDUqDQayepi23AlfaAn9gka1qHUPOIZUNMk51XvFx5xppzuoJugNrJ3ZJGKWsozX
Vlvoj8V7kd4S6tvVf2nYnldBdeR7BynSE3kl4kcCu2RcwuCrzhvpWieBwuQP7iKm
D5iiXxNJu/8+fwYa8grLgfSRCOcOoz95+NgzOl33SjB60KS6fCKDGVkGKKrzFJn3
z+VGFxJ9vXvohaqWbl/0VfR2P33vw7o0Y0J9/KZSmrSAEjv4M4D7lwE2DIuOg/M0
loDTVIqqLlPclE2tPfZEigxSkqqGAlQ5wF+hJL+AgjT+WWjaxDCPXfp9K0CioNMW
5qei65Geo5SYZp0SVbN2FHbjSP6evsEBENFe8n3wXGjZGQrJN2g80dQczwIDAQAB
oz8wPTAdBgNVHQ4EFgQUpQyDnoGJ1yy/KYL6xmKuQSZZYfIwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAKRsm9me7rjaBUvJ
RjiQWs3oh2RS0cIglYSxrJFPWhrsuwAiDZoLV4NJtjIJ0VKVFmERxtIRRXAe70YI
lJ6qg0eG4kl7QTrPzHTSiJMcvkEY3fBJ10jYfVKV14w7ChmazfU0mTSQcgwAg8LG
tgiVaKFAwalsuYYZmEHTmORUCocQDpAyB+WxxK+2Bff2A3efw02Hw930xW2DqJL1
aGrlG7Xi5kyUUwBmu1Icucpfrzdf9rfO4P1JTdoX89IoljkoXa06AVFu4irt2C14
2GyC/Z3atBH2C28U1TnAxJ6a7xfvXXL38WlIu0WDefGDdLj9zNZadjEZtExyDt/G
A8olPnMLEuSoNrC9o2p+fvpHk4PAtnPj9mk7UUvxNWb1llciR+RdgcpfH94IxD3Z
3m4+UNFlb2HiPbOipYCs4bQfnsawACnl4nBXXwm3eya3XMVzpKMds7/Rm/GdHkvy
KagYUJ912ZsC6RZdwFFh3pyLCyPcGbyIRP6YYS6OCVEhDJobbA==
-----END CERTIFICATE-----`// fs.readFileSync("ca.pem")
    },
    multipleStatements: true,
    //uth: 'mysql_native_password'
});
/*db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("he")
    }
});*/

// Create users table if not exists
const createTableQuery = `     
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  comments TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

db.query(createTableQuery).then( results => {
    console.log('Users table created or already exists');
  }).catch(err =>{
    console.error(err);
})



app.post('/contact', upload.none(),(req, res) => {
    const {Name, Email, Subject, Message} = req.body;
    //Validate form data
    
    /*var Name = " ame";
    var Email = "gunroarcannon@gmail.com";
    var Subject = "sib";
    var Message = "mes";*/
    console.log(req.body);
    console.log("stuff?"+Email+","+Name+","+Subject);
    if (!Name || !Email || !Subject || !Message) {
        return res.status(400).send({error:'Please fill out all fields'});
    }
    
    //using nodemailer to send email
    const mailOptions = {
        to : "gunroarcannon@gmail.com",
        from: Email,
        subject: Subject,
        text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({error:'Failed to send email'});
        } else {
            console.log('Email sent '+info.response);
            
    
            console.log("Form submitted");
            console.log(`Message, name: ${Message}, ${Name}`);
    
            res.send({message: 'Thank you for contacting Alixir!'});
        }
    });
    console.log("done?");
});

app.post('/register', upload.fields([]), (req, res) => {
  const { firstName, lastName, email, phone, address, city, state, comments } = req.body;
console.log(req.body);
  // Validate form data
  if (!firstName || !lastName || !email || !phone || !address || !city || !state) {
    console.log("nnoo fields incomplete");
    return res.status(400).send({ error: 'Please fill out all fields' });
  }

  // Check if email already exists
  const emailQuery = `SELECT * FROM users WHERE email = ?`;
  db.query(emailQuery, [email]).then ( results => {
    
console.log(results);
    if (results[0].length > 0) {
        
      return res.status(400).send({ error: 'Email already exists' });
    }

    // Check if name already exists (optional)
    const nameQuery = `SELECT * FROM users WHERE firstName = ? AND lastName = ?`;
    db.query(nameQuery, [firstName, lastName]).then(results => {
        if (results.length > 0) {
       //nah don't check return res.status(400).send({ error: 'Name already exists' });
      }

      // Insert form data into SQL database
      const query = `INSERT INTO users (firstName, lastName, email, phone, address, city, state, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(query, [firstName, lastName, email, phone, address, city, state, comments]).then ( results => {
        
           //using nodemailer to send email
    const mailOptions = {
        from : "gunroarcannon@gmail.com",
        to: email,
        subject: "Artlixir Registration",
        text: `Thank you for registering, you will recieve your ticket shortly.`,
        //text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
           // res.status(500).send({error:'Failed to r);
        } else {
            console.log('Email sent '+info.response);
          
          
        }
    });
    res.send({ message: 'Registration successful' });
    
        
      }).catch(err => {
       if (err) {
          console.error(err);
          return res.status(500).send({ error: 'Failed to register' });
        }
    })
    .catch(err => {
    if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Failed to register' });
      }

    
    });
  }).catch(err => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Failed to register' });
    }
})
});
});}
main();
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({error: 'Internal Server Error'})
});


app.listen(port, () => {
    console.log(`Server started on the wonderous port ${port}`);
});

module.exports = app;
//
