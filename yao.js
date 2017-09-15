$.ajax({
                url: 'yao.csv',
                dataType: 'text',
              }).done(successFunction_1);
              var master_array_1;

            

              function populate_fields_1(name, bio, picture, index){


                var class_div_1 = '<figure class="imghvr-fold-up">';
                class_div_1 += '<img src="img/'+picture+'" class="img-responsive">';
                class_div_1 += '<figcaption>';
                class_div_1 += '<h3>'+name+'</h3>';
                class_div_1 += '<p>'+bio+'</p>';
                class_div_1 += '</figcaption>';
                class_div_1 += '<a href="#" data-toggle="modal" data-target="#modalForm' + index+ '"></a>';
                class_div_1 += '</figure';
                class_div_1 += '</div>';

                return class_div_1;
              }

              function successFunction_1(data) {
                var allRows = data.split(/\r?\n|\r/);
                master_array_1 = allRows;

                console.log(master_array_1)

                for(i = 1; i < 8; i++){
        
                  
                  var class_div_temp_1 = populate_fields_1(master_array_1[i-1].split(',')[0], master_array_1[i-1].split(',')[1], master_array_1[i-1].split(',')[2], i);
                  document.getElementById(i).innerHTML = class_div_temp_1;
                  
                }


              }

$.ajax({
              url: 'yao_cultural.csv',
              dataType: 'text',
            }).done(successFunction_2);
            var master_array_2;



            function populate_fields_2(name, bio, picture, index){
        

              var class_div_2 = '<figure class="imghvr-fold-up">';
              class_div_2 += '<img src="img/'+picture+'" class="img-responsive">';
              class_div_2 += '<figcaption>';
              class_div_2 += '<h3>'+name+'</h3>';
              class_div_2 += '<p>'+bio+'</p>';
              class_div_2 += '</figcaption>';
              class_div_2 += '<a href="#" data-toggle="modal" data-target="#modalForm_c' + index + '""></a>';
              class_div_2 += '</figure';
              class_div_2 += '</div>';

              return class_div_2;
            }

            function successFunction_2(data) {
              var allRows = data.split(/\r?\n|\r/);
              master_array_2 = allRows;

              for(i = 1; i < 7; i++){


                var class_div_temp_2 = populate_fields_2(master_array_2[i-1].split(',')[0], master_array_2[i-1].split(',')[1], master_array_2[i-1].split(',')[2], i);
                document.getElementById(i + "_c").innerHTML = class_div_temp_2;
              }


            }

$.ajax({
        url: 'yao_modals.csv',
        dataType: 'text',
      }).done(successFunction);
      var master_array;
      

      
      function populate_fields(name, picture, about, pronoun, index){
        var class_div = '<div class="modal-dialog">';
        class_div += '<div class="modal-content">';
        class_div += '<div class="modal-header">';
        class_div += '<button type="button" class="close" data-dismiss="modal">';
        class_div += '<span aria-hidden="true">&times;</span>';
        class_div += '<span class="sr-only">Close</span>';
        class_div += '</button>';
        class_div += '<h1 class="modal-title" id="myModalLabel">'+ name+ '</h1>';
        class_div += '</div>';
        class_div += '<div class="modal-body">';
        class_div += '<center>';
        class_div += '<img src= "img/' + picture + '.jpg">'; 
        class_div += '</center>';
        class_div += '<br> <br>';                
        class_div += '<h4 class="accent-text"><u> About '+ name +'</u></h4>';
        class_div += '<h5>'+ about +'</h5>';
        class_div += '<br>';
        class_div += '<h4 class="accent-text"><u> Preferred Pronouns </u></h4>';
        class_div += '<h5>'+ pronoun +'</h5>';
        class_div += '<br> <br>';
        class_div += '<center> Want to book ' + name + '? Fill out short the form below! </center>';
        class_div += '<p class="statusMsg'+index+'"></p>';
        class_div += '<form role="form">';

        class_div += '<div class="form-group">';
        class_div += '<label for="inputName' + index+ '">Name/Student Org</label>';
        class_div += '<input type="text" class="form-control" id="inputName' + index+ '" placeholder="Enter your name or student organization"/>';
        class_div += '</div>';

        class_div += '<div class="form-group">';
        class_div += '<label for="inputEmail' + index+ '">Email</label>';
        class_div += '<input type="email" class="form-control" id="inputEmail' + index+ '" placeholder="Enter your email"/>'
        class_div += '</div>';

        class_div += '<div class="form-group">';
        class_div += '<label for="inputPhoneNumber' + index+ '">Phone Number</label>';
        class_div += '<input class="form-control" id="inputPhoneNumber' + index+ '" placeholder="Enter your phone number"/>';
        class_div += '</div>';

        class_div += '<div class="form-group">';
        class_div += '<label for="inputMessage' + index+ '">Date Requested</label>';
        class_div += '<textarea class="form-control" id="inputDate' + index+ '" placeholder="Enter your dates/times required"></textarea>';
        class_div += '</div>';

        class_div += '</form>';
        class_div += '</div>';
        class_div += '<div class="modal-footer">';
        class_div += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        class_div += '<button type="button" class="btn btn-success submitBtn" onclick="submitContactForm('+index +',\''+ name+ '\')">Book</button>';
        class_div += '</div>';
        class_div += '</div>';
        class_div += '</div>';

        //console.log(class_div);

        return class_div;
      }
      
      
      function successFunction(data) {
        var allRows = data.split(/\r?\n|\r/);
        master_array = allRows;

        console.log(master_array)

        for(i = 1; i < 8; i++){

          var class_div = populate_fields(master_array[i-1].split(',')[0], master_array[i-1].split(',')[1], master_array[i-1].split(',')[2], master_array[i-1].split(',')[3], i);
          document.getElementById("modalForm" + i).innerHTML = class_div;
        }

        
      }


$.ajax({
        url: 'yao_modals_cultural.csv',
        dataType: 'text',
      }).done(successFunction_3);
      var master_array_3;
      

      
      function populate_fields_3(name, picture, about, pronoun, index){
        var class_di = '<div class="modal-dialog">';
        class_di += '<div class="modal-content">';
        class_di += '<div class="modal-header">';
        class_di += '<button type="button" class="close" data-dismiss="modal">';
        class_di += '<span aria-hidden="true">&times;</span>';
        class_di += '<span class="sr-only">Close</span>';
        class_di += '</button>';
        class_di += '<h1 class="modal-title" id="myModalLabel">'+ name+ '</h1>';
        class_di += '</div>';
        class_di += '<div class="modal-body">';
        class_di += '<center>';
        class_di += '<img src= "img/' + picture + '.jpg">'; 
        class_di += '</center>';
        class_di += '<br> <br>';                
        class_di += '<h4 class="accent-text"><u> About '+ name +'</u></h4>';
        class_di += '<h5>'+ about +'</h5>';
        class_di += '<br>';
        class_di += '<h4 class="accent-text"><u> Preferred Pronouns </u></h4>';
        class_di += '<h5>'+ pronoun +'</h5>';
        class_di += '<br> <br>';
        class_di += '<center> Want to book ' + name + '? Fill out short the form below! </center>';
        class_di += '<p class="statusMsg'+(index + 100000)+'"></p>';
        class_di += '<form role="form">';
        class_di += '<div class="form-group">';
        
        class_di += '<label for="inputName' + (index + 100000)+ '">Name/Student Org</label>';
        class_di += '<input type="text" class="form-control" id="inputName' + (index+100000) + '" placeholder="Enter your name or student organization"/>';
        class_di += '</div>';
        
        class_di += '<div class="form-group">';
        class_di += '<label for="inputEmail' + (index+100000) + '">Email</label>';
        class_di += '<input type="email" class="form-control" id="inputEmail' + (index+100000) + '" placeholder="Enter your email"/>'
        class_di += '</div>';
        
        class_di += '<div class="form-group">';
        class_di += '<label for="inputPhoneNumber' + (index+100000) + '">Phone Number</label>';
        class_di += '<input class="form-control" id="inputPhoneNumber' + (index+100000) + '" placeholder="Enter your phone number"/>';
        class_di += '</div>';
        
        class_di += '<div class="form-group">';
        class_di += '<label for="inputMessage' + (index+100000) + '">Date Requested</label>';
        class_di += '<textarea class="form-control" id="inputDate' + (index+100000) + '" placeholder="Enter your dates/times required"></textarea>';
        
        class_di += '</div>';
        class_di += '</form>';
        class_di += '</div>';
        class_di += '<div class="modal-footer">';
        class_di += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        class_di += '<button type="button" class="btn btn-success submitBtn" onclick="submitContactForm('+(index+100000)+',\''+ name+ '\')">Book</button>';
        class_di += '</div>';
        class_di += '</div>';
        class_di += '</div>';

        return class_di;
      }
      
      
      function successFunction_3(data) {
        var allRows = data.split(/\r?\n|\r/);
        master_array_3 = allRows;

        

        for(i = 1; i < 7; i++){

          var class_di = populate_fields_3(master_array_3[i-1].split(',')[0], master_array_3[i-1].split(',')[1], master_array_3[i-1].split(',')[2], master_array_3[i-1].split(',')[3], i);
          document.getElementById("modalForm_c" + i).innerHTML = class_di;
        }

        
      }

function submitContactForm(clicked_id, artistName){

        console.log("comes here");
        
        var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var name = $('#inputName' + clicked_id).val();
        var email = $('#inputEmail' + clicked_id).val();
        var phoneNumber = $('#inputPhoneNumber' + clicked_id).val();
        var message = $('#inputDate' + clicked_id).val();


        console.log(clicked_id);
        console.log(name);
        console.log(email);
        console.log(phoneNumber);
        console.log(message);
        console.log(artistName);

        
        if(name.trim() == '' ){
          alert('Please enter your name.');
          $('#inputName' + clicked_id).focus();
          return false;
        }else if(email.trim() == '' ){
          alert('Please enter your email.');
          $('#inputEmail'+ clicked_id).focus();
          return false;
        }else if(email.trim() != '' && !reg.test(email)){
          alert('Please enter valid email.');
          $('#inputEmail'+ clicked_id).focus();
          return false;
        }else if(phoneNumber.trim() ==''){
          alert('Please enter your phone number.');
          $('#inputPhoneNumber'+ clicked_id).focus();
          return false;
        }else if(message.trim() == '' ){
          alert('Please enter a date and time to book.');
          $('#inputMessage'+ clicked_id).focus();
          return false;
        }else{
          $.ajax({
            type:'POST',
            url:'submit_form.php',
            data:'contactFrmSubmit=1&name='+name+'&email='+email+'&phoneNumber='+phoneNumber+'&message='+message+'&artistName='+artistName,
            beforeSend: function () {
              $('.submitBtn').attr("disabled","disabled");
              $('.modal-body').css('opacity', '.5');
            },
            success:function(msg){
              if(msg == 'ok'){
                $('#inputName'+ clicked_id).val('');
                $('#inputEmail'+ clicked_id).val('');
                $('#inputPhoneNumber'+ clicked_id).val('');
                $('#inputDate'+ clicked_id).val('');
                $('.statusMsg' + clicked_id).html('<span style="color:green;">Thanks for contacting us, we\'ll get back to you very shortly!</p>');
              }else{
                console.log(msg);
                $('.statusMsg'+ clicked_id).html('<span style="color:red;">Some problem occurred, please try again.</span>');
              }
              $('.submitBtn').removeAttr("disabled");
              $('.modal-body').css('opacity', '');
            }
          });

        }


        
      }