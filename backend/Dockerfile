# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the container port (adjust if your backend uses a different port)
EXPOSE 5000

# Run the backend application when the container starts
CMD ["node", "index.js"]