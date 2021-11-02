import {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';

const database = firebase
  .app()
  .database(
    'https://skripsi-9088b-default-rtdb.asia-southeast1.firebasedatabase.app',
  );

const useHome = () => {
  const [humadity, setHummadity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [flushStatus, setFlushStatus] = useState(0);

  useEffect(() => {
    handleGetHummadity();
    handleGetTemperature();
  }, []);

  const handleGetFlushStatus = () => {};

  const handleGetHummadity = () => {
    database.ref('/data/humadity').on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setHummadity(snapshot.val());
    });
  };

  const handleGetTemperature = () => {
    database.ref('/data/temperature').on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setTemperature(snapshot.val());
    });
  };

  return {humadity, temperature};
};

export default useHome;
