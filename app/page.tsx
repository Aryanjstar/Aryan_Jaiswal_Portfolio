import { CareerHighlights } from "@/components/career-highlights";
import { Approach } from "@/components/approach";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { RecentProjects } from "@/components/recent-projects";
import { Resume } from "@/components/resume";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

export default function Home() {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
			<div className="w-full max-w-7xl">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<Experience />
				<RecentProjects />
				<Resume />
				<CareerHighlights />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
