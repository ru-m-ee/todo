# Use the official Python image as base
FROM python:3.10

# Set the working directory in the container
WORKDIR /home/rumee/frontend_backend/backend/djangoproject

# Copy requirements.txt to the working directory
COPY requirements.txt .

# Upgrade pip within the virtual environment
RUN pip install --upgrade pip

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy all files from the current directory to the working directory
COPY . .

# Expose port 8000
EXPOSE 8000

# Command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
