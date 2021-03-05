### Tests, code quality and linter status:

[![Maintainability](https://api.codeclimate.com/v1/badges/c1cbaf9f97ca597f3c18/maintainability)](https://codeclimate.com/github/eifory/nestjs-how-highload-works/maintainability)

# Educational project "high volume architect’s desk"

to anyone who want to know how high volume applications work (and i want to know too)

## Emulator for real world cases in which a huge amount of data is generated and requires analysis
- collecting streaming data from IOT sensors <<<----- i am here
- search for matches in the dna
- search for missing people 
- fraud detection
- disaster heavy frost in Texas
- smart home order goods online and delivery by drones
- the price of bitcoin has collapsed 
- social network (10M)

### ToDo

first
- add tests <<<----- i am here
- monitor counters/activity (push or pull, prometheus? grafana)
- replace hardcoded data by adding relations 
- quick start (click and 1k sensors generate data)

second
- add migrations
- add easy level (each visual block is part of the architecture)
- add web page where student can select block and drag it onto blocks pane to configure data pipeline
- add rabbitmq
- add firmware update
- firmware data to jsonb in db
- add security (crypt passwords for every sensor?)
- add realtime analytics (streaming layer redis, tarantool)
- filter invalid data by streaming layer (sensor value without serial number?)
- add full analytics(batch layer clickhouse?)
- realtime analytics "why sensor not active"
- alarm realtime if accident (nearest sensors differs from norm temp more then 10C)
- add invalid firmware update --> alarm realtime if invalid firmware
- add engineers (telegram bots?)
- alarm --> add message to engineer
- alter_server change port
- alter_server is replica on virtual machine
- get data from sensor route and creating models/sensors/firmwares routes must be on different servers
- replace express to fastify
- get 10k sensors generating data

somewhen
- transform to course with exercises (high volume projects)
- ex: tracking birds
- ex: temp sensors  on Gulf Stream (disaster movie The day after tomorrow)
- ex: sensors from space station
