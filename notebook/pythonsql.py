# MERGING SQL AND PYTHON
import csv

from cs50 import SQL

db = SQL("sqlite:///favorite.db")

title = input("title: ").strip()

rows = db.execute("SELECT COUNT(*) AS counter FROM favorite WHERE title LIKE ?" , title)

row =  rows[0]

print(row["counter"])


# AS is used to assign table aliases 
# SELECT COUNT(*) AS counter FROM favorite WHERE title LIKE "the office";

SELECT id FROM people WHERE name = "Steve Carell"

SELECT show_id FROM stars WHERE person_id = (SELECT id FROM people WHERE name = "Steve Carell");

SELECT id FROM shows WHERE id IN (SELECT show_id FROM stars WHERE person_id = (SELECT id FROM people WHERE name = "Steve Carell"));