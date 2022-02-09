let url = "http://localhost:1000/";


let h = new Headers();

h.append("Content-Type", "application/json");


let data = JSON.stringify({ name: "Steve Griffith" });

let req = new Request(url, {
  method: "POST",
  headers: h,
  body: data
});

fetch(req)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );
  });