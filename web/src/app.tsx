import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { EmptyGoals } from "./components/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function App() {
	const [open, setOpen] = useState(false)

	const { data, isLoading } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
		staleTime: 1000 * 60, // 60 seconds
	});

	if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			{data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
			<CreateGoal setOpen={setOpen}/>
		</Dialog>
	);
}
