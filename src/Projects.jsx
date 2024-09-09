import easybank from "./assets/easybank.jpg";
import expense from "./assets/expense.png";
import todo from "./assets/todo.jpg";
import cart from "./assets/Cart.jpg";

export default function Projects() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
          <h2 className="mb-1">Projects</h2>
          <div className="subheading mb-2">Frontend projects</div>
          <div className="d-flex row">
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img className="card-img-top" src={cart} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Simple Cart </h5>
                <a
                  href="https://github.com/Vinoth-94/sam_cart"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://sample-cart.netlify.app"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img
                className="card-img-top"
                src={easybank}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Easy bank Responsive design using media query{" "}
                </h5>
                <a
                  href="https://github.com/Vinoth-94/easybank-project"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://vinoth-94.github.io/easybank-project/#"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "16rem" }}
            >
              <img
                className="card-img-top"
                src={expense}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Expense Tracker </h5>
                <a
                  href="https://github.com/Vinoth-94/expense_tracker"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href=" https://vinoth-94.github.io/expense_tracker/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img className="card-img-top" src={todo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Todo list</h5>
                <a
                  href="https://github.com/Vinoth-94/todo-list"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
                <a
                  href="https://vinoth-94.github.io/todo-list/"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interests*/}
      {/* <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. On weekdays I go for walks daily. During the weekends I
            attend latin dance classes and technical meetups. I also enjoy
            trekking, exploring local cuisines and blogging.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring blogger, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section> */}
      <hr className="m-0" />
    </div>
  );
}
