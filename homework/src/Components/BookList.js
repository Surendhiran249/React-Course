// BookList.js
import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const books = [
  {
    title: "The Holy Bible",
    description: "Religious text of Christianity, considered sacred and canonical.",
  },
  {
    title: "Quotations from Chairman Mao",
    description: "Collection of statements from speeches and writings by Mao Zedong.",
  },
  {
    title: "Harry Potter series",
    description: "Fantasy novels by J.K. Rowling, following the life of a young wizard.",
  },
  {
    title: "The Lord of the Rings",
    description: "High-fantasy novel written by J.R.R. Tolkien, set in Middle-earth.",
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel by Harper Lee addressing racial injustice in the American South.",
  },
];

function BookList() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' ,border: '1px solid black' ,borderRadius: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <Typography variant="h4" component="h2" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      
      <List>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">{book.title}</Typography>}
                secondary={<Typography variant="body2">{book.description}</Typography>}
              />
            </ListItem>
            {index < books.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default BookList;
