Always wrap strings in single quotes

Relationship between a table -- foreign key -- this is the primary key of another table.

Example

SELECT \* FROM pets WHERE species_id = 2;

Pets:
name | species_id | age
Scooby Doo | 2 | 57
Scrappy Doo | 2 | 57
Scooby Doo | 2 | 57

Species:
id | species_name | description  
 2 | Dog | Something

species is its own table, species_id refers to the id column of the species table.

## SELECT (R)

SELECT <column> FROM <table> WHERE ... ORDER BY ... LIMIT
...
SELECT name FROM pets WHERE age > 50;
SELECT name FROM pets WHERE age > 50 ORDER BY age;
SELECT name FROM pets WHERE age > 50 LIMIT 5;

<> -- means not equal

asking for "starts with" or "ends with"

WHERE name LIKE '%o%' -- anything than includes an `o`
WHERE name LIKE 'o%' -- anything than starts with an `o`
WHERE name LIKE '%o' -- anything than ends with an `o`

## UPDATE (U)

UPDATE <table> SET <column>=<value> WHERE ...

almost always going to have a where, if you don't have a WHERE, you're updating every single record in your table.

## INSERTS (C)

INSERT INTO <table> (column, names) VALUES ('Some Value', 'Some other value');

use IDs rather than names. If asks for insert / updating / removing "Scoobby Doo"
-- use Scooby Doos id instead.

## JOINS 
combining tables to make data more relavant

SELECT column FROM table JOIN other_table ON table.something = other_table.something_else

JOIN ON is saying combine these tables based on when these two columns match

Just asking for a standard JOIN, you don't worry about cartesian joins, LEFT vs RIGHT joins, etc.

