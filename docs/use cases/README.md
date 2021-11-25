## Діаграма прецедентів

@startuml

skinparam actorStyle awesome

'User

(MCSS1\nРеєстрація) as (MCSS1)


(MCSS2\nАвторизація) as (MCSS2)

(MCSS3\nПошук данних) as (MCSS3)

(MCSS4\nЕкспорт даних за ідентифікатором) as (MCSS4)


User --> (MCSS1)

User -up-> (MCSS2)

User -left-> (MCSS3)

User --> (MCSS4)

Admin -up-|> User

Admin --> (MCUA1)

Admin --> (MCAS1)

Admin --> (MCAS2)

Admin --> (MCAS3)

'Admin

(MCUA1\nАдміністратор отримує запит) as (MCUA1)

(MCUA2\nАдміністратор додає нове \nджерело інформації) as (MCAS1)

(MCUA3\nАдіміністратор будує графіки \nза оновленими даними) as (MCAS2)

(MCUA4\nАдміністратор оновлює форму \nдля фільтрування інформації)  as (MCAS3)

@enduml

[(переглянути uml код діаграм)](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/use%20cases/README.md)


## Сценарії використання системи

### [**ID:** MCUS1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus1)

ОСНОВНИЙ СЦЕНАРІЙ: 

@startuml

|Користувач|
start
: натискає кнопку реєстрації;
|Система|
:отримує запит на реєстрації;
:надсилає форму для реєстрації;
|Користувач| 
:наводить свої логін, пароль та електронну пошту;
:натискає кнопку для відправки системі своїх даних;
|Система| 
:отримує дані для реєстрації;
note right #ffaaaa
<b> mcus1_ex1 Аккаунт з даними
<b> для реєстрації вже існує
end note
:створює обліковий запис на цього користувача;
:надсилає повідомлення про успішну реєстрацію;
|Користувач|
stop

@enduml

### [**ID:** MCUS2](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus2)

ОСНОВНИЙ СЦЕНАРІЙ: 

@startuml

|Користувач|
start
:натискає на кнопку авторизації;
|Система|
:надсилає користувачу форму для вводу логіна та пароля;
|Користувач| 
:вводить свої логін та пароль у форму;
:надсилає системі свої дані;
|Система| 
:проводить валідацію даних користувача;
note right #ffaaaa
<b> mcus2_ex1 Аккаунт з даними
<b> для авторизації не існує
end note
:надає користувачу доступ до акаунту;;
|Користувач|
:отримує доступ;
stop

@enduml

### [**ID:** MCUS3](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus3)

ОСНОВНИЙ СЦЕНАРІЙ:

@startuml

|Користувач|
start
:натискає кнопку пошуку(запиту даних);
|Система|
:надає користувачу форму з фільтрами;
|Користувач| 
:обирає певні пункти з фільтру;
|Система|
:обробляє запит користувача за вказаними фільтрами;
:надає користувачу форму для вводу періоду;
|Користувач|
:вказує період (проміжок часу) \nз якого необхідно здійснювати пошук;
|Система|
:аналізує проміжок часу, вказаний користувачем;
:проводить валідацію отриманого запиту;
note right #ffaaaa
<b> mcus3_ex1 Система не змогла
<b> розпізнати запит користувача
end note
:виконує остаточний збір інформації за запитом;
:надсилає користувачу кінцевий результат;
|Користувач|
stop

@enduml

### [**ID:** MCUS4](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus4)

ОСНОВНИЙ СЦЕНАРІЙ:
  
@startuml
  
|Користувач|
start
:вводить ідентифікатор зі звіту до системи;
|Система|
:аналізує отриманий ідентифікатор;
note right #ffaaaa
<b> mcus4_ex1 Система не змогла розпізнати
<b> ідентифікатор зі звіту користувача
end note
:виконує пошук за заданим ідентифікатором;
:надає користувачу вибір формату файла для експорту;
|Користувач| 
:обирає бажаний формат файла для експорту;
:надсилає системі обраний формат файла;
|Система|
:завантажує необхідні дані і надає користувачу файл для експорту;
|Користувач|
:завантажує файл;
stop

@enduml

### [**ID:** MCUA1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcua1)

ОСНОВНИЙ СЦЕНАРІЙ:

@startuml

|Користувач|
start
:заповнює форму для зв'язку з адміністратором;  
:вказує причину звернення і описує проблему;
|Адміністратор| 
:отримує повідомлення користувача;
note right #ffaaaa
<b> mcua1_ex1 Користувач не зміг
<b> зв'язатися з адміністратором
end note
:зв'язується з користувачем для уточнення інформації;
:вирішує проблему;
stop

@enduml

### [**ID:** MCAS1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcas1)

ОСНОВНИЙ СЦЕНАРІЙ:

@startuml

|Адміністратор|
start
:надає системі нові джерела інформації;
|Система|   
:перевіряє нові джерела на коректність;
note right #ffaaaa
<b> mcas1_ex1 Додані джерела
<b> не пройшли валідацію
end note
:надсилає адміністратору форму для заповнення;
|Адміністратор| 
:заповнює форму за характеристиками нових джерел;
:надсилає заповнену форму системі;
stop

@enduml

### [**ID:** MCAS2](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcas2)

ОСНОВНИЙ СЦЕНАРІЙ:

@startuml

|Адміністратор|
start
:робить запит на статистику запитів користувачів;
|Система|   
:отримує запит;
:аналізує дані;
note right #ffaaaa
<b> mcas2_ex1 Система не змогла знайти
<b> запити за обраний проміжок часу
end note
:надає дані у впорядкованому вигляді;
|Адміністратор| 
:будує графіки і таблиці на основі цих даних;
:публікує статистику;
stop

@enduml

### [**ID:** MCAS3](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcas3)

ОСНОВНИЙ СЦЕНАРІЙ:

@startuml

|Адміністратор|
start
:дає запит на зміну форми, яку заповнює користувач для \nфільтрування інформації;
|Система|   
:иконує пошук відповідної форми;
note right #ffaaaa
<b> mcas3_ex1 Форма запитана адміністраторам не знайдена
end note
:надає доступ до зміни форми;
|Адміністратор| 
:редагує фільтри;
|Система|   
:зберігає зміни в формі;
|Адміністратор| 
:перевіряє нові зміни на справність;
stop

@enduml