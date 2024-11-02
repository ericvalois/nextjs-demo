import { Dashboard } from "@/components/login-form2";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="flex w-full items-stretch  justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Dashboard></Dashboard>
		</main>
	);
}
