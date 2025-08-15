<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <h3>Houseofproduction</h3>
        <p class="muted">
          Digital marketing, web development, content & video editing.
        </p>
      </div>
      <div class="cols">
        <div>
          <h4>Company</h4>
          <ul>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/case-studies">Case Studies</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><RouterLink to="/services">Digital Marketing</RouterLink></li>
            <li><RouterLink to="/services">Web Development</RouterLink></li>
            <li><RouterLink to="/services">Content & Video</RouterLink></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><RouterLink to="/contact">Get a Quote</RouterLink></li>
            <li>
              <a href="mailto:hello@houseofproduction.example"
                >hello@houseofproduction.example</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy">
      © {{ new Date().getFullYear() }} Houseofproduction. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.footer {
  background: var(--muted);
  border-top: 1px solid #eef1f6;
  margin-top: 40px;
}
.footer-inner {
  display: flex;
  gap: 40px;
  padding: 40px 20px;
  justify-content: space-between;
  align-items: flex-start;
}
.cols {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}
.muted {
  color: var(--text-muted);
}
footer h4 {
  margin: 0 0 8px;
}
footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
footer a {
  text-decoration: none;
  color: var(--text);
}
.copy {
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
  padding: 12px 0 20px;
}
@media (max-width: 900px) {
  .footer-inner {
    flex-direction: column;
  }
  .cols {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
</style>
