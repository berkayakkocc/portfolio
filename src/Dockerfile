# Use the official .NET 6.0 SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory
WORKDIR /src

# Copy the solution file
COPY src/Backend/Portfolio.sln ./

# Copy all project files
COPY src/Backend/Portfolio.API/Portfolio.API.csproj src/Backend/Portfolio.API/
COPY src/Backend/Portfolio.Core/Portfolio.Core.csproj src/Backend/Portfolio.Core/
COPY src/Backend/Portfolio.Infrastructure/Portfolio.Infrastructure.csproj src/Backend/Portfolio.Infrastructure/
COPY src/Backend/Portfolio.Shared/Portfolio.Shared.csproj src/Backend/Portfolio.Shared/

# Restore dependencies
RUN dotnet restore

# Copy the rest of the source code
COPY src/Backend/ .

# Build the application
RUN dotnet build --configuration Release --no-restore

# Publish the application
RUN dotnet publish src/Backend/Portfolio.API/Portfolio.API.csproj --configuration Release --no-build --output /app/publish

# Use the official .NET 6.0 runtime image for running
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

# Set the working directory
WORKDIR /app

# Copy the published application
COPY --from=build /app/publish .

# Expose the port
EXPOSE 8080

# Set environment variables
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Production

# Start the application
ENTRYPOINT ["dotnet", "Portfolio.API.dll"]
