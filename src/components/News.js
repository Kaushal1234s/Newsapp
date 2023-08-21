import React, { Component } from "react";
import NewsItem from "./NewsItem";
import imag from "./Triangles indicator.gif";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    // default country,pagesize or category ye hone chahiye
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  // // newsApi se api copy karke json mein convert kiya fir SampleOutput.json mein paste kiya fir yaha paste kar diya articles only
  // // articles ko ek array bana diya

  constructor(props) {
    super(props);
    // constructor ke baad super likhna jaruri h then baaki ka code

    // this.state ki madad se hum constructor ke andar state ko change kar sakte h and this.props ki madad se bhi state ko change kar sakte h
    this.state = {
      articles: [],
      loading: false,
      page: 1, //for 1 page
      // jab bhi koi cheej load ho rahi hoggi toh loading ko true kar denge fir false kar denge
    }
    // agar constructor mein props use kare h toh constructor or super mein props lene padenge
    document.title=`${this.props.category} - NewsNow`;         //upar jab jab category change hogi ye bhi change hoga
  }

  async componentDidMount() {
    // componentDidMount is a life cycle method and it will run after render method runs
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b4b4e3f10d294d7baf199ceb1695df01&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    // ${ } matlab iske andar ka input variable h

    // this url is used to fetch news
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    // country=${this.props.country} aisa karne se country ko as aprop pass kar sakte h and woh variable ban chuka h ab
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=b4b4e3f10d294d7baf199ceb1695df01&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    // this url is used to fetch news
    let data = await fetch(url);
    let parsedData = await data.json();

    // matlab jab bhi next pe click hoga toh page ki state change ho jayegi or page 1 se aage badh jayega
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  // initially handleNextClick,handlePrevClick,componentDidMount mein loading true h or jaise he data fetch ho jaata h loading false ho jayegi

  // pagesize=20 matlab ek page pe 20 items he show hongi

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResult / this.props.pageSize)
      )
    ) {
      // (this.state.page+1>Math.ceil(this.state.totalResult/20) ka matlab h ki next page (this.state.page+1) jab he possible h jab Math.ceil(this.state.totalResult/20) bada hoga
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=b4b4e3f10d294d7baf199ceb1695df01&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      // this url is used to fetch news
      let data = await fetch(url);
      let parsedData = await data.json();

      // matlab jab bhi next pe click hoga toh page ki state change ho jayegi or page 1 se aage badh jayega
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="Container" >
        <h2 className=" text-center " style={{margin:'35px 0px',marginTop:'90px'}}>Top Headlines Now</h2>
        <div className="text-center">
          {this.state.loading && <img src={imag} alt="/" />}
          {/* according to line 83 we mean that if this.state.loading is treu then only show image */}
        </div>
        {/* here md-4 means  ki medium devices mein 4 column le legi and bootstrap has grid of 12 col so for 3 div we have 4*3=12 matlab pura space covered  */}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  {/* key humne insliye di h to uniquely identify each news and har news ka jo url h woh unique he hoga isliye */}
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                  {/* ye humne ternary operator isliye lagaya h kyoki agar quthor kabhi null h toh woh "" display kare */}
                  {/* .slice(0,44) se matlab h characters jo h woh 44 tak hone chahiye sirf title mein phir humne NewsItem mein jaake {title} ke aage ... laga diya same with desc */}
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          {/* &larr = <- and &rarr = -> */}
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

// jitne bhi async functions h woh lec 33 mein bhi samjha rakhe h + alag approach
