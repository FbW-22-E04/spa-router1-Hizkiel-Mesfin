import "../App.css";

const Me = () => {
  return (
    <div className="me-container">
      <div className="left-side">
        <img
          src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="right-side">
        <h2 className="name">Ezekiel</h2>
        <p className="text">
          This the same person having a hard time making three the paged website
          happen.
        </p>

        <p className="websites">Some websites i frequently use:</p>
        <ul className="me-list">
          <li>
            <a href="https://www.healthline.com">Healthline</a>
          </li>
          <li>
            <a href="https://www.codewars.com">Codewars</a>
          </li>
          <li>
            <a href="https://www.ezekielenterprise.com">Ezekiel Enterprise</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Me;
