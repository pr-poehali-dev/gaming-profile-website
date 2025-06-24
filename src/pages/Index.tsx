import PlayerProfile from "@/components/PlayerProfile";
import MatchHistory from "@/components/MatchHistory";
import FriendsList from "@/components/FriendsList";

const Index = () => {
  // Демо данные для профиля
  const playerData = {
    playerName: "NeonStrike",
    tagline: "RU1",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
    stats: {
      rank: "Immortal 2",
      rr: 47,
      winRate: 0.73,
      kd: 1.45,
      avgScore: 285,
    },
    isOnline: true,
  };

  // Демо данные для истории матчей
  const matchHistory = [
    {
      id: "1",
      map: "Ascent",
      mode: "Competitive",
      result: "victory" as const,
      score: "13-8",
      kills: 24,
      deaths: 15,
      assists: 8,
      agent: "Jett",
      date: "2 часа назад",
    },
    {
      id: "2",
      map: "Bind",
      mode: "Competitive",
      result: "defeat" as const,
      score: "11-13",
      kills: 18,
      deaths: 17,
      assists: 6,
      agent: "Reyna",
      date: "4 часа назад",
    },
    {
      id: "3",
      map: "Haven",
      mode: "Competitive",
      result: "victory" as const,
      score: "13-7",
      kills: 27,
      deaths: 12,
      assists: 5,
      agent: "Phoenix",
      date: "Вчера",
    },
    {
      id: "4",
      map: "Split",
      mode: "Unrated",
      result: "victory" as const,
      score: "13-9",
      kills: 21,
      deaths: 14,
      assists: 7,
      agent: "Sage",
      date: "Вчера",
    },
  ];

  // Демо данные для списка друзей
  const friendsList = [
    {
      id: "1",
      name: "CyberWolf",
      tagline: "007",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
      status: "in-game" as const,
      rank: "Diamond 3",
    },
    {
      id: "2",
      name: "QuantumAce",
      tagline: "RU3",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      status: "online" as const,
      rank: "Immortal 1",
    },
    {
      id: "3",
      name: "VoidHunter",
      tagline: "666",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "offline" as const,
      rank: "Ascendant 2",
      lastSeen: "30 мин назад",
    },
    {
      id: "4",
      name: "NeonBlade",
      tagline: "RU2",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      status: "online" as const,
      rank: "Diamond 1",
    },
    {
      id: "5",
      name: "FlashPoint",
      tagline: "PRO",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      status: "offline" as const,
      rank: "Radiant",
      lastSeen: "2 часа назад",
    },
  ];

  return (
    <div className="min-h-screen bg-valorant-dark p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold neon-text text-valorant-cyan animate-glow mb-2">
            VALORANT PROFILE
          </h1>
          <p className="text-valorant-gray-light">
            Киберспортивная статистика и прогресс
          </p>
        </div>

        {/* Профиль игрока */}
        <PlayerProfile {...playerData} />

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* История матчей */}
          <div className="lg:col-span-2">
            <MatchHistory matches={matchHistory} />
          </div>

          {/* Список друзей */}
          <div className="lg:col-span-1">
            <FriendsList friends={friendsList} />
          </div>
        </div>

        {/* Футер с дополнительной информацией */}
        <div className="text-center text-valorant-gray-light text-sm mt-12">
          <div className="gaming-card p-4 inline-block">
            <p>🎮 Создано для истинных агентов VALORANT</p>
            <p className="mt-1">
              Следи за статистикой • Улучшай навыки • Достигай вершин
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
