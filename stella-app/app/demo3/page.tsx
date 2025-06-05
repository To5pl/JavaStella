import ClientComponent from './components/ClientComponents';
import { ServerComponent } from './components/ServerComponents';

export default function Demo3() {

  return (
    <main>
      <div>
        <h1>Demo 3</h1>
        <ClientComponent />
        <ServerComponent />
      </div>
    </main>
  )
}