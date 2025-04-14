$(function () {
  let visibleCount = 30;
  let loadMoreBtn;
  let observer;

  const waitForContainer = setInterval(() => {
    const container = document.querySelector('.lonline');
    if (container) {
      clearInterval(waitForContainer);
      setup(container);
    }
  }, 300);

  function setup(container) {
    // إنشاء زر "عرض المزيد"
    loadMoreBtn = document.createElement('button');
    loadMoreBtn.textContent = 'عرض المزيد';
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.style.margin = '10px auto';
    loadMoreBtn.style.padding = '5px 10px';
    loadMoreBtn.style.cursor = 'pointer';
    loadMoreBtn.style.background = '#eee';
    loadMoreBtn.style.border = '1px solid #ccc';
    loadMoreBtn.style.borderRadius = '5px';
    container.appendChild(loadMoreBtn);

    loadMoreBtn.addEventListener('click', function () {
      visibleCount += 10;
      updateVisibleMembers(container);
    });

    observer = new MutationObserver(function (mutationsList) {
      mutationsList.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (
            node.nodeType === 1 &&
            node.classList.contains('uzr') &&
            node.parentNode === container
          ) {
            observer.disconnect();
            container.insertBefore(node, container.firstChild);
            updateVisibleMembers(container);
            observer.observe(container, { childList: true });
          }
        });
      });
    });

    observer.observe(container, { childList: true });

    updateVisibleMembers(container);
  }

  function updateVisibleMembers(container) {
    const members = container.querySelectorAll('.uzr');
    members.forEach((member, index) => {
      member.style.display = index < visibleCount ? '' : 'none';
    });

    if (visibleCount >= members.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }
});
