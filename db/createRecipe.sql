-- insert into recipes
-- (name, authorid, steps, rating, prept, serves, cost, img, ingredients, source)
-- values
-- ($1, $2, $3, $4, $5, $7, $8, $9, $10)
-- returning recipeid

insert into recipes
(name, authorid, steps, rating, prept, serves, cost, img, ingredients, source)
values
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
returning recipeid;
