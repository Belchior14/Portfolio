import { Welcome, MenuBtn } from "../../components";
import { useEffect, useState } from "react";

export function HomePage() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return(
      <div>
          {load ? <Welcome /> : <MenuBtn/> }
      </div>
  ) ;
}
