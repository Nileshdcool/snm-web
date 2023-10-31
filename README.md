# SnmWebApp

node - 12.11.0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## commands used

Commands used:
username:ec2-user

sudo yum update
sudo yum install nginx
sudo systemctl status nginx OR sudo service nginx status

#Angular -----

sudo mkdir /data
sudo mkdir /data/nginx
sudo unzip dist.zip                                                --to unzip 

/home/ec2-user/dist/accelerator_frontend    --path of source
/data/nginx         -destination 

sudo cp -R /path/to/source /path/to/destination                               
sudo cp -R /home/ec2-user/dist/accelerator_frontend /data/nginx

#After copying
/data/nginx/accelerator_frontend     ---webroot

#Nginx Web server Configuration -----
/etc/nginx/                  --Default nginx directory
cd /etc/nginx/conf.d
sudo vim config_01.conf      --Create new configuration

sudo nginx -t                   Syntax Check
sudo systemctl restart nginx    Restart nginx server

---------------------------------------------------------------------------
Nginx Basic Configuration:
server {
    listen 80;
    server_name public_ip;

    location / {
        root /data/nginx/accelerator_frontend;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
