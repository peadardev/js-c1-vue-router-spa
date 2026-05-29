<script setup lang="ts"></script>

<template>
  <section class="py-5 bg-body-tertiary rounded-3 border">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h1 class="display-6 fw-bold mb-2">Contacto</h1>
          <p class="lead text-secondary">
            ¿Tienes alguna pregunta sobre TodoApp o quieres proponernos una mejora? Escríbenos y te
            responderemos lo antes posible.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h2 class="h5 mb-3">Envíanos un mensaje</h2>
              <form class="row g-3" @submit.prevent>
                <div class="col-md-6">
                  <label for="name" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="name" placeholder="Tu nombre" />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="tu@email.com" />
                </div>
                <div class="col-12">
                  <label for="subject" class="form-label">Asunto</label>
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="¿Sobre qué hablamos?"
                  />
                </div>
                <div class="col-12">
                  <label for="message" class="form-label">Mensaje</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Cuéntanos en qué podemos ayudarte"
                  ></textarea>
                </div>
                <div class="col-12 d-grid d-sm-flex gap-2">
                  <button class="btn btn-primary" type="submit">Enviar</button>
                  <RouterLink to="/" class="btn btn-outline-secondary">Volver al inicio</RouterLink>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="p-4 bg-light rounded-3 border h-100">
            <h3 class="h6 text-uppercase text-secondary mb-3">Información</h3>
            <ul class="list-unstyled mb-4 text-secondary">
              <li class="mb-2"><span class="fw-semibold">Email:</span> soporte@todoapp.demo</li>
              <li class="mb-2"><span class="fw-semibold">Horario:</span> L–V 9:00–18:00 CET</li>
              <li class="mb-2">
                <span class="fw-semibold">Estado:</span> Demo educativa (sin backend)
              </li>
            </ul>
            <h3 class="h6 text-uppercase text-secondary mb-3">¿Por qué contactarnos?</h3>
            <p class="mb-0 text-secondary">
              Queremos construir la mejor experiencia para gestionar tareas. Tus ideas y preguntas
              nos ayudan a mejorar cada semana.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4 ratio ratio-21x9 rounded-3 border overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Barcelona&t=&z=12&ie=UTF8&iwloc=&output=embed"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa de Barcelona"
        ></iframe>
      </div>
    </div>
  </section>
</template>
