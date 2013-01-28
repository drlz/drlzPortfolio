<?php

/**
 * @file
 * Customize the display of a complete webform.
 *
 * This file may be renamed "webform-form-[nid].tpl.php" to target a specific
 * webform on your site. Or you can leave it "webform-form.tpl.php" to affect
 * all webforms on your site.
 *
 * Available variables:
 * - $form: The complete form array.
 * - $nid: The node ID of the Webform.
 *
 * The $form array contains two main pieces:
 * - $form['submitted']: The main content of the user-created form.
 * - $form['details']: Internal information stored by Webform.
 */
?>
<?php
  // Print out the main part of the form.
  // Feel free to break this up and move the pieces within the array.

?>
<div class="webformint">
  <h2>Contacto</h2>
  <p>Utilice el siguiente formulario para contactar directamente:</p>
	<?php
	  print drupal_render($form['submitted']);
	  // Always print out the entire $form. This renders the remaining pieces of the
	  // form that haven't yet been rendered above.
	  print drupal_render_children($form);
	?>
<p style="clear:both">También puede encontrarme en la siguiente dirección:<br>
<em><a target="_blank" href="https://maps.google.com/maps?q=Calle+de+Francos+Rodr%C3%ADguez,+68,+Madrid,+Espa%C3%B1a&hl=gl&ie=UTF8&sll=40.495004,-3.660507&sspn=0.19999,0.304871&oq=fra&t=h&hnear=Calle+de+Francos+Rodr%C3%ADguez,+68,+28039+Madrid,+Espa%C3%B1a&z=16">Calle Francos Rodriguez 68, ático derecha
  28039 Madrid, España</a></em><br>O en el teléfono <em>610944928</em></p>
</div>
<?php
