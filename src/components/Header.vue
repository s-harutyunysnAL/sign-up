<template>
  <div class="header-container">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <div class="log-in-container">
      <span class="login-info">Alread have an account?</span>
      <div class="log-in">Log in</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth-header",
};
</script>

<style>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 74px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
}
.log-in-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
@media screen and (max-width: 450px) {
  .login-info {
    display: none;
  }
}
</style>
