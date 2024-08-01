<script>
  import "../tailwind.css";

  const NAME = "Jean-Luc Düe";
  const PHONE_NUMBER = "+47 455 07 954";
  const EMAIL_ADDRESS = "jl.duee@googlemail.com";

  const GOALS = [
    "Contribute in a technical leadership position within an organization to drive impactful projects and deliver measurable results.",
    "Offer my expertise as a contractor to develop high-quality apps, systems, and websites for individuals with innovative business ideas or companies seeking digital transformation."
  ];

  const TECHNOLOGY_SKILLS = new Map([
    ["Backend", "Spring, Ktor"],
    ["Database", "MySQL, DynamoDB, Firestore"],
    ["Desktop", "JavaFX, .NET WinUI"],
    ["Mobile", "iOS/Android native, Flutter hybrid"],
    ["Web", "React, SvelteKit, Tailwind"],
    ["Cloud", "AWS, Firebase"],
    ["Embedded", "FreeRTOS, Zephyr"],
    ["ML", "Tensorflow"]
  ]);

  const PROGRAMMING_LANGUAGES = [
    "Java & Kotlin",
    "C / C++",
    "C#",
    "JavaScript & TypeScript",
    "Swift",
    "Dart",
    "Python"
  ];

  const HUMAN_LANGUAGES = [
    "German (mother tongue)",
    "Norwegian (almost mother tongue)",
    "English (fluent)"
  ];

  const SOFT_SKILLS = [
    "Successfully leading teams and projects to achieve their goals.",
    "Collaborating effectively within diverse teams.",
    "Quickly adapting to new technologies.",
    "Demonstrating an entrepreneurial mindset with a strong focus on execution and results."
  ];

  const EMPLOYMENTS = new Map([
    [
      "GreenFox Marine (Aug. 2021 - Present)",
      {
        FIRST: "Senior System Developer (Aug. 2021 - Jul. 2024)",
        LATER: "Chief Technology Officer (Aug. 2024 - Present)",
        TEXT: "At GreenFox Marine, I embarked on the innovative project of developing a semi-automatic sex-sorting machine for fish, starting from just an idea. Working with a small team, we created software components that integrated seamlessly with hardware elements like belts, motors, and sensors. I had the opportunity to work on all aspects of the machine's software, including embedded software for hardware control, machine learning for sex identification based on ultrasound images, system software (like the ultrasound interface) and desktop application for managing the entire system, and cloud software for AI training data collection and invoice processing. Our hard work led to the successful sale of several machines. As the company grew, I was appointed as the Chief Technology Officer of GreenFox Marine, guiding its continued growth and technological advancement."
      }
    ],
    [
      "Sportradar (Nov. 2016 - Aug. 2021)",
      {
        FIRST: "Software Developer (Nov. 2016 - Jul. 2019)",
        LATER: "Software Architect (Aug. 2019 - Aug. 2021)",
        TEXT: "I worked on the Live Data team, responsible for processing live sports events across various matches and sports types. These events were critical for our betting products but also needed to be delivered globally to our clients with latencies as low as 500ms. My dedication and performance earned me the position of the software architect for this team. In this role, I worked on the transition of our backend applications to AWS Cloud and led a new team of software engineers in Warsaw to develop a modern frontend application using the latest web technologies."
      }
    ]
  ]);

  const EDUCATION = [
    "Bachelor of Science (B.Sc.) in Computer Science and Economics at the University of Hildesheim, Germany (Oct. 2014 - Sep. 2016). This education was a combined bachelor degree in computer science with economics and business development in mind."
  ];

  const STORY = [
    "From a young age, my fascination with computers was evident. When my father upgraded to a brand new Windows XP machine, I inherited his Windows 98 machine. However, before I could use it, he handed me a box of about 39 diskettes and instructed me to delete everything and install Windows from scratch. It was both a challenging and fun experience.",
    "Fast forward to university, I discovered a passion for programming alongside fellow students. My favorite project involved collaborating in groups to create a minimal version of an online shop as a web application. This project was unique because it required us to deliver a fully functional product to pass the class. While I appreciated the theoretical subjects for their importance in problem-solving, I thrived most when taking a product from concept to completion and making it useful for others.",
    "With the extensive experience gained from my recent full-time positions and the knowledge acquired through self-driven learning, I am now looking to advance my career. I am seeking technical leadership roles but am also open to individual projects as an independent contractor."
  ];

  let isMenuVisible = false;

  function openMenu() {
    isMenuVisible = true;
  }

  function closeMenu() {
    isMenuVisible = false;
  }
</script>

<div class="overflow-x-hidden">
  <header
    class="fixed z-20 top-0 w-screen h-16 flex flex-row content-center justify-between bg-gray-100 px-6"
  >
    <h1 class="text-3xl font-bold text-gray-800 self-center text-center">{NAME}</h1>
    <button
      type="menu"
      on:click={openMenu}
      class="flex flex-col content-center justify-center self-center w-9 h-9 border border-gray-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#1f2937"
        class="self-center w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </header>

  {#if isMenuVisible}
    <div
      class="fixed z-30 end-0 h-screen flex flex-col content-center justify-start w-56 p-8 gap-10 border-l-2 border-gray-800 bg-gray-100 bg-[url(/circuit-board_light.svg)] bg-center animate-fade-left animate-ease-in-out animate-duration-500"
    >
      <button
        type="menu"
        on:click={closeMenu}
        class="flex flex-col content-center justify-center self-end w-9 h-9 border border-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="self-center w-7 h-7"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <a href="#goals" on:click={closeMenu} class="text-lg font-bold text-gray-800 underline"
        >Goals</a
      >
      <a href="#skills" on:click={closeMenu} class="text-lg font-bold text-gray-800 underline"
        >Skills</a
      >
      <a href="#employments" on:click={closeMenu} class="text-lg font-bold text-gray-800 underline"
        >Employments</a
      >
      <a href="#education" on:click={closeMenu} class="text-lg font-bold text-gray-800 underline"
        >Education</a
      >
      <a href="#story" on:click={closeMenu} class="text-lg font-bold text-gray-800 underline"
        >Story</a
      >
    </div>
  {/if}

  <main id="main" class="pt-20 mt-[-1rem] bg-gray-800 bg-[url(/circuit-board_dark.svg)] bg-center">
    <div
      class="flex flex-col content-center justify-start p-6 sm:px-[10%] md:px-[15%] lg:px-[25%] gap-6"
    >
      <div
        class="relative z-10 flex flex-col content-center justify-center self-center items-center w-[360px] h-[192px] sm:w-[600px] sm:h-[320px]"
      >
        <img
          src="cpu-frame.png"
          alt="CPU-Frame"
          width="600"
          class="absolute w-[360px] sm:w-[600px]"
        />
        <img
          src="profile.jpeg"
          alt="Profile"
          class="absolute border-2 border-gray-100 rounded-lg w-[180px] sm:w-[300px]"
        />
      </div>

      <div class="z-10 flex flex-row content-center self-center items-center justify-center gap-6">
        <a href="https://www.linkedin.com/in/jldue/" target="_blank">
          <img src="linkedin.png" alt="LinkedIn" width="50" />
        </a>
        <a href="https://www.upwork.com/freelancers/~01f0051e41f2b39820/" target="_blank">
          <img src="upwork.png" alt="Upwork" width="50" />
        </a>
        <a href="https://github.com/jldue/" target="_blank">
          <img src="github.png" alt="GitHub" width="50" />
        </a>
      </div>

      <h2
        id="goals"
        class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]"
      >
        Goals
      </h2>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        {#each GOALS as goal}
          <li>{goal}</li>
        {/each}
      </ul>

      <h2
        id="skills"
        class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]"
      >
        Skills
      </h2>
      <h3 class="font-bold text-amber-500">Technology skills</h3>
      <div class="flex flex-col content-center justify-start gap-2">
        {#each TECHNOLOGY_SKILLS.entries() as [category, technologies]}
          <div class="flex flex-row content-center justify-center gap-4">
            <p class="text-gray-100 w-24 text-end">{category}:</p>
            <p class="text-gray-100 flex-1">{technologies}</p>
          </div>
        {/each}
      </div>
      <h3 class="font-bold text-amber-500">Programming languages</h3>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        {#each PROGRAMMING_LANGUAGES as programmingLanguage}
          <li>{programmingLanguage}</li>
        {/each}
      </ul>
      <h3 class="font-bold text-amber-500">Human languages</h3>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        {#each HUMAN_LANGUAGES as humanLanguage}
          <li>{humanLanguage}</li>
        {/each}
      </ul>
      <h3 class="font-bold text-amber-500">Soft skills</h3>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        {#each SOFT_SKILLS as softSkill}
          <li>{softSkill}</li>
        {/each}
      </ul>

      <h2
        id="employments"
        class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]"
      >
        Employments
      </h2>
      {#each EMPLOYMENTS.entries() as [employer, information]}
        <div class="flex flex-col content-center justify-start">
          <h3 class="font-bold text-amber-500">{employer}</h3>
          <p class="font-thin text-gray-100">{information.FIRST}<br />{information.LATER}</p>
          <p class="text-gray-100 pt-6">{information.TEXT}</p>
        </div>
      {/each}

      <h2
        id="education"
        class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]"
      >
        Education
      </h2>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        {#each EDUCATION as education}
          <li>{education}</li>
        {/each}
      </ul>

      <h2
        id="story"
        class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]"
      >
        Story
      </h2>
      {#each STORY as paragraph}
        <p class="text-gray-100">{paragraph}</p>
      {/each}
    </div>
  </main>

  <footer class="flex flex-row content-center justify-between bg-gray-100 h-16 px-6">
    <div class="flex flex-col content-center justify-center">
      <p class="self-start text-center text-sm font-bold text-gray-800">{PHONE_NUMBER}</p>
      <a
        class="self-start text-center text-sm font-bold text-gray-800 underline"
        href="mailto:{EMAIL_ADDRESS}">{EMAIL_ADDRESS}</a
      >
    </div>
    <a
      href="#main"
      class="flex flex-col content-center justify-center self-center w-9 h-9 border border-gray-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="self-center w-7 h-7"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </a>
  </footer>
</div>
