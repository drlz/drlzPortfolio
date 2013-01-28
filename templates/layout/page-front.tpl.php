<?php include_once("includes/header.inc"); ?>
<div id="menu-bar">
	<div class="wrapper">
		<div class="mb-head">
			<a class="butt" href="#" title="toggle menu">
				<h1>DavidRuizLópez</h1>
				<h2>desarrollo web</h2>
			</a>
		</div>
		<div class="mb-menu clearfix">
			<ul class="wk-col-l">
				<li class="menu-bio mb-local"><a href="#node-3" title="Perfil">› bio</a></li>
				<li class="menu-proys mb-local"><a href="#block-views-proyectos-block" title="Trabajos recientes">› works</a></li>
				<li class="menu-proys mb-local"><a href="#webform-client-form-1" title="Contacta conmigo">› contacto</a></li>
				<li class="menu-twitter"><a href="https://twitter.com/ruizfrontend" title="Perfil de Twitter" target="_blank">› @ruizfrontend</a></li>
				<li class="menu-linkdn"><a href="http://es.linkedin.com/in/davidruizlopez/" title="Perfil de linkedin" target="_blank">› Linkedin</a></li>
			</ul>
			<div class="wk-col-r">
				<ul class="mnu-related">
				  <li class="dp"><a target="_blank" href="http://http://drupal.org" title="Sitio elaborado con Drupal">Drupal</a></li>
				  <li class="html"><a target="_blank" href="http://www.w3.org/TR/2011/WD-html5-20110525/" title="Sitio elaborado con HTML5">HTML5</a></li>
				  <li class="jq"><a target="_blank" href="http://jquery.com" title="Sitio elaborado con jQuery">jQuery</a></li>
				</ul>
				<p>@ruizFrontend2012</p>
			</div>
			<div class="wk-col-r col-map">
				<a target="_blank" class="wk-col-r" href="https://maps.google.com/maps?q=Calle+de+Francos+Rodr%C3%ADguez,+68,+Madrid,+Espa%C3%B1a&hl=gl&ie=UTF8&sll=40.495004,-3.660507&sspn=0.19999,0.304871&oq=fra&t=h&hnear=Calle+de+Francos+Rodr%C3%ADguez,+68,+28039+Madrid,+Espa%C3%B1a&z=16">
					<img src="/sites/all/themes/rfront/img/gmap.png">
				</a>
				<p class="wk-col-r col-map-addr">Francos Rodriguez 68<br/>ático derecha<br/>28039<br/>Madrid, España</p>
			</div>
				<?php if ($page['footer']): ?>
					<div class="wk-col-r col-tw">
					  <h3>Últimos <a href="https://twitter.com/ruizfrontend">tweets:</h3>
					  <?php print render($page['footer']); ?>
					</div>
				<?php endif; ?>
		</div>
	</div>
</div>

<div id="wrapper" class="layout-default">
	<?php if ($page['content']): ?>
		<?php print render($page['content']); ?>
	<?php endif; ?>
</div>
