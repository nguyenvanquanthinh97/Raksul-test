# Raksul-test

first install the dependencies with command `npm install`

run commmand `npm run test` to trigger unit test.

run command `docker-compose up` to start up the app.

routes support:

```
http://localhost:3000/manufacturers
http://localhost:3000/models
http://localhost:3000/smartphones

```

## Example manual test

### Create manufacturer:

```
POST: http://localhost:3000/manufacturers
{
    "name": "Apple"
}
```

### Create model:

```
POST: localhost:3000/api/models
{
    "name": "Iphone X"
}
```

### Create smartphone:

```
POST: localhost:3000/api/smartphones
{
    "manufacturerName": "Apple",
      "modelName": "Iphone X",
      "dataMemory": "128GB",
      "manufactureYear": "2023",
      "OSVersion": "v19.0",
      "bodyColor": "black",
      "price": 1000
}
```
