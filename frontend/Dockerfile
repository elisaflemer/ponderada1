# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the container port (adjust if your Vite app uses a different port)
EXPOSE 5173

# Run the application using npm run dev (during development)
CMD ["npm", "run", "dev"]