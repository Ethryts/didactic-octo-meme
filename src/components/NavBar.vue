<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand navbar-dark bg-dark" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ethan Hrytsak</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navabrText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!--todo Use the vue to make the current selection active on the nav links--->
            <li class="nav-item">
              <a class="nav-link" href="#homeHeader">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#techHeader">Tech</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
