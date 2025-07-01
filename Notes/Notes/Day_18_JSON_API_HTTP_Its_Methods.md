

# JSON- JavaScript Object Notation

format to store and transfer data
is Like a Object
JSON is a text
Most readable format
JSON is "self-describing" and easy to understand
The JSON format is syntactically similar to the code for creating JavaScript objects. 

Syntax

Data stored like double quoted ""

const jsonobj={

       "id":1,
       "name":"Pratik",

}



Normally Data stored

let a=10/ "" /true / [] / {} //

[
       {
              
       },

       {

       }
]

********************************************************************************************


# Why Use JSON ?

The JSON format is syntactically similar to the code for creating JavaScript objects. 
Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

********************************************************************************************

# 2 Methods-


👉JSON.stringify();

Convert JS object to JSON string
Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

********************************************

👉JSON.parse()

Used to Convert JSON string data to plain JS Object
Converts a JavaScript Object Notation (JSON) string into an object.



*****************************************************************************


# SETUP JSON Server


************************************************

https://www.amazon.in/

HTTPS- SSL- Secure Socket Layer

What is HTTP


Network Protocol
The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

HTTP works as a request-response protocol between a client and server.

Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client.
 The response contains status information about the request and may also contain the requested content.




👉HTTP Methods


CURD- Create Read Update Delete


GET- to fetch data
POST- send data
PUT/PATCH-update 
DELETE - Delete data

HEAD
PATCH
OPTIONS
CONNECT
TRACE


*********************************************************

👉PUT VS PATCH method- To Update data


PUT -  Update entire resources with modifying entire data

PUT is used to replace the entire resource with a new representation, 
meaning that all the fields of the resource are sent in the request body, even if they are not modified.



Patch- Update Partial Resource without modifying entire data

PATCH is used to apply partial updates to a resource, meaning that 
only the fields that need to be changed are sent in the request body.



*********************************************************



# API

What is an API?

An API or Application Programming Interface is a facilitator that enables apps, databases, 
softwares and IoT devices to communicate with each other, without which they won’t be able to interact.

It's a set of tools and protocols used by developers to build user-friendly software apps.



👉eg

Just like a user interface (usually a graphical user interface or GUI) is built for humans
to interact with applications, APIs are built for applications to interact with each other.

The application programming interface layer is responsible for data
 transfer and processing between a server and an application. 

 APIs collate data from one application, format it for export, 
 and transmit it to the destination application without compromising accuracy or security.


# How does API Works

What is Web API?
API stands for Application Programming Interface.

A Web API is an application programming interface for the Web.
A Browser API can extend the functionality of a web browser.
A Server API can extend the functionality of a web server.




https://www.peerbits.com/blog/complete-guide-to-api-development.html


https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mailmodo.com%2Fguides%2Fapi%2F&psig=AOvVaw0G9y6NOc4RcThjUDU9rMgx&ust=1698747912337000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjopqDHnYIDFQAAAAAdAAAAABAE

******************************************************************************

# API protocol types


To use APIs, we must adhere to specific procedures. A protocol specifies the rules for API calls. An API call is a message sent to a server requesting an API to provide information or a service. Let's look at some of the most used API protocols:

REST API 

RPC
GraphoQL
SOAP



***********************************************************************


After Creating React APP

# JSON Server Setup


1. Create Directory-  myapp
       
       create react app- 
                        
                        npx create-react-app my-app
                        cd my-app


2. setup JSON Server

 cd my-app   
 mkdir json_data
 cd json_data-  > npm i -g json-server@0



3. Creating JSON file and then Start JSON server

npx json-server --watch db.json


localhost:3000



*******************************************************

https://reqres.in/api/users?page=2

https://jsonplaceholder.typicode.com/users



************************************************************************************

# What is Postman used for?


Postman: Postman is an API(application programming interface) development tool 
which helps to build, test and modify APIs. A


Thunder Client - VS code extension

