// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: "Vincent Taneri",
  domain: "vitaneri.com", // add without https:// , used in meta tags and share urls
  image: "/images/bigheadkarngyan.png",
  email: "tanerivince@gmail.com",
  googleAnalyticsV4: {
    enabled: false,
    id: ""
  },
  plausibleAnalytics: {
    enabled: false,
    domain: "vitaneri.com",
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: "https://analytics.lookatx.dev" // default: https://plausible.io
  },
  // Handle comments, likes, auth for blog posts
  firebase: {
    enabled: false
  },
  social: {
    github: "tanerijun",
    linkedin: "vincent-taneri",
    facebook: "VinceTaneri",
    twitter: "tanerivince",
    instagram: "vincenttaneri",
    codestats: "Revirial"
  },
  buyMeACoffee: {
    enabled: true,
    url: "https://www.buymeacoffee.com/tvince"
  },
  projects: {
    enabled: true
  },
  blog: {
    enabled: true
  },
  resume: {
    enabled: false,
    pdfUrl: "/RESUME_GYAN_KARN_DARK.pdf" // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      { title: "OS", value: "macOS Monterey" },
      { title: "Memory", value: "16 GB 2667 MHz DDR4" },
      { title: "Keyboard", value: "Keychron K2 - Gateron Brown Keys" },
      { title: "Mouse", value: "Logitech Silent Pebble" },
      { title: "Monitor", value: "LG QHD (2560 x 1440) 27 Inch IPS Display" },
      {
        title: "Laptop",
        value: "MacBook Air M1"
      }
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: false,
    meta: [
      {
        name: "SendPost",
        src: "/images/sendpost.png",
        url: "https://sendpost.io"
      },
      { name: "Amazon", src: "/images/amazon.png", url: "https://amazon.in" },
      {
        name: "InterviewReady",
        src: "/images/interviewready-io.png",
        url: "https://get.interviewready.io"
      },
      { name: "CrioDo", src: "/images/crio.png", url: "https://crio.do" }
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      {
        name: "Varun Jain",
        designation: "Founder, SendX & SendPost",
        image: "/images/varun.jpeg",
        linkedin: "https://www.linkedin.com/in/varun-jain-582b0215/",
        content:
          "Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user's perspective."
      },
      {
        name: "Gaurav Sen",
        designation: "Founder, InterviewReady",
        image: "/images/gaurav.jpeg",
        linkedin: "https://www.linkedin.com/in/gkcs/",
        content:
          "Karn is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. At InterviewReady, Karn exceeded our expectations. If you are considering working with him: congratulations, you are going to have a great time!"
      }
    ]
  },
  loadingIndicator: {
    name: "folding-cube"
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true
  },
  strings: {
    en_US: {
      download: "Download",
      nav: {
        home: "Home",
        blog: "Blog",
        projects: "Projects",
        uses: "Uses",
        resume: "Résumé",
        buyMeACoffee: "Buy Me A Coffee",
        signIn: "Login",
        signOut: "Logout"
      },
      hero: {
        iBlogTech: "I blog about tech",
        haveALook: "Take a look",
        friendlyNeighborhood: "Your friendly neighborhood",
        description:
          "I am a software developer and a part time freelancer. I blog about tech, and tinker with side projects every now and then.",
        words: ["software developer.", "tech enthusiast.", "problem solver."]
      },
      githubCalendar: {
        header: "Contributions",
        subtext: "Github Calendar Heatmap"
      },
      blog: {
        header: "Vitablog",
        subtext:
          "This is the place where I satisfy my urge of writing, sharing and documenting my knowledge."
      },
      recentBlog: {
        header: "Recent Posts",
        subtext: "Come and get buried inside wall of texts :)"
      },
      uses: {
        header: "Uses",
        subtext:
          "These are what I use on a daily basis to code and my codestats.net flex :)"
      },
      projects: {
        header: "Projects",
        subtext:
          "Click and enjoy some of my personal projects. Visit my Github profile for more."
      },
      recommendations: {
        header: "Recommendations",
        subtext: "What my clients say"
      }
    }
  }
};
