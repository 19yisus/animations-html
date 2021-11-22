new Vue({
    el: "#appVue",
    data:{
        message:"Hola vue",
        urlBase: "https://api.themoviedb.org/3",
        tokenKey: "ce6cc39e6d87aad055cd1c74ca774a03",
        movies: [],
        movie: {},
        numberPage: "",
        totalResults: "",
        totalPages: "",
        baseURLimages: "https://image.tmdb.org/t/p/w500",
    },
    methods:{
        consulta: async function(){
            await fetch(`${this.urlBase}/discover/movie?api_key=${this.tokenKey}&sort_by=popularity.desc`).then( response => response.json())
            .then( res =>{
                this.movies = res.results;
                this.numberPage = res.page;
                this.totalResults = res.total_pages;
                this.totalPages = res.total_pages;
                this.movie = res.results[0];
                this.movie.poster_path = this.baseURLimages + this.movie.poster_path;

                this.movies.map( item => item.poster_path = this.baseURLimages + item.poster_path);
            }).catch(Err => console.error(Err))
        },
    },
    async mounted(){
        await this.consulta();
        console.log(this.movie)
    }
});