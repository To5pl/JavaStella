import ClientComponent from './components/ClientComponents';
import { ServerComponent } from './components/ServerComponents';

export default function Demo3() {

  return (
    <main>
      <div>
        <h1>Demo 3</h1>

        <h1>Client component only</h1>
        <ClientComponent />

        <hr/>
        <h1>Server component only</h1>
        <ServerComponent />

        <hr/>
        <h1>Server component inside Client Component</h1>
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>

      </div>
    </main>
  )
}