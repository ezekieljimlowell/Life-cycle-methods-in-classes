import './App.css';
import { Deprecated } from './Deprecated/Deprecated';
import { MountingPhase } from './MountingPhase/MountingPhase';
import { UnMountingPhase } from './UnMountingPhase/UnMountingPhase';
import { UpdatingPhase } from './UpdatingPhase/UpdatingPhase';

function App() {
  return (
    <div className="App">
      <MountingPhase data={100}/>
      <UpdatingPhase userData={"red"}/>
      <UnMountingPhase />
      <Deprecated data={"Andrew"}/>
    </div>
  );
}

export default App;
