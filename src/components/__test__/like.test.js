import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../like";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Likes component", () => {
  it('Label "Likes: 0" by default', () => {
    const label = container.querySelector("p");
    expect(label.textContent).toBe("Likes: 0");
  });

  it("Label status increment when Like is clicked", () => {
    let likes = 0;
    const label = container.querySelector("p");
    const button = container.querySelector("#increment");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    likes++;
    expect(label.textContent).toBe("Likes: " + likes);
  });

  it("Label status decreament when disLike is clicked", () => {
    let likes = 0;
    const label = container.querySelector("p");
    const button = container.querySelector("#decrement");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    likes--;
    expect(label.textContent).toBe("Likes: " + likes);
  });
});
