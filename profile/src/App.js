import './App.css';
const putSomething = { 
    mineral : 'Lithium Ore',
    level: "beginner",
    color: "#2662EA",
    playing: 'checkers',
    watchin: 'sadhguru'
  };
const skills = [
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },
  putSomething
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="simple.jpg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Mba Ifeanyi Nelson</h1>
      <p>
        Full-stack web developer student at Udemy. When not learning or
        preparing for a course, I like to play board games, to cook (and eat), or to
        just enjoy the Nigerian sun at the neighbor's house.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        // <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        <div>
          <Skill { ...skill }  />
        </div>
      ))}
    </div>
  );
}

function Skill({ skill, color, level, mineral, playing, watchin }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{mineral} {playing} {watchin}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
export default App;