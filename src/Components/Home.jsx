import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [daysList, setDaysList] = useState([]);

  const matches = [
    {
      id: 1,
      date: "2021-03-26",
      team1: { teamSName: "RCB", imageId: 225643 },
      team2: { teamSName: "CSK", imageId: 225641 },
      status: "RCB won by 7 runs",
    },
    {
      id: 2,
      date: "2021-03-27",
      team1: { teamSName: "MI", imageId: 225645 },
      team2: { teamSName: "KKR", imageId: 225646 },
      status: "MI won by 5 wickets",
    },
    {
      id: 3,
      date: "2021-03-28",
      team1: { teamSName: "DC", imageId: 225644 },
      team2: { teamSName: "SRH", imageId: 225649 },
      status: "Match drawn",
    },
    {
      id: 4,
      date: "2021-03-29",
      team1: { teamSName: "RR", imageId: 225647 },
      team2: { teamSName: "PBKS", imageId: 225648 },
      status: "RR won by 3 wickets",
    },
    {
      id: 5,
      date: "2021-03-30",
      team1: { teamSName: "LSG", imageId: 225652 },
      team2: { teamSName: "GT", imageId: 225651 },
      status: "LSG won by 4 runs",
    },
    {
      id: 6,
      date: "2021-03-31",
      team1: { teamSName: "LSG", imageId: 225652 },
      team2: { teamSName: "MI", imageId: 225645 },
      status: "LSG won by 5 wickets",
    },
    {
      id: 7,
      date: "2021-04-01",
      team1: { teamSName: "CSK", imageId: 225641 },
      team2: { teamSName: "GT", imageId: 225651 },
      status: "CSK won by 10 runs",
    },
    {
      id: 8,
      date: "2021-04-02",
      team1: { teamSName: "KKR", imageId: 225646 },
      team2: { teamSName: "SRH", imageId: 225649 },
      status: "KKR won by 15 runs",
    },
    {
      id: 9,
      date: "2021-04-03",
      team1: { teamSName: "RCB", imageId: 225643 },
      team2: { teamSName: "PBKS", imageId: 225648 },
      status: "RCB won by 8 wickets",
    },
    {
      id: 10,
      date: "2021-04-04",
      team1: { teamSName: "MI", imageId: 225645 },
      team2: { teamSName: "RR", imageId: 225647 },
      status: "MI won by 6 wickets",
    },
  ];

  // helper function for LSG & GT special images
  const getTeamImage = (team) => {
    if (team.teamSName === "LSG") {
      return "https://res.cloudinary.com/dxhslvse9/image/upload/v1757652696/lsg_axdd4y.png";
    }
    if (team.teamSName === "GT") {
      return "https://res.cloudinary.com/dxhslvse9/image/upload/v1757658140/gt_eq8aqj.png";
    }
    return `https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team.imageId}.png`;
  };

  const formatDate = (dateObj) =>
    dateObj.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  useEffect(() => {
    let startDate = new Date("2021-03-26");
    let endDate = new Date("2021-04-04");

    let days = [];
    while (startDate <= endDate) {
      days.push(formatDate(new Date(startDate)));
      startDate.setDate(startDate.getDate() + 1);
    }
    setDaysList(days);
  }, []);

  const getMatchForDay = (day) => {
    const parts = day.split(" ");
    const mapMonth = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const yyyy = parts[3];
    const dd = parts[1];
    const mm = mapMonth[parts[2]];

    const isoDate = `${yyyy}-${mm}-${dd}`;

    return matches.find((m) => m.date === isoDate) || null;
  };

  return (
    <div className="flex flex-wrap justify-center">
      {daysList.map((day, i) => {
        let matchDetails = getMatchForDay(day);

        return (
          <div key={i} className="w-full sm:w-[90%] md:w-1/2 px-2 mb-4">
            {matchDetails ? (
              <Link
                to={`/matchdetails/${matchDetails.id}`}
                className="block bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700"
              >
                {/* Date */}
                <p className="text-xs md:text-sm text-white mb-2">{day}</p>

                {/* Teams */}
                <div className="flex items-center justify-between mb-2">
                  {/* Team 1 */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <img
                      src={getTeamImage(matchDetails.team1)}
                      alt={matchDetails.team1.teamSName}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-white font-semibold">
                      {matchDetails.team1.teamSName}
                    </span>
                  </div>

                  {/* VS */}
                  <span className="text-xs sm:text-sm md:text-base text-white font-bold mx-1 sm:mx-2">
                    Vs
                  </span>

                  {/* Team 2 */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <img
                      src={getTeamImage(matchDetails.team2)}
                      alt={matchDetails.team2.teamSName}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-white font-semibold">
                      {matchDetails.team2.teamSName}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <p className="text-xs sm:text-sm md:text-base text-white mt-1">
                  {matchDetails.status}
                </p>
              </Link>
            ) : (
              <div className="block bg-gray-900 rounded-xl p-4 border border-gray-700">
                <p className="text-xs md:text-sm text-gray-400 mb-2">{day}</p>
                <p className="text-gray-500">No Match</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;


