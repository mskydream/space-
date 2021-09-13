<template>
    <div>
        <div>
            <v-carousel>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade"
                transition="fade"
            ></v-carousel-item>
            </v-carousel>
        </div>

        <v-container grid-list-lg fluid>
                <v-layout row >
                    <v-flex xs12 class="text-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
                </v-layout>
                <v-layout row wrap class="align-center">
                    <v-flex  xs12 sm12 md4 
                            v-for="(item,index) in card" :key="index"
                            
                    >
                        <v-card
                        class="mx-auto"
                        max-width="300"
                        elevation="24"
                        >
                            <v-img :src ="item.src" height="400px">
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline white--text">{{item.topTitle}}</span>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{item.title}}</h3>
                                    <div>
                                        {{item.text}}
                                    </div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
        </v-container>
    </div>

</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://www.wallpapertip.com/wmimgs/66-668458_7-of-the-most-romantic-places-in-the.jpg'
        },
        {
          src: 'https://wallpaperaccess.com/full/185328.jpg'
        },
        {
          src: 'https://wallpapercave.com/wp/s5qnurN.jpg'
        },
        {
          src: 'http://www.experiencify.com/wp-content/uploads/2015/07/Mass_Ascension.jpg'
        }
      ],
      card:[
          {
              src:'http://source.unsplash.com/hjCA3ecCXAQ',
              title: 'Keto',
              topTitle:'KETO',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.'
          },
          {
              src: 'http://source.unsplash.com/6S27S6pZ6o0',
              title: 'PALEO',
              topTitle:'PALEO',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.'
          },
          {
              src: 'http://source.unsplash.com/1SPu0KT-Ejg',
              title: 'VEGAN',
              topTitle:'VEGAN',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.'
          },
          {
              src:'https://assets.bonappetit.com/photos/5ae731b2dbb2ad7bffa5df8c/16:9/w_2560%2Cc_limit/una-pizzeria-2.jpg',
              title: 'Napoletana',
              topTitle:'Napoletana',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.'
          },
          {
              src:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/20/KC2403_skirt-steak-fajitas_s4x3.jpg.rend.hgtvcom.616.462.suffix/1582236818807.jpeg',
              title: 'Fajitas',
              topTitle:'FAJITAS',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.'
          },
      ]
    }
  }
    
}
</script>