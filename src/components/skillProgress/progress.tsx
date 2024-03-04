export default function Progress() {


  return (
    <div className="containing-div grid grid-cols-2 max-lg:grid-cols-1 gap-x-20 mt-20 font-barlow">
      <div className="skill-box ">
        <span className="title dark:text-white ">React Native</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per native">
            <span className="tooltip dark:text-white">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white">React.js</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per react">
            <span className="tooltip dark:text-white">85%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white">Next.js</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per next">
            <span className="tooltip dark:text-white">85%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white">Javascript</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per javascript">
            <span className="tooltip dark:text-white">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white">Typescript</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per typescript">
            <span className="tooltip dark:text-white">75%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white">Node.js</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per node">
            <span className="tooltip dark:text-white">75%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white">Express.js</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per express">
            <span className="tooltip dark:text-white">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box ">
        <span className="title dark:text-white ">TailwindCss</span>
        <div className="skill-bar dark:bg-white">
          <span className="skill-per tailwindcss">
            <span className="tooltip dark:text-white">90%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
