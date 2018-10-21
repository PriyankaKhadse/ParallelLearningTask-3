function addListItem(text){
    var container = document.getElementById("result"); 
    var li = document.createElement("ul");
    li.appendChild(document.createTextNode(text));
    container.appendChild(li);
  }
  
  
          var globalJsonVar;
          var searchField;
          var expression;
              $(document).ready(function()
                {                  
                   addListItem(" Loading Data...");
                   $("input").ready(function() 
                     {
                     $.getJSON("https://restcountries.eu/rest/v2/all", function(data)
                       {
                          
                          globalJsonVar = data;
  
                      //    alert("Data: " + globalJsonVar );
  
                      //     console.log(globalJsonVar);
  
                        //  $('#search').keyup(function(){
                        
                       
  
                    $('#result').html('');
                    searchField = $('#search').val();
                    expression = new RegExp(searchField, "i");
  
                     $.each(globalJsonVar, function(key, value)
                        {
      
                          if (value.name.search(expression) != -1)
                              {
  
                                 $('#result').append('<ul><img src="'+value.flag+'" height="50" width="70" class="img-thumbnail" /> '+value.name+' <br></ul>' );
                              }
                            });   
   
                     
  
                       });

                    });


                       $('#search').keyup(function()
                       {                     
                        
                           $('#result').html('');
                           searchField = $('#search').val();
                           expression = new RegExp(searchField, "i");                       
                           $.each(globalJsonVar, function(key, value)
                            {                           
                           if (value.name.search(expression) != -1)
                            {                       
                              $('#result').append('<ul><img src="'+value.flag+'" height="50" width="70" class="img-thumbnail" /> '+value.name+' <br></ul>' );
                            }
                          });   
                         });





                  });
            