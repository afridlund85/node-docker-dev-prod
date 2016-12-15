FROM mongo:3.4

COPY servers.json users.json /

CMD mongoimport --host db --db leaf --collection users --type json --file /users.json --jsonArray
