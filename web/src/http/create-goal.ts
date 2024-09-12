interface CreateGoalRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalRequest) {
  try {
    const response = await fetch("http://localhost:3333/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desiredWeeklyFrequency,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create goal: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error("An error occurred while creating the goal. Please try again later.");
  }
}
