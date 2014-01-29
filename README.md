#rep-api
ThomsonLocal RESTful API for sales rep based interactions with internal processes.

##Current Version
This API is currently running at 1.0.0

##Encryption
There is no encryption on this API service.

#API Reference
##Example HTTP Request Header
GET http://[HOST]/Rep/Details/[REP_LOGON] HTTP/1.1

Host: [HOST]

accept-version: 1.0.0

##Example Rep Details GET Request
`GET http://[HOST]/Rep/Details/TestR01 HTTP/1.1`

##Successful Response
`{"logon":"TestB01","rep_first_name":"Joe","rep_last_name":"Soap","email":"joe.soap@testmailaccount.com"}`

