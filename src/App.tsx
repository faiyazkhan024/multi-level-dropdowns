import { MenuContextProvider } from "./components/providers";
import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

export const App = () => {
  return (
    <>
      <AppBar />
      <main className="main">
        <MenuContextProvider>
          <Menu />
        </MenuContextProvider>
      </main>
    </>
  );
};

export default App;
