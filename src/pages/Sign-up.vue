<template>
  <div class="sign-up-container">
    <form @submit.prevent="handleSubmit">
      <div class="sign-up-header">Create an account</div>
      <div class="sign-up-content">
        <div class="info-content">
          <label class="info-content-name" for="first-name">Firts name</label>
          <input
            required
            v-model="form.firstName"
            class="info-content-value"
            type="text"
            id="first-name"
          />
        </div>
        <div class="info-content">
          <label class="info-content-name" for="last-name">Last name</label>
          <input
            required
            v-model="form.lastName"
            class="info-content-value"
            type="text"
            id="last-name"
          />
        </div>
        <div class="info-content">
          <label class="info-content-name" for="email">Email</label>
          <input
            required
            v-model="form.email"
            class="info-content-value"
            placeholder="email@something.com"
            type="email"
            id="email"
          />
        </div>
        <div class="info-content">
          <label class="info-content-name" for="password">Password</label>
          <input
            required
            v-model="form.password"
            class="info-content-value"
            placeholder="•••••••••••••••••••••••••••••"
            type="password"
            id="password"
          />
        </div>
        <div class="sign-up-btn">
          <button type="submit" class="sign-up">Sign-up</button>
        </div>
      </div>
      <div class="sign-up-footer">
        <div class="sign-up-footer-privacy-policy">
          <span class="info-text">
            By clicking “Sign up” you agree to our
          </span>
          <span class="privacy-policy"> Terms & Privacy Policy </span>
        </div>
        <div class="have-account">
          <div class="log-in-container">
            <span>Alread have an account?</span>
            <div class="log-in">Log in</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import useAuthUser from "@/composables/UseAuthUser";
import { reactive, toRef, ref } from "vue";

const { register } = useAuthUser();
const showConfirmMessage = ref(false);
const showErrorMessage = ref(false);
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
const rules = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const vv = useVuelidate(rules, {
  firstName: toRef(form, "firstName"),
  lastName: toRef(form, "lastName"),
  email: toRef(form, "email"),
  password: toRef(form, "password"),
});

const handleSubmit = async () => {
  vv.value.$touch();
  if (!vv.value.$invalid) {
    const data = await register(form);
    if (data.user) {
      showConfirmMessage.value = true;
    } else {
      showErrorMessage.value = true;
    }
  } else {
    showErrorMessage.value = true;
  }
};
</script>
<style>
.sign-up-container {
  width: 400px;
  margin: 62px auto;
}
.sign-up-header {
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 31px;
  color: #000000;
  opacity: 0.72;
  margin-bottom: 40px;
}
.info-content {
  display: flex;
  flex-direction: column;
}
.info-content-name {
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #000000;
  opacity: 0.64;
  margin-bottom: 6px;
}
.info-content-value {
  margin-bottom: 24px;
  height: 40px;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 0 12px;
}
.info-content-value:focus {
  outline: none;
}
.sign-up {
  width: 100%;
  height: 40px;
  background: #322df0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 12px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: #ffffff;
  cursor: pointer;
}

::placeholder {
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: #000000;
  opacity: 0.32;
  padding-left: 12px;
}
.sign-up-footer {
  display: flex;
  flex-direction: column;
}
.privacy-policy {
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #322df0;
  cursor: pointer;
}
.info-text {
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
  opacity: 0.64;
}
.sign-up-footer-privacy-policy {
  margin-top: 24px;
}
.privacy-policy {
  padding-left: 4px;
}
.have-account {
  height: 50px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin: 24px 0;
}
.have-account {
  display: flex;
  align-items: center;
  justify-content: center;
}
.log-in {
  padding-left: 4px;
  color: #322df0;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
}
@media screen and (max-width: 430px) {
  .sign-up-container {
    width: 370px;
  }
}
@media screen and (max-width: 400px) {
  .sign-up-container {
    width: 350px;
  }
}
@media screen and (max-width: 380px) {
  .sign-up-container {
    width: 340px;
  }
}
@media screen and (max-width: 350px) {
  .sign-up-container {
    width: 310px;
  }
}
@media screen and (max-width: 340px) {
  .sign-up-container {
    width: 300px;
  }
}
</style>
