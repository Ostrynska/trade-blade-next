import { IBM_Plex_Sans } from "next/font/google";
import "./container.css";

export default function Container({ children }) {
  return (
    <div className="layout-wrapper">
        {children}
    </div>
  );
}
