# SQL queries

## **Joining tables to get data from your database**

- If you need to make a call to your db to retrieve a list of all posts by a user you could run a sql query like so:

```sql
SELECT users.username, posts.title, posts.body 
FROM posts
INNER JOIN users on posts.user_id = users.id
WHERE users.id = 2;
```

- This will return an array of posts that are directly related to the user with id: 2


### **For Example**
- Referring to a twitter profile and tweets
    - When visiting a user profile there is a display of all tweets and the number
    - They are pulling this data by grabbing the user id, and then querying the tweets table using the relation between the tweets foreign key (user_id) and the id of the user (user.id)
    - This query will spit out all tweets created by the user with whatever id was passed