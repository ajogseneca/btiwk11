import { render } from '@testing-library/react';
import Home from '@/pages';

test("renders at least one link to https://github.com/vvo/iron-session in the first child of 'main' ", () => {
  const { getByRole } = render(<Home />);

  // Get the main element
  const mainElement = getByRole("main");

  // Get the first child element of the main element
  const child = mainElement.querySelector("*");

  // Ensure the child element exists
  expect(child).toBeTruthy();

  // Get all links within the child element
  const childLinks = child.querySelectorAll("a");

  // Ensure there is at least one link
  expect(childLinks.length).toBeGreaterThan(0);

  // Count the number of links that include "https://github.com"
  let githubLinks = 0;
  childLinks.forEach(link => {
    if (link.href.includes("https://github.com/vvo/iron-session")) {
      githubLinks++;
    }
  });

  // Ensure there is at least one link to "https://github.com"
  expect(githubLinks).toBeGreaterThan(0);
});
