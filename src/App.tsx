import Sidenav from "./components/Sidenav/Sidenav";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Sidenav />
      <main></main>
      {/* placeholder for router? */}
    </ThemeProvider>
  );
}

export default App;
