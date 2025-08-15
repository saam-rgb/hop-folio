<template>
  <section class="section">
    <div class="container">
      <h1 class="section-title">Contact & Booking</h1>
      <p class="section-sub">
        Prefer a call? Book a free 30‑minute consultation or send us a message.
      </p>

      <div class="grid grid-2">
        <div class="card" style="padding: 0; overflow: hidden">
          <!-- Calendly Embed -->
          <div style="height: 0; padding-bottom: 60%; position: relative">
            <iframe
              src="https://calendly.com/your-calendly-username/30min"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
              "
              title="Calendly Booking"
              loading="lazy"
              allowtransparency="true">
            </iframe>
          </div>
        </div>

        <form class="card" style="padding: 20px" @submit.prevent="submit">
          <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 12px">
            <div>
              <label>Name</label>
              <input v-model="form.name" required />
            </div>
            <div>
              <label>Email</label>
              <input v-model="form.email" type="email" required />
            </div>
          </div>
          <div style="margin-top: 12px">
            <label>Phone</label>
            <input v-model="form.phone" />
          </div>
          <div style="margin-top: 12px">
            <label>What do you need?</label>
            <select v-model="form.service" required>
              <option value="">Select a service</option>
              <option>Digital Marketing</option>
              <option>Web Development</option>
              <option>Content Creation</option>
              <option>Video Editing</option>
            </select>
          </div>
          <div style="margin-top: 12px">
            <label>Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Tell us about your project..."
              required></textarea>
          </div>
          <div
            style="
              margin-top: 16px;
              display: flex;
              gap: 10px;
              align-items: center;
            ">
            <button class="btn btn-primary" type="submit">Send Message</button>
            <span v-if="sent" style="color: green"
              >Thanks! We'll get back to you soon.</span
            >
          </div>
        </form>
      </div>

      <div style="margin-top: 24px" class="muted">
        Prefer WhatsApp? <a href="#">Chat with us</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});
const sent = ref(false);

function submit() {
  // TODO: hook up to an API (EmailJS, Formspree, custom backend)
  console.log("Lead form submitted", { ...form });
  sent.value = true;
}
</script>

<style scoped>
label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
}
input,
textarea,
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-family: inherit;
}
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #e8ecff;
  border-color: #c7d2fe;
}
</style>
