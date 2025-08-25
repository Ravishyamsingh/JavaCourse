import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Lock, Star, Trophy, Award, Zap } from 'lucide-react';
import { useState } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  date: string | null;
  category: string;
  rarity: string;
}

interface AchievementsGridProps {
  achievements: Achievement[];
}

export default function AchievementsGrid({ achievements }: AchievementsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(achievements.map(a => a.category)))];
  const rarities = ['all', ...Array.from(new Set(achievements.map(a => a.rarity)))];

  const filteredAchievements = achievements.filter(achievement => {
    const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory;
    const rarityMatch = selectedRarity === 'all' || achievement.rarity === selectedRarity;
    return categoryMatch && rarityMatch;
  });

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = (unlockedCount / totalCount) * 100;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-500';
      case 'uncommon': return 'from-green-400 to-green-500';
      case 'rare': return 'from-blue-400 to-blue-500';
      case 'epic': return 'from-purple-400 to-purple-500';
      case 'legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityBadgeColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'uncommon': return 'bg-green-100 text-green-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'milestone': return <Star className="h-4 w-4" />;
      case 'skill': return <Zap className="h-4 w-4" />;
      case 'consistency': return <Trophy className="h-4 w-4" />;
      case 'mastery': return <Award className="h-4 w-4" />;
      default: return <CheckCircle2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Achievement Overview */}
      <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">Achievement Progress</div>
                <div className="text-sm text-gray-600">{unlockedCount} of {totalCount} achievements unlocked</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{Math.round(completionPercentage)}%</div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={completionPercentage} className="h-3 mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rarities.slice(1).map(rarity => {
              const rarityAchievements = achievements.filter(a => a.rarity === rarity);
              const unlockedRarity = rarityAchievements.filter(a => a.unlocked).length;
              return (
                <div key={rarity} className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border">
                  <div className={`text-lg font-bold bg-gradient-to-r ${getRarityColor(rarity)} bg-clip-text text-transparent capitalize`}>
                    {rarity}
                  </div>
                  <div className="text-sm text-gray-600">{unlockedRarity}/{rarityAchievements.length}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Category:</span>
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 capitalize ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Rarity:</span>
              <div className="flex space-x-2">
                {rarities.map(rarity => (
                  <button
                    key={rarity}
                    onClick={() => setSelectedRarity(rarity)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 capitalize ${
                      selectedRarity === rarity
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                    }`}
                  >
                    {rarity}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={`group overflow-hidden border-0 shadow-xl transition-all duration-500 hover:scale-105 ${
              achievement.unlocked
                ? `bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 hover:shadow-yellow-500/20`
                : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-gray-500/20'
            }`}
          >
            <CardContent className="p-6 relative">
              {/* Rarity Glow Effect */}
              {achievement.unlocked && (
                <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(achievement.rarity)} opacity-5 rounded-lg`}></div>
              )}
              
              {/* Achievement Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`relative p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                  achievement.unlocked
                    ? `bg-gradient-to-br ${getRarityColor(achievement.rarity)} text-white shadow-lg`
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {achievement.unlocked ? achievement.icon : <Lock className="h-6 w-6" />}
                  {achievement.unlocked && achievement.rarity === 'legendary' && (
                    <div className="absolute -top-1 -right-1">
                      <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge className={`text-xs ${getRarityBadgeColor(achievement.rarity)} capitalize`}>
                    {achievement.rarity}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {getCategoryIcon(achievement.category)}
                    <span className="text-xs text-gray-500 capitalize">{achievement.category}</span>
                  </div>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="space-y-3">
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${
                    achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${
                    achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Achievement Status */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200/50">
                  {achievement.unlocked ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">Unlocked</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-400 font-medium">Locked</span>
                    </div>
                  )}
                  
                  {achievement.unlocked && achievement.date && (
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                  )}
                </div>
              </div>

              {/* Unlock Animation Effect */}
              {achievement.unlocked && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-2 opacity-20">
                    <Star className="h-8 w-8 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Trophy className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">No achievements found</h3>
            <p className="text-sm text-gray-500">Try adjusting your filters to see more achievements.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
