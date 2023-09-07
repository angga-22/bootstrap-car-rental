import { Header } from "../components/organisms/header";
import { Footer } from "../components/organisms/footer";
export function Layout(children: string) {
  return `
    <div class="layout">
      ${Header}
      <main>
        ${children}
      </main>
     ${Footer}
    </div>
  `;
}
