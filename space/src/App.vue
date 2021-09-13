<template>
<v-app app>
    <div>
        <v-app-bar
          color="black"
        >
            <v-toolbar-title class="white--text">Awesome Shop</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-span class="hidden-sm white--text">
                <v-btn @click.stop="drawer = !drawer">
                    Menu
                </v-btn>
            </v-span>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn to="/" text color="white">
                    <v-icon small left>fa-home</v-icon>Home
                </v-btn>

                <v-btn to="blog" text color="white">
                    <v-icon small left>fa-book</v-icon>Blog
                </v-btn>

                <v-btn to="about" text color="white">
                    <v-icon small left>fa-info-circle</v-icon>About
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer 
            v-model="drawer"
            absolute
            temporary
            right
        >
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
                >
                    <v-list-item-icon>
                        <v-icon small left>fa-{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    {{ item.title}}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
     
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
    <div>
        <v-footer
            dark
            padless
          >
            <v-card
              flat
              tile
              class="black lighten-1 white--text text-center"
            >
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
                >
                  <v-icon size="24px" >
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>

              <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>I love Vuetify</strong> <strong style="color: red;">&#10084;</strong>
              </v-card-text>
            </v-card>
          </v-footer>
    </div>
</v-app>
</template>
<script>
export default{
    data(){
        return{
            drawer: false,
            items:[
                { title: 'Home', link:'/', icon: 'home'},
                { title: 'Blog', link:'/blog', icon: 'book'},
                { title: 'About', link:'/about', icon: 'info-circle'}
            ],
            icons: [
              'mdi-facebook',
              'mdi-twitter',
              'mdi-linkedin',
              'mdi-instagram',
            ],
        }
    },
    components:{
    }
}
</script>