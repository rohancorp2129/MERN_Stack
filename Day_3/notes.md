what is npm 


npm i react
npm i react-dom

create react using npm and npx commands 

npx create-react-app my-app ( temp )

install
react -dom
react-script
babel
jest -for testing 
web- 

what is babel ?
babel is a transpiler that converts modern javascript to older javascript that can be run in older browsers 

babel is used to convert modern javascript to older javascript that can be run in older browsers


👉 webpack ?
webpack is a bundler that bundles all the code together in one file so that it can be run


# Folder Structure : 

👉package.json :  metadata of our Project overview and sammary 

json : one readable file contain text data as a 
key : value pair 

👉package.lock.json : 

👉gitingnore: Ignoring files with some extention , we can write in files extentions 

👉README.md : (mark Down file ) 

👉 src : store whole logical work files

👉 public : root folder ( store index.html file also )
        - robots.txt : files used to improve SEO 

<nosscript> : if javascript was disable by browser that time show this tag data 
</noscript>

SEO : Search Engine Optimization 

# Sementic Versioning 
semantiv versioning is a way to versioning our project using version number like 1.
10.0.1
major.minor.patch

major :major change in project
minor :minor change in project
patch :patch change in project

// ^ : (^19.0.1 ) : auto installing or updating minor version along with patch varsion 
// ~ : (~19.0.1 ) : Installilng  most recent patch version 
// @ : to install specific version 

# Execution Process : 

on browser app.js 



# Angular : 
    js-frameword - by Google in 2016
    you need typescript knowladge 

👉dynamic type : ex , data type dynamically decide hota hian . var 154;
👉static type : we have to pass datatype of data while declaration 


# Angular vs React

React : 
    developed by facebook/meta 
    one way binding - parent to child ( uni-direction)
    virtual dom
    JSX (javascript xml )
    stateless component
testing : jest

Angular : 
    developed by google
    two way binding - child to parent and parent to child 
testing : jasmine

MVC Architecture :
Model : data
View : UI
Controller : business logic


jsx must need container : like explained below 

If you are writing multi line code in jsx . then use this fragment

<> 
    code     
</>  

  or else 

<React.StrictMode>
            code
</React.StrictMode>

or else 

<div>
        code : but extra div will be there 
</div>


If you are writing html code , then closing tag is compalsary 
if you are applying class property to any tag . then make sure that you are using ClassName : not class  . for id no issue


for css : style={{key:value}}

<h1 style={{color:'blue'}} >Welcome to js </h1>
        for external just import file and define code in that file 

for js :
        insted of + while concating use {}

public by default import hota hain 
. To store static data we use public 

<img src="logo.png" alr="">

import/integrate bootstrap : 
        if you are using CDN then use in index.html ( from public)

        you can import it :  npm i bootstrap 






