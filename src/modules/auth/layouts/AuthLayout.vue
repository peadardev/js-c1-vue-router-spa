<script setup lang="ts"></script>

<template>
  <div class="container-fluid p-0">
    <div class="row g-0 min-vh-100">
      <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center brand-side">
        <div class="text-center">
          <img
            src="@/assets/logo.svg"
            alt="Logo TodoApp"
            class="img-fluid mb-3"
            style="max-width: 160px"
          />
          <h2 class="fw-semibold">TodoApp</h2>
          <p class="text-muted mb-0">Tu gestor de tareas simple y eficaz</p>
        </div>
      </div>

      <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center">
        <div class="w-100" style="max-width: 420px">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand-side {
  background: linear-gradient(135deg, #e9f3ff 0%, #f6f9ff 100%);
  padding: 2rem;
}

@media (max-width: 991.98px) {
  .brand-side img {
    max-width: 120px;
  }
}
</style>
