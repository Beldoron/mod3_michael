
        function openNav() {
            $("#mySidenav").addClass("visible")
            $("#mySection").addClass("Section")
            $(".navigation").addClass("navi")

        }

        function closeNav() {
            $("#mySidenav").removeClass("visible")
            $("#mySection").removeClass("Section")
            $(".navigation").removeClass("navi")
        }


      


$(function() {
        $('#someTab').tab('show')

        $('a.nav-link').on("click",function(){
          closeNav()
        })
    })










// this.bottomNav = function() {
//        $('nav ul li, #register_btn, #next_game, #register_btn_top, #contact_btn').on('click', function() {
//            $('section').hide();
//            var content = $(this).data('content');
//            $('#' + content).show();
//        });
//    };



















 document.addEventListener('DOMContentLoaded', function() {
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

        try {
          let app = firebase.app();
          let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
          
        } catch (e) {
          console.error(e);
          
        }
      });