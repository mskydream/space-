<template>
    <div>
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
        >
            <template v-slot:prev="{ on, attrs }">
            <v-btn
                color="black"
                v-bind="attrs"
                v-on="on"
            >previous</v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
            <v-btn
                color="black"
                v-bind="attrs"
                v-on="on"
            >next</v-btn>
            </template>
            <v-carousel-item
            v-for="(word, i) in words"
            :key="i"
            >
            <v-img
                :src="sourses[i]"
                height="100%"
            >
                <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <h1 class="text-center display-3 hidden-xs-only" color="white">NEVER GIVE UP</h1>
                <h1 class="text-center display-1 hidden-sm-and-up" color="white">NEVER GIVE UP</h1>
                </v-row>
            </v-img>
            </v-carousel-item>
        </v-carousel>
        <v-container>
          <h1 class="text-center display-3 hidden-xs-only">Welcome</h1>
            <h1 class="text-center display-1 hidden-sm-and-up">Welcome</h1>
          <p class="text-justify title" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lacus ac est ullamcorper interdum in eget leo. Donec vestibulum nisi quis suscipit tempus. Cras luctus dui justo, ut luctus arcu ullamcorper at. Curabitur non euismod turpis, in suscipit tellus. Ut convallis libero quis ipsum aliquam, sed tempor nisi tincidunt. Mauris porta nec magna id commodo. Etiam tincidunt tortor sit amet nunc scelerisque, sit amet pharetra mauris venenatis. Sed tellus ante, tempor et commodo tincidunt, ullamcorper eget arcu. Donec hendrerit aliquam nisi volutpat auctor. Nam a eleifend est. Sed pharetra finibus sodales.

            Integer et arcu sit amet magna egestas facilisis eu in sem. Nulla ultrices non sapien quis maximus. Proin in orci feugiat, consequat justo ut, semper eros. Quisque eu mollis ex, eu efficitur orci. Mauris eget accumsan nunc. Nulla ac ante viverra, maximus sapien et, dignissim risus. Suspendisse porttitor malesuada justo. Aliquam purus massa, accumsan vitae tincidunt hendrerit, fringilla nec justo. Mauris placerat, ante vel dapibus facilisis, ligula augue condimentum velit, a sagittis elit erat sed lectus. Aliquam porttitor nisl nisl, sed placerat neque pellentesque et. Vivamus libero est, mollis at nulla sed, vestibulum mattis arcu.

            Donec ornare erat quis interdum consequat. In suscipit vulputate sagittis. Duis sapien tortor, dapibus sit amet bibendum in, auctor ac ex. Nam dictum, nibh vel dapibus scelerisque, nibh erat sollicitudin velit, quis sollicitudin sem risus sed ante. Vestibulum ac tellus augue. Donec quis justo commodo dui dignissim laoreet. Praesent nec ex tortor. Fusce nec imperdiet neque, sit amet iaculis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida vitae dolor et facilisis. Phasellus ligula tortor, sollicitudin et urna ac, iaculis laoreet augue. Maecenas vel eleifend justo, vulputate dapibus ligula. Mauris vel metus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Pellentesque lorem eros, dignissim a fermentum eu, semper nec urna. Sed vitae pharetra lacus. Quisque tortor tortor, lacinia eu porttitor at, porta vel dolor. Integer accumsan tellus at ex viverra, nec faucibus nisi facilisis. In sagittis dui ut turpis dictum placerat. Proin volutpat quis ante id tincidunt. Sed et nibh eu libero tincidunt luctus. Vivamus in velit sit amet orci posuere dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ut dictum turpis. Vestibulum nibh felis, dignissim nec dui quis, pellentesque semper ex.

            Sed ultrices nunc ac sagittis sollicitudin. Mauris vitae tellus felis. Nunc congue aliquet placerat. Fusce eget facilisis ligula, ut ultricies nisi. Proin consequat ipsum id nunc egestas, eu sagittis massa placerat. Nulla in faucibus turpis, a pellentesque metus. Integer eget luctus ante. Ut pellentesque sodales ante ac blandit. Aliquam efficitur magna ac dui porta vehicula. Integer fringilla viverra lectus ut scelerisque. In ut ex enim. In faucibus rhoncus lacus a blandit. Praesent commodo ornare fringilla.
          </p>
        </v-container>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        sourses:[
            'https://f.vividscreen.info/soft/e63d191c095f27121284abf8b868585a/Coffee-and-Motivation-Board-1920x1200.jpg',
            'https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/3768901/pexels-photo-3768901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://wallpapercave.com/wp/wp2536871.jpg',
        ],
        words: [
          'Never give up',
          'Motivation myself',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>