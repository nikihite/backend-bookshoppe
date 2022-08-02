-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists authors;

CREATE table authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    dob INT,
    pob VARCHAR
);

INSERT INTO authors (name, dob, pob) VALUES
('Laura Numeroff', 1953, 'New York'),
('Eric Carle' 1929, 'New York'),
('Shel Silverstein', 1930, 'Illinois'),
('Dr.Seuss', 1904, 'Massachusetts');