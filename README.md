# GraphQL, Koa, and SQL Server

## Bief
Koa is a quite new framework to create light-weight server-side APIs using the NodeJS runtime. It was created by the team behind Express and leverages asynchronicity, better error handling and more predictive error handling.

### About The Workshop
In this workshop we'll be interacting with several virtualization, front and backend technologies and the SQL Server RDBMS.

### Technology Stack
|Area|Technology|Tag|Desccription|Commands|
|---|---|---|---|---|
|Virtualization|[Docker](https://www.docker.com)|-|A containerization technology that allows you to virtualize machines based of off images.| **docker pull:** `docker pull mcr.microsoft.com/mssql/server:2019-CU4-ubuntu-16.04`<br><br>**docker run:** `docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<super secure password' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-CU4-ubuntu-16.04`<br><br>**docker ps:** `docker ps --all`<br><br>**docker stop:** `docker stop <container ID>`<br><br>**docker rm:** `docker rm <container ID>`|
|Version Control System|[Git](https://git-scm.com)|-|A distributed version control system.|**git clone:** `git clone <repository URL>`<br><br>**git tag:** `git tag -n9`<br><br>**git checkout:** `git checkout <tag name>`<br><br>|
|Database|[Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15), [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2019)|v0.1.0|Azure Data Studio is a MSSQL database client.<br><br>SQL Server is a RDBMS created by Microsoft.|-|
|Backend|[Koa](https://koajs.com/), [Nodemon](https://nodemon.io/), [GraphQL](https://graphql.org/)|v0.2.0|Koa is a new framework developed by the Express team and that runs on top of the NodeJS runtime.<br><br>Nodemon is a files watcher for server reload at development time.<br><br>GraphQL is a graphs based query language that can query multiple sources such as databases, APIs, or documents.|**npm i (from root folder):** `npm i`<br><br>**npm i nodemon (from root folder):** `npm i nodemon -g`<br><br>**nodemon index.js (from ./server folder):** `nodemon index.js`<br><br>|
|Frontend|[NextJS](https://nextjs.org/), [Tailwind](https://tailwindcss.com/)|v0.3.0|NextJS is A JAMSTACK based framework for frontend.<br><br>Tailwind is a CSS framework based on functional programming principles.|**npm i (from ./client folder):** `npm i`<br><br>**npm run (from ./client folder):** `npm run dev`<br><br>|

