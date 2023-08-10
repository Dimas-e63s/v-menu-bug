import HelloWorld from "@/components/MenuComponent";
import vuetify from "@/plugins/vuetify";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

const vuetifyContainer = () => {
  const el = document.createElement("div");
  el.setAttribute("data-app", true);

  return el;
};

const createComponent = () => ({
  user: userEvent.setup(),
  ...render(HelloWorld, {
    vuetify,
    container: document.body.appendChild(vuetifyContainer()),
  }),
});

describe("HelloWorld.vue", () => {
  it("should render correct contents", async () => {
    const { user } = createComponent();

    await user.click(screen.getByRole("button"));

    screen.getByRole("option", { name: "Click Me 2" });
  });
});
