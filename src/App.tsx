import MainLayout from "./layout/MainLayout";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { darkTheme }: any = useAppSelector((store) => store.theme);
  return (
    <div
      className={`w-full min-h-screen ${
        darkTheme ? "bg-black text-white" : ""
      }`}
    >
      <MainLayout />
    </div>
  );
}

export default App;
