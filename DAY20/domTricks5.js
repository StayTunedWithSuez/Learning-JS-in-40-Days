 // Mutation Observer

  // const observer = new MutationObserver(callback);
  // observer.observe(targetNode, config);

  const target = document.getElementById('watchMe');

  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        console.log(`Type of mutation: ${mutation.type}`);

        if (mutation.type === 'childList') {
            console.log('A child node was added or removed.');
        }

        if (mutation.type === 'attributes') {
            console.log(`Attribute ${mutation.attributeName} was changed.`);
        }

        if (mutation.type === 'characterData') {
            console.log(`Text content changed to: ${mutation.target.data}`);
        }
    }
  });

  const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true,
  }

  observer.observe(target, config);

  function changeDOM() {
    target.textContent = "Goodbye!";
    target.setAttribute("data-status", "Changed");
  }

  