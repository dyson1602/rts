import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import EventComponent from './events/EventComponent'

const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
      <EventComponent />
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
