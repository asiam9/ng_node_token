[PluralSight Angular + Node Auth](http://www.pluralsight.com/courses/exercise-files/creating-apps-angular-node-token-authentication)

# Scaffolding
- yo angular
- grunt serve                               (live reload for changes included)
- > yo angular:view register        (creates new register.html in `views`)
- > bower install *angular-ui-router* --save

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
- > *yo angular:factory authToken* 
- 


