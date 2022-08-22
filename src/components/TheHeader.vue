<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WEB 
      <span class="navbar-smallcase">SITE</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
          <li 
            v-for="nav in navigations" 
            :key="nav.name"
            class="nav-item">
            <RouterLink 
              :to="nav.href"
              active-class="active"
              class="nav-link">
              {{ nav.name }}
            </RouterLink>
          </li>

      </ul>
    </div>
    <button class="button-login">로그인</button>
  </div>
</nav>


</template>

<script>
export default {

    data() {
    return {
      navigations : [
        {
          name: 'home',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/main.scss";
.navbar-brand {
  font-size: 28px;
  .navbar-smallcase {
    font-size: 20px;
}
}

.nav-item {
  font-size: 24px;
}

#navbarNav {
  position: relative;
  .navbar-nav {
    position: absolute;
//    transform:translate(50%,50%);
  }
}


.button-login {
  font-size: 18px;
  width: 110px;
  height: 40px;
  left: 1790;
  bottom: 15;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50px;
}

</style>