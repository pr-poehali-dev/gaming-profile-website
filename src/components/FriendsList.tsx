import Icon from "@/components/ui/icon";

interface Friend {
  id: string;
  name: string;
  tagline: string;
  avatar: string;
  status: "online" | "in-game" | "offline";
  rank: string;
  lastSeen?: string;
}

interface FriendsListProps {
  friends: Friend[];
}

const FriendsList = ({ friends }: FriendsListProps) => {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "online":
        return { color: "text-green-400", bg: "bg-green-400", text: "В сети" };
      case "in-game":
        return {
          color: "text-valorant-cyan",
          bg: "bg-valorant-cyan",
          text: "В игре",
        };
      case "offline":
        return { color: "text-gray-400", bg: "bg-gray-400", text: "Не в сети" };
      default:
        return {
          color: "text-gray-400",
          bg: "bg-gray-400",
          text: "Неизвестно",
        };
    }
  };

  // Сортируем друзей по статусу
  const sortedFriends = [...friends].sort((a, b) => {
    const statusOrder = { "in-game": 0, online: 1, offline: 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="gaming-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon name="Users" className="text-valorant-purple" size={24} />
          <h2 className="text-xl font-bold neon-text text-valorant-purple">
            Друзья
          </h2>
        </div>
        <div className="text-sm text-valorant-gray-light">
          {friends.filter((f) => f.status !== "offline").length} из{" "}
          {friends.length} в сети
        </div>
      </div>

      <div className="space-y-2">
        {sortedFriends.map((friend) => {
          const statusInfo = getStatusInfo(friend.status);

          return (
            <div
              key={friend.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-valorant-darker/50 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-valorant-dark ${statusInfo.bg}`}
                ></div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white group-hover:text-valorant-cyan transition-colors">
                    Руся бомбардир
                  </span>
                  <span className="text-valorant-gray">#{friend.tagline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className={statusInfo.color}>{statusInfo.text}</span>
                  {friend.status === "offline" && friend.lastSeen && (
                    <>
                      <span className="text-valorant-gray">•</span>
                      <span className="text-valorant-gray-light">
                        {friend.lastSeen}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-valorant-gold">{friend.rank}</div>
                {friend.status !== "offline" && (
                  <button className="mt-1 px-2 py-1 text-xs bg-valorant-cyan/20 text-valorant-cyan rounded hover:bg-valorant-cyan/30 transition-colors">
                    Пригласить
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsList;
