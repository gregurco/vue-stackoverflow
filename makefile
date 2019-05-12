up:
	docker-compose up -d

stop:
	docker-compose stop

rebuild:
	docker-compose up -d --build --force-recreate

logs:
	docker-compose logs -f

app:
	docker-compose exec app sh