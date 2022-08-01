const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/pho.jpg" alt="PHO Noodle" />
        </div>
        Photo by <a href="AUTHOR_LINK">Markus Winkler</a> on{" "}
        <a href="UNSPLASH_LINK">Unsplash</a>
        <br></br>
        <br></br>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
