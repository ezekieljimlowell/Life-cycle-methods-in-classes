import './App.css';
import { MountingPhase } from './MountingPhase/MountingPhase';
import { UnMountingPhase } from './UnMountingPhase/UnMountingPhase';
import { UpdatingPhase } from './UpdatingPhase/UpdatingPhase';

function App() {
  return (
    <div className="App">
      <MountingPhase data={100}/>
      <UpdatingPhase userData={"red"}/>
      <UnMountingPhase />
    </div>
  );
}

export default App;
