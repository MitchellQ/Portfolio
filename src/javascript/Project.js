import React from "react";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  
    this.state =  require('../data/projects.json');
  }

  render() {
    // // const { 
    // //   title, images, imageCaptions, frameworks, frameworkIcons, client, link, moreInfo, tagline, desc_1, desc_2, desc_3, desc_4
    // // } = this.state;

    const { projects } = this.state;


    const frameworkItems = projects ? projects.map((project, key) => {
      return <Framework framework={project.frameworks[0].framework} src ={project.frameworkIcons[0].src} key={key} />;
    }) : null;

    return (
      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 blog-content">
              <div className="row mb-5">
                <div className="col-lg-6">
                  <figure>
                    <img
                      src="/dist/images/slide_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <figcaption>This is an image caption</figcaption>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <figure>
                    <img
                      src="/dist/images/slide_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <figcaption>This is an image caption</figcaption>
                  </figure>
                </div>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae
                quisquam eaque dolore itaque quod tenetur quo quos labore?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                expedita cumque necessitatibus ducimus debitis totam, quasi
                praesentium eveniet tempore possimus illo esse, facilis?
                Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur
                voluptatibus incidunt reprehenderit, quidem repellat sapiente,
                id, earum obcaecati.
              </p>

              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident vero tempora aliquam excepturi labore, ad soluta
                  voluptate necessitatibus. Nulla error beatae, quam, facilis
                  suscipit quaerat aperiam minima eveniet quis placeat.
                </p>
              </blockquote>

              <p>
                Eveniet deleniti accusantium nulla natus nobis nam asperiores
                ipsa minima laudantium vero cumque cupiditate ipsum ratione
                dicta, expedita quae, officiis provident harum nisi! Esse
                eligendi ab molestias, quod nostrum hic saepe repudiandae non.
                Suscipit reiciendis tempora ut, saepe temporibus nemo.
              </p>
              <p>
                Accusamus, temporibus, ullam. Voluptate consectetur laborum
                totam sunt culpa repellat, dolore voluptas. Quaerat cum ducimus
                aut distinctio sit, facilis corporis ab vel alias, voluptas
                aliquam, expedita molestias quisquam sequi eligendi nobis ea
                error omnis consequatur iste deleniti illum, dolorum odit.
              </p>
              <p>
                In adipisci corporis at delectus! Cupiditate, voluptas, in
                architecto odit id error reprehenderit quam quibusdam excepturi
                distinctio dicta laborum deserunt qui labore dignissimos
                necessitatibus reiciendis tenetur corporis quas explicabo
                exercitationem suscipit. Nisi quo nulla, nihil harum obcaecati
                vel atque quos.
              </p>
              <p>
                Amet sint explicabo maxime accusantium qui dicta enim quia,
                nostrum id libero voluptates quae suscipit dolor quam tenetur
                dolores inventore illo laborum, corporis non ex, debitis quidem
                obcaecati! Praesentium maiores illo atque error! Earum, et,
                fugit. Sint, delectus molestiae. Totam.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                iste, repudiandae facere aperiam sapiente, officia delectus
                soluta molestiae nihil corporis animi quos ratione qui labore?
                Sint eaque perspiciatis minus illum.
              </p>
              <p>
                Consectetur porro odio quod iure quaerat cupiditate similique,
                dolor reprehenderit molestias provident, esse dolorum omnis
                architecto magni amet corrupti neque ratione sunt beatae
                perspiciatis? Iste pariatur omnis sed ut itaque.
              </p>
              <p>
                Id similique, rem ipsam accusantium iusto dolores sit velit ex
                quas ea atque, molestiae. Sint, sed. Quisquam, suscipit!
                Quisquam quibusdam maiores fugiat eligendi eius consequuntur,
                molestiae saepe commodi expedita nemo!
              </p>
            </div>
            <div className="col-md-4 sidebar">
              <div className="sidebar-box">
                <img
                  src="/dist/images/f4k.png"
                  alt="Image placeholder"
                  className="img-fluid mb-4"
                />
                <h3>About The Client</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-sm">
                    Visit the site
                  </a>
                </p>
              </div>

              <div className="sidebar-box">
                <div className="categories">
                  <h3>Technologies used </h3>
                  {frameworkItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class ProjectImage extends React.Component {
  
}

class Framework extends React.Component {
  static defaultProps = {
    framework: "",
    src: ""
  }

  render() {
    const { src, framework } = this.props;

    return (
      <li>{framework} <img style={{ float: "right" }} height="30" src={src}/></li>
    );
  }
}
