Тестовое задание для FUNBOX
======
Level 1
------
### Q1
Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой...
* С точки зрения пользователя:  
:heavy_check_mark:хорошая верстка - Интерфейс радует глаз, все корректно отображается на любом устройстве, все работает так, как задумано, у меня под рукой весь необходимый функционал и я понимаю на какие кнопки мне нажимать или какие ползунки дергать для того чтобы получить то, что я хочу.  
:x:плохая верстка - Не могу разобрать шрифт... (желтый шрифт на черном фоне?!), нажимаю на кнопку, но ничего не происходит... А как на этом сайте оплатить товар? Никак не могу найти кнопку... Нажимаю на кнопку "Моя корзина", а переходит в личный кабинет... Запускаю сайт на телефоне и все кнопки куда-то за экран уезжают...
* С точки зрения менеджера проекта:  
:heavy_check_mark:хорошая верстка - Соответствует требованиям заказчика, заказчик доволен качеством, за весь срок создания продукта, заказчик ничего не доплачивал и продукт был сделан в указанные заказчиком сроки.  
:x:плохая вестка - Сроки верстки сдвигались, заказчику приходилось доплачивать, верстка не соответствует требованиям заказчика. 
* С точки зрения дизайнера:  
:heavy_check_mark:хорошая верстка - В идеале, UI и UX дизайном занимаются разные люди. В UI отлично подобраны цвета, шрифты, элементы дизайна гармонируют друг с другом. Параметры шрифта меняются в зависимости от того, заголовок это или абзац, или что-то еще. UX прозрачен и удобен для пользователя, пользователь всегда понимает куда ему нужно нажать для того чтобы получить то, что он хочет.  
:x:плохая вестка - UI и UX дизайном занимается один и тот же человек, дизайн непонятен для пользователя(он не понимает куда ему нажимать для того чтобы получить то, что он хочет). Везде используется один и тот же шрифт без каких либо параметров, цвета плохо подобраны (желтый шрифт на черном фоне?!).
* С точки зрения верстальщика:  
:heavy_check_mark:хорошая верстка - Верстка соответствует макету(который предоставил дизайнер), адаптируется под разные разрешения экрана и кроссбраузерна, то есть, корректно отображается на всех устройствах и во всех браузерах, используются теги, которые позволяют интерфейсу быть "доступным" для широкой аудитории (cюда входят люди с нарушениями зрения, слуха, подвижности или когнитивных функций).  
:x:плохая верстка - Верстка не соответствует макету, все куда-то съезжает/уезжает на других экранах/устройствах, не используются тэги доступа(туда же атрибут alt).
* С точки зрения клиентского программиста:  
:heavy_check_mark:хорошая верстка - Проверка форм на клиенте, во избежание отправления, а после обработки пустых/некорректных форм на сервере. Все запросы с клиента должны быть асинхронными, то есть, не должны замораживать интерфейс(тоже самое касается обработки большого количества данных). При выполнении каких либо длительных действий на клиенте, например, обработке большого количества данных, необходимо дать знать об этом пользователю.  
:x:плохая верстка - Пользователь может отправлять пустые формы и они никак не обрабатываются на ошибки или неккоректные вставки. Каждый раз, при обработке данных или отправке запроса и ожидания ответа от сервера - интерфейс замораживается.
* С точки зрения серверного программиста:  
:heavy_check_mark:хорошая верстка - API всегда знает, что ожидать от клиента, она знает, это будет json, а не пара сапог. Ей не придется обрабатывать пустые формы или формы с неккоректными символами, например, API знает, что может прийти только число, только число и приходит, не более. Все запросы от клиента отправляются не слишком часто и не загружают сервер.  
:x:плохая верстка - API приходиться дополнительно парсить форму и определять, валидна она или нет. Каждую секунду на API приходит запрос о текущем времени, и к этому времени постоянно нужно применять какую-то сложную математическую формулу и отдавать обратно клиенту в виде json. Абсолютно все данные обрабатываются на сервере.
### Q2
Необходимо делать максимально универсальные компоненты (например, если вы работаете на React). Желательно использовать css модули с препроцессорами (less, scss и др.). Не перезаписывать одно свойство разными классами (когда свойство меняют 5 разных классов), лучше исправить старый класс. Избегать вложенности селекторов. Знать, но не использовать гриды, потому что есть IE в котором они не работают. Стараться на максимум переиспользовать стили. Ну и конечно, при написании бэкенда построить диаграммы запросов и ответы на них, составить хорошую документацию по API.  
У меня небольшой опыт: Работая в корпоротивном университете СберБанка, мне необходимо было создать полноценный сервис для сотрудников банка, к сожалению, в связи с конкуренцией банков, мне необходимо было подписать договор о неразглашении, поэтмоу я не могу рассказать что конкретно это было, а вот описать технологии могу. Для фронта я использовал KonvaJS, для бэкенда Django, для того чтобы собрать все скрипты в один, я использовал Webpack. В каждом своем проекте я стараюсь использовать методологию БЭМ.
### Q3
Для каждого HTML элемента необходимо продумывать стили таким образом, чтобы элементы адаптировались под любое разрешение экрана. Для создания адаптивного дизайна я использовал относительные велечины и медиа запросы. В качестве основных технологий я использую связку React+Redux, с недавнего времени в проектах стараюсь использовать typescript вместо js. Для проверки на адаптивность я использую инструменты разработчика в Google Chrome (просто меняю разрешение экрана в браузере через инструменты, можно выбрать конкретную модель телефона), при работе над каким либо проектом, стараюсь настроить поддержку всех экранов и браузеров.
### Q4
Я использую текстовой редактор VS Code и в нем есть хорошие расширения для отладки кода, но я использую стандартный отладчик, или отладчик из инструментов Google Chrome. К такой отладке я прибегаю только в совсем сложных случаях, что бывает редко, поэтому обычно хватает функции console.log().
### Q5
Я бы использовал инструменты разработчика в Google Chrome для просмотра содержимого страницы, в этих инструментах есть консоль, которая может отображать ошибки, если ошибок в консоле нет, то можно посмотреть стили, может там чего-то не хватает для корректного отображения.
### Q6
Я бы сказал дизайнеру, что в макете не показано, как должны выглядеть интерактивные элементы при наведении мыши, в этом случае могут быть следующие варианты: либо это многостраничный сайт и макет идет на одну страницу, в этом случае дизайнер может мне сказать, что можно взять поведение с других страниц, либо дизайнер скажет чтобы я сымпровизировал, так как он слишком нагружен (ведь дизайнер может работать на нескольких проектах в одной компании), в таком случае, мне придется импровизировать и подходить показывать либо дизайнеру, либо тимлиду, либо другому старшему разработчику свою импровизацию до тех пор, пока кто нибудь из них ее не одобрит.
### Q7
Главный источник знаний по JavaScript - https://learn.javascript.ru/, когда нужно что-то быстро подсмотреть - https://www.w3schools.com/. Замечательный сайт по верстке - https://webref.ru/. Если необходимо погрузиться глубоко в какую либо технологию, предпочитаю читать официальную документацию. Также есть несколько хороших YouTube каналов, такие как [Владилен Минин](https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw), [webDev](https://www.youtube.com/channel/UCE9ODjNIkOHrnSdkYWLfYhg), [Programming with Mosh](https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA), [Диджитализируй!](https://www.youtube.com/channel/UC9MK8SybZcrHR3CUV4NMy2g), на этих каналах есть курсы по HTML5, CSS, JS, TypeScript, React, Redux и тд.
Для меня больше ближе JS-программирование, а если точнее - бэкенд, но я считаю, что хороший веб разработчик должен уметь брать на себя ответственность за обе стороны, поэтому я решил изучить HTML/CSS для расширения своего профиля.   
Мне интересно создавать игры, на моем gitlab вы также сможете увидеть игровой псевдо-2d движок. Также нравится заниматься DevOps, на данный момент у меня есть свой проект majnes.ru (игровой Minecraft сервер), который я полностью настраивал сам, включая настройку серверных портов через ufw(если нужна более гибкая настройка, использую iptables), а также nginx и тд.
### Q8
Занимаюсь в тренажерном зале уже около 5-ти лет, без вредных привычек. Люблю слушать подкасты про игровую индустрию, иногда играю сам. Окончил Московскую школу под номером 1234 (с углубленным изучением английского языка) с отличием, закончил университет РУДН на кафедре математики.
Одна из первых моих работ, сервис для корпоротивного универститета СберБанка - https://github.com/ramory-l/django-project, запустить его не получиться, так как этот проект связан с виртуальной школой от СберБанка и вообще приватный, но я считаю, что стоит показать хотя бы код этого проекта для более полноценной оценки моей компетенции. https://github.com/ramory-l/Matcha - только начал этот проект, собираюсь делать веб приложение вроде Tinder. Испытывал привязку React-Native+Redux+Ts - https://github.com/ramory-l/React-Redux-TypeScript-with-api. Совместный проект с другом, сайт с торрент фильмами - https://github.com/Texetomg/Hyper-piper/tree/Webtorrent. 

Level 2  
------  
Для запуска проекта необходимо зайти в папку через терминал и написать команду **npm install**, а затем **npm start**.
