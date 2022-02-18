$(document).ready(function(){

    $('#submitbutton').click(function(){
        let name = $("input[name=full_name").val();
        let coffeeType = $("input[name=coffee_type]:checked").val();

        let extras = [];
        $("input[name=extras]:checked").each(function(){
            extras.push($(this).val());

        });


        let total = 0;

        if(coffeeType === 'turkish'){
            total += 3;
        }
        else if (coffeeType ==='american'){
            total +=5;
        }
        else if (coffeeType === 'icedlatte'){
            total +=7;
        }

        for(i=0; i<extras.length;i++){
            let extra = extras[i];

            if(extra === "extra_coffee"){
                total += 1.5;

            }
            else if (extra ==="Whipped"){
                total += 2;
            }
            else if (extra ==="caramel"){
                total +=3;
            }
        }
            let report = `Name: ${name}, Total: ${total}`;
            console.log(report);
    });
    
});
//test