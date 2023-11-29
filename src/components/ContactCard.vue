<template>
    <div style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
      <form @submit.prevent="submitForm">
        <div class="form-group" >
          <label for="name">Nombre: </label>
          <input v-model="formData.name"
                 type="text"
                id="name"
                class="form-control"
                style="
                border: none;
                border-radius: 5px;
                box-shadow: 0px 2px 5px #a2a2a2;"
                :class="{ 'is-invalid': errors.name}"
          />
          <div class="invalid-feedback" v-if="errors.name">
            {{ errors.name }}
          </div>
        </div>
        <br>

        <div class="form-group">
          <label for="email" style="padding: 9px;">Email: </label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            class="form-control"
            style="
                border: none;
                border-radius: 5px;
                box-shadow: 0px 2px 5px #a2a2a2;"
            :class="{ 'is-invalid': errors.email }"
          >
          <div class="invalid-feedback" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>
        <br>
  
        <div class="form-group">
          <label for="email" style="padding: 4px;">Asunto: </label>
          <input
              v-model="formData.subject"
              type="text"
              id="subject"
              class="form-control"
              style="
                border: none;
                border-radius: 5px;
                box-shadow: 0px 2px 5px #a2a2a2;"
              :class="{ 'is-invalid': errors.subject }"
          >
          <div class="invalid-feedback" v-if="errors.subject">
            {{ errors.subject }}
          </div>
        </div>
        <br>
  
        <div class="form-group">
          <label for="email">Mensaje: </label>
          <textarea
            v-model="formData.message"
            id="message"
            class="form-control"
            style="
                border: none;
                border-radius: 5px;
                box-shadow: 0px 2px 5px #a2a2a2;"
            :class="{ 'is-invalid': errors.message }"></textarea>
        </div>
        <div class="invalid-feedback" v-if="errors.message">
          {{ errors.message }}
        </div>
        <br>
  
        <button type="submit" class="btn btn-primary" 
        style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;"> Enviar</button>
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
          this.errors.name = "El nombre es obligtarorio";
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