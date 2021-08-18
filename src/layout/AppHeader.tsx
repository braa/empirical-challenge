import { FunctionComponent } from 'react';
import { Avatar, Typography } from 'antd';
import { useUser } from '../services';
import './AppHeader.css'

const { Text } = Typography;

const AppHeader: FunctionComponent = () => {
  const { user, error } = useUser();

  return (
    <div className='container'>
      {user &&
      <>
        <Text className='name name-typography'> {`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</Text> <Avatar src={user?.picture.thumbnail} />
      </>
      }
    </div>
)
};

export default AppHeader