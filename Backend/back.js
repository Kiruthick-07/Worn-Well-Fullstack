const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection=require('./config');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.set('view engine','ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render('login');
});

app.get('/signup',(req,res)=>{
    res.render('signup');
});
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = {
            name,
            email,
            password: hashedPassword,
        };

        const userdata = await collection.create(data);
        console.log(userdata);
        res.status(201).send("Data inserted successfully");
    } catch (err) {
        if (err.code === 11000) { // Duplicate email
            res.status(400).send("Email already exists");
        } else {
            res.status(500).send("Error inserting data");
        }
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt for email:', email);
        
        // Find user by email
        const user = await collection.findOne({ email: email });
        console.log('User found:', user ? 'Yes' : 'No');
        
        if (!user) {
            console.log('No user found with email:', email);
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password valid:', isPasswordValid);
        
        if (isPasswordValid) {
            console.log('Login successful for user:', user.name);
            res.status(200).json({ 
                message: "Login successful", 
                user: { name: user.name, email: user.email }
            });
        } else {
            console.log('Invalid password for user:', email);
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: "Server error" });
    }
});

app.use('/api', routes);

const port =5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
