import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className='borderConfig'>
        <ToDo
        toDoImage={'https://wallpaperaccess.com/full/5116287.jpg'}
        toDoText={'Aš mokausi HTML'}
        />
        <ToDo
        toDoImage={'https://w0.peakpx.com/wallpaper/406/82/HD-wallpaper-kawaii-aesthetic-pastel-simple-cute.jpg'}
        toDoText={'Aš mokausi CSS'}
        />
        <ToDo
        toDoImage={'https://wallpaperaccess.com/full/4587647.png'}
        toDoText={'Aš mokausi JavaScript'}
        />
    </div>
  );
}

export default App;
