<script setup lang="ts"></script>

<template>
  <section class="py-5 bg-body-tertiary rounded-3 border">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h1 class="display-6 fw-bold mb-2">Sobre TodoApp</h1>
          <p class="lead text-secondary">
            TodoApp nace con una idea simple: ayudarte a terminar lo que empiezas. Sin
            distracciones, con una interfaz clara y enfocada en lo esencial: tus tareas.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h2 class="h5">Nuestra filosofía</h2>
              <ul class="mb-0 text-secondary">
                <li class="mb-2">Sencillez por defecto, sin funcionalidades innecesarias.</li>
                <li class="mb-2">Interfaz accesible y usable en cualquier dispositivo.</li>
                <li class="mb-2">Centrada en lo que importa: crear, marcar y eliminar tareas.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h2 class="h5">Tecnología</h2>
              <p class="text-secondary mb-0">
                TodoApp está construida con Vue 3 y Vue Router. Su interfaz aprovecha Bootstrap para
                mantener un diseño limpio y responsive. Pensada para integrarse fácilmente con un
                backend mediante APIs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-4">
        <div class="col-md-4">
          <div class="p-4 bg-light rounded-3 border text-center">
            <div class="h2 fw-bold mb-1">+200</div>
            <div class="text-secondary">Tareas creadas al mes</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-light rounded-3 border text-center">
            <div class="h2 fw-bold mb-1">99.9%</div>
            <div class="text-secondary">Disponibilidad (demo)</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-light rounded-3 border text-center">
            <div class="h2 fw-bold mb-1">48h</div>
            <div class="text-secondary">De idea a primer resultado</div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="h5 fw-bold mb-4 text-center">Nuestros valores clave</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="p-4 bg-light rounded-3 border text-center h-100">
              <h3 class="h6 fw-semibold mb-2">Productividad</h3>
              <p class="text-secondary mb-0">
                Ayudamos a que te concentres en terminar tus tareas, no en gestionarlas.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 bg-light rounded-3 border text-center h-100">
              <h3 class="h6 fw-semibold mb-2">Simplicidad</h3>
              <p class="text-secondary mb-0">
                Una app ligera, sin distracciones. Solo lo necesario para tu checklist.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 bg-light rounded-3 border text-center h-100">
              <h3 class="h6 fw-semibold mb-2">Accesibilidad</h3>
              <p class="text-secondary mb-0">
                Funciona en cualquier dispositivo, accesible y con un diseño claro.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 text-center">
        <RouterLink to="/contact" class="btn btn-primary btn-lg"> Contáctanos </RouterLink>
      </div>
    </div>
  </section>
</template>
