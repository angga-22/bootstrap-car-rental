import { Hero } from "../organisms/hero";
export const Home = `
<div>
  ${Hero}
  <section id="testimonial" class="my-2">
    <div class="my-5 text-center">
      <h1 class="text">Testimonial</h1>
      <p> Testimonial pelanggan terbaik kami </p>
    </div>
    <div id="card-testimonial">
    </div>
  </section>
  <section id="cta-booking">
    <div class="container d-flex flex-column my-5 py-5" style="background: #0D28A6; min-height: 200px; border-radius: 1rem;">
      <h1 class="text-white text-center"> Sewa Mobil di Lokasimu Sekarang </h1>
      <p class="text-white text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <button type="button" class="btn w-content btn-primary"> Mulai Sewa Mobil </button>
    </div>
  </div>
</div>
`;
