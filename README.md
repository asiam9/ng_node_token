[PluralSight Angular + Node Auth](http://www.pluralsight.com/courses/exercise-files/creating-apps-angular-node-token-authentication)

# Scaffolding
- yo angular
- `grunt serve`                               (live reload for changes included)     PORT 9000
- > yo angular:view register        (creates new register.html in `views`)
- > bower install *angular-ui-router* --save

- Google API  =  contacts, G+        Origins/Redirect = http://localhost:9000

* *app.config.js*  to define routes
* replace ng-controller="MainCtrl" with <div ui-view></div>
* change href to *ui-sref="register"* 
* modify <li> & include *ui-sref-active="active"*  -  make button highlight on click

# FrontEnd
* add Superhero Bootswatch CSS file
* BootSnipp.com for login screen in register.html   -> copy HTML and CSS over 

# Module 1
- > *yo angular:directive validateEquals*       (script automatically added to index.html)
- - used to confirm password is same
- edit register.html to tidy up, include ng-model, name attrs, & passwords match
- > *yo angular:controller register* 
- add $scope.submit function, register controller in config and add script to index
- > *bower install animate.css --save*      (bootstrap style notifications)
- create <div></div> in index.html to display alerts
- > yo angular:service alert         (service for showing alerts)
- - added to controller on success and failure

# Module 2
* Backend Setup, Post Endpoint, Encrypt Pass, Hide Pass, Jwt Encoding
- move everything into `frontend` folder, create an `api` folder
- cd api   > *npm init*
- > npm install express --save
- > npm install body-parser
- edit register.js  -- change URL to localhost:3000/register, add test user
- add *CORS* to api.js using app.use middleware
- with grunt serve running start > `node api`  
- - 'signup' to display the test user you created in the node terminal  = console.log(req.body); in app.post
- install mongoose  --  add connection and User model
- new User.js in */model* create UserSchema to Hash pass with
- > npm install bcrypt node-js --save
- use `UserSchema.pre('save'... )` to setup hash, require User in api.js and edit *newUser* var
- create function **methods.toJSON** to remove password from being displayed in HTTP log 
- new /services and *jwt.js* file  -> to create JWT's
- - Update `newUser.save` to include a token  (jwt encoded)  --  HTTP response now includes this
**Frontend**
- > *yo angular:factory authToken* 
- create `3 methods` in authtoken.js, inject into register.js set success to authToken
- new *header.html*  -> extract nav from index.html 
- - add <div ng-include="'views/header.html'"></div>
- yo angular:controller header
- set up Ctrl and add *ng-if="!isAuthenticated"* to header.html

# Module 3
- Logout, Jobs & Greeting, View animations, Securing jobs, Auth interceptor, Jwt Decoding
- *Auth Interceptor*  -  acts as go between between Frontend and Backend for Jwt request
- yo angular:controller logout
- yo angular:controller jobs
- bower install angular-animate --save
- wrap *ui-view* in new class and edit main.css    (nice transition between views)
**Backend**
- api.js  ->  add app.get('/jobs'... ) and secure the route
- in app.js create a .constant *API_URL*, pass into jobs controller
- new Factory  =  intercept outgoing http calls and attach a header that carries JWT
- yo angular:factory authInterceptor
- add `request` and `response` methods
- include $httpProvider in app.config and register interceptors
- * Replaced jwt /services/jwt with jwt-simple node module

# Module 4
- create Login.  Add POST route to api.js
- yo angular:controller login
- yo angular:service auth
- add Register controller, update auth.js
- npm install *passport* --save   +  passport-local
- add app.use, passport.serializeUser and LocalStrategy in api.js

## Satellizer
- bower install satellizer --save
- add $authProvider to config and 'satellizer' to app.js

