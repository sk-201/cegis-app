CREATE DATABASE cegis_app;
USE cegis_app;
CREATE TABLE credentials(
username text Not null,
password text Not null
);

CREATE TABLE State (
    state_id INT PRIMARY KEY AUTO_INCREMENT,
    state_name VARCHAR(100) NOT NULL
);
CREATE TABLE District (
    district_id INT PRIMARY KEY AUTO_INCREMENT,
    district_name VARCHAR(100) NOT NULL,
    state_id INT,
    FOREIGN KEY (state_id) REFERENCES State(state_id)
);
CREATE TABLE Taluk (
    taluk_id INT PRIMARY KEY AUTO_INCREMENT,
    taluk_name VARCHAR(100) NOT NULL,
    district_id INT,
    FOREIGN KEY (district_id) REFERENCES District(district_id)
);
CREATE TABLE Block (
    block_id INT PRIMARY KEY AUTO_INCREMENT,
    block_name VARCHAR(100) NOT NULL,
    taluk_id INT,
    FOREIGN KEY (taluk_id) REFERENCES Taluk(taluk_id)
);
CREATE TABLE School (
    school_id INT PRIMARY KEY AUTO_INCREMENT,
    school_name VARCHAR(255) NOT NULL,
    block_id INT,
    FOREIGN KEY (block_id) REFERENCES Block(block_id)
);
CREATE TABLE SHG_Member (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    member_name VARCHAR(100) NOT NULL,
    age INT CHECK (age BETWEEN 40 AND 55), -- Age constraint
    education_level VARCHAR(50) DEFAULT '10th Passed'
);
CREATE TABLE Infrastructure (
    infrastructure_id INT PRIMARY KEY AUTO_INCREMENT,
    school_id INT,
    member_id INT,
    item_name VARCHAR(50) NOT NULL, 
    available BOOLEAN NOT NULL,     
    working_condition BOOLEAN,      
    FOREIGN KEY (school_id) REFERENCES School(school_id),
    FOREIGN KEY (member_id) REFERENCES SHG_Member(member_id)
);
