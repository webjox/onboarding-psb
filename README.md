
<h1 align="center">ОНБОРДИНГ ПСБ БАНК</h1>
<h4>Реализованная функциональность</h4>
<ul>
    <li>Функционал 1;</li>
    <li>Функционал 2;</li>
    <li>Функционал 3;</li>
</ul> 
<h4>Особенность проекта в следующем:</h4>
<ul>
 <li>Киллерфича-1;</li>
 <li>Киллерфича-2;</li>
 <li>Киллерфича-3;</li>  
 </ul>
<h4>Основной стек технологий:</h4>
<ul>
	<li>HTML, CSS, JavaScript</li>
	<li>Python, Django</li>
    <li>nginx</li>
	<li>django-rest-framework</li>
	<li>Gulp, Webpack, Babel.</li>
	<li>React (Next.js)</li>
	<li>Git</li>
 </ul>
<h4>Демо</h4>
<p>Демо сервиса доступно по адресу: http://demo.test </p>
<p>Реквизиты тестового пользователя: email: <b>testuser@test.ru</b>, пароль: <b>testuser</b></p>


СРЕДА ЗАПУСКА
------------
1) развертывание сервиса производится на debian-like linux (debian 9+);
2) требуется установленный web-сервер nginx;
3) требуется установленная СУБД PostgreSQL (версия 13);
4) требуется установленный HTTP-сервер gunicorn;
5) node (версия 14.16.1);
6) yarn (версия 1.22.11);
7) python (версия 3.8+)


<h1 align="center">ПОДГОТОВКА К ЗАПУСКУ ПРОЕКТА</h1>


Установка и настройка БД
------------

Выполните 
~~~
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx

sudo apt -y install vim bash-completion wget

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list

sudo apt update

sudo apt install postgresql-13 postgresql-client-13

sudo -i -u postgres

psql

~~~

Смена пароля пользователя
------------
Выполните
~~~
ALTER USER postgres WITH ENCRYPTED PASSWORD 'password';
~~~

Необходимо создать пустую базу данных
------------
Выполните

~~~
sudo -i -u postgres
psql
CREATE DATABASE mynewdb;
\q
exit
~~~

---------------------------------------------
---------------------------------------------
---------------------------------------------
---------------------------------------------
---------------------------------------------

<h1 align="center">УСТАНОВКА КОМПОНЕНТОВ ДЛЯ ЗАПУСКА ПРОЕКТА</h1>

Клонирование проекта с github
------------
Выполните
~~~
git clone https://github.com/webjox/onboarding-psb.git
~~~
<h2 align="center">Backend</h2>

Установка python3.8
------------
~~~
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.8
~~~

Проверка версии python
------------
~~~
python3.8 --version
~~~

Установка виртуального окружения
------------
~~~
sudo apt  install virtualenv
~~~

Установка зависимостей
------------
~~~
cd backend/

virtualenv --python=python3.8 venv

source venv/bin/activate

pip install -r requirements.txt
~~~

Заполнение файла с переменными окружения
------------

Создайте файл .env

В него пропишите настройки backend части
~~~
SECRET_KEY = "suprsecretkey"
POSTGRES_DB = "mynewdb"
POSTGRES_USER = "postgres"
POSTGRES_PASSWORD = "password"
~~~

SECRET_KEY - является ключом к защите подписанных данных

POSTGRES_DB - название БД котору вы создали

POSTGRES_USER - пользователь с доступом к БД

POSTGRES_PASSWORD - пароль от пользователя

Выполнение миграций
------------
Для заполнения базы данных системной информацией выполните в корневой папке backend/: 
~~~
python manage.py migrate
~~~

Устновка HTTP сервера для запуска backend части
------------
~~~
УСТАНОВКА
~~~

<h2 align="center">Frontend</h2>


~~~
ЧТО ТО, ЧТО ТО
~~~


<h1 align="center">ЗАПУСК ПРОЕКТА</h1>
### Установка зависимостей проекта


