/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/dialog-modal-block/view.js ***!
  \****************************************/
document.querySelectorAll('.wp-block-sterner-stuff-dialog-modal-block').forEach(dialog => {
  const triggers = document.querySelectorAll(JSON.parse(dialog.dataset.blockAttributes).triggerSelector);
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      dialog.showModal();
    });
  });
  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
        if (dialog.hasAttribute('open')) {
          dialog.dispatchEvent(new CustomEvent('sterner-stuff/dialog-opened', {
            bubbles: true
          }));
          loadGravityForms(dialog);
        }
      }
    }
  });

  // Start observing the dialog for attribute changes
  observer.observe(dialog, {
    attributes: true
  });
});
function loadGravityForms(dialog) {
  if (!gform?.utils) {
    return;
  }
  const form = gform.utils.getNode('.gform_wrapper form', dialog, true);
  if (!form) {
    return;
  }
  const formId = form.dataset.formid;
  const currentPage = 1;
  if (gform.core?.triggerPostRenderEvents) {
    // For Gravity Forms 2.9.5 and newer.
    gform.core.triggerPostRenderEvents(formId, currentPage);
  } else {
    // For older versions.
    jQuery(document).trigger('gform_post_render', [formId, currentPage]);
    gform.utils.trigger({
      event: 'gform/postRender',
      native: false,
      data: {
        formId,
        currentPage
      }
    });
    gform.utils.trigger({
      event: 'gform/post_render',
      native: false,
      data: {
        formId,
        currentPage
      }
    });
  }
}
/******/ })()
;
//# sourceMappingURL=view.js.map