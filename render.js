document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("imageContainer");
  const data = imageAnnotations[0]; // pick the first image for now

  // Add image
  const img = document.createElement("img");
  img.src = data.fileName;
  img.alt = data.title;
  img.style.width = "100%";
  img.style.maxWidth = "500px";
  container.appendChild(img);

  // Add annotations
  data.kanji.forEach(k => {
    const ann = document.createElement("div");
    ann.className = "annotation-region";
    ann.style.position = "absolute";
    ann.style.top = `${k.position.top}%`;
    ann.style.left = `${k.position.left}%`;
    ann.style.width = `${k.position.width}%`;
    ann.style.height = `${k.position.height}%`;

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-text";
    tooltip.textContent = `${k.character} (${k.reading}): ${k.meaning}`;

    ann.appendChild(tooltip);
    container.appendChild(ann);
  });
});
