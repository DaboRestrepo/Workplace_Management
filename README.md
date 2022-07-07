# Workplace management

## What is this App for?
We made this App like a way to show how much we learned in the fundations phase in [Holberton School](https://www.holbertonschool.com/). For this reservation project we use Django to build the Back-end, Postgresql to manage the database and Bootstrap with React to give the App a beautiful and responsive Front-end.

## What is this App does?
This application was thought to be use by the employees of a company, this one wanted to manage the work on site through a web reservations tool. The big picture of this application is save the start date and time of the reservation and the end too.

## Site flow

![user has entered text and is ready to workplace the input](images/SiteFlow.jpg)

## Features

* Save the users information: fullname, date of birth, age, email, etc.
* Generate a token to indentify the user session.
* Save reservation if the date is in the future and the amount of time is less than 12 hours and greater than 1. Otherwise, raise an error.
* Contain four views:

| View          | Description   |
| ------------- |:-------------:|
| Sing in       | This form accept email and password to get in the app.|
| Register      | This is the form that save the user data in the db at the beginning    |
| Current reserves      | Show the current reserves and the resarvation button     |
| Reservation page | Has the functionality to set the date and time of the reservation.

## How to use it?
First clone the repo and download the needed functionalities:
### Back-end:
* Django==4.0.5
* django-cors-headers==3.13.0
* djangorestframework==3.13.1
* Unipath==1.1
* django-import-export==2.8.0
### Front-end:
* React
* React-datepicker
* React-router-dom
* Axios
### Database:
* Postgresql
* psycopg2-binary==2.9.3

Then, make a Json file with the global variables needed for the settings file.

Run the command below to create the migrations based on the models file:
```
python manage.py makemigrations
```
Next, apply the unapplying migrations with:
```
python manage.py migrate
```
And finally run the django project:
```
python manage.py reunserver
```
You will found something like this:
```
System check identified 1 issue (0 silenced).
July 04, 2022 - 09:33:35
Django version 4.0.5, using settings 'project_name.settings.local'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
To init the front-end, you will need to start the npm with this command:
```
npm start
```
Now you can get in URL localhost in the port 3000 and use the paths of the project.

To know more about Django Rest Framework get in to the official documentation [here](https://www.django-rest-framework.org/).

## Challenges
* For this project we learned the Python framework Django Rest and the Javascript framework React.
* Use Bootstrap with React.
* Connect Back-end and Front-end.
* Implement the login token and the logout.

## Future of Workplace Management
* Use the token for every action inside the session.
* Set the forgot password functionality.
* Add the change password view.

## About us

Shara García Betancur - Github: [SharaGB](https://github.com/SharaGB) - Email: 3779@holbertonschool.com

Sergio Balcázar Restrepo - Github: [SergioBalca](https://github.com/SergioBalca) - Email: 3896@holbertonschool.com

Daniela Botero Restrepo - Github: [DaboRestrepo](https://github.com/DaboRestrepo) - Email: 3786@holbertonschool.com
