# Use official Python 3.13 image
FROM python:3.13
# Set working directory
WORKDIR /app
# Copy project files
COPY . .
# Install dependencies
RUN pip install -r requirements.txt
# Expose port
EXPOSE 8001
# Run application
CMD ["python", "app.py"]
