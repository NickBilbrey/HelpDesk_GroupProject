CREATE TABLE [User]
(
    ID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(255),
    Email VARCHAR(255)
);
CREATE TABLE Tickets
(
    TicketID INT IDENTITY(1,1) PRIMARY KEY,
    Author INT,
    Body VARCHAR(MAX),
    Solved BIT,
    Bookmarked BIT,
    Solution VARCHAR(MAX),
    WhoSolved INT,
    FOREIGN KEY (Author) REFERENCES [User](ID),
    FOREIGN KEY (WhoSolved) REFERENCES [User](ID)
);
CREATE TABLE BookMark
(
    BookMarkID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES [User](ID)
);
