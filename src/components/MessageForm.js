import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

import { IconButton } from '@material-ui/core';
import { PhotoCamera, Send } from '@material-ui/icons';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
    console.log('Hallo');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        className='message-input'
        placeholder='Send a message ...'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <input
        type='file'
        multiple={false}
        id='icon-button-file'
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <label htmlFor='icon-button-file'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
          
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <IconButton type="submit" color='primary' aria-label='send message' style={{marginLeft: '30px'}}>
        <Send />
      </IconButton>
    </form>
  );
};

export default MessageForm;
