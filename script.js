function openSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });

  // Optional: update the active tab style
  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const activeTab = Array.from(tabs).find((tab) =>
    tab.innerText.toLowerCase().includes(sectionId)
  );
  if (activeTab) {
    activeTab.classList.add("active");
  }
}
