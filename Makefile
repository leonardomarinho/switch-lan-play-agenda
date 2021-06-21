database:
	docker-compose up -d switch-lan-play-db
.PHONY: worker

stop:
	docker-compose stop
.PHONY: stop

down:
	docker-compose down
.PHONY: down

all: 
	docker-compose up -d 
.PHONY: all