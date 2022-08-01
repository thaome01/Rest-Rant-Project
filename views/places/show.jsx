const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <br></br>
        <div>
          <h2>Rating</h2>
          <h5>Not rated</h5>
        </div>
        <br></br>
        <br></br>
        <div>
          <h2>Description</h2>
          <h5>
            <p>Location in Phoenix, AZ and serving Coffee, Bakery</p>
          </h5>
        </div>
        <br></br>
        <br></br>
        <div>
          <h2>Comments</h2>
          <h5>No comments yet!</h5>
        </div>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
