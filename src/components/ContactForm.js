import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactForm = ({
    onSubmit
}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');

    const handleSubmit = () => {
        console.log('yuhuu')
        onSubmit({
            name,
            phone,
            email,
            photo
        })
    }

    return (
        <Card sx={{  }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Add Contact
                </Typography>
                <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    sx={{ width: '100%' }}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="phone"
                    label="Phone"
                    variant="standard"
                    sx={{ width: '100%' }}
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    sx={{ width: '100%' }}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="photo"
                    label="Photo URL"
                    variant="standard"
                    sx={{ width: '100%' }}
                    required
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                />
            </CardContent>
            <CardActions>
                <Button onClick={handleSubmit} size="small">Add</Button>
            </CardActions>
        </Card>
    );
}

export default ContactForm;