google.load("visualization", "1.1", {packages:["corechart"], language: 'En'});	  
	  google.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = $.ajax({
          url: "/data_coyuntura/16",
          dataType:"json",
          async: false
          }).responseText;
           
      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(data);

	
		
        var options = {
          
          width: 480,
		  tooltip: { isHtml: true },
		  pointSize: 10,
		  chartArea:{top:30, left:40},
		  fontSize:9,
          vAxis: {title: 'Porcentaje', format: "decimal"},
          
		
		  colors: ['#00BFFF','#FF9900'],
		   width: data.getNumberOfRows() * 80,
		  bar: { groupWidth: "50%" }
        };

		
        var chart = new google.visualization.LineChart(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };