<template>
    <div class="contact">
        <div class="container">
            <div class="contact-text-parent">
                 <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="contact-text">
                                <span>
                                    Bizim ilə əlaqə saxlayın.
                                </span>
                            </div>
                            <div class="contact-text">
                                <span style="margin-right:25px;">
                                    <i class="fa fa-envelope"></i>
                                </span>
                                 <span>
                                    <i class="fa fa-phone"></i>
                                </span>
                            </div>
                    </div>
                  </div>
            </div>
          
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label ><b>Adınız:</b></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                         <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label ><b>Soyadınız:</b></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label ><b>Email adresi:</b></label>
                                <input type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label ><b>Mesajınız:</b></label>
                                <textarea class="form-control" style="resize: none;" rows="5"> </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <button class="btn btn-success w-100 mb-5" @click="sendMail"><b>Göndər <i class="fa fa-envelope"></i></b></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  
                    <div>
                        <p class="email-text flex-icon">
                           <span>icake@office.az</span>
                            <i class="fa fa-envelope"></i>
                       </p>
                    </div>
                     <div>
                        <p class="email-text flex-icon">
                           <span>+994 55 601 35 30</span>
                            <i class="fa fa-phone"></i>
                       </p>
                    </div>
                    <div>
                        <p class="email-text flex-icon">
                           <span>http://facebook.com</span>
                            <i class="fa fa-facebook"></i>
                       </p>
                    </div>
                    <div>
                        <p class="email-text flex-icon">
                           <span>http://instagram.com</span>
                            <i class="fa fa-instagram"></i>
                       </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
      methods: {
        sendMail(){
            this.$store.dispatch('mail_icake');
        }
    },
}
</script>
<style scoped>
    .contact-text{
        display: flex;
        flex-wrap: wrap;
        font-size: 40px;
        color: black;
        font-family: sans-serif;
        font-weight: bold;
        justify-content: center;
    }
  
    .contact-text-parent{
        margin-bottom: 50px;
    }
    .contact{
        padding-top: 60px;
            background-image: url(//cdn.shopify.com/s/files/1/1284/6493/files/icon_wrapper_bg.png?v=1530960319);
                background-repeat: repeat-x;
    background-attachment: fixed;
    background-color: #ccc;
    }
    .flex-icon{
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 25px;
        font-family: sans-serif;
        font-weight: bold;
    }
     .flex-icon i{
         margin-left: 30px;
     }
       @media screen and (max-width: 767px){
        .contact-text{
            font-size: 20px;
        }
        .flex-icon{
            font-size: 16px;
        }
    }
    
</style>