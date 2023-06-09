import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/Button";
import Hero, { HeroBody } from "../../components/Hero";

export const ResourcesHero = () => {
	const router = useRouter();

	return (
		<Hero size={"sm"}>
			<HeroBody
				direction={"h"}
				className={"gap-sm"}
				style={{ justifyContent: "space-between" }}
			>
				<h1>Resources</h1>

				<div className={"flex ai-center gap-sm"}>
					<Button
						colour={router.pathname.endsWith("/resources/privacy") ? "red" : undefined}
						href={"/resources/privacy"}
					>
						Privacy Policy
					</Button>
					<Button
						colour={router.pathname.endsWith("/resources/cookies") ? "red" : undefined}
						href={"/resources/cookies"}
					>
						Cookie Policy
					</Button>
					<Button
						colour={
							router.pathname.endsWith("/resources/accessibility") ? "red" : undefined
						}
						href={"/resources/accessibility"}
					>
						Accessibility Statement
					</Button>
				</div>
			</HeroBody>
		</Hero>
	);
};

export default function Resources() {
	const router = useRouter();
	React.useEffect(() => {
		router.push("/resources/privacy");
	}, []);

	return <></>
}