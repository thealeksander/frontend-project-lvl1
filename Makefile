install: # Устанавливает зависимости
	npm ci

brain-games: # запускает игру
	node bin/brain-games.js

publish: # публикация (обновление) пакетов в npm-репозитории
	npm publish --dry-run

.PHONY: publish