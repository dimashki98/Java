$(function () {
  const container = document.querySelector('.lonline');

  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (
          node.nodeType === 1 &&
          node.classList.contains('uzr') &&
          node.parentNode === container
        ) {
          observer.disconnect();
          container.insertBefore(node, container.firstChild);

          const members = container.querySelectorAll('.uzr');
          members.forEach((member, index) => {
            member.style.display = index < 30 ? '' : 'none';
          });

          observer.observe(container, { childList: true });
        }
      });
    });
  });

  observer.observe(container, { childList: true });
});
