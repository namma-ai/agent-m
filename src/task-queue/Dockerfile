FROM python:3.13
WORKDIR /app
COPY . .
RUN pip install celery redis
RUN pip install -r requirements.txt
CMD ["celery", "-A", "worker", "worker", "--loglevel=info"]
EXPOSE 6379
