
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Saving Private Ryan", "Hook", "Interstellar", "Star Wars", "The Town", "Jojo Rabbit"],
      zoolanderIsGood: false,
      newMovie: "",
      noZoolander: "You need to add zoolander to your favorite movies, what is this a center for ants?!"



    };
  },
  methods: {
    addMovie: function () {
      console.log("adding a new movie!");
      console.log(this.newMovie);
      this.movies.push(this.newMovie);

    },
    isZoolanderThere: function () {


      console.log("Running");

      if (this.movies.includes("Zoolander")) {
        this.zoolanderIsGood = true;
      } else {
        this.noZoolander;
      }
    },
    created: function () {
      this.isZoolanderThere();
      console.log("I am in created!!!!");
      //
      console.log(this.movies.includes("Zoolander"));

    }
  }

});

