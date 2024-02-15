function downloadPDF() {
    var x=$("#checkbox").is(":checked"); //one variable for each checkbox
    var box1 = document.getElementById("groups_conditions");
    var box2 = document.getElementById("random_assignment");
    var box3 = document.getElementById("adjustment_measures");
    var box4 = document.getElementById("bayesian_statistics");
    var box5 = document.getElementById("confirmatory_research");
    var box6 = document.getElementById("all");
    var box7 = document.getElementById("planning");
    var box8 = document.getElementById("collection");
    var box9 = document.getElementById("analysis");
    var box10 = document.getElementById("reporting");
    var box11 = document.getElementById("frequentist_statistics");

  // Create a new jsPDF instance
  var doc = new jsPDF();
  
    function loadImage(url) { 
      return new Promise((resolve) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
      });
    }

    // Define the path to the PNG file
    var imagePath = '/static/images/ValidChecklist_logo.png';
    
    // Load the PNG file using the loadImage function
    loadImage(imagePath).then((logo) => {
      
      // Define the image properties
      var imgWidth = logo.width/13;
      var imgHeight = logo.height/13;
    
      // Add the image to the PDF
      doc.addImage(logo, 'PNG', 165, 10, imgWidth, imgHeight);

      const addFooters = doc => {
        const pageCount = doc.internal.getNumberOfPages() // Total page number of document
      
        doc.setTextColor(58, 63, 82)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8)
        for (var i = 1; i <= pageCount; i++) {
          doc.setPage(i)
          doc.text('Page ' + String(i) + ' of ' + String(pageCount), doc.internal.pageSize.width / 2, 287, {
            align: 'center'
          })
          doc.text('VALIDChecklist 2024', 20, 287, {align: 'left'})
          doc.text('validchecklist.com', 190, 287, {align: 'right'})
        }
      }
    
doc.setTextColor(58, 63, 82);
doc.setFont('helvetica', 'bold')
doc.setFontSize(20)
doc.text(18, 22, "VALIDChecklist 2024")

doc.setFont('helvetica', 'normal')
doc.setFontSize(11)
doc.setTextColor(58, 63, 82)
doc.text(18, 32, 'Project:')
doc.text(90, 32, 'Name(s):')
doc.text(160, 32, 'Date:')

const textFieldP = new TextField();
textFieldP.Rect = [32, 28, 50, 7];
textFieldP.V = '';
textFieldP.T = `TextFieldProject`; // Use item to make it unique
doc.addField(textFieldP);

const textFieldN = new TextField();
textFieldN.Rect = [107, 28, 50, 7];
textFieldN.V = '';
textFieldN.T = `TextFieldName`; // Use item to make it unique
doc.addField(textFieldN);

const textFieldD = new TextField();
textFieldD.Rect = [170, 28, 30, 7];
textFieldD.V = '';
textFieldD.T = `TextFieldDate`; // Use item to make it unique
doc.addField(textFieldD);

doc.setFontSize(10)
doc.setTextColor(153, 153, 153)
doc.setDrawColor(153, 153, 153)
doc.setFillColor(153, 153, 153)
doc.text(18, 40, 'The following characteristics were indicated:') //Display of the checked characteristics
if (box5.checked == true){
  doc.rect(18, 41.3, 2.7, 2.7, 'F'),
  doc.text(23, 44, 'Confirmatory research')}
  else {doc.rect(18, 41.3, 2.7, 2.7, 'S'),
  doc.text(23, 44, 'Confirmatory research')}

if (box1.checked == true){
    doc.rect(72, 41.3, 2.7, 2.7, 'F'),
    doc.text(77, 44, 'Groups and/or conditions')}
    else {doc.rect(72, 41.3, 2.7, 2.7, 'S'),
    doc.text(77, 44, 'Groups and/or conditions')}

if (box2.checked == true){
    doc.rect(123, 41.3, 2.7, 2.7, 'F'),
    doc.text(128, 44, 'Non-random assignment')}
    else {doc.rect(123, 41.3, 2.7, 2.7, 'S'),
    doc.text(128, 44, 'Non-random assignment')}

if (box3.checked == true){
    doc.rect(18, 45.3, 2.7, 2.7, 'F'),
    doc.text(23, 48, 'Development of measures')}
    else {doc.rect(18, 45.3, 2.7, 2.7, 'S'),
    doc.text(23, 48, 'Development of measures')}

if (box11.checked == true){
    doc.rect(72, 45.3, 2.7, 2.7, 'F'),
    doc.text(77, 48, 'Frequentist statistics')}
    else {doc.rect(72, 45.3, 2.7, 2.7, 'S'),
    doc.text(77, 48, 'Frequentist statistics')}

if (box4.checked == true){
    doc.rect(123, 45.3, 2.7, 2.7, 'F'),
    doc.text(128, 48, 'Bayesian statistics')}
    else {doc.rect(123, 45.3, 2.7, 2.7, 'S'),
    doc.text(128, 48, 'Bayesian statistics')}

doc.text(18, 56, 'The following stages are included:') //Display of the checked stages
if (box7.checked == true || box6.checked == true){
  doc.rect(18, 57.3, 2.7, 2.7, 'F'),
  doc.text(23, 60, 'Planning')}
  else {doc.rect(18, 57.3, 2.7, 2.7, 'S'),
  doc.text(23, 60, 'Planning')}

if (box8.checked == true || box6.checked == true){
    doc.rect(44, 57.3, 2.7, 2.7, 'F'),
    doc.text(49, 60, 'Data Collection')}
    else {doc.rect(44, 57.3, 2.7, 2.7, 'S'),
    doc.text(49, 60, 'Data Collection')}  

if (box9.checked == true || box6.checked == true){
    doc.rect(80, 57.3, 2.7, 2.7, 'F'),
    doc.text(85, 60, 'Data Analysis')}
    else {doc.rect(80, 57.3, 2.7, 2.7, 'S'),
    doc.text(85, 60, 'Data Analysis')}

if (box10.checked == true || box6.checked == true){
    doc.rect(114, 57.3, 2.7, 2.7, 'F'),
    doc.text(119, 60, 'Data Reporting')}
    else {doc.rect(114, 57.3, 2.7, 2.7, 'S'),
    doc.text(119, 60, 'Data Reporting')}

    doc.autoTable({ //Header of the table
      startY: 66,
      body: [['Stage', 'Item', 'Status', 'Comments']],
      theme: 'grid',
      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
      bodyStyles :{fillColor: [89, 150, 219], textColor: [246, 248, 249], fontStyle: 'bold', halign: 'center', valign: 'middle',},
      rowPageBreak: 'avoid',
      columnStyles: {
          0: {halign: 'center', cellWidth: 20,},
          1: {halign: 'center', cellWidth: 90,},
          2: {halign: 'center', cellWidth: 20,},
          3: {halign: 'center', cellWidth: 50,}

    }});

    if (box7.checked == true || box6.checked == true){ //base items for planning stage
      const items_pl = [
        'Careful specification/definition of the theoretical constructs',
        'Review of theories/research that support or contradict the used definition of the construct',
        'Explicit specification of auxiliary assumptions (e.g., assumed effect of the manipulation, participants’ understanding of instructions, theories used during concept specification)',
        'Assessment of the strength of the mapping between theoretical constructs and measured variables (if possible, informing the preregistration of the study rationale)',
        'Use of tools to estimate/justify sample size (e.g., power analysis, approaches considering accuracy in parameter estimation)',
        'Consideration that effect sizes of prior published research may be inflated',
        'Creation of a carefully planned, standardized study protocol',
        'If applicable: If scales are administered at multiple time points, careful selection of the time interval between measurement occasions (e.g., to minimize burden on participants, to maximize utility of results)',
        'If possible: In case of longitudinal designs involving change patterns/trajectories, use of more than two measurement timepoints (e.g., pre/post) by, for example, establishing a baseline through multiple observations, adding further measurement occasions between the pre- and post-measurements, and/or adding further measurement occasions after the initial post measurement',
        'Whenever possible, a priori specification of rules for excluding data',
        'A priori definition of the population of interest',
        'Use of a representative sample for the population of interest (If achieving full representativeness is not feasible: Selection of a sample that reflects the key characteristics relevant to the study within the population of interest)',
        'If possible: Ensuring random selection of participants while keeping in mind the representativeness of the sample (e.g., via stratified random samples)',
        'Use of pilot studies to test stimuli/procedure',
        'Ensuring the instrument’s measurement invariance to the comparisons relevant for the current study',
        'Constant ruling-out of other possible hypotheses/explanations for the effect during theory development, for example by using logic or sensitivity analysis',
      ];
    
      let startY = doc.lastAutoTable.finalY;
      
      items_pl.forEach((item_pl) => {
        const row = ['Planning', item_pl, '', ''];
        
        // Add row to autoTable
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [row],
          theme: 'grid',
          styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
          bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
          rowPageBreak: 'avoid',
          columnStyles: {
            0: { halign: 'left', cellWidth: 20 },
            1: { halign: 'left', cellWidth: 90 },
            2: { halign: 'left', cellWidth: 20 },
            3: { halign: 'left', cellWidth: 50 },
          },
        });

        if (doc.lastAutoTable.finalY < startY) {
      
          // Add text field or radio button at a fixed position on the new page
          const yPosition = 15;
          const textField = new TextField();
          textField.Rect = [145, yPosition, 50, 10];
          textField.V = '';
          textField.T = `TestTextBox_${item_pl}`; // Use loop variable to make it unique
          doc.addField(textField);

          // Add Radio button after the row
          const yPositionB = 16;
          var radioButton = new RadioButton();
          radioButton.fieldName = 'RadioButtonGroup';
          radioButton.Rect = [132, yPositionB, 4, 4];
          radioButton.T = `RadioButton_${item_pl}`; // Use item to make it unique
          doc.addField(radioButton);
        } else {
        // Add text field after the row
        const yPosition = startY + 1;
        const textField = new TextField();
        textField.Rect = [145, yPosition, 50, 10];
        textField.V = '';
        textField.T = `TestTextBox_${item_pl}`; // Use item to make it unique
        doc.addField(textField);

      // Add Radio button after the row
      const yPositionRadio = startY + 2;
      var radioButton = new RadioButton();
      radioButton.fieldName = 'RadioButtonGroup';
      radioButton.Rect = [132, yPositionRadio, 4, 4];
      radioButton.T = `RadioButton_${item_pl}`; // Use item to make it unique
      doc.addField(radioButton);
        }
      
        // Update startY for the next iteration
        startY = doc.lastAutoTable.finalY;
      });
      if (box5.checked == true){ //planning items for confirmatory research
        const items_plc = [
          'Preregistration of the project, including data collection and data analysis (deviations should be justified)',
          'Explicit specification of contextual factors and boundary conditions (under which conditions and in which circumstances the theory should apply)',
          'Articulation of how the theory is translated into the (statistical) hypotheses',
          'Formulation of working hypotheses on the processes thought to be involved in generating the data and on the expected results',
          'If possible: Making more specific predictions from a theory or hypothesis (e.g., a prediction on the point estimate effect size, a distribution of effect sizes, or a pattern of results)',
          'A priori specification of how different patterns of results will be interpreted',
          'If possible: A priori specification and justification (theoretical or pragmatic) of relevant effect sizes and the direction of predicted effects',
          'A priori specification of stopping rules for data collection',
        ];
      
        let startY = doc.lastAutoTable.finalY;
        
        items_plc.forEach((item_plc) => {
          const row = ['Planning', item_plc, '', ''];
          
          // Add row to autoTable
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [row],
            theme: 'grid',
            styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
            bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
            rowPageBreak: 'avoid',
            columnStyles: {
              0: { halign: 'left', cellWidth: 20 },
              1: { halign: 'left', cellWidth: 90 },
              2: { halign: 'left', cellWidth: 20 },
              3: { halign: 'left', cellWidth: 50 },
            },
          });
        
          if (doc.lastAutoTable.finalY < startY) {
      
            // Add text field or radio button at a fixed position on the new page
            const yPosition = 15;
            const textField = new TextField();
            textField.Rect = [145, yPosition, 50, 10];
            textField.V = '';
            textField.T = `TestTextBox_${item_plc}`; // Use loop variable to make it unique
            doc.addField(textField);
  
            // Add Radio button after the row
            const yPositionB = 16;
            var radioButton = new RadioButton();
            radioButton.fieldName = 'RadioButtonGroup';
            radioButton.Rect = [132, yPositionB, 4, 4];
            radioButton.T = `RadioButton_${item_plc}`; // Use item to make it unique
            doc.addField(radioButton);
          } else {
          // Add text field after the row
          const yPosition = startY + 1;
          const textField = new TextField();
          textField.Rect = [145, yPosition, 50, 10];
          textField.V = '';
          textField.T = `TestTextBox_${item_plc}`; // Use item to make it unique
          doc.addField(textField);
  
        // Add Radio button after the row
        const yPositionRadio = startY + 2;
        var radioButton = new RadioButton();
        radioButton.fieldName = 'RadioButtonGroup';
        radioButton.Rect = [132, yPositionRadio, 4, 4];
        radioButton.T = `RadioButton_${item_plc}`; // Use item to make it unique
        doc.addField(radioButton);
          }
        
          // Update startY for the next iteration
          startY = doc.lastAutoTable.finalY;
        });} 

          if (box1.checked == true && box2.checked == false){ //planning items for designs using groups and random assignment
            const items_plgr = [
              'Random assignment of participants to conditions'];
          
            let startY = doc.lastAutoTable.finalY;
            
            items_plgr.forEach((item_plgr) => {
              const row = ['Planning', item_plgr, '', ''];
              
              // Add row to autoTable
              doc.autoTable({
                startY: doc.lastAutoTable.finalY,
                body: [row],
                theme: 'grid',
                styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                rowPageBreak: 'avoid',
                columnStyles: {
                  0: { halign: 'left', cellWidth: 20 },
                  1: { halign: 'left', cellWidth: 90 },
                  2: { halign: 'left', cellWidth: 20 },
                  3: { halign: 'left', cellWidth: 50 },
                },
              });
            
              if (doc.lastAutoTable.finalY < startY) {
      
                // Add text field or radio button at a fixed position on the new page
                const yPosition = 15;
                const textField = new TextField();
                textField.Rect = [145, yPosition, 50, 10];
                textField.V = '';
                textField.T = `TestTextBox_${item_plgr}`; // Use loop variable to make it unique
                doc.addField(textField);
      
                // Add Radio button after the row
                const yPositionB = 16;
                var radioButton = new RadioButton();
                radioButton.fieldName = 'RadioButtonGroup';
                radioButton.Rect = [132, yPositionB, 4, 4];
                radioButton.T = `RadioButton_${item_plgr}`; // Use item to make it unique
                doc.addField(radioButton);
              } else {
              // Add text field after the row
              const yPosition = startY + 1;
              const textField = new TextField();
              textField.Rect = [145, yPosition, 50, 10];
              textField.V = '';
              textField.T = `TestTextBox_${item_plgr}`; // Use item to make it unique
              doc.addField(textField);
      
            // Add Radio button after the row
            const yPositionRadio = startY + 2;
            var radioButton = new RadioButton();
            radioButton.fieldName = 'RadioButtonGroup';
            radioButton.Rect = [132, yPositionRadio, 4, 4];
            radioButton.T = `RadioButton_${item_plgr}`; // Use item to make it unique
            doc.addField(radioButton);
              }
            
              // Update startY for the next iteration
              startY = doc.lastAutoTable.finalY;
            });} 

      if (box1.checked == true){ //planning items for designs using groups
        const items_plg = [
          'If feasible: No differences between groups/conditions that are noticeable by the participants (e.g., through use of placebos or other protocols)',
          'Use of one or multiple appropriate (e.g., matched) control groups',
          'If a within-person design has been used, alternation/randomization of condition order across different study participants',
        ];
      
        let startY = doc.lastAutoTable.finalY;
        
        items_plg.forEach((item_plg) => {
          const row = ['Planning', item_plg, '', ''];
          
          // Add row to autoTable
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [row],
            theme: 'grid',
            styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
            bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
            rowPageBreak: 'avoid',
            columnStyles: {
              0: { halign: 'left', cellWidth: 20 },
              1: { halign: 'left', cellWidth: 90 },
              2: { halign: 'left', cellWidth: 20 },
              3: { halign: 'left', cellWidth: 50 },
            },
          });
        
          if (doc.lastAutoTable.finalY < startY) {
      
            // Add text field or radio button at a fixed position on the new page
            const yPosition = 15;
            const textField = new TextField();
            textField.Rect = [145, yPosition, 50, 10];
            textField.V = '';
            textField.T = `TestTextBox_${item_plg}`; // Use loop variable to make it unique
            doc.addField(textField);
  
            // Add Radio button after the row
            const yPositionB = 16;
            var radioButton = new RadioButton();
            radioButton.fieldName = 'RadioButtonGroup';
            radioButton.Rect = [132, yPositionB, 4, 4];
            radioButton.T = `RadioButton_${item_plg}`; // Use item to make it unique
            doc.addField(radioButton);
          } else {
          // Add text field after the row
          const yPosition = startY + 1;
          const textField = new TextField();
          textField.Rect = [145, yPosition, 50, 10];
          textField.V = '';
          textField.T = `TestTextBox_${item_plg}`; // Use item to make it unique
          doc.addField(textField);
  
        // Add Radio button after the row
        const yPositionRadio = startY + 2;
        var radioButton = new RadioButton();
        radioButton.fieldName = 'RadioButtonGroup';
        radioButton.Rect = [132, yPositionRadio, 4, 4];
        radioButton.T = `RadioButton_${item_plg}`; // Use item to make it unique
        doc.addField(radioButton);
          }
        
          // Update startY for the next iteration
          startY = doc.lastAutoTable.finalY;
        })} 
        
        if (box3.checked == true){ //planning items for projects designing instruments
          const items_pli = [
            'Consideration of relevant factors for scale or item development (e.g., adequately spaced response options, careful wording of items and response options, verbal labeling of response options)',
            'Use of suitable/tested techniques for assessing discriminant validity, for example, by means of confirmatory factor analysis (using multiple indicators, e.g., Delta-CFI, Delta-Chi-Squared), or item response theory when testing for the uniqueness or mere relatedness of utilized constructs',
            'Consideration of a wide range of similar concepts when conducting discriminant validity analysis',
            'If possible: Assessment of convergent validity',
            'Use of enough items to fully capture the concept',
            'Assessment of construct validity in the specific context of the study/with the study´s purpose in mind',
          ];
        
          let startY = doc.lastAutoTable.finalY;
          
          items_pli.forEach((item_pli) => {
            const row = ['Planning', item_pli, '', ''];
            
            // Add row to autoTable
            doc.autoTable({
              startY: doc.lastAutoTable.finalY,
              body: [row],
              theme: 'grid',
              styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
              bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
              rowPageBreak: 'avoid',
              columnStyles: {
                0: { halign: 'left', cellWidth: 20 },
                1: { halign: 'left', cellWidth: 90 },
                2: { halign: 'left', cellWidth: 20 },
                3: { halign: 'left', cellWidth: 50 },
              },
            });
          
            if (doc.lastAutoTable.finalY < startY) {
      
              // Add text field or radio button at a fixed position on the new page
              const yPosition = 15;
              const textField = new TextField();
              textField.Rect = [145, yPosition, 50, 10];
              textField.V = '';
              textField.T = `TestTextBox_${item_pli}`; // Use loop variable to make it unique
              doc.addField(textField);
    
              // Add Radio button after the row
              const yPositionB = 16;
              var radioButton = new RadioButton();
              radioButton.fieldName = 'RadioButtonGroup';
              radioButton.Rect = [132, yPositionB, 4, 4];
              radioButton.T = `RadioButton_${item_pli}`; // Use item to make it unique
              doc.addField(radioButton);
            } else {
            // Add text field after the row
            const yPosition = startY + 1;
            const textField = new TextField();
            textField.Rect = [145, yPosition, 50, 10];
            textField.V = '';
            textField.T = `TestTextBox_${item_pli}`; // Use item to make it unique
            doc.addField(textField);
    
          // Add Radio button after the row
          const yPositionRadio = startY + 2;
          var radioButton = new RadioButton();
          radioButton.fieldName = 'RadioButtonGroup';
          radioButton.Rect = [132, yPositionRadio, 4, 4];
          radioButton.T = `RadioButton_${item_pli}`; // Use item to make it unique
          doc.addField(radioButton);
            }
          
            // Update startY for the next iteration
            startY = doc.lastAutoTable.finalY;
          })} 

        if (box11.checked == true && box5.checked == true){ //planning items for confirmatory frequentist projects
          const items_plcf = ['If applicable: In cases involving use of linear mixed effects models (LMMs), an a priori decision has been made on the strategy used for selecting the random effects structure (e.g., maximal LMM, parsimonious LMM)'];
        
          let startY = doc.lastAutoTable.finalY;
          
          items_plcf.forEach((item_plcf) => {
            const row = ['Planning', item_plcf, '', ''];
            
            // Add row to autoTable
            doc.autoTable({
              startY: doc.lastAutoTable.finalY,
              body: [row],
              theme: 'grid',
              styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
              bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
              rowPageBreak: 'avoid',
              columnStyles: {
                0: { halign: 'left', cellWidth: 20 },
                1: { halign: 'left', cellWidth: 90 },
                2: { halign: 'left', cellWidth: 20 },
                3: { halign: 'left', cellWidth: 50 },
              },
            });
          
            if (doc.lastAutoTable.finalY < startY) {
      
              // Add text field or radio button at a fixed position on the new page
              const yPosition = 15;
              const textField = new TextField();
              textField.Rect = [145, yPosition, 50, 10];
              textField.V = '';
              textField.T = `TestTextBox_${item_plcf}`; // Use loop variable to make it unique
              doc.addField(textField);
    
              // Add Radio button after the row
              const yPositionB = 16;
              var radioButton = new RadioButton();
              radioButton.fieldName = 'RadioButtonGroup';
              radioButton.Rect = [132, yPositionB, 4, 4];
              radioButton.T = `RadioButton_${item_plcf}`; // Use item to make it unique
              doc.addField(radioButton);
            } else {
            // Add text field after the row
            const yPosition = startY + 1;
            const textField = new TextField();
            textField.Rect = [145, yPosition, 50, 10];
            textField.V = '';
            textField.T = `TestTextBox_${item_plcf}`; // Use item to make it unique
            doc.addField(textField);
    
          // Add Radio button after the row
          const yPositionRadio = startY + 2;
          var radioButton = new RadioButton();
          radioButton.fieldName = 'RadioButtonGroup';
          radioButton.Rect = [132, yPositionRadio, 4, 4];
          radioButton.T = `RadioButton_${item_plcf}`; // Use item to make it unique
          doc.addField(radioButton);
            }
          
            // Update startY for the next iteration
            startY = doc.lastAutoTable.finalY;
          })} 
        
        if (box4.checked == true && box5.checked == true){ //planning items for confirmatory bayesian projects
          const items_plcb = ['A priori definition of statistical models (likelihoods) and priors', 'Performance of prior predictive checks to evaluate prior assumptions about the model (likelihood) and the priors (summary statistics that are used for prior and posterior predictive checking should be predefined/preregistered)',
          'Consideration of a priori expectations/definition of priors',
          'If decisions on discovery are performed, a priori definition of decision criteria'];
        
          let startY = doc.lastAutoTable.finalY;
          
          items_plcb.forEach((item_plcb) => {
            const row = ['Planning', item_plcb, '', ''];
            
            // Add row to autoTable
            doc.autoTable({
              startY: doc.lastAutoTable.finalY,
              body: [row],
              theme: 'grid',
              styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
              bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
              rowPageBreak: 'avoid',
              columnStyles: {
                0: { halign: 'left', cellWidth: 20 },
                1: { halign: 'left', cellWidth: 90 },
                2: { halign: 'left', cellWidth: 20 },
                3: { halign: 'left', cellWidth: 50 },
              },
            });
          
            if (doc.lastAutoTable.finalY < startY) {
      
              // Add text field or radio button at a fixed position on the new page
              const yPosition = 15;
              const textField = new TextField();
              textField.Rect = [145, yPosition, 50, 10];
              textField.V = '';
              textField.T = `TestTextBox_${item_plcb}`; // Use loop variable to make it unique
              doc.addField(textField);
    
              // Add Radio button after the row
              const yPositionB = 16;
              var radioButton = new RadioButton();
              radioButton.fieldName = 'RadioButtonGroup';
              radioButton.Rect = [132, yPositionB, 4, 4];
              radioButton.T = `RadioButton_${item_plcb}`; // Use item to make it unique
              doc.addField(radioButton);
            } else {
            // Add text field after the row
            const yPosition = startY + 1;
            const textField = new TextField();
            textField.Rect = [145, yPosition, 50, 10];
            textField.V = '';
            textField.T = `TestTextBox_${item_plcb}`; // Use item to make it unique
            doc.addField(textField);
    
          // Add Radio button after the row
          const yPositionRadio = startY + 2;
          var radioButton = new RadioButton();
          radioButton.fieldName = 'RadioButtonGroup';
          radioButton.Rect = [132, yPositionRadio, 4, 4];
          radioButton.T = `RadioButton_${item_plcb}`; // Use item to make it unique
          doc.addField(radioButton);
            }
          
            // Update startY for the next iteration
            startY = doc.lastAutoTable.finalY;
          })} 
        ;}

        if (box8.checked == true || box6.checked == true){ //base items data collection
          const items_dc = [
            'Experimental manipulations have been pretested/piloted',
            'Assessment of the specificity of manipulations (i.e., ensuring that each manipulation only affects the intended construct)',
            'Distinguishing between the measurement of inter- and intraindividual differences',
            'Assessment of characteristics of the testing setting/situation and their possible influence on the results (e.g., testing locations, social desirability)',
            'Use of screening methods/measures to identify problematic participants (e.g., inattentive responders), ideally at multiple timepoints during the study',
            'If applicable: In case of multilab or multisite studies, assessment of how the effect of the manipulation varies across locations, participants, or other factors (e.g., by using manipulation checks)',
            'If possible: Collection and reporting of long-term outcomes (e.g., follow-up data)',
          ];
        
          let startY = doc.lastAutoTable.finalY;
          
          items_dc.forEach((item_dc) => {
            const row = ['Collection', item_dc, '', ''];
            
            // Add row to autoTable
            doc.autoTable({
              startY: doc.lastAutoTable.finalY,
              body: [row],
              theme: 'grid',
              styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
              bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
              rowPageBreak: 'avoid',
              columnStyles: {
                0: { halign: 'left', cellWidth: 20 },
                1: { halign: 'left', cellWidth: 90 },
                2: { halign: 'left', cellWidth: 20 },
                3: { halign: 'left', cellWidth: 50 },
              },
            });
          
            if (doc.lastAutoTable.finalY < startY) {
      
              // Add text field or radio button at a fixed position on the new page
              const yPosition = 15;
              const textField = new TextField();
              textField.Rect = [145, yPosition, 50, 10];
              textField.V = '';
              textField.T = `TestTextBox_${item_dc}`; // Use loop variable to make it unique
              doc.addField(textField);
    
              // Add Radio button after the row
              const yPositionB = 16;
              var radioButton = new RadioButton();
              radioButton.fieldName = 'RadioButtonGroup';
              radioButton.Rect = [132, yPositionB, 4, 4];
              radioButton.T = `RadioButton_${item_dc}`; // Use item to make it unique
              doc.addField(radioButton);
            } else {
            // Add text field after the row
            const yPosition = startY + 1;
            const textField = new TextField();
            textField.Rect = [145, yPosition, 50, 10];
            textField.V = '';
            textField.T = `TestTextBox_${item_dc}`; // Use item to make it unique
            doc.addField(textField);
    
          // Add Radio button after the row
          const yPositionRadio = startY + 2;
          var radioButton = new RadioButton();
          radioButton.fieldName = 'RadioButtonGroup';
          radioButton.Rect = [132, yPositionRadio, 4, 4];
          radioButton.T = `RadioButton_${item_dc}`; // Use item to make it unique
          doc.addField(radioButton);
            }
          
            // Update startY for the next iteration
            startY = doc.lastAutoTable.finalY;
          });
          
          if (box5.checked == true){ //collection items for confirmatory projects
            const items_dcc = [
              'If applicable: Keeping participants and, if feasible, the person collecting the data unaware of the study hypotheses',
              'Close adherence to the protocol of the procedure (and/or preregistration) and documentation of necessary deviations',
            ];
          
            let startY = doc.lastAutoTable.finalY;
            
            items_dcc.forEach((item_dcc) => {
              const row = ['Collection', item_dcc, '', ''];
              
              // Add row to autoTable
              doc.autoTable({
                startY: doc.lastAutoTable.finalY,
                body: [row],
                theme: 'grid',
                styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                rowPageBreak: 'avoid',
                columnStyles: {
                  0: { halign: 'left', cellWidth: 20 },
                  1: { halign: 'left', cellWidth: 90 },
                  2: { halign: 'left', cellWidth: 20 },
                  3: { halign: 'left', cellWidth: 50 },
                },
              });
            
              if (doc.lastAutoTable.finalY < startY) {
      
                // Add text field or radio button at a fixed position on the new page
                const yPosition = 15;
                const textField = new TextField();
                textField.Rect = [145, yPosition, 50, 10];
                textField.V = '';
                textField.T = `TestTextBox_${item_dcc}`; // Use loop variable to make it unique
                doc.addField(textField);
      
                // Add Radio button after the row
                const yPositionB = 16;
                var radioButton = new RadioButton();
                radioButton.fieldName = 'RadioButtonGroup';
                radioButton.Rect = [132, yPositionB, 4, 4];
                radioButton.T = `RadioButton_${item_dcc}`; // Use item to make it unique
                doc.addField(radioButton);
              } else {
              // Add text field after the row
              const yPosition = startY + 1;
              const textField = new TextField();
              textField.Rect = [145, yPosition, 50, 10];
              textField.V = '';
              textField.T = `TestTextBox_${item_dcc}`; // Use item to make it unique
              doc.addField(textField);
      
            // Add Radio button after the row
            const yPositionRadio = startY + 2;
            var radioButton = new RadioButton();
            radioButton.fieldName = 'RadioButtonGroup';
            radioButton.Rect = [132, yPositionRadio, 4, 4];
            radioButton.T = `RadioButton_${item_dcc}`; // Use item to make it unique
            doc.addField(radioButton);
              }
            
              // Update startY for the next iteration
              startY = doc.lastAutoTable.finalY;
            })} 

              if (box5.checked == false){ //collection items for exploratory projects
                const items_dce = [
                  'Ensuring consistent procedures and reporting any changes'
                ];
              
                let startY = doc.lastAutoTable.finalY;
                
                items_dce.forEach((item_dce) => {
                  const row = ['Collection', item_dce, '', ''];
                  
                  // Add row to autoTable
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [row],
                    theme: 'grid',
                    styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                    bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                    rowPageBreak: 'avoid',
                    columnStyles: {
                      0: { halign: 'left', cellWidth: 20 },
                      1: { halign: 'left', cellWidth: 90 },
                      2: { halign: 'left', cellWidth: 20 },
                      3: { halign: 'left', cellWidth: 50 },
                    },
                  });
                
                  if (doc.lastAutoTable.finalY < startY) {
      
                    // Add text field or radio button at a fixed position on the new page
                    const yPosition = 15;
                    const textField = new TextField();
                    textField.Rect = [145, yPosition, 50, 10];
                    textField.V = '';
                    textField.T = `TestTextBox_${item_dce}`; // Use loop variable to make it unique
                    doc.addField(textField);
          
                    // Add Radio button after the row
                    const yPositionB = 16;
                    var radioButton = new RadioButton();
                    radioButton.fieldName = 'RadioButtonGroup';
                    radioButton.Rect = [132, yPositionB, 4, 4];
                    radioButton.T = `RadioButton_${item_dce}`; // Use item to make it unique
                    doc.addField(radioButton);
                  } else {
                  // Add text field after the row
                  const yPosition = startY + 1;
                  const textField = new TextField();
                  textField.Rect = [145, yPosition, 50, 10];
                  textField.V = '';
                  textField.T = `TestTextBox_${item_dce}`; // Use item to make it unique
                  doc.addField(textField);
          
                // Add Radio button after the row
                const yPositionRadio = startY + 2;
                var radioButton = new RadioButton();
                radioButton.fieldName = 'RadioButtonGroup';
                radioButton.Rect = [132, yPositionRadio, 4, 4];
                radioButton.T = `RadioButton_${item_dce}`; // Use item to make it unique
                doc.addField(radioButton);
                  }
                        
                  // Update startY for the next iteration
                  startY = doc.lastAutoTable.finalY;
                })}
            ;}

            if (box9.checked == true || box6.checked == true){ //base items data analysis
              const items_da = [
                'Screening of data for problematic responders either using predefined exclusion criteria or justifying all decisions made',
                'Analysis of missing data (e.g., for systematic patterns or data missing not completely at random)',
                'If applicable: Use of preregistered methods specifically developed for handling missing data (FIML, imputation, Bayesian methods) instead of mere data exclusion',
                'If applicable: If latent constructs are involved, use of confirmatory factor analysis to confirm their factor structure',
                'Valid choice of statistics considering assumptions required for using specific methods and assessing their appropriateness for the data',
                'Taking non-independence of observations into account (e.g., by using multilevel modelling)',
                'Careful checking of statistical assumptions, reporting of violations, and use of robust methods (e.g., bootstrapping, non-parametric statistical tests) when needed',
                'If necessary: Use of appropriate corrections for multiple testing',
                'Quantification of result uncertainty (e.g., via confidence or credible intervals instead of only p values)',
                'If possible (if defined effect sizes exist for this method): Calculation of effect sizes',
                'If applicable: In designs using different intervention levels (e.g., different doses of a substance), study of the dose-response relationship',
                'If applicable: If exclusion criteria were not pre-registered, or non-preregistered exclusion criteria are deemed to improve the validity of the test: Comparison of the results for the full sample and the sample with exclusions, ideally combined with the preregistration of the approach and possible interpretations',
                'Constant ruling-out of other possible hypotheses/explanations for the effect during analysis and result interpretation, for example by using logic or sensitivity analysis',
                'Evaluation of the viability of competing explanations (i.e., whether there are alternative hypotheses from which one could have deduced the same prediction)',
                'Comparison of potential explanations, concerning their scope (i.e., a theory´s ability to explain phenomena in different contexts) and simplicity (e.g., the number of assumptions required by different theoretical explanations)',
                'If feasible: Performing some form of robustness analysis (e.g., multiverse analysis)',
              ];
            
              let startY = doc.lastAutoTable.finalY;
              
              items_da.forEach((item_da) => {
                const row = ['Analysis', item_da, '', ''];
                
                // Add row to autoTable
                doc.autoTable({
                  startY: doc.lastAutoTable.finalY,
                  body: [row],
                  theme: 'grid',
                  styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                  bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                  rowPageBreak: 'avoid',
                  columnStyles: {
                    0: { halign: 'left', cellWidth: 20 },
                    1: { halign: 'left', cellWidth: 90 },
                    2: { halign: 'left', cellWidth: 20 },
                    3: { halign: 'left', cellWidth: 50 },
                  },
                });
              
                if (doc.lastAutoTable.finalY < startY) {
      
                  // Add text field or radio button at a fixed position on the new page
                  const yPosition = 15;
                  const textField = new TextField();
                  textField.Rect = [145, yPosition, 50, 10];
                  textField.V = '';
                  textField.T = `TestTextBox_${item_da}`; // Use loop variable to make it unique
                  doc.addField(textField);
        
                  // Add Radio button after the row
                  const yPositionB = 16;
                  var radioButton = new RadioButton();
                  radioButton.fieldName = 'RadioButtonGroup';
                  radioButton.Rect = [132, yPositionB, 4, 4];
                  radioButton.T = `RadioButton_${item_da}`; // Use item to make it unique
                  doc.addField(radioButton);
                } else {
                // Add text field after the row
                const yPosition = startY + 1;
                const textField = new TextField();
                textField.Rect = [145, yPosition, 50, 10];
                textField.V = '';
                textField.T = `TestTextBox_${item_da}`; // Use item to make it unique
                doc.addField(textField);
        
              // Add Radio button after the row
              const yPositionRadio = startY + 2;
              var radioButton = new RadioButton();
              radioButton.fieldName = 'RadioButtonGroup';
              radioButton.Rect = [132, yPositionRadio, 4, 4];
              radioButton.T = `RadioButton_${item_da}`; // Use item to make it unique
              doc.addField(radioButton);
                }
                        
              
                // Update startY for the next iteration
                startY = doc.lastAutoTable.finalY;
              })

              if (box5.checked == true){ //analysis items for confirmatory projects
                const items_dac = [
                  'If possible: Use of specific theory-driven statistical models (e.g., contrasts which test for a priori specified differences between certain groups ideally combined with an a priori decision on fixed effects coding instead of omnibus tests looking for any difference)',
                ];
              
                let startY = doc.lastAutoTable.finalY;
                
                items_dac.forEach((item_dac) => {
                  const row = ['Analysis', item_dac, '', ''];
                  
                  // Add row to autoTable
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [row],
                    theme: 'grid',
                    styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                    bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                    rowPageBreak: 'avoid',
                    columnStyles: {
                      0: { halign: 'left', cellWidth: 20 },
                      1: { halign: 'left', cellWidth: 90 },
                      2: { halign: 'left', cellWidth: 20 },
                      3: { halign: 'left', cellWidth: 50 },
                    },
                  });
                
                  if (doc.lastAutoTable.finalY < startY) {
      
                    // Add text field or radio button at a fixed position on the new page
                    const yPosition = 15;
                    const textField = new TextField();
                    textField.Rect = [145, yPosition, 50, 10];
                    textField.V = '';
                    textField.T = `TestTextBox_${item_dac}`; // Use loop variable to make it unique
                    doc.addField(textField);
          
                    // Add Radio button after the row
                    const yPositionB = 16;
                    var radioButton = new RadioButton();
                    radioButton.fieldName = 'RadioButtonGroup';
                    radioButton.Rect = [132, yPositionB, 4, 4];
                    radioButton.T = `RadioButton_${item_dac}`; // Use item to make it unique
                    doc.addField(radioButton);
                  } else {
                  // Add text field after the row
                  const yPosition = startY + 1;
                  const textField = new TextField();
                  textField.Rect = [145, yPosition, 50, 10];
                  textField.V = '';
                  textField.T = `TestTextBox_${item_dac}`; // Use item to make it unique
                  doc.addField(textField);
          
                // Add Radio button after the row
                const yPositionRadio = startY + 2;
                var radioButton = new RadioButton();
                radioButton.fieldName = 'RadioButtonGroup';
                radioButton.Rect = [132, yPositionRadio, 4, 4];
                radioButton.T = `RadioButton_${item_dac}`; // Use item to make it unique
                doc.addField(radioButton);
                  }
                                       
                
                  // Update startY for the next iteration
                  startY = doc.lastAutoTable.finalY;
                })} 
                
                if (box11.checked == true){ //analysis items for frequentist statistics
                  const items_daf = [
                    'If the sample size, N, is not fixed, use of statistical methods that are specifically suited for repeated testing/continuous sampling',
                  ];
                
                  let startY = doc.lastAutoTable.finalY;
                  
                  items_daf.forEach((item_daf) => {
                    const row = ['Analysis', item_daf, '', ''];
                    
                    // Add row to autoTable
                    doc.autoTable({
                      startY: doc.lastAutoTable.finalY,
                      body: [row],
                      theme: 'grid',
                      styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                      bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                      rowPageBreak: 'avoid',
                      columnStyles: {
                        0: { halign: 'left', cellWidth: 20 },
                        1: { halign: 'left', cellWidth: 90 },
                        2: { halign: 'left', cellWidth: 20 },
                        3: { halign: 'left', cellWidth: 50 },
                      },
                    });
                  
                    if (doc.lastAutoTable.finalY < startY) {
      
                      // Add text field or radio button at a fixed position on the new page
                      const yPosition = 15;
                      const textField = new TextField();
                      textField.Rect = [145, yPosition, 50, 10];
                      textField.V = '';
                      textField.T = `TestTextBox_${item_daf}`; // Use loop variable to make it unique
                      doc.addField(textField);
            
                      // Add Radio button after the row
                      const yPositionB = 16;
                      var radioButton = new RadioButton();
                      radioButton.fieldName = 'RadioButtonGroup';
                      radioButton.Rect = [132, yPositionB, 4, 4];
                      radioButton.T = `RadioButton_${item_daf}`; // Use item to make it unique
                      doc.addField(radioButton);
                    } else {
                    // Add text field after the row
                    const yPosition = startY + 1;
                    const textField = new TextField();
                    textField.Rect = [145, yPosition, 50, 10];
                    textField.V = '';
                    textField.T = `TestTextBox_${item_daf}`; // Use item to make it unique
                    doc.addField(textField);
            
                  // Add Radio button after the row
                  const yPositionRadio = startY + 2;
                  var radioButton = new RadioButton();
                  radioButton.fieldName = 'RadioButtonGroup';
                  radioButton.Rect = [132, yPositionRadio, 4, 4];
                  radioButton.T = `RadioButton_${item_daf}`; // Use item to make it unique
                  doc.addField(radioButton);
                    }
                        
                  
                    // Update startY for the next iteration
                    startY = doc.lastAutoTable.finalY;
                  })} 
                
                if (box4.checked == true){ //analysis items for Bayesian statistics
                  const items_dab = [
                    'Use of posterior predictive checks to validate and improve the model',
                  ];
                
                  let startY = doc.lastAutoTable.finalY;
                  
                  items_dab.forEach((item_dab) => {
                    const row = ['Analysis', item_dab, '', ''];
                    
                    // Add row to autoTable
                    doc.autoTable({
                      startY: doc.lastAutoTable.finalY,
                      body: [row],
                      theme: 'grid',
                      styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                      bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                      rowPageBreak: 'avoid',
                      columnStyles: {
                        0: { halign: 'left', cellWidth: 20 },
                        1: { halign: 'left', cellWidth: 90 },
                        2: { halign: 'left', cellWidth: 20 },
                        3: { halign: 'left', cellWidth: 50 },
                      },
                    });
                  
                    if (doc.lastAutoTable.finalY < startY) {
      
                      // Add text field or radio button at a fixed position on the new page
                      const yPosition = 15;
                      const textField = new TextField();
                      textField.Rect = [145, yPosition, 50, 10];
                      textField.V = '';
                      textField.T = `TestTextBox_${item_dab}`; // Use loop variable to make it unique
                      doc.addField(textField);
            
                      // Add Radio button after the row
                      const yPositionB = 16;
                      var radioButton = new RadioButton();
                      radioButton.fieldName = 'RadioButtonGroup';
                      radioButton.Rect = [132, yPositionB, 4, 4];
                      radioButton.T = `RadioButton_${item_dab}`; // Use item to make it unique
                      doc.addField(radioButton);
                    } else {
                    // Add text field after the row
                    const yPosition = startY + 1;
                    const textField = new TextField();
                    textField.Rect = [145, yPosition, 50, 10];
                    textField.V = '';
                    textField.T = `TestTextBox_${item_dab}`; // Use item to make it unique
                    doc.addField(textField);
            
                  // Add Radio button after the row
                  const yPositionRadio = startY + 2;
                  var radioButton = new RadioButton();
                  radioButton.fieldName = 'RadioButtonGroup';
                  radioButton.Rect = [132, yPositionRadio, 4, 4];
                  radioButton.T = `RadioButton_${item_dab}`; // Use item to make it unique
                  doc.addField(radioButton);
                    }
                            
                  
                    // Update startY for the next iteration
                    startY = doc.lastAutoTable.finalY;
                  })} 

                if (box4.checked == true && box5.checked == true){ //analysis items for confirmatory bayesian statistics
                  const items_dacb = [
                    'If applicable: Bayes factors should be used to provide evidence for/against statistical hypotheses',
                    'Use of preregistered sensitivity analyses (i.e., understanding the robustness of the results across a set of reasonable priors; reporting of robustness region)',
                  ];
                
                  let startY = doc.lastAutoTable.finalY;
                  
                  items_dacb.forEach((item_dacb) => {
                    const row = ['Analysis', item_dacb, '', ''];
                    
                    // Add row to autoTable
                    doc.autoTable({
                      startY: doc.lastAutoTable.finalY,
                      body: [row],
                      theme: 'grid',
                      styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                      bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                      rowPageBreak: 'avoid',
                      columnStyles: {
                        0: { halign: 'left', cellWidth: 20 },
                        1: { halign: 'left', cellWidth: 90 },
                        2: { halign: 'left', cellWidth: 20 },
                        3: { halign: 'left', cellWidth: 50 },
                      },
                    });
                  
                    if (doc.lastAutoTable.finalY < startY) {
      
                      // Add text field or radio button at a fixed position on the new page
                      const yPosition = 15;
                      const textField = new TextField();
                      textField.Rect = [145, yPosition, 50, 10];
                      textField.V = '';
                      textField.T = `TestTextBox_${item_dacb}`; // Use loop variable to make it unique
                      doc.addField(textField);
            
                      // Add Radio button after the row
                      const yPositionB = 16;
                      var radioButton = new RadioButton();
                      radioButton.fieldName = 'RadioButtonGroup';
                      radioButton.Rect = [132, yPositionB, 4, 4];
                      radioButton.T = `RadioButton_${item_dacb}`; // Use item to make it unique
                      doc.addField(radioButton);
                    } else {
                    // Add text field after the row
                    const yPosition = startY + 1;
                    const textField = new TextField();
                    textField.Rect = [145, yPosition, 50, 10];
                    textField.V = '';
                    textField.T = `TestTextBox_${item_dacb}`; // Use item to make it unique
                    doc.addField(textField);
            
                  // Add Radio button after the row
                  const yPositionRadio = startY + 2;
                  var radioButton = new RadioButton();
                  radioButton.fieldName = 'RadioButtonGroup';
                  radioButton.Rect = [132, yPositionRadio, 4, 4];
                  radioButton.T = `RadioButton_${item_dacb}`; // Use item to make it unique
                  doc.addField(radioButton);
                    }
                          
                  
                    // Update startY for the next iteration
                    startY = doc.lastAutoTable.finalY;
                  })} 

                  if (box1.checked == true && box2.checked == true){ //analysis items for non-random conditions
                    const items_danr = [
                      'Use of baseline comparisons to compare groups on relevant criteria'
                    ];
                  
                    let startY = doc.lastAutoTable.finalY;
                    
                    items_danr.forEach((item_danr) => {
                      const row = ['Analysis', item_danr, '', ''];
                      
                      // Add row to autoTable
                      doc.autoTable({
                        startY: doc.lastAutoTable.finalY,
                        body: [row],
                        theme: 'grid',
                        styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                        bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                        rowPageBreak: 'avoid',
                        columnStyles: {
                          0: { halign: 'left', cellWidth: 20 },
                          1: { halign: 'left', cellWidth: 90 },
                          2: { halign: 'left', cellWidth: 20 },
                          3: { halign: 'left', cellWidth: 50 },
                        },
                      });
                    
                      if (doc.lastAutoTable.finalY < startY) {
      
                        // Add text field or radio button at a fixed position on the new page
                        const yPosition = 15;
                        const textField = new TextField();
                        textField.Rect = [145, yPosition, 50, 10];
                        textField.V = '';
                        textField.T = `TestTextBox_${item_danr}`; // Use loop variable to make it unique
                        doc.addField(textField);
              
                        // Add Radio button after the row
                        const yPositionB = 16;
                        var radioButton = new RadioButton();
                        radioButton.fieldName = 'RadioButtonGroup';
                        radioButton.Rect = [132, yPositionB, 4, 4];
                        radioButton.T = `RadioButton_${item_danr}`; // Use item to make it unique
                        doc.addField(radioButton);
                      } else {
                      // Add text field after the row
                      const yPosition = startY + 1;
                      const textField = new TextField();
                      textField.Rect = [145, yPosition, 50, 10];
                      textField.V = '';
                      textField.T = `TestTextBox_${item_danr}`; // Use item to make it unique
                      doc.addField(textField);
              
                    // Add Radio button after the row
                    const yPositionRadio = startY + 2;
                    var radioButton = new RadioButton();
                    radioButton.fieldName = 'RadioButtonGroup';
                    radioButton.Rect = [132, yPositionRadio, 4, 4];
                    radioButton.T = `RadioButton_${item_danr}`; // Use item to make it unique
                    doc.addField(radioButton);
                      }
                          
                    
                      // Update startY for the next iteration
                      startY = doc.lastAutoTable.finalY;
                    })} 
                ;}

              if (box10.checked == true || box6.checked == true){ //base items reporting
                const items_r = [
                  'Disclosure of all measures, manipulations, exclusions, and method of sample size determination',
                  'Reporting scales’/measures’ reliability in the context of each study (e.g., odd/even items reliability check, split half reliability)',
                  'Description of the sample and the study (e.g., age of participants, gender/sex ratio, other relevant demographic information, location of the study)',
                  'Reporting of construct operationalisation',
                  'Justification of the measure selection and/or the creation of new measures (theoretical and/or pragmatic)',
                  'If applicable: Description of response coding, score calculation, and/or included items and modifications made to established scales',
                  'If possible: Presentation of validity evidence for all used scales',
                  'Specification of the analysis rationale',
                  'Sharing of computer code used to analyze the data',
                  'Reporting the results for all measured variables (if necessary, in the supplementary materials)',
                  'Reporting of effect estimates together with their uncertainty',
                  'If categorical data was created out of continuous data, presentation of descriptive statistics and effect sizes for categorical as well as continuous data',
                  'When using covariates in exploratory analysis, presentation of both the unadjusted and adjusted models',
                  'Explicit statement on the limitations of the study’s design',
                  'Explicit statement on the generalizability of the results',
                  'If applicable: Discussion of resource limitations and/or practical limitations (e.g., concerning the size of the sample)',
                  'If possible: Sharing of the raw data set in an open access repository, such as the Open Science Framework (ideally continuously uploading data with a time stamp as data collection takes place, but data can then be made public at a later date)',
                  'If possible: Independent replication of the study',
                ];
              
                let startY = doc.lastAutoTable.finalY;
                
                items_r.forEach((item_r) => {
                  const row = ['Reporting', item_r, '', ''];
                  
                  // Add row to autoTable
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [row],
                    theme: 'grid',
                    styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                    bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                    rowPageBreak: 'avoid',
                    columnStyles: {
                      0: { halign: 'left', cellWidth: 20 },
                      1: { halign: 'left', cellWidth: 90 },
                      2: { halign: 'left', cellWidth: 20 },
                      3: { halign: 'left', cellWidth: 50 },
                    },
                  });
                
                  if (doc.lastAutoTable.finalY < startY) {
      
                    // Add text field or radio button at a fixed position on the new page
                    const yPosition = 15;
                    const textField = new TextField();
                    textField.Rect = [145, yPosition, 50, 10];
                    textField.V = '';
                    textField.T = `TestTextBox_${item_r}`; // Use loop variable to make it unique
                    doc.addField(textField);
          
                    // Add Radio button after the row
                    const yPositionB = 16;
                    var radioButton = new RadioButton();
                    radioButton.fieldName = 'RadioButtonGroup';
                    radioButton.Rect = [132, yPositionB, 4, 4];
                    radioButton.T = `RadioButton_${item_r}`; // Use item to make it unique
                    doc.addField(radioButton);
                  } else {
                  // Add text field after the row
                  const yPosition = startY + 1;
                  const textField = new TextField();
                  textField.Rect = [145, yPosition, 50, 10];
                  textField.V = '';
                  textField.T = `TestTextBox_${item_r}`; // Use item to make it unique
                  doc.addField(textField);
          
                // Add Radio button after the row
                const yPositionRadio = startY + 2;
                var radioButton = new RadioButton();
                radioButton.fieldName = 'RadioButtonGroup';
                radioButton.Rect = [132, yPositionRadio, 4, 4];
                radioButton.T = `RadioButton_${item_r}`; // Use item to make it unique
                doc.addField(radioButton);
                  }
                                            
                
                  // Update startY for the next iteration
                  startY = doc.lastAutoTable.finalY;
                })

                    if (box4.checked == true){ //reporting items for Bayesian statistics
                      const items_rb = [
                        'Following established reporting guidelines (e.g., Bayesian Analysis Reporting Guidelines (Kruschke, 2021) or the Discussion points for Bayesian inference (Aczel et al., 2020))'
                      ];
                    
                      let startY = doc.lastAutoTable.finalY;
                      
                      items_rb.forEach((item_rb) => {
                        const row = ['Reporting', item_rb, '', ''];
                        
                        // Add row to autoTable
                        doc.autoTable({
                          startY: doc.lastAutoTable.finalY,
                          body: [row],
                          theme: 'grid',
                          styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                          bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                          rowPageBreak: 'avoid',
                          columnStyles: {
                            0: { halign: 'left', cellWidth: 20 },
                            1: { halign: 'left', cellWidth: 90 },
                            2: { halign: 'left', cellWidth: 20 },
                            3: { halign: 'left', cellWidth: 50 },
                          },
                        });
                      
                        if (doc.lastAutoTable.finalY < startY) {
      
                          // Add text field or radio button at a fixed position on the new page
                          const yPosition = 15;
                          const textField = new TextField();
                          textField.Rect = [145, yPosition, 50, 10];
                          textField.V = '';
                          textField.T = `TestTextBox_${item_rb}`; // Use loop variable to make it unique
                          doc.addField(textField);
                
                          // Add Radio button after the row
                          const yPositionB = 16;
                          var radioButton = new RadioButton();
                          radioButton.fieldName = 'RadioButtonGroup';
                          radioButton.Rect = [132, yPositionB, 4, 4];
                          radioButton.T = `RadioButton_${item_rb}`; // Use item to make it unique
                          doc.addField(radioButton);
                        } else {
                        // Add text field after the row
                        const yPosition = startY + 1;
                        const textField = new TextField();
                        textField.Rect = [145, yPosition, 50, 10];
                        textField.V = '';
                        textField.T = `TestTextBox_${item_rb}`; // Use item to make it unique
                        doc.addField(textField);
                
                      // Add Radio button after the row
                      const yPositionRadio = startY + 2;
                      var radioButton = new RadioButton();
                      radioButton.fieldName = 'RadioButtonGroup';
                      radioButton.Rect = [132, yPositionRadio, 4, 4];
                      radioButton.T = `RadioButton_${item_rb}`; // Use item to make it unique
                      doc.addField(radioButton);
                        }
                            
                      
                        // Update startY for the next iteration
                        startY = doc.lastAutoTable.finalY;
                      })} 

                      if (box4.checked == true && box5.checked == true){ //reporting items for confirmatory Bayesian statistics
                        const items_rcb = [
                          'If decisions on discovery are performed, reporting of continuous evidence measure (e.g., BF) which the discrete result is based on'
                        ];
                      
                        let startY = doc.lastAutoTable.finalY;
                        
                        items_rcb.forEach((item_rcb) => {
                          const row = ['Reporting', item_rcb, '', ''];
                          
                          // Add row to autoTable
                          doc.autoTable({
                            startY: doc.lastAutoTable.finalY,
                            body: [row],
                            theme: 'grid',
                            styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
                            bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
                            rowPageBreak: 'avoid',
                            columnStyles: {
                              0: { halign: 'left', cellWidth: 20 },
                              1: { halign: 'left', cellWidth: 90 },
                              2: { halign: 'left', cellWidth: 20 },
                              3: { halign: 'left', cellWidth: 50 },
                            },
                          });
                        
                          if (doc.lastAutoTable.finalY < startY) {
      
                            // Add text field or radio button at a fixed position on the new page
                            const yPosition = 15;
                            const textField = new TextField();
                            textField.Rect = [145, yPosition, 50, 10];
                            textField.V = '';
                            textField.T = `TestTextBox_${item_rcb}`; // Use loop variable to make it unique
                            doc.addField(textField);
                  
                            // Add Radio button after the row
                            const yPositionB = 16;
                            var radioButton = new RadioButton();
                            radioButton.fieldName = 'RadioButtonGroup';
                            radioButton.Rect = [132, yPositionB, 4, 4];
                            radioButton.T = `RadioButton_${item_rcb}`; // Use item to make it unique
                            doc.addField(radioButton);
                          } else {
                          // Add text field after the row
                          const yPosition = startY + 1;
                          const textField = new TextField();
                          textField.Rect = [145, yPosition, 50, 10];
                          textField.V = '';
                          textField.T = `TestTextBox_${item_rcb}`; // Use item to make it unique
                          doc.addField(textField);
                  
                        // Add Radio button after the row
                        const yPositionRadio = startY + 2;
                        var radioButton = new RadioButton();
                        radioButton.fieldName = 'RadioButtonGroup';
                        radioButton.Rect = [132, yPositionRadio, 4, 4];
                        radioButton.T = `RadioButton_${item_rcb}`; // Use item to make it unique
                        doc.addField(radioButton);
                          }
                            
                        
                          // Update startY for the next iteration
                          startY = doc.lastAutoTable.finalY;
                        })} 

                    ;}

//Empty rows at the bottom

const numRounds = 5;
const fixedRowHeight = 15;
const pageHeightThreshold = 20;

let startY = doc.lastAutoTable.finalY;

for (let i = 0; i < numRounds; i++) {
  // Add row to autoTable
  const row = ['', '', '', ''];

  // Check if the current position is too close to the bottom of the page
  if (startY + fixedRowHeight > doc.internal.pageSize.height - pageHeightThreshold) {
    doc.addPage(); // Move to the next page
    startY = 15; // Reset startY for the new page
  }

  doc.autoTable({
    startY: startY,
    body: [row],
    theme: 'grid',
    styles: { cellPadding: 1.5, fontSize: 9, overflow: 'linebreak' },
    bodyStyles: { textColor: [58, 63, 82], fontStyle: 'normal' },
    rowPageBreak: 'avoid',
    columnStyles: {
      0: { halign: 'left', cellWidth: 20 },
      1: { halign: 'left', cellWidth: 90 },
      2: { halign: 'left', cellWidth: 20 },
      3: { halign: 'left', cellWidth: 50 },
    },
  });

  const yPosition = startY + 1;

  // Add text fields after the row
  const textField1 = new TextField();
  textField1.Rect = [145, yPosition, 50, 10];
  textField1.V = '';
  textField1.T = `TextBox1_${i + 1}`; // Use loop variable to make it unique
  doc.addField(textField1);

  const textField2 = new TextField();
  textField2.Rect = [15, yPosition, 20, 10];
  textField2.V = '';
  textField2.T = `TextBox2_${i + 1}`; // Use loop variable to make it unique
  doc.addField(textField2);

  const textField3 = new TextField();
  textField3.Rect = [35, yPosition, 90, 10];
  textField3.V = '';
  textField3.T = `TextBox3_${i + 1}`; // Use loop variable to make it unique
  doc.addField(textField3);

  const textField4 = new TextField();
  textField4.Rect = [133, yPosition, 20, 10];
  textField4.V = '';
  textField4.T = `TextBox4_${i + 1}`; // Use loop variable to make it unique
  doc.addField(textField4);

  // Update startY for the next iteration
  startY = doc.lastAutoTable.finalY;
}



   addFooters(doc)
    doc.save("VALIDChecklist.pdf");
 })}
