const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div>
          <h1>{data.place.name}</h1>
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div>
          <h2>Rating</h2>
          <h5>Not rated</h5>
        </div>
        <br></br>
        <div>
          <br />
          <h2>Description</h2>
          <h4>Serving {data.place.cuisines}</h4>
        </div>
        <br></br>
        <div>
          <h2>Comments</h2>
          <h5>No comments yet!</h5>
          <br></br>
          <br></br>
        </div>
        <div>
          <a href="/places/${data.id}/edit" className="btn btn-warning">
            Edit
          </a>

          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;

// const React = require("react");
// const Def = require("../default");

// function show(data) {
//   return (
//     <Def>
//       <main>
//         <h1>{data.place.name}</h1>
//       </main>
//     </Def>
//   );
// }

// module.exports = show;
