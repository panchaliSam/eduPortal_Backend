create database eduPortal;

use eduPortal;

CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,  -- Firebase UID or UUID
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PhoneNumber VARCHAR(15),
    Address TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Course (
    CourseID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Duration VARCHAR(50),  -- e.g., "10 Weeks"
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Enrollment (
    EnrollmentID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,                -- Foreign key to User
    CourseID INT,                       -- Foreign key to Course
    EnrollmentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CompletionStatus ENUM('In Progress', 'Completed') DEFAULT 'In Progress',
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);

CREATE TABLE Payment (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,                -- Foreign key to User
    CourseID INT,                       -- Foreign key to Course
    Amount DECIMAL(10, 2) NOT NULL,     -- Total amount paid
    Currency VARCHAR(10) DEFAULT 'LKR', -- Currency code
    PaymentStatus ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
    TransactionID VARCHAR(255),         -- PayHere Transaction ID
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);


