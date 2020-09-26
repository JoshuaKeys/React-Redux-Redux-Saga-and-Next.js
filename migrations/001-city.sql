-- Up
CREATE TABLE
IF NOT EXISTS City
(
    id INTEGER PRIMARY KEY,
    name TEXT
);

INSERT INTO City
    (name)
values
    ('Kiev');
INSERT INTO City
    (name)
values
    ('Kharkiv');
INSERT INTO City
    (name)
values
    ('Lviv');
INSERT INTO City
    (name)
values
    ('Lagos');

-- Down
DROP TABLE City;