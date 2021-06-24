<template>
  <div class="container">
    <p>All heroes</p>
    <div class="container-currency"
    >

      <CatalogItem
          v-for="(person, id) in people"
          :key="id"
          :name="person.name"
          :homeworld="person.homeworld"
          :hero_data="person"
          @addHero="showChildAddedHeroInConsole"
      />


    </div>
  </div>

</template>

<script>
import CatalogItem from './Catalog-item'
import axios from "axios";
let urls = [
  {id:'1',image:'https://starwars-visualguide.com/assets/img/characters/1.jpg'},
  {id:'2',image:'https://starwars-visualguide.com/assets/img/characters/2.jpg'},
  {id:'3',image:'https://starwars-visualguide.com/assets/img/characters/3.jpg'},
  {id:'4',image:'https://starwars-visualguide.com/assets/img/characters/4.jpg'},
  {id:'5',image:'https://starwars-visualguide.com/assets/img/characters/5.jpg'},
  {id:'6',image:'https://starwars-visualguide.com/assets/img/characters/6.jpg'},
  {id:'7',image:'https://starwars-visualguide.com/assets/img/characters/7.jpg'},
  {id:'8',image:'https://starwars-visualguide.com/assets/img/characters/8.jpg'},
  {id:'9',image:'https://starwars-visualguide.com/assets/img/characters/9.jpg'},
  {id:'10',image:'https://starwars-visualguide.com/assets/img/characters/10.jpg'}
];

let urlsJson =  JSON.stringify(urls);



export default {
  name: "Catalog",
  components: {CatalogItem},
  data: () => ({
    counter: 0,
    people: [],
    id: String,
    image: String,
    search: '',

  }),
  methods: {


    loadPeople() {

      const urlPeople='https://swapi.dev/api/people/?search=a&page=1'
      axios.get(urlPeople)
          .then(response => {
            this.people.url = urlsJson
            console.log(this.people = response.data.results)

          })

          .finally(() => console.log('%cData people loading is complete', 'background: #0096d3; color: #FFFFFFFF'))
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          })
    },


    showChildAddedHeroInConsole(data) {
      console.log(data)
    }

  },
  mounted() {
    this.loadPeople();
  },
  computed:{

  }
}
</script>

<style lang="scss">

.container-currency {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 10px
}

</style>