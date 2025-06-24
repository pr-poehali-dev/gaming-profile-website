import Icon from "@/components/ui/icon";

interface PlayerStats {
  rank: string;
  rr: number;
  winRate: number;
  kd: number;
  avgScore: number;
}

interface PlayerProfileProps {
  playerName: string;
  tagline: string;
  avatar: string;
  stats: PlayerStats;
  isOnline: boolean;
}

const PlayerProfile = ({
  playerName,
  tagline,
  avatar,
  stats,
  isOnline,
}: PlayerProfileProps) => {
  return (
    <div className="gaming-card p-6 neon-border hover:animate-neon-pulse transition-all duration-300">
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/files/60fe5e63-55d5-4f62-b552-5a3d2e5dcd8e.jpg"
            alt={playerName}
            className="w-20 h-20 rounded-full border-2 border-valorant-cyan"
          />
          <div
            className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-valorant-dark ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold neon-text text-teal-400">
            ТарТар Vota3#6417
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <Icon name="Trophy" className="text-valorant-gold" size={16} />
            <span className="text-valorant-gold font-semibold">Gold 3</span>
            <span className="text-valorant-gray-light">· 99/100 RR</span>
          </div>
        </div>

        <div className="text-right">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
              isOnline
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-400" : "bg-red-400"}`}
            ></div>
            {isOnline ? "В игре" : "Не в сети"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 rounded-lg bg-valorant-purple/10 border border-valorant-purple/30">
          <div className="text-2xl font-bold text-valorant-purple neon-text">
            {(stats.winRate * 100).toFixed(0)}%
          </div>
          <div className="text-sm text-valorant-gray-light">Винрейт</div>
        </div>

        <div className="text-center p-4 rounded-lg bg-valorant-pink/10 border border-valorant-pink/30">
          <div className="text-2xl font-bold text-valorant-pink neon-text">
            {stats.kd.toFixed(2)}
          </div>
          <div className="text-sm text-valorant-gray-light">K/D</div>
        </div>

        <div className="text-center p-4 rounded-lg bg-valorant-cyan/10 border border-valorant-cyan/30">
          <div className="text-2xl font-bold text-valorant-cyan neon-text">
            {stats.avgScore}
          </div>
          <div className="text-sm text-valorant-gray-light">Ср. счет</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
