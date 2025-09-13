// Matchdetails.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import InPageNavigation from "./InPageNavigation";

const Matchdetails = () => {
  let { id } = useParams();


  const fixedData = [
    {
      matchInfo: {
        matchId: 1,
        date: "Sat, 27 Mar 2021",
        team1: {
          id: 101,
          name: "RCB",
          playerDetails: [
            { id: 1, name: "Virat Kohli", role: "Batsman" },
            { id: 2, name: "Faf du Plessis", role: "Batsman" },
            { id: 3, name: "Glenn Maxwell", role: "All-rounder" },
            { id: 4, name: "AB de Villiers", role: "WK-Batsman" },
            { id: 5, name: "Devdutt Padikkal", role: "Batsman" },
            { id: 6, name: "Mohammed Siraj", role: "Bowler" },
            { id: 7, name: "Yuzvendra Chahal", role: "Bowler" },
            { id: 8, name: "Shahbaz Ahmed", role: "All-rounder" },
            { id: 9, name: "Kyle Jamieson", role: "All-rounder" },
          ],
        },
        team2: {
          id: 102,
          name: "CSK",
          playerDetails: [
            { id: 12, name: "MS Dhoni", role: "WK-Batsman" },
            { id: 13, name: "Ruturaj Gaikwad", role: "Batsman" },
            { id: 14, name: "Ambati Rayudu", role: "Batsman" },
            { id: 15, name: "Ravindra Jadeja", role: "All-rounder" },
            { id: 16, name: "Moeen Ali", role: "All-rounder" },
            { id: 17, name: "Deepak Chahar", role: "Bowler" },
            { id: 18, name: "Dwayne Bravo", role: "All-rounder" },
            { id: 19, name: "Shardul Thakur", role: "Bowler" },
            { id: 20, name: "Ravindra Jadeja", role: "All-rounder" },
          ],
        },
        status: "RCB won by 7 runs",
      },
    },
    {
      matchInfo: {
        matchId: 2,
        date: "Sun, 28 Mar 2021",
        team1: {
          id: 103,
          name: "MI",
          playerDetails: [
            { id: 21, name: "Rohit Sharma", role: "Batsman" },
            { id: 22, name: "Ishan Kishan", role: "WK-Batsman" },
            { id: 23, name: "Hardik Pandya", role: "All-rounder" },
            { id: 24, name: "Kieron Pollard", role: "All-rounder" },
            { id: 25, name: "Jasprit Bumrah", role: "Bowler" },
            { id: 26, name: "Trent Boult", role: "Bowler" },
            { id: 27, name: "Suryakumar Yadav", role: "Batsman" },
            { id: 28, name: "Krunal Pandya", role: "All-rounder" },
            { id: 29, name: "Rahul Chahar", role: "Bowler" },
          ],
        },
        team2: {
          id: 104,
          name: "DC",
          playerDetails: [
            { id: 31, name: "Rishabh Pant", role: "WK-Batsman" },
            { id: 32, name: "Prithvi Shaw", role: "Batsman" },
            { id: 33, name: "Shikhar Dhawan", role: "Batsman" },
            { id: 34, name: "Axar Patel", role: "All-rounder" },
            { id: 35, name: "Kagiso Rabada", role: "Bowler" },
            { id: 36, name: "Anrich Nortje", role: "Bowler" },
            { id: 37, name: "Marcus Stoinis", role: "All-rounder" },
            { id: 38, name: "Steve Smith", role: "Batsman" },
            { id: 39, name: "Ishant Sharma", role: "Bowler" },
          ],
        },
        status: "MI won by 5 wickets",
      },
    },
    {
      matchInfo: {
        matchId: 3,
        date: "Mon, 29 Mar 2021",
        team1: {
          id: 105,
          name: "KKR",
          playerDetails: [
            { id: 41, name: "Shreyas Iyer", role: "Batsman" },
            { id: 42, name: "Andre Russell", role: "All-rounder" },
            { id: 43, name: "Sunil Narine", role: "All-rounder" },
            { id: 44, name: "Nitish Rana", role: "Batsman" },
            { id: 45, name: "Pat Cummins", role: "Bowler" },
            { id: 46, name: "Varun Chakravarthy", role: "Bowler" },
            { id: 47, name: "Shivam Mavi", role: "Bowler" },
            { id: 48, name: "Venkatesh Iyer", role: "All-rounder" },
            { id: 49, name: "Rahul Tripathi", role: "Batsman" },
          ],
        },
        team2: {
          id: 106,
          name: "SRH",
          playerDetails: [
            { id: 51, name: "Kane Williamson", role: "Batsman" },
            { id: 52, name: "David Warner", role: "Batsman" },
            { id: 53, name: "Rashid Khan", role: "Bowler" },
            { id: 54, name: "Bhuvneshwar Kumar", role: "Bowler" },
            { id: 55, name: "Jonny Bairstow", role: "WK-Batsman" },
            { id: 56, name: "Abhishek Sharma", role: "All-rounder" },
            { id: 57, name: "Wriddhiman Saha", role: "WK-Batsman" },
            { id: 58, name: "Umran Malik", role: "Bowler" },
            { id: 59, name: "Vijay Shankar", role: "All-rounder" },
          ],
        },
        status: "SRH won by 3 wickets",
      },
    },
    {
      matchInfo: {
        matchId: 4,
        date: "Tue, 30 Mar 2021",
        team1: {
          id: 107,
          name: "PBKS",
          playerDetails: [
            { id: 61, name: "KL Rahul", role: "WK-Batsman" },
            { id: 62, name: "Mayank Agarwal", role: "Batsman" },
            { id: 63, name: "Chris Gayle", role: "Batsman" },
            { id: 64, name: "Mohammad Shami", role: "Bowler" },
            { id: 65, name: "Ravi Bishnoi", role: "Bowler" },
            { id: 66, name: "Nicholas Pooran", role: "Batsman" },
            { id: 67, name: "Liam Livingstone", role: "Batsman" },
            { id: 68, name: "Arshdeep Singh", role: "Bowler" },
            { id: 69, name: "Shahrukh Khan", role: "Batsman" },
          ],
        },
        team2: {
          id: 108,
          name: "RR",
          playerDetails: [
            { id: 71, name: "Sanju Samson", role: "WK-Batsman" },
            { id: 72, name: "Jos Buttler", role: "WK-Batsman" },
            { id: 73, name: "Ben Stokes", role: "All-rounder" },
            { id: 74, name: "Jofra Archer", role: "Bowler" },
            { id: 75, name: "Yashasvi Jaiswal", role: "Batsman" },
            { id: 76, name: "Trent Boult", role: "Bowler" },
            { id: 77, name: "Devdutt Padikkal", role: "Batsman" },
            { id: 78, name: "Riyan Parag", role: "All-rounder" },
            { id: 79, name: "Chris Morris", role: "All-rounder" },
          ],
        },
        status: "PBKS won by 10 runs",
      },
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const match = fixedData.find((m) => m.matchInfo.matchId.toString() === id);

  if (!match) return <h2>No Match Found</h2>;

  const teams = [
    {
      title: match.matchInfo.team1.name,
      path: "#",
      playerDetails: match.matchInfo.team1.playerDetails,
    },
    {
      title: match.matchInfo.team2.name,
      path: "#",
      playerDetails: match.matchInfo.team2.playerDetails,
    },
  ];

  const handleTeamClick = (team, index) => {
    setSelectedTeam(team.title);
    setSelectedPlayers(team.playerDetails);
    setActiveIndex(index);
  };

  return (
    <div className="p-4 text-black">
      <h2 className="text-xl font-bold mb-2">Match Details</h2>
      <p className="mb-4">
        {match.matchInfo.date} — {match.matchInfo.status}
      </p>

      <InPageNavigation
        teams={teams}
        onTeamClick={handleTeamClick}
        activeIndex={activeIndex}
      />

      {selectedTeam && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">
            Players of {selectedTeam}
          </h3>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {selectedPlayers.map((p) => (
              <div
                key={p.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-white font-bold">{p.name}</h4>
                <p className="text-sm text-gray-300">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Matchdetails;
