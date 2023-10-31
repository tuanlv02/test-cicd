import { notificationAtom } from '@store/notifications/notification';
import { useAtomValue } from 'jotai';
import React from 'react';

const Home = () => {
  const listNotification = useAtomValue(notificationAtom);

  return (
    <>
      <p>Noti here</p>

      {listNotification.map((item) => (
        <div key={`noti-item-${item.id}`}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
