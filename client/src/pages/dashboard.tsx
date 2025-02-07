import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Project, type ProjectMilestone } from "@shared/schema";
import { CalendarDays, CheckCircle2, Clock } from "lucide-react";
import { format } from "date-fns";

function ProjectCard({ project }: { project: Project & { milestones: ProjectMilestone[] } }) {
  const completedMilestones = project.milestones.filter((m) => m.completed).length;
  const totalMilestones = project.milestones.length;
  const progress = totalMilestones ? (completedMilestones / totalMilestones) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>開始日: {format(new Date(project.startDate), "yyyy/MM/dd")}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">進捗状況</span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-sm">
                完了: {completedMilestones}/{totalMilestones}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-blue-500" />
              <span className="text-sm">
                ステータス: {project.status}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const { data: projects, isLoading } = useQuery<
    (Project & { milestones: ProjectMilestone[] })[]
  >({
    queryKey: ["/api/dashboard/projects"],
  });

  if (isLoading) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">ダッシュボード</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">ダッシュボード</h1>
      <Tabs defaultValue="all">
        <TabsList className="mb-8">
          <TabsTrigger value="all">すべてのプロジェクト</TabsTrigger>
          <TabsTrigger value="active">進行中</TabsTrigger>
          <TabsTrigger value="completed">完了</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              ?.filter((p) => p.status !== "completed")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              ?.filter((p) => p.status === "completed")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
