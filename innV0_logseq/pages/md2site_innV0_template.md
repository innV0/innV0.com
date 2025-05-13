- [[Logseq Site Demo V2]]
  title:: My Enhanced Logseq Site
  lang:: en
	- ## Main Navigation
	  section_type:: header
	  logo_text:: MySiteLogo
- # Nav links are children of the header block
	- Home
	  element_type:: link
	  link_url:: #hero-section
	- Features
	  element_type:: link
	  link_url:: #features
	- Projects
	  element_type:: link
	  link_url:: #our-projects
	- About
	  element_type:: link
	  link_url:: #about-us
	- Contact
	  element_type:: link
	  link_url:: #contact
	- ## Welcome to Our Dynamic Site!
	  id:: hero-section
	  section_type:: hero
	  image_src:: /placeholder-hero-abstract.jpg 
	  image_alt:: Colorful abstract waves background
- # Hero content elements are children of the hero section block
	- #hero_title Next-Gen Web Experiences
	  element_type:: title
	- Transform your Logseq notes into stunning, interactive websites. Explore the future of content.
	  element_type:: paragraph
	- Explore Features
	  element_type:: button
	  link_url:: #features
	- ## Core Features
	  id:: features
	  section_type:: list_block
	  section_title:: What We Offer
- # List items are children
	- **Intuitive Logseq Parsing:** Seamlessly convert outlines to structured HTML.
	  element_type:: list_item
	  highlight_first_sentence:: true
	- **Tailwind CSS Styling:** Modern, responsive designs built-in.
	  element_type:: list_item
	  highlight_first_sentence:: true
	- **Flexible Section Types:** Headers, heroes, content, lists, projects, and footers.
	  element_type:: list_item
	  highlight_first_sentence:: true
	- **Customizable Layouts:** Content blocks with image-left, image-right, or single-column.
	  element_type:: list_item
	  highlight_first_sentence:: true
	- ## Our Projects
	  id:: our-projects
	  section_type:: projects
	  section_title:: Discover Our Work
- # Project items are children of this block
	- Project Innovate
	  element_type:: project_item # Optional, can be inferred if direct child of 'projects'
	  project_title:: Project Innovate # Overrides main content if present
	  project_thumbnail_src:: /placeholder-project-tech.jpg
	  project_thumbnail_alt:: Tech project abstract visual
	  project_description:: A groundbreaking platform using AI to enhance productivity and streamline workflows for creative teams.
	  project_link_url:: #
	  project_link_text:: View Case Study
	- EcoScapes Initiative
	  element_type:: project_item
	  project_title:: EcoScapes Initiative
	  project_thumbnail_src:: /placeholder-project-nature.jpg
	  project_thumbnail_alt:: Nature-inspired project visual
	  project_description:: Developing sustainable solutions for urban green spaces, promoting biodiversity and community well-being.
	  project_link_url:: #
	  project_link_text:: Explore EcoScapes
	- Artfolio Connect
	  element_type:: project_item
	  project_title:: Artfolio Connect
	  project_thumbnail_src:: /placeholder-project-art.jpg
	  project_thumbnail_alt:: Artistic project visual
	  project_description:: A digital gallery and networking hub for emerging artists to showcase their work and connect with collectors.
	  project_link_url:: #
- # project_link_text defaults to "View Project"
	- QuantumLeap Analytics
	  element_type:: project_item
	  project_title:: QuantumLeap Analytics
	  project_thumbnail_src:: /placeholder-project-data.jpg
	  project_thumbnail_alt:: Data analytics project visual
	  project_description:: Advanced data analytics tool providing deep insights for businesses to make informed decisions.
	  project_link_url:: #
	- Culinary Adventures App
	  element_type:: project_item
	  project_title:: Culinary Adventures App
	  project_thumbnail_src:: /placeholder-project-food.jpg
	  project_thumbnail_alt:: Food related project visual
	  project_description:: An interactive mobile app for food lovers to discover new recipes, restaurants, and culinary events.
	  project_link_url:: #
	- SpaceVoyager VR
	  element_type:: project_item
	  project_title:: SpaceVoyager VR
	  project_thumbnail_src:: /placeholder-project-space.jpg
	  project_thumbnail_alt:: Space exploration project visual
	  project_description:: A virtual reality experience that takes users on an immersive journey through our solar system and beyond.
	  project_link_url:: #
	- ## About Our Journey
	  id:: about-us
	  section_type:: content_block
	  layout:: image_left
	  section_title:: The Story Behind Our Innovation
- # Columns are children
	- Image Column
	  column:: image
		- ![Team discussing ideas](/placeholder-team-dynamic.jpg)
		  element_type:: image 
		  image_alt:: Diverse team brainstorming with enthusiasm
	- Text Column
	  column:: content
		- ### From Notes to Narratives
		  element_type:: title
		- We started with a simple idea: empower Logseq users to share their knowledge beautifully. Our journey is about bridging thought organization with compelling web presentation.
		  element_type:: paragraph
		- We support [[Open Source]] principles and believe in [[Community Collaboration]]. This tool is for [[Content Creators]] and [[Knowledge Workers]].
		  element_type:: paragraph
	- ## Why Partner With Us?
	  section_type:: content_block
- # No layout property implies default single column, centered text.
    section_title:: The Advantages
- # Content elements are direct children
	- ### Effortless Creation
	  element_type:: title
	- Transform complex Logseq outlines into structured HTML with minimal effort.
	  element_type:: paragraph
	- ### Blazing Speed
	  element_type:: title
	- Generate previews instantly and download your complete static site in seconds.
	  element_type:: paragraph
	  class:: italic text-center # Custom class example
	- ### Cutting-Edge Design
	  element_type:: title
	- Utilizes Tailwind CSS for a professional, responsive, and modern aesthetic.
	  element_type:: paragraph
	- ## Get In Touch
	  id:: contact
	  section_type:: content_block
	  section_title:: We're Here to Help
- # Content elements are direct children
	- ### Reach Out
	  element_type:: title
	- For inquiries, support, or feedback, connect with us.
	  element_type:: paragraph
	- Email Our Team
	  element_type:: button
	  link_url:: mailto:support@example.com
	  class:: mt-4
	- ## Site Footer
	  section_type:: footer
	  id:: page-footer
- # Footer content items are children
	- © ((CURRENT_YEAR)) MySiteName. All rights reserved. | [[Privacy Policy]] | [[Terms of Service]]
	  element_type:: paragraph