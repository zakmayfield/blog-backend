# Backend to support a blog

### **Routes**

- `/users`
- `/posts`
- `/posts/comments`

### **Tables**

- Users
- Posts (ref users)
- Comments (ref posts & users)

### **PostGraphile**

- Command
  - `postgraphile -c postgres://localhost:5432/relational-1`
