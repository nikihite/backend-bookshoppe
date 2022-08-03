-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists authors;
DROP table if exists books;

CREATE table authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    dob INT,
    pob VARCHAR
);

INSERT INTO authors (name, dob, pob) VALUES
('Laura Numeroff', 1953, 'New York'),
('Eric Carle', 1929, 'New York'),
('Shel Silverstein', 1930, 'Illinois'),
('Dr.Seuss', 1904, 'Massachusetts');

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    released INT
);

INSERT INTO books (name, released) VALUES
('If You Give a Mouse a Cookie', 1985),
('If You Give a Pig a Pancake', 1998),
('If You Give a Moose a Muffin', 1991),
('The Very Hungry Caterpillar', 1969),
('The Very Busy Spider', 1984),
('Brown Bear, Brown Bear, What Do You See?', 1967),
('The Giving Tree', 1964),
('A Light In the Attic', 1981),
('The Missing Piece', 1976),
('Green Eggs and Ham', 1960),
('One Fish, Two Fish, Red Fish, Blue Fish', 1960),
('Fox in Socks', 1965); 