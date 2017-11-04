mongodump --db tagminepenge-cms
cd dump/
mv tagminepenge-cms/ dump
mongorestore -h ds243325.mlab.com:43325 -d heroku_4p6q9gwj -u heroku_4p6q9gwj -p 3vkbmr6vk2k8vn21s4keeja02i
