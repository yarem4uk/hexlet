/* DATABASE */

/* create database */
CREATE DATABASE name;

/* delete database */
DROP DATABSE name;

/* rename database */
ALTER DATABASE name RENAME TO newname;

/* chage owner */
ALTER DATABASE name OWNER TO newowner;

/* TABLE */

/* create table */
CREATE TABLE name (
    product_no integer NOT NULL,
    key integer PRIMARY KEY,
    count integer,
    producr boolean,
    name character varying,
    description text,
    price numeric, --float
    created_at timestamp
    /* UNIQUE(key, cunt) -- for two fields */
);

/* delete table */
DROP TABLE name;

/* insert data for bable */
insert into tablename values (1, 'car', 3.9);
insert into tablename (fildname, fildname2) values ('value', 'vlaue2'); --two filds  -- two row
insert into tablename (fildname, fildname2) values ('value', 'vlaue2'), ('value', 'value'); -- two row

/* select */ 
select * from tablename;

/* delete */ 
delete from tablename; -- deleted all rows from tablename
delete from tablename where key = 9; -- deleted  rows where key = 9
