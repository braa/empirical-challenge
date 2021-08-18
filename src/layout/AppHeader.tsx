import React, { FunctionComponent } from 'react';
import { Avatar, Typography } from 'antd';
import { useUser } from '../services';
import './AppHeader.css'

const { Text } = Typography;

const AppHeader: FunctionComponent = () => {
  const { user, error } = useUser();

  return (
    <div className='container'>
      <Text className='name-typography'>Crypto App</Text>
      
      <div>
      {user &&
      <>
        <Text className='name name-typography'> {`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</Text> <Avatar data-testid='user-avatar' src={user?.picture.thumbnail} />
      </>
      }
      </div>
     
    </div>
)
};

export default AppHeader