import { MenuContextProvider } from "./components/providers";
import AppBar from "./components/AppBar";
import Form from "./components/Form";
import Menu from "./components/Menu";

export const App = () => {
  return (
    <>
      <AppBar />
      <main className="main">
        <MenuContextProvider>
          <Form />
          <Menu />
        </MenuContextProvider>
      </main>
    </>
  );
};

export default App;
