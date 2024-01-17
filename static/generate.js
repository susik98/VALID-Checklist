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
        doc.text('VALIDChecklist 2024', 20, 287, {align: 'left'})
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
    var imagePath = '/static/images/ValidChecklist_logo.png';
    
    // Load the PNG file using the loadImage function
    loadImage(imagePath).then((logo) => {
      // Create a new jsPDF instance
      var doc = new jsPDF();
    
      // Define the image properties
      var imgWidth = logo.width/13;
      var imgHeight = logo.height/13;
    
      // Add the image to the PDF
      doc.addImage(logo, 'PNG', 165, 10, imgWidth, imgHeight);
    
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
    doc.text(128, 44, 'Random assignment')}
    else {doc.rect(123, 41.3, 2.7, 2.7, 'S'),
    doc.text(128, 44, 'Random assignment')}

if (box3.checked == true){
    doc.rect(18, 45.3, 2.7, 2.7, 'F'),
    doc.text(23, 48, 'Development of instruments')}
    else {doc.rect(18, 45.3, 2.7, 2.7, 'S'),
    doc.text(23, 48, 'Development of instruments')}

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
      rowPageBreak: 'auto',
      columnStyles: {
          0: {halign: 'center', cellWidth: 20,},
          1: {halign: 'center', cellWidth: 90,},
          2: {halign: 'center', cellWidth: 20,},
          3: {halign: 'center', cellWidth: 50,}

    }});

    if (box7.checked == true || box6.checked == true){ //base items for planning stage
      doc.autoTable({
        startY: doc.lastAutoTable.finalY,
        body: [['Planning', 'Careful specification/definition of the theoretical constructs', '', ''],
              ['Planning', 'Review of theories/research that support or contradict the used definition of the construct', '', ''],
              ['Planning', 'Explicit specification of auxiliary assumptions (e.g., assumed effect of the manipulation, participants’ understanding of instructions, theories used during concept specification)', '', ''],
              ['Planning', 'Assessment of the strength of the mapping between theoretical constructs and measured variables (if possible, informing the preregistration of the study rationale)', '', ''],
              ['Planning', 'Use of tools to estimate/justify sample size (e.g., power analysis, approaches considering accuracy in parameter estimation)', '', ''],
              ['Planning', 'Consideration that effect sizes of prior published research may be inflated', '', ''],
              ['Planning', 'Creation of a carefully planned, standardized study protocol', '', ''],
              ['Planning', 'If applicable: If scales are administered at multiple time points, careful selection of the time interval between measurement occasions (e.g., to minimize burden on participants, to maximize utility of results)', '', ''],
              ['Planning', 'If possible: In case of longitudinal designs involving change patterns/trajectories, use of more than two measurement timepoints (e.g., pre/post) by, for example, establishing a baseline through multiple observations, adding further measurement occasions between the pre- and post-measurements, and/or adding further measurement occasions after the initial post measurement', '', ''],
              ['Planning', 'Whenever possible, a priori specification of rules for excluding data', '', ''],
              ['Planning', 'A priori definition of the population of interest', '', ''],
              ['Planning', 'Use of a representative sample for the population of interest (If achieving full representativeness is not feasible: Selection of a sample that reflects the key characteristics relevant to the study within the population of interest)', '', ''],
              ['Planning', 'If possible: Ensuring random selection of participants while keeping in mind the representativeness of the sample (e.g., via stratified random samples)', '', ''],
              ['Planning', 'Use of pilot studies to test stimuli/procedure', '', ''],
              ['Planning', 'Ensuring the instrument’s measurement invariance to the comparisons relevant for the current study', '', ''],
              ['Planning', 'Constant ruling-out of other possible hypotheses/explanations for the effect during theory development, for example by using logic or sensitivity analysis', '', ''],
            ],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 90,},
              2: {halign: 'left', cellWidth: 20,},
              3: {halign: 'left', cellWidth: 50,}},
            
        })
      if (box5.checked == true){ //planning items for confirmatory research
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [
              ['Planning', 'Preregistration of the project, including data collection and data analysis (deviations should be justified)', '', ''],
              ['Planning', 'Explicit specification of contextual factors and boundary conditions (under which conditions and in which circumstances the theory should apply)', '', ''],
              ['Planning', 'Articulation of how the theory is translated into the (statistical) hypotheses', '', ''],
              ['Planning', 'Formulation of working hypotheses on the processes thought to be involved in generating the data and on the expected results', '', ''],
              ['Planning', 'If possible: Making more specific predictions from a theory or hypothesis (e.g., a prediction on the point estimate effect size, a distribution of effect sizes, or a pattern of results)', '', ''],
              ['Planning', 'A priori specification of how different patterns of results will be interpreted', '', ''],
              ['Planning', 'If possible: A priori specification and justification (theoretical or pragmatic) of relevant effect sizes and the direction of predicted effects', '', ''],
              ['Planning', 'A priori specification of stopping rules for data collection', '', ''],
            ],
              theme: 'grid',
              styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
              bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
              rowPageBreak: 'auto',
              columnStyles: {
                0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 90,},
              2: {halign: 'left', cellWidth: 20,},
              3: {halign: 'left', cellWidth: 50,}},
              
          })} 

          if (box1.checked == true && box2.checked == false){ //planning items for designs using groups and random assignment
            doc.autoTable({
              startY: doc.lastAutoTable.finalY,
              body: [
                ['Planning', 'Random assignment of participants to conditions', '', '']],
                theme: 'grid',
                styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                rowPageBreak: 'auto',
                columnStyles: {
                  0: {halign: 'left', cellWidth: 20,},
                  1: {halign: 'left', cellWidth: 90,},
                  2: {halign: 'left', cellWidth: 20,},
                  3: {halign: 'left', cellWidth: 50,}}
                
            })} 

      if (box1.checked == true){ //planning items for designs using groups
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Planning', 'Random assignment of participants to conditions', '', ''],
            ['Planning', 'If feasible: No differences between groups/conditions that are noticeable by the participants (e.g., through use of placebos or other protocols)', '', ''],
            ['Planning', 'Use of one or multiple appropriate (e.g., matched) control groups', '', ''],
            ['Planning', 'If a within-person design has been used, alternation/randomization of condition order across different study participants', '', ''],
            ['Planning', 'Random assignment of participants to conditions', '', '']],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 90,},
              2: {halign: 'left', cellWidth: 20,},
              3: {halign: 'left', cellWidth: 50,}}
            
        })} 
        
        if (box3.checked == true){ //planning items for projects designing instruments
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Planning', 'Consideration of relevant factors for scale or item development (e.g., adequately spaced response options, careful wording of items and response options, verbal labeling of response options)', '', ''],
            ['Planning', 'Use of suitable/tested techniques for assessing discriminant validity, for example, by means of confirmatory factor analysis (using multiple indicators, e.g., Delta-CFI, Delta-Chi-Squared), or item response theory when testing for the uniqueness or mere relatedness of utilized constructs', '', ''],
            ['Planning', 'Consideration of a wide range of similar concepts when conducting discriminant validity analysis', '', ''],
            ['Planning', 'If possible: Assessment of convergent validity', '', ''],
            ['Planning', 'Use of enough items to fully capture the concept', '', ''],
            ['Planning', 'Assessment of construct validity in the specific context of the study/with the study´s purpose in mind', '', '']
          ],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 90,},
              2: {halign: 'left', cellWidth: 20,},
              3: {halign: 'left', cellWidth: 50,}}
            
        })} 

        if (box11.checked == true && box5.checked == true){ //planning items for confirmatory frequentist projects
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [
              ['Planning', 'If applicable: In cases involving use of linear mixed effects models (LMMs), an a priori decision has been made on the strategy used for selecting the random effects structure (e.g., maximal LMM, parsimonious LMM)', '', ''],],
              theme: 'grid',
              styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
              bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
              rowPageBreak: 'auto',
              columnStyles: {
                0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 90,},
              2: {halign: 'left', cellWidth: 20,},
              3: {halign: 'left', cellWidth: 50,}}
              
          })} 
        
        if (box4.checked == true && box5.checked == true){ //planning items for confirmatory bayesian projects
        doc.autoTable({
          startY: doc.lastAutoTable.finalY,
          body: [
            ['Planning', 'A priori definition of statistical models (likelihoods) and priors', '', ''],
            ['Planning', 'Performance of prior predictive checks to evaluate prior assumptions about the model (likelihood) and the priors (summary statistics that are used for prior and posterior predictive checking should be predefined/preregistered)', '', ''],
            ['Planning', 'Consideration of a priori expectations/definition of priors', '', ''],
            ['Planning', 'If decisions on discovery are performed, a priori definition of decision criteria', '', '']],
            theme: 'grid',
            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
            rowPageBreak: 'auto',
            columnStyles: {
              0: {halign: 'left', cellWidth: 20,},
              1: {halign: 'left', cellWidth: 90,},
              2: {halign: 'left', cellWidth: 20,},
              3: {halign: 'left', cellWidth: 50,}}
            
        })} 
        ;}

        if (box8.checked == true || box6.checked == true){ //base items data collection
          doc.autoTable({
            startY: doc.lastAutoTable.finalY,
            body: [['Collection', 'Experimental manipulations have been pretested/piloted', '', ''],
                  ['Collection', 'Assessment of the specificity of manipulations (i.e., ensuring that each manipulation only affects the intended construct)', '', ''],
                  ['Collection', 'Distinguishing between the measurement of inter- and intraindividual differences', '', ''],
                  ['Collection', 'Assessment of characteristics of the testing setting/situation and their possible influence on the results (e.g., testing locations, social desirability)', '', ''],
                  ['Collection', 'Use of screening methods/measures to identify problematic participants (e.g., inattentive responders), ideally at multiple timepoints during the study', '', ''],
                  ['Collection', 'If applicable: In case of multilab or multisite studies, assessment of how the effect of the manipulation varies across locations, participants, or other factors (e.g., by using manipulation checks)', '', ''],
                  ['Collection', 'If possible: Collection and reporting of long-term outcomes (e.g., follow-up data)', '', ''],
                ],
                theme: 'grid',
                styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                rowPageBreak: 'auto',
                columnStyles: {
                  0: {halign: 'left', cellWidth: 20,},
                  1: {halign: 'left', cellWidth: 90,},
                  2: {halign: 'left', cellWidth: 20,},
                  3: {halign: 'left', cellWidth: 50,}}
                
            })
          if (box5.checked == true){ //collection items for confirmatory projects
              doc.autoTable({
                startY: doc.lastAutoTable.finalY,
                body: [
                  ['Collection', 'If applicable: Keeping participants and, if feasible, the person collecting the data unaware of the study hypotheses', '', ''],
                  ['Collection', 'Close adherence to the protocol of the procedure (and/or preregistration) and documentation of necessary deviations', '', '']
                ],
                  theme: 'grid',
                  styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                  bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                  rowPageBreak: 'auto',
                  columnStyles: {
                    0: {halign: 'left', cellWidth: 20,},
                    1: {halign: 'left', cellWidth: 90,},
                    2: {halign: 'left', cellWidth: 20,},
                    3: {halign: 'left', cellWidth: 50,}},
                  
              })} 

              if (box5.checked == false){ //collection items for exploratory projects
                doc.autoTable({
                  startY: doc.lastAutoTable.finalY,
                  body: [
                    ['Collection', 'Ensuring consistent procedures and reporting any changes', '', ''],
                  ],
                    theme: 'grid',
                    styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                    bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                    rowPageBreak: 'auto',
                    columnStyles: {
                      0: {halign: 'left', cellWidth: 20,},
                      1: {halign: 'left', cellWidth: 90,},
                      2: {halign: 'left', cellWidth: 20,},
                      3: {halign: 'left', cellWidth: 50,}},
                    
                })}
            ;}

            if (box9.checked == true || box6.checked == true){ //base items data analysis
              doc.autoTable({
                startY: doc.lastAutoTable.finalY,
                body: [['Analysis', 'Screening of data for problematic responders either using predefined exclusion criteria or justifying all decisions made', '', ''],
                      ['Analysis', 'Analysis of missing data (e.g., for systematic patterns or data missing not completely at random)', '', ''],
                      ['Analysis', 'If applicable: Use of preregistered methods specifically developed for handling missing data (FIML, imputation, Bayesian methods) instead of mere data exclusion', '', ''],
                      ['Analysis', 'If applicable: If latent constructs are involved, use of confirmatory factor analysis to confirm their factor structure', '', ''],
                      ['Analysis', 'Valid choice of statistics considering assumptions required for using specific methods and assessing their appropriateness for the data', '', ''],
                      ['Analysis', 'Taking non-independence of observations into account (e.g., by using multilevel modelling)', '', ''],
                      ['Analysis', 'Careful checking of statistical assumptions, reporting of violations, and use of robust methods (e.g., bootstrapping, non-parametric statistical tests) when needed', '', ''],
                      ['Analysis', 'If necessary: Use of appropriate corrections for multiple testing', '', ''],
                      ['Analysis', 'Quantification of result uncertainty (e.g., via confidence or credible intervals instead of only p values)', '', ''],
                      ['Analysis', 'If possible (if defined effect sizes exist for this method): Calculation of effect sizes', '', ''],
                      ['Analysis', 'If applicable: In designs using different intervention levels (e.g., different doses of a substance), study of the dose-response relationship', '', ''],
                      ['Analysis', 'If applicable: If exclusion criteria were not pre-registered, or non-preregistered exclusion criteria are deemed to improve the validity of the test: Comparison of the results for the full sample and the sample with exclusions, ideally combined with the preregistration of the approach and possible interpretations', '', ''],
                      ['Analysis', 'Constant ruling-out of other possible hypotheses/explanations for the effect during analysis and result interpretation, for example by using logic or sensitivity analysis', '', ''],
                      ['Analysis', 'Evaluation of the viability of competing explanations (i.e., whether there are alternative hypotheses from which one could have deduced the same prediction)', '', ''],
                      ['Analysis', 'Comparison of potential explanations, concerning their scope (i.e., a theory´s ability to explain phenomena in different contexts) and simplicity (e.g., the number of assumptions required by different theoretical explanations)', '', ''],
                      ['Analysis', 'If feasible: Performing some form of robustness analysis (e.g., multiverse analysis)', '', ''],
                    ],
                    theme: 'grid',
                    styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                    bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                    rowPageBreak: 'auto',
                    columnStyles: {
                      0: {halign: 'left', cellWidth: 20,},
                      1: {halign: 'left', cellWidth: 90,},
                      2: {halign: 'left', cellWidth: 20,},
                      3: {halign: 'left', cellWidth: 50,}},
                    
                })

              if (box5.checked == true){ //analysis items for confirmatory projects
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [
                      ['Analysis', 'If possible: Use of specific theory-driven statistical models (e.g., contrasts which test for a priori specified differences between certain groups ideally combined with an a priori decision on fixed effects coding instead of omnibus tests looking for any difference)', '', ''],
                    ],
                      theme: 'grid',
                      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                      bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                      rowPageBreak: 'auto',
                      columnStyles: {
                        0: {halign: 'left', cellWidth: 20,},
                        1: {halign: 'left', cellWidth: 90,},
                        2: {halign: 'left', cellWidth: 20,},
                        3: {halign: 'left', cellWidth: 50,}},
                      
                  })} 
                
                if (box11.checked == true){ //analysis items for frequentist statistics
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [
                      ['Analysis', 'If the sample size, N, is not fixed, use of statistical methods that are specifically suited for repeated testing/continuous sampling', '', ''],],
                      theme: 'grid',
                      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                      bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                      rowPageBreak: 'auto',
                      columnStyles: {
                        0: {halign: 'left', cellWidth: 20,},
                        1: {halign: 'left', cellWidth: 90,},
                        2: {halign: 'left', cellWidth: 20,},
                        3: {halign: 'left', cellWidth: 50,}}
                      
                  })} 
                
                if (box4.checked == true){ //analysis items for Bayesian statistics
                doc.autoTable({
                  startY: doc.lastAutoTable.finalY,
                  body: [
                    ['Analysis', 'Use of posterior predictive checks to validate and improve the model', '', '']],
                    theme: 'grid',
                    styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                    bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                    rowPageBreak: 'auto',
                    columnStyles: {
                      0: {halign: 'left', cellWidth: 20,},
                      1: {halign: 'left', cellWidth: 90,},
                      2: {halign: 'left', cellWidth: 20,},
                      3: {halign: 'left', cellWidth: 50,}}
                    
                })} 

                if (box4.checked == true && box5.checked == true){ //analysis items for confirmatory bayesian statistics
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [
                      ['Analysis', 'If applicable: Bayes factors should be used to provide evidence for/against statistical hypotheses', '', ''],
                      ['Analysis', 'Use of preregistered sensitivity analyses (i.e., understanding the robustness of the results across a set of reasonable priors; reporting of robustness region)', '', '']],
                      theme: 'grid',
                      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                      bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                      rowPageBreak: 'auto',
                      columnStyles: {
                        0: {halign: 'left', cellWidth: 20,},
                        1: {halign: 'left', cellWidth: 90,},
                        2: {halign: 'left', cellWidth: 20,},
                        3: {halign: 'left', cellWidth: 50,}}
                      
                  })} 

                  if (box1.checked == true && box2.checked == true){ //analysis items for non-random conditions
                    doc.autoTable({
                      startY: doc.lastAutoTable.finalY,
                      body: [
                        ['Analysis', 'Use of baseline comparisons to compare groups on relevant criteria', '', '']],
                        theme: 'grid',
                        styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                        bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                        rowPageBreak: 'auto',
                        columnStyles: {
                          0: {halign: 'left', cellWidth: 20,},
                          1: {halign: 'left', cellWidth: 90,},
                          2: {halign: 'left', cellWidth: 20,},
                          3: {halign: 'left', cellWidth: 50,}}
                        
                    })} 
                ;}

              if (box10.checked == true || box6.checked == true){ //base items reporting
                  doc.autoTable({
                    startY: doc.lastAutoTable.finalY,
                    body: [['Reporting', 'Disclosure of all measures, manipulations, exclusions, and method of sample size determination', '', ''],
                          ['Reporting', 'Reporting scales’/measures’ reliability in the context of each study (e.g., odd/even items reliability check, split half reliability)', '', ''],
                          ['Reporting', 'Description of the sample and the study (e.g., age of participants, gender/sex ratio, other relevant demographic information, location of the study)', '', ''],
                          ['Reporting', 'Reporting of construct operationalisation', '', ''],
                          ['Reporting', 'Justification of the measure selection and/or the creation of new measures (theoretical and/or pragmatic)', '', ''],
                          ['Reporting', 'If applicable: Description of response coding, score calculation, and/or included items and modifications made to established scales', '', ''],
                          ['Reporting', 'If possible: Presentation of validity evidence for all used scales', '', ''],
                          ['Reporting', 'Specification of the analysis rationale', '', ''],
                          ['Reporting', 'Sharing of computer code used to analyze the data', '', ''],
                          ['Reporting', 'Reporting the results for all measured variables (if necessary, in the supplementary materials)', '', ''],
                          ['Reporting', 'Reporting of effect estimates together with their uncertainty', '', ''],
                          ['Reporting', 'If categorical data was created out of continuous data, presentation of descriptive statistics and effect sizes for categorical as well as continuous data', '', ''],
                          ['Reporting', 'When using covariates in exploratory analysis, presentation of both the unadjusted and adjusted models', '', ''],
                          ['Reporting', 'Explicit statement on the limitations of the study’s design', '', ''],
                          ['Reporting', 'Explicit statement on the generalizability of the results', '', ''],
                          ['Reporting', 'If applicable: Discussion of resource limitations and/or practical limitations (e.g., concerning the size of the sample)', '', ''],
                          ['Reporting', 'If possible: Sharing of the raw data set in an open access repository, such as the Open Science Framework (ideally continuously uploading data with a time stamp as data collection takes place, but data can then be made public at a later date)', '', ''],
                          ['Reporting', 'If possible: Independent replication of the study', '', '']
                        ],
                        theme: 'grid',
                        styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                        bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                        rowPageBreak: 'auto',
                        columnStyles: {
                          0: {halign: 'left', cellWidth: 20,},
                          1: {halign: 'left', cellWidth: 90,},
                          2: {halign: 'left', cellWidth: 20,},
                          3: {halign: 'left', cellWidth: 50,}},
                        
                    })

                    if (box4.checked == true){ //reporting items for Bayesian statistics
                      doc.autoTable({
                        startY: doc.lastAutoTable.finalY,
                        body: [
                          ['Reporting', 'Following established reporting guidelines (e.g., Bayesian Analysis Reporting Guidelines (Kruschke, 2021) or the Discussion points for Bayesian inference (Aczel et al., 2020))', '', '']],
                          theme: 'grid',
                          styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                          bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                          rowPageBreak: 'auto',
                          columnStyles: {
                            0: {halign: 'left', cellWidth: 20,},
                            1: {halign: 'left', cellWidth: 90,},
                            2: {halign: 'left', cellWidth: 20,},
                            3: {halign: 'left', cellWidth: 50,}}
                          
                      })} 

                      if (box4.checked == true){ //reporting items for confirmatory Bayesian statistics
                        doc.autoTable({
                          startY: doc.lastAutoTable.finalY,
                          body: [
                            ['Reporting', 'If decisions on discovery are performed, reporting of continuous evidence measure (e.g., BF) which the discrete result is based on', '', '']],
                            theme: 'grid',
                            styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                            bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                            rowPageBreak: 'auto',
                            columnStyles: {
                              0: {halign: 'left', cellWidth: 20,},
                              1: {halign: 'left', cellWidth: 90,},
                              2: {halign: 'left', cellWidth: 20,},
                              3: {halign: 'left', cellWidth: 50,}}
                            
                        })} 

                    ;}

                    doc.autoTable({ //empty rows to fill in own items
                      startY: doc.lastAutoTable.finalY,
                      body: [['', '', '', ''],
                      ['', '', '', ''],
                      ['', '', '', ''],
                      ['', '', '', ''],
                      ['', '', '', ''],
                    ],
                      theme: 'grid',
                      styles: {cellPadding: 1.5, fontSize: 9, overflow: 'linebreak',},
                      bodyStyles :{textColor: [58, 63, 82], fontStyle: 'normal',},
                      rowPageBreak: 'auto',
                      columnStyles: {
                          0: {halign: 'center', cellWidth: 20,},
                          1: {halign: 'center', cellWidth: 90,},
                          2: {halign: 'center', cellWidth: 20,},
                          3: {halign: 'center', cellWidth: 50,}
                
                    }});

    addFooters(doc)
    doc.save("VALIDChecklist.pdf");
 })}