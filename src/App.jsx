import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FB]">
      <Navbar />

      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;