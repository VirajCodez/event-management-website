# Gatherly - Event Management Website

Gatherly is a responsive event discovery and registration website created as a college web-designing assignment. Visitors can browse sample events, filter and search listings, view event details, and save a demo registration in their browser.

## Project objectives

- Build a polished, accessible event-booking style interface using core web technologies.
- Organize sample events so visitors can discover events by title, venue, or category.
- Demonstrate a client-side event registration flow with validation and local persistence.
- Provide a responsive experience across desktop, tablet, and mobile screen sizes.

## Features

- Responsive navigation with desktop links and a collapsible mobile menu.
- Hero section with event search and category selection.
- Ten sample events across music, food and drink, wellness, arts and culture, technology, sports, business, and cultural events.
- Event cards with images, dates, venues, category labels, INR prices, and a details action.
- Search by event title or venue, category filters, combined filtering, and a no-results state.
- Event details dialog with date, venue, description, price, and a registration action.
- Custom event-selection dropdown in the registration dialog, including keyboard navigation.
- Registration form validation for name, email, phone number, and selected event.
- Successful registrations saved to browser `localStorage` and viewable from the footer.
- Three clearly labeled sample/demo registration cards, kept separate from saved user registrations.
- Light/dark theme toggle, with the selected theme saved in browser storage.
- Countdown for the featured event and subtle entrance animations that respect reduced-motion preferences.
- Footer with navigation, contact link, and social links.
- Newsletter form with browser-side required-field validation and a demo confirmation message.

## Technologies

- HTML5 for semantic page structure and dialogs.
- CSS3 for layout, responsive breakpoints, visual styling, themes, and animations.
- Vanilla JavaScript for rendering events, filtering, dialogs, validation, and browser storage.
- Browser APIs used include `localStorage`, `Intl`, `IntersectionObserver`, and the HTML Popover API.

No frontend framework or CSS framework is used. Google Fonts (DM Sans and Manrope) and event photographs are loaded from external providers, so those assets require an internet connection.

## Folder structure

```text
event-management-website/
├── index.html   # Page structure and dialog/form markup
├── style.css    # Site styles, themes, and responsive layouts
├── script.js    # Event sample data and interactive behavior
└── README.md    # Project documentation
```

## Setup and run locally

1. Download or clone the project files.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a modern browser.

Alternatively, serve the folder with a local static web server and open its local URL. No package installation, build step, or server-side application is required.

## Working functionality and data behavior

- Event cards are generated from the sample event array in `script.js`.
- The listing search matches event titles and venues. Search and category filters work together.
- Selecting an event from its details dialog opens the registration form with that event selected. Visitors may also change the selected event using the custom dropdown.
- Valid registrations are saved in this browser under the `gatherlyRegistrations` localStorage key. They can be viewed using **View my registrations** in the footer.
- The form opens with blank participant name, email, and phone fields. The sample cards shown in the registrations view are presentation-only and are not user submissions.
- Registration details are not sent, emailed, uploaded, or transmitted to a server. They remain in the current browser unless its site storage is cleared.
- The newsletter form only displays a demo confirmation in the page; it does not subscribe or send the entered email anywhere.
- Event prices are formatted in Indian Rupees (INR).

## Responsive design

The layout uses CSS media queries for desktop, tablet, and mobile screens. Event cards adjust from three columns on wider screens to two columns on tablets and one column on narrow phones. Category filters and navigation also adapt to smaller viewports. Dialogs and forms are sized for smaller screens, and the custom event dropdown positions its options within the viewport.

## Deployment

Gatherly is a static website and can be deployed to any static hosting provider, such as GitHub Pages, Netlify, or Cloudflare Pages:

1. Upload or connect the folder/repository containing `index.html`, `style.css`, and `script.js`.
2. Configure the provider to publish the project root directory.
3. Open the published site and test event filtering, dialogs, registration, and theme switching.

There is no backend or database to configure. `localStorage` data belongs to each visitor's browser and is not shared with the hosted site or other users. External fonts and event images may not load when offline.
