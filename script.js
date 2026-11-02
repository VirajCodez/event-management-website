const events = [
  {
    id: "afterglow-festival",
    title: "Afterglow Music Festival",
    category: "music",
    categoryLabel: "Music",
    date: "2026-11-14T16:00:00",
    time: "4:00 PM – 11:00 PM",
    venue: "Mahalaxmi Racecourse, Mumbai",
    city: "Mumbai, Maharashtra",
    price: 2999,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Festival crowd enjoying an outdoor live music show",
    description: "An open-air celebration of indie sounds, golden-hour sets, and late-night dancing. Come for the lineup, stay for the feeling."
  },
  {
    id: "sunday-table",
    title: "The Sunday Table",
    category: "food",
    categoryLabel: "Food & drink",
    date: "2026-11-15T12:00:00",
    time: "12:00 PM – 3:00 PM",
    venue: "The Conservatory, Bandra",
    city: "Mumbai, Maharashtra",
    price: 1499,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=82",
    imageAlt: "A long, candlelit communal dinner table",
    description: "Pull up a chair for a long-table lunch featuring seasonal plates from neighborhood chefs and conversations with new friends."
  },
  {
    id: "soft-start-yoga",
    title: "A Soft Start: Morning Yoga",
    category: "wellness",
    categoryLabel: "Wellness",
    date: "2026-11-19T08:30:00",
    time: "8:30 AM – 10:00 AM",
    venue: "Cubbon Park, Bengaluru",
    city: "Bengaluru, Karnataka",
    price: 0,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Woman practicing yoga in a sunlit studio",
    description: "Ease into the day with a feel-good flow, fresh air, and a little space to reset. All levels are welcome; mats are provided."
  },
  {
    id: "makers-after-hours",
    title: "Makers After Hours",
    category: "arts",
    categoryLabel: "Arts & culture",
    date: "2026-11-21T18:00:00",
    time: "6:00 PM – 9:00 PM",
    venue: "Kala Ghoda Arts Precinct, Mumbai",
    city: "Mumbai, Maharashtra",
    price: 999,
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Colorful contemporary art installation in a gallery",
    description: "Meet the artists, wander the studios, and get hands-on with a mini workshop at this after-hours celebration of local creativity."
  },
  {
    id: "vinyl-social",
    title: "The Vinyl Social Club",
    category: "music",
    categoryLabel: "Music",
    date: "2026-11-23T19:00:00",
    time: "7:00 PM – 10:00 PM",
    venue: "NCPA, Nariman Point",
    city: "Mumbai, Maharashtra",
    price: 799,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Musician performing in warm stage lighting",
    description: "A low-key night for big music feelings. Bring a favorite record, meet fellow listeners, and let local selectors set the mood."
  },
  {
    id: "little-plates",
    title: "Little Plates, Big Night",
    category: "food",
    categoryLabel: "Food & drink",
    date: "2026-11-28T17:30:00",
    time: "5:30 PM – 9:00 PM",
    venue: "Dilli Haat, INA",
    city: "New Delhi",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Warmly lit restaurant set for an evening meal",
    description: "A guided tasting tour of the neighborhood's most-loved kitchens, with small plates, thoughtful pours, and plenty to talk about."
  },
  {
    id: "india-tech-summit",
    title: "India Tech & AI Summit",
    category: "technology",
    categoryLabel: "Technology",
    date: "2026-11-18T09:00:00",
    time: "9:00 AM – 6:00 PM",
    venue: "Bangalore International Centre",
    city: "Bengaluru, Karnataka",
    price: 1499,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Close-up of a modern computer circuit board",
    description: "A full day of practical AI, product, and startup conversations with India's builders, researchers, and technology leaders."
  },
  {
    id: "city-run-mumbai",
    title: "Mumbai City Run",
    category: "sports",
    categoryLabel: "Sports",
    date: "2026-11-22T06:00:00",
    time: "6:00 AM – 10:00 AM",
    venue: "Marine Drive, Mumbai",
    city: "Mumbai, Maharashtra",
    price: 599,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Runners taking part in a city road race",
    description: "Take in the sea breeze and the sunrise on a welcoming 5K or 10K route along the city's iconic waterfront."
  },
  {
    id: "founders-forum",
    title: "Founders & Future Forum",
    category: "business",
    categoryLabel: "Business",
    date: "2026-11-25T10:00:00",
    time: "10:00 AM – 5:00 PM",
    venue: "Jio World Convention Centre",
    city: "Mumbai, Maharashtra",
    price: 2499,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Professionals collaborating around a table at a conference",
    description: "Meet ambitious founders, investors, and operators for candid talks, useful connections, and fresh perspectives on what's next."
  },
  {
    id: "varanasi-culture-night",
    title: "Varanasi: A Cultural Evening",
    category: "cultural",
    categoryLabel: "Cultural Events",
    date: "2026-11-29T17:00:00",
    time: "5:00 PM – 8:00 PM",
    venue: "Assi Ghat, Varanasi",
    city: "Varanasi, Uttar Pradesh",
    price: 799,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=82",
    imageAlt: "Historic Indian riverside architecture at sunset",
    description: "Experience an evening of classical music, local stories, and riverside traditions with artists and guides from the city."
  }
];

const demoRegistrations = [
  {
    eventTitle: "Sample registration · Demo 1",
    fullName: "Viraj Demo 1",
    email: "viraj1@example.com",
    phone: "00000 00001"
  },
  {
    eventTitle: "Sample registration · Demo 2",
    fullName: "Viraj Demo 2",
    email: "viraj2@example.com",
    phone: "00000 00002"
  },
  {
    eventTitle: "Sample registration · Demo 3",
    fullName: "Viraj Demo 3",
    email: "viraj3@example.com",
    phone: "00000 00003"
  }
];

const eventGrid = document.querySelector("#event-grid");
const searchInput = document.querySelector("#event-search");
const searchForm = document.querySelector("#event-search-form");
const heroSearchForm = document.querySelector("#hero-search-form");
const heroSearchInput = document.querySelector("#hero-search");
const heroCategory = document.querySelector("#hero-category");
const categoryButtons = [...document.querySelectorAll(".category-chip")];
const activeFilterRow = document.querySelector("#active-filter-row");
const resultsSummary = document.querySelector("#results-summary");
const emptyState = document.querySelector("#empty-state");
const detailsDialog = document.querySelector("#details-dialog");
const registrationDialog = document.querySelector("#registration-dialog");
const registrationForm = document.querySelector("#registration-form");
const registrationEventSelect = document.querySelector("#guest-event");
const eventPicker = document.querySelector("#guest-event-picker");
const eventPickerTrigger = document.querySelector("#guest-event-trigger");
const eventPickerOptions = document.querySelector("#guest-event-options");
const registrationContent = document.querySelector("#registration-content");
const registrationSuccess = document.querySelector("#registration-success");
const registrationsDialog = document.querySelector("#registrations-dialog");
const registrationsList = document.querySelector("#registrations-list");
const themeToggle = document.querySelector("#theme-toggle");

let activeCategory = "all";
let searchTerm = "";

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
  themeToggle.querySelector(".theme-toggle-label").textContent = isDark ? "Light mode" : "Dark mode";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#141a16" : "#f7f7f3";
}

try {
  applyTheme(localStorage.getItem("gatherlyTheme") === "dark" ? "dark" : "light");
} catch (error) {
  console.error("Could not read the saved color theme.", error);
  applyTheme("light");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("gatherlyTheme", nextTheme);
  } catch (error) {
    console.error("Could not save the selected color theme.", error);
  }
});

window.addEventListener("storage", (event) => {
  if (event.key === "gatherlyTheme") {
    applyTheme(event.newValue === "dark" ? "dark" : "light");
  }
});

events.forEach((event) => {
  const option = document.createElement("div");
  option.className = "event-picker-option";
  option.id = `guest-event-option-${event.id}`;
  option.dataset.eventId = event.id;
  option.setAttribute("role", "option");
  option.setAttribute("aria-selected", "false");
  option.textContent = event.title;
  eventPickerOptions.append(option);
});

let activeEventOptionIndex = -1;

function positionEventPicker() {
  if (!eventPickerOptions.matches(":popover-open")) return;
  const triggerRect = eventPickerTrigger.getBoundingClientRect();
  const edgeGap = 12;
  const desiredHeight = Math.min(280, eventPickerOptions.scrollHeight);
  const belowSpace = window.innerHeight - triggerRect.bottom - edgeGap;
  const aboveSpace = triggerRect.top - edgeGap;
  const openAbove = belowSpace < Math.min(desiredHeight, 180) && aboveSpace > belowSpace;
  const availableSpace = Math.max(80, openAbove ? aboveSpace : belowSpace);
  const width = Math.min(triggerRect.width, window.innerWidth - edgeGap * 2);
  const left = Math.min(Math.max(edgeGap, triggerRect.left), window.innerWidth - width - edgeGap);
  eventPickerOptions.style.width = `${width}px`;
  eventPickerOptions.style.maxHeight = `${Math.min(desiredHeight, availableSpace)}px`;
  eventPickerOptions.style.left = `${left}px`;
  eventPickerOptions.style.top = openAbove
    ? `${Math.max(edgeGap, triggerRect.top - Math.min(desiredHeight, availableSpace) - 6)}px`
    : `${Math.min(window.innerHeight - edgeGap - Math.min(desiredHeight, availableSpace), triggerRect.bottom + 6)}px`;
}

function closeEventPicker() {
  if (eventPickerOptions.matches(":popover-open")) eventPickerOptions.hidePopover();
  eventPickerTrigger.setAttribute("aria-expanded", "false");
  eventPickerTrigger.removeAttribute("aria-activedescendant");
  eventPickerOptions.querySelectorAll('[data-active="true"]').forEach((option) => option.removeAttribute("data-active"));
  activeEventOptionIndex = -1;
}

function selectEvent(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event) return;
  registrationEventSelect.value = event.id;
  eventPickerTrigger.querySelector(".event-picker-value").textContent = event.title;
  document.querySelector("#registration-event-name").textContent = `${event.title} · ${formatDate(event.date).full}`;
  eventPickerOptions.querySelectorAll('[role="option"]').forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.eventId === event.id));
  });
  eventPickerTrigger.removeAttribute("aria-invalid");
  document.querySelector("#event-error").textContent = "";
  closeEventPicker();
}

function openEventPicker() {
  if (eventPickerOptions.matches(":popover-open")) return;
  eventPickerOptions.showPopover();
  eventPickerTrigger.setAttribute("aria-expanded", "true");
  const selectedIndex = events.findIndex((event) => event.id === registrationEventSelect.value);
  setActiveEventOption(selectedIndex >= 0 ? selectedIndex : 0);
  positionEventPicker();
}

function setActiveEventOption(index) {
  const options = eventPickerOptions.querySelectorAll('[role="option"]');
  if (!options.length) return;
  activeEventOptionIndex = (index + options.length) % options.length;
  const activeOption = options[activeEventOptionIndex];
  options.forEach((option, optionIndex) => {
    if (optionIndex === activeEventOptionIndex) option.setAttribute("data-active", "true");
    else option.removeAttribute("data-active");
  });
  eventPickerTrigger.setAttribute("aria-activedescendant", activeOption.id);
  activeOption.scrollIntoView({ block: "nearest" });
}

eventPickerTrigger.addEventListener("click", () => {
  if (eventPickerOptions.matches(":popover-open")) closeEventPicker();
  else openEventPicker();
});

eventPickerTrigger.addEventListener("keydown", (event) => {
  const isOpen = eventPickerOptions.matches(":popover-open");
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    if (!isOpen) {
      openEventPicker();
      if (event.key === "ArrowUp") setActiveEventOption(events.length - 1);
      return;
    }
    setActiveEventOption(activeEventOptionIndex + (event.key === "ArrowDown" ? 1 : -1));
  } else if (event.key === "Home" && isOpen) {
    event.preventDefault();
    setActiveEventOption(0);
  } else if (event.key === "End" && isOpen) {
    event.preventDefault();
    setActiveEventOption(events.length - 1);
  } else if ((event.key === "Enter" || event.key === " ") && isOpen) {
    event.preventDefault();
    selectEvent(events[activeEventOptionIndex]?.id);
  } else if (event.key === "Escape" && isOpen) {
    event.preventDefault();
    closeEventPicker();
  } else if (event.key === "Tab" && isOpen) {
    closeEventPicker();
  }
});

eventPickerOptions.addEventListener("click", (event) => {
  const option = event.target.closest('[role="option"]');
  if (option) selectEvent(option.dataset.eventId);
});

document.addEventListener("pointerdown", (event) => {
  if (!eventPicker.contains(event.target) && !eventPickerOptions.contains(event.target)) {
    closeEventPicker();
  }
});

window.addEventListener("resize", positionEventPicker);
window.addEventListener("scroll", positionEventPicker, true);
registrationDialog.addEventListener("close", closeEventPicker);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return {
    month: new Intl.DateTimeFormat("en-IN", { month: "short" }).format(date),
    day: new Intl.DateTimeFormat("en-IN", { day: "2-digit" }).format(date),
    full: new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      month: "long",
      day: "numeric"
    }).format(date)
  };
};

function formatPrice(amount) {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function updateFeaturedCountdown() {
  const featuredEvent = events.find((event) => event.id === document.querySelector(".hero-event-card").dataset.eventId);
  const countdown = document.querySelector("#featured-countdown");
  if (!featuredEvent) {
    countdown.textContent = "More events coming soon";
    return;
  }

  const remaining = new Date(featuredEvent.date).getTime() - Date.now();
  if (remaining <= 0) {
    countdown.textContent = "This event has started";
    return;
  }

  const seconds = Math.floor(remaining / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  countdown.textContent = `Starts in ${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(remainder).padStart(2, "0")}s`;
}

function eventCard(event, index) {
  const date = formatDate(event.date);
  return `
    <article class="event-card" style="animation-delay:${index * 45}ms">
      <div class="event-image-wrap">
        <img class="event-image" src="${event.image}" alt="${event.imageAlt}" loading="lazy">
        <div class="event-date-badge" aria-label="${date.full}">
          <span>${date.month}</span><span>${date.day}</span>
        </div>
        <span class="event-category-label">${event.categoryLabel}</span>
      </div>
      <div class="event-card-content">
        <div class="event-card-topline"><span>${date.full}</span><span class="event-time">${event.time}</span></div>
        <h3>${event.title}</h3>
        <p class="event-description">${event.description}</p>
        <div class="event-card-footer">
          <span class="event-venue"><span aria-hidden="true">⌖</span> ${event.venue}</span>
          <div class="event-actions">
            <span class="event-price">${formatPrice(event.price)}</span>
            <button class="event-details-button" type="button" data-event-id="${event.id}">View Details</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderEvents() {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleEvents = events.filter((event) => {
    const matchesCategory = activeCategory === "all" || event.category === activeCategory;
    const searchableText = `${event.title} ${event.venue}`.toLowerCase();
    return matchesCategory && (!normalizedSearch || searchableText.includes(normalizedSearch));
  });

  eventGrid.innerHTML = visibleEvents.map(eventCard).join("");
  const hasFilters = activeCategory !== "all" || normalizedSearch.length > 0;
  activeFilterRow.hidden = !hasFilters;
  emptyState.hidden = visibleEvents.length > 0;
  eventGrid.hidden = visibleEvents.length === 0;
  if (hasFilters) {
    const countLabel = `${visibleEvents.length} ${visibleEvents.length === 1 ? "event" : "events"} found`;
    const queryLabel = normalizedSearch ? ` for “${searchTerm.trim()}”` : "";
    const categoryLabel = activeCategory === "all"
      ? ""
      : ` in ${heroCategory.querySelector(`option[value="${activeCategory}"]`)?.textContent}`;
    resultsSummary.textContent = `${countLabel}${categoryLabel}${queryLabel}`;
  }
}

function setCategory(category) {
  activeCategory = category;
  heroCategory.value = category;
  categoryButtons.forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderEvents();
}

function openDetails(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event) return;
  const date = formatDate(event.date);
  document.querySelector("#details-content").innerHTML = `
    <div class="details-hero"><img src="${event.image}" alt="${event.imageAlt}"></div>
    <div class="details-body">
      <p class="eyebrow">${event.categoryLabel.toUpperCase()} · GATHERLY PICK</p>
      <h2 id="details-title">${event.title}</h2>
      <div class="details-meta">
        <span>◷ ${date.full} · ${event.time}</span>
        <span>⌖ ${event.venue}</span>
      </div>
      <p>${event.description}</p>
      <div class="details-bottom">
        <span class="details-price">${formatPrice(event.price)}<small>per person</small></span>
        <button class="button button-dark" type="button" data-register-event="${event.id}">Register Now <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  `;
  detailsDialog.showModal();
}

function openRegistration(eventId) {
  const event = events.find((item) => item.id === eventId);
  if (!event) return;
  registrationForm.reset();
  registrationForm.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
  registrationForm.querySelectorAll("[aria-invalid]").forEach((input) => input.removeAttribute("aria-invalid"));
  document.querySelector("#registration-storage-error").hidden = true;
  selectEvent(event.id);
  document.querySelector("#registration-event-name").textContent = `${event.title} · ${formatDate(event.date).full}`;
  registrationContent.hidden = false;
  registrationSuccess.hidden = true;
  registrationDialog.showModal();
}

function showSavedRegistrations() {
  registrationsList.replaceChildren();

  const appendGroupHeading = (text) => {
    const heading = document.createElement("p");
    heading.className = "eyebrow";
    heading.textContent = text;
    registrationsList.append(heading);
  };

  const appendRegistration = (registration, isDemo = false) => {
    const item = document.createElement("article");
    item.className = "registration-item";
    const title = document.createElement("h3");
    title.textContent = registration.eventTitle;
    const person = document.createElement("p");
    person.textContent = registration.fullName;
    const contact = document.createElement("p");
    contact.textContent = `${registration.email} · ${registration.phone}`;
    item.append(title, person, contact);
    if (isDemo) {
      const demoLabel = document.createElement("p");
      demoLabel.textContent = "Sample demo only · not a user registration";
      item.append(demoLabel);
    }
    registrationsList.append(item);
  };

  appendGroupHeading("SAMPLE DEMO REGISTRATIONS");
  demoRegistrations.forEach((registration) => appendRegistration(registration, true));

  try {
    const savedRegistrations = JSON.parse(localStorage.getItem("gatherlyRegistrations") || "[]");
    if (!Array.isArray(savedRegistrations)) {
      throw new Error("Saved registrations have an unexpected format.");
    }

    appendGroupHeading("YOUR SAVED REGISTRATIONS");
    if (savedRegistrations.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "registrations-empty";
      emptyMessage.textContent = "No user registrations saved in this browser yet.";
      registrationsList.append(emptyMessage);
    } else {
      [...savedRegistrations].reverse().forEach((registration) => {
        if (!registration || typeof registration !== "object") return;
        const item = document.createElement("article");
        item.className = "registration-item";
        const title = document.createElement("h3");
        title.textContent = typeof registration.eventTitle === "string" ? registration.eventTitle : "Event registration";
        const person = document.createElement("p");
        person.textContent = typeof registration.fullName === "string" ? registration.fullName : "Name not available";
        const contact = document.createElement("p");
        const email = typeof registration.email === "string" ? registration.email : "Email not available";
        const phone = typeof registration.phone === "string" ? registration.phone : "Phone not available";
        contact.textContent = `${email} · ${phone}`;
        item.append(title, person, contact);
        if (typeof registration.registeredAt === "string") {
          const registeredDate = new Date(registration.registeredAt);
          if (!Number.isNaN(registeredDate.getTime())) {
            const date = document.createElement("p");
            date.textContent = `Saved ${new Intl.DateTimeFormat("en-IN", {
              dateStyle: "medium",
              timeStyle: "short"
            }).format(registeredDate)}`;
            item.append(date);
          }
        }
        registrationsList.append(item);
      });
    }
  } catch (error) {
    console.error("Could not read saved registrations.", error);
    const message = document.createElement("p");
    message.className = "registrations-error";
    message.textContent = "Saved registrations could not be read from this browser.";
    registrationsList.append(message);
  }
  registrationsDialog.showModal();
}

document.querySelector("#view-registrations").addEventListener("click", showSavedRegistrations);

categoryButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.category === "all"));
  button.addEventListener("click", () => setCategory(button.dataset.category));
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value;
  heroSearchInput.value = searchTerm;
  renderEvents();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  heroSearchInput.value = searchTerm;
  renderEvents();
  document.querySelector("#events-title").focus?.();
});

heroSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = heroSearchInput.value;
  searchInput.value = searchTerm;
  setCategory(heroCategory.value);
  document.querySelector("#events").scrollIntoView({ behavior: "smooth" });
});

heroSearchInput.addEventListener("input", () => {
  searchTerm = heroSearchInput.value;
  searchInput.value = searchTerm;
  renderEvents();
});

heroCategory.addEventListener("change", () => {
  setCategory(heroCategory.value);
});

function clearFilters() {
  searchInput.value = "";
  heroSearchInput.value = "";
  searchTerm = "";
  setCategory("all");
}

document.querySelector("#clear-filters").addEventListener("click", clearFilters);
document.querySelector("#empty-reset").addEventListener("click", clearFilters);

eventGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event-id]");
  if (button) openDetails(button.dataset.eventId);
});

document.querySelector(".hero-event-card").addEventListener("click", (event) => {
  openDetails(event.currentTarget.dataset.eventId);
});

document.querySelector("#details-content").addEventListener("click", (event) => {
  const button = event.target.closest("[data-register-event]");
  if (!button) return;
  const eventId = button.dataset.registerEvent;
  detailsDialog.close();
  openRegistration(eventId);
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.documentElement.classList.add("js");
const revealTargets = document.querySelectorAll(
  ".category-row, .section-heading, .feature-card, .newsletter-inner, .footer-main"
);
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

function validateField(input, errorElement, message) {
  const phoneDigits = input.name === "phone" ? input.value.replace(/\D/g, "").length : 0;
  const phoneCharactersValid = input.name !== "phone" || /^\+?[0-9\s()-]+$/.test(input.value.trim());
  const valid = input.checkValidity()
    && (input.name !== "name" || input.value.trim().length >= 2)
    && (input.name !== "phone" || (phoneCharactersValid && phoneDigits >= 10 && phoneDigits <= 15));
  errorElement.textContent = valid ? "" : message;
  if (valid) input.removeAttribute("aria-invalid");
  else input.setAttribute("aria-invalid", "true");
  return valid;
}

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = registrationForm.elements.namedItem("name");
  const emailInput = registrationForm.elements.namedItem("email");
  const phoneInput = registrationForm.elements.namedItem("phone");
  const eventInput = registrationForm.elements.namedItem("eventId");
  const nameValid = validateField(nameInput, document.querySelector("#name-error"), "Please enter your full name (at least 2 characters).");
  const emailValid = validateField(emailInput, document.querySelector("#email-error"), "Enter a valid email address.");
  const phoneValid = validateField(phoneInput, document.querySelector("#phone-error"), "Enter a valid phone number with 10 to 15 digits.");
  const eventValid = events.some((item) => item.id === eventInput.value);
  const eventError = document.querySelector("#event-error");
  eventError.textContent = eventValid ? "" : "Please select an event.";
  if (eventValid) eventPickerTrigger.removeAttribute("aria-invalid");
  else eventPickerTrigger.setAttribute("aria-invalid", "true");
  if (!nameValid || !emailValid || !phoneValid || !eventValid) {
    const firstInvalid = [nameInput, emailInput, phoneInput, eventPickerTrigger]
      .find((input) => input.getAttribute("aria-invalid") === "true");
    firstInvalid?.focus();
    return;
  }
  const eventRecord = events.find((item) => item.id === eventInput.value);
  if (!eventRecord) {
    eventError.textContent = "Please select a valid event.";
    eventPickerTrigger.setAttribute("aria-invalid", "true");
    eventPickerTrigger.focus();
    return;
  }

  const registration = {
    id: `registration-${Date.now()}`,
    fullName: nameInput.value.trim().replace(/\s+/g, " "),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    eventId: eventRecord.id,
    eventTitle: eventRecord.title,
    registeredAt: new Date().toISOString()
  };
  try {
    const savedRegistrations = JSON.parse(localStorage.getItem("gatherlyRegistrations") || "[]");
    if (!Array.isArray(savedRegistrations)) {
      throw new Error("Saved registrations have an unexpected format.");
    }
    localStorage.setItem("gatherlyRegistrations", JSON.stringify([...savedRegistrations, registration]));
  } catch (error) {
    console.error("Could not save registration to localStorage.", error);
    const storageError = document.querySelector("#registration-storage-error");
    storageError.textContent = "We couldn't save your registration in this browser. Check storage availability and try again.";
    storageError.hidden = false;
    return;
  }

  const guestName = nameInput.value.trim();
  const firstName = guestName.split(/\s+/)[0];
  document.querySelector("#success-message").textContent =
    `Thanks, ${firstName}! Your registration for ${eventRecord.title} has been saved in this browser. It has not been sent to a server.`;
  registrationContent.hidden = true;
  registrationSuccess.hidden = false;
  registrationSuccess.focus();
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.querySelector("#newsletter-feedback").textContent = "Thanks! Your demo newsletter signup is confirmed.";
  form.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
function setMobileMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  primaryNav.classList.toggle("open", isOpen);
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenuOpen(!isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  setMobileMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || menuToggle.getAttribute("aria-expanded") !== "true") return;
  setMobileMenuOpen(false);
  menuToggle.focus();
});

document.addEventListener("pointerdown", (event) => {
  if (menuToggle.getAttribute("aria-expanded") !== "true") return;
  if (!primaryNav.contains(event.target) && !menuToggle.contains(event.target)) setMobileMenuOpen(false);
});

renderEvents();
updateFeaturedCountdown();
window.setInterval(updateFeaturedCountdown, 1000);