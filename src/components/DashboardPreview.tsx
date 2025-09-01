import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle,
  Circle
} from "lucide-react";

export const DashboardPreview = () => {
  const learningPaths = [
    {
      title: "Data Science Fundamentals",
      progress: 75,
      modules: 8,
      completed: 6,
      timeLeft: "2 weeks",
      difficulty: "Intermediate"
    },
    {
      title: "Python for Beginners",
      progress: 100,
      modules: 12,
      completed: 12,
      timeLeft: "Completed",
      difficulty: "Beginner"
    },
    {
      title: "Machine Learning Basics",
      progress: 30,
      modules: 10,
      completed: 3,
      timeLeft: "4 weeks",
      difficulty: "Advanced"
    }
  ];

  const achievements = [
    { title: "First Course Completed", icon: Trophy, earned: true },
    { title: "Week Streak", icon: Star, earned: true },
    { title: "Data Wizard", icon: BookOpen, earned: false },
    { title: "Learning Champion", icon: CheckCircle, earned: false }
  ];

  const upcomingTasks = [
    { task: "Complete Python Variables Module", due: "Today", priority: "high" },
    { task: "Submit Data Analysis Project", due: "Tomorrow", priority: "medium" },
    { task: "Take ML Quiz", due: "This Week", priority: "low" }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Track Your Progress with
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Smart Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your learning journey, celebrate achievements, and stay motivated
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning Paths */}
          <div className="lg:col-span-2">
            <Card className="shadow-elevated border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>My Learning Paths</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningPaths.map((path, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold mb-1">{path.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{path.completed}/{path.modules} modules</span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{path.timeLeft}</span>
                          </span>
                        </div>
                      </div>
                      <Badge variant={path.difficulty === "Beginner" ? "secondary" : path.difficulty === "Intermediate" ? "default" : "destructive"}>
                        {path.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                    
                    {path.progress < 100 && (
                      <Button size="sm" variant="outline" className="mt-3">
                        Continue Learning
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${
                    achievement.earned ? "bg-success/10" : "bg-muted/50"
                  }`}>
                    <achievement.icon className={`h-5 w-5 ${
                      achievement.earned ? "text-success" : "text-muted-foreground"
                    }`} />
                    <span className={`text-sm ${
                      achievement.earned ? "text-success-foreground" : "text-muted-foreground"
                    }`}>
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Upcoming Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Circle className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{task.task}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">{task.due}</span>
                        <Badge 
                          variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-hero shadow-glow">
            <BookOpen className="mr-2 h-5 w-5" />
            View Full Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};