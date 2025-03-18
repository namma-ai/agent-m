# Use the latest Python base image
FROM python:31.13

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set environment variables (optional)
ENV SENDGRID_API_KEY=""
ENV AWS_REGION=""
ENV AWS_PINPOINT_APP_ID=""
ENV FROM_EMAIL=""

# Expose a port (if your service runs an API)
EXPOSE 5000

# Command to run the service (modify based on your app entry point)
CMD ["python", "services/notification_service.py"]