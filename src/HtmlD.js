// Simulated API response with HTML tags
const words = "<h1>Hello</h1><p>This is a sample message with <strong>HTML tags</strong>.</p>";

// Get the typing effect element
const typingEffectElement = document.getElementById('typing-effect');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to display typing effect with random colors
function displayTypingEffect(index) {
  const partialContent = words.slice(0, index).join(' ');

  // Wrap each word with a span and apply a random color
  const coloredContent = partialContent.split(' ').map(word => `<span style="color: ${getRandomColor()}">${word}</span>`).join(' ');

  typingEffectElement.innerHTML = coloredContent;

  if (index < words.length) {
    // Continue typing
    setTimeout(() => displayTypingEffect(index + 1), 200);
  }
}

// Start the typing effect
displayTypingEffect(0);
