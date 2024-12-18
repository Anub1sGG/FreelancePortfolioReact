import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section main">
        <div className="container">
          <h1 className="title-1">Skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p className="skills">
                JavaScript, TypeScript, ReactJS, HTML5, CSS3, NPM, TailwindCSS
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p className="skills">Python, FastAPI, Pytest, NodeJS</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Data bases</h2>
              <p className="skills">PostgreSQL, SQLAlchemy</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Deployment Tools</h2>
              <p className="skills">Docker, Git</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
