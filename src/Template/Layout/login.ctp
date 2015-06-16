<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin | <?= $this->fetch('title') ?></title>
        <!--STYLESHEET-->
        <!--=================================================-->
        <!--Bootstrap Stylesheet [ REQUIRED ]-->
        <?= $this->Html->css('../components/pace/themes/blue/pace-theme-center-simple') ?>
        <?= $this->Html->script('../components/pace/pace.min') ?>
        <?= $this->Html->css('../components/bootstrap/dist/css/bootstrap.min') ?>
        <?= $this->Html->css('admin/nifty.min') ?>
        <?= $this->Html->css('../components/font-awesome/css/font-awesome.min') ?>
        <?= $this->Html->css('admin/nifty-demo.min') ?>
    </head>
    <body>
        <div id="container" class="cls-container">
        <!--===================================================-->
        <div class="cls-header cls-header-lg">
            <div class="cls-brand">
                <a class="box-inline" href="/">
                    <span class="brand-title">Nifty <span class="text-thin">Admin</span></span>

                </a>
            
            </div>
        </div>
        <div class="cls-content">
                  
                  <?= $this->fetch('content') ?>
            </div>
        </div>


        <!--JAVASCRIPT-->
        <!--=================================================-->
        <!--jQuery [ REQUIRED ]-->
        <?= $this->Html->script('../components/jquery/dist/jquery.min') ?>
        <!--BootstrapJS [ RECOMMENDED ]-->
        <?= $this->Html->script('../components/bootstrap/dist/js/bootstrap.min') ?>
        <!--Nifty Admin [ RECOMMENDED ]-->
        <?= $this->Html->script('admin/nifty.min') ?>
    </body>
</html>