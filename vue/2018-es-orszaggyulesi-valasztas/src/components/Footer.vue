<template>
    <footer class="text-muted mt-4 md-4">
        <div class="container">
            <div class="row justify-center">
                <div class="col-md-3">

                </div>
                <div class="col-md-6 text-center">
                    <a href="http://kmonitor.hu" title="K-monitor" id="footer-kmonitor-logo"><img :src="createImageLink('statics/pictures/kmonitor.png')" alt="K-Monitor"/></a><br /><br />
                    <a href="http://kohovolit.eu" title="KohoVolit.eu" id="footer-kohovolit-logo"><img src="https://volebnikalkulacka.cz/image/logo.png" alt="logo kohovolit.eu"></a><br />
					<p class="lead black">Választási kalkulátorok a <a href="http://kohovolit.eu">KohoVolit.eu</a>-tól. 2006 óta.</p>
                    <hr>
					<p class="black">Creative Commons BY-SA 4.0 | <a href="http://kohovolit.eu" id="footer-kohovolit-licence">KohoVolit.eu</a> & <a href="http://kmonitor.hu">K-Monitor</a> 2018</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        methods: {
            createImageLink: function (name) {
                // console.log(this.$store.setttings)
                return this.$settings['cdn'] + this.$settings['path'] + name
            }
        }
    }
</script>
