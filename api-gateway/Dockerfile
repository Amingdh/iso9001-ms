FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY pom.xml ./
RUN mvn -q -e -B -DskipTests dependency:go-offline
COPY src ./src
RUN mvn -q -e -B -DskipTests package
EXPOSE 8080
ENTRYPOINT ["java","-jar","target/api-gateway-0.0.1-SNAPSHOT.jar"]

