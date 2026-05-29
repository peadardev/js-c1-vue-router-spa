<script setup lang="ts"></script>

<template>
  <section class="py-5 bg-body-tertiary rounded-3 border">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h1 class="display-5 fw-bold mb-3">Organiza tu día con TodoApp</h1>
          <p class="lead text-secondary mb-4">
            Organiza tu checklist de tareas de manera simple. Una app ligera, rápida y pensada para
            tu productividad cotidiana.
          </p>
          <div class="d-flex justify-content-center gap-2">
            <RouterLink to="/about" class="btn btn-primary btn-lg px-4">
              Sobre nosotros
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline-secondary btn-lg px-4">
              Contáctanos
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <h2 class="h3 fw-bold mb-4 text-center">Todo lo que necesitas para ser productivo</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="h5 card-title">Listas de tareas</h3>
              <p class="card-text text-secondary">
                Crea, elimina y marca como completadas tus tareas. Mantén tu checklist siempre al
                día de manera simple y organizada.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="h5 card-title">Gestión básica de tareas</h3>
              <p class="card-text text-secondary">
                Una interfaz sencilla para enfocarte solo en lo esencial: tus tareas. Sin
                complicaciones, solo lo que realmente necesitas.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="h5 card-title">Multidispositivo</h3>
              <p class="card-text text-secondary">
                Accede desde cualquier lugar: escritorio o móvil. Tus tareas, siempre contigo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 p-4 p-md-5 bg-light rounded-3 border text-center">
        <h3 class="h4 fw-bold mb-2">Empieza en segundos</h3>
        <p class="text-secondary mb-3">
          Crea una cuenta gratuita y descubre cómo TodoApp puede simplificar tu día.
        </p>
        <RouterLink to="/register" class="btn btn-primary"> Registro </RouterLink>
      </div>
    </div>
  </section>
</template>
