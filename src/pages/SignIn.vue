<template>
  <v-container fluid class="pa-0 fill-height d-flex">
    <v-row no-gutters class="fill-height w-100">
      <!-- Left Side: Sign In Form -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-card elevation="0" class="pa-10" style="width: 100%">
          <!-- back to home button -->
          <v-btn
            @click="handleClick"
            color="deep-purple-lighten-2 text-body-1"
            variant="plain"
          >
            <v-icon> mdi-arrow-left </v-icon>
            Back to Main</v-btn
          >
          <v-card-title class="text-h4 font-weight-bold">Sign In</v-card-title>
          <v-card-subtitle>
            Enter your email and password to sign in!
          </v-card-subtitle>

          <!-- Sign in with Google -->
          <v-btn
            block
            elevation="0"
            color="grey-lighten-2"
            rounded
            class="text-body-1 text-caption font-weight-light text-black rounded-pill mt-4 py-2"
          >
            <v-icon class="me-2">mdi-google</v-icon>
            Sign In with Google
          </v-btn>

          <!-- Divider -->
          <v-divider class="my-5">
            <span class="text-grey-lighten-1">or</span>
          </v-divider>

          <!-- Sign In Form -->
          <form @submit.prevent="submit">
            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="E-mail"
              variant="outlined"
              color="grey-lighten-1"
              class="mb-4"
            />
            <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              label="Password"
              type="password"
              variant="outlined"
              color="grey-lighten-1"
              class="mb-4"
            />
            <v-checkbox
              v-model="checkbox.value.value"
              :error-messages="checkbox.errorMessage.value"
              label="Keep me logged in"
              color="grey-lighten-1"
              class="mb-4"
            />

            <v-btn
              type="submit"
              block
              elevation="0"
              color="deep-purple-darken-3"
              rounded
              class="text-white text-body-1 rounded-pill mt-2 py-5"
            >
              Sign In
            </v-btn>

            <div class="text-body-2 text-grey-darken-1 text-center mt-5">
              Not registered yet?
              <span class="text-deep-purple-darken-3" style="cursor: pointer"
                >Create an account</span
              >
            </div>
          </form>
        </v-card>
      </v-col>

      <!-- Branding Panel -->
      <v-col cols="12" md="6" class="fill-height pa-0">
        <v-card
          class="fill-height d-flex flex-column justify-center align-center"
          style="
            border-radius: 0 0 0 100px;
            background: linear-gradient(to bottom, #311b92, #512da8);
          "
        >
          <v-icon color="white" size="200">mdi-alpha-m</v-icon>
          <v-card-title class="text-white text-h2 font-weight-bold mt-4">
            Materio UI
          </v-card-title>
          <v-card-text class="text-white text-h6 text-center">
            Learn more about Materio UI at <br />
            <a
              href="https://materio-ui.com"
              class="text-white text-decoration-underline"
            >
              materio-ui.com
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { useRoute, useRouter } from "vue-router"; // ✅ import useRouter

const route = useRoute();
const router = useRouter(); // ✅ initialize router

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
      return "Must be a valid e-mail.";
    },
    password(value) {
      if (!value) return "Password is required.";
      if (value.length < 6) return "Password must be at least 6 characters.";
      return true;
    },
    checkbox(value) {
      if (value === "1") return true;
      return "Must be checked.";
    },
  },
});

const email = useField("email");
const password = useField("password");
const checkbox = useField("checkbox");

const handleClick = () => {
  router.push("/dashboard"); // ✅ navigate to home page or your desired route
};
</script>
