<template>
    <div class="col-md-6 mt-5 mb-5">
        <h2 class="text-left"></h2>
            <form @submit.prevent="kirim">
            <div class="form-group">
                <label>NAMA</label>
                <input v-model="form.nama" type="text" class="form-control" required />
            </div>
            <div class="group">
                <label>EMAIL</label>
                 <input v-model="form.email" type="text" class="form-control" required />
            </div>
             <div class="group">
                <label>SUBJEK</label>
               <input v-model="form.subjek"  type="text" class="form-control" required/>
            </div>
             <div class="group">
                <label>PESAN</label>
            <textarea
            v-model="form.pesan"
            class="form-control"
            cools="30"
            rows="5"
            required>
            </textarea>
            </div>
       <button class="btn btn-danger btn-block" :disabled="sending">
           <span v-if="!sending">kirim</span>
        <span v-else></span>
      </button>
      <div v-if="sent" class="alert alert-success">

      </div>
        </form>
    </div>
</template>

<script>
import { MoonLoader } from '@saeris/vue-spinners'

export default {
  components: {
   MoonLoader
  },

  data() {
    return {
      form :{
          nama: '',
          email: '',
          subjek: '',
          pesan: '',
      },
      sent: false,
      sending: false
  };
  
  },
  methods: {
    async kirim() {
        this.sending =true 
      let { data, error } = await this.$supabase
      .from("tb_contact")
      .insert([this.form]);

     if (data) {
        this.sent = true
        this.sending = false
        this.form = ''
      }
      if (error) console.log("g kekirim");
    },
  },
};
</script>
.<style scoped>
form-group {
    text-align: left;
}
</style>