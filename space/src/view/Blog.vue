<template>
    <div>
        <v-parallax
            height="400"
            src="https://images.squarespace-cdn.com/content/v1/57b9b98a29687f1ef5c622df/1481143684777-0H4FZYF0YYAIF2J986G1/000.jpg?format=1500w"
        >
            <h1 class="text-center display-3 hidden-xs-only">I love mountains <strong style="color: red;">&#10084;</strong></h1>
            <h1 class="text-center display-1 hidden-sm-and-up">I love mountains <strong style="color: red;">&#10084;</strong></h1>
        </v-parallax>

    <v-container fluid>
        <v-layout row >
                    <v-flex xs12 class="text-center display-2 font-weight my-10">Where i want to travel <strong>&#128525;</strong></v-flex>
        </v-layout>
      <v-row align-center>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="300"
            elevation="24"
        >
            <v-img
            class="white--text align-end"
            height="300px"
            :src="card.src"
            >
            <v-card-title>{{card.subtitle}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
            {{card.title}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div>In publishing and graphic design, 
                Lorem ipsum is a placeholder text commonly used to 
                demonstrate the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be used as a placeholder 
                before final copy is available.
            </div>
            </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Spain',subtitle: 'Barcelona', src: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyY2Vsb25hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
        { title: 'Italy',subtitle: 'Rome', src: 'https://img.static-kl.com/images/media/757F62E5-562A-4EB9-ABEA83C5EB615F50?aspect_ratio=1:1&min_width=456'},
        { title: 'Greece',subtitle: 'Athens', src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/21/17/athens.jpg?width=982&height=726&auto=webp&quality=75'},
        { title: 'New Zealand',subtitle: 'Auckland', src: 'https://images.unsplash.com/photo-1600208669687-f19af3638cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVja2xhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
        { title: 'Australia',subtitle: 'Sydney', src: 'https://manofmany.com/wp-content/uploads/2020/10/Sydney-City.jpg'},
        { title: 'Portugal',subtitle: 'Porto', src: 'https://touristjourney.com/wp-content/uploads/2020/10/shutterstock_1706807566-scaled.jpg'},
        { title: 'Brazil',subtitle: 'Rio de Janeiro', src: 'https://www.pandotrip.com/wp-content/uploads/2013/07/Untitled-62-980x613.jpg'},
        { title: 'Ireland',subtitle: 'Dublin', src: 'https://www.ibc-aviation.com/media/k2/items/cache/8ee107fb8e11fa27c5eb0c84c03d7dff_XL.jpg'},
        { title: 'Thailand',subtitle: 'Chiang Mai', src: 'https://livingnomads.com/wp-content/uploads/2019/09/19/aerial-view-of-chiang-mai.jpg'},
      ],
    }),
  }
</script>