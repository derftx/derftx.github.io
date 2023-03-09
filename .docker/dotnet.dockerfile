FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /workspace

COPY ./dotnet/*.service/*.csproj .
RUN dotnet restore

COPY ./dotnet/*.service .
RUN dotnet publish --configuration Release --no-restore --output out

