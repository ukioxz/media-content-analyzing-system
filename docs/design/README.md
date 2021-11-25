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
entity Beat {
id: int
type: int
}

entity BeatType {
id: int
name: text
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

entity Services {
id: int
next: int
}

entity Service {
id: int
name: text
description: text
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

Account "0,*" -- "1,1" Access
Access "1,1"-- "0,*" Beat
Access "1,1" -u-  "0,*" DataStream : Administrator
Access "1,1" -u- "0,*" Report : User
Beat "1,1" -- "0,*" Source 
Beat "0,*" -- "1,1" DataStream
DataStream "1,1" -- "0,*" Report
DataStream "0,*" -- "1,1" Services
Services "0,*" -- "1,1" Service
Services "0,*"-- "0,1" Services
Beat "0,*" -- "1,1" BeatType
@enduml
