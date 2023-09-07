export function setupCounter(
  element: HTMLButtonElement,
  element2: HTMLDivElement
) {
  let counter = 0;
  element.innerHTML = `klik saya`;
  const setCounter = (count: number) => {
    counter = count;
    element2.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
