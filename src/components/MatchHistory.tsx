import Icon from "@/components/ui/icon";

interface Match {
  id: string;
  map: string;
  mode: string;
  result: "victory" | "defeat";
  score: string;
  kills: number;
  deaths: number;
  assists: number;
  agent: string;
  date: string;
}

interface MatchHistoryProps {
  matches: Match[];
}

const MatchHistory = ({ matches }: MatchHistoryProps) => {
  const getResultColor = (result: string) => {
    return result === "victory" ? "text-green-400" : "text-red-400";
  };

  const getResultBg = (result: string) => {
    return result === "victory"
      ? "bg-green-500/10 border-green-500/30"
      : "bg-red-500/10 border-red-500/30";
  };

  return (
    <div className="gaming-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="History" className="text-valorant-cyan" size={24} />
        <h2 className="text-xl font-bold neon-text text-valorant-cyan">
          История матчей
        </h2>
      </div>

      <div className="space-y-3">
        {matches.map((match) => (
          <div
            key={match.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-valorant-darker border border-valorant-gray/20 hover:border-valorant-cyan/30 transition-all duration-300"
          >
            <div
              className={`px-3 py-1 rounded text-sm font-semibold border ${getResultBg(match.result)} ${getResultColor(match.result)}`}
            >
              {match.result === "victory" ? "ПОБЕДА" : "ПОРАЖЕНИЕ"}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">{match.map}</span>
                <span className="text-valorant-gray">•</span>
                <span className="text-valorant-gray-light">{match.mode}</span>
              </div>
              <div className="text-sm text-valorant-gray-light mt-1">
                {match.agent} • {match.date}
              </div>
            </div>

            <div className="text-center">
              <div className="font-bold text-white">{match.score}</div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-400 font-semibold">
                  {match.kills}
                </div>
                <div className="text-valorant-gray">У</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-semibold">{match.deaths}</div>
                <div className="text-valorant-gray">С</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-semibold">
                  {match.assists}
                </div>
                <div className="text-valorant-gray">П</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg font-bold text-valorant-cyan">
                {(match.kills / Math.max(match.deaths, 1)).toFixed(2)}
              </div>
              <div className="text-sm text-valorant-gray">K/D</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHistory;
