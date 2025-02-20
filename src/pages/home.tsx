import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">Home</h2>
      <qa-router-button
        data-package-name="com.clothes.new"
        data-page="/"
        data-params="{}"
        data-design-params='{"fontSize": 100,"designWidth": 1080}'
        data-click-event='{"eventName": "handleClickEvent", "eventParams": "anyString"}'
        data-expose-event='{"eventName": "handleExposeEvent", "eventParams": "anyString"}'
        style="margin:auto; width: 100%; height: 40rem;"
      >
          <div class="cell">
            <button>点击打开新衣</button>
          </div>
      </qa-router-button>
      <p>分割</p>
      <p>分割</p>
      <p>分割</p>
      <p>分割</p>
      <qa-router-button
        data-package-name="com.shoes.fashion"
        data-page="/"
        data-params="{}"
        data-design-params='{"fontSize": 100,"designWidth": 1080}'
        data-click-event='{"eventName": "handleClickEvent", "eventParams": "anyString"}'
        data-expose-event='{"eventName": "handleExposeEvent", "eventParams": "anyString"}'
        style="margin:auto; width: 100%; height: 40rem;"
      >
          <div class="cell">
            <button>点击打开潮鞋</button>
          </div>
      </qa-router-button>
    </section>
  );
}
