import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="header-menu">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Creativity</a></li>
              <li><a href="#">Entrepreneurship</a></li>
              <li><a href="#">Self</a></li>
              <li><a href="#">Culture</a></li>
              <li><a href="#">Digital design</a></li>
              <li><a href="#">Popular on Medium</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">More</a></li>
              <button className="menu-button">Get started</button>
            </ul>
          </nav>
        </div>
        <section className="hero-section">
          <div className="hero-section-left">
            <h1>Interesting ideas that set you mind in motion.</h1>
            <p>Hear Directly from the people who know it best.
               From tech to politics to creativity and more.
               - whatever your interest we got you covered.
            </p>
            <button className="hero-button-dark">Get started</button>
            <button className="hero-button-light">Get started</button>
          </div>
          <div className="hero-section-right">
            <img src="./images/medium-image.png" />
          </div>
        </section>
        <section className="article-boxes">
          <div className="box box-left">
            <img src="./images/medium-image-puff-1.jpeg" />
            <div className="box-content">
              <h2>The boy who tamed the sea</h2>
              <p className="article-text">at 5:30 am, on any morning I can handle it,
                 I'll spill of the dark mouth of covers and
                 creep through the silver lig....
              </p>
              <img className="writer-img" src="./images/writer-1.png" />
              <div className="writer-text">
                <p className="writer-name">Carl More</p>
                <p className="writer-date">Oct 28</p>
                <p className="read-time">8 min read</p>
                <img className="bookmark" src="./images/bookmark.png" />
              </div>
            </div>
          </div>
          <div className="box box-right">
            <img src="./images/medium-image-puff-2.png" />
            <div className="box-content">
              <h2>The role of human emotions in the future of transport</h2>
              <p className="article-text">Getting from A to B is about to feel very different.</p>
              <img className="writer-img" src="./images/writer-2.jpeg" />
              <div className="writer-text">
                <p className="writer-name">Ben Bland</p>
                <p className="writer-date">Nov 1</p>
                <p className="read-time">7 min read</p>
                <img className="bookmark" src="./images/bookmark.png" />
              </div>
            </div>
          </div>
          <div className="box box-left">
            <img src="./images/medium-image-puff-4.jpeg" />
            <div className="box-content">
              <h2>The march of the losers</h2>
              <p className="article-text">Around the world, the victims are becoming the abusers,
              and Donald Trump is their king
              </p>
              <img className="writer-img" src="./images/writer-3.jpeg" />
              <div className="writer-text">
                <p className="writer-name">Henry Wismayer</p>
                <p className="writer-date">Nov 10</p>
                <p className="read-time">8 min read</p>
                <img className="bookmark" src="./images/bookmark.png" />
              </div>
            </div>
          </div>
          <div className="box box-right">
            <img src="./images/medium-image-puff-3.png" />
            <div className="box-content">
              <h2>The burning Season</h2>
              <p className="article-text">Cannot save everything when
                the fires come to Northen California
              </p>
              <img className="writer-img" src="./images/writer-4.jpeg" />
              <div className="writer-text">
                <p className="writer-name">Lindsey Smith</p>
                <p className="writer-date">Nov 9</p>
                <p className="read-time">31 min read</p>
                <img className="bookmark" src="./images/bookmark.png" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default App
