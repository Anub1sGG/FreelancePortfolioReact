const Contacts = () => {
  return (
    <main className="section main">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.856915,34.9124366,10.34z/data=!4m6!3m5!1s0x40dc673dfa85bb03:0x7e675cd9074d3f4a!8m2!3d47.8392842!4d35.1387097!16zL20vMDYydDNy?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              >
                Zaporizhzhia, Ukraine
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+380951243918 ">+380 (95) 124 3918</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:yyychekhanyuk@gmail.com">
                yyychekhanyuk@gmail.com
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Linkedin</h2>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/yaroslav-chekhanyuk-0728112a6/"
              >
                https://www.linkedin.com/in/yaroslav-chekhanyuk-0728112a6/
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
