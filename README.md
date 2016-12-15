# node-docker-dev-prod
Boilerplate repo that (hopefully) actually works

## Details

Dev and prod environment. Should not require the host to have anything but
docker and docker-compose installed to work.

## Problems Solved (or tried to solve)

* Host system doesn't need node or npm
* Run the dev environment 100% in the container
* File and Folder permissions between host and container
* etc etc

Only building an image, should result in a production ready app. The same image
should also run as dev though by linking volumes source code can be changed on
the host.

Different docker-compose files for prod and dev for easy setup both in dev and
prod.

React front end with webpack, hotloading and all that for dev. 
