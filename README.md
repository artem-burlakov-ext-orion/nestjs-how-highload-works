# Educational project "high volume architect’s desk"

to anyone who want to know how high volume applications work (and i want to know too)

## Emulator for 
- collecting streaming data from temperature sensors <<<----- i am here
- fraud detection
- disaster heavy frost in Texas
- smart fridge order milk online 

### ToDo

first
- move to nestjs <<<----- i am here
- get 10k sensors generating data
- monitor counters/activity (push or pull, prometheus? grafana)
- add relations

second
- add easy level (each block is part of the project)
- add web page where student can select block and drag it onto blocks pane
- add firmware update
- add security (crypt passwords for every sensor?)
- add realtime analytics (streaming layer redis, tarantool)
- filter invalid data by streaming layer (temperature without serial number?)
- add full analytics(batch layer clickhouse, vertica)
- realtime analytics "why sensor not active"
- alarm realtime if accident (nearest sensors differs from norm temp more then 10C)
- add invalid firmware update --> alarm realtime if invalid firmware
- add engineers (telegram bots?)
- add message to engineer if sensor dont work
- alter_server change port
- alter_server is replica on virtual machine
- get data from sensor route and create models/sensors/firmwares routes must be on different servers
- replace express to fastify
- gte 1M sensors generate data

somewhen
- transform to course with exercises (high volume projects)
- ex: tracking birds
- ex: temp sensors  on Gulf Stream (disaster movie The day after tomorrow)
- ex: sensors from space station
