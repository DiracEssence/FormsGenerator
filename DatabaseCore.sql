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

-- FORMS TABLES
CREATE TABLE Forms
(
	Id uniqueidentifier not null primary key,
	IdCreator uniqueidentifier not null foreign key references Users(Id),
    [Name] varchar(256) not null,
	[Description] varchar(512),
	CreatedAt datetime not null
)
--DROP TABLE Forms;

CREATE TABLE QuestionTypes
(
	Id int not null primary key,
	[Name] varchar(64) not null,
	[Description] varchar(256) not null
)
INSERT INTO QuestionTypes VALUES
(1, 'Text', 'Text answer with an input text'),
(2, 'True or false', 'Two radio buttons with true and false'),
(3, 'Multiple choice', 'Multiple radio buttons, but only one answer');
--DROP TABLE QuestionTypes;

CREATE TABLE Questions
(
	Id uniqueidentifier not null primary key,
	IdForm uniqueidentifier not null foreign key references Forms(Id),
	QuestionText varchar(1024) not null,
	IdQuestionType int not null foreign key references QuestionTypes(Id),
	[Order] int not null
)
--DROP TABLE Questions;

CREATE TABLE Choices
(
	Id uniqueidentifier not null primary key,
	IdQuestion uniqueidentifier not null foreign key references Questions(Id),
	ChoiceText varchar(512) not null,
	[Order] int not null
)
--DROP TABLE Choices;

-- CREATE TABLES FOR FORMS ANSWERED

CREATE TABLE FormsAnswered
(
	Id uniqueidentifier not null primary key,
	IdUser uniqueidentifier not null foreign key references Users(Id),
	IdForm uniqueidentifier not null foreign key references Forms(Id),
	Finished bit not null,
	[AnswerDate] datetime not null
)
--DROP TABLE FormsAnswered;

CREATE TABLE AnsweredQuestions
(
	Id uniqueidentifier not null primary key,
	IdQuestion uniqueidentifier not null foreign key references Questions(Id),
	Answer varchar(2048),
	QuestionAnswered varchar(1024), -- this field is for prevent that the User answer a question and then the creator change the text to create confusion's
)
--DROP TABLE AnsweredQuestions;