import "../App.css";
import React from "react";

function Footer() {
  return (
    <div className="sticky top-[100vh] w-full bg-slate-900 block">
      <h1 className="text-slate-400 p-1 text-center">© 2023 Luqman Patel</h1>
      <h1 className="text-xs text-slate-400 p-1 text-center">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </h1>
    </div>
  );
}

export default Footer;
