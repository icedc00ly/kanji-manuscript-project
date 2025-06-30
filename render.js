document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("imageContainer");
  const data = imageAnnotations[0];

  const img = document.createElement("img");
  img.src = data.fileName;
  img.alt = data.title;
  img.style.width = "100%";
  img.style.maxWidth = "500px";
  container.appendChild(img);

  // Wait for image to load to scale correctly
  img.onload = function () {
    const imgWidth = img.clientWidth;
    const scale = imgWidth / 500; // assuming annotations were measured on a 500px-wide image

    data.kanji.forEach(k => {
      const ann = document.createElement("div");
      ann.className = "annotation-region";

      // Use px values with scaling
      ann.style.top = `${k.position.top * scale}px`;
      ann.style.left = `${k.position.left * scale}px`;
      ann.style.width = `${k.position.width * scale}px`;
      ann.style.height = `${k.position.height * scale}px`;

      const tooltip = document.createElement("span");
      tooltip.className = "tooltip-text";
      tooltip.textContent = `${k.character} (${k.reading}): ${k.meaning}`;

      ann.appendChild(tooltip);
      container.appendChild(ann);
    });
  };
});
