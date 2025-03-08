# Agentic AI Workflow Orchestration System
## 📌 Overview
Agentic AI is an **event-driven, microservices-based AI automation platform** that enables scalable and modular AI processing. It leverages **Temporal Workflow Orchestration, gRPC for inter-service communication, WebSockets for real-time updates, and an event bus for distributed messaging**.
This system is designed for **AI task automation, large-scale data processing, and intelligent workflow execution**.
---
## 📌 Microservices Breakdown
| Service | Description |
|---------|------------|
| **Frontend** | React.js UI for interacting with AI workflows. |
| **API Gateway** | Node.js (Express) API Gateway that routes requests to backend services. |
| **Workflow Orchestrator** | Temporal-based Python service to manage AI workflows. |
| **AI Processor** | gRPC-based AI inference service. |
| **Data Preprocessing** | Handles data cleaning and transformation. |
| **Event Bus** | gRPC-based pub/sub messaging system. |
| **Logging Service** | ELK Stack (Elasticsearch, Logstash, Kibana) for system-wide observability. |
| **WebSocket Service** | Real-time event streaming for UI and services. |
| **Auth Service** | Authentication & authorization using JWT & OAuth2. |
| **Storage Service** | MinIO (S3-Compatible) storage for AI models & logs. |
| **Task Queue** | Celery-based job queue for background processing. |
| **Database** | PostgreSQL for structured data. |
| **Vector Database** | PGVector for AI embeddings & vector search. |
| **Temporal Workflow Engine** | Manages distributed AI workflows & retries. |
| **Event Bus** | Kafka-based pub/sub messaging system for event-driven communication. |
| **Kafka & Zookeeper** | Distributed message broker ensuring asynchronous microservices communication. |

---
## 📌 Installation & Setup
### **1. Clone the Repository**
```sh
git clone https://github.com/namma-ai/agentic-ai.git
cd agentic-ai