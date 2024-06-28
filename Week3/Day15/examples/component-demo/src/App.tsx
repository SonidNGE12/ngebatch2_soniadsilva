import Greeting from './components/Greeting'
import StateDemo from './components/StateDemo';

const App = () => {
  const firstName = 'Fiona'
  const isBirthday = true

  return (
    <>
      <Greeting name={firstName} isBirthday={isBirthday} />
      <StateDemo/>
    </>
  );
}

export default App
