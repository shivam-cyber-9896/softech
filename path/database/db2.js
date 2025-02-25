const { MongoClient } = require('mongodb');

// Correct MongoDB Connection String
const url = 'mongodb+srv://shivam:shivam123@cluster0.36vtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(url);
const dbName = 'our';

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('✅ Connected successfully to MongoDB');
        
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
    }
}

module.exports = { main };
