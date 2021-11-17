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
api: key
}

entity DataStream {
name: text
description: text
entryPoint: int
}

entity Report {
name: text
description: text
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
Access "1,1" -- "0,*" Role
Access "1,1" -u- "0,*" Report : User
Beat "1,1" -- "0,*" Source 
Beat "0,*" -- "1,1" DataStream
DataStream "1,1" -- "0,*" Report
DataStream "0,*" -- "1,1" Services
Services "0,*" -- "1,1" Service
Services "0,*"-- "0,1" Services
Beat "0,*" -- "1,1" BeatType
@enduml
