import { Toaster, toast } from "sonner";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { useEffect } from "react";
import { Home } from "lucide-react";

const App = () => {
  useEffect(() => {
    toast.info("Press `spacebar` to see magic🪸");
  }, []);

  return (
    <div className="h-[100vh] w-full ">
      <Header />
      <Body />
      <Toaster
        richColors
        toastOptions={{
          style: {
            padding: '1em'
          },
        }}
      />
    </div>
  );
};

export default App;
