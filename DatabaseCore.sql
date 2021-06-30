CREATE DATABASE FormsGeneratorDB;
USE FormsGeneratorDB;

CREATE TABLE Users
(
	Id uniqueidentifier not null primary key,
	Username varchar(256) not null,
	Email varchar(256) not null,
	[Password] varbinary(max) not null,
	Salt varbinary(max) not null
)
ALTER TABLE Users ADD CONSTRAINT UQ_Username UNIQUE (Username);
ALTER TABLE Users ADD CONSTRAINT UQ_Email UNIQUE (Email);

