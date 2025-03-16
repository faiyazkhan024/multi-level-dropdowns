import { MenuContextProvider } from "./components/providers";
import AppBar from "./components/AppBar";

export const App = () => {
  return (
    <>
      <AppBar />
      <main className="main">
        <MenuContextProvider>
          <div></div>
        </MenuContextProvider>
      </main>
    </>
  );
};

export default App;
