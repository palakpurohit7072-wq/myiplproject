import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InPageNavigation = ({ teams, onTeamClick, activeIndex: activeProp }) => {
  const [activeIndex, setActiveIndex] = useState(activeProp ?? 0);
  const navigate = useNavigate();

  const toggleButton = (i, team) => {
    setActiveIndex(i);
    onTeamClick?.(team, i);

    if (team.path) {
      navigate(team.path);
    }
  };

  return (
    <div className="relative w-full">
    
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 gap-2 px-2 py-1">
        {teams && teams.length > 0 ? (
          teams.map((team, i) => (
            <button
              key={i}
              className={`
                relative w-full sm:w-auto text-center rounded-md font-semibold
                text-sm sm:text-lg md:text-xl
                px-3 py-2 md:px-6 md:py-3
                ${activeIndex === i
                  ? "bg-gray-800 text-white"
                  : "bg-gray-700 text-gray-400 hover:bg-gray-600"}
              `}
              onClick={() => toggleButton(i, team)}
            >
              {team.title}

              {/* underline only for active button */}
              {activeIndex === i && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white"></span>
              )}
            </button>
          ))
        ) : (
          <p className="text-gray-400 p-2">No Teams Found</p>
        )}
      </div>
    </div>
  );
};

export default InPageNavigation;



