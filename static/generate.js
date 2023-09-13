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
        doc.text('VALID Checklist 2023', 20, 287, {align: 'left'})
        doc.text('validchecklist.com', 190, 287, {align: 'right'})
      }
    }

    function loadImage(url) { 
      return new Promise((resolve) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
      });
    }
    
    // Define the path to the PNG file
    var imagePath = '/static/images/Logo_final.png';
    
    // Load the PNG file using the loadImage function
    loadImage(imagePath).then((logo) => {
      // Create a new jsPDF instance
      var doc = new jsPDF();
    
      // Define the image properties
      var imgWidth = logo.width/13;
      var imgHeight = logo.height/13;
    
      // Add the image to the PDF
      doc.addImage(logo, 'PNG', 165, 11, imgWidth, imgHeight);
    
doc.setTextColor(58, 63, 82);
doc.setFont('helvetica', 'bold')
doc.setFontSize(20)
doc.text(18, 22, "VALID Checklist 2023")

doc.setFont('helvetica', 'normal')
doc.setFontSize(12)
doc.setTextColor(58, 63, 82)
doc.text(18, 32, 'Project Name:')
doc.text(100, 32, 'Date:')
doc.setLineDash([2, 2], 0);
doc.line(47, 33, 90, 33);
doc.setLineDash([2, 2], 0);
doc.line(112, 33, 154, 33);

doc.setLineDash();

doc.setFontSize(10)
doc.setTextColor(153, 153, 153)
doc.setDrawColor(153, 153, 153)
doc.setFillColor(153, 153, 153)
doc.text(18, 40, 'The following characteristics were indicated:') //Display of the checked characteristics
if (box5.checked == true){
  doc.rect(18, 41.3, 2.7, 2.7, 'F'),
  doc.text(23, 44, 'Confirmatory Research')}
  else {doc.rect(18, 41.3, 2.7, 2.7, 'S'),
  doc.text(23, 44, 'Confirmatory Research')}

if (box1.checked == true){
    doc.rect(65, 41.3, 2.7, 2.7, 'F'),
    doc.text(70, 44, 'Groups and/or Conditions')}
    else {doc.rect(65, 41.3, 2.7, 2.7, 'S'),
    doc.text(70, 44, 'Groups and/or Conditions')}

if (box2.checked == true){
    doc.rect(116, 41.3, 2.7, 2.7, 'F'),
    doc.text(121, 44, 'Random Assignment')}
    else {doc.rect(116, 41.3, 2.7, 2.7, 'S'),
    doc.text(121, 44, 'Random Assignment')}

if (box3.checked == true){
    doc.rect(18, 45.3, 2.7, 2.7, 'F'),
    doc.text(23, 48, 'Development of Measures')}
    else {doc.rect(18, 45.3, 2.7, 2.7, 'S'),
    doc.text(23, 48, 'Development of Measures')}

if (box11.checked == true){
    doc.rect(70, 45.3, 2.7, 2.7, 'F'),
    doc.text(75, 48, 'Frequentist Statistics')}
    else {doc.rect(70, 45.3, 2.7, 2.7, 'S'),
    doc.text(75, 48, 'Frequentist Statistics')}

if (box4.checked == true){
    doc.rect(113, 45.3, 2.7, 2.7, 'F'),
    doc.text(118, 48, 'Bayesian Statistics')}
    else {doc.rect(113, 45.3, 2.7, 2.7, 'S'),
    doc.text(118, 48, 'Bayesian Statistics')}

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
      head: [['Stage', 'Item', 'Status']],
      body: [['Research Stage', 'Item Text', 'Indicate Status']],
      theme: 'grid',
      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
      headStyles :{fillColor: [89, 150, 219], textColor: [246, 248, 249], fontStyle: 'bold', halign: 'center', valign: 'middle',},
      bodyStyles :{textColor: [153, 153, 153], fontStyle: 'italic', halign: 'center', valign: 'middle',},
      rowPageBreak: 'auto',
      columnStyles: {
          0: {halign: 'center', cellWidth: 20,},
          1: {halign: 'center', cellWidth: 130,},
          2: {halign: 'center', cellWidth: 30,}

    }});

    if (box7.checked == true || box6.checked == true){ //base items for planning stage
      doc.autoTable({
        startY: doc.lastAutoTable.finalY,
        body: [['Plan', 'Use of a representative sample for the population of interest, which should be defined beforehand', ''],
              ['Plan', 'Pretesting/piloting of experimental manipulations', ''],
              ['Plan', 'Careful specification/definition of the theoretical constructs', ''],
              ['Plan', 'Explicit specification of context conditions and boundaries (under which conditions and in which circumstances the theory should apply)', ''],
              ['Plan', 'Explicit specification of auxiliary assumptions (e.g., assumed effect of the manipulation, participants´ understanding of instructions, other theories used)', ''],
              ['Plan', 'Review of theories/research that support or contradict the used definition of the construct', ''],
              ['Plan', 'Considering that effect sizes of prior published research may be inflated', ''],
              ['Plan', 'If possible: Random selection of participants, keeping in mind representativity of the sample (e.g., via stratified random samples)', ''],
              ['Plan', 'If applicable: Keeping participants and, if feasible, the person collecting the data unaware of the study hypotheses', ''],
              ['Plan', 'If applicable: If scales are administered at multiple time points, careful selection of the time interval between measurement occasions (e.g., to minimize burden on participants, to maximize utility of results)', ''],
              ['Plan', 'If decisions on discovery are performed, a priori definition of decision criteria', ''],
            ],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 130,},
              2: {halign: 'left', cellWidth: 30,}},
            
        })
      if (box5.checked == true){ //planning items for confirmatory research
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [
              ['Plan', 'Creation of a carefully planned, standardized study protocol', ''],
              ['Plan', 'Whenever possible, provide an a priori specification of rules for excluding data', ''],
              ['Plan', 'Preregistration of the project, including data collection and data analysis (deviations should be justified)', ''],
              ['Plan', 'A priori specification of result interpretation', ''],
              ['Plan', 'Formulation of working hypotheses on the processes and on the expected results', ''],
              ['Plan', 'Articulation of how the theory is translated into the (statistical) hypotheses', ''],
              ['Plan', 'Use of tools to estimate/justify sample size (e.g., power analysis, approaches considering accuracy in parameter estimation)', ''],
              ['Plan', 'If possible: A priori specification and justification (theoretical or pragmatic) of relevant effect sizes and their direction', ''],
            ],
              theme: 'grid',
              styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
              bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
              rowPageBreak: 'auto',
              columnStyles: {
                0: {halign: 'left', cellWidth: 20,},
                1: {halign: 'left', cellWidth: 130,},
                2: {halign: 'left', cellWidth: 30,}},
              
          })} 

      if (box1.checked == true){ //planning items for designs using groups
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Plan', 'In case of within-person designs, alternation of condition order', '']],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 130,},
              2: {halign: 'left', cellWidth: 30,}}
            
        })} 
      if (box2.checked == true){ //planning items for designs using groups (no random assignment)
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Plan', 'Use of baseline comparisons to compare groups on relevant criteria', ''],
            ['Plan', 'Use of one or multiple appropriate (e.g., matched) control groups', '']],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 130,},
              2: {halign: 'left', cellWidth: 30,}}
            
        })} 
        
        if (box3.checked == true){ //planning items for projects designing instruments
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Plan', 'Use of suitable/tested techniques for assessing discriminant validity', ''],
            ['Plan', 'Considering a wide range of similar concepts in discriminant validity analysis', ''],
            ['Plan', 'Assessing discriminant validity, for example, by means of confirmatory factor analysis (using multiple indicators, e.g., Delta-CFI, Delta-Chi-Squared), or item response theory when testing for the uniqueness or mere relatedness of utilized constructs', ''],
            ['Plan', 'Assessment of construct validity in the specific context of the study/with the study’s purpose in mind', ''],
            ['Plan', 'Use of enough items to fully capture the concept', ''],
            ['Plan', 'Ensuring the instrument’s measurement invariance to the comparisons relevant for the current study', ''],
            ['Plan', 'Consideration of relevant factors for scale development (e.g., adequately spaced answer scales, careful wording, verbal labeling of scale options)', ''],
            ['Plan', 'Testing scales’/measures’ reliability in the context of each study (e.g., odd/even items reliability check, split half reliability)', ''],
            ['Plan', 'If possible: Assessing convergent validity', ''],
          ],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 130,},
              2: {halign: 'left', cellWidth: 30,}}
            
        })} 

        if (box11.checked == true){ //planning items for frequentist projects
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [
              ['Plan', 'A priori specification of stopping rules for data collection', ''],
              ['Plan', 'If applicable: In case of linear mixed effects models (LMMs), a priori decision on the strategy used for selecting the random effects structure (e.g., maximal LMM, parsimonious LMM) ', '']],
              theme: 'grid',
              styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
              bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
              rowPageBreak: 'auto',
              columnStyles: {
                0: {halign: 'left', cellWidth: 20,},
                1: {halign: 'left', cellWidth: 130,},
                2: {halign: 'left', cellWidth: 30,}}
              
          })} 
        
        if (box4.checked == true){ //planning items for projects using Bayesian statistics
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Plan', 'Consideration of a priori expectations/definition of priors', ''],
            ['Plan', 'A priori definition of models (likelihoods) and priors', '']],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 130,},
              2: {halign: 'left', cellWidth: 30,}}
            
        })} 
        ;}

        if (box8.checked == true || box6.checked == true){ //base items data collection
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [['DataCo', 'Distinguishing between the measurement of inter- and intraindividual differences', ''],
                  ['DataCo', 'Use of screeners to identify problematic participants (e.g., inattentive responders), ideally at multiple timepoints during the study', ''],
                  ['DataCo', 'Use of pilot studies to test stimuli/procedure', ''],
                  ['DataCo', 'Assessment of the specificity of manipulations (i.e., ensuring that the manipulation only affects the intended construct)', ''],
                  ['DataCo', 'Consideration of any changes to data collection or recording over time (ensuring consistent procedures and reporting differences)', ''],
                  ['DataCo', 'Assessment of characteristics of the testing setting/situation and their possible influence on the results (e.g., multiple testing locations, social desirability)', ''],
                  ['DataCo', 'If applicable: For example in case of multi-lab studies, assessment of how the effect of the manipulation varies across locations, participants, or other factors (e.g., by using manipulation checks)', ''],
                ],
                theme: 'grid',
                styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                rowPageBreak: 'auto',
                columnStyles: {
                  0: {halign: 'left', cellWidth: 20,},
                  1: {halign: 'left', cellWidth: 130,},
                  2: {halign: 'left', cellWidth: 30,}},
                
            })
          if (box5.checked == true){ //collection items for confirmatory projects
              doc.autoTable({
                startY: doc.lastAutoTable.finalY,
                body: [
                  ['DataCo', 'Close adherence to the protocol and documentation of necessary deviations from the protocol', ''],
                ],
                  theme: 'grid',
                  styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                  bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                  rowPageBreak: 'auto',
                  columnStyles: {
                    0: {halign: 'left', cellWidth: 20,},
                    1: {halign: 'left', cellWidth: 130,},
                    2: {halign: 'left', cellWidth: 30,}},
                  
              })} 
            ;}

            if (box9.checked == true || box6.checked == true){ //base items data analysis
              doc.autoTable({
                startY: doc.lastAutoTable.finalY,
                body: [['DataAn', 'Valid choice of statistics considering methods’ assumptions and appropriateness for the data', ''],
                      ['DataAn', 'Careful checking of assumptions, reporting of violations, and use of robust methods when needed', ''],
                      ['DataAn', 'Quantification of result uncertainty (e.g., via CIs instead of only p values)', ''],
                      ['DataAn', 'Screening of data for problematic responders either using predefined exclusion criteria or justifying all decisions made', ''],
                      ['DataAn', 'Analysis of missing data (e.g., for patterns, missing not completely at random)', ''],
                      ['DataAn', 'Evaluation of the viability of competing explanations, i.e., whether there are alternative hypotheses from which one could have deduced the same prediction', ''],
                      ['DataAn', 'Comparison of potential explanations, e.g., concerning their scope (i.e., a theory´s ability to explain phenomena in different contexts) and simplicity (e.g., fewer assumptions)', ''],
                      ['DataAn', 'Taking non-independence into account (e.g., by using multilevel modelling)', ''],
                      ['DataAn', 'If possible (if defined effect sizes exist for this method): Calculation of effect sizes', ''],
                      ['DataAn', 'If applicable: Use of preregistered methods specifically developed for handling missing data (FIML, imputation, Bayesian methods) instead of mere data exclusion', ''],
                      ['DataAn', 'If applicable: If latent constructs are involved, use of confirmatory factor analysis to confirm their factor structure', ''],
                      ['DataAn', 'If applicable: In designs using different intervention levels (e.g., different doses of a substance), study of the dose-response relationship', ''],
                      ['DataAn', 'If feasible: Performing some form of robustness analysis (e.g., multiverse analysis)', ''],
                    ],
                    theme: 'grid',
                    styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                    bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                    rowPageBreak: 'auto',
                    columnStyles: {
                      0: {halign: 'left', cellWidth: 20,},
                      1: {halign: 'left', cellWidth: 130,},
                      2: {halign: 'left', cellWidth: 30,}},
                    
                })
              if (box5.checked == true){ //analysis items for confirmatory projects
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [
                      ['DataAn', 'If possible: Use of specific theory-driven models (e.g., testing for a priori specified differences between certain groups) instead of omnibus tests looking for any difference', ''],
                      ['DataAn', 'Else, If feasible: Use of appropriate corrections for multiple testing', ''],
                    ],
                      theme: 'grid',
                      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                      bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                      rowPageBreak: 'auto',
                      columnStyles: {
                        0: {halign: 'left', cellWidth: 20,},
                        1: {halign: 'left', cellWidth: 130,},
                        2: {halign: 'left', cellWidth: 30,}},
                      
                  })} 
                
                if (box11.checked == true){ //analysis items for frequentist statistics
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [
                      ['DataAn', 'If N is not fixed, use of statistical methods that are specifically suited for repeated testing/continuous sampling', ''],],
                      theme: 'grid',
                      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                      bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                      rowPageBreak: 'auto',
                      columnStyles: {
                        0: {halign: 'left', cellWidth: 20,},
                        1: {halign: 'left', cellWidth: 130,},
                        2: {halign: 'left', cellWidth: 30,}}
                      
                  })} 
                
                if (box4.checked == true){ //analysis items for Bayesian statistics
                doc.autoTable({
                  startY: doc.lastAutoTable.finalY,
                  body: [
                    ['DataAn', 'If applicable: Bayes factors should be used to provide evidence for/against hypotheses ', '']],
                    theme: 'grid',
                    styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                    bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                    rowPageBreak: 'auto',
                    columnStyles: {
                      0: {halign: 'left', cellWidth: 20,},
                      1: {halign: 'left', cellWidth: 130,},
                      2: {halign: 'left', cellWidth: 30,}}
                    
                })} 
                ;}

              if (box10.checked == true || box6.checked == true){ //base items reporting
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [['DataRe', 'Disclosure of all measures, manipulations, exclusions, and sample size determination', ''],
                          ['DataRe', 'Reporting the results for all measured variables (if necessary, in the supplementary materials)', ''],
                          ['DataRe', 'Description of the sample and the study (e.g., age of participants, gender/sex ratio, other relevant demographic information, location of the study)', ''],
                          ['DataRe', 'Explicit statement on the generalizability of the results', ''],
                          ['DataRe', 'Justification of the measure selection and/or the creation of new measures (theoretical and/or pragmatic)', ''],
                          ['DataRe', 'Reporting of construct operationalization', ''],
                          ['DataRe', 'Description of response coding, score calculation, included items and scale modifications', ''],
                          ['DataRe', 'Explicit statement on the design’s limitations', ''],
                          ['DataRe', 'Specification of the analysis rationale', ''],
                          ['DataRe', 'Sharing of computer code used to analyze the data', ''],
                          ['DataRe', 'If applicable: Discussion of resource limitations (e.g., concerning the size of the sample)', ''],
                          ['DataRe', 'If possible: Presentation of validity evidence for all used scales', ''],
                          ['DataRe', 'If possible: Reporting of long-term outcomes (e.g., follow-up data)', ''],
                          ['DataRe', 'If possible: Independent replication of the study', ''],
                          ['DataRe', 'If categorial data was created out of continuous data, presentation of descriptive statistics and effect sizes for categorial as well as continuous data', ''],
                          ['DataRe', 'When using covariates in exploratory analysis, presentation of both the unadjusted and adjusted models', ''],
                        ],
                        theme: 'grid',
                        styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                        bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                        rowPageBreak: 'auto',
                        columnStyles: {
                          0: {halign: 'left', cellWidth: 20,},
                          1: {halign: 'left', cellWidth: 130,},
                          2: {halign: 'left', cellWidth: 30,}},
                        
                    })
                    ;}

    addFooters(doc)
    doc.save("VALIDChecklist.pdf");
 })}