- Create Generic routes ----> DONE
- Added Middlewares
- Dockerization ----> DONE

## Dockerization

- Download docker image `docker pull postgres`
- Run docker image `docker run --name docker-postgres -e POSTGRES_PASSWORD=postgres -d postgres`

Username and password are set to postgres

### Create Dockerfile

Go to main directory

- Run `docker build -t pg-squilize-app .`
- list using `docker ps`
- Run the image `docker run -it -p 3000:3000 pg-squilize-app`
