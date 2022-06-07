import "./intro.css";
import { Oval } from "react-loader-spinner";


export function Welcome({ load }) {
  return (
    <div className="loading">
      <Oval
        color="#dd7f18"
        secondaryColor="#9f5400"
        height={200}
        width={200}
        load={load}
      />
    </div>
  );
}
