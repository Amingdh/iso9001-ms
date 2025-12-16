# iso9001-microservices

Scaffolding for the ISO 9001 non-conformity platform:

- Spring Boot `nonconformity-service` (MySQL, JPA, Feign-ready)
- Spring Cloud `api-gateway` (Keycloak JWT), `config-server`, `discovery-server` (Eureka)
- Node/NestJS `action-service` (MongoDB)
- Angular `frontend`
- Docker Compose with MySQL, MongoDB, Keycloak (admin/admin)

> This is a skeleton only; run `docker-compose up --build` after filling env values and running `npm install`/`mvn package` as needed.

