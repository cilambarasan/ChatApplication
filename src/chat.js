import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-raleway';

const MessagingAppContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#E0E7FF', // Light blue-gray background color
});

const FriendsListContainer = styled(Box)({
  flex: '0 0 25%',
  padding: '20px',
  borderRight: '1px solid #ccc',
  backgroundColor: '#C2D4FF', // Lighter blue-gray background color
});

const MessagesContainer = styled(Box)({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F4F6FA', // Light gray background color
});

const ChatWindow = styled(Paper)({
  flex: '1',
  width: '100%',
  padding: '20px',
  marginBottom: '20px',
  overflowY: 'auto',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF', // White background color
});

const MessageInputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  marginTop: 'auto',
  width: '100%',
  padding: '20px 0',
  backgroundColor: '#FFFFFF', // White background color
});

const MessageInput = styled(TextField)({
  flex: '1',
  marginRight: '10px',
  backgroundColor: '#F4F6FA', // Light gray background color for input
});

const SendMessageButton = styled(Button)({
  height: '100%',
  backgroundColor: '#4D6FFF', // Darker blue color for the Send button
  color: '#FFFFFF', // White text color
});

const FriendListItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: '#C2D4FF', // Lighter blue-gray background color on hover
    cursor: 'pointer', // Set cursor to pointer on hover
  },
});

const Title = styled(Typography)({
  fontFamily: 'Raleway, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#4D6FFF', // Darker blue color
});

const MessagingApp = () => {
  const [messageInput, setMessageInput] = useState('');
  const [friends, setFriends] = useState(['Dharshan', 'Maruthu', 'Kuppusammy','Arun','Aruneesh']);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendMessages, setFriendMessages] = useState({});

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = () => {
    if (messageInput.trim() !== '' && selectedFriend) {
      const friendMessageCopy = { ...friendMessages };
      const messages = friendMessageCopy[selectedFriend] || [];
      messages.push({ text: messageInput, sender: 'user' });
      friendMessageCopy[selectedFriend] = messages;
      setFriendMessages(friendMessageCopy);
      setMessageInput('');
    }
  };

  const handleFriendSelect = (friend) => {
    setSelectedFriend(friend);
  };

  const getFriendMessages = () => {
    return friendMessages[selectedFriend] || [];
  };

  return (
    <MessagingAppContainer>
      <FriendsListContainer>
        <Title variant="h5" mb={3}>
          Chit Chat
        </Title>
        <List>
          {friends.map((friend, index) => (
            <FriendListItem key={index} onClick={() => handleFriendSelect(friend)}>
              {friend}
            </FriendListItem>
          ))}
        </List>
      </FriendsListContainer>

      <MessagesContainer>
        {selectedFriend ? (
          <>
            <Typography variant="h6" mb={3}>
              Conversation with {selectedFriend}
            </Typography>
            <ChatWindow elevation={3}>
              {getFriendMessages().map((msg, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      background: msg.sender === 'user' ? '#4D6FFF' : '#C2D4FF',
                      padding: '12px',
                      borderRadius: '10px',
                      color: msg.sender === 'user' ? '#FFFFFF' : '#000000',
                      display: 'inline-block',
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </ChatWindow>
          </>
        ) : (
          <div>Please select a friend to start a conversation.</div>
        )}

        <MessageInputContainer>
          <MessageInput
            label="Type a message"
            variant="outlined"
            fullWidth
            value={messageInput}
            onChange={handleInputChange}
          />
          <SendMessageButton variant="contained" onClick={sendMessage}>
            Send
          </SendMessageButton>
        </MessageInputContainer>
      </MessagesContainer>
    </MessagingAppContainer>
  );
};

export default MessagingApp;
