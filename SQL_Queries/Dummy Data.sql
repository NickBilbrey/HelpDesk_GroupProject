INSERT INTO [User] (FirstName, Email)
VALUES
    ('John', 'john@example.com'),
    ('Sarah', 'sarah@example.com'),
    ('David', 'david@example.com');

INSERT INTO Tickets (Author, Body, Solved, Bookmarked, Solution, WhoSolved)
VALUES
    (1, 'Issue with login', 1, 0, 'Login fixed', 2),
    (2, 'Error in payment processing', 0, 1, NULL, NULL),
    (3, 'Missing product description', 0, 1, NULL, NULL);

INSERT INTO BookMark (UserID)
VALUES
    (1),
    (2),
    (3);

