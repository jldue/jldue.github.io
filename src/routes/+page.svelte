<script>
  import "../tailwind.css";

  let isMenuVisible = false;

  function toggleMenu() {
    isMenuVisible = !isMenuVisible;
  }
</script>

<div class="bg-gray-800 overflow-hidden">
  <header class="fixed top-0 w-screen h-16 flex flex-row content-center justify-between bg-gray-100 px-6">
    <h1 class="text-3xl font-bold text-gray-800 self-center text-center">Jean-Luc Düe</h1>
    <button type="menu" on:click={toggleMenu} class="flex flex-col content-center justify-center self-center w-9 h-9 border border-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1f2937" class="self-center w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </header>
  {#if isMenuVisible}
  <div class="fixed end-0 h-screen flex flex-col content-center justify-start w-56 p-8 gap-10 border-l-2 border-gray-800 bg-gray-100 bg-[url(circuit-board_menu.svg)] bg-center animate-fade-left animate-ease-out">
    <button type="menu" on:click={toggleMenu} class="flex flex-col content-center justify-center self-end w-9 h-9 border border-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>      
    </button>
    <a href="#goals" on:click={toggleMenu} class="text-lg font-bold text-gray-800 underline">Goals</a>
    <a href="#skills" on:click={toggleMenu} class="text-lg font-bold text-gray-800 underline">Skills</a>
    <a href="#employements" on:click={toggleMenu} class="text-lg font-bold text-gray-800 underline">Employments</a>
    <a href="#education" on:click={toggleMenu} class="text-lg font-bold text-gray-800 underline">Education</a>
    <a href="#story" on:click={toggleMenu} class="text-lg font-bold text-gray-800 underline">Story</a>
    <div class="flex flex-1 flex-col content-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="#1f2937" class="self-center w-32 h-32">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    </div>    
  </div>
  {/if}
  <main id="main" class="pt-20 mt-[-1rem]">
    <img src="profile.jpg" alt="Profile"/>
    <div class="flex flex-col content-center justify-start p-6 gap-6 bg-[url(circuit-board.svg)] bg-center">
      <div class="flex flex-row content-center items-center justify-center gap-6">
        <a href="https://www.linkedin.com/in/jean-luc-d%C3%BCe-82a324206/" target="_blank">
          <img src="linkedin.png" alt="LinkedIn" width="50"/>
        </a>
        <a href="https://www.upwork.com/freelancers/~01f0051e41f2b39820/" target="_blank">
          <img src="upwork.png" alt="Upwork" width="50"/>
        </a>
        <a href="https://www.fiverr.com/jl_duee/" target="_blank">
          <img src="fiverr.png" alt="Fiverr" width="50"/>
        </a>
        <a href="https://github.com/jl-duee/" target="_blank">
          <img src="github.png" alt="GitHub" width="50"/>
        </a>
      </div>
      <h2 id="goals" class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]">Goals</h2>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        <li>A leadership position in a bigger company.</li>
        <li>Working as a contractor to develop apps, systems and websites for you as someone that has a good business idea or a business that needs to be digitally enhanced.</li>
      </ul>
      <h2 id="skills" class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]">Skills</h2>
      <h3 class="font-bold text-amber-500">Technology skills</h3>
      <div class="flex flex-col content-center justify-start gap-2">
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Backend:</p>
          <p class="text-gray-100 flex-1">Spring, Ktor</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Database:</p>
          <p class="text-gray-100 flex-1">MySQL, MongoDB, DynamoDB, Firestore</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Desktop:</p>
          <p class="text-gray-100 flex-1">JavaFX, Kotlin Multiplatform, .NET WinUI</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Mobile:</p>
          <p class="text-gray-100 flex-1">iOS/Android native, Flutter hybrid</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Web:</p>
          <p class="text-gray-100 flex-1">React, SvelteKit, Tailwind</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Cloud:</p>
          <p class="text-gray-100 flex-1">AWS, Firebase</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">Embedded:</p>
          <p class="text-gray-100 flex-1">FreeRTOS, Zephyr</p>
        </div>
        <div class="flex flex-row content-center justify-center gap-4">
          <p class="text-gray-100 w-24 text-end">ML:</p>
          <p class="text-gray-100 flex-1">Tensorflow</p>
        </div>
      </div>
      <h3 class="font-bold text-amber-500">Programming languages</h3>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        <li>Java & Kotlin</li>
        <li>Swift</li>
        <li>C / C++</li>
        <li>C#</li>
        <li>SQL</li>
        <li>HTML & CSS</li>
        <li>JavaScript & TypeScript</li>
        <li>Dart</li>
        <li>Python</li>
      </ul>
      <h3 class="font-bold text-amber-500">Human languages</h3>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        <li>German (mother tongue)</li>
        <li>Norwegian (almost mother tongue)</li>
        <li>English (fluent)</li>
      </ul>
      <h3 class="font-bold text-amber-500">Soft skills</h3>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        <li>Leading a team/project to success</li>
        <li>Working in teams</li>
        <li>Quick adaption to new technologies</li>
        <li>Entrepreneur mindset (I get it done)</li>
      </ul>
      <h2 id="employements" class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]">Employments</h2>
      <div class="flex flex-col content-center justify-start">
        <h3 class="font-bold text-amber-500">Sportradar (Nov. 2016 - Aug. 2021)</h3>
        <p class="font-thin text-gray-100">First Software Engineer<br>Later Software Architect</p>
        <p class="text-gray-100 pt-6 text-justify">I worked for the Live Data team that was responsible for processing live events happening at different matches in different kind of sports. Those events were later used in betting products and were important to be delivered with latencies as low as 500ms around the globe. I worked hard and therefore later got a position as the main technical lead architect of this department. My job as the main technical lead architect was to safely transition the existing backend applications to AWS Cloud and to lead a new group of Software Engineers based in Warsaw to build our new Frontend application with modern web technologies.</p>
      </div>
      <div class="flex flex-col content-center justify-start">
        <h3 class="font-bold text-amber-500">GreenFox (Aug. 2021 - Present)</h3>
        <p class="font-thin text-gray-100">First Senior Software Engineer<br>Later Software Responsible</p>
        <p class="text-gray-100 pt-6 text-justify">At GreenFox I worked on the idea to make sex-sorting of fish a reality. I started my work when there was not much else than the idea yet. Together with only a few engineers we created different kinds of Software pieces that would later work together with a bunch of hardware (belts, motors, sensors, etc.) as a semi-automatic sex-sorting machine for fish ("Semi-automatic" meaning someone has to row up fish on a belt that will then be analyzed). I had the honor to get to work on all software pieces of the machine: Embedded Software (controlling hardware), Machine Learning | AI (Identify sex of fish based on ultrasound images, System Software | Desktop Application (to control the entire appliance - specifically the ultrasound system) and pieces of cloud software for the collection of AI training data and invoice processing. We already sold a few machines. Due to the increasing size of the company, I was chosen to be the main responsible for the overall Software department.</p>
      </div>
      <h2 id="education" class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]">Education</h2>
      <ul class="text-gray-100 list-disc pl-5 pr-2">
        <li>Bachelor of Science (B.Sc.) in Computer Science and Economics at the University of Hildesheim (Germany: 2014 - 2016)</li>
      </ul>
      <h2 id="story" class="text-2xl font-bold text-gray-100 self-center text-center pt-20 mt-[-5rem]">Story</h2>
      <p class="text-gray-100 text-justify">As a little kid I was already interested in computers. When my father got himself a brand new Windows XP machine I got his Windows 98 machine. But before I was allowed to use it, he gave me a box of diskettes (it must have been around 50 diskettes) so I can delete everything and install Windows from scratch. It was a nightmare but also fun.</p>
      <p class="text-gray-100 text-justify">Fast forwarding to university I loved programming with other students and my favorite “subject” at university was a project in groups to actually create a minimal version of an online shop as a web application. This was one of the few things at university where we actually needed to get something to the final stage of product development otherwise we would fail the class. I also embraced all theoretical subjects as I understood that it may be crucial for solving future problems but I liked most getting products developed from 0 to 100 and the end product being of actual use to others.</p>
      <p class="text-gray-100 text-justify">With a lot of experience I acquired from my two recent full time jobs but also knowledge I gained myself due to self driven learning, I would like to go forward with my career by seeking for technical leadership positions but also be open for single projects to be hired for as a self driven contractor.</p>
    </div>
  </main>
  <footer class="flex flex-row content-center justify-between bg-gray-100 h-16 px-6">
    <div class="flex flex-col content-center justify-center">
      <p class="self-start text-center text-sm text-gray-800">+47 455 07 954</p>
      <a class="self-start text-center text-sm text-gray-800 underline" href="mailto:contact@jlduee.com">contact@jlduee.com</a>
    </div>
    <a href="#main" class="flex flex-col content-center justify-center self-center w-9 h-9 border border-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>      
    </a>
  </footer>
</div>
