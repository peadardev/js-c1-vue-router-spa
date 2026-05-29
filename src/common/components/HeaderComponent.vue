<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="navbar navbar-expand-lg bg-light border-bottom">
    <div class="container">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/logo.svg" alt="Vue logo" height="32" class="me-2" />
        <span class="fw-semibold">Vue Router App</span>
      </RouterLink>

      <!-- Toggler para menú responsive -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú -->
      <nav id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" exact-active-class="active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/tasks" class="nav-link" exact-active-class="active">Tasks</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" exact-active-class="active">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" exact-active-class="active"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link.active {
  font-weight: 600;
}
</style>
