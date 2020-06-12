import React from "react";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state =  require('../data/projects.json');
    }
  render() {
      const { categories } = this.state;

      const buttons = categories.map((item, key) => {
          return <CategoryButton text={item.name} key={key} />
      })

    return (
      <section className="site-section" id="portfolio-section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title mb-3">Portfolio</h2>
            </div>
          </div>

          <div className="row justify-content-center mb-5" data-aos="fade-up">
            <div id="filters" className="filters text-center button-group col-md-7">
              {/* {buttons} */}
                <button className="btn btn-primary active" data-filter="*">All</button>
                <button className="btn btn-primary" data-filter=".web">Web</button>
                <button className="btn btn-primary" data-filter=".design">Design</button>
                <button className="btn btn-primary" data-filter=".brand">Brand</button>
            </div>
          </div>

          <div id="posts" className="row no-gutter">
            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_1.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="/dist/images/slide_1.jpg" />
              </a>
            </div>
            <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_2.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="/dist/images/about.jpg" />
              </a>
            </div>

            <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_3.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="/dist/images/slide_1.jpg" />
              </a>
            </div>

            <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_4.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="/dist/images/slide_1.jpg" />
              </a>
            </div>

            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_5.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="/dist/images/slide_1.jpg" />
              </a>
            </div>

            <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_6.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="/dist/images/slide_1.jpg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class CategoryButton extends React.Component {

    static defaultProps = {
        text: ""
    }

    render() {
        const { text } = this.props;

        var btnClasses = "btn btn-primary" + text == 'All' ? "active" : null;

        return (
            <button className={btnClasses} data-filter={text == 'All' ? `*` : `.` + text}>{text}</button>
        )
    }
   
}