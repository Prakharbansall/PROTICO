import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center bg-[#FAF9FB] px-6 py-20">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/20 text-[#3E103F] mx-auto">
          <AlertTriangle size={28} />
        </div>
        <h1 className="text-6xl font-black text-[#3E103F]">404</h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The page you are looking for does not exist. The product is strong, but the route is missing.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3E103F] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#5D2E60]"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
