# Проект: «Место» React-реализация

## Разработка проекта Mesto: React-реализация - портируем наш проект на рельсы библиотеки React ⚛️. Подключаем к проекту АПИ 🚀🚀🚀. Добавляем возможность регистрации и аторизации🔑🔑🔑.

![image](https://raw.githubusercontent.com/forgohill/react-mesto-auth/main/src/images/prew__st_3.jpg)

###  Часть 3. В созданом проекте подключаем к API , который дает возможность совершать регистрацию, и авторизацию 🏋️🏋️🏋️. Все это происходит путем записи, чтения и проверки JWL токена в localStorage 🛠️🛠️🛠️.

[Ссылка на проект](https://forgohill.github.io/react-mesto-auth/)

* Подключение в проект BrowserRouter.
* Добавялем в проект новые компоненты , Регистрация, Авторизация и попап ошибки.
* Создаем HOC — компонент высшего порядка.
* С помощью HOC делаем ProtectedRoute, для защиты от неавторизованных пользователей.
* Создаем взамиодействие с АПИ для регистрации и авторизации.

**О разработке**

В этой части проекта я поключил наш сайт к АПИ через который происходит регистрация и авторизация. Этот АПИ позволяет создавать контакт на своем сервере, присылает в ответ JWL токен, который можно записать в local Storage.

При помощи BrowserRouter я настроил доступ к страницам для регистрации и авторизации. При первой загрузке страницы происходит проверка, JWL токен в local Storage порверяется через АПИ сервера которму принадлежит, если токен валиден , то пользователь попадает на страницу с карточками, если нет то на страницу авторизации.

Так же я настроил всплытие попапа если пользователь введет уже зарегистрированый Email или возникнут другие проблемы. Так же я настроил всплытие попапа если при авторизации пользователь вводит неверный Email или пароль, так же попап всплывет если возникли другие ошибки.

**Технологии используемые в проекте**

* BrowserRouter
* Navigate
* HOC
* localStorage
* JWL


![image](https://raw.githubusercontent.com/forgohill/mesto-react/main/src/images/prew__st_2%400%2C75x.jpg)
###  Часть 2. Продолжение портирования и работа с API.
[Ссылка на проект](https://forgohill.github.io/mesto-react/)

* Создание в проекте глобального контекста.
* Добавялем управляемые компоненты.
* Рефакторинг: Вынесим компоненты. Улучшаем структуру проетка.
* Используем Ref.
* Используем поднятие стейта.

**О разработке**

В этой части проекта мы улучшим структуру, увеличим количество компонентов, а всё управление этими компонентами поднимем на верхний уровень.

Создадим глобальный контекст при помощий которого мы будем брать и использовать нужную нам информацию на необходимых уровнях компонентов. Конкретно мы будем на самом верхнем уровне из АПИ получать данные пользователя и на уровне карточки использовать эти данные для постановки лайка и дизлайка, а так же для отображения корзины для удаления карточки.

Создадим компоненты для каждого попапа, и внутри сделаем «управляемые компоненты».


**Технологии используемые в проекте**

* useState
* useEffect
* createContext
* useRef


![image](https://github.com/forgohill/mesto-react/blob/main/src/images/prew__st_1%400%2C75x.jpg)

###  Часть 1. Портирование на «Реакт».

* Установка React-app с помощью npx
* Портирование кода Java Script и HTML в новый репозиторий проекта «Место» React-реализация.
* Создание компонентов React
* Установили и настроили модуль `gh-pages` для развертывания проекта на хостинге `www.github.com`.


**О разработке**

В этом проекте была поставлена задача переставить готовый проект МЕСТО на рельсы библиотеки `«Реакт»`

Для этого я развернул новое приложение при помощи npm командой `npx create-react-app .`

Далее перенес верстку из проекта МЕСТО в головной компонент моего нового приложения а затем постепенно разбил всё на компоненты, не забывая закладывать логику взаимодействия.

**Технологии используемые в проекте**

* Библиотека «Реакт».
* Модульная система JS.
* JavaScript
* Node.js
* WebPack






# ИНФОРМАЦИЯ ПО УСТАНОВКЕ

## Этот проект был загружен с помощью [Create React App](https://github.com/facebook/create-react-app).

## Доступные скрипты

В каталоге проекта вы можете запустить:

### `npm start`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.

Страница будет перезагружена после внесения изменений.\
Вы также можете увидеть любые ошибки lint в консоли.

### `npm test`

Запускает средство запуска тестов в интерактивном режиме просмотра.\
Дополнительную информацию см. в разделе о [запуске тестов](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Создает приложение для производства в папке `build`.\
Он правильно объединяет React в производственном режиме и оптимизирует сборку для достижения наилучшей производительности.

Сборка минимизирована, а имена файлов включают хэши.\
Приложение готово к развертыванию!

### `npm run eject`
