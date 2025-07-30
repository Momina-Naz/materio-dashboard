<template>
  <v-app style="background: #f6f8fb">
    <v-container>
      <v-row>
        <v-col col="12" sm="6" md="4">
          <v-card rounded="lg" class="pa-2">
            <!-- Cover Image -->
            <v-img
              src="/public/img4.png"
              height="120"
              cover
              class="rounded-t-lg"
            ></v-img>

            <!-- Avatar -->
            <div class="d-flex justify-center mt-n10">
              <v-avatar size="70">
                <v-img src="/public/avatar.webp"></v-img>
              </v-avatar>
            </div>

            <!-- Name & Role -->
            <v-card-text class="text-center mt-4">
              <div class="text-h6 font-weight-bold">Adela Parkson</div>
              <div class="text-subtitle-2 text-grey">Product Designer</div>
            </v-card-text>

            <!-- Stats -->
            <v-card-actions
              class="d-flex justify-space-around text-center mb-10 mt-10"
            >
              <div>
                <div class="text-h5 font-weight-bold">17</div>
                <div class="text-caption">Posts</div>
              </div>
              <div>
                <div class="text-h5 font-weight-bold">9.7k</div>
                <div class="text-caption">Followers</div>
              </div>
              <div>
                <div class="text-h5 font-weight-bold">274</div>
                <div class="text-caption">Following</div>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- your storage -->

        <v-col col="12" sm="6" md="3">
          <v-card class="text-center px-4 py-10">
            <v-avatar size="130" color="deep-purple-lighten-5">
              <v-icon size="60" color="deep-purple-lighten-1"
                >mdi-cloud-outline</v-icon
              >
            </v-avatar>
            <v-card-title class="text-h5 font-weight-bold">
              Your storage
            </v-card-title>
            <v-card-subtitle
              class="text-grey-darken-1 text-body-1 mt-5"
              style="line-height: 1"
              >Supervise your device <br />
              space in the easiest way</v-card-subtitle
            >

            <v-progress-linear
              :model-value="(used / total) * 100"
              class="mt-14"
              height="8"
              color="deep-purple-lighten-1"
              rounded
            ></v-progress-linear>
            <div class="d-flex justify-space-between mb-2">
              <span class="text-grey-darken-1">25.6 GB</span>
              <span class="text-grey-darken-1">50 GB</span>
            </div>
          </v-card>
        </v-col>
        <!-- upload files -->

        <v-col col="12" md="5">
          <v-card>
            <v-file-upload
              density="comfortable"
              variant="plain"
              color="deep-purple-lighten-2"
            ></v-file-upload>

            <v-card-title class="text-h5 font-weight-bold mt-3">
              Complete your profile
            </v-card-title>
            <v-card-text>
              Stay on the pulse of distributed projects with an online
              whiteboard to plan, coordinate and discuss.
            </v-card-text>
            <v-card-actions>
              <v-btn block class="text-white bg-deep-purple-lighten-1"
                >Publish Now</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- second row -->
      <v-row>
        <!-- All projects -->
        <v-col cols="12" md="6">
          <v-card class="pa-5 rounded-lg" elevation="0">
            <v-card-title class="text-h5 font-weight-bold">
              All Projects
            </v-card-title>
            <v-card-subtitle calss="text-caption"
              >Here you can find more details about your projects. Keep your
              user engaged by <br />
              providing meaningful information.</v-card-subtitle
            >
            <!-- cards -->
            <div v-for="card in cards" :key="card.id">
              <v-card
                class="mt-6 pe-10 py-10 d-flex align-center"
                hover="elevation-2"
                rounded="lg"
              >
                <!-- Left: Image -->
                <v-img
                  :src="card.image"
                  width="48"
                  height="48"
                  class="rounded-lg"
                ></v-img>

                <!-- Center: Text content -->
                <div class="flex-grow-1">
                  <div class="text-h5 font-weight-medium">{{ card.title }}</div>
                  <div class="text-grey">
                    project#{{ card.subtitle }}
                    <span class="text-deep-purple-lighten-1"
                      >.see project details</span
                    >
                  </div>
                </div>

                <!-- Right: Icon -->
                <v-icon
                  color="deep-purple-lighten-1"
                  icon="mdi-pencil-outline"
                  size="22"
                ></v-icon>
              </v-card>
            </div>
          </v-card>
        </v-col>
        <!-- General Infromation -->
        <v-col cols="12" sm="12" md="6">
          <v-card class="pa-5 rounded-lg" elevation="0">
            <v-card-title class="text-h5 font-weight-bold">
              General Information
            </v-card-title>
            <v-card-subtitle class="text-subtitle-1"
              >As we live, our hearts turn colder. Cause pain is what we go
              through as we <br />
              become older. We get insulted by others, lose trust for those
              others.<br />
              We get back stabbed by friends. It becomes harder for us to give
              others a hand. We get our <br />
              heart broken by people we love, even that we give them
              all...</v-card-subtitle
            >

            <!-- cards -->
            <v-row class="mt-6 mb-6">
              <v-col
                v-for="profile in profileDetails"
                :key="profile.title"
                cols="12"
                sm="6"
              >
                <v-card
                  class="pa-4 border border-grey-lighten-2"
                  elevation="0"
                  rounded="lg"
                >
                  <v-card-title class="text-h6 font-weight-bold">
                    {{ profile.title }}
                  </v-card-title>
                  <v-card-subtitle class="text-body-2 text-grey-darken-1">
                    {{ profile.subtitle }}
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5 rounded-lg" elevation="0">
            <v-card-title class="text-h5 font-weight-bold">
              Notifications
            </v-card-title>

            <div class="ms-5">
              <v-switch
                v-for="notification in notifications"
                :key="notification.id"
                :label="notification.label"
                color="deep-purple-lighten-1"
                base-color="deep-purple-lighten-5"
                class="ma-0 pa-0"
                hide-details
                density="compact"
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { VFileUpload } from "vuetify/labs/VFileUpload";
const total = 50;
const used = 25;
const cards = [
  {
    id: 1,
    title: "Design System",
    subtitle: "01",
    image: "/public/img8.png",
  },
  {
    id: 2,
    title: "Marketing Plan",
    subtitle: "02",

    image: "/public/img9.png",
  },
  {
    id: 3,
    title: "Dashboard UI",
    subtitle: "03",

    image: "/public/img10.png",
  },
];
const profileDetails = [
  {
    title: "Education",
    subtitle: "Stanford University",
  },
  {
    title: "Languages",
    subtitle: "English, Spanish, Italian",
  },
  {
    title: "Department",
    subtitle: "Product Design",
  },
  {
    title: "Work History",
    subtitle: "Google, Facebook",
  },
  {
    title: "Organization",
    subtitle: "Simmmple Web LLC",
  },
  {
    title: "Birthday",
    subtitle: "20 July 1986",
  },
];
// notifications
const notifications = [
  { id: "item-update", label: "Item update notifications" },
  { id: "item-comment", label: "Item comment notifications" },
  { id: "buyer-review", label: "Buyer review notifications" },
  { id: "rating-reminder", label: "Rating reminders notifications" },
  { id: "meetups-nearby", label: "Meetups near you notifications" },
  { id: "company-news", label: "Company news notifications" },
  { id: "new-launches", label: "New launches and projects" },
  { id: "monthly-changes", label: "Monthly product changes" },
  { id: "newsletter-subscription", label: "Subscribe to newsletter" },
  { id: "follow-alert", label: "Email me when someone follows me" },
];
</script>

<style>
</style>