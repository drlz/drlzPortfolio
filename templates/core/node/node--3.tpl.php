<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <h2 class="title"<?php print $title_attributes; ?>>
  	<?php print $title; ?>
  </h2>
  <div class="node-pager clearfix">
    <div class="wk-col-l"><a href="#">< proyectos</a></div>
    <div class="wk-col-r"><a href="#">contacta ›</a></div>
  </div>


  <div class="content"<?php print $content_attributes; ?>>
    <?php print render($content); ?>
  </div>

</div>
