# backend/main.py
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()

# Set up MongoDB connection (make sure MongoDB is running locally or provide your connection string)
client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.notioncards_db  # This is your MongoDB database

@app.get("/")
async def read_root():
    return {"message": "Hello, Notioncards!"}
