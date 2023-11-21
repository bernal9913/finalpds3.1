<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input v-model="formData.name"
                 type="text"
                id="name"
                class="form-control"
                :class="{ 'is-invalid': errors.name}"
          />
          <div class="invalid-feedback" v-if="errors.name">
            {{ errors.name }}
          </div>
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
          >
          <div class="invalid-feedback" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>
  
        <div class="form-group">
          <label for="email">Asunto:</label>
          <input
              v-model="formData.subject"
              type="text"
              id="subject"
              class="form-control"
              :class="{ 'is-invalid': errors.subject }"
          >
          <div class="invalid-feedback" v-if="errors.subject">
            {{ errors.subject }}
          </div>
        </div>
  
        <div class="form-group">
          <label for="email">Mensaje:</label>
          <textarea
            v-model="formData.message"
            id="message"
            class="form-control"
            :class="{ 'is-invalid': errors.message }"></textarea>
        </div>
        <div class="invalid-feedback" v-if="errors.message">
          {{ errors.message }}
        </div>
  
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default{
    data(){
      return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
        errors: {},
      };
    },
    methods: {
      submitForm(){
        // realiza validaciones
        this.errors = {};
        if (!this.formData.name){
          this.errors.name = "el nombre es obligtarorio";
        }
  
        if (!this.formData.email){
          this.errors.email = "El correo es obligatorio";
        }else if (!this.isValidEmail(this.formData.email)){
          this.errors.email = "El correo electronico no es valido";
        }
  
        if (!this.formData.subject){
          this.errors.subject = "El asunto es obligtarorio";
        }
  
        if (!this.formData.message){
          this.errors.message = "El mensaje es obligtarorio";
        }
  
        if (Object.keys(this.errors).length === 0){
          this.sendFormData();
        }
      },
      isValidEmail(email){
        const emailReges = /ˆ[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        return emailReges.test(email);
      },
      sendFormData(){
        window.alert("Formulario enviado con exito 😁");
      }
    }
  }
  </script>