import gradientSectionImg1 from "../assets/images/use-cases/designer/for-designers.webp"; // Replace with your actual image path
import gradientSectionImg2 from "../assets/images/use-cases/developer/for-developers.webp"; // Replace with your actual image path
import gradientSectionImg3 from "../assets/images/use-cases/product-manager/for-productmanagers.webp"; // Replace with your actual image path
import gradientSectionImg4 from "../assets/images/use-cases/compliance-manager/for-compliancemanagers.webp"; // Replace with your actual image path

import headelineCheckSectionImg1 from '../assets/images/use-cases/designer/for-designers-checkfixannotate.webp'
import headelineCheckSectionImg2 from '../assets/images/use-cases/designer/for-designers-smoothesthandoff.webp'
import headelineCheckSectionImg3 from '../assets/images/use-cases/designer/continuous-accessibility-feature-2023.webp'

import headelineCheckSectionImg4 from '../assets/images/use-cases/developer/for-developers.webp'
import headelineCheckSectionImg5 from '../assets/images/use-cases/developer/for-designers-smoothesthandoff.webp'
import headelineCheckSectionImg6 from '../assets/images/use-cases/developer/continuous-accessibility-feature-2023.webp'

import headelineCheckSectionImg7 from '../assets/images/use-cases/product-manager/for-productmanagers-ticketing.webp'
import headelineCheckSectionImg8 from '../assets/images/use-cases/product-manager/continuous-accessibility-feature-2023.webp'
import headelineCheckSectionImg9 from '../assets/images/use-cases/product-manager/for-productmanagers-framework.webp'
import headelineCheckSectionImg10 from '../assets/images/use-cases/product-manager/for-designers-checkfixannotate.webp'
import headelineCheckSectionImg11 from '../assets/images/use-cases/product-manager/for-developers-devtooling.webp'

import headelineCheckSectionImg12 from '../assets/images/use-cases/compliance-manager/for-productmanagers-framework.webp'
import headelineCheckSectionImg13 from '../assets/images/use-cases/compliance-manager/continuous-accessibility-feature-2023.webp'
import headelineCheckSectionImg14 from '../assets/images/use-cases/compliance-manager/for-designers-checkfixannotate.webp'
import headelineCheckSectionImg15 from '../assets/images/use-cases/compliance-manager/for-developers-devtooling.webp'

import headlineMagicSectionImg1 from '../assets/images/use-cases/designer/for-designers-magic.webp'

import headlineMagicDesignerIcon1 from '../assets/images/use-cases/designer/label1.svg'
import headlineMagicDesignerIcon2 from '../assets/images/use-cases/designer/label2.svg'
import headlineMagicDesignerIcon3 from '../assets/images/use-cases/designer/label3.svg'
import headlineMagicDesignerIcon4 from '../assets/images/use-cases/designer/label4.svg'
import headlineMagicDesignerIcon5 from '../assets/images/use-cases/designer/label5.svg'
import headlineMagicDesignerIcon6 from '../assets/images/use-cases/designer/label6.svg'
import headlineMagicDesignerIcon7 from '../assets/images/use-cases/designer/label7.svg'
import headlineMagicDesignerIcon8 from '../assets/images/use-cases/designer/label8.svg'
import headlineMagicDesignerIcon9 from '../assets/images/use-cases/designer/label9.svg'
import headlineMagicDesignerIcon10 from '../assets/images/use-cases/designer/label10.svg'
import headlineMagicDesignerIcon11 from '../assets/images/use-cases/designer/label11.svg'
import headlineMagicDesignerIcon12 from '../assets/images/use-cases/designer/label12.svg'
import headlineMagicDesignerIcon13 from '../assets/images/use-cases/designer/label13.svg'
import headlineMagicDesignerIcon14 from '../assets/images/use-cases/designer/label14.svg'
import headlineMagicDesignerIcon15 from '../assets/images/use-cases/designer/label15.svg'
import headlineMagicDesignerIcon16 from '../assets/images/use-cases/designer/label16.svg'
import headlineMagicDesignerIcon17 from '../assets/images/use-cases/designer/label17.svg'
import headlineMagicDesignerIcon18 from '../assets/images/use-cases/designer/label18.svg'
import headlineMagicDesignerIcon19 from '../assets/images/use-cases/designer/label19.svg'

const UseCaseData = [
	{
		title: "Designers",
		content: "create accessible designs in record time right in Figma &	Sketch.",
		slugs: "designer",
		gradientSectionData: {
			title: "Accessible, by design",
			content: "Stark helps eliminate up to 100% of the accessibility issues originating in design. Our AI-powered Sidekick experience combined with our best-in-class manual tools helps every designer find and fix accessibility issues within seconds. And hand over fully annotated designs to developers.",
			sectionImg: gradientSectionImg1,
		},
		headlineCheckSectionData: [
			{
				sectionImg: headelineCheckSectionImg1,
				spanTitle: "Find and fix accessibility issues",
				title: "in designs 10x faster with AI",
				content: "57% of accessibility issues originate in the design phase. Sidekick in Stark automatically scans Figma or Sketch files and, within seconds, makes suggestions for how to fix the accessibility issues – no prior knowledge needed.",
			},
			{
				sectionImg: headelineCheckSectionImg2,
				spanTitle: "Smoothest design to developer",
				title: "hand-off in the business",
				content: "Whether you design in Figma, Sketch, or Adobe XD, Stark takes the guesswork out of accessibility annotations. And in Figma’s Dev Mode, annotations translate directly into code snippets for developers to take over. Specs never seemed so spectacular.",
			},
			{
				sectionImg: headelineCheckSectionImg3,
				spanTitle: "Real-time reports and insights",
				title: "to keep your projects on track",
				content: "Real-time accessibility reports and insights of your design files and code repos streamline collaboration across departments in one place. Managing accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.",
			},
		],
		headlineMagicSectionData: {
			sectionImg: headlineMagicSectionImg1,
			title: "Come for the features,",
			spanTitle: "stay for the magic",
			listData: [
				{ sectionIcon: headlineMagicDesignerIcon1, title: "Sidekick AI accessibility assistant", },
				{ sectionIcon: headlineMagicDesignerIcon2, title: "Browser Extension", },
				{ sectionIcon: headlineMagicDesignerIcon3, title: "Contrast Checker with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon4, title: "Web Dev Tools with code highlighting", },
				{ sectionIcon: headlineMagicDesignerIcon5, title: "Typography Checker", },
				{ sectionIcon: headlineMagicDesignerIcon6, title: "WCAG Audit & Report", },
				{ sectionIcon: headlineMagicDesignerIcon7, title: "Touch Targets Checker", },
				{ sectionIcon: headlineMagicDesignerIcon8, title: "Figma Dev Mode Hand-off", },
				{ sectionIcon: headlineMagicDesignerIcon9, title: "Alt-Text Annotations with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon10, title: "GitHub Integrations with code scanning", },
				{ sectionIcon: headlineMagicDesignerIcon11, title: "Landmarks Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon12, title: "Projects with real-time Reports & Insights", },
				{ sectionIcon: headlineMagicDesignerIcon13, title: "Focus Order Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon14, title: "Compliance Center", },
				{ sectionIcon: headlineMagicDesignerIcon15, title: "ARIA & Notes Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon16, title: "Ticketing and PM system Integrations", },
				{ sectionIcon: headlineMagicDesignerIcon17, title: "Headings Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon18, title: "And so much more ...", },
				{ sectionIcon: headlineMagicDesignerIcon19, title: "Vision Simulator + Generator", },
			]
		}
	},
	{
		title: "Developers",
		content:
			"Test and audit your code from early implementation to live product.",
		slugs: "developers",
		gradientSectionData: {
			title: "Ready. Set. Accessible Code.",
			content: "Stark makes the handoff from designer to developer seamless, and accelerates the implementation of accessible code. Advanced dev tools and continuous accessibility integrations in GitHub ensure an end-to-end accessibility workflow your team actually loves – fully private and secure.",
			sectionImg: gradientSectionImg2,
		},
		headlineCheckSectionData: [
			{
				sectionImg: headelineCheckSectionImg4,
				spanTitle: "Advanced dev tooling",
				title: "that takes your accessibility up a notch",
				content: "Whether you’re testing on staging or production, Stark enables you to scan for accessibility issues directly in the browser. With code highlighting for issues, live preview to test fixes, and lightning fast WCAG audits, it’s a web dev powerhouse.",
			},
			{
				sectionImg: headelineCheckSectionImg5,
				spanTitle: "Smoothest design to developer",
				title: "hand-off in the business",
				content: "Whether you design in Figma, Sketch, or Adobe XD, Stark takes the guesswork out of accessibility annotations. And in Figma's Dev Mode, annotations translate directly into code snippets for developers to take over. Specs never seemed so spectacular.",
			},
			{
				sectionImg: headelineCheckSectionImg6,
				spanTitle: "Real-time reports and insights",
				title: "to keep your projects on track",
				content: "Real-time accessibility reports and insights of your design files and code repos streamline collaboration across departments in one place. Managing accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.",
			},
		],
		headlineMagicSectionData: {
			sectionImg: headlineMagicSectionImg1,
			title: "Come for the features,",
			spanTitle: "stay for the magic",
			listData: [
				{ sectionIcon: headlineMagicDesignerIcon1, title: "Sidekick AI accessibility assistant", },
				{ sectionIcon: headlineMagicDesignerIcon2, title: "Browser Extension", },
				{ sectionIcon: headlineMagicDesignerIcon3, title: "Contrast Checker with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon4, title: "Web Dev Tools with code highlighting", },
				{ sectionIcon: headlineMagicDesignerIcon5, title: "Typography Checker", },
				{ sectionIcon: headlineMagicDesignerIcon6, title: "WCAG Audit & Report", },
				{ sectionIcon: headlineMagicDesignerIcon7, title: "Touch Targets Checker", },
				{ sectionIcon: headlineMagicDesignerIcon8, title: "Figma Dev Mode Hand-off", },
				{ sectionIcon: headlineMagicDesignerIcon9, title: "Alt-Text Annotations with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon10, title: "GitHub Integrations with code scanning", },
				{ sectionIcon: headlineMagicDesignerIcon11, title: "Landmarks Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon12, title: "Projects with real-time Reports & Insights", },
				{ sectionIcon: headlineMagicDesignerIcon13, title: "Focus Order Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon14, title: "Compliance Center", },
				{ sectionIcon: headlineMagicDesignerIcon15, title: "ARIA & Notes Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon16, title: "Ticketing and PM system Integrations", },
				{ sectionIcon: headlineMagicDesignerIcon17, title: "Headings Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon18, title: "And so much more ...", },
				{ sectionIcon: headlineMagicDesignerIcon19, title: "Vision Simulator + Generator", },
			]
		}
	},
	{
		title: "Product Manager",
		content: "Manage accessiblity in real-time across all your products.",
		slugs: "product-manager",
		gradientSectionData: {
			title: "Ship accessible products in record time.",
			content: "Stark is the only solution to proactively manage digital accessibility end-to-end, and ship compliant products 5-10x faster. Stark connects the tools your team already uses and automatically generates real-time reports and suggested fixes for design files, code repos and live URLs for your team to act on.",
			sectionImg: gradientSectionImg3,
		},
		headlineCheckSectionData: [
			{
				sectionImg: headelineCheckSectionImg7,
				spanTitle: "Send issues directly",
				title: "to your ticketing system and track progress",
				content: "Whether it’s a design file, code repo or live site – Send accessibility issues directly from Stark’s real-time reports as tickets to your projects in Asana, Jira, Trello, Azure DevOps, Bitbucket, Github Issues, GitLab, Linear and more.",
			},
			{
				sectionImg: headelineCheckSectionImg8,
				spanTitle: "Real-time reports and insights",
				title: "to keep your projects on track",
				content: "Streamline collaboration across departments in one place with real-time accessibility scans of your design files, code repos, and live URLs. Managing digital accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.",
			},
			{
				sectionImg: headelineCheckSectionImg9,
				spanTitle: "Manage your accessibility posture",
				title: "across the entire organization",
				content: "Addressing the issue of digital accessibility requires the same level of rigor and prioritization as security and privacy. With Stark’s compliance frameworks and controls, growing your company’s accessibility maturity finally becomes actionable.",
			},
			{
				sectionImg: headelineCheckSectionImg10,
				spanTitle: "Find and fix accessibility issues",
				title: "in designs 10x faster with AI",
				content: "57% of accessibility issues originate in the design phase. Sidekick in Stark automatically scans Figma or Sketch files and, within seconds, makes suggestions for how to fix the accessibility issues – no prior knowledge needed.",
			},
			{
				sectionImg: headelineCheckSectionImg11,
				spanTitle: "Integrated, advanced",
				title: "tooling that saves you up to 100x the dev cost",
				content: "Scan for accessibility issues as early as first lines of code. With continuous scanning in your repos as well as code highlighting in the browser, live preview to test fixes, and lightning fast WCAG audits, Stark’s integrated tools are web dev powerhouse.",
			},
		],
		headlineMagicSectionData: {
			sectionImg: headlineMagicSectionImg1,
			title: "Come for the features,",
			spanTitle: "stay for the magic",
			listData: [
				{ sectionIcon: headlineMagicDesignerIcon1, title: "Sidekick AI accessibility assistant", },
				{ sectionIcon: headlineMagicDesignerIcon2, title: "Browser Extension", },
				{ sectionIcon: headlineMagicDesignerIcon3, title: "Contrast Checker with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon4, title: "Web Dev Tools with code highlighting", },
				{ sectionIcon: headlineMagicDesignerIcon5, title: "Typography Checker", },
				{ sectionIcon: headlineMagicDesignerIcon6, title: "WCAG Audit & Report", },
				{ sectionIcon: headlineMagicDesignerIcon7, title: "Touch Targets Checker", },
				{ sectionIcon: headlineMagicDesignerIcon8, title: "Figma Dev Mode Hand-off", },
				{ sectionIcon: headlineMagicDesignerIcon9, title: "Alt-Text Annotations with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon10, title: "GitHub Integrations with code scanning", },
				{ sectionIcon: headlineMagicDesignerIcon11, title: "Landmarks Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon12, title: "Projects with real-time Reports & Insights", },
				{ sectionIcon: headlineMagicDesignerIcon13, title: "Focus Order Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon14, title: "Compliance Center", },
				{ sectionIcon: headlineMagicDesignerIcon15, title: "ARIA & Notes Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon16, title: "Ticketing and PM system Integrations", },
				{ sectionIcon: headlineMagicDesignerIcon17, title: "Headings Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon18, title: "And so much more ...", },
				{ sectionIcon: headlineMagicDesignerIcon19, title: "Vision Simulator + Generator", },
			]
		}
	},
	{
		title: "Compliance Manager",
		content: "Monitor,manage and audit your accessiblity posture in one place.",
		slugs: "compliance-manager",
		gradientSectionData: {
			title: "Centralize your accessibility compliance",
			content: "Managing digital accessibility compliance requires the same level of rigor and prioritization as security and privacy. With Stark’s Compliance Center, managing your accessibility posture and growing your company’s accessibility maturity becomes centralized, actionable, automated.",
			sectionImg: gradientSectionImg4,
		},
		headlineCheckSectionData: [
			{
				sectionImg: headelineCheckSectionImg12,
				spanTitle: "Manage your accessibility posture",
				title: "across the entire organization",
				content: "Addressing the issue of digital accessibility requires the same level of rigor and prioritization as security and privacy. With Stark’s compliance frameworks and controls, growing your company’s accessibility maturity finally becomes actionable.",
			},
			{
				sectionImg: headelineCheckSectionImg13,
				spanTitle: "Real-time insights to manage",
				title: "compliance reporting",
				content: "Streamline collaboration across departments in one place with real-time accessibility scans of your design files, code repos, and live URLs. Managing digital accessibility at scale without slowing down your team’s velocity just got rocket fuel added to it.",
			},
			{
				sectionImg: headelineCheckSectionImg14,
				spanTitle: "Find and fix accessibility issues",
				title: "in designs 10x faster with AI",
				content: "57% of accessibility issues originate in the design phase. Sidekick in Stark automatically scans Figma or Sketch files and, within seconds, makes suggestions for how to fix the accessibility issues – no prior knowledge needed.",
			},
			{
				sectionImg: headelineCheckSectionImg15,
				spanTitle: "Integrated, advanced",
				title: "tooling that saves you up to 100x the dev cost",
				content: "Scan for accessibility issues as early as first lines of code. With continuous scanning in your repos as well as code highlighting in the browser, live preview to test fixes, and lightning fast WCAG audits, Stark’s integrated tools are web dev powerhouse.",
			},
		],
		headlineMagicSectionData: {
			sectionImg: headlineMagicSectionImg1,
			title: "Come for the features,",
			spanTitle: "stay for the magic",
			listData: [
				{ sectionIcon: headlineMagicDesignerIcon1, title: "Sidekick AI accessibility assistant", },
				{ sectionIcon: headlineMagicDesignerIcon2, title: "Browser Extension", },
				{ sectionIcon: headlineMagicDesignerIcon3, title: "Contrast Checker with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon4, title: "Web Dev Tools with code highlighting", },
				{ sectionIcon: headlineMagicDesignerIcon5, title: "Typography Checker", },
				{ sectionIcon: headlineMagicDesignerIcon6, title: "WCAG Audit & Report", },
				{ sectionIcon: headlineMagicDesignerIcon7, title: "Touch Targets Checker", },
				{ sectionIcon: headlineMagicDesignerIcon8, title: "Figma Dev Mode Hand-off", },
				{ sectionIcon: headlineMagicDesignerIcon9, title: "Alt-Text Annotations with AI suggestions", },
				{ sectionIcon: headlineMagicDesignerIcon10, title: "GitHub Integrations with code scanning", },
				{ sectionIcon: headlineMagicDesignerIcon11, title: "Landmarks Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon13, title: "Focus Order Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon14, title: "Compliance Center", },
				{ sectionIcon: headlineMagicDesignerIcon15, title: "ARIA & Notes Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon16, title: "Ticketing and PM system Integrations", },
				{ sectionIcon: headlineMagicDesignerIcon17, title: "Headings Annotations", },
				{ sectionIcon: headlineMagicDesignerIcon18, title: "And so much more ...", },
				{ sectionIcon: headlineMagicDesignerIcon19, title: "Vision Simulator + Generator", },
			]
		}
	},
];
export default UseCaseData;
