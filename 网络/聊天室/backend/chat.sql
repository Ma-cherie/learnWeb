#删除数据库xz，如果存在的话
drop database if exists chatbox;

#创建数据库xz，存储数据使用utf8字符集
create database chatbox charset=utf8;

#进入数据库xz
use chatbox;

#创建表
#创建用户表chatbox_user
CREATE TABLE chatbox_user(
  userid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(32),
  password VARCHAR(32),
  gender INT,
  age INT
);

#创建消息表
-- CREATE TABLE chatbox_msg(
--   msgid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  
-- );