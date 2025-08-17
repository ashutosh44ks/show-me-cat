document.addEventListener("DOMContentLoaded", () => {
  const catGifElement = document.getElementById("cat-gif");
  const catGifContainer = document.getElementById("cat-gif-container");

  // Function to fetch a new cat GIF
  async function fetchCatGif() {
    try {
      // Display a loading message
      catGifContainer.classList.add("loading");
      catGifElement.style.display = "none";

      // Use the Cataas API for a random GIF
      const response = await fetch("https://cataas.com/cat/gif", {
        cache: "no-cache",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { url } = await response.json();
      // Set the image source
      catGifElement.src = url;
      catGifElement.style.display = "block";
      catGifContainer.classList.remove("loading");
    } catch (error) {
      console.error("Failed to fetch cat GIF:", error);
      catGifElement.src =
        "https://placehold.co/300x200/cccccc/333333?text=Error"; // Fallback placeholder
      catGifElement.style.display = "block";
      catGifContainer.classList.remove("loading");
    }
  }

  // Load a cat GIF when the popup is opened
  fetchCatGif();
});
