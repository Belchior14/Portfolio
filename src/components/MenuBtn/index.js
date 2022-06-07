import { AiFillInfoCircle } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./menuBtn.css";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

export function MenuBtn(props) {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => navigate("/projects")}
          tooltip="Projects"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <BiDumbbell size={40} />
        </CircleMenuItem>
        <CircleMenuItem
          tooltip="Achievements"
          onClick={() => navigate("/achiev")}
        >
          <GiAchievement size={40} />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Info" onClick={() => navigate("/info")}>
          <AiFillInfoCircle size={40} />
        </CircleMenuItem>
      </CircleMenu>
      {/*  */}
    </div>
  );
}
