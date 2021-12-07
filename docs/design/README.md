# Проєктування бази даних

## Модель бізнес об'єктів

@startuml
Access "1,1" -- "0,*" Account
Account *-- Account.login
Account *-- Account.password
Account *-- Account.name
Account *-- Account.role
Access "1,1" -u- "0,*" DataStream : Administrator
DataStream "1,1" -- "0,*" Beat
DataStream <|-- DataStream.name
DataStream <|-- DataStream.descryption
DataStream <|-- DataStream.entryPoint
DataStream <|-- DataStream.beats
DataStream "1,1" -- "0,*" Report
DataStream "0,*" -- "1,1" Services
Services "0,*" -- "1,1" Service
Service *-- Service.name
Service *-- Service.description
Service *-- Service.api
Service *-- Service.id
Services "0,*"-- "0,1" Services
Access "1,1" -u- "0,*" Report : User
Report *-- Report.name
Report *-- Report.sources
Report *-- Report.date
Report *-- Report.id
Access "1,1"-- "0,*" Beat
Beat *-- Beat.id
Beat *-- Beat.type
Beat "1,1" -- "0,*" Source 
Source <|-- Source.id
Source <|-- Source.url
Source <|-- Source.api_key
@enduml

## ER-модель

@startuml
entity Beat <<instance>> {
id: UUID
uri: uri-reference
}

entity BeatType {
id: int
name: text
description: text
repo: uri-reference
}

entity Source {
id: int
url: text
api_key: int
}

entity DataStream {
name: text
description: text
entryPoint: int
}

entity Report {
name: text
description: text
id: int
}

entity Service {
id: int
name: text
description: text
uri: uri-reference
}


entity Account {
login: text
password: text
name: text
role: text
}

entity Access {
role: text
}

Account  "1,1"<-- "0,*" Access
Access "0,*" -->  "1,1"Beat
Access "0,*" -u->   "1,1" DataStream : Administrator
Access "0,*" -u-> "1,1" Report : User
Beat "0,*"  --> "1,1"Source 
Beat "1,1" <--  "0,*" DataStream
DataStream  "1,1" <--  "0,*" Report
DataStream "0,*" --> "1,1" Service
Service "0,1" <-- "0,*" Service: next
Beat "0,*" --> "1,1" BeatType
@enduml

## Реляційна схема

![alt text](../.vuepress/public/EER-diagram.png)