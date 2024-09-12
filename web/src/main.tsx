import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<App />

		<Toaster position="bottom-left" richColors />
	</QueryClientProvider>,
);
