const ResourceWCAGData = [
	{
		title: "1. Perceivable",
		subListData: [
			{
				title: "1.1 Text Alternatives",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.1, including its sub-criterion 1.1.1, is all about making non-text content accessible. This is crucial because not everyone can access visual information the same way. The idea is to ensure that images, charts, and other non-text elements on a website or app are not roadblocks for users with disabilities, particularly those who rely on screen readers or have visual impairments.",
					},
					{
						title: "What:",
						content:
							"WCAG 1.1 requires that all non-text content (think images, graphs, charts, animations, etc.) has a text alternative. This helps users who can't see or interpret these elements in the usual way. Sub-criterion 1.1.1 zooms in on this, specifying text descriptions for every non-text element. These descriptions should convey the same purpose or information as the visual content.",
					},
					{
						title: "Why:",
						content:
							"This criterion is essential because it breaks down barriers for people with visual impairments. Imagine trying to understand a graph without being able to see it, or navigating a website where images convey crucial information but aren't described. Text alternatives level the playing field, giving these users access to the same information as everyone else.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Images:</strong> A photo on a news article should
										have alt text describing what's in the image, not just
										"image" or "photo".
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Graphs and Charts:</strong> For a graph showing
										climate change data, the alt text should summarize the key
										trends or data points, not just say "graph of climate data".
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Icons and Buttons:</strong> An icon used for
										navigation, like a 'home' button, should have text
										explaining its function, not just its appearance.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Use the alt attribute in HTML for
										images. For complex graphics, consider a longer description
										nearby.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Use accessibility labels for
										images and icons in your app's code.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Documents:</strong> In PDFs or Word documents, add
										alt text to images through the format options.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Decorative Images:</strong> If an image is purely
										decorative and adds no information (like a stylistic
										border), it doesn't need a description.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>CAPTCHAs:</strong> These are exempt, as they're
										designed to tell humans and computers apart.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Complex Media:</strong> If the content is too
										complex to describe succinctly (like a detailed map), a text
										alternative providing equivalent information is acceptable.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "WCAG Understanding Guideline 1.1",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "1.2 Time-based Media",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.2 focuses on making audio and video content accessible, especially for users who can't see or hear it. The main goal here is to ensure that everyone, regardless of their ability to hear or see, gets the same information from media content. This section covers both pre-recorded and live media, and it's important to understand the differences in how we make each type accessible.",
					},
					{
						title: "What:",
						content:
							"This criterion addresses the need for alternatives for audio and video content. For pre-recorded media, this means things like captions, audio descriptions, and transcripts. For live media, the focus is on providing real-time captions. The key difference is the immediacy and method of providing accessibility features - live content requires real-time solutions.",
					},
					{
						title: "Why:",
						content:
							"Think about trying to watch a video without sound or seeing a live webinar without captions if you can't hear. This criterion is about giving those with hearing or visual impairments the same chance to access this content. It's not just about compliance but about inclusivity and reaching a wider audience.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Pre-recorded Videos:</strong> A tutorial video
										should have captions and an audio description to ensure it's
										accessible to users who are d/Deaf or blind.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Live Webinars:</strong> Real-time captioning is
										crucial so that participants who are d/Deaf or hard of
										hearing can follow along.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Audio Content:</strong> For a podcast, a transcript
										should be provided for those who can't hear it.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites and Digital Platforms:</strong> Use
										captioning services for videos. For audio content, ensure a
										transcript is available. For live streams, integrate
										real-time captioning tools.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Similar to websites, ensure
										any in-app media has captions and transcripts, and consider
										audio descriptions where appropriate.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Live Captions:</strong> While live captions are
										ideal, they might not be required if the content is provided
										in a text format simultaneously (like a live text blog along
										with a live audio stream).
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Controlled Media:</strong> If the media is not
										publicly available and is used in a controlled environment
										like a school, different standards can apply.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "1.3 Adaptable",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.3, titled Adaptable, is all about creating content that can be presented in different ways without losing meaning. It's not just about how things look, but how they're structured and organized. This criterion is crucial for users who need to consume content in non-standard formats, like large print, braille, or screen readers.",
					},
					{
						title: "What:",
						content:
							"This criterion mandates that information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. In simpler terms, it means that the content should be understandable and navigable, regardless of how it's presented. This includes proper labeling of form elements, using headings correctly, and ensuring that tables are read correctly by screen readers.",
					},
					{
						title: "Why:",
						content:
							"Imagine you're using a screen reader and the page is a jumble of out-of-context phrases, or you're relying on a keyboard and can't navigate through a form correctly. WCAG 1.3 addresses these issues by ensuring content is structured logically and can adapt to different presentation formats without losing its meaning or function.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Structured Forms: </strong> Labels and instructions
										in forms should be programmatically connected to their
										fields, so screen readers can accurately describe each
										field.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Headings and Labels: </strong>Use headings correctly
										to structure content. A screen reader can then convey the
										structure and help users navigate more easily.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Data Tables: </strong>Tables should have proper
										headers and descriptions so that someone using a screen
										reader can understand the data as it's intended.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										{/* <strong>Websites:</strong> : Use semantic HTML, like <h1> to <h6> for headings, <label> for form labels, and appropriate ARIA roles. */}
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Ensure that elements are
										correctly labeled and that the screen reader can accurately
										describe and interact with content.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>CAPTCHAs:</strong> Again, these are exempt for their
										intended purpose.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Decorative Elements:</strong> If an element is
										purely decorative and conveys no information or structure,
										it doesn't need to be programmatically determinable.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "1.4 Distinguishable",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.4 focuses on making web content more accessible through better visual presentation. It addresses the needs of users who have visual impairments like color blindness, low vision, or sensitivity to brightness. The criterion ensures that information is not conveyed through color alone, text is readable and understandable, and the content is visible and distinguishable.",
					},
					{
						title: "What:",
						content:
							"This criterion includes guidelines for text contrast, color use, resizing text, avoiding text in images, and adapting content to different viewing environments. The goal is to make sure that all users, regardless of their visual capabilities, can access and understand content comfortably.Sure, here are brief summaries for each sub-criterion under WCAG 1.4 up to 1.4.13:",
					},
					{
						title: "Why:",
						content:
							"Visual accessibility is crucial because a significant number of users have some form of visual impairment. Without considering these aspects, we risk excluding a large audience who might find content hard to read, understand, or even physically uncomfortable to view.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Contrast</strong> Ensure there's enough contrast
										between text and background, so it's readable even for
										someone with low vision.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Color Usage:</strong> Don't use color as the only
										way to convey information. For instance, in a graph, use
										patterns or labels in addition to color
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Text Resizing: </strong> Text should be resizable up
										to 200% without loss of content or functionality, aiding
										users with low vision.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Use CSS to control text and
										background colors, ensuring high contrast. Avoid color-only
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Implement dynamic text
										resizing and high-contrast modes. Test your app with
										different color settings and screen magnifiers.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Logos and Brand Names: </strong> Text that's part of
										a logo or brand name is exempt from contrast requirements.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Incidental Text: </strong> Text that's part of an
										inactive user interface component, purely decorative, or not
										visible to anyone, does not need to meet these guidelines.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
		],
		contentData: [
			{
				title: "Summary",
				content:
					"Principle 1 of the Web Content Accessibility Guidelines (WCAG) focuses on making web content perceivable to all users, regardless of their sensory abilities. This principle ensures that information and user interface components are presented in ways that can be perceived by everyone.",
			},
			{
				title: "Why It's Important:",
				content:
					"Ensuring content is perceivable is fundamental to web accessibility. It caters to users with a diverse range of hearing, movement, sight, and cognitive ability, ensuring that digital content is accessible and inclusive.",
			},
			{
				title: "Examples and Scenarios:",
				listType: "ordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Alt Text for Images:</strong> Providing descriptive text
								for images aids users with visual impairments.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Captions for Videos:</strong> Including captions for
								videos assists users who are deaf or hard of hearing.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Readable Fonts and Colors:</strong> Ensuring text is
								readable for users with visual impairments or color blindness.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Accessible Forms:</strong> Designing forms so they can
								be easily navigated by screen readers.
							</>
						),
					},
				],
			},
			{
				title: "How to Comply:",
				content:
					"Apply accessible design principles, such as providing text alternatives, captions, adaptable layouts, and distinguishable elements, ensuring content is accessible to a wide audience.",
			},
			{
				title: "Exceptions:",
				listType: "unordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Decorative Elements:</strong> These may not need text
								alternatives if they are purely decorative and provide no
								information.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Complex Content:</strong> Sometimes, certain complex
								information (like advanced scientific data) may pose challenges
								for adaptation but should be made as accessible as possible.
							</>
						),
					},
				],
			},
		],
		WCAGLinksData: [
			{
				title: "WCAG 2.2 documentation",
				content: "Official WCAG criterion documentation",
			},
		],
	},
	{
		title: "2. Operable",
		subListData: [
			{
				title: "2.1 Keyboard Accessible",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 2.1, Keyboard Accessible, ensures that all web and digital content functionalities are operable through keyboard inputs alone. This is crucial for users who can't use a mouse due to physical, visual, or technological constraints. The focus here is on universal keyboard navigation, empowering a wider range of users to interact with digital content seamlessly.",
					},
					{
						title: "What:",
						content:
							"This guideline mandates that all interactive elements on websites and applications must be accessible using a keyboard. This includes navigating through menus, activating buttons and links, filling out forms, and controlling media players, all without the necessity of a mouse.",
					},
					{
						title: "Why:",
						content:
							"Many users rely on keyboards or keyboard-like devices due to physical disabilities, visual impairments, or simply due to preference or convenience. Keyboard accessibility is vital as it ensures that these users have equal access to web and digital services, promoting inclusivity and usability in the digital sphere.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Navigating Menus: </strong>Users should be able to
										navigate a website's dropdown menus using arrow keys and
										select items with the Enter key.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Interactive Elements:</strong> Elements like
										buttons, form fields, and links should be focusable and
										activatable using the Tab and Enter keys.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Media Players: </strong> Keyboard users need to be
										able to control media players, including play, pause, and
										volume adjustment, using keyboard shortcuts.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Ensure that all interactive
										elements are accessible via keyboard. This can be achieved
										by using standard HTML elements and testing navigation with
										a keyboard.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong>While primarily touch-based,
										ensure apps support external keyboard controls for their
										features.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Complex Components:</strong> Certain complex
										components, like canvas-based games or advanced data grids,
										might pose challenges for keyboard-only navigation. In such
										cases, providing an alternative accessible solution is
										recommended.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Time-based Testing:</strong> Activities where the
										timing of the user’s action is essential (like real-time
										games or tests) might not comply entirely but should be made
										as accessible as possible.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "2.2 Enough Time",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 2.2, titled Enough Time, focuses on providing users sufficient time to read and use content. This is crucial for ensuring that people with disabilities, like those who read slowly, have motor impairments, or need more time to understand information, can interact with web content without unnecessary stress or haste.",
					},
					{
						title: "What:",
						content:
							"This guideline encompasses various aspects of time-based content, including adjustable time limits for tasks, pausing, stopping, or hiding moving, blinking, scrolling content, and avoiding timing-based interactions unless necessary. It aims to make digital experiences more accessible by allowing users to control time-sensitive aspects of websites and applications.",
					},
					{
						title: "Why:",
						content:
							"Time limits or rapidly changing content can be a significant barrier for many users. For instance, someone using a screen reader needs more time to navigate and understand content, and people with cognitive disabilities may require additional time to process information. Ensuring users have control over these time aspects is key to inclusive design.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Adjustable Time Limits: </strong>In online quizzes
										or forms with a time limit, provide options to extend the
										time.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Moving or Auto-updating Content: </strong> For
										sliders, carousels, or auto-updating news feeds, include
										controls to pause, stop, or hide the motion or updates
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Time-Based Media: </strong> In media players,
										provide sufficient controls for users to manage playback
										without being constrained by strict time limits.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Implement features allowing users
										to control time limits and manage moving or auto-updating
										content. Use JavaScript and HTML attributes to create these
										functionalities.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Ensure that any time-based
										functionalities in apps are adjustable and that users can
										control any moving or auto-updating elements.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Real-time Events: </strong> When the timing of an
										activity is essential (like live auctions or interactive
										gaming), adjusting time limits might not be feasible.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Essential Time Limits:</strong> In cases where the
										time limit is essential and extending it would invalidate
										the activity (like a timed test), exceptions might apply.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "2.3 Seizures and Physical Reactions",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.1, including its sub-criterion 1.1.1, is all about making non-text content accessible. This is crucial because not everyone can access visual information the same way. The idea is to ensure that images, charts, and other non-text elements on a website or app are not roadblocks for users with disabilities, particularly those who rely on screen readers or have visual impairments.",
					},
					{
						title: "What:",
						content:
							"WCAG 1.1 requires that all non-text content (think images, graphs, charts, animations, etc.) has a text alternative. This helps users who can't see or interpret these elements in the usual way. Sub-criterion 1.1.1 zooms in on this, specifying text descriptions for every non-text element. These descriptions should convey the same purpose or information as the visual content.",
					},
					{
						title: "Why:",
						content:
							"This criterion is essential because it breaks down barriers for people with visual impairments. Imagine trying to understand a graph without being able to see it, or navigating a website where images convey crucial information but aren't described. Text alternatives level the playing field, giving these users access to the same information as everyone else.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Images:</strong> A photo on a news article should
										have alt text describing what's in the image, not just
										"image" or "photo".
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Graphs and Charts:</strong> For a graph showing
										climate change data, the alt text should summarize the key
										trends or data points, not just say "graph of climate data".
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Icons and Buttons:</strong> An icon used for
										navigation, like a 'home' button, should have text
										explaining its function, not just its appearance.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Use the alt attribute in HTML for
										images. For complex graphics, consider a longer description
										nearby.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Use accessibility labels for
										images and icons in your app's code.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Documents:</strong> In PDFs or Word documents, add
										alt text to images through the format options.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Decorative Images:</strong> If an image is purely
										decorative and adds no information (like a stylistic
										border), it doesn't need a description.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>CAPTCHAs:</strong> These are exempt, as they're
										designed to tell humans and computers apart.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Complex Media:</strong> If the content is too
										complex to describe succinctly (like a detailed map), a text
										alternative providing equivalent information is acceptable.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "WCAG Understanding Guideline 1.1",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "2.4 Navigable",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.2 focuses on making audio and video content accessible, especially for users who can't see or hear it. The main goal here is to ensure that everyone, regardless of their ability to hear or see, gets the same information from media content. This section covers both pre-recorded and live media, and it's important to understand the differences in how we make each type accessible.",
					},
					{
						title: "What:",
						content:
							"This criterion addresses the need for alternatives for audio and video content. For pre-recorded media, this means things like captions, audio descriptions, and transcripts. For live media, the focus is on providing real-time captions. The key difference is the immediacy and method of providing accessibility features - live content requires real-time solutions.",
					},
					{
						title: "Why:",
						content:
							"Think about trying to watch a video without sound or seeing a live webinar without captions if you can't hear. This criterion is about giving those with hearing or visual impairments the same chance to access this content. It's not just about compliance but about inclusivity and reaching a wider audience.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Pre-recorded Videos:</strong> A tutorial video
										should have captions and an audio description to ensure it's
										accessible to users who are d/Deaf or blind.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Live Webinars:</strong> Real-time captioning is
										crucial so that participants who are d/Deaf or hard of
										hearing can follow along.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Audio Content:</strong> For a podcast, a transcript
										should be provided for those who can't hear it.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites and Digital Platforms:</strong> Use
										captioning services for videos. For audio content, ensure a
										transcript is available. For live streams, integrate
										real-time captioning tools.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Similar to websites, ensure
										any in-app media has captions and transcripts, and consider
										audio descriptions where appropriate.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Live Captions:</strong> While live captions are
										ideal, they might not be required if the content is provided
										in a text format simultaneously (like a live text blog along
										with a live audio stream).
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Controlled Media:</strong> If the media is not
										publicly available and is used in a controlled environment
										like a school, different standards can apply.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "2.5 Input Modalities",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.3, titled Adaptable, is all about creating content that can be presented in different ways without losing meaning. It's not just about how things look, but how they're structured and organized. This criterion is crucial for users who need to consume content in non-standard formats, like large print, braille, or screen readers.",
					},
					{
						title: "What:",
						content:
							"This criterion mandates that information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. In simpler terms, it means that the content should be understandable and navigable, regardless of how it's presented. This includes proper labeling of form elements, using headings correctly, and ensuring that tables are read correctly by screen readers.",
					},
					{
						title: "Why:",
						content:
							"Imagine you're using a screen reader and the page is a jumble of out-of-context phrases, or you're relying on a keyboard and can't navigate through a form correctly. WCAG 1.3 addresses these issues by ensuring content is structured logically and can adapt to different presentation formats without losing its meaning or function.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Structured Forms: </strong> Labels and instructions
										in forms should be programmatically connected to their
										fields, so screen readers can accurately describe each
										field.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Headings and Labels: </strong>Use headings correctly
										to structure content. A screen reader can then convey the
										structure and help users navigate more easily.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Data Tables: </strong>Tables should have proper
										headers and descriptions so that someone using a screen
										reader can understand the data as it's intended.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										{/* <strong>Websites:</strong> : Use semantic HTML, like <h1> to <h6> for headings, <label> for form labels, and appropriate ARIA roles. */}
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Ensure that elements are
										correctly labeled and that the screen reader can accurately
										describe and interact with content.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>CAPTCHAs:</strong> Again, these are exempt for their
										intended purpose.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Decorative Elements:</strong> If an element is
										purely decorative and conveys no information or structure,
										it doesn't need to be programmatically determinable.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
		],
		contentData: [
			{
				title: "Summary",
				content:
					"Principle 2 of the Web Content Accessibility Guidelines (WCAG) emphasizes the need for web content to be operable for all users, including those with disabilities. This principle ensures that interface components and navigation must be operable.",
			},
			{
				title: "Why It's Important:",
				content:
					"Operability is crucial to ensure users with diverse abilities can interact with and navigate through web content. It includes considerations for keyboard-only navigation, sufficient time for interactions, seizure safety, clear navigation tools, and support for multiple input methods.",
			},
			{
				title: "Examples and Scenarios:",
				listType: "ordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Keyboard Navigation:</strong> Ensuring all website
								functions can be accessed with a keyboard.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Adjustable Timers:</strong> Allowing users to extend
								time limits on tasks.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>No Flashing Content:</strong> Avoiding content that
								flashes more than three times per second to prevent seizures.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Clear Navigation Tools:</strong> Providing breadcrumb
								trails, clear headings, and a search function for easy
								navigation.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Gesture Adaptations:</strong> Enabling gesture control
								for touch interfaces.
							</>
						),
					},
				],
			},
			{
				title: "How to Comply:",
				content:
					"Implement keyboard navigation, provide adjustable time limits, avoid seizure-triggering content, ensure clear navigation pathways, and support diverse input methods.",
			},
			{
				title: "Exceptions:",
				listType: "unordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Complex Navigation:</strong> Some complex sites might
								not be able to provide simplified navigation paths but should
								strive for clarity as much as possible.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Advanced Interaction:</strong> Certain advanced web
								functionalities might not be operable by keyboard alone, but
								alternatives should be provided.
							</>
						),
					},
				],
			},
		],
		WCAGLinksData: [
			{
				title: "WCAG 2.2 documentation",
				content: "Official WCAG criterion documentation",
			},
		],
	},
	{
		title: "3. Understandable",
		subListData: [
			{
				title: "3.1 Readable",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 2.1, Keyboard Accessible, ensures that all web and digital content functionalities are operable through keyboard inputs alone. This is crucial for users who can't use a mouse due to physical, visual, or technological constraints. The focus here is on universal keyboard navigation, empowering a wider range of users to interact with digital content seamlessly.",
					},
					{
						title: "What:",
						content:
							"This guideline mandates that all interactive elements on websites and applications must be accessible using a keyboard. This includes navigating through menus, activating buttons and links, filling out forms, and controlling media players, all without the necessity of a mouse.",
					},
					{
						title: "Why:",
						content:
							"Many users rely on keyboards or keyboard-like devices due to physical disabilities, visual impairments, or simply due to preference or convenience. Keyboard accessibility is vital as it ensures that these users have equal access to web and digital services, promoting inclusivity and usability in the digital sphere.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Navigating Menus: </strong>Users should be able to
										navigate a website's dropdown menus using arrow keys and
										select items with the Enter key.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Interactive Elements:</strong> Elements like
										buttons, form fields, and links should be focusable and
										activatable using the Tab and Enter keys.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Media Players: </strong> Keyboard users need to be
										able to control media players, including play, pause, and
										volume adjustment, using keyboard shortcuts.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Ensure that all interactive
										elements are accessible via keyboard. This can be achieved
										by using standard HTML elements and testing navigation with
										a keyboard.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong>While primarily touch-based,
										ensure apps support external keyboard controls for their
										features.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Complex Components:</strong> Certain complex
										components, like canvas-based games or advanced data grids,
										might pose challenges for keyboard-only navigation. In such
										cases, providing an alternative accessible solution is
										recommended.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Time-based Testing:</strong> Activities where the
										timing of the user’s action is essential (like real-time
										games or tests) might not comply entirely but should be made
										as accessible as possible.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "3.2 Predictable",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.2 focuses on making audio and video content accessible, especially for users who can't see or hear it. The main goal here is to ensure that everyone, regardless of their ability to hear or see, gets the same information from media content. This section covers both pre-recorded and live media, and it's important to understand the differences in how we make each type accessible.",
					},
					{
						title: "What:",
						content:
							"This criterion addresses the need for alternatives for audio and video content. For pre-recorded media, this means things like captions, audio descriptions, and transcripts. For live media, the focus is on providing real-time captions. The key difference is the immediacy and method of providing accessibility features - live content requires real-time solutions.",
					},
					{
						title: "Why:",
						content:
							"Think about trying to watch a video without sound or seeing a live webinar without captions if you can't hear. This criterion is about giving those with hearing or visual impairments the same chance to access this content. It's not just about compliance but about inclusivity and reaching a wider audience.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Pre-recorded Videos:</strong> A tutorial video
										should have captions and an audio description to ensure it's
										accessible to users who are d/Deaf or blind.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Live Webinars:</strong> Real-time captioning is
										crucial so that participants who are d/Deaf or hard of
										hearing can follow along.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Audio Content:</strong> For a podcast, a transcript
										should be provided for those who can't hear it.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites and Digital Platforms:</strong> Use
										captioning services for videos. For audio content, ensure a
										transcript is available. For live streams, integrate
										real-time captioning tools.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Similar to websites, ensure
										any in-app media has captions and transcripts, and consider
										audio descriptions where appropriate.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Live Captions:</strong> While live captions are
										ideal, they might not be required if the content is provided
										in a text format simultaneously (like a live text blog along
										with a live audio stream).
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Controlled Media:</strong> If the media is not
										publicly available and is used in a controlled environment
										like a school, different standards can apply.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
			{
				title: "3.3 Input Assistance",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 1.3, titled Adaptable, is all about creating content that can be presented in different ways without losing meaning. It's not just about how things look, but how they're structured and organized. This criterion is crucial for users who need to consume content in non-standard formats, like large print, braille, or screen readers.",
					},
					{
						title: "What:",
						content:
							"This criterion mandates that information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. In simpler terms, it means that the content should be understandable and navigable, regardless of how it's presented. This includes proper labeling of form elements, using headings correctly, and ensuring that tables are read correctly by screen readers.",
					},
					{
						title: "Why:",
						content:
							"Imagine you're using a screen reader and the page is a jumble of out-of-context phrases, or you're relying on a keyboard and can't navigate through a form correctly. WCAG 1.3 addresses these issues by ensuring content is structured logically and can adapt to different presentation formats without losing its meaning or function.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Structured Forms: </strong> Labels and instructions
										in forms should be programmatically connected to their
										fields, so screen readers can accurately describe each
										field.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Headings and Labels: </strong>Use headings correctly
										to structure content. A screen reader can then convey the
										structure and help users navigate more easily.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Data Tables: </strong>Tables should have proper
										headers and descriptions so that someone using a screen
										reader can understand the data as it's intended.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										{/* <strong>Websites:</strong> : Use semantic HTML, like <h1> to <h6> for headings, <label> for form labels, and appropriate ARIA roles. */}
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong> Ensure that elements are
										correctly labeled and that the screen reader can accurately
										describe and interact with content.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>CAPTCHAs:</strong> Again, these are exempt for their
										intended purpose.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Decorative Elements:</strong> If an element is
										purely decorative and conveys no information or structure,
										it doesn't need to be programmatically determinable.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
		],
		contentData: [
			{
				title: "Summary",
				content:
					"Principle 3, Understandable, of the Web Content Accessibility Guidelines (WCAG) underscores the importance of making web content understandable for all users. This principle ensures that information and the operation of the user interface are understandable, addressing the need for clear and comprehensible content.",
			},
			{
				title: "Why It's Important:",
				content:
					"Understanding is key to accessibility. This principle caters to users with cognitive, language, and learning disabilities, ensuring they can comprehend and interact with web content. It involves clear language, predictable behavior, and helpful input guidance.",
			},
			{
				title: "Examples and Scenarios:",
				listType: "ordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Clear Language Use:</strong> Using plain language and
								defining any technical terms or jargon.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Consistent Navigation:</strong> Keeping navigation
								elements consistent across a website.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Error Identification and Correction:</strong> Providing
								explicit error messages and correction suggestions in forms.
							</>
						),
					},
				],
			},
			{
				title: "How to Comply:",
				content:
					"Use understandable language, maintain consistent interfaces, and provide helpful input assistance. This includes clear instructions, error messages, and assistance in forms and inputs.",
			},
			{
				title: "Exceptions:",
				listType: "unordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Complex Material:</strong> Highly technical or
								specialized content might inherently use complex language, but
								efforts should be made to simplify it as much as possible.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Brand Names or Specific Terms:</strong> Certain terms or
								names might not be changed due to branding or specific usage
								contexts.
							</>
						),
					},
				],
			},
		],
		WCAGLinksData: [
			{
				title: "WCAG 2.2 documentation",
				content: "Official WCAG criterion documentation",
			},
		],
	},
	{
		title: "4. Robust",
		subListData: [
			{
				title: "4.1 Compatible",
				contentData: [
					{
						title: "Summary",
						content:
							"WCAG 2.1, Keyboard Accessible, ensures that all web and digital content functionalities are operable through keyboard inputs alone. This is crucial for users who can't use a mouse due to physical, visual, or technological constraints. The focus here is on universal keyboard navigation, empowering a wider range of users to interact with digital content seamlessly.",
					},
					{
						title: "What:",
						content:
							"This guideline mandates that all interactive elements on websites and applications must be accessible using a keyboard. This includes navigating through menus, activating buttons and links, filling out forms, and controlling media players, all without the necessity of a mouse.",
					},
					{
						title: "Why:",
						content:
							"Many users rely on keyboards or keyboard-like devices due to physical disabilities, visual impairments, or simply due to preference or convenience. Keyboard accessibility is vital as it ensures that these users have equal access to web and digital services, promoting inclusivity and usability in the digital sphere.",
					},
					{
						title: "Examples and Scenarios:",
						listType: "ordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Navigating Menus: </strong>Users should be able to
										navigate a website's dropdown menus using arrow keys and
										select items with the Enter key.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Interactive Elements:</strong> Elements like
										buttons, form fields, and links should be focusable and
										activatable using the Tab and Enter keys.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Media Players: </strong> Keyboard users need to be
										able to control media players, including play, pause, and
										volume adjustment, using keyboard shortcuts.
									</>
								),
							},
						],
					},
					{
						title: "How to Comply:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Websites:</strong> Ensure that all interactive
										elements are accessible via keyboard. This can be achieved
										by using standard HTML elements and testing navigation with
										a keyboard.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Mobile Apps:</strong>While primarily touch-based,
										ensure apps support external keyboard controls for their
										features.
									</>
								),
							},
						],
					},
					{
						title: "Exceptions:",
						listType: "unordered",
						subListData: [
							{
								listContent: (
									<>
										<strong>Complex Components:</strong> Certain complex
										components, like canvas-based games or advanced data grids,
										might pose challenges for keyboard-only navigation. In such
										cases, providing an alternative accessible solution is
										recommended.
									</>
								),
							},
							{
								listContent: (
									<>
										<strong>Time-based Testing:</strong> Activities where the
										timing of the user’s action is essential (like real-time
										games or tests) might not comply entirely but should be made
										as accessible as possible.
									</>
								),
							},
						],
					},
				],
				WCAGLinksData: [
					{
						title: "WCAG 2.2 documentation",
						content: "Official WCAG criterion documentation",
					},
					{
						title: "Understanding Guideline 1.2",
						content: "Documentation and examples from the WCAG",
					},
				],
			},
		],
		contentData: [
			{
				title: "Summary",
				content:
					"Principle 4, Robust, of the Web Content Accessibility Guidelines (WCAG) focuses on ensuring that web content is robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies. This principle is crucial for compatibility with current and future technologies.",
			},
			{
				title: "Why It's Important:",
				content:
					"Robustness ensures that as technology evolves, web content remains accessible. This principle is essential for users who rely on various assistive tools and devices to access the web. It addresses the need for content to be interpretable by a wide range of technologies, preventing exclusion due to technical limitations.",
			},
			{
				title: "Examples and Scenarios:",
				listType: "ordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Clean HTML/CSS:</strong> Using standard-compliant HTML
								and CSS ensures content can be interpreted by different browsers
								and assistive tools.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>
									ARIA (Accessible Rich Internet Applications) Use:
								</strong>{" "}
								Implementing ARIA roles and properties enhances the
								compatibility of dynamic content and complex user interfaces
								with assistive technologies.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Testing Across Devices and Browsers:</strong> Regular
								testing of web content on various platforms and browsers to
								ensure consistent accessibility.
							</>
						),
					},
				],
			},
			{
				title: "How to Comply:",
				content:
					"Follow web standards for HTML, CSS, and scripting languages, use ARIA attributes where necessary, and continually test for compatibility across a range of browsers, devices, and assistive technologies.",
			},
			{
				title: "Exceptions:",
				listType: "unordered",
				subListData: [
					{
						listContent: (
							<>
								<strong>Cutting-edge Technology:</strong> Sometimes, the use of
								very new or experimental technologies might pose challenges for
								current accessibility standards, but it's important to strive
								for as much compatibility as possible.
							</>
						),
					},
					{
						listContent: (
							<>
								<strong>Legacy Systems:</strong> Older systems or content might
								not fully meet these robustness standards but should be updated
								or supplemented where feasible.
							</>
						),
					},
				],
			},
		],
		WCAGLinksData: [
			{
				title: "WCAG 2.2 documentation",
				content: "Official WCAG criterion documentation",
			},
		],
	},
];

export default ResourceWCAGData;
