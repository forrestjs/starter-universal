#
# Simple interface to run Docker!
#

# Running container's name
name?=forrest-starter-universal

# Docker image tag name
tag?=${name}

# Docker Development Options
cmd?=build
api?=8080
app?=3000



###
### Use Docker for Production
### =========================
###

# Build the project using cache
image:
	docker build -t ${tag} .

# Spins up a container from the latest available image
# this is useful to test locally
prod: image
	docker run \
		--rm \
		--name ${name} \
		-p 8080:8080 \
		${name}

# Like start, but in background
# classic way to launch it on a server
boot: image
	docker run \
		-d \
		--name ${name} \
		-p 8080:8080 \
		${name}

# stop the running container
stop:
	docker stop ${name}

remove:
	docker rm ${name}


down: stop remove

# Gain access to a running container
ssh:
	docker exec \
		-it \
		${name} \
		/bin/sh




###
# Use Docker for Development
# ==========================
#
#     # Start the application on default ports:
#     make dev
#
#     # Start the application on custom ports:
#     make dev api=9999 app=3001
#

dev:
	docker run \
		-it \
		--rm \
		--name "${name}-dev" \
		-v $(shell pwd)/.docker-volumes/node_modules:/usr/src/app/node_modules:cached \
		-v $(shell pwd)/.docker-volumes/node_build:/usr/src/app/node_build:cached \
		-v $(shell pwd)/package.json:/usr/src/app/package.json:delegated \
		-v $(shell pwd)/yarn.lock:/usr/src/app/yarn.lock:delegated \
		-v $(shell pwd)/jsconfig.json:/usr/src/app/jsconfig.json:delegated \
		-v $(shell pwd)/src:/usr/src/app/src:delegated \
		-v $(shell pwd)/ssr:/usr/src/app/ssr:delegated \
		-v $(shell pwd)/public:/usr/src/app/public:delegated \
		-v $(shell pwd)/index.js:/usr/src/app/index.js:delegated \
		-v $(shell pwd)/.env:/usr/src/app/.env:delegated \
		-v $(shell pwd)/pages:/usr/src/app/pages:delegated \
		-p ${api}:8080 \
		-p ${app}:3000 \
		-w /usr/src/app \
		node:12.2 \
		yarn start:dev

###
# Run any npm script over a running development instance
#
#     make exec cmd=build
#
exec:
	docker exec -it "${name}-dev" yarn ${cmd}
