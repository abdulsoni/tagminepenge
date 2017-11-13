mongodump --host ds243325.mlab.com -d heroku_4p6q9gwj --port 43325 --username heroku_4p6q9gwj --password 3vkbmr6vk2k8vn21s4keeja02i
mongo tagminepenge-cms --eval "db.dropDatabase()"
mongorestore -h localhost -d tagminepenge-cms dump/heroku_4p6q9gwj
rm -r -f dump
