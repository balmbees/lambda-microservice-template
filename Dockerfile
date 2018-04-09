FROM node:8.10.0

MAINTAINER Kurt Lee "kurt@vingle.net"

# Install system programs
RUN apt-get update && apt-get install -y zip build-essential curl openjdk-7-jdk memcached jq && apt-get clean

# Configure JAVA HOME
ENV JAVA_HOME /usr/lib/jvm/java-7-openjdk-amd64
