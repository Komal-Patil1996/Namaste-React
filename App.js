const  heading = React.createElement("h1", 
{ "id":"heading"},
 "Hello from React!!");

 const h1 = React.createElement("div" ,{id:"parent"},[
    React.createElement("div", {id:"child1"}, 
  [React.createElement("h1", {}, "Iam h1 tag"), React.createElement("h2", {}, "Iam h2 tag")]
  ),
  React.createElement("div", {id:"child2"}, 
  [React.createElement("h1", {}, "Iam h1 tag"), React.createElement("h2", {}, "Iam h2 tag")]
  )
 ]
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);