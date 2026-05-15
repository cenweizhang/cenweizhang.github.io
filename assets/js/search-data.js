// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Here&#39;s a record of my published papers. Hoping for more to come!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-dolphin-ai-as-a-research-algorithm-intern-working-on-ai-for-medical-imaging",
          title: 'Joined Dolphin AI as a research algorithm intern working on AI for Medical...',
          description: "",
          section: "News",},{id: "news-received-an-offer-for-an-msc-in-information-engineering-at-cuhk-starting-sep-2026",
          title: 'Received an offer for an MSc in Information Engineering at CUHK (starting Sep...',
          description: "",
          section: "News",},{id: "news-joined-iquest-research-as-a-llm-algorithm-intern-medical-track",
          title: 'Joined IQuest Research as a LLM algorithm intern (Medical Track).',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
