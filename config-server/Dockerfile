FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY pom.xml ./
RUN mvn -q -e -B -DskipTests dependency:go-offline
COPY src ./src
RUN mvn -q -e -B -DskipTests package
EXPOSE 8888
ENTRYPOINT ["java","-jar","target/config-server-0.0.1-SNAPSHOT.jar"]

