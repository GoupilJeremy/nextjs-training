/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page, { generateMetadata } from "./page";

describe('Blog Slug Page', () => {
  describe('Page Component', () => {
    it("renders the correct heading with the provided slug", () => {
      render(<Page params={{ slug: "test-post" }} />);
      expect(screen.getByRole("heading")).toHaveTextContent("Slug: test-post");
    });

    it("handles special characters in the slug", () => {
      render(<Page params={{ slug: "hello-world!@#" }} />);
      expect(screen.getByRole("heading")).toHaveTextContent("Slug: hello-world!@#");
    });

    it("handles empty slug", () => {
      render(<Page params={{ slug: "" }} />);
      expect(screen.getByRole("heading")).toHaveTextContent("Slug:");
    });
  });

  describe('Metadata Generation', () => {
    it("generates correct metadata for a simple slug", async () => {
      const metadata = await generateMetadata({ params: { slug: "test-post" } });
      expect(metadata).toEqual({ title: "Post: test-post" });
    });

    it("generates metadata with special characters", async () => {
      const metadata = await generateMetadata({ params: { slug: "hello-world!@#" } });
      expect(metadata).toEqual({ title: "Post: hello-world!@#" });
    });

    it("generates metadata with empty slug", async () => {
      const metadata = await generateMetadata({ params: { slug: "" } });
      expect(metadata).toEqual({ title: "Post: " });
    });
  });
});
