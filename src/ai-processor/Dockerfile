FROM python:3.13
WORKDIR /app
COPY . .
RUN pip install fastapi grpcio grpcio-tools temporalio
CMD ["python", "service.py"]
EXPOSE 5000
