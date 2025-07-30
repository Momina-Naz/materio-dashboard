<template>
  <v-app style="background: #f6f8fb">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card flat class="pa-10 rounded-xl" color="deep-purple-darken-4">
            <v-card-title class="text-h3" style="line-height: 1.1">
              Discover, collect,<br />
              and sell <br />
              extraordinary NFTs
            </v-card-title>
            <v-card-text>
              Enter in this creative world. <br />
              Discover now the latest NFTs or <br />
              start creating your own!
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="custom-hover-btn rounded-xl px-4"
                elevation="0"
                variant="flat"
              >
                Discover Now
              </v-btn>

              <v-btn class="rounded-xl px-4" elevation="0">Watch Video</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- data table -->
        <v-col cols="12" sm="6" md="6">
          <v-card class="mx-auto pa-2 rounded-xl" elevation="0">
            <template v-slot:prepend>
              <v-card-title class="font-weight-bold text-h5 mt-1">
                Top Creators</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-btn
                elevation="0"
                color="deep-purple-lighten-1"
                class="rounded-xl"
                >see all</v-btn
              >
            </template>
            <v-data-table
              :headers="complexheaders"
              :items="complexitems"
              hide-default-footer
              item-value="name"
            >
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.progress="{ item }">
                <v-progress-linear
                  :model-value="item.progress"
                  height="8"
                  color="deep-purple-lighten-1"
                  rounded
                ></v-progress-linear>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.name="{ item }">
                <div class="d-flex align-center justify-start">
                  <v-img
                    src="/public/avatar.webp"
                    height="30"
                    class="rounded-3xl"
                  ></v-img>
                  <span>{{ item.name }}</span>
                </div>
              </template></v-data-table
            ></v-card
          ></v-col
        ></v-row
      >
      <v-row class="mt-16">
        <!-- Trending NFTs (Left Column) -->
        <v-col
          cols="12"
          sm="6"
          class="rounded-xl mb-8 mt-3"
          style="background: white"
        >
          <h2 class="text-h5 font-weight-bold mb-4 mt-4">Trending NFTs</h2>

          <v-row class="mt-10">
            <v-col
              cols="12"
              sm="4"
              v-for="(card, index) in nftCards"
              :key="index"
            >
              <v-card class="rounded-xl pa-2" elevation="2">
                <v-img
                  :src="card.image"
                  height="150px"
                  class="rounded-xl"
                  cover
                ></v-img>

                <v-card-title class="display-6 font-weight-bold mt-4">
                  {{ card.title }}
                </v-card-title>
                <v-card-subtitle class="text-body-2 text-grey-darken-1">
                  By {{ card.creator }}
                </v-card-subtitle>

                <v-card-text>
                  <v-avatar size="28" color="orange">
                    <v-icon color="white">mdi-account</v-icon>
                  </v-avatar>
                  <v-avatar size="28" color="purple">
                    <v-icon color="white">mdi-emoticon-happy-outline</v-icon>
                  </v-avatar>
                  <v-avatar size="28" color="yellow">
                    <v-icon color="white">mdi-star-outline</v-icon>
                  </v-avatar>
                </v-card-text>

                <v-card-actions class="d-flex justify-center">
                  <v-btn
                    color="indigo-darken-4"
                    class="rounded-pill px-6"
                    variant="flat"
                  >
                    Place Bid
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- History List  -->
        <v-col cols="12" sm="6">
          <v-card class="pa-4 rounded-xl" elevation="0">
            <v-card-title class="text-h5 font-weight-bold"
              >History</v-card-title
            >

            <v-list>
              <v-list-item
                v-for="(item, index) in historyItems"
                :key="index"
                class="py-3"
              >
                <v-row class="align-center justify-space-between w-100">
                  <!-- LEFT: Image + Text -->
                  <v-col cols="7" class="d-flex align-center gap-3">
                    <v-img :src="item.image" height="60" contain></v-img>
                    <div class="ms-2">
                      <div class="font-weight-bold">{{ item.title }}</div>
                      <div class="text-caption text-grey-darken-1">
                        By {{ item.creator }}
                      </div>
                    </div>
                  </v-col>

                  <!-- RIGHT: Price + Time -->
                  <v-col cols="5" class="text-end">
                    <div class="font-weight-bold">{{ item.price }}</div>
                    <div class="text-caption text-grey-darken-1">
                      {{ item.time }}
                    </div>
                  </v-col>
                </v-row>

                <v-divider
                  v-if="index !== historyItems.length - 1"
                  class="mt-2"
                ></v-divider>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="mb-5 rounded-xl"
          style="background: white"
        >
          <v-row>
            <v-col cols="12">
              <h2 class="text-h5 font-weight-bold mb-4 mt-4">Recently Added</h2>
            </v-col>
          </v-row>
          <v-row class="mb-6 mt-6">
            <v-col
              cols="12"
              sm="4"
              v-for="(card, index) in nftCards"
              :key="index"
            >
              <v-card class="rounded-xl pa-2" elevation="2">
                <!-- Image -->
                <v-img
                  :src="card.image"
                  height="150px"
                  class="rounded-xl"
                  cover
                ></v-img>

                <!-- Title & Subtitle -->
                <v-card-title class="display-6 font-weight-bold mt-4">
                  {{ card.title }}
                </v-card-title>
                <v-card-subtitle class="text-body-2 text-grey-darken-1">
                  By {{ card.creator }}
                </v-card-subtitle>

                <!-- Icons/Avatars -->
                <v-card-text>
                  <v-avatar size="28" color="orange">
                    <v-icon color="white">mdi-account</v-icon>
                  </v-avatar>
                  <v-avatar size="28" color="purple">
                    <v-icon color="white">mdi-emoticon-happy-outline</v-icon>
                  </v-avatar>
                  <v-avatar size="28" color="yellow">
                    <v-icon color="white">mdi-star-outline</v-icon>
                  </v-avatar>
                </v-card-text>

                <!-- Place Bid Button -->
                <v-card-actions class="d-flex justify-center">
                  <v-btn
                    color="indigo-darken-4 "
                    class="rounded-pill px-6"
                    variant="flat"
                  >
                    Place Bid
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container></v-app
  >
</template>

<script setup>
const complexheaders = [
  { title: "Name", key: "name" },
  { title: "Artwork", key: "artWork" },
  { title: "Progress", key: "progress" },
];
const complexitems = [
  {
    name: "alex23@mail.com",
    artWork: 1203,
    progress: 80,
  },
  {
    name: "luna999@webb.io",
    artWork: 998,
    progress: 65,
  },
  {
    name: "jayx879@arrt.net",
    artWork: 1345,
    progress: 90,
  },
  {
    name: "sara67.d@pixy.co",
    artWork: 887,
    progress: 50,
  },
  {
    name: "sara67.d@pixy.co",
    artWork: 887,
    progress: 50,
  },
];
const nftCards = [
  {
    title: "Aet Colors",
    creator: "Peter Will",
    price: "0.91 ETH",
    image: "/public/img 1.png",
  },
  {
    title: "ETH AI Brain",
    creator: "Mark Benjamin",
    price: "0.91 ETH",
    image: "/public/img 2.png",
  },
  {
    title: "Mesh Grad",
    creator: "Manny Gates",
    price: "0.91 ETH",
    image: "/public/img 3.png",
  },
];

const historyItems = [
  {
    title: "Colorful Heaven",
    creator: "Mark Benjamin",
    price: "0.91 ETH",
    time: "30s ago",
    image: "/public/img 3.png",
  },
  {
    title: "Abstract Colors",
    creator: "Esthera Jackson",
    price: "0.91 ETH",
    time: "58s ago",
    image: "/public/img 2.png",
  },
  {
    title: "ETH AIii Brain",
    creator: "Nickim Wilson",
    price: "0.91 ETH",
    time: "1m ago",
    image: "/public/img 1.png",
  },
  {
    title: "Swipe Circles",
    creator: "Peter Will",
    price: "0.91 ETH",
    time: "30s ago",
    image: "/public/img 3.png",
  },
  {
    title: "3D Cubes Art",
    creator: "Manny Gates",
    price: "0.91 ETH",
    time: "1m ago",
    image: "/public/img 2.png",
  },
  {
    title: "3D Cubes Art",
    creator: "Manny Gates",
    price: "0.91 ETH",
    time: "1m ago",
    image: "/public/img 1.png",
  },
];
</script>

<style scoped>
.custom-hover-btn:hover {
  background-color: darkcyan;
  color: white;
}
</style>