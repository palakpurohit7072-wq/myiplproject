import React, { useState } from "react";

function PointsTable() {
  const pointsTableData = {
    pointsTable: [
      {
        groupName: "Teams",
        pointsTableInfo: [
          {
            teamId: 186,
            teamName: "KKR",
            matchesPlayed: 7,
            matchesWon: 5,
            matchesLost: 1,
            matchesDrawn: 1,
            noRes: 1,
            points: 100,
            nrr: "0.000",
            form: ["W", "A", "W", "D", "L"],
            imageId: "225646",
          },
          {
            teamId: 312,
            teamName: "RR",
            matchesPlayed: 7,
            matchesWon: 3,
            matchesLost: 1,
            matchesDrawn: 3,
            points: 73,
            nrr: "0.000",
            form: ["W", "L", "D", "D", "W"],
            imageId: "225647",
          },
          {
            teamId: 294,
            teamName: "CSK",
            matchesPlayed: 7,
            matchesWon: 3,
            matchesLost: 3,
            noRes: 1,
            points: 68,
            nrr: "0.000",
            form: ["W", "W", "A", "D", "L"],
            imageId: "225641",
          },
          {
            teamId: 105,
            teamName: "SRH",
            matchesPlayed: 8,
            matchesWon: 2,
            matchesLost: 4,
            matchesDrawn: 2,
            points: 61,
            nrr: "0.000",
            form: ["L", "L", "L", "W", "D"],
            imageId: "225649",
          },
          {
            teamId: 314,
            teamName: "LSG",
            matchesPlayed: 8,
            matchesWon: 2,
            matchesLost: 6,
            points: 58,
            nrr: "0.000",
            form: ["L", "L", "L", "L", "W"],
            imageId: "lsg123",
          },
          {
            teamId: 313,
            teamName: "DC",
            matchesPlayed: 7,
            matchesWon: 1,
            matchesLost: 2,
            matchesDrawn: 4,
            points: 56,
            nrr: "0.000",
            form: ["W", "L", "D", "D", "D"],
            imageId: "225644",
          },
        ],
      },
    ],
  };

  const [tableData] = useState(pointsTableData.pointsTable[0].pointsTableInfo);

  return (
    <div className="text-black p-4">

      <div className="hidden lg:block overflow-x-auto">
        <table className="text-center border-separate border-spacing-x-4 w-full min-w-[500px]">
          <thead>
            <tr>
              <th className="p-3 text-left">Team</th>
              <th className="p-3">M</th>
              <th className="p-3">W</th>
              <th className="p-3">L</th>
              <th className="p-3">NNR</th>
              <th className="p-3">PTS</th>
              <th className="p-3">Last 5</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              (
                { teamId, form, matchesLost, matchesPlayed, matchesWon, teamName, nrr, points, imageId },
                i
              ) => (
                <tr
                  key={teamId}
                  className="border-b border-gray-500 hover:bg-gray-700"
                >
                  <td className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{i + 1}.</span>
                      <img
                        src={
                          teamName === "LSG"
                            ? "https://res.cloudinary.com/dxhslvse9/image/upload/v1757652696/lsg_axdd4y.png"
                            : teamName === "GT"
                              ? "https://res.cloudinary.com/dxhslvse9/image/upload/v1757658140/gt_eq8aqj.png"
                              : `https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${imageId}.png`
                        }
                        alt={teamName}
                        className="w-6 h-6 object-contain"
                      />
                      <span>{teamName}</span>
                    </div>
                  </td>
                  <td className="p-3">{matchesPlayed}</td>
                  <td className="p-3">{matchesWon}</td>
                  <td className="p-3">{matchesLost}</td>
                  <td className="p-3">{nrr}</td>
                  <td className="p-3">{points}</td>
                  <td className="p-3">
                    <div className="flex justify-center gap-1 flex-wrap">
                      {form
                        .slice()
                        .reverse()
                        .map((f, idx) =>
                          f === "W" ? (
                            <i
                              key={idx}
                              className="fi fi-sr-check-circle text-green-500"
                            ></i>
                          ) : (
                            <i
                              key={idx}
                              className="fi fi-sr-cross-circle text-red-500"
                            ></i>
                          )
                        )}
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>


      {/* Tablet & Mobile Cards */}
      {/* Tablet & Mobile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-3 px-0 sm:px-4 text-white">
        {tableData.map(
          (
            { teamId, form, matchesLost, matchesPlayed, matchesWon, teamName, nrr, points, imageId },
            i
          ) => (
            <div
              key={teamId}
              className="bg-gray-800 rounded-lg p-3 sm:p-4 shadow-md w-full max-w-full flex flex-col gap-2 sm:gap-3 break-words"
            >
              {/* Team Info */}
              <div className="flex items-center justify-start gap-1 sm:gap-2 flex-wrap">
                <span className="font-bold text-xs sm:text-sm">{i + 1}.</span>
                <img
                  src={
                    teamName === "LSG"
                      ? "https://res.cloudinary.com/dxhslvse9/image/upload/v1757652696/lsg_axdd4y.png"
                      : teamName === "GT"
                        ? "https://res.cloudinary.com/dxhslvse9/image/upload/v1757658140/gt_eq8aqj.png"
                        : `https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${imageId}.png`
                  }
                  alt={teamName}
                  className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                />
                <span className="font-semibold text-xs sm:text-sm">{teamName}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm">
                <div>M: {matchesPlayed}</div>
                <div>W: {matchesWon}</div>
                <div>L: {matchesLost}</div>
                <div>PTS: {points}</div>
                <div>NNR: {nrr}</div>
              </div>

              {/* Form */}
              <div className="flex gap-1 justify-start flex-wrap mt-1 sm:mt-2 text-xs sm:text-sm">
                {form.slice().reverse().map((f, idx) =>
                  f === "W" ? (
                    <i
                      key={idx}
                      className="fi fi-sr-check-circle text-green-500"
                    ></i>
                  ) : (
                    <i
                      key={idx}
                      className="fi fi-sr-cross-circle text-red-500"
                    ></i>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PointsTable;


