#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/runtime:5.0-buster-slim-arm32v8 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim-arm32v8 AS build
WORKDIR /src
COPY ["NotiWorker/NotiWorker/NotiWorker.csproj", "NotiWorker/"]
RUN dotnet restore "NotiWorker/NotiWorker.csproj"
COPY . .
WORKDIR "/src/NotiWorker"
RUN dotnet build "NotiWorker.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "NotiWorker.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SolarNotiWorker.dll"]