@ECHO OFF
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    https://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script for Windows
@REM ----------------------------------------------------------------------------

setlocal EnableDelayedExpansion

set WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain
set JAR_PATH=.mvn\wrapper\maven-wrapper.jar
set PROPS_PATH=.mvn\wrapper\maven-wrapper.properties

if not exist "%PROPS_PATH%" (
  echo Cannot find "%PROPS_PATH%"
  exit /B 1
)

if not defined MAVEN_PROJECTBASEDIR set "MAVEN_PROJECTBASEDIR=%CD%"

if not exist "%JAR_PATH%" (
  set WRAPPER_URL=https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.1/maven-wrapper-3.3.1.jar
  echo Downloading Maven Wrapper from !WRAPPER_URL!
  powershell -Command "Invoke-WebRequest -Uri !WRAPPER_URL! -OutFile %JAR_PATH%" || (
    echo Failed to download Maven Wrapper jar. Ensure PowerShell can reach the internet.
    exit /B 1
  )
)

set JAVA_EXE=java
if defined JAVA_HOME set "JAVA_EXE=%JAVA_HOME%\bin\java"

"%JAVA_EXE%" -Dmaven.multiModuleProjectDirectory="%MAVEN_PROJECTBASEDIR%" -classpath "%JAR_PATH%" %WRAPPER_LAUNCHER% %*
endlocal

