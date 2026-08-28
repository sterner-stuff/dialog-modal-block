=== Dialog Modal Block ===
Contributors:      eclev91
Tags:              block, modal, popup, pop-up
Tested up to:      7.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A modal block. Create your modal in the block editor and wire it to any other block that supports click handlers.

== Description ==

Modals, pop-ups, or lightboxes are a great way to focus a user when they're high intent.

The HTML spec now includes a `dialog` component that provides modal functionality directly in the browser, no special libraries required.

This block allows you to create a collection of blocks that should appear in a `dialog` element and enter a selector used to add a click handler to another element on the page that will fire `showModal`.

It also includes a close button by default.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/dialog-modal-block` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= How do I reuse popups? =

Save out your modal block as a synced global pattern and insert it into posts where needed. This will use the same trigger selector for all instances, so configure your trigger blocks as appropriate.

For more reusability options, you might look at another solution.

= How can I add my own close button? =

Dialogs support very simple HTML to trigger the close event:

```
<form method="dialog">
	<button>
		Close
	</button>
</form>
```

Disable the default close button included with the block and add a Custom HTML block with the above (or some variation) to make your own close button.

= Limitations? =

Core lightboxes configured within the modal currently don't lay over the modal. The modal goes into a higher layer than other elements, and since lightbox markup is not adjacent to triggering images in the DOM, they can't appear on top of the modal.

== Screenshots ==

1. Triggering and dismissing a modal.

== Changelog ==

= 1.0.0 =
* Initial release