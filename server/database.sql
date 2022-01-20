create database pernplants;

create table plant(
    pid serial primary key,
    name varchar(255)
);

create table userinfo(
    user_id serial primary key,
    username varchar(255),
    password varchar(255)
);