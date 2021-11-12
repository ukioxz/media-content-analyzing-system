## Діаграма прецедентів

@startuml
skinparam actorStyle awesome

'User
(MCSS1. Реєстрація) as (MCSS1)
(MCSS1_EX1. Дані користувача вже є в системі) as (MCSS1_EX1)
(MCSS2. Авторизація) as (MCSS2)
(MCSS2_EX1. У системі відсутні дані користувача, авторизація неможлива) as (MCSS2_EX1)
(MCSS3. Пошук данних) as (MCSS3)
(MCSS3_EX1. Користувая ввів невалідні дані) as (MCSS3_EX1)
(MCSS4. Система виконує пошук та аналіз контенту) as (MCSS4)
(MCSS4_EX1. В системі відсутня інформація) as (MCSS4_EX1)
(MCSS4_EX2. Неможливо обробити дані) as (MCSS4_EX2) 
(MCSS5. Користувач експортує дані за індефікатором) as (MCSS5)
(MCSS5_EX1. Індефікатор невалідний. Пошук немоєливий) as (MCSS5_EX1)


User --> (MCSS1)
(MCSS1) ..> (MCSS1_EX1)
User -up-> (MCSS2)
(MCSS2) .up.> (MCSS2_EX1)
User -left-> (MCSS3)
(MCSS3) .left.> (MCSS3_EX1)
User --> (MCSS4)
(MCSS4) ..> (MCSS4_EX1)
(MCSS4) ..> (MCSS4_EX2)
User -right-> (MCSS5)
(MCSS5) .right.> (MCSS5_EX1)

Admin -up-|> User
Admin --> (MCUA1)
(MCUA1) ..> (MCUA1_EX1)
Admin --> (MCUA2)
(MCUA2) ..> (MCUA2_EX1)
'Admin
(MCUA1. Адміністратор отримує запит) as (MCUA1)
(MCUA1_EX1. Неможливість вирішити проблему) as (MCUA1_EX1)
(MCUA2. Адміністратор обробляє запит) as (MCUA2)
(MCUA2_EX1. Неможливість вирішення проблеми) as (MCUA2_EX1)
@enduml

<br>

## Сценарії використання системи

### [**ID:** MCUS1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus1)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUS1_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)

<br>

### [**ID:** MCUS2](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus2)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUS2_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)

<br>

### [**ID:** MCUS3](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus3)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUS3_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)

<br>

### [**ID:** MCUS4](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus4)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUS4_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCSS4_EX2: <br>
[(переглянути uml код діаграми)]()

(схема)

<br>

### [**ID:** MCUS5](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus5)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUS5_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)

<br>

### [**ID:** MCUA1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcua1)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUA1_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)

<br>

### [**ID:** MCUA2](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcua2)

ОСНОВНИЙ СЦЕНАРІЙ: <br>
[(переглянути uml код діаграми)]()

(схема)

СЦЕНАРІЙ З УРАХУВАННЯМ MCUA2_EX1: <br>
[(переглянути uml код діаграми)]()

(схема)
