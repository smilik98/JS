# Описание задания

Изучить основы работы DroneCI

## Основная задача:

Создать свой отдельный репозиторий. Включить его в интерфейсе DroneCI. Задание выполняется в нём.
Создать `.drone.yml` файл c `pipeline` на коммит в мастер.
По выполнению задания положите в папку `username/19_ci` файл `complete_task.md` со сслыкой на ваш репозиторий.

### Pipeline на коммит в мастер
Билдит `docker-image` на основе вашего приложения, заливает его на докерхаб и разворачивает его с помощью `ansible` на `app.drone-demo.pw` на нужный порт.

### Приложение
Простной сервер на `Koa`, который выводит ваше имя на любой запрос.
```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'MY_NAME';
});

app.listen(PORT);
```

### Порты на сервере, на которые вы должны задеплоить приложение

| Имя    | PORT |
|--------|------|
| Андрей | 3000 |
| Леша   | 3500 |
| Ваня   | 4000 |
| Марина | 4500 |
| Алина  | 5000 |
| Виталя | 5500 |

### IP-адреса серверов

| domain              | IP              |
|---------------------|-----------------|
| drone.drone-demo.pw | 178.128.246.154 |
| app.drone-demo.pw   | 128.199.48.110  |

## Пример `.drone.yml`
```yaml
pipeline:
  publish-api-docker-image:
    image: plugins/docker
    secrets: [ docker_username, docker_password ]
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    repo: paralect/ship-site-api
    tags:
      - latest
      - ${DRONE_BRANCH}
    dockerfile: ./api/Dockerfile
    context: ./api/
    when:
      branch: ["master", "production"]
      event: [push]

  deploy-app:
    image: williamyeh/ansible:ubuntu16.04
    secrets: [ ssh_key, docker_username, docker_password, docker_email ]
    commands:
      - mkdir -p ~/.ssh/
      - echo -n "$SSH_KEY" >> ~/.ssh/id_rsa_app && chmod 600 ~/.ssh/id_rsa_app
      - cp ./deploy/vars/credentials-template.yml ./deploy/vars/credentials.yml
      - cd ./deploy && ./bin/drone-deploy-production.sh
    when:
      branch: ["master"]
      event: [push]

branches: [ master, "*:master" ]
```

## Приватный ключ для подключения к серверам
```
-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
```

## Advanced
### :fire: Pipeline на pull request
Выполняет линтинг кода в репозитории. (используя `eslint`).
