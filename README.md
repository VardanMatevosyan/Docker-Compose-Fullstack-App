# Docker-Compose-Fullstack-App
## Spring Boot + Angular 7 + Docker + MSQL server application
######

In order to use the application using docker in Ubuntu go through steps below:
 ##Install
 * Install Docker Engine  - use one of these steps from (https://docs.docker.com/install/linux/docker-ce/ubuntu/)
 * Indtall Git:
	* sudo apt update 
	* sudo apt install git
	* git --version 
 * Install maven:
	* sudo apt update 
	* sudo apt install maven
	* mvn --version 
 * Install the angular cli with node.js and npm:
	* sudo apt-get update
	* sudo apt-get upgrade
	* curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - sudo apt-get install -y nodejs
	* sudo npm install npm@latest -g
	* npm -v
	* install -g @angular/cli@latest
	* ng -v
 ##Build:
 * Clone the repository - (git clone https://github.com/VardanMatevosyan/Docker-Compose-Fullstack-App.git)
 * Go to the Spring folder and build the spring boot jar application:
	* mvn clean package
 * Go to the Angular folder and build the angular app:
	* ng build (should create the dist folder with javascript and css files)
 ##Run
  * Go to the root of the project where you can see docker-compose.yml file open the rerminal and run the command below.
  * docker-compose up
  * Open the browser and type localhost:4200 you will see empty project with no item. In order to add the item use postman. To install the the postman use these commands:
	* (http://ubuntuhandbook.org/index.php/2018/09/install-postman-app-easily-via-snap-in-ubuntu-18-04/)
  * Sign in to the postmen
  * Greate the POST request with:
    * Link - http://localhost:8080/person/add
	* Go to the Body - chouse JSON type - and type in - {"name": "Peet"}
	* Click send
	* Go beck th the browser and you will see the created "Peet" item.

######