@echo off
echo Building and starting the Project...
cd /d "%~dp0"
:: Build Docker images
echo Building Docker images...
docker-compose build
:: Start all services
echo Starting all services...
docker-compose up -d
echo Deployment complete. Use "docker ps" to check running containers.
::exit