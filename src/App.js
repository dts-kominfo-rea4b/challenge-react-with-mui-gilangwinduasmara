import { Card, CardContent, Grid, List } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

import contactsJSON from './data/contacts.json';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);
  const addContact = (data) => {
    console.log(data)
    setContacts([...contacts, data]);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
      }}>
        <Header />
        <Grid container spacing={2} padding={8}>
          <Grid item xs={12} md={6} position={'relative'}>
            <Box position={'sticky'} top={128}>
              <ContactForm onSubmit={addContact} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, color: 'white' }}>
                  {contacts?.map((contact, index) => (
                    <Contact data={contact} key={index} />
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
