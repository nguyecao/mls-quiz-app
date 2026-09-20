// Default question bank — Hematology, Hemostasis & Coagulation, Urinalysis & Body Fluids
// Schema: { id, section, chapter, question, options: array of answer choices, answer: "A"-"D", explanation }
window.QUIZ_DEFAULT_QUESTIONS = [
  {
    "id": 1,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Insufficient centrifugation will result in:",
    "options": [
      "A false increase in hematocrit (Hct) value",
      "A false decrease in Hct value",
      "No effect on Hct value",
      "All of these options, depending on the patient"
    ],
    "answer": "A",
    "explanation": "Insufficient centrifugation does not pack down RBCs; therefore, the Hct, which is the volume of packed cells, will increase."
  },
  {
    "id": 2,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Variation in red blood cell (RBC) size observed on the peripheral blood smear is described as:",
    "options": [
      "Anisocytosis",
      "Hypochromia",
      "Poikilocytosis",
      "Pleocytosis"
    ],
    "answer": "A",
    "explanation": "A mature erythrocyte is approximately 7 to 8 μm in diameter. Variation in normal size is denoted by the term anisocytosis. Hypochromia is a term that indicates increased central pallor in erythrocytes, and poikilocytosis denotes variation in RBC shape."
  },
  {
    "id": 3,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following is the preferred site for bone marrow aspiration and biopsy in an adult?",
    "options": [
      "Iliac crest",
      "Sternum",
      "Tibia",
      "Spinous processes of a vertebra"
    ],
    "answer": "A",
    "explanation": "The iliac crest is the most frequently used site for bone marrow aspiration and biopsy. This site is the safest and most easily accessible, with the bone being just beneath the skin, and neither blood vessels nor nerves are in the vicinity."
  },
  {
    "id": 4,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Mean cell volume (MCV) is calculated by using the following formula:",
    "options": [
      "(Hgb ÷ RBC) × 10 where Hgb is hemoglobin in g/dL",
      "(Hct ÷ RBC) × 10",
      "(Hct ÷ Hgb) × 100",
      "(Hgb ÷ RBC) × 100"
    ],
    "answer": "B",
    "explanation": "MCV is the average “volume” of the RBCs. This is obtained by dividing the Hct or packed cell volume (PCV) by the RBC count in millions per microliter (μL) of blood and multiplying by 10. MCV is expressed in cubic microns (μm3) or femtoliters (fL)."
  },
  {
    "id": 5,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "What term describes the change in shape of erythrocytes seen on a Wright-stained peripheral blood smear?",
    "options": [
      "Poikilocytosis",
      "Anisocytosis",
      "Hypochromia",
      "Polychromasia"
    ],
    "answer": "A",
    "explanation": "Variation in the shape of erythrocytes on a peripheral blood smear is called poikilocytosis. Anisocytosis refers to change in size. Hypochromia is increase in central pallor in erythrocytes. Polychromasia describes the bluish tinge of the immature erythrocytes (reticulocytes) circulating in peripheral blood."
  },
  {
    "id": 6,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Calculate the mean cell hemoglobin concentration (MCHC) by using the following values: Hgb: 15 g/dL (150 g/L) Hct: 47 mL/dL (0.47) RBC: 4.50 × 106/µL (4.50 × 1012/L)",
    "options": [
      "9.5% (0.095)",
      "10.4% (0.104)",
      "31.9% (0.319)",
      "33.3% (0.333)"
    ],
    "answer": "C",
    "explanation": "MCHC is the average concentration of Hgb in RBCs expressed as a percentage. It expresses the ratio of the weight of Hgb to the volume of erythrocytes and is calculated by dividing Hgb by Hct and then multiplying by 100. A decrease in MCHC indicates that cells are hypochromic. In this example, (15 ÷ 47) × 100 = 31.9%. The reference range for MCHC is 32% to 36%."
  },
  {
    "id": 7,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A manual white blood cell (WBC) count was performed. In total 36 cells were counted in all 9-mm2 squares of a Neubauer-ruled hemacytometer. A 1:10 dilution was used. What is the WBC count?",
    "options": [
      "0.4 × 109/L",
      "2.5 × 109/L",
      "4.0 × 109/L",
      "8.0 × 109/L"
    ],
    "answer": "A",
    "explanation": "The formula used for calculating manual cell counts by using a hemacytometer is: Number of cells counted × dilution factor × depth factor (10) ÷ area. In this example, 36 × 10 × 10 = 3600 ÷ 9 = 400/mm3 or 0.4 × 109/L."
  },
  {
    "id": 8,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "When an erythrocyte containing iron granules is stained with Prussian blue, the cell is called a:",
    "options": [
      "Spherocyte",
      "Leptocyte",
      "Schistocyte",
      "Siderocyte"
    ],
    "answer": "D",
    "explanation": "Siderocytes are RBCs containing iron granules and are visible when stained with Prussian blue."
  },
  {
    "id": 9,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A 7.0-mL ethylenediaminetetraacetic acid (EDTA) tube is received in the laboratory containing only 2.0 mL of blood. If the laboratory is using manual techniques, which of the following tests will most likely be erroneous?",
    "options": [
      "RBC count",
      "Hgb",
      "Hct",
      "WBC count"
    ],
    "answer": "C",
    "explanation": "Excessive anticoagulant causes shrinkage of cells; thus, Hct will be affected. RBC and WBC counts remain the same, as does the Hgb content."
  },
  {
    "id": 10,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A 1:200 dilution of a patient’s sample was made, and 336 RBCs were counted in an area of 0.2 mm2. What is the RBC count?",
    "options": [
      "1.68 × 1012/L",
      "3.36 × 1012/L",
      "4.47 × 1012/L",
      "6.66 × 1012/L"
    ],
    "answer": "B",
    "explanation": "RBC count = number of cells counted × dilution factor × depth factor (10), ÷ area. In this example, 336 × 200 × 10 = 672,000 ÷ 0.2 = 3.36 × 106/mm3 = 3.36 × 1012/L."
  },
  {
    "id": 11,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "What phagocytic cells produce lysozymes that are bacteriocidal?",
    "options": [
      "Eosinophils",
      "Lymphocytes",
      "Platelets (PLTs)",
      "Neutrophils"
    ],
    "answer": "D",
    "explanation": "Neutrophils are highly phagocytic and release lysozymes, peroxidase, and pyrogenic proteins. Eosinophils migrate to sites where there is an allergic reaction or parasitic infestation and release peroxidase, pyrogens, and other enzymes, including an oxidase that neutralizes histamine. Eosinophils are poorly phagocytic and do not release lysozyme."
  },
  {
    "id": 12,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "If a patient has a reticulocyte count of 7% and Hct of 20%, what is the corrected reticulocyte count?",
    "options": [
      "1.4%",
      "3.1%",
      "3.5%",
      "14%"
    ],
    "answer": "B",
    "explanation": "In anemic states, the reticulocyte percentage is not a true measure of reticulocyte production. The following formula must be applied to calculate the corrected (for anemia) reticulocyte count. Corrected reticulocyte count = reticulocytes (%) × (Hct ÷ 45) where 45 is the average normal Hct. In this case, 7 × (20 ÷ 45) = 3.1."
  },
  {
    "id": 13,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A decreased osmotic fragility test would be associated with which of the following conditions?",
    "options": [
      "Sickle cell anemia",
      "Hereditary spherocytosis (HS)",
      "Hemolytic disease of the fetus and newborn",
      "Acquired hemolytic anemia"
    ],
    "answer": "A",
    "explanation": "Osmotic fragility is decreased when numerous sickle cells and target cells are present and is increased in the presence of spherocytes. Spherocytes are a prominent feature of HS, hemolytic disease of the fetus and newborn, and acquired hemolytic anemia. The osmotic fragility test reveals an increase in the presence of spherocytes, whereas a decrease is seen when sickle cells, target cells, and other poikilocytes are present."
  },
  {
    "id": 14,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "What effect would using a buffer at pH 6.0 have on a Wright-stained smear?",
    "options": [
      "RBCs would be stained too pink",
      "WBC cytoplasm would be stained too blue",
      "RBCs would be stained too blue",
      "RBCs would lyse on the slide"
    ],
    "answer": "A",
    "explanation": "The pH of the buffer is critical in Romanowsky staining. When the pH is too low (less than 6.4), the RBCs take up more acid dye (eosin), becoming too pink. Leukocytes also show poor nuclear detail when the pH is decreased."
  },
  {
    "id": 15,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following erythrocyte inclusions can be visualized with supravital stain but cannot be detected on a Wright-stained blood smear?",
    "options": [
      "Basophilic stippling",
      "Heinz bodies",
      "Howell–Jolly bodies",
      "Siderotic granules"
    ],
    "answer": "B",
    "explanation": "Heinz bodies are irregular, refractile, purple inclusions that are not visible with Wright staining but show up with supravital staining. The other three inclusions can be detected with Wright staining."
  },
  {
    "id": 16,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A falsely elevated Hct is obtained. Which of the following calculated values will not be affected?",
    "options": [
      "MCV",
      "Mean corpuscular hemoglobin (MCH)",
      "MCHC",
      "Red blood cell distribution width (RDW) Hematology/Evaluate sources of"
    ],
    "answer": "B",
    "explanation": "MCH = Hgb × 10/RBC count and is not affected by Hct. MCV = Hct × 10/RBC count, and MCHC = Hgb × 100/Hct; therefore, an erroneous Hct will affect these parameters. Centrifugal force for microhematocrit determination should be 12,000 g for 5 minutes to avoid errors caused by trapped plasma. RDW is calculated by using electronic cell counters and reflects the variance in the size of the RBC population. Electronic cell counters calculate Hct from MCV and RBC count. Therefore, RDW would be affected by an erroneous MCV."
  },
  {
    "id": 17,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A Miller disk is an ocular device used to facilitate counting of:",
    "options": [
      "PLT",
      "Reticulocytes",
      "Sickle cells",
      "Nucleated red blood cells (NRBCs)"
    ],
    "answer": "B",
    "explanation": "The manual reticulocyte count involves the counting of 1,000 RBCs. The Miller disk is a reticle (grid) that is placed in the eyepiece of the microscope and divides the field into two squares, one being nine times larger in size than the other. Reticulocytes are enumerated in both the squares. Mature RBCs are counted in the smaller one."
  },
  {
    "id": 18,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "SITUATION: RBC indices obtained on an anemic patient are as follows: MCV 88 μm3 (fL); MCH 30 pg; MCHC 34% (0.340). The RBCs on the peripheral blood smear would appear:",
    "options": [
      "Microcytic, hypochromic",
      "Microcytic, normochromic",
      "Normocytic, normochromic",
      "Normocytic, hypochromic"
    ],
    "answer": "C",
    "explanation": "MCV, MCH, and MCHC are all within the reference interval (normal range); hence, the erythrocytes should be of normal size and should reflect normal concentrations of Hgb. Therefore, the anemia is normocytic normochromic."
  },
  {
    "id": 19,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "All of the following factors may influence the erythrocyte sedimentation rate (ESR) except:",
    "options": [
      "Blood drawn into a sodium citrate tube",
      "Anisocytosis, poikilocytosis",
      "Plasma proteins",
      "Caliber of the tube"
    ],
    "answer": "A",
    "explanation": "EDTA and sodium citrate can be used without any effect on the ESR. Anisocytosis and poikilocytosis may impede rouleaux formation, thus causing a low ESR. Plasma proteins, especially fibrinogen and immunoglobulins, enhance rouleaux, increasing the ESR. Reference ranges must be established for tubes of different calibers."
  },
  {
    "id": 20,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "What staining method is used most frequently to stain and manually count reticulocytes?",
    "options": [
      "Immunofluorescence",
      "Supravital staining",
      "Romanowsky staining",
      "Cytochemical staining"
    ],
    "answer": "B",
    "explanation": "The reticulum within reticulocytes consists of ribonucleic acid (RNA), which cannot be stained with Wright stain. Supravital staining with new methylene blue is used to identify reticulocytes."
  },
  {
    "id": 21,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "The Coulter principle for counting of cells is based on the fact that:",
    "options": [
      "Isotonic solutions conduct electricity better than cells do",
      "Conductivity varies proportionally to the number of cells",
      "Cells conduct electricity better than saline does",
      "Isotonic solutions cannot conduct electricity"
    ],
    "answer": "A",
    "explanation": "Electronic cell (Coulter) counters use the principle of electrical impedance. Two electrodes suspended in isotonic solutions are separated by a glass tube that has a small aperture. A vacuum is applied, and as a cell passes through the aperture, it impedes the flow of current and generates a voltage pulse."
  },
  {
    "id": 22,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "A correction is necessary for WBC counts when NRBCs are seen on the peripheral blood smear because:",
    "options": [
      "The WBC count would be falsely lower",
      "The RBC count is too low",
      "NRBCs are counted as leukocytes",
      "NRBCs are confused with giant PLTs"
    ],
    "answer": "C",
    "explanation": "Automated hematology analyzers enumerate all nucleated cells. NRBCs are counted along with WBCs, falsely elevating the WBC count. To correct the WBC count, the number of NRBCs per 100 WBCs should be determined. Corrected WBC count = (uncorrected WBC count ÷ [NRBC’s + 100]) × 100."
  },
  {
    "id": 23,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Using an electronic cell counter analyzer, an increased RDW should correlate with:",
    "options": [
      "Spherocytosis",
      "Anisocytosis",
      "Leukocytosis",
      "Presence of NRBCs"
    ],
    "answer": "B",
    "explanation": "The RDW parameter correlates with the degree of anisocytosis seen on the morphological examination. The reference range is 11.5% to 14.5%."
  },
  {
    "id": 24,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Given the following values, which set of RBC indices suggests spherocytosis?",
    "options": [
      "MCV 76 μm3 MCH 19.9 pg MCHC 28.5%",
      "MCV 90 μm3 MCH 30.5 pg MCHC 32.5%",
      "MCV 80 μm3 MCH 36.5 pg MCHC 39.0%",
      "MCV 81 μm3 MCH 29.0 pg MCHC 34.8%"
    ],
    "answer": "C",
    "explanation": "Spherocytes have decreased cell diameter and volume, and this results in loss of central pallor and discoid shape. The index most affected is MCHC, usually being in excess of 36%."
  },
  {
    "id": 25,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following statistical terms reflects the best index of precision when comparing two complete blood count (CBC) parameters?",
    "options": [
      "Mean",
      "Median",
      "Coefficient of variation",
      "Standard deviation"
    ],
    "answer": "C",
    "explanation": "Standard deviation(s) describes the distribution of a sample of observations. It depends on the dispersion of results and is most influenced by reproducibility or precision. Because s is influenced by the mean, the coefficient of variation ([s ÷ mean] × 100) can be used to compare precision of tests with different means (e.g., WBC and RBC counts or low vs. high controls)."
  },
  {
    "id": 26,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following is considered a normal Hgb?",
    "options": [
      "Carboxyhemoglobin",
      "Methemoglobin",
      "Sulfhemoglobin",
      "Deoxyhemoglobin"
    ],
    "answer": "D",
    "explanation": "Deoxyhemoglobin is the physiological Hgb that results from the unloading of O2 by Hgb. This is accompanied by the widening of the space between β-chains and the binding of 2,3-diphosphoglycerate (2,3-DPG) on a mole-for-mole basis."
  },
  {
    "id": 27,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which condition will shift the oxyhemoglobin dissociation curve to the right?",
    "options": [
      "Acidosis",
      "Alkalosis",
      "Multiple blood transfusions",
      "Increased quantities of Hgb S or C"
    ],
    "answer": "A",
    "explanation": "Acidosis is associated with a shift to the right of the oxyhemoglobin dissociation curve and, therefore, increased O2 release (decreased affinity of Hgb for O2). Alkalosis does the opposite. Multiple blood transfusions shift the curve to the left because transfused blood is low in 2,3-DPG. Hgb S and Hgb C do not change the affinity of O2 for Hgb; however, many hemoglobinopathies do. For example, Hgb Kansas causes a right shift, and Hgb Chesapeake causes a left shift of the oxyhemoglobin dissociation curve."
  },
  {
    "id": 28,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "What is the major type of leukocyte seen in the peripheral blood smear from a patient with aplastic anemia?",
    "options": [
      "Segmented neutrophil",
      "Lymphocyte",
      "Monocyte",
      "Eosinophil"
    ],
    "answer": "B",
    "explanation": "In aplastic anemia, lymphocytes constitute the majority of the nucleated cells seen. In aplastic anemia, bone marrow is spotty, with patches of normal cellularity. Absolute granulocytopenia is usually present; however, lymphocyte production is less affected."
  },
  {
    "id": 29,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "What is the normal WBC differential lymphocyte percentage (range) in the adult population?",
    "options": [
      "5%–10%",
      "10%–20%",
      "20%–44%",
      "50%–70%"
    ],
    "answer": "C",
    "explanation": "The normal adult percentage of lymphocytes in a WBC differential is between 20% and 44%, although normal ranges vary by institution, patient population, and testing methodology. This range is higher in the pediatric population."
  },
  {
    "id": 30,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "In which age group would 60% lymphocytes be a normal finding?",
    "options": [
      "6 months–2 years",
      "4–6 years",
      "11–15 years",
      "40–60 years"
    ],
    "answer": "A",
    "explanation": "There is relative neutropenia in children from ages 4 months to 4 years. Because of this, the percentage of lymphocytes is increased in this population. This is commonly referred to as a reversal in the normal differential percentage (or inverted differential)."
  },
  {
    "id": 31,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following results on an automated differential suggests that a peripheral blood smear should be reviewed manually?",
    "options": [
      "Segs = 70%",
      "Band = 6%",
      "Mono = 15%",
      "Eos = 2%"
    ],
    "answer": "C",
    "explanation": "A relative monocyte count of 15% is abnormal, given that the baseline monocyte count in a normal differential is between 1% and 8%. An increased monocyte count may signal a myeloproliferative process, such as chronic myelomonocytic leukemia, an inflammatory response, or abnormal lymphocytes that may have been counted as monocytes by an automated cell counter."
  },
  {
    "id": 32,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which is the first stage of erythrocytic maturation in which the cytoplasm is pink because of the formation of Hgb?",
    "options": [
      "Reticulocyte",
      "Pronormoblast",
      "Basophilic normoblast",
      "Polychromatic normoblast"
    ],
    "answer": "D",
    "explanation": "In normal erythrocytic maturation, Hgb formation in the late polychromatic normoblast stage gives the cytoplasm a prominent pink coloration. The RBC continues to produce Hgb throughout the reticulocyte stage of development."
  },
  {
    "id": 33,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following can shift the Hgb oxygen (O2) dissociation curve to the right?",
    "options": [
      "Increases in 2,3 DPG",
      "Acidosis",
      "Hypoxia",
      "All of these options"
    ],
    "answer": "D",
    "explanation": "Increases in 2,3-DPG, acidosis, and hypoxia and rise in body temperature all shift the Hgb O2 dissociation curve to the right. In anemia, although the number of RBCs is reduced, the cells are more efficient at O2 delivery because there is an increase in RBC 2,3-DPG. This causes the oxyhemoglobin dissociation curve to shift to the right, allowing more O2 to be released to tissues."
  },
  {
    "id": 34,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Which of the following Hgb configurations is characteristic of Hgb H?",
    "options": [
      "γ4",
      "α2-γ2",
      "β4",
      "α2-β2"
    ],
    "answer": "C",
    "explanation": "The structure of Hgb H is β4. Hgb H disease is a severe clinical expression of α- thalassemia in which only one α-gene out of four is functioning."
  },
  {
    "id": 35,
    "section": "Basic Hematology Concepts and Laboratory Procedures",
    "chapter": "Hematology",
    "question": "Autoagglutination of RBCs at room temperature can cause which of the following abnormal test results?",
    "options": [
      "Low RBC count",
      "High MCV",
      "Low Hct",
      "All of these options"
    ],
    "answer": "D",
    "explanation": "Autoagglutination at room temperature may cause a low RBC count and high MCV"
  },
  {
    "id": 36,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Hypersplenism is characterized by:",
    "options": [
      "Polycythemia",
      "Pancytosis",
      "Leukopenia",
      "Myelodysplasia"
    ],
    "answer": "C",
    "explanation": "Hypersplenic conditions are generally described by the following four criteria: (1) cytopenias of one or more peripheral cell lines, (2) splenomegaly, (3) bone marrow hyperplasia, and (4) resolution of cytopenia by splenectomy."
  },
  {
    "id": 37,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following organs is responsible for the “pitting process” in RBCs?",
    "options": [
      "Liver",
      "Spleen",
      "Kidney",
      "Lymph nodes"
    ],
    "answer": "B",
    "explanation": "The spleen is the supreme filter of the body, pitting imperfections from the erythrocyte without destroying the integrity of the membrane."
  },
  {
    "id": 38,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Spherocytes differ from normal RBCs in all of the following except:",
    "options": [
      "Decreased surface to volume",
      "No central pallor",
      "Decreased resistance to hypotonic saline",
      "Increased deformability"
    ],
    "answer": "D",
    "explanation": "Spherocytes lose their deformability because of a defect in spectrin, a membrane protein, and are therefore prone to splenic sequestration and hemolysis."
  },
  {
    "id": 39,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following is not associated with HS?",
    "options": [
      "Increased osmotic fragility",
      "MCHC greater than 36%",
      "Intravascular hemolysis",
      "Extravascular hemolysis"
    ],
    "answer": "C",
    "explanation": "Classic features of intravascular hemolysis, such as hemoglobinemia, hemoglobinuria, or hemosiderinuria, do not occur in HS. The hemolysis seen in HS is an extravascular process, rather than an intravascular process."
  },
  {
    "id": 40,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following disorders has an increase in osmotic fragility?",
    "options": [
      "Iron deficiency anemia (IDA)",
      "Hereditary elliptocytosis (HE)",
      "Hereditary stomatocytosis",
      "Hereditary spherocytosis (HS)"
    ],
    "answer": "D",
    "explanation": "Spherocytic cells have decreased tolerance to swelling and, therefore, hemolyse at a higher concentration of sodium salt compared with normal RBCs."
  },
  {
    "id": 41,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "The anemia seen in sickle cell disease is usually:",
    "options": [
      "Microcytic, normochromic",
      "Microcytic, hypochromic",
      "Normocytic, normochromic",
      "Normocytic, hypochromic"
    ],
    "answer": "C",
    "explanation": "Sickle cell disease is a chronic hemolytic anemia classified as a normocytic, normochromic anemia."
  },
  {
    "id": 42,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which is the major Hgb found in the RBCs of patients with the sickle cell trait?",
    "options": [
      "Hgb S",
      "Hgb F",
      "Hgb A2",
      "Hgb A"
    ],
    "answer": "D",
    "explanation": "The major Hgb in sickle cell trait is Hgb A, which constitutes 50% to 70% of the total. Hgb S comprises 20% to 40%, and Hgb A2 and Hgb F are present in normal amounts."
  },
  {
    "id": 43,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Select the amino acid substitution that is responsible for sickle cell anemia.",
    "options": [
      "Lysine is substituted for glutamic acid at the sixth position of the α-chain",
      "Valine is substituted for glutamic acid at the sixth position of the β-chain",
      "Valine is substituted for glutamic acid at the sixth position of the α-chain",
      "Glutamine is substituted for glutamic acid at the sixth position of the β-chain"
    ],
    "answer": "B",
    "explanation": "The structural mutation for Hgb S is the substitution of valine for glutamic acid at the sixth position of the β-chain. Because glutamic acid is negatively charged, this decreases its rate of migration toward the anode at pH 8.6."
  },
  {
    "id": 44,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "All of the following are usually found in Hgb C disease except:",
    "options": [
      "Hgb C crystals",
      "Target cells",
      "Lysine substituted for glutamic acid at the sixth position of the β–chain",
      "Fast mobility of Hgb C at pH 8.6"
    ],
    "answer": "D",
    "explanation": "Substitution of a positively charged amino acid for a negatively charged amino acid in Hgb C disease results in a slower electrophoretic mobility at pH 8.6."
  },
  {
    "id": 45,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following Hgbs migrates to the same position as Hgb A2 at pH 8.6?",
    "options": [
      "Hgb H",
      "Hgb F",
      "Hgb C",
      "Hgb S"
    ],
    "answer": "C",
    "explanation": "At pH 8.6, several Hgbs migrate together. These include Hgb A2, Hgb C, Hgb E, Hgb 0Arab, and Hgb CHarlem. These are located nearest the cathode at pH 8.6."
  },
  {
    "id": 46,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following electrophoretic results is consistent with a diagnosis of the sickle cell trait?",
    "options": [
      "Hgb A: 40% Hgb S: 35% Hgb F: 5%",
      "Hgb A: 60% Hgb S: 40% Hgb A2: 2%",
      "Hgb A: 0% Hgb A2: 5% Hgb F: 95%",
      "Hgb A: 80% Hgb S: 10% Hgb A2: 10%"
    ],
    "answer": "B",
    "explanation": "Electrophoresis at alkaline pH usually shows 50% to 70% Hgb A, 20% to 40% Hgb S, and normal levels of Hgb A2 in a patient with the sickle cell trait."
  },
  {
    "id": 47,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "In which of the following conditions will autosplenectomy most likely occur?",
    "options": [
      "Thalassemia major",
      "Hgb C disease",
      "Hgb SC disease",
      "Sickle cell disease"
    ],
    "answer": "D",
    "explanation": "Autosplenectomy occurs in sickle cell anemia as a result of repeated infarcts to the spleen caused by an overwhelming sickling phenomenon."
  },
  {
    "id": 48,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following is most true of paroxysmal nocturnal hemoglobinuria (PNH)?",
    "options": [
      "It is a rare acquired stem cell disorder that results in hemolysis",
      "It is inherited as a sex-linked trait",
      "It is inherited as an autosomal dominant trait",
      "It is inherited as an autosomal recessive trait"
    ],
    "answer": "A",
    "explanation": "PNH is a rare acquired stem cell disorder that results in abnormalities of the RBC membrane. This causes the RBCs to become highly sensitive to complement-mediated hemolysis. Because this is a stem cell disorder, abnormalities are seen in leukocytes and PLTs, as well as in RBCs. PNH is characterized by recurrent, episodic intravascular hemolysis, hemoglobinuria, and venous thrombosis."
  },
  {
    "id": 49,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Hemolytic uremic syndrome (HUS) is characterized by all of the following except:",
    "options": [
      "Hemorrhage",
      "Thrombocytopenia",
      "Hemoglobinuria",
      "Reticulocytopenia"
    ],
    "answer": "D",
    "explanation": "Hemolytic anemia of HUS is associated with reticulocytosis. The anemia seen in HUS is multifactorial, with characteristic thrombocytopenia, schistocytes, and polychromasia commensurate with the anemia."
  },
  {
    "id": 50,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "The autohemolysis test result is positive in all of the following conditions except:",
    "options": [
      "Glucose-6-phosphate dehydrogenase (G6PD) deficiency",
      "HS",
      "Pyruvate kinase (PK) deficiency",
      "PNH"
    ],
    "answer": "D",
    "explanation": "The autohemolysis test result is positive in G6PD and PK deficiencies and in HS but is normal in PNH because lysis in PNH requires sucrose to enhance complement binding. The addition of glucose, sucrose, or adenosine triphosphate (ATP) corrects autohemolysis of HS. Autohemolysis of PK can be corrected by ATP."
  },
  {
    "id": 51,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which antibody is associated with paroxysmal cold hemoglobinuria (PCH)?",
    "options": [
      "Anti-I",
      "Anti-i",
      "Anti-M",
      "Anti-P"
    ],
    "answer": "D",
    "explanation": "PCH is caused by the anti-P antibody, a cold autoantibody that binds to the patient’s RBCs at low temperatures and fixes complement. In the classic Donath–Landsteiner test, hemolysis is demonstrated in a sample placed at 4°C then warmed to 37°C."
  },
  {
    "id": 52,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "All of the following are associated with intravascular hemolysis except:",
    "options": [
      "Methemoglobinemia",
      "Hemoglobinuria",
      "Hemoglobinemia",
      "Decreased haptoglobin"
    ],
    "answer": "A",
    "explanation": "Methemoglobin occurs when iron is oxidized to the ferric state. Normally, iron is predominantly in the ferrous state in the Hgb that circulates. During intravascular hemolysis, the RBCs rupture, releasing Hgb directly into the bloodstream. Haptoglobin is a protein that binds to free Hgb. The increased free Hgb in intravascular hemolysis causes depletion of haptoglobin. As haptoglobin is depleted, unbound Hgb dimers appear in the plasma (hemoglobinemia) and are filtered through the kidneys and reabsorbed by the renal tubular cells. The renal tubular uptake capacity is approximately 5 g/day of filtered Hgb. Beyond this level, free Hgb appears in urine (hemoglobinuria). Hemoglobinuria is associated with hemoglobinemia."
  },
  {
    "id": 53,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Autoimmune hemolytic anemia (AIHA) is best characterized by which of the following?",
    "options": [
      "Increased levels of plasma C3",
      "Spherocytic RBCs",
      "Decreased osmotic fragility",
      "Decreased unconjugated bilirubin"
    ],
    "answer": "B",
    "explanation": "Spherocytes are characteristic of AIHA and cause increased osmotic fragility. In AIHAs, production of autoantibodies against one’s own RBCs causes hemolysis or phagocytic destruction of RBCs. A positive direct antiglobulin (DAT or Coombs’) test identifies in vivo antibody-coated and complement-coated RBCs. A positive DAT result distinguishes AIHA from other types of hemolytic anemia that produce spherocytes."
  },
  {
    "id": 54,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "“Bite cells” are usually seen in patients with:",
    "options": [
      "Rh null trait",
      "Chronic granulomatous disease",
      "G6PD deficiency",
      "PK deficiency"
    ],
    "answer": "C",
    "explanation": "In patients with G6PD deficiency, the RBCs are unable to reduce nicotinamide adenine dinucleotide phosphate (NADP); consequently, Hgb is denatured, and Heinz bodies are formed. “Bite cells” appear in the peripheral circulation as a result of splenic pitting of Heinz bodies."
  },
  {
    "id": 55,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "The morphological classification of anemias is based on which of the following?",
    "options": [
      "Myeloid:erythroid (M:E) ratio",
      "Prussian blue stain",
      "RBC indices",
      "Reticulocyte count"
    ],
    "answer": "C",
    "explanation": "RBC indices classify the anemia morphologically. Anemias can be classified morphologically by using laboratory data; physiologically, based on the mechanism; and clinically, based on an assessment of symptoms."
  },
  {
    "id": 56,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following is a common finding in aplastic anemia?",
    "options": [
      "A monoclonal disorder",
      "Tumor infiltration",
      "Peripheral blood pancytopenia",
      "Defective deoxyribonucleic acid (DNA) synthesis"
    ],
    "answer": "C",
    "explanation": "Aplastic anemia has many causes, such as chemical, drug, or radiation poisoning; congenital aplasia; and Fanconi syndrome. All result in depletion of hematopoietic precursors of all cell lines, leading to peripheral blood pancytopenia."
  },
  {
    "id": 57,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Congenital dyserythropoietic anemias (CDAs) are characterized by:",
    "options": [
      "Bizarre multinucleated erythroblasts",
      "Cytogenetic disorders",
      "Megaloblastic erythropoiesis",
      "An elevated M:E ratio"
    ],
    "answer": "A",
    "explanation": "There are four classifications of CDAs, each characterized by ineffective erythropoiesis, increased unconjugated bilirubin, and bizarre multinucleated erythroid precursors."
  },
  {
    "id": 58,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Microangiopathic hemolytic anemia is characterized by:",
    "options": [
      "Target cells and Cabot rings",
      "Toxic granulation and Döhle bodies",
      "Pappenheimer bodies and basophilic stippling",
      "Schistocytes and NRBCs"
    ],
    "answer": "D",
    "explanation": "Microangiopathic hemolytic anemia is a condition resulting from shear stress to the erythrocytes. Fibrin strands are laid down within the microcirculation, and RBCs become fragmented as they contact fibrin through the circulation process, forming schistocytes."
  },
  {
    "id": 59,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which antibiotic(s) is (are) most often implicated in the development of aplastic anemia?",
    "options": [
      "Sulfonamides",
      "Penicillin",
      "Tetracycline",
      "Chloramphenicol"
    ],
    "answer": "D",
    "explanation": "Chloramphenicol is the drug most often implicated in acquired aplastic anemia. About half the cases occur within 30 days after therapy, and about half are reversible. Penicillin, tetracycline, and sulfonamides have been implicated in a small number of cases."
  },
  {
    "id": 60,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Sickle cell disorders are:",
    "options": [
      "Hereditary, intracorpuscular RBC defects",
      "Hereditary, extracorpuscular RBC defects",
      "Acquired, intracorpuscular RBC defects",
      "Acquired, extracorpuscular RBC defects"
    ],
    "answer": "A",
    "explanation": "Sickle cell disorders are intracorpuscular RBC defects that are hereditary and result in defective Hgbs being produced. The gene for sickle cell can be inherited either homozygously or heterozygously."
  },
  {
    "id": 61,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following conditions may produce spherocytes in a peripheral blood smear?",
    "options": [
      "Pelger–Huët anomaly",
      "Pernicious anemia",
      "AIHA",
      "Sideroblastic anemia"
    ],
    "answer": "C",
    "explanation": "Spherocytes are produced in AIHA. Spherocytes may be produced by one of three mechanisms. First, they are a natural morphological phase of normal RBC senescence. Second, they are produced when the cell surface:volume ratio is decreased, as seen in HS. And, third, they may be produced as a result of antibody coating of RBCs. As the antibody-coated RBCs travel through the spleen, the antibodies and portions of the RBC membrane are removed by macrophages. The membrane repairs itself; hence, the RBC’s morphology changes from a biconcave disk to a spherocyte."
  },
  {
    "id": 62,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "A patient’s peripheral blood smear reveals numerous NRBCs, marked variation of RBC morphology, and pronounced polychromasia. In addition to decreased Hgb and decreased Hct values, what other CBC parameters may be anticipated?",
    "options": [
      "Reduced PLTs",
      "Increased MCHC",
      "Increased MCV",
      "Decreased RDW"
    ],
    "answer": "C",
    "explanation": "This patient’s abnormal peripheral blood smear indicates marked RBC regeneration, causing many reticulocytes to be released from bone marrow. Because reticulocytes are larger than mature RBCs, MCV will be slightly elevated."
  },
  {
    "id": 63,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "What RBC inclusion may be seen in the peripheral blood smear from a patient postsplenectomy?",
    "options": [
      "Toxic granulation",
      "Howell–Jolly bodies",
      "Malarial parasites",
      "Siderotic granules"
    ],
    "answer": "B",
    "explanation": "As a result of splenectomy, Howell–Jolly bodies may be seen in great numbers. One of the main functions of the spleen is pitting, which allows inclusions to be removed from the RBC without destroying the cell membrane."
  },
  {
    "id": 64,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Reticulocytosis usually indicates:",
    "options": [
      "Response to inflammation",
      "Neoplastic process",
      "Aplastic anemia",
      "RBC regeneration"
    ],
    "answer": "D",
    "explanation": "Reticulocytes are polychromatophilic macrocytes, and the presence of reticulocytes indicates RBC regeneration. Bone marrow’s appropriate response to anemia is to deliver RBCs prematurely to the peripheral circulation. In this way, reticulocytes and possibly NRBCs may be seen in the peripheral blood smear."
  },
  {
    "id": 65,
    "section": "Normocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Hereditary pyropoikilocytosis (HP) is an RBC membrane defect characterized by:",
    "options": [
      "Increased pencil-shaped cells",
      "Increased oval macrocytes",
      "Misshapen budding fragmented cells",
      "Bite cells"
    ],
    "answer": "C",
    "explanation": "HP is a membrane defect characterized by a spectrin abnormality and thermal"
  },
  {
    "id": 66,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "The osmotic fragility test result in a patient with thalassemia major would most likely show:",
    "options": [
      "Increased hemolysis",
      "Decreased hemolysis",
      "Normal resistance to hemolysis",
      "Decreased hemolysis after incubation at 37°C"
    ],
    "answer": "B",
    "explanation": "Osmotic fragility is decreased because numerous target cells are present and have increased surface volume in patients with thalassemia major."
  },
  {
    "id": 67,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "All of the following are characteristic findings in a patient with IDA except:",
    "options": [
      "Microcytic, hypochromic RBC morphology",
      "Decreased serum iron and ferritin levels",
      "Decreased total iron-binding capacity (TIBC)",
      "Increased RBC protoporphyrin"
    ],
    "answer": "C",
    "explanation": "In IDA, there is an increase in TIBC and in RBC protoporphyrin. Serum iron and ferritin levels are decreased. IDA is characterized by a microcytic hypochromic anemia."
  },
  {
    "id": 68,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "IDA may be distinguished from anemia of chronic infection by:",
    "options": [
      "Serum iron level",
      "RBC morphology",
      "RBC indices",
      "TIBC"
    ],
    "answer": "D",
    "explanation": "In IDA, serum iron and ferritin levels are decreased, and TIBC and RBC protoporphyrin are increased. In chronic disease, serum iron and TIBC are both decreased because the iron is trapped in reticuloendothelial (RE) cells and is unavailable to RBCs for Hgb production."
  },
  {
    "id": 69,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "Which anemia has RBC morphology similar to that seen in IDA?",
    "options": [
      "Sickle cell anemia",
      "Thalassemia syndrome",
      "Pernicious anemia",
      "HS"
    ],
    "answer": "B",
    "explanation": "Thalassemia and IDA are both classified as microcytic, hypochromic anemias. IDA is caused by defective heme synthesis, whereas thalassemia is caused by decreased globin chain synthesis."
  },
  {
    "id": 70,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "IDA is characterized by:",
    "options": [
      "Decreased plasma iron, decreased % saturation, increased TIBC",
      "Decreased plasma iron, decreased plasma ferritin, normal RBC porphyrin",
      "Decreased plasma iron, decreased % saturation, decreased TIBC",
      "Decreased plasma iron, increased % saturation, decreased TIBC"
    ],
    "answer": "A",
    "explanation": "IDA is characterized by decreased plasma iron, increased TIBC, decreased % saturation, and microcytic, hypochromic anemia. Iron deficiency occurs in three phases: iron depletion, iron-deficient erythropoiesis, and IDA."
  },
  {
    "id": 71,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "Storage iron is usually best determined by:",
    "options": [
      "Serum transferrin levels",
      "Hgb values",
      "Myoglobin values",
      "Serum ferritin levels"
    ],
    "answer": "D",
    "explanation": "Ferritin enters serum from all ferritin-producing tissues and, therefore, is considered a good indicator of body storage iron. Because iron stores must be depleted before anemia develops, low serum ferritin levels precede the fall in serum iron associated with IDA."
  },
  {
    "id": 72,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "All of the following are associated with sideroblastic anemia except:",
    "options": [
      "Increased serum iron",
      "Ringed sideroblasts",
      "Hypochromic anemia",
      "Decreased serum ferritin"
    ],
    "answer": "D",
    "explanation": "Sideroblastic anemias are a group of disorders characterized by hypochromic anemia, ineffective erythropoiesis, an increase in serum and tissue iron, and the presence of ringed sideroblasts in bone marrow."
  },
  {
    "id": 73,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "What is the basic hematological defect seen in patients with thalassemia major?",
    "options": [
      "DNA synthetic defect",
      "Hgb structure",
      "β-chain synthesis",
      "Hgb phosphorylation"
    ],
    "answer": "C",
    "explanation": "In thalassemia major, there is little or no production of the β-chain, resulting in severely depressed or no synthesis of Hgb A. Severe anemia is seen, along with skeletal abnormalities and marked splenomegaly. The patient is usually supported with transfusion therapy."
  },
  {
    "id": 74,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following is the primary Hgb in patients with thalassemia major?",
    "options": [
      "Hgb D",
      "Hgb A",
      "Hgb C",
      "Hgb F"
    ],
    "answer": "D",
    "explanation": "Patients with thalassemia major are unable to synthesize the β-chain; hence, little or no Hgb A is produced. However, γ-chains continue to be synthesized and lead to variable elevations of Hgb F in these patients."
  },
  {
    "id": 75,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "A patient has an Hct of 30%, an Hgb of 8 g/dL, and a RBC count of 4.0 × 1012/L. What is the morphological classification of this anemia?",
    "options": [
      "Normocytic, normochromic",
      "Macrocytic, hypochromic",
      "Microcytic, hypochromic",
      "Normocytic, hyperchromic"
    ],
    "answer": "C",
    "explanation": "The indices will provide a morphological classification of this anemia. MCV is 75 fL (reference range 80–100 fL), MCH is 20 pg (reference range 27–31 pg), and MCHC is 26.6% (reference range 32%–36%). Therefore, the anemia is microcytic hypochromic."
  },
  {
    "id": 76,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "In which of the following conditions is Hgb A2 elevated?",
    "options": [
      "Hgb H",
      "Hgb SC disease",
      "β-thalassemia minor",
      "Hgb S trait"
    ],
    "answer": "C",
    "explanation": "Hgb A2 is part of the normal complement of adult Hgb. This Hgb is elevated in β- thalassemia minor because the individual with this condition has only one normal β- gene; consequently, there is a slight elevation of Hgb A2 and Hgb F."
  },
  {
    "id": 77,
    "section": "Hypochromic and Microcytic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following parameters may be similar for the anemia of inflammation and IDA?",
    "options": [
      "Normocytic indices",
      "Decreased serum iron concentration",
      "Ringed sideroblasts",
      "Pappenheimer bodies"
    ],
    "answer": "B",
    "explanation": "Thirty to fifty percent of the individuals with anemia of chronic inflammation"
  },
  {
    "id": 78,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which morphological classification is characteristic of megaloblastic anemia?",
    "options": [
      "Normocytic, normochromic",
      "Microcytic, normochromic",
      "Macrocytic, hypochromic",
      "Macrocytic, normochromic"
    ],
    "answer": "D",
    "explanation": "Megaloblastic anemia is macrocytic normochromic because there is no defect in Hgb synthesis. These anemias comprise a group of asynchronized anemias characterized by defective nuclear maturation resulting from defective DNA synthesis. This abnormality accounts for the megaloblastic features in bone marrow and macrocytosis in peripheral blood."
  },
  {
    "id": 79,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which anemia is characterized by lack of intrinsic factor that prevents B12 absorption?",
    "options": [
      "Tropical sprue",
      "Transcobalamin deficiency",
      "Blind loop syndrome",
      "Pernicious anemia"
    ],
    "answer": "D",
    "explanation": "Pernicious anemia is caused by lack of intrinsic factor, which prevents vitamin B12 absorption."
  },
  {
    "id": 80,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "All of the following are characteristics of megaloblastic anemia except:",
    "options": [
      "Pancytopenia",
      "Elevated reticulocyte count",
      "Hypersegmented neutrophils",
      "Macrocytic erythrocyte indices"
    ],
    "answer": "B",
    "explanation": "Megaloblastic anemias are associated with ineffective erythropoiesis and, therefore, a decrease in the reticulocyte count."
  },
  {
    "id": 81,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "A patient with a vitamin B12 anemia is prescribed a high dosage of folate. Which of the following is expected as a result of this treatment?",
    "options": [
      "An improvement in neurological problems",
      "An improvement in hematological abnormalities",
      "No expected improvement",
      "Toxicity of the liver and kidneys"
    ],
    "answer": "B",
    "explanation": "Administration of folic acid to a patient with vitamin B12 deficiency will correct the hematological abnormalities, but the neurological problems will persist. This helps confirm the correct diagnosis of vitamin B12 deficiency."
  },
  {
    "id": 82,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following disorders is associated with ineffective erythropoiesis?",
    "options": [
      "G6PD deficiency",
      "Liver disease",
      "Hgb C disease",
      "Megaloblastic anemia"
    ],
    "answer": "D",
    "explanation": "Ineffective erythropoiesis is caused by destruction of erythroid precursor cells prior to their release from bone marrow. Pernicious anemia results from defective DNA synthesis; it is suggested that the asynchronous development of RBCs renders them more prone to intramedullary destruction."
  },
  {
    "id": 83,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "A 50-year-old patient is suffering from pernicious anemia. Which of the following laboratory data are most likely for this patient?",
    "options": [
      "RBC = 2.5 × 1012/L; WBC = 12,500/µL (12.5 × 109/L); PLT = 250,000/µL (250 × 109/L)",
      "RBC = 4.5 × 1012/L; WBC = 6,500/µL (6.5 × 109/L); PLT = 150,000/µL (150 × 109/L)",
      "RBC = 3.0 × 1012/L; WBC = 5,000/μL (5.0 × 109/L); PLT = 750,000/µL (750 × 109/L)",
      "RBC = 2.5 × 1012/L; WBC = 2,500/µL (2.5 × 109/L); PLT = 50,000/µL (50 × 109/L)"
    ],
    "answer": "D",
    "explanation": "Patients with pernicious anemia demonstrate pancytopenia with low WBC, PLT, and RBC counts. Because this is a megaloblastic process and a DNA maturation defect, all cell lines are affected. In bone marrow, this results in abnormally large precursor cells, maturation asynchrony, hyperplasia of all cell lines, and a low M:E ratio."
  },
  {
    "id": 84,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following may be seen in the peripheral blood smear from a patient with obstructive liver disease?",
    "options": [
      "Schistocytes",
      "Macrocytes",
      "Howell–Jolly bodies",
      "Microcytes"
    ],
    "answer": "B",
    "explanation": "Patients with obstructive liver disease may have macrocytes on their peripheral blood smear because of an increased tendency toward deposition of lipid on the surface of RBCs. Consequently, the RBCs are larger or more macrocytic than normal RBCs."
  },
  {
    "id": 85,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "The macrocytes typically seen in megaloblastic processes are:",
    "options": [
      "Crescent shaped",
      "Teardrop shaped",
      "Oval shaped",
      "Pencil shaped"
    ],
    "answer": "C",
    "explanation": "Macrocytes in true megaloblastic conditions are oval, as opposed to the round shape of macrocytes usually seen in alcoholism and obstructive liver disease."
  },
  {
    "id": 86,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "Which of the following are most characteristic of the RBC indices associated with megaloblastic anemias?",
    "options": [
      "MCV 99 fL, MCH 28 pg, MCHC 31%",
      "MCV 62 fL, MCH 27 pg, MCHC 30%",
      "MCV 125 fL, MCH 36 pg, MCHC 34%",
      "MCV 78 fL, MCH 23 pg, MCHC 30%"
    ],
    "answer": "C",
    "explanation": "The RBC indices in a patient with megaloblastic anemia are macrocytic and normochromic. The macrocytosis is prominent, with MCV ranging from 100 to 130 fL."
  },
  {
    "id": 87,
    "section": "Macrocytic and Normochromic Anemias",
    "chapter": "Hematology",
    "question": "A patient has 80 NRBCs per 100 leukocytes. In addition to increased polychromasia on the peripheral blood smear, what other finding may be present on the CBC?",
    "options": [
      "Increased PLTs",
      "Increased MCV",
      "Increased Hct",
      "Increased RBC count"
    ],
    "answer": "B",
    "explanation": "The patient will have increased MCV. One of the causes of a macrocytic anemia that"
  },
  {
    "id": 88,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Which of the following is an unusual complication that may occur in infectious mononucleosis?",
    "options": [
      "Splenic infarctions",
      "Dactylitis",
      "Hemolytic anemia",
      "Giant PLTs"
    ],
    "answer": "C",
    "explanation": "Occasionally patients with infectious mononucleosis develop a potent cold agglutinin with anti-I specificity. This cold autoantibody can cause strong hemolysis and hemolytic anemia."
  },
  {
    "id": 89,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "In a patient with HIV infection, one should expect to see:",
    "options": [
      "Shift to the left in WBCs",
      "Target cells",
      "Reactive lymphocytes",
      "Pelgeroid cells"
    ],
    "answer": "C",
    "explanation": "HIV infection brings about several hematological abnormalities seen on peripheral blood smear examination; most patients demonstrate reactive lymphocytes and have granulocytopenia."
  },
  {
    "id": 90,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Which inclusions may be seen in leukocytes?",
    "options": [
      "Döhle bodies",
      "Basophilic stippling",
      "Malarial parasites",
      "Howell–Jolly bodies"
    ],
    "answer": "A",
    "explanation": "Döhle bodies are RNA-rich areas within polymorphonuclear neutrophils (PMNs) that are oval and light blue. Although often associated with infectious states, they are seen in a wide range of conditions and toxic reactions, including hemolytic and pernicious anemias, chronic granulocytic leukemia, and therapy with antineoplastic drugs. The other inclusions are associated with erythrocytes."
  },
  {
    "id": 91,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Which of the following is contained in the primary granules of the neutrophil?",
    "options": [
      "Lactoferrin",
      "Myeloperoxidase",
      "Histamine",
      "Alkaline phosphatase"
    ],
    "answer": "B",
    "explanation": "Myeloperoxidase, lysozyme, and acid phosphatase are enzymes that are contained in the primary granules of neutrophils. The contents of secondary and tertiary granules include lactoferrin, collagenase, NADPH oxidase, and alkaline phosphatase."
  },
  {
    "id": 92,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "What is the typical reference range for relative lymphocyte percentage in the peripheral blood smear from a 1-year-old child?",
    "options": [
      "1%–6%",
      "27%–33%",
      "35%–58%",
      "50%–70%"
    ],
    "answer": "D",
    "explanation": "The mean relative lymphocyte percentage for a 1-year-old child is 61% compared with the mean lymphocyte percentage of 35% in an adult."
  },
  {
    "id": 93,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Qualitative and quantitative neutrophil changes noted in response to infection include all of the following except:",
    "options": [
      "Neutrophilia",
      "Pelgeroid hyposegmentation",
      "Toxic granulation",
      "Vacuolization"
    ],
    "answer": "B",
    "explanation": "Neutrophil changes associated with infection may include neutrophilia, shift to the left, toxic granulation, Döhle bodies, and vacuolization. Pelgeroid hyposegmentation is noted in neutrophils from individuals with congenital Pelger–Huët anomaly and those with an acquired anomaly induced by drug ingestion or secondary to certain conditions, such as leukemia."
  },
  {
    "id": 94,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Neutropenia is present in patients with which absolute neutrophil count?",
    "options": [
      "Less than 1.5 × 109/L",
      "Less than 5.0 × 109/L",
      "Less than 10.0 × 109/L",
      "Less than 15.0 × 109/L"
    ],
    "answer": "A",
    "explanation": "Neutropenia is defined as an absolute decrease in the number of circulating neutrophils. This condition is present in patients having neutrophil counts of less than 1.5 × 109/L."
  },
  {
    "id": 95,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "The morphological characteristic(s) associated with Chédiak–Higashi syndrome is (are):",
    "options": [
      "Pale blue cytoplasmic inclusions",
      "Giant lysosomal granules",
      "Small, dark-staining granules and condensed nuclei",
      "Nuclear hyposegmentation"
    ],
    "answer": "B",
    "explanation": "Chédiak–Higashi syndrome is a disorder of neutrophil phagocytic dysfunction caused by depressed chemotaxis and delayed degranulation. The degranulation disturbance is attributed to interference from the giant lysosomal granules characteristic of this disorder."
  },
  {
    "id": 96,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "The familial condition of Pelger–Huët anomaly is important to recognize because this disorder must be differentiated from:",
    "options": [
      "Infectious mononucleosis",
      "May–Hegglin anomaly",
      "A shift-to-the-left increase in immature granulocytes",
      "G6PD deficiency"
    ],
    "answer": "C",
    "explanation": "Pelger–Huët anomaly is a benign familial condition reported in 1 out of 6,000 individuals. Care must be taken to differentiate Pelger–Huët cells from the numerous band neutrophils and metamyelocytes that may be observed during severe infection or a shift-to-the-left of immaturity in granulocyte stages."
  },
  {
    "id": 97,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "SITUATION: A differential shows reactive lymphocytes, and the physician suspects that a viral infection is the cause. What is the expected laboratory finding in a patient with a cytomegalovirus (CMV) infection?",
    "options": [
      "Heterophile antibody: positive",
      "Epstein–Barr virus (EBV)–immunoglobulin M (IgM): positive",
      "Direct antiglobulin test (DAT): positive",
      "CMV–IgM: positive"
    ],
    "answer": "D",
    "explanation": "If both the heterophile antibody test and the EBV-IgM tests yield negative results in a patient with reactive lymphocytosis and a suspected viral infection, serum should be analyzed for IgM antibodies to CMV. CMV belongs to the herpes virus family and is endemic worldwide. CMV infection is the most common cause of heterophile-negative infectious mononucleosis."
  },
  {
    "id": 98,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Neutrophil phagocytosis and particle ingestion are associated with an increase in O2 utilization called respiratory burst. What are the two most important products of this biochemical reaction?",
    "options": [
      "Hydrogen peroxide (H2O2) and superoxide anion (O2–)",
      "Lactoferrin and NADPH oxidase",
      "Cytochrome b and collagenase",
      "Alkaline phosphatase and ascorbic acid"
    ],
    "answer": "A",
    "explanation": "The biochemical products of the respiratory burst involved in neutrophil particle ingestion during phagocytosis are H2O2 and O2–. The activated neutrophil discharges the enzyme NADPH oxidase into the phagolysosome, where it converts O2 to O2–, which is then reduced to H2O2."
  },
  {
    "id": 99,
    "section": "Qualitative and Quantitative White Blood Cell Disorders",
    "chapter": "Hematology",
    "question": "Which of the morphological findings are characteristic of reactive lymphocytes?",
    "options": [
      "High nuclear:cytoplasmic (N:C) ratio",
      "Prominent nucleoli",
      "Basophilic cytoplasm",
      "All of these options"
    ],
    "answer": "D",
    "explanation": "Both reactive lymphocytes and blasts may have basophilic cytoplasm, a high N:C"
  },
  {
    "id": 100,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Auer rods may be seen in all of the following except:",
    "options": [
      "Acute myelomonocytic leukemia (M4)",
      "Acute lymphoblastic leukemia (ALL)",
      "Acute myeloid leukemia without maturation (AML:M1)",
      "Acute promyelocytic leukemia (PML; M3)"
    ],
    "answer": "B",
    "explanation": "Auer rods are not seen characteristically in lymphoblasts. They may be seen in myeloblasts, promyelocytes, and monoblasts."
  },
  {
    "id": 101,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Which type of anemia is usually present in a patient with acute leukemia?",
    "options": [
      "Microcytic, hyperchromic",
      "Microcytic, hypochromic",
      "Normocytic, normochromic",
      "Macrocytic, normochromic"
    ],
    "answer": "C",
    "explanation": "Acute leukemia is usually associated with a normocytic normochromic anemia. Anemia in acute leukemia is usually present from the onset and may be severe; however, there is no inherent nutritional deficiency leading to a microcytic, hypochromic, or megaloblastic process."
  },
  {
    "id": 102,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "In leukemia, which term describes the peripheral blood finding of leukocytosis with a shift to the left, accompanied by NRBCs?",
    "options": [
      "Myelophthisis",
      "Dysplasia",
      "Leukoerythroblastosis",
      "Megaloblastosis"
    ],
    "answer": "C",
    "explanation": "The presence of immature leukocytes and NRBCs is called leukoerythroblastosis and frequently denotes a malignant or myeloproliferative process. Myelophthisis refers to replacement of bone marrow by a disease process, such as a neoplasm. The development of abnormal tissue is called dysplasia."
  },
  {
    "id": 103,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "The basic pathophysiological mechanisms responsible for producing signs and symptoms in leukemia include all of the following except:",
    "options": [
      "Replacement of normal marrow precursors by leukemic cells causing anemia",
      "Decrease in functional leukocytes causing infection",
      "Hemorrhage secondary to thrombocytopenia",
      "Decreased erythropoietin production"
    ],
    "answer": "D",
    "explanation": "A normal physiological response to anemia would be an increase in the kidney’s production of erythropoietin. The accumulation of leukemic cells in bone marrow leads to marrow failure, which manifests as anemia, thrombocytopenia, and granulocytopenia."
  },
  {
    "id": 104,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Which type of acute myeloid leukemia is called the true monocytic leukemia and follows an acute or subacute course characterized by monoblasts, promonocytes, and monocytes?",
    "options": [
      "Acute myeloid leukemia, minimally differentiated",
      "Acute myeloid leukemia, without maturation",
      "Acute myelomonocytic leukemia",
      "Acute monocytic leukemia"
    ],
    "answer": "D",
    "explanation": "Acute monocytic leukemia has an incidence of 1% to 8% of all acute leukemias. It has a distinctive clinical manifestation of monocytic involvement, resulting in skin and gum hyperplasia. The WBC count is markedly elevated, and prognosis is poor."
  },
  {
    "id": 105,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "In which age group does ALL occur with the highest frequency?",
    "options": [
      "1–15 years",
      "20–35 years",
      "45–60 years",
      "60–75 years"
    ],
    "answer": "A",
    "explanation": "ALL usually affects children from ages 1 to 15 years and is the most common type of acute leukemia in this age group. In addition, ALL constitutes the single most prevalent malignancy in pediatric patients."
  },
  {
    "id": 106,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Disseminated intravascular coagulation (DIC) is most often associated with which of the following types of acute leukemia?",
    "options": [
      "Acute myeloid leukemia, without maturation",
      "Acute promyelocytic leukemia (PML)",
      "Acute myelomonocytic leukemia",
      "Acute monocytic leukemia"
    ],
    "answer": "B",
    "explanation": "In patients with acute PML, the azurophilic granules in the leukemic promyelocytes contain thromboplastic substances. When released from promyelocytes, these activate soluble coagulation factors causing DIC."
  },
  {
    "id": 107,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "An M:E ratio of 10:1 is most often seen in:",
    "options": [
      "Thalassemia",
      "Leukemia",
      "Polycythemia vera (PV)",
      "Myelofibrosis"
    ],
    "answer": "B",
    "explanation": "A disproportionate increase in the myeloid component of bone marrow is usually the result of a leukemic state. The normal M:E ratio is approximately 4:1 in adults with normal cellularity."
  },
  {
    "id": 108,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Which of the following is a characteristic of Auer rods?",
    "options": [
      "They are composed of azurophilic granules",
      "They stain positive on periodic acid–Schiff (PAS) staining",
      "They are predominantly seen in chronic myelogenous leukemia (CML)",
      "They are nonspecific esterase positive"
    ],
    "answer": "A",
    "explanation": "Auer rods are a linear projection of primary azurophilic granules and are present in the cytoplasm of myeloblasts and monoblasts in patients with acute leukemia."
  },
  {
    "id": 109,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "SITUATION: The following laboratory values are seen: WBC = 6.0 × 109/L Hgb = 6.0 g/dL RBC = 1.90 × 1012/L Hct = 18.5% PLT = 130 × 109/L Serum vitamin B12 and folic acid: normal WBC Differential Bone Marrow 6% PMNs 40% myeloblasts 40% lymphocytes 60% promegaloblasts 4% monocytes 40 megaloblastoid NRBCs/100 WBCs 50% blasts These results are most characteristic of:",
    "options": [
      "Pernicious anemia",
      "Acute myeloid leukemia, without maturation",
      "Acute erythroid leukemia",
      "Acute myelomonocytic leukemia"
    ],
    "answer": "C",
    "explanation": "In acute erythroid leukemia, greater than 50% of nucleated bone marrow cells are erythroid and greater than 30% nonerythroid cells are blasts. Pernicious anemia results in pancytopenia and low vitamin B12 concentrations."
  },
  {
    "id": 110,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "A 24-year-old man with Down syndrome presents with fever, pallor, lymphadenopathy, and hepatosplenomegaly. His CBC results are as follows: WBC = 10.8 × 109/L RBC = 1.56 × 1012/L 8% PMNs Hgb = 3.3 g/dL 25% lymphocytes Hct = 11% 67% PAS-positive blasts PLT = 2.5 × 109/L These findings are suggestive of:",
    "options": [
      "Hodgkin lymphoma",
      "Myeloproliferative disorder",
      "Leukemoid reaction",
      "Acute lymphocytic leukemia"
    ],
    "answer": "D",
    "explanation": "Common signs of ALL are hepatosplenomegaly (65%), lymphadenopathy (50%), and fever (60%). Anemia and thrombocytopenia are usually present, and the WBC count is variable. The numerous lymphoblasts are generally PAS positive."
  },
  {
    "id": 111,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "SITUATION: A peripheral blood smear shows 75% blasts. These stain positive for both Sudan Black B (SBB) and peroxidase. Given these values, which of the following disorders is most likely?",
    "options": [
      "Acute myelocytic leukemia (AML)",
      "CML",
      "Acute undifferentiated leukemia (AUL)",
      "ALL"
    ],
    "answer": "A",
    "explanation": "AML blasts stain positive for SBB and peroxidase. Usually, less than 10% blasts are found in peripheral blood smears from patients with CML, unless there has been a transition to blast crisis. The organelles in the cells of AUL are not mature enough to stain positive for SBB or peroxidase. Blasts in ALL are characteristically negative with these stains."
  },
  {
    "id": 112,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "In myeloid cells, the stain that selectively identifies phospholipid in the membranes of both primary and secondary granules is:",
    "options": [
      "PAS",
      "Myeloperoxidase",
      "SBB",
      "Terminal deoxynucleotidyl transferase (TdT)"
    ],
    "answer": "C",
    "explanation": "Phospholipids, neutral fats, and sterols are stained by SBB. The PAS reaction stains intracellular glycogen. Myeloperoxidase is an enzyme present in the primary granules of myeloid cells and, to a lesser degree, in monocytic cells. TdT is a DNA polymerase found in thymus-derived lymphocytes and some bone marrow–derived lymphocytes."
  },
  {
    "id": 113,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Sodium fluoride may be added to the naphthyl ASD acetate (NASDA) esterase reaction. The fluoride is added to inhibit a positive reaction with:",
    "options": [
      "Megakaryocytes",
      "Monocytes",
      "Erythrocytes",
      "Granulocytes"
    ],
    "answer": "B",
    "explanation": "NASDA stains monocytes (and monoblasts) and granulocytes (and myeloblasts). The addition of fluoride renders monocytic cells (and blasts) negative, thus allowing for differentiation from granulocytic cells, which remain positive."
  },
  {
    "id": 114,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Leukemic lymphoblasts reacting with anti–common acute lymphoblastic leukemia antigen (anti-CALLA) are characteristically seen in:",
    "options": [
      "B-cell ALL",
      "T-cell ALL",
      "Null-cell ALL",
      "Common ALL"
    ],
    "answer": "D",
    "explanation": "The majority of non-T, non-B ALL blast cells display the CALLA marker. Lymphoblasts of common ALL are TdT positive and CALLA positive but do not have surface membrane IgM or μ-chains and are pre-B lymphoblasts. Common ALL has a lower relapse rate and better prognosis compared with other immunologic subtypes of B-cell ALL."
  },
  {
    "id": 115,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Which of the following reactions are often positive in ALL but are negative in AML?",
    "options": [
      "TdT and PAS",
      "Chloroacetate esterase and nonspecific esterase",
      "SBB and peroxidase",
      "New methylene blue and acid phosphatase"
    ],
    "answer": "A",
    "explanation": "PAS is positive in about 50% of ALL with L1 and L2 morphology but is negative in ALL with L3 morphology (B-cell ALL). TdT is positive in all types of ALL except L3. Both TdT and PAS are negative in AML."
  },
  {
    "id": 116,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "A patient’s peripheral blood smear and bone marrow both show 70% blasts. These cells are negative on SBB staining. Given these data, which of the following is the most likely diagnosis?",
    "options": [
      "AML",
      "Chronic lymphocytic leukemia (CLL)",
      "Acute PML",
      "ALL"
    ],
    "answer": "D",
    "explanation": "SBB stains phospholipids and other neutral fats. It is the most sensitive stain for granulocytic precursors. Lymphoid cells rarely stain positive with SBB. Because 70% lymphoblasts would never be seen in CLL, the correct response is ALL."
  },
  {
    "id": 117,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Which of the following leukemias are included in the 2008 World Health Organization classification of myeloproliferative neoplasms (MPN)?",
    "options": [
      "CML",
      "Chronic neutrophilic leukemia (CNL)",
      "Chronic eosinophilic leukemia (CEL)",
      "All of these options are classified as MPN"
    ],
    "answer": "D",
    "explanation": "The WHO classification system includes the following disorders under MPN: CML, CNL, CEL, essential thrombocythemia (ET), PV, primary (idiopathic) myelofibrosis, hypereosinophilic syndrome, mast cell disease, and MPNs unclassified."
  },
  {
    "id": 118,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "In addition to morphology, cytochemistry, and immunophenotyping, the WHO classification of myelo- and lymphoproliferative disorders is based on which characteristic?",
    "options": [
      "Proteomics",
      "Cytogenetic abnormalities",
      "Carbohydrate-associated tumor antigen production",
      "Cell signaling and adhesion markers"
    ],
    "answer": "B",
    "explanation": "In addition to morphology, cytochemical stains, and flow cytometry, the WHO classification relies heavily on chromosomal and molecular abnormalities."
  },
  {
    "id": 119,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "The WHO classification requires what percentage for the blast count in blood or bone marrow for the diagnosis of AML?",
    "options": [
      "At least 30%",
      "At least 20%",
      "At least 10%",
      "Any percentage"
    ],
    "answer": "B",
    "explanation": "The WHO classification of AML requires that 20% or greater of nucleated bone marrow cells be blasts, whereas the French–American-British (FAB) classification generally requires 30% or greater. The WHO classifies AML into five subgroups: acute myeloid leukemias with recurrent genetic disorders; acute myeloid leukemia with multilineage dysplasia; acute myeloid leukemia and myelodysplastic syndromes, therapy related; acute myeloid leukemia (not otherwise categorized); and acute leukemia of ambiguous lineage."
  },
  {
    "id": 120,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "What would be the most likely designation by the WHO for AML M2 by the FAB classification?",
    "options": [
      "AML with t(15;17)",
      "AML with mixed lineage",
      "AML with t(8;21)",
      "AML with inv(16)"
    ],
    "answer": "C",
    "explanation": "AML with t(8;21) is classified under the category “AML with Recurrent Genetic Abnormalities” by the WHO. This translocation occurs in up to 15% of cases of AML and may be the most common translocation. The AML1–ETO translocation occurs chiefly in younger patients and often in cases of acute myeloblastic leukemia with maturation, FAB M2. The translocation involves the fusion of the AML1 gene on chromosome 21 with the ETO gene on chromosome 8."
  },
  {
    "id": 121,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "What would be the most likely designation by the WHO for AML M3 by the FAB classification?",
    "options": [
      "AML with t(15;17)",
      "AML with mixed lineage",
      "AML with t(8;21)",
      "AML with inv(16)"
    ],
    "answer": "A",
    "explanation": "AML with t(15;17) is classified under the category “AML with Recurrent Genetic Abnormalities” by the WHO. Acute PML (known as M3 under the FAB system) is composed of abnormal promyelocytes with heavy granulation, sometimes obscuring the nucleus, and abundant cytoplasm. Acute PML contains a translocation that results in the fusion of a transcription factor called PML on chromosome 15 with the alpha (α)-retinoic acid receptor gene (RARα) on chromosome 17."
  },
  {
    "id": 122,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "Which AML cytogenetic abnormality is associated with AML M4 with marrow eosinophilia under the WHO classification of AML with recurrent genetic abnormalities?",
    "options": [
      "AML with t(15;17)",
      "AML with mixed lineage",
      "AML with t(8;21)",
      "AML with inv(16)"
    ],
    "answer": "D",
    "explanation": "AML with inv(16) has pericentric inversion of chromosome 16 and is associated with M4 with marrow eosinophilia, M4eo under the FAB system. The inv(16) results in the fusion of the CBFβ gene on 16q22 with the MYH11 gene on 16p13."
  },
  {
    "id": 123,
    "section": "Acute Leukemias",
    "chapter": "Hematology",
    "question": "What would be the most likely classification by the WHO for AML M7 by the FAB classification?",
    "options": [
      "Acute myeloid leukemias with recurrent genetic abnormalities",
      "Acute myeloid leukemia with multilineage dysplasia",
      "Acute megakaryoblastic leukemia classified under AML (not otherwise categorized)",
      "Acute leukemias of ambiguous lineage"
    ],
    "answer": "C",
    "explanation": "Acute megakaryoblastic leukemia, which is equivalent to FAB M7, is a relatively"
  },
  {
    "id": 124,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Repeated phlebotomy in patients with PV may lead to the development of:",
    "options": [
      "Folic acid deficiency",
      "Sideroblastic anemia",
      "IDA",
      "Hemolytic anemia"
    ],
    "answer": "C",
    "explanation": "The most common treatment modality utilized in PV is phlebotomy. Reduction of blood volume (usually 1 unit of whole blood—450 cc) can be performed weekly or even twice weekly in younger patients to control symptoms. The Hct target range is less than 45% for men and less than 42% for women. IDA is a predictable complication of therapeutic phlebotomy because approximately 250 mg of iron is removed with each unit of blood."
  },
  {
    "id": 125,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "In ET, the PLTs are:",
    "options": [
      "Increased in number and functionally abnormal",
      "Normal in number and functionally abnormal",
      "Decreased in number and functional",
      "Decreased in number and functionally abnormal"
    ],
    "answer": "A",
    "explanation": "In ET, the PLT count is extremely elevated. These PLTs are abnormal in function, leading to both bleeding and thrombotic diathesis."
  },
  {
    "id": 126,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Which of the following cells is considered pathognomonic for Hodgkin disease?",
    "options": [
      "Niemann–Pick cells",
      "Reactive lymphocytes",
      "Flame cells",
      "Reed–Sternberg (RS) cells"
    ],
    "answer": "D",
    "explanation": "The morphological common denominator in Hodgkin lymphoma is the RS cell. It is a large, binucleated cell with a dense nucleolus surrounded by clear space. These characteristics give the RS cell an “owl’s eye” appearance. Niemann–Pick cells (foam cells) are histiocytes containing phagocytized sphingolipids that stain pale blue and impart a foamlike texture to the cytoplasm. Flame cells are plasma cells with a distinctive red cytoplasm. They are sometimes seen in the bone marrow of patients with multiple myeloma."
  },
  {
    "id": 127,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "In myelofibrosis, the characteristic abnormal RBC morphology is that of:",
    "options": [
      "Target cells",
      "Schistocytes",
      "Teardrop-shaped cells",
      "Ovalocytes"
    ],
    "answer": "C",
    "explanation": "The marked amount of fibrosis, both medullary and extramedullary, accounts for the irreversible change in RBC morphology to a teardrop shape. The RBCs are “teared” as they attempt to pass through the fibrotic tissue."
  },
  {
    "id": 128,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "PV is characterized by:",
    "options": [
      "Increased plasma volume",
      "Pancytopenia",
      "Decreased O2 saturation",
      "Absolute increase in total RBC mass"
    ],
    "answer": "D",
    "explanation": "The diagnosis of PV requires the demonstration of an increase in RBC mass. Pancytosis may also be seen in about two thirds of PV cases. Plasma volume is normal or slightly reduced, and arterial O2 saturation is usually normal."
  },
  {
    "id": 129,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Features of secondary polycythemia include all of the following except:",
    "options": [
      "Splenomegaly",
      "Decreased O2 saturation",
      "Increased RBC mass",
      "Increased erythropoietin"
    ],
    "answer": "A",
    "explanation": "Splenomegaly is a feature of PV but not characteristic of secondary polycythemia. The RBC mass is increased in both primary polycythemia (PV) and secondary polycythemia. Erythropoietin is increased, and O2 saturation is decreased in secondary polycythemia."
  },
  {
    "id": 130,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Erythrocytosis in relative polycythemia occurs because of:",
    "options": [
      "Decreased arterial O2 saturation",
      "Decreased plasma volume of circulating blood",
      "Increased erythropoietin levels",
      "Increased erythropoiesis in bone marrow"
    ],
    "answer": "B",
    "explanation": "Relative polycythemia is caused by reduction of plasma, rather than an increase in RBC volume or mass. RBC mass is increased in both PV and secondary polycythemia, but erythropoietin levels are high only in secondary polycythemia."
  },
  {
    "id": 131,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "In PV, what is characteristically seen in peripheral blood?",
    "options": [
      "Panmyelosis",
      "Pancytosis",
      "Pancytopenia",
      "Panhyperplasia"
    ],
    "answer": "B",
    "explanation": "PV is a myeloproliferative disorder characterized by uncontrolled proliferation of erythroid precursors. However, production of all cell lines is usually increased. Panhyperplasia is a term used to describe the cellularity of bone marrow in PV."
  },
  {
    "id": 132,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Leukocyte alkaline phosphatase (LAP) staining performed on a patient gives the following results: 10(0) 48(1+) 38(2+) 3(3+) 1(4+) Calculate the LAP score.",
    "options": [
      "100",
      "117",
      "137",
      "252"
    ],
    "answer": "C",
    "explanation": "One hundred mature neutrophils are counted and scored. The LAP score is calculated as follows: (the number of 1+ cells × 1) + (2+ cells × 2) + (3+ cells × 3) + (4+ cells × 4). That is, 48 + 76 + 9 + 4 = 137. The reference range is approximately 20 to 130."
  },
  {
    "id": 133,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "CML is distinguished from leukemoid reaction by which of the following?",
    "options": [
      "CML: low LAP; leukemoid: high LAP",
      "CML: high LAP; leukemoid: low LAP",
      "CML: high WBC; leukemoid: normal WBC",
      "CML: high WBC; leukemoid: higher WBC"
    ],
    "answer": "A",
    "explanation": "CML causes a low LAP score, whereas an elevated or normal score occurs in a leukemoid reaction. CML cannot be distinguished by WBC count because both CML and leukemoid reaction have a high count."
  },
  {
    "id": 134,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Which of the following occurs in idiopathic myelofibrosis (IMF)?",
    "options": [
      "Myeloid metaplasia",
      "Leukoerythroblastosis",
      "Fibrosis of bone marrow",
      "All of these options"
    ],
    "answer": "D",
    "explanation": "Anemia, fibrosis, myeloid metaplasia, thrombocytosis, and leukoerythroblastosis occur in IMF."
  },
  {
    "id": 135,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "What influence does the Philadelphia (Ph1) chromosome have on the prognosis of patients with CML?",
    "options": [
      "It is not predictive",
      "The prognosis is better if Ph1 is present",
      "The prognosis is worse if Ph1 is present",
      "The disease usually transforms into AML when Ph1 is present"
    ],
    "answer": "B",
    "explanation": "Ninety percent of patients with CML have the Ph1 chromosome. This appears as a long-arm deletion of chromosome 22 but is actually a translocation between the long arms of chromosomes 22 and 9. The ABL oncogene from chromosome 9 forms a hybrid gene with the bcr region of chromosome 22. This results in production of a chimeric protein with tyrosine kinase activity that activates the cell cycle. The prognosis for CML is better if the Ph1 chromosome is present. Often, a second chromosomal abnormality occurs in CML before a blast crisis."
  },
  {
    "id": 136,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Which of the following is (are) commonly found in CML?",
    "options": [
      "Many teardrop-shaped cells",
      "Intense LAP staining",
      "A decrease in granulocytes",
      "An increase in basophils"
    ],
    "answer": "D",
    "explanation": "CML is marked by an elevated WBC count demonstrating various stages of maturation, hypermetabolism, and minimal LAP staining. An increase in basophils and eosinophils is a common finding. Pseudo–Pelger–Huët cells and thrombocytosis may be present. Bone marrow is hypercellular, with a high M:E ratio (e.g., 10:1)."
  },
  {
    "id": 137,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "In which of the following conditions does LAP show the least activity?",
    "options": [
      "Leukemoid reactions",
      "IMF",
      "PV",
      "CML"
    ],
    "answer": "D",
    "explanation": "CML shows the least LAP activity, whereas the LAP score is slightly to markedly increased in each of the other states."
  },
  {
    "id": 138,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "A striking feature of the peripheral blood of a patient with CML is:",
    "options": [
      "Profusion of bizarre blast cells",
      "Normal number of typical granulocytes",
      "Presence of granulocytes at different stages of development",
      "Pancytopenia"
    ],
    "answer": "C",
    "explanation": "The WBC count in CML is often higher than 100 × 109/L, and the peripheral blood smear shows granulocyte progression from myeloblast to segmented neutrophil."
  },
  {
    "id": 139,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Which of the following is often associated with CML but not with AML?",
    "options": [
      "Infections",
      "WBCs greater than 20.0 × 109/L",
      "Hemorrhage",
      "Splenomegaly"
    ],
    "answer": "D",
    "explanation": "Splenomegaly is seen in greater than 90% of patients with CML, but it is not a characteristic finding in AML. Infections, hemorrhage, and elevated WBC counts may be seen in both CML and AML."
  },
  {
    "id": 140,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Multiple myeloma and Waldenström macroglobulinemia have all of the following in common except:",
    "options": [
      "Monoclonal gammopathy",
      "Hyperviscosity of blood",
      "Bence–Jones protein in urine",
      "Osteolytic lesions"
    ],
    "answer": "D",
    "explanation": "Osteolytic lesions indicating destruction of bone, as evidenced by radiography, are seen in multiple myeloma but not in Waldenström macroglobulinemia. In addition, Waldenström macroglobulinemia gives rise to lymphocytosis, which does not occur in multiple myeloma, and differs in the morphology of the malignant cells."
  },
  {
    "id": 141,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "What is the characteristic finding seen in the peripheral blood smear from a patient with multiple myeloma?",
    "options": [
      "Microcytic hypochromic cells",
      "Intracellular inclusion bodies",
      "Rouleaux",
      "Hypersegmented neutrophils"
    ],
    "answer": "C",
    "explanation": "Rouleaux is present in patients with multiple myeloma as a result of increased viscosity and decreased albumin:globulin ratio. Multiple myeloma is a plasma cell dyscrasia that is characterized by overproduction of monoclonal immunoglobulin."
  },
  {
    "id": 142,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "All of the following are associated with the diagnosis of multiple myeloma except:",
    "options": [
      "Marrow plasmacytosis",
      "Lytic bone lesions",
      "Serum and/or urine M component (monoclonal protein)",
      "Ph1 chromosome"
    ],
    "answer": "D",
    "explanation": "The Ph1 chromosome is a diagnostic marker for CML. Osteolytic lesions, monoclonal gammopathy, and bone marrow infiltration by plasma cells constitute the triad of diagnostic markers for multiple myeloma."
  },
  {
    "id": 143,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Multiple myeloma is most difficult to distinguish from:",
    "options": [
      "CLL",
      "Acute myelogenous leukemia",
      "Benign monoclonal gammopathy",
      "Benign adenoma"
    ],
    "answer": "C",
    "explanation": "Benign monoclonal gammopathies have peripheral blood findings similar to those in myeloma. However, a lower concentration of monoclonal protein is usually seen. There are no osteolytic lesions, and the plasma cells comprise less than 10% of nucleated cells in bone marrow. About 30% become malignant, and therefore the term monoclonal gammopathy of undetermined significance (MGUS) is the designation used to describe this condition."
  },
  {
    "id": 144,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "The pathology of multiple myeloma includes which of the following?",
    "options": [
      "Expanding plasma cell mass",
      "Overproduction of monoclonal immunoglobulins",
      "Production of osteoclast activating factor (OAF) and other cytokines",
      "All of these options"
    ],
    "answer": "D",
    "explanation": "Mutated plasmablasts in bone marrow undergo clonal replication and expand the plasma cell mass. Normal bone marrow is gradually replaced by malignant plasma cells, leading to pancytopenia. Most malignant plasma cells actively produce immunoglobulins. In multiple myeloma, the normally controlled and purposeful production of antibodies is replaced by inappropriate production of even larger amounts of useless immunoglobulin molecules. The normally equal production of light chains and heavy chains may be imbalanced. The result is the release of excess free light chains or free heavy chains. The immunoglobulins produced by a single clone of myeloma cells are identical. Any abnormal production of identical antibodies is referred to by the general term monoclonal gammopathy. Osteoclasts are bone cells active in locally resorbing bone and releasing calcium into blood. Nearby osteoblasts are equally active in utilizing the calcium in blood to form new bone. Multiple myeloma interrupts this balance by the secretion of at least two substances. These are interleukin-6 (IL-6) and OAF. As its name implies, OAF stimulates osteoclasts to increase bone resorption and release of calcium, which lead to lytic lesions of the bone."
  },
  {
    "id": 145,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Waldenström macroglobulinemia is a malignancy of the:",
    "options": [
      "Lymphoplasmacytoid cells",
      "Adrenal cortex",
      "Myeloblastic cell lines",
      "Erythroid cell precursors"
    ],
    "answer": "A",
    "explanation": "Waldenström macroglobulinemia is a malignancy of lymphoplasmacytoid cells, which manufacture IgM. Although the cells secrete immunoglobulin, they are not fully differentiated into plasma cells and lack the characteristic perinuclear halo, deep basophilia, and eccentric nucleus characteristic of classic plasma cells."
  },
  {
    "id": 146,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "Cells that exhibit positive staining with acid phosphatase and are not inhibited by tartaric acid are characteristically seen in:",
    "options": [
      "Infectious mononucleosis",
      "Infectious lymphocytosis",
      "Hairy cell leukemia (HCL)",
      "T-cell acute lymphoblastic leukemia"
    ],
    "answer": "C",
    "explanation": "A variable number of malignant cells in HCL will stain positive with tartrate-resistant acid phosphatase (TRAP+). Although this cytochemical reaction is fairly specific for HCL, TRAP activity has occasionally been reported in B-cell leukemia and, rarely, T- cell leukemia."
  },
  {
    "id": 147,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "The JAK2(V617F) mutation may be positive in all of the following chronic myeloproliferative disorders except:",
    "options": [
      "ET",
      "IMF",
      "PV",
      "CML"
    ],
    "answer": "D",
    "explanation": "The JAK2(V617F) mutation is negative in patients with CML. It may be positive in patients with IMF (35%–57%), PV (65%–97%), and ET (23%–57%)."
  },
  {
    "id": 148,
    "section": "Lymphoproliferative and Myeloproliferative Disorders",
    "chapter": "Hematology",
    "question": "All of the following are major criteria for the 2008 WHO diagnostic criteria for ET except:",
    "options": [
      "PLT count 450 × 109/L or greater",
      "Megakaryocyte proliferation with large and mature morphology and no or little granulocyte or erythroid proliferation",
      "Demonstration of JAK2(V617F) or other clonal marker",
      "Evidence of clonality"
    ],
    "answer": "D",
    "explanation": "In the revised 2016 WHO classification, diagnosis of ET requires meeting four major"
  },
  {
    "id": 149,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "A 19-year-old man came to the emergency department with severe joint pain, fatigue, cough, and fever. Review the following laboratory results: WBCs 21.0 × 109/L RBCs 3.23 × 1012/L Hgb 9.6 g/dL PLT 252 × 109/L Differential: 17 band neutrophils; 75 segmented neutrophils; 5 lymphocytes; 2 monocytes; 1 eosinophil; 26 NRBCs What is the corrected WBC count?",
    "options": [
      "8.1 × 109/L",
      "16.7 × 109/L",
      "21.0 × 109/L",
      "80.8 × 109/L"
    ],
    "answer": "B",
    "explanation": "The formula for correcting the WBC count for the presence of NRBCs is: Total WBC × 100 or (21.0 × 100) ÷ 126 = 16.7 × 109/L where total WBC = WBCs × 109/L, 100 is the number of WBCs counted in the differential, and 126 is the sum of NRBCs plus WBCs counted in the differential."
  },
  {
    "id": 150,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "A manual WBC count is performed. Eighty WBCs are counted in the four large corner squares of a Neubauer hemacytometer. The dilution is 1:100. What is the total WBC count?",
    "options": [
      "4.0 × 109/L",
      "8.0 × 109/L",
      "20.0 × 109/L",
      "200.0 × 109/L"
    ],
    "answer": "C",
    "explanation": "The formula for calculating manual cell counts using a hemacytometer is: # cells counted × 10 (depth factor) × dilution factor ÷ area counted in mm2 or (80 × 10 × 100) ÷ 4 = 20,000/µL or 20.0 × 109/L"
  },
  {
    "id": 151,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "A manual RBC count is performed on pleural fluid. The RBC count in the large center square of the Neubauer hemacytometer is 125, and the dilution is 1:200. What is the total RBC count?",
    "options": [
      "27.8 × 109/L",
      "62.5 × 109/L",
      "125.0 × 109/L",
      "250.0 × 109/L"
    ],
    "answer": "D",
    "explanation": "Regardless of the cell or fluid type, the formula for calculating manual cell counts using a hemacytometer is: # cells counted × 10 (depth factor) × dilution factor ÷ area counted in mm2 or (125 × 10 × 200) ÷ 1 = 250,000/µL or 250.0 × 109/L"
  },
  {
    "id": 152,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the scatterplot of WBCs shown. Which section of the scatterplot denotes the number of monocytes?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "A",
    "explanation": "WBC identification is facilitated by analysis of the impedance, conductance, and light- scattering properties of WBCs. The scatterplot represents the relationship between volume (x-axis) and light scatter (y-axis). Monocytes account for the dots in section A, neutrophils are represented in section B, eosinophils are represented in section C, and lymphocytes are denoted in section D."
  },
  {
    "id": 153,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the following automated CBC values. WBC = 17.5 × 109/L (flagged) MCV = 86.8 fL 12 RBC = 2.89 × 10 /L MCH = 28.0 pg Hgb = 8.1 g/dL MCHC = 32.3% Hct = 25.2% PLT = 217 × 109/L Many sickle cells were observed on review of the peripheral blood smear. On the basis of this finding and the results provided, what automated parameter of this patient is most likely inaccurate, and what follow-up test should be done to accurately assess this parameter?",
    "options": [
      "MCV/perform reticulocyte count",
      "Hct/perform manual Hct",
      "WBC/perform manual WBC count",
      "Hgb/perform serum–saline replacement"
    ],
    "answer": "C",
    "explanation": "When an automated WBC count is performed using a hematology analyzer, RBCs are lysed to allow enumeration of WBCs. Sickle cells are often resistant to lysis within the limited time frame (less than 1 minute), during which the RBCs are exposed to the lysing reagent and the WBCs are subsequently counted. As a result, the nonlysed RBCs are counted along with WBCs, and this falsely increases the WBC count. When an automated cell counting analyzer indicates a review flag for the WBC count and sickle cells are noted on peripheral blood smear analysis, a manual WBC count must be performed. The manual method allows optimal time for sickle cell lysis and accurate enumeration of WBCs."
  },
  {
    "id": 154,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the following CBC results for a 2-day-old infant: WBC = 15.2 × 109/L MCV = 105 fL RBC = 5.30 × 1012/L MCH = 34.0 pg Hgb = 18.5 g/dL MCHC = 33.5% Hct = 57.9% PLT = 213 × 109/L These results indicate:",
    "options": [
      "Macrocytic anemia",
      "Microcytic anemia",
      "Liver disease",
      "Normal values for a 2-day-old infant"
    ],
    "answer": "D",
    "explanation": "During the first week of life, an infant has an average Hct of 55 mL/dL. This value drops to a mean of 43 mL/dL by the first month of life. The mean MCV of the first week is 108 fL; after 2 months, the average MCV is 96 fL. The mean WBC count during the first week is approximately 18 × 109/L, and this drops to an average of 10.8 × 109/L after the first month. The PLT count in newborns falls within the same normal range as in adults."
  },
  {
    "id": 155,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the following scatterplot, histograms, and automated values for a 21-year-old college student. WBC differential: 5 band neutrophils; 27 segmented neutrophils; 60 atypical lymphocytes; 6 monocytes; 1 eosinophil; 1 basophil What is the presumptive diagnosis?",
    "options": [
      "Infectious mononucleosis",
      "Monocytosis",
      "CLL",
      "β-Thalassemia"
    ],
    "answer": "A",
    "explanation": "Lymphocytosis with numerous atypical lymphocytes is a hallmark finding consistent with the diagnosis of infectious mononucleosis. The automated results demonstrated abnormal WBC subpopulations, specifically lymphocytosis as well as monocytosis. However, on peripheral blood smear examination, 60 atypical lymphocytes and only six monocytes were noted. Atypical lymphocytes are often misclassified by automated cell counters as monocytes. Therefore, the automated analyzer differential must not be released and the manual differential count must be relied on for diagnostic interpretation."
  },
  {
    "id": 156,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the following scatterplot, histograms, and automated values for a 61-year-old woman. WBC differential: 14 band neutrophils; 50 segmented neutrophils; 7 lymphocytes; 4 monocytes; 10 metamyelocytes; 8 myelocytes; 1 promyelocyte; 3 eosinophils; 3 basophils; 2 NRBCs/100 WBCs What is the presumptive diagnosis?",
    "options": [
      "Leukemoid reaction",
      "CML",
      "AML",
      "Megaloblastic leukemia"
    ],
    "answer": "B",
    "explanation": "The “+++++” on the printout indicates that the WBC count exceeds the upper linearity of the analyzer (greater than 99.9 × 109/L). This markedly elevated WBC count, combined with the spectrum of immature granulocytic cells seen on peripheral blood smear examination, indicates the diagnosis of CML."
  },
  {
    "id": 157,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the automated results from the previous question. Which parameters can be released without further follow-up verification procedures?",
    "options": [
      "WBC and relative percentages of WBC populations",
      "RBCs and PLTs",
      "Hgb and Hct",
      "None of the automated counts can be released without follow-up verification"
    ],
    "answer": "D",
    "explanation": "All of the automated results have “R,” or review, flags indicated; none can be released without manual verification procedures. The specimen must be diluted to bring the WBC count within the linearity range of the analyzer. When enumerating the RBC count, the analyzer does not lyse the WBCs and, in fact, includes them in the RBC count. As such, the RBC count is falsely elevated because of the increased number of WBCs. Therefore, after an accurate WBC count has been obtained, this value can be subtracted from the RBC count to obtain the true RBC count. For example, using the values for this patient: Step 1: Obtain an accurate WBC count by diluting the sample 1:10. WBC = 41.0 × 10 (dilution) = 410 × 109/L Step 2: Convert this value to cells per 1012 to subtract from the RBC count. 410 × 109/L = 0.41 × 1012/L Step 3: Subtract the WBC count from the RBC count to get the accurate RBC count. 3.28 (original RBC) – 0.41 (true WBC) = 2.87 × 1012/L = accurate RBC The Hct may be obtained by microhematocrit centrifugation. The true MCV may be obtained by using the standard formula: MCV = (Hct ÷ RBC) × 10 where RBC = RBC count in millions per microliter. Additionally, the PLT count must be verified by smear estimate or performed manually."
  },
  {
    "id": 158,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Refer to the following scatterplot, histograms, and automated values for a 45-year-old man. What follow-up verification procedure is indicated before these results can be released?",
    "options": [
      "Redraw blood sample using a sodium citrate tube; multiply PLTs × 1.11",
      "Dilute WBCs 1:10; multiply × 10",
      "Perform plasma blank Hgb to correct for lipemia",
      "Warm specimen at 37°C for 15 minutes; rerun specimen"
    ],
    "answer": "A",
    "explanation": "The PLT clumping phenomenon is often induced in vitro by the anticoagulant EDTA. Redrawing a sample from the patient by using a sodium citrate tube usually corrects this phenomenon and allows for accurate PLT enumeration. The PLT count must be multiplied by 1.11 to adjust for the amount of sodium citrate. PLT clumps cause a spurious decrease in the PLT count by automated methods. The WBC value has an “R” (review) flag because the PLT clumps have been falsely counted as WBCs; therefore, a manual WBC count is indicated."
  },
  {
    "id": 159,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Refer to the following scatterplot, histograms, and automated values for a 52-year-old woman. What follow-up verification procedure is indicated before these results can be released?",
    "options": [
      "Redraw specimen using a sodium citrate tube; multiply PLTs × 1.11",
      "Dilute WBCs 1:10; multiply × 10",
      "Perform plasma blank Hgb to correct for lipemia",
      "Warm the specimen at 37°C for 15 minutes; rerun the specimen"
    ],
    "answer": "D",
    "explanation": "The presence of high-titer cold agglutinin in a patient with cold AIHA will interfere with automated cell counting. The most remarkable findings are falsely elevated MCV, MCH, and MCHC, as well as falsely decreased RBC count. The patient’s RBCs will quickly agglutinate in vitro when exposed to ambient temperatures below body temperature. To correct for this phenomenon, the EDTA tube should be incubated at 37°C for 15 to 30 minutes, and then the specimen should be rerun."
  },
  {
    "id": 160,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Refer to the following scatterplot, histograms, and automated values for a 33-year-old woman. What follow-up verification procedure is indicated before these results can be released?",
    "options": [
      "Perform a manual Hct and redraw the sample using a sodium citrate tube; multiply PLTs × 1.11",
      "Dilute WBCs 1:10; multiply × 10",
      "Perform plasma blank Hgb to correct for lipemia",
      "Warm the specimen at 37°C for 15 minutes; rerun the specimen"
    ],
    "answer": "C",
    "explanation": "The rule of thumb regarding the Hgb/Hct correlation dictates that Hgb × 3 ≈ Hct (± 3). This rule has been violated in this patient; therefore, a follow-up verification procedure is indicated. Additionally, MCHC is markedly elevated in these results, and an explanation for falsely increased Hgb should be sought. Lipemia can be visualized by centrifuging the EDTA tube and observing for a milky white plasma. To correct for the presence of lipemia, a plasma Hgb value (baseline Hgb) should be ascertained by using the patient’s plasma and subsequently subtracted from the original falsely elevated Hgb value. The following formula can be used to correct for lipemia: Whole blood Hgb – [(Plasma Hgb) (1 – Hct/100)] = Corrected Hgb"
  },
  {
    "id": 161,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Refer to the following scatterplot, histograms, and automated values for a 48-year-old man. What follow-up verification procedure is indicated before the five-part WBC differential results can be released?",
    "options": [
      "Dilute WBCs 1:10; multiply × 10",
      "Redraw the sample using a sodium citrate tube; multiply WBCs × 1.11",
      "Prepare buffy coat peripheral blood smears, and perform a manual differential",
      "Warm specimen at 37°C for 15 minutes; rerun specimen"
    ],
    "answer": "C",
    "explanation": "The markedly decreased WBC count (0.2 × 109/L) indicates that a manual differential is necessary and that very few leukocytes will be available for differential cell counting. To increase the yield and thereby facilitate counting, differential smears should be prepared by using the buffy coat technique."
  },
  {
    "id": 162,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the following CBC results for a 70-year-old man: WBC = 58.2 × 109/L MCV = 98 fL RBC = 2.68 × 10 /L12 MCH = 31.7 pg Hgb = 8.5 g/dL MCHC = 32.6% Hct = 26.5 mL/dL% PLT = 132 × 109/L Differential: 96 lymphocytes; 2 band neutrophils; 2 segmented neutrophils; 25 smudge cells/100 WBCs What is the most likely diagnosis on the basis of these values?",
    "options": [
      "ALL",
      "CLL",
      "Infectious mononucleosis",
      "Myelodysplastic syndrome"
    ],
    "answer": "B",
    "explanation": "CLL is a disease of older adults, classically associated with an elevated WBC count and relative and absolute lymphocytosis. CLL is twice as common in men, and smudge cells (WBCs with little or no surrounding cytoplasm) are usually present in the peripheral blood smear. CLL may occur with or without anemia or thrombocytopenia. The patient’s age and lack of blasts rule out ALL. Similarly, the patient’s age and lack of atypical lymphocytes make infectious mononucleosis unlikely. Myelodysplastic syndromes may involve the erythroid, granulocytic, or megakaryocytic cell lines but not the lymphoid cells."
  },
  {
    "id": 163,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Refer to the following scatterplot, histograms, and automated values for a 28-year-old woman who had undergone preoperative laboratory testing. A manual WBC differential was requested by her physician. The WBC differential was not significantly different from the automated five-part differential; however, the medical laboratory scientist noted 3+ elliptocytes/ovalocytes while reviewing the RBC morphology. What is the most likely diagnosis for this patient?",
    "options": [
      "DIC",
      "HE (ovalocytosis)",
      "Cirrhosis",
      "Hgb C disease"
    ],
    "answer": "B",
    "explanation": "The finding of ovalocytes as the predominant RBC morphology in peripheral blood is consistent with the diagnosis of HE, or ovalocytosis. This disorder is relatively common and can range in severity from an asymptomatic carrier state to homozygous HE with severe hemolysis. The most common clinical subtype is associated with no or minimal hemolysis. Therefore, HE is usually associated with a normal RBC histogram and cell indices and will go unnoticed without microscopic evaluation of the peripheral blood smear."
  },
  {
    "id": 164,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "A 25-year-old woman presented with symptoms of jaundice, acute cholecystitis, and an enlarged spleen. On investigation, numerous gallstones were discovered. Review the following CBC results: WBC = 11.1 × 109/L MCV = 100 fL 12 RBC = 3.33 × 10 /L MCH = 34.5 pg Hgb = 11.5 g/dL MCHC = 37.5% Hct = 31.6 mL/dL PLT = 448 × 109/L WBC differential: 13 band neutrophils; 65 segmented neutrophils; 15 lymphocytes; 6 monocytes; 1 eosinophil RBC morphology: 3+ spherocytes, 1+ polychromasia What follow-up laboratory test would provide valuable information for this patient?",
    "options": [
      "Osmotic fragility test",
      "Hgb electrophoresis",
      "G6PD assay",
      "Methemoglobin reduction test"
    ],
    "answer": "A",
    "explanation": "The osmotic fragility test is indicated as a confirmatory test for the presence of numerous spherocytes, and individuals with HS have an increased osmotic fragility. MCHC is elevated in greater than 50% of patients with spherocytosis, and this parameter can be used as a clue to the presence of HS. Spherocytes have a decreased surface:volume ratio, probably resulting from mild cellular dehydration."
  },
  {
    "id": 165,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Refer to the following scatterplot, histograms, and automated values for a 53-year-old man who had undergone preoperative laboratory testing. What is the most likely diagnosis for this patient?",
    "options": [
      "IDA",
      "PV",
      "Sideroblastic anemia",
      "β-thalassemia minor"
    ],
    "answer": "D",
    "explanation": "β-thalassemia minor can be easily detected by noting an abnormally elevated RBC count and Hct that does not correlate with the elevated RBC count, in conjunction with a decreased MCV. Although thalassemia and IDA are both microcytic, hypochromic processes, thalassemia can be differentiated from IDA because in IDA the RBC count, Hgb, and Hct values are usually decreased along with MCV. Although the RBC count is increased in PV, Hct must also be greater than 50% for a diagnosis of PV to be considered."
  },
  {
    "id": 166,
    "section": "Hematology Problem-Solving",
    "chapter": "Hematology",
    "question": "Review the following CBC results: WBC = 11.0 × 109/L MCV = 85.0 fL RBC = 3.52 × 1012/L MCH = 28.4 pg Hgb = 10.0 g/dL MCHC = 33.4% Hct = 29.9 mL/dL PLT = 155 × 109/L 12 NRBCs/100 WBCs RBC morphology: Moderate polychromasia, 3+ target cells, few schistocytes Which of the following additional laboratory tests would yield informative diagnostic information for this patient?",
    "options": [
      "Osmotic fragility test",
      "Hgb electrophoresis",
      "Sugar water test",
      "Bone marrow examination"
    ],
    "answer": "B",
    "explanation": "The findings of moderate anemia, numerous target cells seen on the peripheral blood"
  },
  {
    "id": 167,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following initiates in vivo coagulation by activation of factor VII?",
    "options": [
      "Protein C",
      "Tissue factor (TF)",
      "Plasmin activator",
      "Thrombomodulin (TM)"
    ],
    "answer": "B",
    "explanation": "In vivo, activation of coagulation occurs on the surface of activated platelets (PLTs) or cells that have TF. TF is found on the surface of many cells outside the vascular system (extrinsic). On vascular injury, TF is exposed to the vascular system. TF has high affinity for factors VII and VIIa. TF activates factor VII to VIIa and forms TF– VIIa complex. TF–VIIa complex in the presence of calcium ion (Ca2+) and PLT phospholipid activates factor IX to factor IXa and factor X to factor Xa. Factor Xa forms a complex with cofactor Va (Xa–Va) on the surface of the activated PLTs. Factor Xa–Va complex in the presence of Ca2+ and PLT phospholipid converts prothrombin (factor II) to thrombin (IIa). Thrombin acts on soluble plasma fibrinogen to form a fibrin clot, which is stabilized by activated factor XIII (XIIIa). In addition, activated factor IX (IXa) forms a complex with activated cofactor VIII (VIIIa) on the surface of the activated PLTs. Factor IXa–VIIIa complex in the presence of Ca2+ and PLT phospholipid converts factor X to Xa with the end products of thrombin and fibrin clot, as discussed previously. The classical description of intrinsic, extrinsic, and common pathways does not take place in vivo. The concept of these three pathways is used to explain clot formation in laboratory tests. Activated thromboplastin time (APTT) is determined by the intrinsic and common pathways, whereas prothrombin time (PT) is determined by the extrinsic and common pathways. The extrinsic pathway is so named because TF is derived from extravascular cells."
  },
  {
    "id": 168,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following clotting factors plays a role in clot formation in vitro, but not in vivo?",
    "options": [
      "Factor VIIa",
      "Factor IIa",
      "Factor XIIa",
      "Factor Xa"
    ],
    "answer": "C",
    "explanation": "Factor XIIa does not play a role in coagulation in vivo; however, in vitro, the deficiency of this factor causes prolonged APTT. In vitro, factor XII is activated by substances, such as glass, Kaolin, and ellagic acid, and in vivo it may be activated by exposure to a negatively charged cell surface membrane, such collagen, as well as to kallikrein and high-molecular-weight kininogen (HMWK). In vivo, factor XIIa plays an important role in the fibrinolytic system by activating plasminogen to plasmin. Plasmin degrades the fibrin clot at the site of injury. Deficiency of factor XII is associated with thrombosis and not with bleeding. Factors VIIa, Xa, and IIa play a role in vivo and in vitro."
  },
  {
    "id": 169,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "The anticoagulant of choice for most routine coagulation studies is:",
    "options": [
      "Sodium oxalate",
      "Sodium citrate",
      "Heparin",
      "Ethylenediaminetetraacetic acid (EDTA)"
    ],
    "answer": "B",
    "explanation": "The anticoagulant of choice for most coagulation procedures is sodium citrate (3.2%). Because factors V and VIII are more labile in sodium oxalate, heparin neutralizes thrombin, and EDTA inhibits thrombin’s action on fibrinogen, these anticoagulants are not used for routine coagulation studies."
  },
  {
    "id": 170,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which anticoagulant:blood ratio is correct for coagulation procedures?",
    "options": [
      "1:4",
      "1:5",
      "1:9",
      "1:10"
    ],
    "answer": "C",
    "explanation": "The optimal anticoagulant:blood ratio is one part anticoagulant to nine parts blood. The anticoagulant supplied in this amount is sufficient to bind all the available calcium, thereby preventing clotting."
  },
  {
    "id": 171,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which results would be expected for PT and APTT in a patient with polycythemia?",
    "options": [
      "Both prolonged",
      "Both shortened",
      "Normal PT, prolonged APTT",
      "Both normal"
    ],
    "answer": "A",
    "explanation": "The volume of blood in a polycythemic patient contains so little plasma that excess anticoagulant remains and is available to bind to reagent calcium, thereby resulting in prolongation of PT and APTT. For more accurate results, the plasma:anticoagulant ratio can be modified by decreasing the amount of anticoagulant in the collection tube by using the following formula: (0.00185)(V)(100–H) = C, where V = blood volume in milliliters (mL); H = patient’s hematocrit (Hct); and C = volume (mL) of anticoagulant. A new sample should be drawn to rerun the PT and APTT tests."
  },
  {
    "id": 172,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which reagents are used in the PT test?",
    "options": [
      "Thromboplastin and sodium chloride",
      "Thromboplastin and potassium chloride",
      "Thromboplastin and calcium",
      "Actin and calcium chloride"
    ],
    "answer": "C",
    "explanation": "Thromboplastin and calcium (combined into a single reagent) replace tissue thromboplastin and calcium necessary, in vivo, to activate factor VII to factor VIIa. This ultimately generates thrombin from prothrombin via the coagulation cascade."
  },
  {
    "id": 173,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which test would be abnormal in a patient with factor X deficiency?",
    "options": [
      "PT only",
      "APTT only",
      "PT and APTT",
      "Thrombin time (TT)"
    ],
    "answer": "C",
    "explanation": "Factor X is involved in the common pathway of the coagulation cascade; therefore, its deficiency prolongs both PT and APTT. Activated factor X along with activated factor V in the presence of calcium and platelet factor 3 (PF3) converts prothrombin (factor II) to the active enzyme thrombin (factor IIa)."
  },
  {
    "id": 174,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which clotting factor is not measured by the PT and APTT tests?",
    "options": [
      "Factor VIII",
      "Factor IX",
      "Factor V",
      "Factor XIII"
    ],
    "answer": "D",
    "explanation": "Factor XIII is not measured by PT or APTT. Factor XIII (fibrin stabilizing factor) is a transamidase. It creates covalent bonds between fibrin monomers, which are formed during the coagulation process, to produce a stable fibrin clot. In the absence of factor XIII, the hydrogen bonded fibrin polymers are unstable and, therefore, soluble in 5M urea or in 1% monochloroacetic acid."
  },
  {
    "id": 175,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "A modification of which procedure can be used to measure fibrinogen?",
    "options": [
      "PT",
      "APTT",
      "TT",
      "Fibrin degradation products"
    ],
    "answer": "C",
    "explanation": "Fibrinogen can be quantitatively measured by modification of the TT by diluting the plasma because the thrombin clotting time of diluted plasma is inversely proportional to the concentration of fibrinogen (principle of Clauss method)."
  },
  {
    "id": 176,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following characterizes vitamin K?",
    "options": [
      "It is required for biological activity of fibrinolysis",
      "Its activity is enhanced by heparin therapy",
      "It is required for carboxylation of glutamate residues of some coagulation factors",
      "It is made by endothelial cells"
    ],
    "answer": "C",
    "explanation": "Vitamin K is necessary for activation of vitamin K–dependent clotting factors (II, VII, IX, and X). This activation is accomplished by carboxylation of glutamic acid residues of the inactive clotting factors. The activity of vitamin K is not enhanced by heparin therapy. Vitamin K is present in a variety of foods and is also the only vitamin made by the organisms living in the intestine."
  },
  {
    "id": 177,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which fragments of fibrin clot degradation are measured by the D-dimer test?",
    "options": [
      "Fragments X and Y",
      "Fibrinopeptide A and B",
      "Fragments D and E",
      "The D-D domains"
    ],
    "answer": "D",
    "explanation": "D-dimer is a specific product resulting from digestion of cross-linked fibrin only. It consists of two D domains called D-D fragment and is a marker for thrombosis and fibrinolysis. In the D-dimer test, monoclonal antibody is directed against D-dimer antigen by using a variety of automated instruments. The D-dimer test is used to diagnose acute and chronic disseminated intravascular coagulation (DIC) and to rule out thromboembolic disorders. Fragments X, Y, D, and E are produced by the action of plasmin on fibrinogen and fibrin. Polypeptide A and B are produced by the proteolytic action of thrombin on fibrinogen to form a fibrin clot."
  },
  {
    "id": 178,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following clotting factors are measured by the APTT test?",
    "options": [
      "Factors II, VII, IX, X",
      "Factors VII, X, V, II, I",
      "Factors XII, XI, IX, VIII, X, V, II, I",
      "Factors XII, VII, X, V, II, I"
    ],
    "answer": "C",
    "explanation": "The APTT test evaluates the clotting factors in the intrinsic pathway (XII, XI, IX, and VIII) as well as those in the common pathway (X, V, II, and I)."
  },
  {
    "id": 179,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which coagulation test(s) would be abnormal in a patient with vitamin K deficiency?",
    "options": [
      "PT only",
      "PT and APTT",
      "Fibrinogen level",
      "TT"
    ],
    "answer": "B",
    "explanation": "Patients with vitamin K deficiency exhibit decreased production of functional prothrombin proteins (factors II, VII, IX, and X). Decreased levels of these factors prolong both PT and APTT."
  },
  {
    "id": 180,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is correct regarding the international normalized ratio (INR)?",
    "options": [
      "It uses the international sensitivity ratio (ISR)",
      "It standardizes PT results",
      "It standardizes APTT results",
      "It is used to monitor heparin therapy"
    ],
    "answer": "B",
    "explanation": "INR is used to standardize PT results to adjust for the differences in thromboplastin reagents made by different manufacturers and used by various institutions. The INR calculation uses the international sensitivity index (ISI) value and is used to monitor an oral anticoagulant, such as warfarin. INR is not used to standardize APTT testing."
  },
  {
    "id": 181,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is referred to as an endogenous activator of plasminogen?",
    "options": [
      "Streptokinase",
      "Transamidase",
      "Tissue plasminogen activator (tPA)",
      "tPA inhibitor"
    ],
    "answer": "C",
    "explanation": "tPA is an endogenous (produced in the body) activator of plasminogen. It is released from the endothelial cells by the action of protein C. It converts plasminogen to plasmin. Streptokinase is an exogenous (not made in the body) activator of plasminogen."
  },
  {
    "id": 182,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which protein is the primary inhibitor of the fibrinolytic system?",
    "options": [
      "Protein C",
      "Protein S",
      "α2-Antiplasmin",
      "α2-Macroglobulin"
    ],
    "answer": "C",
    "explanation": "α2-Antiplasmin is the main inhibitor of plasmin. It inhibits plasmin by forming a 1:1 stoichiometric complex with any free plasmin in plasma and, thus, prevents binding of plasmin to fibrin and fibrinogen."
  },
  {
    "id": 183,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following statements is correct regarding the D-dimer test?",
    "options": [
      "Levels are decreased in DIC",
      "Test detects polypeptides A and B",
      "Test detects fragments D and E",
      "Test has a negative predictive value"
    ],
    "answer": "D",
    "explanation": "The D-dimer assay evaluates fibrin degradation. It is a nonspecific screening test that shows increased values in many conditions in which fibrinolysis is increased, such as DIC and fibrinolytic therapy. The D-dimer test is widely used to rule out thrombosis and thrombotic activities. The negative predictive value of a test is the probability that a person with a negative result is free of the disease that the test is meant to detect. Therefore, a negative D-dimer test result rules out thrombosis, and further laboratory investigations are not required."
  },
  {
    "id": 184,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "A protein that plays a role in both coagulation and PLT aggregation is:",
    "options": [
      "Factor I",
      "Factor VIII",
      "Factor IX",
      "Factor XI"
    ],
    "answer": "A",
    "explanation": "Factor I (fibrinogen), along with the glycoprotein IIb–IIIa complex, is necessary for PLT aggregation. Factor I is also a substrate in the common pathway of coagulation. Thrombin acts on fibrinogen to form fibrin clots."
  },
  {
    "id": 185,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "A standard 4.5-mL blue-top tube filled with 3.0 mL of blood was submitted to the laboratory for PT and APTT tests. The sample is from a patient undergoing surgery the following morning for a tonsillectomy. Which of the following is the necessary course of action by the medical laboratory scientist?",
    "options": [
      "Run both tests in duplicate and report the average result",
      "Reject the sample and request a new sample",
      "Report the PT result",
      "Report the APTT result"
    ],
    "answer": "B",
    "explanation": "A 4.5-mL blue-top tube contains 4.5 mL blood + 0.5 mL sodium citrate. The tube should be 90% full. A tube with 3.0 mL blood should be rejected because the quantity is not sufficient (QNS). QNS samples alter the necessary blood:anticoagulant ratio (9:1). The excess anticoagulant in a QNS sample binds to the reagent calcium, resulting in prolongation of PT and APTT."
  },
  {
    "id": 186,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which statement is correct regarding sample storage for the PT test?",
    "options": [
      "Stable for 24 hours if the sample is capped",
      "Stable for 24 hours if the sample is refrigerated at 4°C",
      "Stable for 4 hours if the sample is stored at 4°C",
      "Should be run within 8 hours"
    ],
    "answer": "A",
    "explanation": "According to Clinical Laboratory Standards Institute (CLSI) guidelines, plasma samples for PT testing, if capped, are stable for 24 hours at room temperature. Refrigerating the sample causes cold activation of factor VII and, therefore, shortened PT results. APTT samples are stable for 4 hours if stored at 4°C."
  },
  {
    "id": 187,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "In primary fibrinolysis, the fibrinolytic activity results in response to:",
    "options": [
      "Increased fibrin formation",
      "Spontaneous activation of fibrinolysis",
      "Increased fibrin monomers",
      "DIC"
    ],
    "answer": "B",
    "explanation": "Primary fibrinolysis is a rare pathological condition in which spontaneous systemic fibrinolysis occurs. Plasmin is formed in the absence of coagulation activation and clot formation. Primary fibrinolysis is associated with increased production of plasminogen and plasmin, decreased plasmin removal from the circulation, and spontaneous bleeding."
  },
  {
    "id": 188,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Plasminogen deficiency is associated with:",
    "options": [
      "Bleeding",
      "Thrombosis",
      "Increased fibrinolysis",
      "Increased coagulation"
    ],
    "answer": "B",
    "explanation": "Plasminogen deficiency is associated with thrombosis. Plasminogen is an important component of the fibrinolytic system. Plasminogen is activated to plasmin, which is necessary for the degradation of fibrin clots to prevent thrombosis. When plasminogen is deficient, plasmin is not formed, causing a defect in the clot lysing processes."
  },
  {
    "id": 189,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following clotting factors are activated by thrombin that is generated by tissue pathway (TF-VIIa)?",
    "options": [
      "Factors XII, XI",
      "Factors XII, I",
      "Factors I, II",
      "Factors V, VIII"
    ],
    "answer": "D",
    "explanation": "Factors V and VIII are activated by the thrombin that is generated by the action of TF-VIIa on factor X to form factor Xa. Factor Xa forms a complex with factor Va on the PLT surfaces. Factor Xa–Va complex in the presence of phospholipid and Ca2+ transform more prothrombin to thrombin."
  },
  {
    "id": 190,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which substrate is used in a chromogenic factor assay?",
    "options": [
      "p-nitroaniline (pNa)",
      "Chlorophenol red",
      "Prussian blue",
      "Ferricyanide"
    ],
    "answer": "A",
    "explanation": "The chromogenic, or amidolytic, assays use a color-producing substance, known as chromophore. The chromophore used for the coagulation laboratory is pNa. pNa is bound to a synthetic oligopeptide substrate. The protease cleaves the chromogenic substrate at the site binding the oligopeptide to the pNa, which results in release of pNa. Free pNa has a yellow color; the color intensity of the solution is proportional to protease activity and is measured by a photodetector at 405 nm."
  },
  {
    "id": 191,
    "section": "Coagulation and Fibrinolytic Systems/Reagents and Methods",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following antibodies is used in the D-dimer assay?",
    "options": [
      "Polyclonal antibody directed against X and Y fragments",
      "Polyclonal antibody directed against D-dimer",
      "Monoclonal antibody against D and E fragments",
      "Monoclonal antibody against D-dimer"
    ],
    "answer": "D",
    "explanation": "The D-dimer is the fibrin degradation product generated by the action of plasmin on"
  },
  {
    "id": 192,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Thrombotic thrombocytopenic purpura (TTP) is characterized by:",
    "options": [
      "Prolonged PT",
      "Increased PLT aggregation",
      "Thrombocytosis",
      "Prolonged APTT"
    ],
    "answer": "B",
    "explanation": "TTP is a quantitative PLT disorder associated with increased intravascular PLT activation and aggregation resulting in thrombocytopenia. PT and APTT results are normal in TTP."
  },
  {
    "id": 193,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Thrombocytopenia may be associated with:",
    "options": [
      "Splenectomy",
      "Hypersplenism",
      "Acute blood loss",
      "Increased proliferation of pluripotent stem cells"
    ],
    "answer": "B",
    "explanation": "Hypersplenism is associated with thrombocytopenia. In this condition, up to 90% of PLTs can be sequestered in the spleen, causing decreases in circulatory PLTs. Splenectomy, acute blood loss, and increased proliferation of pluripotent stem cells are associated with thrombocytosis."
  },
  {
    "id": 194,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Aspirin prevents PLT aggregation by inhibiting the action of which enzyme?",
    "options": [
      "Phospholipase",
      "Cyclo-oxygenase",
      "Thromboxane A2 (TXA2) synthetase",
      "Prostacyclin synthetase"
    ],
    "answer": "B",
    "explanation": "Aspirin prevents PLT aggregation by inhibiting the activity of the enzyme cyclo- oxygenase. This inhibition prevents the formation of TXA2, which serves as a potent PLT aggregator."
  },
  {
    "id": 195,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Normal PLT adhesion depends on:",
    "options": [
      "Fibrinogen",
      "Glycoprotein Ib",
      "Glycoprotein IIb–IIIa complex",
      "Calcium"
    ],
    "answer": "B",
    "explanation": "Glycoprotein Ib is a PLT receptor for VWF. Glycoprotein Ib and VWF are both necessary for a normal PLT adhesion. Other proteins that play a role in PLT adhesion are glycoproteins V and IX."
  },
  {
    "id": 196,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following test results is normal in a patient with classic von Willebrand disease?",
    "options": [
      "PLT aggregation",
      "APTT",
      "PLT count",
      "Factor VIII:C and von Willebrand factor (VWF) levels"
    ],
    "answer": "C",
    "explanation": "Von Willebrand disease is an inherited, qualitative PLT disorder that results in increased bleeding, prolonged APTT, and decreased factor VIII:C and VWF levels. The PLT count and morphology are generally normal in von Willebrand disease, but PLT aggregation in the PLT function assay is abnormal."
  },
  {
    "id": 197,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Bernard–Soulier syndrome is associated with:",
    "options": [
      "Decreased factor IX",
      "Decreased factor VIII",
      "Thrombocytopenia and giant PLTs",
      "Abnormal PLT function test results"
    ],
    "answer": "C",
    "explanation": "Bernard–Soulier syndrome is associated with thrombocytopenia and giant PLTs. It is a qualitative PLT disorder caused by the deficiency of glycoprotein Ib. In Bernard– Soulier syndrome, PLT aggregation in the PLT function assay is abnormal. Factor VIII and IX assays are not indicated for this diagnosis."
  },
  {
    "id": 198,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "When performing PLT aggregation studies, which set of PLT aggregation results would most likely be associated with Bernard–Soulier syndrome?",
    "options": [
      "Normal PLT aggregation to collagen, adenosine diphosphate (ADP), and ristocetin",
      "Normal PLT aggregation to collagen, ADP, and epinephrine (EPI); decreased aggregation to ristocetin",
      "Normal PLT aggregation to EPI and ristocetin; decreased aggregation to collagen and ADP",
      "Normal PLT aggregation to EPI, ristocetin, and collagen; decreased aggregation to ADP"
    ],
    "answer": "B",
    "explanation": "Bernard–Soulier syndrome is a disorder of PLT adhesion caused by deficiency of glycoprotein Ib. PLT aggregation is normal in response to collagen, ADP, and EPI but abnormal in response to ristocetin."
  },
  {
    "id": 199,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which set of PLT responses would be most likely associated with Glanzmann thrombasthenia?",
    "options": [
      "Normal PLT aggregation to ADP and ristocetin; decreased aggregation to collagen",
      "Normal PLT aggregation to collagen; decreased aggregation to ADP and ristocetin",
      "Normal PLT aggregation to ristocetin; decreased aggregation to collagen, ADP, and EPI",
      "Normal PLT aggregation to ADP; decreased aggregation to collagen and ristocetin"
    ],
    "answer": "C",
    "explanation": "Glanzmann thrombasthenia is a disorder of PLT aggregation. PLT aggregation is normal in response to ristocetin, but abnormal in response to collagen, ADP, and EPI."
  },
  {
    "id": 200,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is a characteristic of acute immune thrombocytopenic purpura?",
    "options": [
      "Spontaneous remission within a few weeks",
      "Predominantly seen in adults",
      "Nonimmune PLT destruction",
      "Insidious onset"
    ],
    "answer": "A",
    "explanation": "Acute immune thrombocytopenic purpura is an immune-mediated disorder found predominantly in children. It is commonly associated with infection (primarily viral). It is characterized by abrupt onset, and spontaneous remission usually occurs within several weeks."
  },
  {
    "id": 201,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "TTP differs from DIC in that:",
    "options": [
      "APTT is normal in TTP but prolonged in DIC",
      "Schistocytes are not present in TTP but are present in DIC",
      "PLT count is decreased in TTP but normal in DIC",
      "PT is prolonged in TTP but decreased in DIC"
    ],
    "answer": "A",
    "explanation": "TTP is a PLT disorder in which PLT aggregation increases, resulting in thrombocytopenia. Schistocytes are present in TTP as a result of microangiopathic hemolytic anemia (MAHA); however, the PT and APTT are both normal. In DIC, the PT and APTT are both prolonged, the PLT count is decreased, and schistocytes are seen in the peripheral blood smear."
  },
  {
    "id": 202,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Several hours after birth, a baby boy develops petechiae and purpura and hemorrhagic diathesis. The PLT count is 18 × 109/L. What is the most likely explanation for the low PLT count?",
    "options": [
      "Drug-induced thrombocytopenia",
      "Secondary thrombocytopenia",
      "Neonatal alloimmune thrombocytopenia",
      "Neonatal DIC"
    ],
    "answer": "C",
    "explanation": "Neonatal alloimmune thrombocytopenia is similar to the hemolytic disease of the fetus and newborn. It results from immunization of the mother by fetal PLT antigens. The offending antibodies are commonly anti-PLT antigen A1 (PlA1), also referred to as human platelet antigen (HPA) 1a. These alloantibodies are directed against glycoproteins IIb/IIIa, Ib/IX, Ia/IIb, and CD 109. Maternal antibodies cross the placenta, resulting in thrombocytopenia in the fetus."
  },
  {
    "id": 203,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is associated with post-transfusion purpura (PTP)?",
    "options": [
      "Nonimmune thrombocytopenia/alloantibodies",
      "Immune-mediated thrombocytopenia/alloantibodies",
      "Immune-mediated thrombocytopenia/autoantibodies",
      "Nonimmune-mediated thrombocytopenia/autoantibodies"
    ],
    "answer": "B",
    "explanation": "PTP is a rare form of alloimmune thrombocytopenia characterized by severe thrombocytopenia occurring after transfusion of blood or blood products. PTP is caused by antibody-related PLT destruction in previously immunized patients. In the majority of cases, the alloantibody produced is against PlA1 (HPA-1a)."
  },
  {
    "id": 204,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Hemolytic uremic syndrome (HUS) is associated with:",
    "options": [
      "Fever, thrombocytosis, anemia, and renal failure",
      "Fever, granulocytosis, and thrombocytosis",
      "Escherichia coli 0157:H7",
      "Leukocytosis and thrombocytosis"
    ],
    "answer": "C",
    "explanation": "HUS is caused by E. coli 0157:H7. It is associated with ingestion of E. coli– contaminated foods and is commonly seen in children. The clinical manifestations in HUS are fever, diarrhea, thrombocytopenia, MAHA, and renal failure."
  },
  {
    "id": 205,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Storage pool deficiencies are defects of:",
    "options": [
      "PLT adhesion",
      "PLT aggregation",
      "PLT granules",
      "PLT production"
    ],
    "answer": "C",
    "explanation": "Storage pool deficiencies are defects of PLT granules. Most commonly, a decrease in PLT-dense granules is present with decreased release of ADP, ATP, calcium, and serotonin from PLT-dense granules."
  },
  {
    "id": 206,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Lumi-aggregation measures:",
    "options": [
      "PLT aggregation only",
      "PLT aggregation and adenosine triphosphate (ATP) release",
      "PLT adhesion",
      "PLT glycoprotein Ib"
    ],
    "answer": "B",
    "explanation": "Lumi-aggregation measures PLT aggregation and ATP release. It is performed on whole blood diluted with saline. PLT aggregation is measured by impedance, whereas ATP release is measured by addition of luciferin to a blood sample. There is no ATP release in storage pool deficiencies."
  },
  {
    "id": 207,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Neurological findings may be commonly associated with which of the following disorders?",
    "options": [
      "HUS",
      "TTP",
      "ITP",
      "PTP"
    ],
    "answer": "B",
    "explanation": "TTP is characterized by neurological problems, fever, thrombocytopenia, MAHA, and renal failure."
  },
  {
    "id": 208,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is correct regarding acquired TTP?",
    "options": [
      "Autoimmune disease",
      "Decreased VWF",
      "Decreased PLT aggregation",
      "Decreased PLT adhesion"
    ],
    "answer": "A",
    "explanation": "Acquired TTP is an autoimmune disease associated with autoantibodies produced against VWF cleaving enzyme (ADAMTS-13). This deficiency results in an increase in plasma VWF and consequently increased PLT aggregation and thrombocytopenia."
  },
  {
    "id": 209,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Hereditary hemorrhagic telangiectasia is a disorder of:",
    "options": [
      "PLTs",
      "Clotting proteins",
      "Fibrinolysis",
      "Connective tissue"
    ],
    "answer": "D",
    "explanation": "Hereditary hemorrhagic telangiectasia (Osler–Weber–Rendu syndrome) is a connective tissue disorder associated with telangiectases (dilated capillaries) of the mucous membranes and skin. Lesions may develop on the tongue, lips, palate, face, hands, and nasal mucosa and throughout the gastrointestinal tract. This disorder is an autosomal dominant condition that usually manifests in adolescence or early adulthood."
  },
  {
    "id": 210,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following prevents PLT aggregation?",
    "options": [
      "TXA2",
      "Thromboxane B2",
      "Prostacyclin",
      "Antithrombin (AT)"
    ],
    "answer": "C",
    "explanation": "Prostacyclin is released from the endothelium and is an inhibitor of PLT aggregation. TXA2 promotes PLT aggregation. Thromboxane B2 is an oxidized form of TXA2 and is excreted in urine. AT is a physiological anticoagulant."
  },
  {
    "id": 211,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which defect characterizes Gray syndrome?",
    "options": [
      "PLT adhesion defect",
      "Dense granule defect",
      "Alpha granule defect",
      "Coagulation defect"
    ],
    "answer": "C",
    "explanation": "Gray syndrome is a PLT granule defect associated with a decrease in alpha granules resulting in decreased production of alpha granule proteins, such as PF4 and beta thromboglobulin. Alpha granule deficiency results in the appearance of agranular PLTs when viewed in a Wright-stained blood smear."
  },
  {
    "id": 212,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "The P2Y12 ADP receptor agonist assay may be used to monitor PLT aggregation inhibition to which of the following drugs?",
    "options": [
      "Warfarin",
      "Heparin",
      "Low-molecular-weight heparin (LMWH)",
      "Clopidogrel (Plavix)"
    ],
    "answer": "D",
    "explanation": "The VerifyNow P2Y12 test is used to assess a patient’s response to antiplatelet drugs, such as clopidogrel (Plavix) and prasugrel (Effient). These drugs are given orally along with aspirin for prevention of thrombosis or as alternative antiplatelet drugs for patients who cannot tolerate or are not sensitive to aspirin. Clopidogrel and prasugrel prevent PLT aggregation by irreversibly binding to P2Y12, which is a PLT membrane receptor for ADP. The VerifyNow P2Y12 test is a whole blood test and uses ADP as an aggregating agent to measure the level of PLT aggregation impaired by these medications. The baseline value for PLT aggregation is established. The percent (%) change from baseline aggregation is calculated and reported as % P2Y12 inhibition."
  },
  {
    "id": 213,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following instruments can be used to evaluate PLT function?",
    "options": [
      "PLT aggregometer",
      "VerifyNow",
      "PFA-100",
      "All of the above"
    ],
    "answer": "D",
    "explanation": "All of the instruments listed can be used to evaluate PLT function. PLT function testing is done either to determine the cause of bleeding in a patient with normal PLT count and normal coagulation tests or to assess the efficacy of antiplatelet drugs. PLT aggregometry is used for the diagnosis of inherited PLT disorders. A PLT aggregometer uses PLT-rich plasma to measure PLT aggregation in response to different PLT aggregating agents by measuring light transmission. A Lumi- aggregometer uses whole blood and has the ability to measure dense-granule secretion (by using a luminescent marker) in addition to PLT aggregation. The VerifyNow measures a patient’s response to multiple antiplatelet drugs, including aspirin, P2Y12 inhibitors, and glycoprotein IIb/IIIa inhibitors. The Platelet Function Ananlyzer-100 (PFA-100) is used as a screening tool for PLT function, and has replaced the bleeding time test. It uses citrated whole blood and two cartridges. Whole blood (800 μL) is put into each test cartridge. Vacuum is used to move the blood through a very thin glass tube that has been coated with a membrane containing collagen and either EPI or ADP. This coating activates the PLTs in the moving sample and promotes PLT adhesion and aggregation. The time it takes for the clot to form inside the glass tube and prevent further flow is measured as the closure time (CT). Initial screening is done with collagen/EPI. If CT is normal, it is unlikely that PLT dysfunction exists. The collagen/ADP membrane is used to confirm an abnormal collagen/EPI test result. If both tests show abnormal results, it is likely that the patient has a PLT dysfunction, and further testing for inherited and acquired bleeding disorders is indicated. If collagen/ADP is normal, then the abnormal collagen/EPI test result is likely caused by aspirin sensitivity."
  },
  {
    "id": 214,
    "section": "Platelet and Vascular Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following PLT aggregating agents demonstrates a monophasic aggregation curve when used in the optimal concentration?",
    "options": [
      "Thrombin",
      "Collagen",
      "ADP",
      "EPI"
    ],
    "answer": "B",
    "explanation": "Collagen is the only commonly used agent that demonstrates a single-wave"
  },
  {
    "id": 215,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "The APTT is sensitive to a deficiency of which clotting factor?",
    "options": [
      "Factor VII",
      "Factor X",
      "PF3",
      "Calcium"
    ],
    "answer": "B",
    "explanation": "The APTT is sensitive to the deficiency of coagulation factors in the intrinsic pathway (factors XII, XI, IX, and VIII) and the common pathway (factors X, V, II, and I)."
  },
  {
    "id": 216,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which test result would be normal in a patient with dysfibrinogenemia?",
    "options": [
      "TT",
      "APTT",
      "PT",
      "Immunologic fibrinogen level"
    ],
    "answer": "D",
    "explanation": "The level of plasma fibrinogen determined immunologically is normal. In a patient with dysfibrinogenemia, fibrinogen is not polymerized properly, causing abnormal results of the fibrinogen-dependent coagulation tests."
  },
  {
    "id": 217,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "A patient with a prolonged PT is given intravenous vitamin K. PT is corrected to normal after 24 hours. Which clinical condition most likely caused these results?",
    "options": [
      "Necrotic liver disease",
      "Factor X deficiency",
      "Fibrinogen deficiency",
      "Obstructive jaundice"
    ],
    "answer": "D",
    "explanation": "Obstructive jaundice contributes to coagulation disorders by preventing vitamin K absorption. Vitamin K is fat soluble and requires bile salts for absorption. Parenteral administration of vitamin K bypasses the bowel, hence the need for bile salts."
  },
  {
    "id": 218,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which factor deficiency is associated with prolonged PT and APTT?",
    "options": [
      "Factor X",
      "Factor VIII",
      "Factor IX",
      "Factor XI"
    ],
    "answer": "A",
    "explanation": "Factor X, a common pathway factor deficiency, is most likely suspected because both PT and APTT are prolonged. Other causes may include liver disease, vitamin K deficiency, and anticoagulant drugs, such as warfarin and heparin."
  },
  {
    "id": 219,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Prolonged APTT is corrected with factor VIII–deficient plasma but not with factor IX– deficient plasma. Which factor is deficient?",
    "options": [
      "Factor V",
      "Factor VIII",
      "Factor IX",
      "Factor X"
    ],
    "answer": "C",
    "explanation": "Because prolonged APTT is not corrected with factor IX–deficient plasma, factor IX is suspected to be deficient in the test plasma."
  },
  {
    "id": 220,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is a characteristic of classic hemophilia A?",
    "options": [
      "Abnormal PLT aggregation",
      "Autosomal recessive inheritance",
      "Mild to severe bleeding episodes",
      "Prolonged PT"
    ],
    "answer": "C",
    "explanation": "Hemophilia A (factor VIII deficiency) is characterized by mild to severe bleeding episodes, depending on the concentration of factor VIII:C. Hemophilia A is inherited as a sex-linked disease. PLT aggregation and PT are both normal in hemophilia A."
  },
  {
    "id": 221,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Refer to the following results: PT = prolonged APTT = prolonged PLT count = decreased Which disorder may be indicated?",
    "options": [
      "Factor VIII deficiency",
      "von Willebrand disease",
      "DIC",
      "Factor IX deficiency"
    ],
    "answer": "C",
    "explanation": "In DIC, there is a diffuse intravascular generation of thrombin and fibrin. As a result, clotting factors and PLTs are consumed, resulting in decreased PLT count and increased PT and APTT."
  },
  {
    "id": 222,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is a predisposing condition for the development of DIC?",
    "options": [
      "Adenocarcinoma",
      "Idiopathic thrombocytopenic purpura (ITP)",
      "Post transfusion purpura (PTP)",
      "Heparin-induced thrombocytopenia (HIT)"
    ],
    "answer": "A",
    "explanation": "Adenocarcinoma can liberate procoagulant (thromboplastic) substances that can activate prothrombin intravascularly. ITP is a thrombocytopenia caused by an autoantibody; PTP is an alloimmune thrombocytopenia caused by transfusion of blood or blood products; HIT results from an antibody to heparin–PF4 complex causing thrombocytopenia in 1% to 5% of patients who are on heparin therapy. In some affected persons, thrombosis may also occur."
  },
  {
    "id": 223,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Factor XII deficiency is associated with:",
    "options": [
      "Bleeding episodes",
      "Epistaxis",
      "Decreased risk of thrombosis",
      "Increased risk of thrombosis"
    ],
    "answer": "D",
    "explanation": "Factor XII–deficient patients commonly have thrombotic episodes. In vitro, activated factor XII (XIIa) activates factor XI to factor XIa. In vivo, however, factor XII plays a major role in the fibrinolytic system by activating plasminogen to form plasmin. Hemorrhagic manifestations are not associated with factor XII deficiency because VIIa/TF can activate factor IX to factor IXa and factor X to factor Xa to generate thrombin."
  },
  {
    "id": 224,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "The following results were obtained on a patient: normal PLT count and function, normal PT, and prolonged APTT. Which of the following disorders is most consistent with these results?",
    "options": [
      "Hemophilia A",
      "Bernard–Soulier syndrome",
      "von Willebrand disease",
      "Glanzmann thrombasthenia"
    ],
    "answer": "A",
    "explanation": "Hemophilia A is associated with deficiency of factor VIII, resulting in bleeding and abnormal APTT. The PLT number and function are normal in this disorder. Von Willebrand disease is a disorder of PLT adhesion associated with decreased VWF and factor VIII, causing an abnormal PLT function test result and abnormal APTT. Both Glanzmann thrombasthenia and Bernard–Soulier syndrome cause abnormal PLT aggregation but do not cause abnormal APTT."
  },
  {
    "id": 225,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "The following laboratory results were obtained from a 40-year-old woman: PT = 20 sec; APTT = 50 sec; TT = 18 sec. What is the most probable diagnosis?",
    "options": [
      "Factor VII deficiency",
      "Factor VIII deficiency",
      "Factor X deficiency",
      "Hypofibrinogenemia"
    ],
    "answer": "D",
    "explanation": "Fibrinogen (factor I) is a clotting protein of the common pathway and is evaluated by TT. In hypofibrinogenemia (fibrinogen concentration less than 100 mg/dL), PT, APTT, and TT are prolonged. In factor VII deficiency, APTT is normal; in factor VIII deficiency, PT is normal; and in factor X deficiency, TT is normal."
  },
  {
    "id": 226,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "When performing a factor VIII activity assay, a patient’s plasma is mixed with:",
    "options": [
      "Normal patient plasma",
      "Factor VIII–deficient plasma",
      "Plasma with a high concentration of factor VIII",
      "Normal control plasma"
    ],
    "answer": "B",
    "explanation": "Coagulation factor assays are based on the ability of the patient’s plasma to correct any specific factor–deficient plasma. To measure for factor VIII activity in a patient’s plasma, diluted patient plasma is mixed with factor VIII–deficient plasma. The APTT test is performed on the mixture. Each laboratory should calculate its own normal ranges, which are based on the patient population, reagents, and instrument used. A range of 50% to 150% is considered normal."
  },
  {
    "id": 227,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "The most suitable product for treatment of factor VIII deficiency is:",
    "options": [
      "Fresh frozen plasma (FFP)",
      "Factor VIII concentrate",
      "Prothrombin complex concentrate",
      "Factor V Leiden"
    ],
    "answer": "B",
    "explanation": "Factor VIII concentrate (human or recombinant) is the treatment of choice for patients with factor VIII deficiency. FFP contains factor VIII; however, it is no longer used as the primary treatment for factor VIII deficiency. Prothrombin complex concentrate is used to treat patients with factor VIII inhibitor."
  },
  {
    "id": 228,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is associated with an abnormal PLT aggregation test result?",
    "options": [
      "Factor VIII deficiency",
      "Factor VIII inhibitor",
      "Lupus anticoagulant",
      "Afibrinogenemia"
    ],
    "answer": "D",
    "explanation": "Fibrinogen is a plasma protein that is essential for PLT aggregation as well as fibrin formation. In afibrinogenemia, PLT aggregation is abnormal."
  },
  {
    "id": 229,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Refer to the following results: PT = normal APTT = prolonged PLT count = normal PLT aggregation to ristocetin = abnormal Which of the following disorders may be indicated?",
    "options": [
      "Factor VIII deficiency",
      "DIC",
      "von Willebrand disease",
      "Factor IX deficiency"
    ],
    "answer": "C",
    "explanation": "VWF is involved in both PLT adhesion and coagulation via complexing with factor VIII. Therefore, in von Willebrand disease (deficiency or functional abnormality of VWF) factor VIII is also decreased, causing abnormal APTT as well as abnormal PLT aggregation to ristocetin. The PLT count and PT are not affected in VWF deficiency."
  },
  {
    "id": 230,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which results are associated with hemophilia A?",
    "options": [
      "Prolonged APTT, normal PT",
      "Prolonged PT and APTT",
      "Prolonged PT, normal APTT",
      "Normal PT and APTT"
    ],
    "answer": "A",
    "explanation": "Hemophilia A is associated with factor VIII deficiency. Factor VIII is a factor in the intrinsic coagulation pathway that is evaluated by the APTT test and not the PT test. The PT test evaluates the extrinsic and common pathways."
  },
  {
    "id": 231,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Fibrin monomers are increased in which of the following conditions?",
    "options": [
      "Primary fibrinolysis",
      "DIC",
      "Factor VIII deficiency",
      "Fibrinogen deficiency"
    ],
    "answer": "B",
    "explanation": "Increased fibrin monomers result from coagulation activation. DIC is an acquired condition associated with spontaneous activation of coagulation and fibrinolysis. In primary fibrinolysis, the fibrinolytic system is activated, and fibrin monomers are normal."
  },
  {
    "id": 232,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is associated with multiple factor deficiencies?",
    "options": [
      "An inherited disorder of coagulation",
      "Severe liver disease",
      "Dysfibrinogenemia",
      "Lupus anticoagulant"
    ],
    "answer": "B",
    "explanation": "Most of the clotting factors are made in the liver. Therefore, severe liver disease results in multiple-factor deficiencies. An inherited disorder of coagulation is commonly associated with a single-factor deficiency. Lupus anticoagulant is directed against the phospholipid-dependent coagulation factors. Dysfibrinogenemia results from an abnormal fibrinogen molecule."
  },
  {
    "id": 233,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Normal PT and APTT results in a patient with poor wound healing may be associated with:",
    "options": [
      "Factor VII deficiency",
      "Factor VIII deficiency",
      "Factor XII deficiency",
      "Factor XIII deficiency"
    ],
    "answer": "D",
    "explanation": "Factor XIII deficiency can lead to impaired wound healing and may cause severe bleeding problems. Factor XIII is a fibrin stabilizing factor that changes the fibrinogen bonds in fibrin polymers to stable covalent bonds. Factor XIII is not involved in the process of fibrin formation and, therefore, PT and APTT are both normal."
  },
  {
    "id": 234,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Fletcher factor (prekallikrein) deficiency may be associated with:",
    "options": [
      "Bleeding",
      "Thrombosis",
      "Thrombocytopenia",
      "Thrombocytosis"
    ],
    "answer": "B",
    "explanation": "Fletcher factor (prekallikrein) is referred to as a contact factor. Activated prekallikrein is named kallikrein. In vitro, kallikrein is involved in activation of factor XI to XIa causing prolonged APTT. In vivo, it plays a role in the fibrinolytic system and, similar to factor XII deficiency, Fletcher factor deficiency may be associated with thrombosis."
  },
  {
    "id": 235,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "One of the complications associated with a severe hemophilia A is:",
    "options": [
      "Hemarthrosis",
      "Mucous membrane bleeding",
      "Mild bleeding during surgery",
      "Immune-mediated thrombocytopenia"
    ],
    "answer": "A",
    "explanation": "In severe hemophilia A, factor VIII activity is less than 1%, resulting in a severe bleeding diathesis, such as hemarthrosis (bleeding into the joints)."
  },
  {
    "id": 236,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "The most common subtype of classic von Willebrand disease is:",
    "options": [
      "Type 1",
      "Type 2A",
      "Type 2B",
      "Type 3"
    ],
    "answer": "A",
    "explanation": "VWF is a multimeric plasma glycoprotein that results in different subtypes of von Willebrand disease with varied severity. The most common subtype is subtype 1, and 70% to 80% of these cases are associated with mild bleeding. Subtype 3 involves the total absence of the von Willebrand molecule and is associated with severe bleeding. Subtypes 2A and 2B result in deficiency of intermediate- and/or high-molecular- weight portions of the von Willebrand molecule and are associated with 10% to 12% and 3% to 6% of cases of von Willebrand disease, respectively."
  },
  {
    "id": 237,
    "section": "Coagulation System Disorders",
    "chapter": "Hemostasis & Coagulation",
    "question": "Prolonged APTT and PT are corrected when mixed with normal plasma. Which factor is most likely deficient?",
    "options": [
      "Factor VIII",
      "Factor V",
      "Factor XI",
      "Factor IX"
    ],
    "answer": "B",
    "explanation": "Factor V (common pathway factor) deficiency is most likely suspected because both"
  },
  {
    "id": 238,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which characteristic describes antithrombin (AT)?",
    "options": [
      "It is synthesized in megakaryocytes",
      "It is activated by protein C",
      "It is a cofactor of heparin",
      "It is a pathological inhibitor of coagulation"
    ],
    "answer": "C",
    "explanation": "AT is a heparin cofactor and is the most important naturally occurring physiological inhibitor of blood coagulation. It represents about 75% of antithrombotic activity and is an α2-globulin made by the liver."
  },
  {
    "id": 239,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which laboratory test is affected by heparin therapy?",
    "options": [
      "Thrombin time",
      "Fibrinogen assay",
      "Protein C assay",
      "Protein S assay"
    ],
    "answer": "A",
    "explanation": "Heparin is an AT drug and therefore increases TT along with APTT and PT. Heparin therapy has no effect on fibrinogen, protein C, or protein S assays."
  },
  {
    "id": 240,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Abnormal APTT caused by a pathological circulating anticoagulant is:",
    "options": [
      "Corrected with factor VIII–deficient plasma",
      "Corrected with factor IX–deficient plasma",
      "Corrected with normal plasma",
      "Not corrected with normal plasma"
    ],
    "answer": "D",
    "explanation": "In the presence of a pathological circulating anticoagulant, a mixing test using normal plasma does not correct abnormal APTT. These anticoagulants are pathological substances and are endogenously produced. They are either directed against a specific clotting factor or against a group of factors. Prolonged APTT caused by a factor deficiency is corrected when mixed with normal plasma. Factors VIII– and factor IX– deficient plasmas are used for assaying the activities of factors VIII and IX, respectively."
  },
  {
    "id": 241,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "The lupus anticoagulant affects which of the following tests?",
    "options": [
      "Factor VIII assay",
      "Factor IX assay",
      "VWF assay",
      "Phospholipid-dependent assays"
    ],
    "answer": "D",
    "explanation": "The lupus anticoagulant interferes with phospholipid-dependent coagulation assays, such as the PT and APTT tests. The lupus anticoagulant does not inhibit clotting factor assays and does not inhibit in vivo coagulation."
  },
  {
    "id": 242,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which statement about warfarin (Coumadin) is accurate?",
    "options": [
      "It is a vitamin B antagonist",
      "It is not recommended for pregnant and lactating women",
      "It needs AT as a cofactor",
      "APTT test is used to monitor its dosage"
    ],
    "answer": "B",
    "explanation": "Warfarin (Coumadin) crosses the placenta and is present in human milk; it is not recommended for pregnant and lactating women. Warfarin is a vitamin K antagonist drug that retards synthesis of the active form of vitamin K–dependent factors (II, VII, IX, and X). AT is a heparin (not warfarin) cofactor. The INR is used to monitor warfarin dosage."
  },
  {
    "id": 243,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which statement regarding protein C is correct?",
    "options": [
      "It is a vitamin K–independent zymogen",
      "It is activated by fibrinogen",
      "It activates cofactors V and VIII",
      "Its activity is enhanced by protein S"
    ],
    "answer": "D",
    "explanation": "Protein S functions as a cofactor of protein C and, as such, enhances its activity. Activated protein C (APC) inactivates factors Va and VIIIa."
  },
  {
    "id": 244,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is an appropriate screening test for the diagnosis of lupus anticoagulant?",
    "options": [
      "Thrombin time",
      "Diluted Russell viper venom test (DRVVT)",
      "D-dimer test",
      "Fibrinogen assay"
    ],
    "answer": "B",
    "explanation": "Russell viper venom (RVV) reagent contains factors X and V, activating enzymes that are strongly phospholipid dependent. The reagent also contains RVV, Ca2+, and phospholipid. In the presence of phospholipid autoantibodies, such as lupus anticoagulant, the reagent phospholipid is partially neutralized, causing prolongation of clotting time. TT evaluates fibrinogen. D-dimer tests evaluate fibrin degradation products. Fibrinogen assay and TT are not indicated for the diagnosis of lupus anticoagulant."
  },
  {
    "id": 245,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is most commonly associated with activated protein C resistance (APCR)?",
    "options": [
      "Bleeding",
      "Thrombosis",
      "Epistaxis",
      "Menorrhagia"
    ],
    "answer": "B",
    "explanation": "APCR is the single most common cause of inherited thrombosis. In 90% of individuals, the cause is gene mutation of factor V (factor V Leiden). Affected individuals are predisposed to thrombosis, mainly after age 40 years. Heterozygous individuals may not manifest thrombosis unless other clinical conditions coexist."
  },
  {
    "id": 246,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 50-year-old man has been on heparin for the past 7 days. Which combination of tests is expected to be abnormal?",
    "options": [
      "PT and APTT only",
      "APTT, TT only",
      "APTT, TT, fibrinogen assay",
      "PT, APTT, TT"
    ],
    "answer": "D",
    "explanation": "Heparin is a therapeutic anticoagulant with an AT activity. Heparin also inhibits factors XIIa, XIa, Xa, and IXa. In patients receiving heparin therapy, PT, APTT, and TT are all prolonged. Quantitative fibrinogen assay, however, is not affected by heparin therapy."
  },
  {
    "id": 247,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following drugs inhibits ADP-mediated PLT aggregation?",
    "options": [
      "Heparin",
      "Warfarin",
      "Aspirin",
      "Prasugrel"
    ],
    "answer": "D",
    "explanation": "Prasugrel (Effient) is an antiplatelet drug that reduces PLT aggregation by irreversibly blocking P2Y12 receptors on the PLT surface membrane, thereby inhibiting PLT aggregation to ADP. Aspirin is another antiplatelet drug that inhibits PLT aggregation by blocking the action of the enzyme cyclo-oxygenase. Warfarin and heparin are anticoagulant drugs that act against clotting factors."
  },
  {
    "id": 248,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Thrombin–TM complex is necessary for activation of:",
    "options": [
      "Protein C",
      "AT",
      "Protein S",
      "Factors V and VIII"
    ],
    "answer": "A",
    "explanation": "Protein C is activated by thrombin–TM complex. TM is a transmembrane protein that accelerates protein C activation 1,000-fold by forming a complex with thrombin. When thrombin binds to TM, it loses its clotting function, including activation of factors V and VIII. APC deactivates factors Va and VIIIa. Protein S is a cofactor necessary for the activation of protein C."
  },
  {
    "id": 249,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which test is used to monitor heparin therapy?",
    "options": [
      "INR",
      "Chromogenic anti–factor Xa assay",
      "TT",
      "PT"
    ],
    "answer": "B",
    "explanation": "Heparin dosage can be best monitored by the chromogenic anti–factor Xa assay. In anti–factor Xa assay, the concentration of heparin is determined by inhibition of factor Xa by AT. Anti–factor Xa assay uses a reagent with a fixed concentration of factor Xa and AT. Heparin forms a complex with AT and factor Xa reagents. Excess factor Xa combines with the chromogenic substrate to form a colored product; the color intensity is inversely proportional to the concentration of heparin. PT would be prolonged in heparin therapy, but the PT test is not sensitive enough to be used to monitor heparin therapy. Heparin inhibits thrombin and, therefore, causes prolonged TT. The TT test, however, is not used to monitor heparin therapy either."
  },
  {
    "id": 250,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which test is commonly used to monitor warfarin therapy?",
    "options": [
      "INR",
      "APTT",
      "TT",
      "Ecarin time"
    ],
    "answer": "A",
    "explanation": "Warfarin is a vitamin K–antagonist drug. It inhibits vitamin K–dependent factors (II, VII, IX, and X) and other vitamin K–dependent proteins, such as proteins C and S. Warfarin therapy is monitored with the INR. An INR of 2.0 to 3.0 is used as the target when monitoring warfarin therapy for prophylaxis and treatment of deep vein thrombosis (DVT). A higher dose of warfarin (giving an INR of 2.5–3.5) is required for patients with mechanical heart valves."
  },
  {
    "id": 251,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which clotting factors (cofactors) are inhibited by protein S?",
    "options": [
      "Factors V and X",
      "Factors Va and VIIIa",
      "Factors VIII and IX",
      "Factors VIII and X"
    ],
    "answer": "B",
    "explanation": "Factors Va and VIIIa are deactivated by protein S and activated by protein C."
  },
  {
    "id": 252,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which drug promotes fibrinolysis?",
    "options": [
      "Warfarin",
      "Heparin",
      "Urokinase",
      "Aspirin"
    ],
    "answer": "C",
    "explanation": "Urokinase is a thrombolytic drug that can be used to treat acute arterial thrombosis. Urokinase can also be used for the treatment of venous thromboembolism, myocardial infarction, and clotted catheters. Warfarin and heparin are anticoagulant drugs, whereas aspirin prevents PLT aggregation by inhibiting cyclo-oxygenase."
  },
  {
    "id": 253,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Diagnosis of lupus anticoagulant is confirmed by which of the following criteria?",
    "options": [
      "Decreased APTT",
      "Correction of APPT by mixing studies",
      "Neutralization of the antibody by high concentration of phospholipids",
      "Confirmation that abnormal coagulation tests are related to factor deficiencies"
    ],
    "answer": "C",
    "explanation": "The International Society of Hemostasis and Thrombosis has recommended four criteria for the diagnosis of lupus anticoagulant: (1) prolongation of one or more of the phospholipid-dependent clotting tests, such as APTT or DRVVT; (2) presence of an inhibitor confirmed by mixing studies (not corrected); (3) evidence that the inhibitor is directed against phospholipids by neutralizing the antibodies with a high concentration of phospholipids (PLT neutralization test or DRVVT with platelet rich plasma or confirming phospholipid reagent); and (4) lack of any other causes for thrombosis."
  },
  {
    "id": 254,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following abnormalities is consistent with the presence of lupus anticoagulant?",
    "options": [
      "Decreased APTT/bleeding complications",
      "Prolonged APTT/thrombosis",
      "Prolonged APTT/thrombocytosis",
      "Thrombocytosis/thrombosis"
    ],
    "answer": "B",
    "explanation": "Lupus anticoagulant interferes with phospholipids in the APTT reagent, resulting in prolongation of APTT. However, in vivo, lupus anticoagulant decreases fibrinolytic activity, causing an increased risk of thrombosis. Lupus anticoagulant does not result in a bleeding tendency unless there is a coexisting thrombocytopenia or other coagulation abnormality."
  },
  {
    "id": 255,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is a characteristic of LMWH?",
    "options": [
      "Generally requires monitoring",
      "Specifically acts on factor Va",
      "Has a longer half-life compared with unfractionated heparin (UFH)",
      "Can be used as a fibrinolytic agent"
    ],
    "answer": "C",
    "explanation": "LMWH is a small glycosaminoglycan that is derived from UFH. LMWH has a low affinity for plasma proteins and endothelial cells and therefore has a longer half-life. The half-life of the drug does not depend on the dosage. LMWH has an inhibitory effect on factors Xa and IIa. It does not require routine monitoring except in patients with renal failure, obese patients, pediatric patients, and pregnant patients."
  },
  {
    "id": 256,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following tests is most likely to be abnormal in patients taking aspirin?",
    "options": [
      "PLT morphology",
      "PLT count",
      "PLT aggregation",
      "PT"
    ],
    "answer": "C",
    "explanation": "Aspirin is an antiplatelet drug. It prevents PLT aggregation by inhibition of cyclo- oxygenase. Aspirin has no effect on the PLT count, PLT morphology, or PT."
  },
  {
    "id": 257,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is associated with AT deficiency?",
    "options": [
      "Thrombocytosis",
      "Thrombosis",
      "Thrombocytopenia",
      "Bleeding"
    ],
    "answer": "B",
    "explanation": "AT is a physiological anticoagulant. It inhibits factors IIa, Xa, IXa, XIa, and XIIa. Deficiency of AT is associated with thrombosis. Thrombotic events commonly occur when AT deficiency is associated with another risk factor, such as pregnancy, surgery, or an inherited thrombotic disorder (e.g., factor V Leiden)."
  },
  {
    "id": 258,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following may be associated with thrombotic events?",
    "options": [
      "Decreased protein C",
      "Increased fibrinolysis",
      "Afibrinogenemia",
      "Idiopathic thrombocytopenic purpura"
    ],
    "answer": "A",
    "explanation": "Protein C is a physiological inhibitor of coagulation. It is activated by thrombin–TM complex. APC inhibits cofactors Va and VIIIa. Protein C deficiency is associated with thrombosis. Increased fibrinolysis, afibrinogenemia, and ITP are associated with bleeding."
  },
  {
    "id": 259,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Aspirin resistance may be associated with:",
    "options": [
      "Bleeding",
      "Factor VIII deficiency",
      "Thrombosis",
      "Thrombocytosis"
    ],
    "answer": "C",
    "explanation": "Up to 22% of patients taking aspirin become resistant to aspirin’s antiplatelet effect. Patients who are aspirin resistant have a higher risk of thrombosis (heart attacks and strokes)."
  },
  {
    "id": 260,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Prolonged TT is indicative of which of the following antithrombotic agents?",
    "options": [
      "Prasugrel",
      "Clopidogrel",
      "Aspirin",
      "Heparin"
    ],
    "answer": "D",
    "explanation": "Heparin is an AT drug causing prolonged TT in patients who are on heparin therapy. Prasugrel, clopidogrel, and aspirin are antiplatelet drugs causing inhibition of PLT aggregation."
  },
  {
    "id": 261,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Screening tests for thrombophilia should be performed on:",
    "options": [
      "All pregnant women because of the risk of thrombosis",
      "Patients with a negative family history",
      "Patients with thrombotic events occurring at a young age",
      "Patients who are receiving anticoagulant therapy"
    ],
    "answer": "C",
    "explanation": "Laboratory tests for evaluation of thrombophilia are justified in young patients with thrombotic events, in patients with a positive family history after a single thrombotic event, in those with recurrent spontaneous thrombosis, and in pregnancies associated with thrombosis."
  },
  {
    "id": 262,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Prothrombin G20210A is characterized by which of the following causes and conditions?",
    "options": [
      "Single mutation of prothrombin molecule/bleeding",
      "Single mutation of prothrombin molecule/thrombosis",
      "Decreased levels of prothrombin in plasma/thrombosis",
      "Increased levels of prothrombin in plasma/bleeding"
    ],
    "answer": "B",
    "explanation": "Prothrombin G20210A is defined as a single-point mutation of the prothrombin gene, resulting in increased concentration of plasma prothrombin and, thus, is a risk factor for thrombosis. Prothrombin G20210A is the second most common cause of inherited hypercoagulability (after factor V Leiden). It has the highest incidence in white people from southern Europe. The thrombotic episodes generally occur before age 40 years."
  },
  {
    "id": 263,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Factor V Leiden promotes thrombosis by preventing:",
    "options": [
      "Inactivation of factor Va",
      "Activation of factor V",
      "Activation of protein C",
      "Activation of protein S"
    ],
    "answer": "A",
    "explanation": "Factor V Leiden is a single-point mutation in the factor V gene that inhibits factor Va inactivation by protein C. APC enhances deactivation of factors Va and VIIIa."
  },
  {
    "id": 264,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "What is the approximate incidence of antiphospholipid antibodies in the general population?",
    "options": [
      "Less than 1%",
      "1%–2%",
      "3%–8%",
      "10%–15%"
    ],
    "answer": "B",
    "explanation": "The incidence of antiphospholipid antibodies in the general population is about 1% to 2%."
  },
  {
    "id": 265,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following laboratory tests is helpful in the diagnosis of aspirin resistance?",
    "options": [
      "APTT",
      "PT",
      "PLT count and morphology",
      "PLT aggregation"
    ],
    "answer": "D",
    "explanation": "Currently, the PLT aggregation test is considered the gold standard for evaluation of aspirin resistance. In aspirin resistance, PLT aggregation is not inhibited by aspirin ingestion. Aspirin resistance has no effect on PLT count and morphology."
  },
  {
    "id": 266,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following complications may occur as a result of decreased tissue factor pathway inhibitor (TFPI)?",
    "options": [
      "Increased episodes of hemorrhage",
      "Increased risk of thrombosis",
      "Impaired PLT plug formation",
      "Immune thrombocytopenia"
    ],
    "answer": "B",
    "explanation": "TFPI is released from the vasculature and is the most important inhibitor of the extrinsic pathway. TFPI inhibits factors Xa and VIIa–TF complex. Therefore, the deficiency of TFPI is associated with thrombosis."
  },
  {
    "id": 267,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Factor VIII inhibitors occur in __________ of patients with factor VIII deficiency.",
    "options": [
      "40%–50%",
      "30%–40%",
      "25%–30%",
      "20%–25%"
    ],
    "answer": "D",
    "explanation": "Factor VIII inhibitors (alloantibodies) occur in 20% to 25% of patients who have factor VIII deficiency and are receiving factor VIII replacement."
  },
  {
    "id": 268,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which therapy and resulting mode of action are appropriate for the treatment of a patient with a high titer of factor VIII inhibitors?",
    "options": [
      "Factor VIII concentrate to neutralize the antibodies",
      "Recombinant factor VIIa (rVIIa) to activate factor X",
      "Factor X concentrate to activate the common pathway",
      "FFP to replace factor VIII"
    ],
    "answer": "B",
    "explanation": "rVIIa is effective for the treatment of a high-titer factor VIII inhibitor. Factor VIIa can directly activate factor X to factor Xa in the absence of factors VIII and IX. rVIIa does not stimulate anamnestic responses in patients with factor VIII inhibitor. Factor VIII concentrate is used for a low-titer factor VIII inhibitor. Factor X concentrate and FFP are not the treatments of choice for factor VIII inhibitor."
  },
  {
    "id": 269,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "The Bethesda assay is used for which determination?",
    "options": [
      "Lupus anticoagulant titer",
      "Factor VIII inhibitor titer",
      "Factor V Leiden titer",
      "Protein S deficiency"
    ],
    "answer": "B",
    "explanation": "The Bethesda assay is a quantitative assay for factor VIII inhibitor. In this assay, normal plasma is incubated with different dilutions of the patient’s plasma or with a normal control. The inhibitor inactivates factor VIII present in normal plasma following incubation for 2 hours at 37°C. The residual activities in the sample are determined, and the inhibitor titer is calculated."
  },
  {
    "id": 270,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Hyperhomocysteinemia may be a risk factor for:",
    "options": [
      "Bleeding",
      "Thrombocythemia",
      "Thrombosis",
      "Thrombocytopenia"
    ],
    "answer": "C",
    "explanation": "Elevated plasma homocysteine is a risk factor for the development of DVT, coronary heart disease and stroke. Homocystinemia may be inherited or acquired. Acquired homocystinemia is caused by dietary deficiencies of vitamins B6, B12, and folic acid."
  },
  {
    "id": 271,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which drug may be associated with DVT?",
    "options": [
      "Aspirin",
      "tPA",
      "Oral contraceptives",
      "Clopidogrel (Plavix)"
    ],
    "answer": "C",
    "explanation": "Oral contraceptive drugs are acquired risk factors for thrombosis. Aspirin and clopidogrel are antiplatelet drugs, and tPA is a fibrinolytic drug used for the treatment of thrombosis."
  },
  {
    "id": 272,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Argatroban may be used as an anticoagulant drug in patients with:",
    "options": [
      "DVT",
      "Hemorrhage",
      "TTP",
      "Thrombocytosis"
    ],
    "answer": "A",
    "explanation": "Argatroban is a direct thrombin-inhibiting drug and may be used as an anticoagulant in patients with HIT to prevent thrombosis. Argatroban is a small synthetic molecule that binds to free and clot-bound thrombin. Argatroban affects TT, PT, APTT, and activated clotting time (ACT) tests. The APTT test is recommended for monitoring the dosage with the target therapeutic range of 1.5 to 3.0 times the mean of the laboratory reference range. In patients with lupus anticoagulant or factor deficiencies, baseline APTT is prolonged; in these conditions, Ecarin time can be used as an alternative assay."
  },
  {
    "id": 273,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Heparin-induced thrombocytopenia (HIT) results from:",
    "options": [
      "Antibodies to heparin",
      "Antibodies to PLTs",
      "Antibodies to PF4",
      "Antibodies to heparin–PF4 complex"
    ],
    "answer": "D",
    "explanation": "HIT is an immune process caused by the production of antibodies to heparin–PF4 complex. This immune complex binds to PLT Fc receptors, causing PLT activation and formation of PLT microparticles, which, in turn, induce hypercoagulability and thrombocytopenia."
  },
  {
    "id": 274,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which laboratory test is used to screen for APCR?",
    "options": [
      "Mixing studies with normal plasma",
      "Mixing studies with factor-deficient plasma",
      "Modified APTT with and without APC",
      "Modified PT with and without APC"
    ],
    "answer": "C",
    "explanation": "APCR can be evaluated by performing a two-part APTT test. The APTT is measured on the patient’s plasma with and without the addition of APC. The result is expressed as the ratio of the APTT with APC to the APTT without APC. The normal ratio is 2:5. Patients with APCR have a lower ratio than the reference range. A positive screening test should be followed by a confirmatory test, such as polymerase chain reaction (PCR) for factor V Leiden."
  },
  {
    "id": 275,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Ecarin clotting time may be used to monitor:",
    "options": [
      "Heparin therapy",
      "Warfarin therapy",
      "Fibrinolytic therapy",
      "Bivalirudin"
    ],
    "answer": "D",
    "explanation": "Ecarin clotting time, a snake venom–based clotting assay, may be used to monitor bivalirudin therapy in instances when the baseline APTT is prolonged as a result of lupus anticoagulant or factor deficiencies. Heparin therapy is monitored by using the anti–factor Xa assay; warfarin therapy is monitored with the INR. Fibrinolytic therapy may be monitored by using the D-dimer test."
  },
  {
    "id": 276,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following may interfere with the APCR screening test?",
    "options": [
      "Lupus anticoagulant",
      "Protein C deficiency",
      "AT deficiency",
      "Protein S deficiency"
    ],
    "answer": "A",
    "explanation": "The lupus anticoagulant interferes with the APCR screening assay based on the APTT ratio with and without the addition of APC. Persons with the lupus anticoagulant have a prolonged APTT that renders the test invalid for APCR screening."
  },
  {
    "id": 277,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Thrombophilia may be associated with which of the following disorders?",
    "options": [
      "Afibrinogenemia",
      "Hypofibrinogenemia",
      "Factor VIII inhibitor",
      "Hyperfibrinogenemia"
    ],
    "answer": "D",
    "explanation": "Hyperfibrinogenemia is a risk factor for thrombophilia. Fibrinogen is an acute-phase reactant and may be increased in inflammation, stress, obesity, smoking, and medications, such as oral contraceptives. Hypofibrinogenemia, afibrinogenemia, and factor VIII inhibitors are associated with bleeding."
  },
  {
    "id": 278,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following anticoagulant drugs can be used in patients with HIT?",
    "options": [
      "Warfarin",
      "Heparin",
      "Aspirin",
      "Argatroban"
    ],
    "answer": "D",
    "explanation": "Argatroban is a direct thrombin inhibitor drug and used in patients with HIT who cannot tolerate heparin or LMWH therapy. Warfarin should not be used for anticoagulation in persons with HIT because it causes a fall in protein C concentration and vitamin K–dependent coagulation factors. Aspirin is an antiplatelet drug."
  },
  {
    "id": 279,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which of the following is the preferred method to monitor heparin therapy at the point of care during cardiac surgery?",
    "options": [
      "APTT",
      "ACT",
      "PT",
      "TT"
    ],
    "answer": "B",
    "explanation": "ACT is a point-of-care coagulation test used to monitor high-dose heparin therapy during cardiac surgery, cardiac angioplasty, hemodialysis, and other major surgeries. It is the preferred method to determine if sufficient heparin was administered to prevent clotting during surgery because it is more rapid than the APTT test. The test uses a clot activator, such as kaolin or Celite, to stimulate coagulation, and the time in seconds is linearly related to the dose of heparin administered. The ACT test is available in different formats, and the reference range varies, depending on the method used. At low to moderate heparin doses, the ACT test does not correlate well with the APTT test or the anti–factor Xa assay."
  },
  {
    "id": 280,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Mrs. Smith has the following laboratory results and no history of bleeding: APTT = prolonged APTT results on a 1:1 mixture of the patient’s plasma with normal plasma: Preincubation: prolonged APTT 2-hour incubation: prolonged APTT These results are consistent with:",
    "options": [
      "Factor VIII deficiency",
      "Factor VIII inhibitor",
      "Lupus anticoagulant",
      "Protein C deficiency"
    ],
    "answer": "C",
    "explanation": "Mixing studies differentiate factor deficiencies from factor inhibitors. Lupus anticoagulant is associated with thrombosis, and it is directed against phospholipid- dependent coagulation tests, such as the APTT test. In patients with lupus anticoagulant, after the patient’s plasma is mixed with normal plasma, APTT remains prolonged immediately after mixing and following 2 hours of incubation. Factor VIII deficiency and factor VIII inhibitor are associated with bleeding."
  },
  {
    "id": 281,
    "section": "Inhibitors, Thrombotic Disorders, and Anticoagulant Drugs",
    "chapter": "Hemostasis & Coagulation",
    "question": "Which test may be used to monitor LMWH therapy?",
    "options": [
      "APTT",
      "INR",
      "Anti–factor Xa heparin assay",
      "ACT"
    ],
    "answer": "C",
    "explanation": "The anti–factor Xa heparin assay is used to monitor LMWH therapy, when required,"
  },
  {
    "id": 282,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "Patient History A 3-year-old male was admitted with scattered petechiae and epistaxis. The patient had normal growth and had no other medical problems except for chickenpox 3 weeks earlier. His family history was unremarkable. Laboratory Results Patient Reference Range PT 11 sec 10–13 sec APTT 32 sec 28–37 sec PLT count 18 × 103/µL L 150–450 × 103/μL These clinical manifestations and laboratory results are consistent with which condition?",
    "options": [
      "TTP",
      "DIC",
      "ITP",
      "HUS"
    ],
    "answer": "C",
    "explanation": "These clinical manifestations and laboratory results are consistent with ITP. ITP is an autoimmune thrombocytopenia. In children, acute ITP occurs after a viral infection, as was the case in this 3-year-old patient. Clinical manifestations are associated with petechiae, purpura, and mucous membrane bleeding, such as epistaxis and gingival bleeding. Abnormal laboratory tests include a very low PLT count, and other causes of thrombocytopenia should be ruled out in patients with suspected ITP."
  },
  {
    "id": 283,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "Patient History A 12-year-old white male has the following symptoms: visible bruising on arms and legs, bruising after sports activities, and excessive postoperative hemorrhage after tonsillectomy 3 months ago. His family history revealed that his mother suffers from heavy menstrual bleeding, and his maternal grandfather had recurrent nosebleeds and bruising. Laboratory Results Patient Reference Range PLT count: 350 × 103/μL 200–450 × 103/μL PT 11 sec 10–12 sec APTT 70 sec 28–37 sec TT 13 sec 10–15 sec PLT AGGREGATION Normal aggregation with collagen, EPI, ADP Abnormal aggregation with ristocetin CONFIRMATORY TESTS PATIENT REFERENCE RANGE VWF:Rco 25% 45%–140% VIII:C 20% 50%–150% VWF:antigen 10% 45%–185% These clinical manifestations and laboratory results are consistent with which diagnosis?",
    "options": [
      "Factor VIII deficiency",
      "von Willebrand disease",
      "Glanzmann thrombasthenia",
      "Bernard-Soulier syndrome"
    ],
    "answer": "B",
    "explanation": "These clinical manifestations and laboratory results are consistent with von Willebrand disease. von Willebrand disease is an inherited bleeding disorder caused by abnormal PLT adhesion and aggregation. In von Willebrand disease, VWF is deficient or dysfunctional. VWF enhances the release of factor VIII from the liver, and it also forms a complex with factor VIII in the circulation. Deficient or dysfunctional VWF results in decreased factor VIII as well and, therefore, an increase in APTT values. The clinical manifestations associated with von Willebrand disease are easy bruising, epistaxis, and bleeding after surgery. The diagnostic laboratory test shows abnormal PLT aggregation to ristocetin, which is corrected by addition of normal plasma containing VWF. APTT is prolonged as a result of the deficiency of factor VIII. Factor VIII activity (VIII:C), VWF ristocetin cofactor activity (VWF:Rco), and VWF: antigenic activity (VWF:antigen) are abnormal. The PLT count and PT are normal in von Willebrand disease."
  },
  {
    "id": 284,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "The following results are obtained from a patient who developed severe bleeding: Prolonged PT and APTT PLT count = 100 × 109/L Fibrinogen = 40 mg/dL Which of the following blood products should be recommended for transfusion?",
    "options": [
      "Factor VIII concentrate",
      "PLTs",
      "FFP",
      "Cryoprecipitate"
    ],
    "answer": "D",
    "explanation": "Cryoprecipitate contains fibrinogen, factor VIII, and VWF. FFP has all of the clotting factors; however, it is not the best choice if cryoprecipitate is available."
  },
  {
    "id": 285,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 30-year-old woman develops signs and symptoms of thrombosis in her left lower leg after 5 days of heparin therapy. The patient had had open-heart surgery 3 days previously and has been on heparin ever since. Which of the following would be most helpful in making the diagnosis?",
    "options": [
      "Fibrinogen assay",
      "PT",
      "PLT count",
      "Increased heparin dose"
    ],
    "answer": "C",
    "explanation": "The PLT count should be checked every other day in patients receiving heparin therapy. HIT should be suspected in patients who are not responding to heparin therapy and/or are developing thrombocytopenia (50% below the baseline value) and thrombotic complications while on heparin therapy. Increase in heparin dose should be avoided in patients with the clinical symptoms of thrombosis while they are receiving heparin. Fibrinogen assay and PT are not the appropriate assays for monitoring heparin therapy, nor are they used to test for HIT."
  },
  {
    "id": 286,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "The following laboratory results were obtained on a 25-year-old woman with menorrhagia after delivery of her second son. The patient has no previous bleeding history. Normal PLT count; normal PT; prolonged APTT Mixing of the patient’s plasma with normal plasma corrected the prolonged APTT on immediate testing. However, mixing followed by 2-hour incubation at 37°C caused prolonged APTT. What is the most probable cause of these laboratory results?",
    "options": [
      "Lupus anticoagulant",
      "Factor VIII deficiency",
      "Factor IX deficiency",
      "Factor VIII inhibitor"
    ],
    "answer": "D",
    "explanation": "Factor VIII inhibitor is found in 20% to 25% of patients with hemophilia receiving replacement therapy. It may also develop in patients with immunologic problems, women after childbirth, and patients with lymphoproliferative and plasma cell disorders, or it may develop in response to medications. Factor VIII inhibitor is an IgG with an inhibitory effect that is time and temperature dependent. The presence of factor VIII inhibitor causes elevated APTT in the face of a normal PT. Mixing studies in factors VIII and IX deficiencies will correct the prolonged APTT both at the immediate mixing stage and after incubation for 2 hours. APTT would not be corrected by mixing studies in the presence of factor VIII inhibitor. In addition, factor VIII inhibitor is associated with bleeding. Lupus anticoagulant is associated with thrombosis and not bleeding unless it coexists with thrombocytopenia, which is not the case in this patient."
  },
  {
    "id": 287,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 62-year-old female presents with jaundice and the following laboratory data: Peripheral blood smear = macrocytosis, target cells PLT count = 355 × 109/L PT = 25 sec (reference range = 10–14) APTT = 65 sec (reference range = 28–36) Transaminases = elevated (AST:ALT ratio greater than 1) Total and direct bilirubin = elevated These clinical presentations and laboratory results are consistent with:",
    "options": [
      "Inherited factor VII deficiency",
      "DIC",
      "Cirrhosis of the liver",
      "von Willebrand disease"
    ],
    "answer": "C",
    "explanation": "The clinical presentation and laboratory results in this patient are indicative of cirrhosis of the liver. Most of the clotting factors are made in the liver. A decrease in multiple clotting factors is associated with prolonged PT and APTT. Macrocytosis and target cells are present in liver disease. The liver changes the unconjugated bilirubin to conjugated bilirubin. Conjugated bilirubin is excreted into the intestines, where bilirubin is converted to urobilinogen and excreted into feces. In cirrhosis of the liver, both necrosis and obstruction caused by scarring produce increases in unconjugated and conjugated bilirubin, respectively. In addition, the liver enzymes are elevated (the AST:ALT ratio is less than 1 in necrotic liver diseases, such as hepatitis, but not in cirrhosis)."
  },
  {
    "id": 288,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "When performing a mixing study, the patient’s APTT is corrected to 12% of normal. What is the most appropriate interpretation of these findings?",
    "options": [
      "The APTT is considered corrected",
      "The APTT is considered uncorrected",
      "The laboratory protocol should be followed for the interpretation of correction",
      "A circulating anticoagulant can be ruled out"
    ],
    "answer": "C",
    "explanation": "Interpretation of correction studies varies among different laboratories. Some define correction when the mixing study result falls within 10% of the normal plasma; other laboratories conclude correction when the mixing result falls within 5 seconds of normal plasma, or a value within the APTT reference range. Only 50% factor activity is required for normal PT or APTT. A circulating anticoagulant typically results in failure to correct the APTT with normal plasma."
  },
  {
    "id": 289,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A standard blue-top tube filled appropriately (with 4.5 mL blood) was submitted to the laboratory for preoperative PT and APTT testing. The results of both tests were elevated. The patient’s PT and APTT from the previous day were within normal limits, and he was not on heparin therapy. Which is the most appropriate first step to investigate the abnormal results?",
    "options": [
      "Report the result as obtained",
      "Perform a mixing study",
      "Check the sample for a clot",
      "Report APTT only"
    ],
    "answer": "C",
    "explanation": "A clot can form because of inadequate mixing of the sample after venipuncture, if the blood fills the evacuated tube at a slow rate, or with traumatic venipuncture. In vitro, blood clots result in consumption of the clotting factors and, therefore, prolongation of PT, APTT, and other clot-based assays. If the clotting factors have been activated but the clot formation is incomplete, it may result in shortening of PT and APTT. Checking the sample for a clot is the most reasonable step in this case."
  },
  {
    "id": 290,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A plasma sample submitted to the laboratory for PT testing has been stored for 25 hours at 4°C. PT is shortened. What is the most probable cause?",
    "options": [
      "Factor VII deficiency",
      "Activation of factor VII caused by exposure to cold temperature",
      "Lupus inhibitor",
      "Factor X inhibitor"
    ],
    "answer": "B",
    "explanation": "Samples for evaluation of PT are stable for 24 hours if kept at room temperature. Prolonged exposure to cold will activate factor VII, resulting in decreased PT."
  },
  {
    "id": 291,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "APTT is not increased in a patient receiving heparin. Which of the following factors may be associated with the lack of response to heparin therapy in this patient?",
    "options": [
      "Protein C deficiency",
      "AT deficiency",
      "Protein S deficiency",
      "Factor VIII deficiency"
    ],
    "answer": "B",
    "explanation": "AT deficiency in patients receiving heparin therapy may lead to heparin resistance and, therefore, lack of prolongation of APTT. AT is a heparin cofactor and, as such, increases heparin activity by 1,000-fold. Deficiency of AT is associated with poor response to heparin therapy."
  },
  {
    "id": 292,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 50-year-old patient was admitted to the emergency department with a complaint of pain in the right leg. The leg was red, swollen, and warm to the touch. DVT was suspected, and the patient was started on heparin therapy. Which of the following is (are) the proper protocol(s) to evaluate patients receiving heparin therapy?",
    "options": [
      "Baseline APTT and PLT count; APTT testing every 4 to 6 hours after the initial heparin bolus",
      "Repeat APTT 5 days after heparin therapy to adjust the therapeutic dose",
      "Monitor the PLT count daily and every other day after heparin therapy is completed",
      "Monitor PT daily to adjust the therapeutic dose"
    ],
    "answer": "A",
    "explanation": "Baseline PLT count and APTT should be performed on all patients prior to administration of heparin. APTT should be repeated every 4 to 6 hours after bolus injection (high dose). Response to heparin therapy varies among patients for the following reasons: heparin half-life is decreased in extended thrombosis, and the anticoagulant activities of heparin change based on nonspecific binding of heparin to plasma proteins. Therefore, heparin therapy should be closely monitored. Heparin dosage can be adjusted based on the anti–factor Xa assay. In addition, the PLT count should be monitored regularly during heparin therapy because decrease of the PLT count to 50% below the baseline value is significant and may be associated with HIT. PT is not used to monitor heparin therapy."
  },
  {
    "id": 293,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "Patient History: A 46-year-old female was admitted to the emergency department with complaints of headache, dizziness, lethargy, nausea, vomiting, and weakness. The patient had undergone a gastrectomy procedure 4 months earlier for removal of adenocarcinoma of the stomach and had been placed on mitomycin therapy. Diagnostic procedures indicated recurrence of the carcinoma. Admission Complete Blood Count (CBC) Results Patient Reference Range WBCs 17.1 × 109/L 4.8–10.8 × 109/L RBCs 2.29 × 1012/L 3.80–5.50 × 1012/L Hgb 8.1 g/dL 12.0–15.2 g/dL Hct 23% 37%–46% MCV 95.7 fL 79–101 fL MCH 35.4 pg 27–33 pg MCHC 35.0 % 31%–34 % RDW 18.5 11.5–14.5 PLTs 48.0 × 109/L 140–450 × 109/L MPV 11.2 7.4–9.4 DIFERENTIAL COUNTS (%) Segmented neutrophils 79 30%–70% Band neutrophils 3 0%–10% Lymphocytes 11 20%–50% Monocytes 6 2%–12% Basophils 1 0%–2% NRBCs (/100 WBCs) 3 0 Manual platelet count 18 × 109/L 140–450 × 109/L Marked anisocytosis None Marked RBC None fragmentation PT, APTT, and TT Normal ADDITIONAL LABORATORY DATA Urinalysis PATIENT REFERENCE RANGE pH 5.0 5–7 Protein 30.0 mg/dL 0–15 mg/dL RBCs 60–100/μ. Casts 10/high-power field (hpf) Not detectable granular/hyaline Plasma PATIENT REFERENCE RANGE Creatinine 3.1 mg/dL 0.7–1.3 mg/dL BUN 39 mg/dL 8–22 mg/dL Haptoglobin 5.0 mg/dL 50–150 mg/dL These clinical manifestations and laboratory results are consistent with:",
    "options": [
      "ITP",
      "von Willebrand disease",
      "TTP",
      "DIC"
    ],
    "answer": "C",
    "explanation": "The clinical manifestations and laboratory results in this patient are consistent with TTP. The clinical manifestations of TTP include MAHA, thrombocytopenia, fever, renal failure, and neurological symptoms. The neurological symptoms in this patient are manifested by headache, dizziness, nausea, and vomiting. Weakness and lethargy are signs and symptoms of anemia. Low Hgb and Hct with normal MCV and MCHC indicate a normocytic normochromic anemia. The presence of schistocytes in peripheral blood, with low platelet counts and low haptoglobin, are consistent with MAHA. The high BUN and creatinine levels are characteristic of renal failure. The platelet count, performed on admission, was done on a hematology analyzer and was falsely elevated because of the presence of microcytes or fragmented RBCs. The manual platelet count was much lower. The coagulation tests are normal in TTP. In von Willebrand disease, the platelet count is normal and the APTT is usually abnormal. ITP is characterized by thrombocytopenia but not hemolytic anemia (HA). DIC is associated with a low platelet count, HA, and abnormal coagulation studies. The acute onset of symptoms in this patient may be related to mitomycin used for the treatment of gastric carcinoma in this patient."
  },
  {
    "id": 294,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "Patient History A 1-year-old infant was admitted with recurrent epistaxis for the past 5 days. Past medical history revealed easy bruising and a severe nosebleed that had occurred when he was 3 months of age, necessitating transfusion therapy. The mother had a severe nosebleed 8 years ago. The father was reported to bleed easily after lacerations. The patient was transfused with 2 units of packed RBCs on admission. Admission Laboratory Results Patient Reference Range Hgb 4.5 g/dL 13–15 g/dL Platelet count 249 × 109/L 150–450 × 109/L PT 11.2 sec 11–13 sec APTT 34 sec 28–37 sec ADDITIONAL LABORATORY TESTS Factor VIII assay 70% 50%–150% PLT aggregation: Abnormal to ADP, EPI, and thrombin; normal to ristocetin These clinical manifestations and laboratory results are consistent with which condition?",
    "options": [
      "von Willebrand disease",
      "Bernard-Soulier syndrome",
      "Glanzmann thrombasthenia",
      "Factor VIII deficiency"
    ],
    "answer": "C",
    "explanation": "These clinical manifestations and laboratory results are consistent with Glanzmann thrombasthenia. Epistaxis and easy bruising are characteristics of platelet disorders. The positive family history is indicative of an inherited bleeding disorder. Laboratory tests reveal a low Hgb level caused by epistaxis. The normal platelet count rules out any quantitative platelet disorder. The platelet count is typically low in Bernard– Soulier syndrome. Normal PT and APTT, combined with a normal factor VIII assay, rule out coagulation disorders. The laboratory tests that confirm an inherited platelet disorder are PLT aggregation studies. PLT aggregation is normal to ristocetin and abnormal to ADP, EPI, and thrombin. These results are consistent with Glanzmann thrombasthenia. PLT aggregation is abnormal to ristocetin in von Willebrand disease and Bernard–Soulier syndrome."
  },
  {
    "id": 295,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "Patient History: A 30-year-old female was referred to the hospital for evaluation for multiple spontaneous abortions and current complaint of pain and swelling in her right leg. Her family history is unremarkable. Laboratory Tests Patient Reference Range PT 14.5 sec 11–13 sec APTT 63.0 sec 28–37 sec TT 12.0 sec 10–15 sec Mixing Study APTT Preincubation and after 2-hour incubation at 37°C 57.0 sec Platelet neutralization procedure Patient plasma + freeze-thawed platelets APTT = 35 sec Patient plasma + saline APTT = 59 sec Anticardiolipin antibodies done by ELISA Negative These clinical manifestations and laboratory results are consistent with:",
    "options": [
      "Factor VIII inhibitor",
      "Factor VIII deficiency",
      "Anticardiolipin antibodies",
      "Lupus anticoagulant"
    ],
    "answer": "D",
    "explanation": "These clinical manifestations and laboratory results are consistent with lupus anticoagulant. Pain and swelling in the patient’s right leg may be indicative of thrombosis. As many as 48% of women with repeated spontaneous abortions have lupus anticoagulant or/and antibody to phospholipid, such as anticardiolipin antibodies. The unremarkable family history in this patient rules out an inherited thrombotic disorder. Normal TT rules out fibrinogen disorders. Prolonged PT and APTT in the absence of bleeding history eliminate the diagnosis of factor deficiency. The APTT test performed on a mixture of patient plasma and normal plasma did not correct the prolonged APTT. This result is indicative of an inhibitor. However, because the patient is not bleeding, factor VIII inhibitor is not indicated. A negative anticardiolipin antibody result rules out the possibility of anticardiolipin antibodies being responsible for the patient’s clinical symptoms. The laboratory test result that confirms the presence of a lupus anticoagulant is prolonged APTT that is not corrected when mixed with normal plasma and that is neutralized by preincubation with platelet phospholipid (an excess of platelet phospholipid neutralizes the antibody, resulting in normal APTT)."
  },
  {
    "id": 296,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 60-year-old patient was admitted to a hospital for a liver biopsy. The biopsy was scheduled for 11:00 a.m. The coagulation results obtained at the time of admission revealed prolonged PT with an INR of 4.5. What is the physician’s most appropriate course of action?",
    "options": [
      "Proceed with biopsy because prolonged PT is expected in liver disease",
      "Postpone the procedure for a couple of days",
      "Cancel the procedure and start the patient on vitamin K therapy",
      "Put patient on vitamin K therapy and proceed with the procedure immediately"
    ],
    "answer": "C",
    "explanation": "Performing liver biopsy in a patient with a prolonged PT and a high INR could have life-threatening consequences. In this patient, the prolonged PT is likely caused by liver disease. Vitamin K is stored in the liver and is essential for activation of factors II, VII, IX, and X. Vitamin K needs bile (secreted by the liver) for its absorption. In liver disease characterized by obstruction, bile is not secreted into the gastrointestinal tract, and therefore, vitamin K is poorly absorbed. The most logical course of action is the following: Start the patient on vitamin K therapy, repeat the PT test 4 days after starting vitamin K administration, and cancel the biopsy until the patient’s PT returns to normal."
  },
  {
    "id": 297,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A fresh blood sample was sent to the laboratory at 8:00 a.m. for the PT test. At 4:00 p.m., the doctor requested for the APTT test to be done on the same sample. What should the technologist do?",
    "options": [
      "Rerun the APTT on the 8:00 a.m. sample and report the result",
      "Request a new sample for APTT",
      "Run the APTT in duplicate and report the average",
      "Mix patient plasma with normal plasma and run the APTT"
    ],
    "answer": "B",
    "explanation": "According to the CLSI guidelines, samples for APTT should be centrifuged and tested within 2 hours after collection. However, the sample is stable for 4 hours if stored at 4°C. APTT evaluates the clotting factors in the intrinsic and common coagulation pathways, including factor VIII (intrinsic) and factor V (common). Factors VIII and V are cofactors necessary for fibrin formation. However, they are both labile. Storage beyond 4 hours causes falsely elevated APTT results. The medical laboratory scientist should request a new sample for the APTT test."
  },
  {
    "id": 298,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "An APTT test is performed on a patient and the result is 50 sec (reference range 27–37 sec). The instrument flags the result because of failure of the delta check. The patient had had an APTT of 35 sec the previous day. The technologist calls the nursing unit to check whether the patient is on heparin therapy. The patient is not receiving heparin. What is the next appropriate step?",
    "options": [
      "Check the patient’s family history for inherited factor VIII deficiency",
      "Check to see if the patient has received any other anticoagulant medications",
      "Perform mixing studies",
      "Perform a factor VIII assay"
    ],
    "answer": "B",
    "explanation": "Traditional anticoagulant drugs, such as heparin and warfarin, are well known. Newer anticoagulant drugs are available for the treatment and prevention of thrombosis. Some of these new drugs have AT or anti–factor Xa effects and, therefore, increase PT, APTT, and TT. Examples of these drugs are argatroban, which inhibits thrombin, and fondaparinux, which inhibits factor Xa."
  },
  {
    "id": 299,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A patient was put on heparin therapy postoperatively for prevention of thrombosis. The patient had the following laboratory results on admission: Platelet count = 350 × 109/L; PT = 12 sec (reference: 10–13 sec); APTT = 35 sec (reference: 28–37). After 6 days of heparin therapy, the patient complained of pain and swelling in her left leg. Her platelet count dropped to 85 × 109/L, and her APTT result was 36 sec. The physician suspected HIT and ordered the PLT aggregation test to be performed immediately. The heparin- induced PLT aggregation test result was negative. Heparin therapy was continued. Several days later, the patient developed a massive clot in her left leg that necessitated amputation. Which of the following should have been recognized or initiated?",
    "options": [
      "The patient should have been placed on LMWH",
      "The heparin dose should have been increased",
      "The negative PLT aggregation does not rule out HIT",
      "The patient should have been placed on warfarin therapy"
    ],
    "answer": "C",
    "explanation": "Heparin therapy should be stopped immediately when clinical symptoms indicate HIT. The blood sample should be tested at least 4 hours after heparin therapy is discontinued. Early sampling for HIT testing may give a false-negative result because of the neutralization of antibody by heparin. LMWH should not be used in patients who develop HIT because LMWH can also cause HIT. Warfarin therapy can be started in patients who respond to heparin therapy. Heparin therapy must overlap warfarin therapy until the INR reaches a stable therapeutic range (2.0–3.0). Warfarin therapy could not be used in this patient because of lack of response to heparin therapy. The first step in the treatment of HIT is discontinuation of heparin, including intravenous catheter flushes, heparin-coated indwelling catheters, UFH, and LMWH."
  },
  {
    "id": 300,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 50-year-old female was admitted to a hospital for hip replacement surgery. Preoperative tests were performed, and the results showed the following: Hgb = 13.5 g/dL; Hct = 42%; PT = 12 sec; APTT = 36 sec. The patient was bleeding during surgery, and postoperative test results revealed the following: Hgb = 5.0 g/dL; Hct = 16%; PT = 8 sec; APTT = 25 sec. What steps should be taken before releasing these results?",
    "options": [
      "No follow-up steps are needed; report the results as obtained",
      "Report Hgb and Hct results, adjust the anticoagulant volume, and redraw a new sample for PT and APTT",
      "Call the nurse and ask if the patient is receiving heparin",
      "Because the patient is severely anemic, multiply the PT and APTT results by two and report the results"
    ],
    "answer": "B",
    "explanation": "The anticoagulant:blood ratio should be adjusted for the PT and APTT tests in patients with a severe anemia. The standard anticoagulant volume (0.5 mL) is not sufficient for the large quantity of plasma in these patients, causing unreliable PT and APTT results. The low Hgb and Hct in this patient were caused by severe bleeding during surgery. To get accurate PT and APTT results, the amount of anticoagulant is adjusted according to the following formula: (0.00185)(V) (100–H) = C, where V = blood volume in mL; H = patient’s Hct; and C = volume of anticoagulant in mL. A new sample should be drawn to rerun the PT and APTT. There are other causes for decreased PT and APTT, such as increased fibrinogen and increased factor VIII; however, the preanalytical variables affecting unreliable results should be ruled out first. Heparin therapy would increase PT and APTT."
  },
  {
    "id": 301,
    "section": "Hemostasis Problem-Solving",
    "chapter": "Hemostasis & Coagulation",
    "question": "A 45-year-old woman visited her doctor complaining of easy bruising and menorrhagia occurring for the past few weeks. The patient had no history of excessive bleeding during child birth several years earlier or during a tonsillectomy in childhood. Her family history was unremarkable. Laboratory Tests Patient Reference Range PT 45 sec 11–13 sec APTT 125 sec 28–37 sec TT 14 sec 10–15 sec Mixing studies (patient plasma + normal PT = 40 sec; APTT = 90 plasma): sec Platelet count and morphology: normal Liver function tests: normal These clinical manifestations and laboratory results are consistent with:",
    "options": [
      "Factor VIII inhibitor",
      "Factor V inhibitor",
      "Factor VIII deficiency",
      "Lupus anticoagulant"
    ],
    "answer": "B",
    "explanation": "The absence of a positive family history in this patient indicates acquired"
  },
  {
    "id": 302,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding renal function is true?",
    "options": [
      "Glomeruli are far more permeable to H2O and salt compared with other capillaries",
      "The collecting tubule reabsorbs sodium and secretes potassium in response to antidiuretic hormone (ADH)",
      "The collecting tubule is permeable to H2O only in the presence of aldosterone",
      "The thick ascending limb is highly permeable to and urea"
    ],
    "answer": "A",
    "explanation": "The formation of plasma ultrafiltrate depends on high hydrostatic pressure and permeability of the glomeruli. Aldosterone is released when afferent arterial pressure falls, and ADH is released when plasma osmolality becomes too high. The collecting tubule reabsorbs sodium and secretes potassium in response to aldosterone and is permeable to H2O only in the presence of ADH. The thick ascending limb is permeable to salt, but not to H2O or urea."
  },
  {
    "id": 303,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding normal salt and H2O handling by the nephron is correct?",
    "options": [
      "The thick ascending limb of the tubule is highly permeable to salt but not H2O",
      "The stimulus for ADH release is low arterial pressure in the afferent arteriole",
      "The descending limb of the tubule is impermeable to urea but highly permeable to salt",
      "Renin is released in response to high plasma osmolality"
    ],
    "answer": "A",
    "explanation": "The tubules are able to concentrate the filtrate because the descending limb is highly permeable to H2O and urea, but not to salt, and the ascending limb is permeable to salt. Salt leaving the thick ascending limb creates a hypertonic interstitium that forces H2O from the descending limb. Renin is released in response to low hydrostatic pressure in the afferent arteriole, which stimulates the juxtaglomerular cells. ADH is released by the posterior pituitary in response to high plasma osmolality."
  },
  {
    "id": 304,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement concerning renal tubular function is true?",
    "options": [
      "In salt deprivation, the kidneys will conserve sodium at the expense of potassium",
      "Potassium is not excreted when serum concentration is less than 3.5 mmol/L",
      "No substance can be excreted into urine at a rate that exceeds the glomerular filtration rate (GFR)",
      "When tubular function is lost, the specific gravity (SG) of urine will be below 1.005"
    ],
    "answer": "A",
    "explanation": "Sodium is a threshold substance; that is, no sodium will be excreted in urine until the renal threshold (a plasma sodium concentration of approximately 120 mmol/L) is exceeded. Potassium is not a threshold substance and will be secreted by the tubules even when plasma potassium levels are low. Patients on diuretics or who have hypovolemia become hypokalemic for this reason. Some substances (e.g., penicillin) can be excreted at a rate exceeding glomerular filtration because the tubules secrete them. The tubules are responsible for concentrating the filtrate in conditions of water deprivation and diluting it in conditions of water excess. When tubular function is lost, salt and water equilibrate by passive diffusion, and the SG of urine becomes the same as that of plasma, approximately 1.010."
  },
  {
    "id": 305,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is inappropriate when collecting urine for routine bacteriologic culture?",
    "options": [
      "The container must be sterile",
      "The midstream void technique must be used",
      "The collected sample must be plated within 2 hours unless refrigerated",
      "The sample may be held at 2°C to 8°C for up to 48 hours prior to plating"
    ],
    "answer": "D",
    "explanation": "Urine specimens should be plated and incubated within 2 hours of collection (some laboratories use a 1-hour time limit) and within 24 hours if the sample is refrigerated at 2°C to 8°C immediately after collection. No additives are permitted when urine is collected for culture."
  },
  {
    "id": 306,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement about sample collection for routine urinalysis is true?",
    "options": [
      "Preservative tablets should be used for collecting random urine specimens",
      "Containers may be washed and reused if rinsed in deionized H2O",
      "Samples may be stored at room temperature for up to 2 hours",
      "A midday sample is preferred when renal disease is suspected"
    ],
    "answer": "C",
    "explanation": "The first morning voided sample is the most sensitive for screening purposes because formed elements are concentrated, but random samples are satisfactory because glomerular bleeding, albuminuria, and cast formation may occur at any time. Preservative tablets should be avoided because they may cause chemical interference with some dry reagent strip and turbidimetric protein tests. Changes in glucose, bilirubin, and urobilinogen can occur within 30 minutes of collection. Therefore, samples should be refrigerated if not tested within 2 hours."
  },
  {
    "id": 307,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which urine color is correlated correctly with the pigment-producing substance?",
    "options": [
      "Smoky red urine with homogentisic acid",
      "Dark amber urine with myoglobin",
      "Deep yellow urine and yellow foam with bilirubin",
      "Red-brown urine with biliverdin"
    ],
    "answer": "C",
    "explanation": "Homogentisic acid causes dark brown or black-colored urine. Myoglobin causes a red to red-brown color in urine, and biliverdin causes a green or yellow-green color. In addition to metabolic diseases and renal disease, abnormal color can be caused by drugs, dyes excreted by the kidneys, and natural or artificial food coloring."
  },
  {
    "id": 308,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following substances will cause urine to produce red fluorescence when examined under an ultraviolet lamp (360 nm)?",
    "options": [
      "Myoglobin",
      "Porphobilinogen (PBG)",
      "Urobilin",
      "Coproporphyrin"
    ],
    "answer": "D",
    "explanation": "Myoglobin causes a positive test for blood but does not cause urine to fluoresce. PBG causes urine to become dark (orange to orange-brown) on standing but does not fluoresce. Uroporphyrin and coproporphyrin produce red or orange-red fluorescence. Unlike hemoglobin, porphyrins lack peroxidase activity. Urobilin is an oxidation product of urobilinogen. It turns the urine orange to orange-brown but does not produce fluorescence."
  },
  {
    "id": 309,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is associated with normal urine color but produces red fluorescence when urine is examined with an ultraviolet (Wood) lamp?",
    "options": [
      "Acute intermittent porphyria",
      "Lead poisoning",
      "Erythropoietic porphyria",
      "Porphyria cutanea tarda"
    ],
    "answer": "B",
    "explanation": "Lead poisoning blocks the synthesis of heme, causing accumulation of PBG and coproporphyrin III in urine. However, uroporphyrin levels are not sufficiently elevated to cause red pigmentation of urine. There is sufficient coproporphyrin to cause a positive test for fluorescence. Acute intermittent porphyria produces increased urinary delta-aminolevulinic acid (Δ-ALA), and PBG. The PBG turns urine orange to orange- brown upon standing. Erythropoietic porphyria and porphyria cutanea tarda produce large amounts of uroporphyrin, causing the urine to be red or port wine colored."
  },
  {
    "id": 310,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding porphyria is accurate?",
    "options": [
      "Porphyria is exclusively inherited",
      "All types cause an increase in urinary porphyrins",
      "All types are associated with anemia",
      "Serum, urine, and fecal tests may be needed for diagnosis"
    ],
    "answer": "D",
    "explanation": "Porphyria may be inherited as a result of an enzyme defect in heme synthesis or may be acquired as a result of lead poisoning, liver failure, or drug toxicity. The inherited porphyrias consist of eight subgroups based on which enzyme is deficient. They are divided clinically into three groups: neuropsychiatric, cutaneous, or mixed. The neurological porphyrias are not associated with anemia, but erythropoietic porphyria, a type of cutaneous porphyria, is. In general, neurological porphyrias are associated with increases in PBG and Δ-aminolevulinic acid (porphyrin precursors), whereas cutaneous porphyrias are associated with increased urinary porphyrins. No one sample type can be used to identify all subgroups, and sometimes all three are needed."
  },
  {
    "id": 311,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which is the most common form of porphyria?",
    "options": [
      "Erythropoietic porphyria",
      "Acute intermittent porphyria",
      "Variegate porphyria",
      "Porphyria cutanea tarda"
    ],
    "answer": "D",
    "explanation": "Porphyria is a rare condition, although most of the inherited forms are autosomal dominant. Porphyria cutanea tarda results from a deficiency of uroporphyrinogen decarboxylase, and hence, the carboxylated forms of uroporphyrin accumulate in plasma and spill into urine. The enzyme in hepatocytes is susceptible to drugs, alcohol, and hepatitis, which trigger the disease. The disease usually appears in middle-aged adults, the majority of whom have hepatitis C infection. The uroporphyrins are highly fluorescent and may cause port wine–colored urine. Affected persons present with skin blisters and skin burns if they have been exposed to sunlight."
  },
  {
    "id": 312,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following methods is the least sensitive and specific for measuring PBG in urine?",
    "options": [
      "Watson-Schwartz test",
      "LC-MS",
      "Ion exchange chromatography–Ehrlich reaction",
      "Isotope dilution–MS"
    ],
    "answer": "A",
    "explanation": "The Watson-Schwartz test is a qualitative screening test for PBG and is based on the principle that dietary indole compounds and urobilinogen can be separated from PBG by extraction. PBG is extracted in n-butanol, whereas urobilinogen and dietary indoles are extracted into chloroform. However, the sensitivity and specificity of the test are poor in comparison with chromatographic and mass spectroscopic methods that better separate PBG from interfering substances. PBG is elevated in neurological porphyrias, the most common of which is acute intermittent porphyria."
  },
  {
    "id": 313,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A brown or black pigment in urine can be caused by:",
    "options": [
      "Gantrisin (pyridium)",
      "Phenolsulfonphthalein (PSP)",
      "Rifampin",
      "Melanin"
    ],
    "answer": "D",
    "explanation": "Excretion of melanin in malignant melanoma and homogentisic acid in alkaptonuria cause urine to turn black on standing. Other substances that may cause brown or black- colored urine are methemoglobin, PBG, porphobilin, and urobilin. Gantrisin, PSP dye, and rifampin are three examples of drugs that cause red or orange-red urine."
  },
  {
    "id": 314,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Urine that is dark red or port wine-colored may be caused by:",
    "options": [
      "Lead poisoning",
      "Porphyria cutanea tarda",
      "Alkaptonuria",
      "Hemolytic anemia"
    ],
    "answer": "B",
    "explanation": "Porphyria cutanea tarda and erythropoietic porphyria produce sufficient uroporphyrins to cause dark red urine. Acute intermittent porphyria produces large amounts of PBG, which may be oxidized to porphobilin, turning the urine orange to orange-brown."
  },
  {
    "id": 315,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following tests is affected least by standing or improperly stored urine?",
    "options": [
      "Glucose",
      "Protein",
      "pH",
      "Bilirubin"
    ],
    "answer": "B",
    "explanation": "Standing urine may become alkaline because of loss of volatile acids and ammonia production. Bilirubin glucuronides may become hydrolyzed to unconjugated bilirubin or oxidized to biliverdin, resulting in a false-negative result on the dry reagent strip test. Glucose can be consumed by glycolysis or oxidation by cells."
  },
  {
    "id": 316,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which one of the following characteristics would be a reason for performing a microscopic examination of urinary sediment?",
    "options": [
      "High volume",
      "Color intensity",
      "Turbidity",
      "Specimen from a Foley catheter"
    ],
    "answer": "C",
    "explanation": "Urine microscopy reflex testing is used by laboratories that do not perform automated microscopic urinalysis because of the low likelihood of significant findings when the microscopic analysis is performed on samples with normal physical characteristics and biochemical results. Urine samples with abnormal color and clarity are usually included in the criteria for reflex testing because either may be associated with abnormal cells or crystals."
  },
  {
    "id": 317,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is appropriate when collecting a 24-hour urine sample for metanephrines?",
    "options": [
      "Urine in the bladder is voided at the start of the test and added to the collection container",
      "At 24 hours, any urine in the bladder is voided and discarded",
      "All urine should be collected in a single container that is kept refrigerated",
      "Ten milliliters of 1N sodium hydroxide should be added to the container before collection"
    ],
    "answer": "C",
    "explanation": "When collecting a 24-hour urine sample, the bladder must be emptied of urine at the start of the test and discarded. The bladder must be emptied at the conclusion of the test and the urine added to the collection. To prevent degradation of the catecholamines vanillylmandelic acid (VMA), metanephrines, and cortisol, urine must be refrigerated during storage and kept at 2°C to 8°C until analysis or frozen. If the pH of the specimen exceeds 3.0, degradation of catecholamines can occur. Preservation of urine with acid is no longer required for VMA, metanephrines, and cortisol."
  },
  {
    "id": 318,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Urine production of less than 400 mL/day is:",
    "options": [
      "Consistent with normal renal function and H2O balance",
      "Termed isosthenuria",
      "Defined as oliguria",
      "Associated with diabetes mellitus"
    ],
    "answer": "C",
    "explanation": "Normal daily urine excretion is usually 600 to 1,600 mL/day. Isosthenuria refers to urine of constant SG of 1.010, which is the SG of the glomerular filtrate. Glycosuria causes retention of H2O within the tubule, resulting in dehydration and polyuria, rather than oliguria."
  },
  {
    "id": 319,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following contributes to SG, but not to osmolality?",
    "options": [
      "Protein",
      "Salt",
      "Urea",
      "Glucose"
    ],
    "answer": "A",
    "explanation": "All substances that dissolve in the urine contribute to osmotic pressure or osmolality. This includes nonionized solutes such as urea, uric acid, and glucose as well as salts, but not colloids, such as protein and lipids."
  },
  {
    "id": 320,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Urine with an SG consistently between 1.002 and 1.003 indicates:",
    "options": [
      "Acute glomerulonephritis",
      "Renal tubular failure",
      "Diabetes insipidus",
      "Addison disease"
    ],
    "answer": "C",
    "explanation": "In severe renal diseases, the tubules fail to concentrate the filtrate. Salt and H2O equilibrate by diffusion, causing an SG of about 1.010. If the SG of urine is below that of plasma, free H2O is lost. This results from failure to produce ADH (inherited diabetes insipidus) or from failure of the tubules to respond to ADH (nephrogenic diabetes insipidus, which can be caused by drugs, polycystic kidney disease, and hypercalcemia)."
  },
  {
    "id": 321,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In which of the following conditions is the urine SG likely to be below 1.025?",
    "options": [
      "Diabetes mellitus",
      "Drug overdose",
      "Chronic renal failure",
      "Prerenal failure"
    ],
    "answer": "C",
    "explanation": "Glucose and drug metabolites increase the SG of urine. In prerenal failure, the tubules are undamaged. Ineffective arterial pressure stimulates aldosterone release. This increases sodium reabsorption, which stimulates ADH release. Water and salt are retained, and the urine:plasma osmolar (U:P) ratio exceeds 2:1. Chronic renal failure is associated with nocturia, polyuria, and low SG caused by scarring of the collecting tubules."
  },
  {
    "id": 322,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding methods for measuring SG is true?",
    "options": [
      "Refractometry is the most accurate way to determine dissolved solute concentration",
      "Colorimetric SG test results are falsely elevated when a large quantity of glucose is present",
      "Colorimetric SG readings are falsely low when pH is alkaline",
      "Refractometry should be performed before the urine is centrifuged"
    ],
    "answer": "C",
    "explanation": "Cells and undissolved solutes refract light and will cause a falsely high specific gravity reading by refractometry if urine is not centrifuged. Colorimetric SG tests are less sensitive to nonionized compounds, such as urea and glucose, and are negatively biased when large quantities of nonelectrolytes are present. Colorimetric SG readings are determined by a pH change on the test pad and are approximately 0.005 lower when pH is 6.5 or higher. Osmometry is the most accurate way to measure the concentration of dissolved solutes in urine."
  },
  {
    "id": 323,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "What is the principle of the colorimetric reagent strip determination of SG in urine?",
    "options": [
      "Ionic strength alters the pKa of a polyelectrolyte",
      "Sodium and other cations are chelated by a ligand that changes color",
      "Anions displace a pH indicator from a mordant, making it water soluble",
      "Ionized solutes catalyze oxidation of an azo dye"
    ],
    "answer": "A",
    "explanation": "A polyelectrolyte with malic acid residues will ionize in proportion to the ionic strength of urine. This causes the pH indicator, bromthymol blue, to react as if it were in a more acidic solution. The indicator will be blue at low SG and green at higher SG."
  },
  {
    "id": 324,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding urine pH is true?",
    "options": [
      "A high-protein diet promotes an alkaline urine pH",
      "pH tends to decrease as urine is stored",
      "Contamination should be suspected if urine pH is less than 4.5",
      "Bacteriuria is most often associated with a low urine pH"
    ],
    "answer": "C",
    "explanation": "Bacteriuria is usually associated with an alkaline pH caused by the production of ammonia from urea. Extended storage may result in loss of volatile acids, causing increased pH. A high-protein diet promotes excretion of inorganic acids. The tubular maximum for hydrogen ion secretion occurs when urine pH reaches 4.5, the lowest urinary pH that the kidneys can produce."
  },
  {
    "id": 325,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In renal tubular acidosis, the pH of urine is:",
    "options": [
      "Consistently acid",
      "Consistently alkaline",
      "Neutral",
      "Variable, depending on diet"
    ],
    "answer": "B",
    "explanation": "Renal tubular acidosis results from a defect in the renal tubular reabsorption of bicarbonate. Hydrogen ions are not secreted when bicarbonate ions are not reabsorbed. Wasting of sodium bicarbonate (NaHCO3) and potassium bicarbonate (KHCO3) results in alkaline urine and hypokalemia in association with acidosis."
  },
  {
    "id": 326,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The normal daily urine output for an adult is approximately:",
    "options": [
      "0.2 to 0.5 L",
      "0.6 to 1.6 L",
      "2.7 to 3.0 L",
      "3.2 to 3.5 L"
    ],
    "answer": "B",
    "explanation": "Under conditions of normal fluid intake, the reference range for urine volume is 0.6 to 1.6 L per day. Urine output will vary widely with fluid intake. In cases of fluid deprivation, almost all filtrate will be reabsorbed, resulting in daily excretion as low as 500 mL. When fluid intake is excessive, up to 2.0 L of urine may be voided. Urine output beyond these extremes is considered abnormal."
  },
  {
    "id": 327,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The SG of the filtrate in the Bowman space is approximately:",
    "options": [
      "1.000 to 1.002",
      "1.004 to 1.006",
      "1.008 to 1.010",
      "1.012 to 1.014"
    ],
    "answer": "C",
    "explanation": "The SG of the filtrate in the Bowman space approximates the SG of plasma because sodium, chloride, glucose, urea, and other main solutes are completely filtered by the glomeruli. This corresponds to an osmolality of approximately 280 mOsm/kg."
  },
  {
    "id": 328,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A patient with partially compensated respiratory alkalosis would have a urine pH of:",
    "options": [
      "4.5 to 5.5",
      "5.5 to 6.5",
      "6.5 to 7.5",
      "7.5 to 8.5"
    ],
    "answer": "D",
    "explanation": "Urine pH is determined by diet, acid–base balance, water balance, and renal function. In partially compensated respiratory alkalosis, the kidneys reabsorb less bicarbonate, which results in lower net acid excretion. The loss of bicarbonate helps compensate for alkalosis and causes urine pH to be alkaline."
  },
  {
    "id": 329,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is most likely to cause a false-positive result on the dry reagent strip test for urinary protein?",
    "options": [
      "Urine of high SG",
      "Highly buffered alkaline urine",
      "Bence-Jones protein",
      "Salicylates"
    ],
    "answer": "B",
    "explanation": "In addition to highly buffered alkaline urine, a false-positive protein result on the dry reagent strip test may be caused by quaternary ammonium compounds, which increase urine pH. Because the dry reagent strip tests are insensitive to globulins, a false- negative result is likely in the case of Bence-Jones proteinuria. Positive interference by drugs is uncommon for dry reagent strip protein tests but is common for turbidimetric tests. High urinary SG will suppress the color reaction of the strip protein tests."
  },
  {
    "id": 330,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "When testing for urinary protein with sulfosalicylic acid (SSA), which condition may produce a false-positive result?",
    "options": [
      "Highly buffered alkaline urine",
      "The presence of x-ray contrast media",
      "Increased urinary SG",
      "The presence of red blood cells (RBCs)"
    ],
    "answer": "B",
    "explanation": "Turbidimetric assays are used to test urine suspected of giving a false-positive result on the dry reagent strip test for albumin because the urine is highly alkaline (pH greater than or equal to 8.0) or contains pigmentation that interferes with reading the protein test pad. In addition, SSA tests are used when screening urine for an increased concentration of globulins because dry reagent strip tests are far less sensitive to globulins. SSA is less specific but more sensitive for albuminuria than conventional dry reagent strip tests. Iodinated dyes, penicillin, salicylate, and tolbutamide may result in false-positive results. Trace turbidity is difficult to determine when urine is cloudy as a result of bacteriuria, mucus, or crystals. Alkaline urine may titrate SSA, reducing its sensitivity. For these reasons, the SSA test is not used routinely."
  },
  {
    "id": 331,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A discrepancy between the urine SG determined by measuring refractive index and urine osmolality would be most likely to occur:",
    "options": [
      "After catheterization of the urinary tract",
      "In diabetes mellitus",
      "After intravenous pyelography (IVP)",
      "In uremia"
    ],
    "answer": "C",
    "explanation": "The IVP dye contains iodine and is highly refractile. This increases the refractive index of urine, causing falsely high measurement of solute concentration. The refractive index is affected by the size and shape of solutes and undissolved solids, such as protein. Osmolality is the most specific measure of total solute concentration because it is affected only by the number of dissolved solutes."
  },
  {
    "id": 332,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is likely to result in a false-negative dry reagent strip test for proteinuria?",
    "options": [
      "Penicillin",
      "Aspirin",
      "Amorphous phosphates",
      "Bence-Jones protein"
    ],
    "answer": "D",
    "explanation": "Dry reagent strip tests using tetrabromophenol blue or tetrachlorophenol tetrabromosulfophthalein are poorly sensitive to globulins and may not detect immunoglobulin light chains. Turbidimetric methods, such as 3% SSA, will often detect Bence-Jones protein but may give a false-positive reaction with penicillin, tolbutamide, salicylates, and x-ray contrast dyes containing iodine. Amorphous phosphates may precipitate in refrigerated urine, making interpretation of turbidimetric tests difficult."
  },
  {
    "id": 333,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Daily loss of protein in urine normally does not exceed:",
    "options": [
      "30 mg",
      "50 mg",
      "100 mg",
      "150 mg"
    ],
    "answer": "D",
    "explanation": "Small amounts of albumin and other low molecular weight proteins, such as amylase, β-microglobulins, and immunoglobulin fragments, are excreted in urine. Proteinuria does not normally exceed 30 mg/dL or 150 mg/day. The detection limit of the SSA test to albumin is approximately 1.5 to 2.0 mg/dL, and for dry reagent strip tests, it is approximately 15 mg/dL. Therefore, trace positives by either method may occur in the absence of renal disease."
  },
  {
    "id": 334,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is least likely to cause a false-positive result on turbidimetric protein tests?",
    "options": [
      "Tolbutamide",
      "X-ray contrast media",
      "Penicillin or sulfa antibiotics",
      "Ascorbic acid"
    ],
    "answer": "D",
    "explanation": "Ascorbic acid may reduce diazo salts used in the bilirubin and nitrite tests, and react with hydrogen peroxide in peroxidase reactions. Therefore, persons taking megadoses of ascorbic acid (vitamin C) may show negative interference with tests for glucose, blood, bilirubin, and nitrite. Ascorbate does not cause either a false-negative or positive reaction for protein."
  },
  {
    "id": 335,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement best describes the clinical utility of tests for microalbuminuria?",
    "options": [
      "Testing may detect early renal involvement in diabetes mellitus",
      "Microalbuminuria refers to a specific subfraction of albumin found only in persons with diabetic nephropathy",
      "A positive test result indicates the presence of orthostatic albuminuria",
      "Testing should be part of the routine urinalysis"
    ],
    "answer": "A",
    "explanation": "The microalbumin test is an assay for measuring urinary albumin concentration that has an increased sensitivity (detection limit below 15 mg/dL) and is recommended for persons who are at risk for chronic renal disease, especially persons with diabetes mellitus. In diabetes, an early sign of renal involvement is an increased rate of albumin excretion in the range of 20 to 200 µg/mL or in excess of 30 mg albumin per gram of creatinine. Results in this range are significant in the at-risk population, even though the dry reagent strip test for protein may yield negative results. Dry reagent strip tests for microalbuminuria are too sensitive for use in routine urinalysis but are useful in screening persons with diabetes and hypertension for increased urinary albumin excretion."
  },
  {
    "id": 336,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Dry reagent strip tests for microalbuminuria that compare albumin to creatinine determine the creatinine concentration based on which principle?",
    "options": [
      "Formation of a Cu+2–creatinine complex",
      "Enzymatic assay using sarcosine oxidase and peroxidase",
      "Reaction of creatinine with alkaline sodium picrate",
      "Change in pH as creatinine is converted to creatine"
    ],
    "answer": "A",
    "explanation": "The dry reagent strip test for creatinine contains anhydrous buffered copper II sulfate (CuIISO4), alcoholic tetramethylbenzidine, and diisopropyl benzene dihydroperoxide. In the presence of creatinine, a copper–creatinine complex forms. This catalyzes the oxidation of a benzidine derivative by an alcoholic peroxide, forming a blue color on the test pad. Color intensity is proportional to creatinine concentration. Negative interference occurs from ascorbate and ethylenediaminetetraacetic acid (EDTA), which chelates the copper. Positive interference occurs from hemoglobin and some drugs (e.g., nitrofurantoin). The microalbumin concentration is determined by the protein error of indicator effect using a dye with increased sensitivity, bis- tetrabromosulfonephthalein."
  },
  {
    "id": 337,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is least likely to be detected by dry reagent strip tests for proteinuria?",
    "options": [
      "Orthostatic albuminuria",
      "Chronic renal failure",
      "Pyelonephritis",
      "Renal tubular proteinuria"
    ],
    "answer": "D",
    "explanation": "The detection limit (sensitivity) of dry reagent strip protein tests is approximately 15 mg/dL albumin and is sufficient to detect urinary albumin levels found in orthostatic albuminuria and renal diseases, with the exception of tubular proteinuria. Renal tubular proteinuria results from failure of damaged tubules to reabsorb small proteins, such as β2-microglobulin. Dry reagent strip tests for proteinuria are poorly sensitive to globulins and do not detect small quantities of hemoglobin, myoglobin, or microglobulins. Electrophoresis of urine is used to detect renal tubular proteinuria."
  },
  {
    "id": 338,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The normal renal threshold for glucose is:",
    "options": [
      "70 to 85 mg/dL",
      "100 to 115 mg/dL",
      "130 to 145 mg/dL",
      "165 to 180 mg/dL"
    ],
    "answer": "D",
    "explanation": "The renal threshold is the concentration of a substance (e.g., glucose) in blood that must be exceeded before it can be detected in urine. Threshold substances require a carrier to transport them from the tubular lumen to the vasa recta. When the carrier becomes saturated, the tubular maximum is reached, causing the substance to be excreted in urine."
  },
  {
    "id": 339,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In which of the following conditions is glycosuria most likely?",
    "options": [
      "Addison disease",
      "Hypothyroidism",
      "Pregnancy",
      "Hypopituitarism"
    ],
    "answer": "C",
    "explanation": "In addition to diabetes mellitus, glycosuria may occur in other endocrine diseases, in pregnancy, in response to drugs that affect glucose tolerance or renal threshold, and in several other conditions, especially those involving the liver or the central nervous system (CNS). Cushing disease and hyperthyroidism cause impaired glucose tolerance and hyperglycemia. Increased estrogens produced in pregnancy lower the renal threshold for glucose and may impair glucose tolerance. Hyperpituitarism causes hyperglycemia mediated by increased release of growth hormone."
  },
  {
    "id": 340,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In addition to ascorbate, the glucose oxidase reaction may be inhibited by which substance?",
    "options": [
      "Acetoacetic acid (AAA)",
      "ε-Aminocaproic acid",
      "Creatinine",
      "Azopyridium"
    ],
    "answer": "A",
    "explanation": "AAA and salicylates may inhibit the glucose oxidase reaction by the same mechanism as ascorbate. These reducing agents compete with the chromogen for hydrogen peroxide. Low SG may increase and high SG decrease the color reaction for glucose in urine."
  },
  {
    "id": 341,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A positive glucose oxidase test and a negative test for reducing sugars indicates:",
    "options": [
      "True glycosuria",
      "False-positive reagent strip test result",
      "False-negative reducing test result caused by ascorbate",
      "Galactosuria"
    ],
    "answer": "A",
    "explanation": "Glucose oxidase is specific for β-D-glucose. Therefore, a positive reaction is always considered significant unless contamination is evident. A reducing test should not be used to confirm a positive result on the glucose oxidase test because this test is not as specific or as sensitive. Reducing sugar tests are used to screen infants for inborn errors of carbohydrate metabolism, such as galactosuria, but are not used to screen for glycosuria."
  },
  {
    "id": 342,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A negative glucose oxidase test and a positive test for reducing sugars in urine indicates:",
    "options": [
      "True glycosuria",
      "A false-negative glucose oxidase reaction",
      "The presence of a nonglucose reducing sugar, such as galactose",
      "A trace quantity of glucose"
    ],
    "answer": "C",
    "explanation": "Reducing tests utilize alkaline copper sulfate and heat to oxidize glucose. Other reducing substances, including several sugars and antibiotics, may react, making the test inappropriate as a screening test for glucose. A positive test result for reducing sugars seen with a negative glucose oxidase test result may occur in lactose, galactose, and fructosuria and other disorders of carbohydrate metabolism. Such tests should always be confirmed with chromatography to identify the specific sugar and with assay of the specific enzyme involved."
  },
  {
    "id": 343,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In what condition may urinary ketone tests underestimate ketosis?",
    "options": [
      "Acidosis",
      "Hemolytic anemia",
      "Renal failure",
      "Excessive use of vitamin C"
    ],
    "answer": "A",
    "explanation": "Tests for urinary ketone bodies are sensitive to AAA. They react weakly with acetone and do not react with β-hydroxybutyric acid. Acidosis favors formation of β- hydroxybutyric acid and may cause a falsely low estimate of urine ketones in diabetic ketoacidosis. Ketonuria has many causes other than diabetic ketoacidosis, such as pregnancy, fever, protein calorie malnutrition, and dietary carbohydrate restriction. Trace ketones tend to be more clinically significant when seen in urine with a low SG."
  },
  {
    "id": 344,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "AAA is detected in urine by reaction with:",
    "options": [
      "Sodium nitroprusside",
      "o-Toluidine",
      "m-Dinitrobenzene",
      "m-Dinitrophenylhydrazine"
    ],
    "answer": "A",
    "explanation": "Urinary ketones are detected using alkaline sodium nitroprusside (nitroferricyanide). Mesna and other sulfhydryl compounds may cause a false-positive result on dry reagent strip tests and phenylpyruvic acid (PKU) and some antibiotics with the classic tube test."
  },
  {
    "id": 345,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Nondiabetic ketonuria can occur in all of the following except:",
    "options": [
      "Pregnancy",
      "Renal failure",
      "Starvation",
      "Lactate acidosis"
    ],
    "answer": "B",
    "explanation": "Ketonuria results from excessive oxidation of fats forming acetyl coenzyme A (CoA). In addition to diabetes mellitus, ketonuria occurs in starvation, carbohydrate restriction, alkalosis, lactate acidosis, and von Gierke disease (glycogen stores cannot be utilized). Ketonuria also occurs in pregnancy, associated with increased vomiting and cyclic fever."
  },
  {
    "id": 346,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding the classic nitroprusside reaction for ketones is true?",
    "options": [
      "The reaction is most sensitive to acetone",
      "Nitroprusside reacts with acetone, AAA, and β-hydroxybutyric acid",
      "It may be falsely positive in phenylketonuria",
      "The reaction is recommended for diagnosing ketoacidosis"
    ],
    "answer": "C",
    "explanation": "Tests for ketones are less sensitive to acetone than to AAA and do not detect β- hydroxybutyric acid. High levels of phenylpyruvic acid (phenylketonuria) will cause a false-positive reaction in the classic nitroprusside reaction but do not usually interfere with the dry reagent strip test for ketones. Serum ketones can be measured by gas chromatography, and β-hydroxybutyric acid can be measured enzymatically. The enzymatic assay for β-hydroxybutyrate in plasma is the recommended test for diagnosing ketoacidosis since acidosis favors its formation."
  },
  {
    "id": 347,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Hemoglobin in urine can be differentiated from myoglobin by using:",
    "options": [
      "80% ammonium sulfate to precipitate hemoglobin",
      "Sodium dithionite to reduce hemoglobin",
      "o-Dianisidine instead of benzidine as the color indicator",
      "The dry reagent strip blood test"
    ],
    "answer": "A",
    "explanation": "Both hemoglobin and myoglobin have peroxidase activity and cause a positive blood test result. However, myoglobin is soluble in 80% weight per volume (w/v) ammonium sulfate in urine, but hemoglobin precipitates. A positive blood reaction with supernatant after addition of ammonium sulfate and sodium hydroxide (NaOH) confirms the presence of myoglobin. The presence of RBCs indicates that hemoglobin, rather than myoglobin, is present; however, the absence of RBCs does not rule out the presence of hemoglobin as the cause of a positive blood test result."
  },
  {
    "id": 348,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is associated with a negative blood test result and an increase in urine urobilinogen?",
    "options": [
      "Calculi of the kidney or bladder",
      "Malignancy of the kidney or urinary system",
      "Crush injury",
      "Extravascular hemolytic anemia"
    ],
    "answer": "D",
    "explanation": "A positive result on the blood test can occur from renal or lower urinary tract bleeding, intravascular hemolytic anemia, and transfusion reaction. Extravascular hemolysis results in increased bilirubin production, rather than in plasma hemoglobin. This may cause increased urobilinogen in urine, but not a positive blood reaction."
  },
  {
    "id": 349,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement about the dry reagent strip blood test is true?",
    "options": [
      "The test is based on the reaction of hemoglobin with peroxidase",
      "Abnormal color may be absent from the urine when the reaction is positive",
      "A nonhemolyzed trace is present when there are 1 to 2 RBCs per high-power field",
      "Salicylates cause a false-positive reaction"
    ],
    "answer": "B",
    "explanation": "The blood reaction uses anhydrous peroxide and tetramethylbenzidine. Hemoglobin has peroxidase activity and catalyzes the oxidation of tetramethylbenzidine by peroxide. The reaction is sensitive to submilligram levels of free hemoglobin, whereas visible hemolysis does not occur unless free hemoglobin exceeds 20 mg/dL. The test detects approximately 4–5 intact RBCs/HPF as a nonhemolyzed trace. Greater than 3 RBCs/HPF is abnormal."
  },
  {
    "id": 350,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A moderately positive result on the blood test and trace protein test are seen on the dry reagent strip, and 11 to 20 RBCs/HPF are seen in the microscopic examination. These results are most likely caused by which of the following?",
    "options": [
      "Transfusion reaction",
      "Myoglobinuria",
      "Intravascular hemolytic anemia",
      "Recent urinary tract catheterization"
    ],
    "answer": "D",
    "explanation": "The blood test detects intact RBCs, hemoglobinuria, and myoglobinuria. Causes of hemoglobinuria include intravascular hemolytic anemias, transfusion reactions, and lysis of RBCs in the filtrate or urine caused by alkaline or hypotonic conditions. Causes of hematuria include acute and chronic glomerulonephritis, pyelonephritis, polycystic kidney disease, renal calculi, bladder and renal cancers, and catheterization of the urinary tract."
  },
  {
    "id": 351,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following results are discrepant?",
    "options": [
      "Small amount of blood, but negative protein",
      "Moderate amount of blood, but no RBCs in microscopic examination",
      "Negative blood, but 6 to 10 RBCs/HPF",
      "Negative blood, but positive protein"
    ],
    "answer": "C",
    "explanation": "The blood test detects as little as 0.015 mg/dL free hemoglobin and 4 to 5 RBCs/µL. The protein test detects 15 mg/dL albumin, but substantially more hemoglobin is required to obtain a positive test result. Therefore, a small blood reaction (nonhemolyzed or moderately hemolyzed trace, trace, or small) usually occurs in the absence of a positive protein. A positive blood test result often occurs in the absence of RBCs in the microscopic examination. This can result from intravascular hemolysis, myoglobinuria, or lysis of RBCs caused by alkaline or hypotonic urine. A positive test result for protein and a negative blood test result occur commonly in such conditions as orthostatic albuminuria, urinary tract infection, and diabetes mellitus. However, a negative blood test result should not occur if more than 3 to 4 RBCs/HPF are seen in the microscopic examination. Either the blood test is falsely negative (a missed nonhemolyzed trace), or yeast has been mistaken for RBCs."
  },
  {
    "id": 352,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding the dry reagent strip test for bilirubin is true?",
    "options": [
      "A positive test result is seen in prehepatic, hepatic, and posthepatic jaundice",
      "The test detects only conjugated bilirubin",
      "Standing urine may become falsely positive because of bacterial contamination",
      "High levels of ascorbate will cause positive interference"
    ],
    "answer": "B",
    "explanation": "Only the conjugated form of bilirubin is excreted into urine. Urinary bilirubin is positive in necrotic and obstructive jaundice but not in prehepatic jaundice, which results in a high level of serum unconjugated bilirubin. The highest levels of urinary bilirubin occur in obstructive jaundice, which causes decreased urinary urobilinogen. Very few drugs have been reported to interfere with urine bilirubin tests, which are based on the formation of azobilirubin by reaction with a diazonium salt. Positive interference by rifampin and chlorpromazine have been reported. Urine must be fresh because sunlight destroys bilirubin. Bacteria may cause hydrolysis of glucuronides, forming unconjugated bilirubin, which does not react with the diazonium reagent. Ascorbate inhibits the reaction by reducing the diazo reagent."
  },
  {
    "id": 353,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following reagents is used to detect urobilinogen in urine?",
    "options": [
      "p-Dinitrobenzene",
      "p-Aminosalicylate",
      "p-Dimethylaminobenzaldehyde",
      "p-Dichloroaniline"
    ],
    "answer": "C",
    "explanation": "Urobilinogen reacts with the Ehrlich aldehyde reagent (p- dimethylaminobenzaldehyde in hydrochloric acid [HCl]) to form a pink color. Dry reagent strips use either p-dimethylaminobenzaldehyde or 4-methoxybenzene diazonium tetrafluoroborate to detect urobilinogen. The former reagent may react with PBG, salicylate, and sulfonamides giving falsely high results. False-positive results may occur in the presence of pyridium and gantrisin, which color urine orange-red. Formalin may cause a false-negative reaction."
  },
  {
    "id": 354,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding urinary urobilinogen is true?",
    "options": [
      "Diurnal variation occurs, and the highest levels are seen in the early morning",
      "High levels accompanied by a positive bilirubin test result indicate obstructive jaundice",
      "Dry reagent strip tests do not detect decreased levels",
      "False-positive results may occur if urine is stored for more than 2 hours"
    ],
    "answer": "C",
    "explanation": "Urobilinogen exhibits diurnal variation, and highest levels are seen in the afternoon. A 2-hour postprandial afternoon sample is the sample of choice for detecting increased urine urobilinogen. Urobilinogen is formed by bacterial reduction of conjugated bilirubin in the bowel. In obstructive jaundice, delivery of bilirubin into the intestine is blocked, resulting in decreased fecal, serum, and urine urobilinogen. However, the dry reagent strip tests are not sensitive enough to detect abnormally low levels. Urobilinogen is rapidly oxidized to urobilin, which does not react with dry reagent strip tests."
  },
  {
    "id": 355,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding the test for nitrite in urine is true?",
    "options": [
      "It detects more than 95% of clinically significant bacteriuria",
      "Formation of nitrite is unaffected by the urine pH",
      "The test is dependent on adequate dietary nitrate content",
      "A positive test differentiates bacteriuria from in vitro bacterial contamination"
    ],
    "answer": "C",
    "explanation": "The nitrite test is dependent on the activity of bacterial reductase, and false-negative results have been reported when urine is highly acidic. Nitrite is formed by reduction of diet-derived nitrates and reacts with p-arsanilic acid or sulfanilamide to form a diazonium compound. This reacts with benzoquinoline to form a pink azo dye. False- negative results also occur in the presence of ascorbate, which reduces the diazonium product. Nitrite is positive in about 70% of clinically significant bacterial infections of the urinary tract. Sensitivity is limited by the requirements for dietary nitrate and 3- to 4-hour storage time in the bladder. In addition, the causative bacteria must be able to reduce nitrate."
  },
  {
    "id": 356,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement about the dry reagent strip test for leukocytes is true?",
    "options": [
      "The test detects only intact white blood cells (WBCs)",
      "The reaction is based on the hydrolysis of substrate by WBC esterases",
      "Several antibiotics may give a false-positive reaction",
      "The test is sensitive to 2 to 3 WBCs/HPF"
    ],
    "answer": "B",
    "explanation": "Polymorphonuclear cells (PMNs) in urine are detected by the presence of esterases that hydrolyze an ester, such as indoxylcarbonic acid. The product reacts with a diazonium salt to give a purple color. The test detects esterases in urine as well as intact WBCs but is not sensitive to less than 5 to 10 WBCs/HPF. Several antibiotics, high protein, and high SG inhibit the esterase reaction. Formalin may cause a false- positive result."
  },
  {
    "id": 357,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements about creatinine clearance is correct?",
    "options": [
      "Dietary restrictions are required during the 24 hours preceding the test",
      "Fluid intake must be restricted to below 600 mL in the 6 hours preceding the test",
      "Creatinine clearance is mainly determined by renal tubular function",
      "Creatinine clearance is dependent on lean body mass"
    ],
    "answer": "D",
    "explanation": "Although some creatinine is derived from the diet, it is rapidly filtered by the glomeruli, and time variations are reduced by collection of urine for 24 hours. Creatinine is produced from oxidation of creatine at a constant rate of about 2% per day. It is filtered completely and not significantly reabsorbed. However, creatinine secretion by the tubules is increased when filtrate flow is slow, and patients must be given at least 600 mL of H2O at the start of the test and kept well hydrated throughout. Body size determines how much creatinine is produced, and clearance must be normalized to eliminate this variable. Because of the difficulty in collecting a valid 24- hour urine sample, the estimated glomerular filtration rate (eGFR) is recommended as the screening test for low GFR. Creatinine clearance should be used in situations where lean body mass may not be accurately represented by the patient’s age and gender as used in the Modification of Diet in Renal Disease Study (MDRD) formula for eGFR."
  },
  {
    "id": 358,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A male patient’s eGFR is 75 mL/min. This indicates:",
    "options": [
      "Normal glomerular filtration rate",
      "The patient is uremic and will be hyperkalemic",
      "Renal tubular dysfunction",
      "Reduced glomerular filtration without uremia"
    ],
    "answer": "D",
    "explanation": "Normal eGFR is 90 to 120 mL/min. Values below the lower reference limit, but greater than 60 mL/min, indicate glomerular damage but not of severity sufficient to cause symptoms or uremia."
  },
  {
    "id": 359,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following substances can be used to calculate eGFR?",
    "options": [
      "p-Aminohippuric acid (PAH)",
      "Glycine",
      "Cysteine",
      "Cystatin C"
    ],
    "answer": "D",
    "explanation": "Cystatin C is a small protease inhibitor that is produced at a constant rate, eliminated exclusively by glomerular filtration, and is not dependent on age, gender, or nutritional status. Plasma cystatin C is increased when the GFR is decreased, and levels can be used to give an eGFR in a similar manner to plasma creatinine. PAH is a substance that is completely filtered by the glomerulus and also secreted by the tubules. Amino acids are partially reabsorbed by the tubules and are not present in blood at a constant rate."
  },
  {
    "id": 360,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding urea is true?",
    "options": [
      "Urea is 100% filtered by the glomeruli",
      "Blood urea levels are independent of diet",
      "Urea is not significantly reabsorbed by the tubules",
      "Urea excretion is a specific measure of glomerular function"
    ],
    "answer": "A",
    "explanation": "Blood urea nitrogen (BUN) is a sensitive indicator of renal disease but is not specific for glomerular function. BUN levels are affected by diet, hepatic function, tubular function, and filtrate flow, as well as the GFR. Although urea is completely filtered by the glomerulus, the tubules reabsorb 30% to 40% of the filtered urea, and this is why BUN concentration is higher than plasma creatinine. In prerenal failure, up to 70% of the filtered urea can be reabsorbed as a result of the slow movement of filtrate through the tubules. This causes BUN to rise much more than plasma creatinine in this condition. A BUN:creatinine ratio of 20:1 is highly suggestive of prerenal failure."
  },
  {
    "id": 361,
    "section": "Routine Physical and Biochemical Urine Tests",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following data, calculate the creatinine clearance. Serum creatinine = 1.2 mg/Dl Urine creatinine = 100 mg/dL Urine volume = 1.4 L/day Body surface area = 1.80 m2",
    "options": [
      "47 mL/min",
      "78 mL/min",
      "100 mL/min",
      "116 mL/min"
    ],
    "answer": "B",
    "explanation": "The clearance formula is U ÷ P × V × 1.73/A, where U = urine creatinine (mg/dL), P"
  },
  {
    "id": 362,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following dyes are used to make Sternheimer-Malbin stain?",
    "options": [
      "Hematoxylin and eosin",
      "Crystal violet and safranin",
      "Methylene blue and eosin",
      "Methylene blue and safranin"
    ],
    "answer": "B",
    "explanation": "The Sternheimer-Malbin stain is a supravital stain used to differentiate renal tubular epithelium from transitional cells and PMNs. The mononuclear cells are clearly distinguished from both live and dead PMNs. Transitional cells have pale blue cytoplasm, but renal cells take up both dyes, resulting in an azurophilic appearance (orange-purple cytoplasm and dark purple nucleus)."
  },
  {
    "id": 363,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding WBCs in urinary sediment is true?",
    "options": [
      "“Glitter cells” seen in urinary sediment are a sign of renal disease",
      "Bacteriuria in the absence of WBCs indicates lower urinary tract infection (UTI)",
      "WBCs other than PMNs are not found in urinary sediment",
      "WBC casts indicate that pyuria is of renal, rather than lower urinary, origin"
    ],
    "answer": "D",
    "explanation": "The majority of WBCs in urinary sediment will be PMNs. Eosinophils and mononuclear WBCs will occasionally be seen. High numbers of eosinophils often indicate an allergic drug reaction, causing inflammation in the medullary interstitium and tubules. Mononuclear cells are especially likely in patients with chronic inflammatory diseases and in renal transplant rejection, where they may account for as many as 30% of the WBCs. Glitter cells are PMNs with highly refractile granules exhibiting Brownian movement. They are seen only when the urine SG is below 1.020. These cells resist staining with the Sternheimer-Malbin stain and are considered to be living (fresh) WBCs. When seen in large numbers, they indicate urinary tract injury (with pseudopod extensions, they point to infection). The presence of bacteria in urine in the absence of PMNs usually results from contamination by vaginal or skin flora that multiply in vitro, especially in unrefrigerated specimens. The presence of WBC casts is always significant and, when associated with pyuria and bacteriuria, indicates renal involvement in the infection."
  },
  {
    "id": 364,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which description of urinary sediment with the Sternheimer-Malbin stain is correct?",
    "options": [
      "Transitional epithelium: cytoplasm pale blue, nucleus dark blue",
      "Renal epithelium: cytoplasm light blue, nucleus dark purple",
      "Glitter cells: cytoplasm dark blue, nucleus dark purple",
      "Squamous epithelium: cytoplasm pink, nucleus pale blue"
    ],
    "answer": "A",
    "explanation": "After staining with the Sternheimer-Malbin stain, transitional epithelium are readily differentiated from renal tubular cells and WBCs because their cytoplasm is pale blue. Live WBCs exclude the Sternheimer-Malbin stain, whereas dead cells stain with a deeply blue-purple nucleus and pale orange-blue cytoplasm. Renal epithelium have an orange-purple cytoplasm and dark purple nucleus. Squamous epithelium have a blue or purple cytoplasm and an orange-purple nucleus. Red cells stain very pale pink or not at all and hyaline casts stain faintly pink."
  },
  {
    "id": 365,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A 5-mL urine specimen is submitted for routine urinalysis and is analyzed immediately. The SG of the sample is 1.012, and the pH is 6.5. The dry reagent strip blood test result is a large positive (3+), and the microscopic examination shows 11 to 20 RBCs/HPF. The leukocyte esterase reaction is a small positive (1+), and the microscopic examination shows 0 to 2 WBCs/HPF. What is the most likely cause of these results?",
    "options": [
      "Myoglobin is present in the sample",
      "Free hemoglobin is present",
      "Insufficient volume is causing microscopic results to be underestimated",
      "Some WBCs have been misidentified as RBCs"
    ],
    "answer": "C",
    "explanation": "Given the SG and pH, most RBCs and WBCs will be intact. Both the RBC and WBC counts are lower than expected from the dry reagent strip test results. Myoglobin or free hemoglobin may account for the poor correlation between the blood reaction and the RBC count, but this does not explain the lower than expected WBC count. Microscopic reference ranges are based on concentrating a uniform volume of sediment from 12 mL of urine. When less urine is used, falsely low results will be obtained unless corrective action is taken. The specimen should be diluted with normal saline to 12 mL, then centrifuged at 450 × g for 5 minutes. Urinary sediment should be prepared according to the established procedure and the results multiplied by the dilution factor (in this case, 12 ÷ 5, or 2.4)."
  },
  {
    "id": 366,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding epithelial cells in the urinary system is correct?",
    "options": [
      "Caudate epithelial cells originate from the upper urethra",
      "Transitional cells originate from the upper urethra, ureters, bladder, or renal pelvis",
      "Cells from the proximal renal tubule are usually round",
      "Squamous epithelium line the vagina, urethra, and wall of the urinary bladder"
    ],
    "answer": "B",
    "explanation": "Caudate cells are transitional epithelium that have a sawtooth-shaped tail and are found in the urinary bladder and the pelvis of the kidney. Transitional epithelia line the upper two thirds of the urethra and the ureters as well as the urinary bladder and renal pelvis. Renal tubular cells may be columnar, polyhedral, or oval, depending on the portion of the tubule from which they originate. Cells from the proximal tubule are columnar and have a distinctive brush border. Squamous epithelia line the vagina and lower third of the urethra."
  },
  {
    "id": 367,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the statements regarding examination of unstained urinary sediment is true?",
    "options": [
      "Renal cells can be differentiated reliably from WBCs",
      "Large numbers of transitional cells are often seen after catheterization",
      "Neoplastic cells from the bladder are not found in urinary sediment",
      "RBCs are easily differentiated from nonbudding yeast"
    ],
    "answer": "B",
    "explanation": "Renal cells and PMNs are about the same size and can be confused in unstained sediment. Catheterization often releases large clumps or sheets of transitional and squamous cells. These should be distinguished from neoplastic cells derived from the urinary bladder. When cells appear atypical (e.g., large cells in metaphase), they should be referred to a pathologist for cytological examination. Nonbudding yeast cells are approximately the same in size and appearance as RBCs. When RBCs are reported in the absence of a positive blood test, the probability of an error in microscopy is high. The microscopic examination should be reviewed for the presence of yeast."
  },
  {
    "id": 368,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding cells found in urinary sediment is true?",
    "options": [
      "Transitional cells resist swelling in hypotonic urine",
      "Renal tubular cells are often polyhedral and have an eccentric round nucleus",
      "Trichomonads have an oval shape with a prominent nucleus and a single anterior flagellum",
      "Clumps of bacteria are frequently mistaken for blood casts"
    ],
    "answer": "B",
    "explanation": "Transitional epithelial cells readily take up H2O and appear much larger than renal cells or WBCs when urine is hypotonic. Transitional cells are considered a normal component of the sediment unless present in large numbers and associated with signs of inflammation, such as mucus and PMNs, or presenting features of malignant cells. In contrast, renal cells are significant when seen conclusively in the sediment. They are often teardrop-shaped, polyhedral, or elongated cells with a round eccentric nucleus. Conclusive identification requires staining. T. vaginalis displays an indistinct nucleus and two pairs of prominent anterior flagella. Amorphous urate crystals deposited on the slide may be mistaken for granular or blood casts."
  },
  {
    "id": 369,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding RBCs in the urinary sediment is true?",
    "options": [
      "Yeast cells will lyse in dilute acetic acid but RBCs will not",
      "RBCs are often swollen in hypertonic urine",
      "RBCs of glomerular origin often appear dysmorphic",
      "Yeast cells will tumble when the cover glass is touched, but RBCs will not"
    ],
    "answer": "C",
    "explanation": "RBCs are difficult to distinguish from nonbudding yeast in unstained sediment. RBCs tumble when the cover glass is touched and will lyse when the sediment is reconstituted in normal saline containing 2% volume per volume (v/v) acetic acid. A nonhemolyzed trace blood reaction confirms the presence of RBCs. RBCs have a granular appearance in hypertonic urine as a result of crenation. The RBC membrane becomes distorted when passing through the glomerulus, often appearing scalloped, serrated, or invaginated. Such cells are called dysmorphic RBCs and are associated with glomerulonephritis."
  },
  {
    "id": 370,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Renal tubular epithelial cells are shed into urine in largest numbers in which condition?",
    "options": [
      "Malignant renal disease",
      "Acute glomerulonephritis",
      "Nephrotic syndrome",
      "Cytomegalovirus (CMV) infection of the kidney"
    ],
    "answer": "D",
    "explanation": "Although seen in glomerulonephritis and pyelonephritis, the largest numbers of renal tubular cells appear in urine in association with viral infections of the kidney. Renal epithelium may show characteristic viral inclusions associated with CMV and rubella. High numbers of renal epithelium are also found in the sediment of patients with drug- induced tubular nephrosis and in some cases of heavy metal poisoning. Renal tumors do not usually shed cells into urine."
  },
  {
    "id": 371,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The ova of which parasite is likely be found in the urinary sediment?",
    "options": [
      "Trichomonas vaginalis",
      "Entamoeba histolytica",
      "Schistosoma hematobium",
      "Trichuris trichiura"
    ],
    "answer": "C",
    "explanation": "Ova of S. hematobium are most often recovered from urine because the adult trematodes colonize the blood vessels of the urinary bladder. The eggs are approximately 150 × 60 µm in size and are nonoperculated. They are yellowish and have a prominent terminal spine."
  },
  {
    "id": 372,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Oval fat bodies are often seen in:",
    "options": [
      "Chronic glomerulonephritis",
      "Nephrotic syndrome",
      "Acute tubular nephrosis",
      "Renal failure of any cause"
    ],
    "answer": "B",
    "explanation": "Oval fat bodies are degenerated renal tubular epithelia that have reabsorbed cholesterol from the filtrate. Although they can occur in any inflammatory disease of the tubules, they are commonly seen in nephrotic syndrome, which is characterized by marked proteinuria and hyperlipidemia."
  },
  {
    "id": 373,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding urinary casts is true?",
    "options": [
      "Many hyaline casts may appear in urinary sediment after jogging or exercise",
      "The finding of even a single cast indicates renal disease",
      "Casts can be seen in significant numbers even when protein tests are negative",
      "Hyaline casts will dissolve readily in acid urine"
    ],
    "answer": "A",
    "explanation": "Proteinuria accompanies cylindruria because protein is the principal component of casts. After strenuous exercise, hyaline casts may be present in urinary sediment in significant numbers but will disappear after resting for at least 24 hours. Casts more readily dissolve in alkaline urine. The finding of a single cast, even a cellular cast, is not indicative of renal disease and should be considered a chance occurrence."
  },
  {
    "id": 374,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which condition promotes the formation of casts in urine?",
    "options": [
      "Chronic production of alkaline urine",
      "Polyuria",
      "Reduced filtrate formation",
      "Low urine SG"
    ],
    "answer": "C",
    "explanation": "Cast formation is promoted by an acid filtrate, high solute concentration, slow movement of filtrate, and reduced filtrate formation. The appearance of a cast is dependent on the location and the time spent in the tubule, as well as the chemical and cellular composition of the filtrate."
  },
  {
    "id": 375,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The mucoprotein that forms the matrix of a hyaline cast is called:",
    "options": [
      "Bence-Jones protein",
      "β-Microglobulin",
      "Tamm-Horsfall protein",
      "Arginine-rich glycoprotein"
    ],
    "answer": "C",
    "explanation": "Hyaline casts are composed of a mucoprotein called Tamm-Horsfall protein. In addition, casts may contain cells, immunoglobulins, light chains, cellular proteins, fat, bacteria, and crystalloids."
  },
  {
    "id": 376,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "“Pseudocasts” are often caused by:",
    "options": [
      "A dirty cover glass or slide",
      "Bacterial contamination",
      "Amorphous urates",
      "Mucus in urine"
    ],
    "answer": "C",
    "explanation": "Pseudocasts are formed by amorphous urates that may deposit in uniform cylindrical shapes as the sediment settles under the cover glass. They may be mistaken for granular or blood casts. However, they are highly refractile and lack the well-defined borders of true casts."
  },
  {
    "id": 377,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding urinary casts is correct?",
    "options": [
      "Fine granular casts are more significant than coarse granular casts",
      "Cylindruria is always clinically significant",
      "The appearance of cylindroids signals the onset of end-stage renal disease",
      "Broad casts are associated with severe renal tubular obstruction"
    ],
    "answer": "D",
    "explanation": "There is no clinical difference between fine and coarse granular casts. Granular casts may form by degeneration of cellular casts or from inclusion of urinary calculi, but some are of unknown etiology. Cylindruria refers to the presence of casts in the urine. Hyaline casts may be seen in small numbers in normal patients and in large numbers following strenuous exercise and long-distance running. Hyaline casts may also be increased in patients taking certain drugs, such as diuretics. Broad casts form in dilated or distal tubules and indicate severe tubular obstruction seen in chronic renal failure. Waxy casts form when there is prolonged stasis in the tubules and signal end-stage renal failure. Cylindroids are casts with tails and have no special clinical significance."
  },
  {
    "id": 378,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A sediment with moderate hematuria and RBC casts most likely results from:",
    "options": [
      "Chronic pyelonephritis",
      "Nephrotic syndrome",
      "Acute glomerulonephritis",
      "Lower urinary tract obstruction"
    ],
    "answer": "C",
    "explanation": "RBC casts indicate the renal origin of hematuria. Urinary tract obstruction may be associated with hematuria from ruptured vessels, but not casts. WBCs and WBC casts predominate in pyelonephritis. Urinary sediment in chronic glomerulonephritis is variable but usually exhibits moderate to severe intermittent hematuria. In addition, pyuria and cylindruria (with granular, blood, broad, waxy, and epithelial casts) are frequent. In nephrotic syndrome, the sediment may be unremarkable except for the presence of oval fat bodies and hyaline casts. In some cases, fatty, waxy, and epithelial cell casts may also be found."
  },
  {
    "id": 379,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Urine sediment characterized by pyuria with bacterial and WBC casts indicates:",
    "options": [
      "Nephrotic syndrome",
      "Pyelonephritis",
      "Polycystic kidney disease",
      "Cystitis"
    ],
    "answer": "B",
    "explanation": "Pyelonephritis results from bacterial infection of the renal pelvis and interstitium. It is characterized by polyuria resulting from failure of the tubules to reabsorb fluid. Compression and obstruction of the tubules by WBCs reduces H2O reabsorption. The finding of WBC casts helps differentiate pyelonephritis from UTI."
  },
  {
    "id": 380,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which type of casts signals the presence of chronic renal failure?",
    "options": [
      "Blood casts",
      "Fine granular casts",
      "Waxy casts",
      "Fatty casts"
    ],
    "answer": "C",
    "explanation": "Waxy casts form from the degeneration of cellular casts. Because the casts must remain lodged in the tubule long enough for the granular protein matrix to waxify, they are associated with chronic and end-stage renal failure. Both waxy and broad casts form in chronic renal failure when there is severe stasis, and they are associated with a poor prognosis."
  },
  {
    "id": 381,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: Urinalysis of a sample from a patient suspected of having a transfusion reaction reveals small, yellow-brown crystals in the microscopic examination. Dry reagent strip tests are normal with the exception of a positive blood reaction (moderate) and trace positive protein. The pH of urine is 6.5. What test should be performed to positively identify the crystals?",
    "options": [
      "Confirmatory test for bilirubin",
      "Cyanide–nitroprusside test",
      "Polarizing microscopy",
      "Prussian blue stain"
    ],
    "answer": "D",
    "explanation": "A positive blood test result and trace protein occurring with a normal test for urobilinogen and an absence of RBCs are consistent with an intravascular transfusion reaction. Small, yellow-brown granular crystals at an acid pH may be uric acid, bilirubin, or hemosiderin. Bilirubin crystals are ruled out by the negative result on the dry reagent strip test for bilirubin. Potassium ferrocyanide is used in the Prussian blue staining reaction to detect hemosiderin deposits in urinary sediment. Hemosiderin is associated with hemochromatosis and increased RBC destruction. Causes of urinary hemosiderin include transfusion reaction, intravascular hemolytic anemia, and pernicious anemia."
  },
  {
    "id": 382,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "When examining urinary sediment, which of the following is considered an abnormal finding?",
    "options": [
      "2 RBCs/HPF",
      "1 hyaline cast per low-power field (LPF)",
      "1 renal cell cast per LPF",
      "5 WBCs/HPF"
    ],
    "answer": "C",
    "explanation": "Epithelial casts are rarely seen but indicate a disease process affecting the renal tubules. They are associated with diseases causing necrosis of the tubules, such as hepatitis, CMV and other viral infections, and mercury and ethylene glycol toxicity. Even occasional cellular casts are considered clinically significant."
  },
  {
    "id": 383,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A urine sample with a pH of 6.0 produces an abundance of pink sediment after centrifugation that appears as densely packed yellow- to reddish-brown granules under the microscope. The crystals are so dense that no other formed elements can be evaluated. What is the best course of action?",
    "options": [
      "Request a new urine specimen",
      "Suspend the sediment in prewarmed saline, and then repeat centrifugation",
      "Acidify a 12-mL aliquot with three drops of glacial acetic acid, and heat to 56°C for 5 minutes before centrifuging",
      "Add five drops of 1N HCl to the sediment and examine"
    ],
    "answer": "B",
    "explanation": "Urates are yellow-brown or reddish-brown granules and form in acid or neutral urine. They often form following refrigeration of urine and can be dissolved by addition of warm saline or dilute NaOH. Amorphous phosphates are colorless and form in neutral or alkaline urine. They dissolve in dilute acetic acid but precipitate if heated."
  },
  {
    "id": 384,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "How can hexagonal uric acid crystals be distinguished from cystine crystals?",
    "options": [
      "Cystine is insoluble in hydrochloric acid, but uric acid is soluble",
      "Cystine gives a positive nitroprusside test after reduction with sodium cyanide",
      "Cystine crystals are more highly pigmented",
      "Cystine crystals form at neutral or alkaline pH, uric acid forms at neutral to acidic pH"
    ],
    "answer": "B",
    "explanation": "Flat, six-sided uric acid crystals may be mistaken for cystine crystals. Both crystals form at an acid to neutral pH. Cystine crystals are colorless, whereas uric acid crystals are pigmented (yellow, reddish brown). Cystine transmits polarized light and is soluble in dilute HCl. Uric acid is insoluble in HCl and is less anisotropic. Cystine is reduced by sodium cyanide, forming cysteine. The -SH group of cysteine reacts with nitroprusside to form a red color."
  },
  {
    "id": 385,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The presence of tyrosine and leucine crystals together in urinary sediment usually indicates:",
    "options": [
      "Renal failure",
      "Chronic liver disease",
      "Hemolytic anemia",
      "Hartnup disease"
    ],
    "answer": "B",
    "explanation": "Tyrosine crystals may occur in tyrosinemia, an inborn error of tyrosine metabolism caused by a deficiency of fumarylacetoacetate hydrolase, p-hydroxyphenylpyruvic acid oxidase, or tyrosine aminotransferase (causes of tyrosinuria). However, when seen along with leucine crystals, the cause is chronic liver disease, usually cirrhosis of the liver. Tyrosine usually forms fine brown or yellow needles, and leucine forms yellow spheres with concentric rings."
  },
  {
    "id": 386,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following crystals is considered nonpathological?",
    "options": [
      "Hemosiderin",
      "Bilirubin",
      "Ammonium biurate",
      "Cholesterol"
    ],
    "answer": "C",
    "explanation": "Abnormal crystals are those that result from a pathological process. Hemosiderin crystals result from intravascular RBC destruction. Bilirubin crystals are found in severe necrotic and obstructive liver diseases, and cholesterol crystals in nephrotic syndrome, diabetes mellitus, and hypercholesterolemia."
  },
  {
    "id": 387,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "At which pH are ammonium biurate crystals usually found in urine?",
    "options": [
      "Acid urine only",
      "Acid or neutral urine",
      "Neutral or alkaline urine",
      "Alkaline urine only"
    ],
    "answer": "D",
    "explanation": "Ammonium biurate is often called a “thornapple” crystal because it forms a dark brown spiny sphere. Calcium carbonate (CaCO3) is another common crystal that is seen only in alkaline urine. Sodium urate and uric acid form in acid or neutral urine."
  },
  {
    "id": 388,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following crystals is seen commonly in alkaline and neutral urine?",
    "options": [
      "Calcium oxalate",
      "Uric acid",
      "Magnesium ammonium phosphate",
      "Cholesterol"
    ],
    "answer": "C",
    "explanation": "Magnesium ammonium phosphate, also called triple phosphate, may be present in neutral or alkaline urine. Most commonly, triple phosphate crystals are six-sided plates that resemble a coffin lid. Crystals containing phosphates do not occur in acid urine."
  },
  {
    "id": 389,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which crystal appears in urine as a long, thin hexagonal plate and is linked to ingestion of large amounts of benzoic acid?",
    "options": [
      "Cystine",
      "Hippuric acid",
      "Oxalic acid",
      "Uric acid"
    ],
    "answer": "B",
    "explanation": "Hippuric acid forms long, colorless, flat, six-sided plates. It results from the metabolism of benzoic acid and resembles the “coffin lid” appearance of triple phosphate. It may occur normally as a result of ingestion of vegetables preserved with benzoic acid."
  },
  {
    "id": 390,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Small, yellow needles are seen in the sediment of a urine sample with a pH of 6.0. Which of the following crystals can be ruled out?",
    "options": [
      "Sulfa crystals",
      "Bilirubin crystals",
      "Uric acid crystals",
      "Cholesterol crystals"
    ],
    "answer": "D",
    "explanation": "Cholesterol crystals are colorless rectangular plates that often have a notched corner and appear stacked in a stair-step arrangement. Cholesterol crystals are highly anisotropic and can be positively identified by using a polarizing microscope. Bilirubin, sulfa, or uric acid crystals may occur as small yellow or yellow-brown needles or rods in neutral or acid urine. Bilirubin crystals should be suspected when the dry reagent strip test for bilirubin yields a positive result and cells in the sediment are dark yellow (bile stained). Sulfa crystals are soluble in acetone, concentrated HCl, and NaOH."
  },
  {
    "id": 391,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Oval fat bodies are derived from:",
    "options": [
      "Renal tubular epithelium",
      "Transitional epithelium",
      "Degenerated WBCs",
      "Mucoprotein matrix"
    ],
    "answer": "A",
    "explanation": "Oval fat bodies form from degenerated renal epithelial cells that have reabsorbed cholesterol from the filtrate. They stain with Oil Red O or Sudan III. The fat globules within the cells give a Maltese cross effect when examined under polarized light."
  },
  {
    "id": 392,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Oval fat bodies are often associated with:",
    "options": [
      "Lipoid nephrosis",
      "Acute glomerulonephritis",
      "Aminoaciduria",
      "Pyelonephritis"
    ],
    "answer": "A",
    "explanation": "The term lipoid nephrosis is a synonym for idiopathic (primary) nephrotic syndrome. Like other forms of nephrotic syndrome, it is associated with gross proteinuria, edema, and hyperlipidemia; however, the idiopathic form is also associated with hematuria. It is common in children and is often associated with mutations that affect podocyte structure."
  },
  {
    "id": 393,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Urine of constant SG ranging from 1.008 to 1.010 most likely indicates:",
    "options": [
      "Addison disease",
      "Renal tubular failure",
      "Prerenal failure",
      "Diabetes insipidus"
    ],
    "answer": "B",
    "explanation": "The SG of the filtrate in the Bowman space is approximately 1.010. Urine produced consistently with a SG of 1.010 has the same osmolality of the plasma and results from failure of the tubules to modify the filtrate."
  },
  {
    "id": 394,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following characterizes prerenal failure, and helps to differentiate it from acute renal failure caused by renal disease?",
    "options": [
      "BUN:creatinine ratio of 20:1 or higher",
      "Urine:plasma osmolal ratio less than 2:1",
      "Excess loss of sodium in urine",
      "Dehydration"
    ],
    "answer": "A",
    "explanation": "Prerenal failure is caused by deficient renal blood flow. The tubules are undamaged and will reabsorb more BUN than normal because filtrate flow is slow. Under the influence of aldosterone, they reabsorb sodium and concentrate the urine. The BUN:creatinine ratio and the U:P osmolal ratio are very high, and sodium output is low. In renal disease, the BUN:creatinine ratio is 10 or less, the U:P osmolal ratio approaches 1.0, and the daily sodium excretion is high."
  },
  {
    "id": 395,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions characterizes chronic glomerulonephritis and helps differentiate it from acute glomerulonephritis?",
    "options": [
      "Hematuria",
      "Polyuria",
      "Hypertension",
      "Azotemia"
    ],
    "answer": "B",
    "explanation": "Acute glomerulonephritis results in severe compression of the glomerular vessels. This reduces filtration, causing a progression from oliguria to anuria. In contrast, polyuria is associated with chronic glomerulonephritis, which causes scarring of the collecting tubules. Both acute and chronic glomerulonephritis cause low urine osmolality, azotemia, acidosis, hypertension, proteinuria, and hematuria."
  },
  {
    "id": 396,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is seen in acute renal failure and helps differentiate it from prerenal failure?",
    "options": [
      "Hyperkalemia and uremia",
      "Oliguria and edema",
      "Low creatinine clearance",
      "Abnormal urinary sediment"
    ],
    "answer": "D",
    "explanation": "Reduced glomerular filtration as evidenced by low creatinine clearance characterizes both prerenal failure and acute renal failure. This results in retention of fluid, causing edema, reduced urine volume, hypertension, uremia, and hyperkalemia in both prerenal failure and acute renal failure. The kidneys are not damaged in prerenal failure, and therefore, the microscopic examination is usually normal."
  },
  {
    "id": 397,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions characterizes acute renal failure and helps differentiate it from chronic renal failure?",
    "options": [
      "Hyperkalemia",
      "Hematuria",
      "Cylindruria",
      "Proteinuria"
    ],
    "answer": "A",
    "explanation": "In acute renal failure, reduced glomerular filtration coupled with decreased tubular secretion results in hyperkalemia. In chronic renal failure, scarring of the collecting tubules prevents salt and H2O reabsorption. This can result in normal or low serum potassium despite reduced glomerular filtration. The sediment in chronic renal failure is characterized by intermittent heavy hematuria and proteinuria."
  },
  {
    "id": 398,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The serum concentration of which analyte is likely to be decreased in untreated cases of acute renal failure?",
    "options": [
      "Hydrogen ions",
      "Inorganic phosphorus",
      "Calcium",
      "Uric acid"
    ],
    "answer": "C",
    "explanation": "Decreased glomerular filtration in renal failure results in high serum creatinine, BUN, and uric acid. Failure of the tubules results in retention of hydrogen ions and phosphates, causing acidosis and an increased anion gap. The tubules fail to respond to parathyroid hormone, resulting in excessive loss of calcium in urine. Serum sodium is usually normal or slightly increased, whereas hyperkalemia is a constant finding in acute renal failure."
  },
  {
    "id": 399,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is associated with the greatest proteinuria?",
    "options": [
      "Acute glomerulonephritis",
      "Chronic glomerulonephritis",
      "Nephrotic syndrome",
      "Acute pyelonephritis"
    ],
    "answer": "C",
    "explanation": "Although all four conditions are associated with proteinuria, it is greatest in nephrotic syndrome. Urinary albumin loss is typically in excess of 4 g/day or 3 mg/mg creatinine, causing dry reagent strip protein tests to give 3+ to 4+ reactions. In contrast to glomerulonephritis and pyelonephritis, urinary sediment in nephrotic syndrome in adults is not usually characterized by either hematuria or pyuria. Various casts, lipid laden renal epithelial cells, and oval fat bodies are usually found."
  },
  {
    "id": 400,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is often a cause of glomerulonephritis?",
    "options": [
      "Hypertension",
      "CMV infection",
      "Systemic lupus erythematosus (SLE)",
      "Heavy metal poisoning"
    ],
    "answer": "C",
    "explanation": "Autoimmune diseases, diabetes mellitus, and nephrotoxic drugs are common causes of acute glomerulonephritis. Autoimmune damage may result from the deposition of antigen–antibody complexes and complement-mediated damage, as occurs in poststreptococcal glomerulonephritis, or from the production of autoantibodies that attack the basement membrane as in Goodpasture syndrome. Acute glomerulonephritis is often classified by the pattern of injury rather than by the cause. For example, insulin deficiency produces sclerotic vascular damage to the glomeruli, often resulting in crescentic glomerulonephritis. Group A Streptococcus and SLE result in immunologically mediated damage to the glomeruli usually causing membranous or membranoproliferative glomerulonephritis. CMV infections and heavy metal poisoning cause damage to the tubules, resulting in nephrosis."
  },
  {
    "id": 401,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Acute pyelonephritis is commonly caused by:",
    "options": [
      "Bacterial infection of medullary interstitium",
      "Circulatory failure",
      "Renal calculi",
      "Antigen–antibody reactions within the glomeruli"
    ],
    "answer": "A",
    "explanation": "Acute pyelonephritis is caused by infection of the medullary interstitium, usually by coliforms that enter from the lower urinary tract. Escherichia coli is the most commonly implicated bacterium. Because it is focused in the medulla, the disease involves mainly the tubules. As opposed to acute glomerulonephritis, pyelonephritis is not associated with reduced creatinine clearance, azotemia, or oliguria. Reabsorption of salt and water are blocked, resulting in hyperkalemia, acidosis, and polyuria."
  },
  {
    "id": 402,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is associated with nephrotic syndrome?",
    "options": [
      "Hyperlipidemia",
      "Uremia",
      "Hematuria and pyuria",
      "Dehydration"
    ],
    "answer": "A",
    "explanation": "Although casts may be present, the urinary sediment in nephrotic syndrome in adults is not characterized by RBCs and WBCs or by RBC, blood, and WBC casts. In nephrotic syndrome, unlike renal failure (nephritic syndrome), the creatinine clearance and serum potassium are usually normal. Nephrotic syndrome can be secondary to other renal diseases, infections, and drug treatment. In such cases, it is often transient. When it follows the anuric phase of acute glomerulonephritis, it signals a reversal in the course of the disease."
  },
  {
    "id": 403,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is a characteristic finding in patients with obstructive renal disease?",
    "options": [
      "Polyuria",
      "Azotemia",
      "Dehydration",
      "Alkalosis"
    ],
    "answer": "B",
    "explanation": "Obstructive renal disease may result from renal or urinary tract calculi, benign prostatic hypertrophy, chronic urinary tract infection, or urogenital malignancy. Obstruction causes the hydrostatic pressure in the Bowman space to increase. This pressure opposes glomerular filtration. If the hydrostatic pressure in the Bowman space equals the hydrostatic pressure in the glomeruli, then filtration will not occur, resulting in anuria. Postrenal failure produces many of the same serum abnormalities as acute renal failure, including hyperkalemia, acidosis, edema, and azotemia. Urinary sediment will often be abnormal, as well. Bacteriuria and pyuria are common, and hematuria may result from rupture of the vasa recta or other blood vessels."
  },
  {
    "id": 404,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Whewellite and weddellite kidney stones are composed of:",
    "options": [
      "Magnesium ammonium phosphate",
      "Calcium oxalate",
      "Calcium phosphate",
      "Calcium carbonate"
    ],
    "answer": "B",
    "explanation": "Over three-fourths of urinary tract stones are composed of calcium salts, and hyperparathyroidism is commonly associated with calcium stones. Stones composed of magnesium ammonium phosphate are called struvite and lodge in the renal pelvis, causing a characteristic “staghorn” appearance on radiographic examination. Stones mainly composed of calcium phosphate are called hydroxyapatite or bushite, depending on the calcium composition. Stones of CaCO3 are called carbonate apatite."
  },
  {
    "id": 405,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following abnormal crystals is often associated with formation of renal calculi?",
    "options": [
      "Cystine",
      "Ampicillin",
      "Tyrosine",
      "Leucine"
    ],
    "answer": "A",
    "explanation": "Cystinuria is caused by an autosomal recessive defect in the tubular reabsorption of dibasic amino acids (a renal-type aminoaciduria). Cystine crystals are highly insoluble and form kidney stones. Tyrosine crystals form fine dark sheaves or needles and may result from liver disease or tyrosinosis, an overflow aminoaciduria. Leucine crystals form yellow spheres with concentric rings and are seen in chronic liver disease. Ampicillin (rarely) forms long colorless prisms in sheaves in some patients being treated with high doses."
  },
  {
    "id": 406,
    "section": "Urine Microscopy and Clinical Correlations",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement about renal calculi is true?",
    "options": [
      "Calcium oxalate and calcium phosphate account for about three-fourths of all stones",
      "Uric acid stones can be seen on radiography",
      "Triple phosphate stones are found principally in the ureters",
      "Stones are usually composed of single salts"
    ],
    "answer": "A",
    "explanation": "Three-fourths of all stones contain calcium, and three-fourths of these contain"
  },
  {
    "id": 407,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Cerebrospinal fluid (CSF) is formed by ultrafiltration of plasma through the:",
    "options": [
      "Choroid plexus",
      "Sagittal sinus",
      "Anterior cerebral lymphatics",
      "Arachnoid membrane"
    ],
    "answer": "A",
    "explanation": "CSF is formed by ultrafiltration of plasma through the choroid plexus, a tuft of capillaries in the pia mater located in the third and fourth ventricles. Endothelia of the choroid plexus vessels and ependymal cells lining the ventricles act as a barrier to the passage of proteins, drugs, and metabolites. Glucose in CSF is about 60% of the plasma glucose. Total protein in CSF is only 15 to 45 mg/dL, while chloride levels are 10% to 15% higher than plasma. Approximately 500 mL of ultrafiltrate is produced per day, the bulk of which is returned to the circulation via the sagittal sinus. The normal volume of CSF in adults is 100 to 160 mL (10–60 mL for small children)."
  },
  {
    "id": 408,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding CSF is true?",
    "options": [
      "Normal values for mononuclear cells are higher for infants than for adults",
      "Absolute neutrophilia is not significant if the total WBC count is less than 25/µL",
      "The first aliquot of CSF should be sent to the microbiology laboratory",
      "Neutrophils compose the majority of WBCs in normal CSF"
    ],
    "answer": "A",
    "explanation": "Lymphocytes account for 40% to 80% of WBCs in adults; monocytes and macrophages for 20% to 50%. Neutrophils should be less than 10% of the WBCs. The reference range for WBCs in adults is 0 to 5/µL. A majority of PMNs can be significant even if the WBC count is normal. In infants, monocytes account for 50% to 90% of WBCs, and the upper limit for WBCs is 30/µL. The first aliquot is sent to the chemistry department because it may be contaminated with blood or skin flora."
  },
  {
    "id": 409,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "When collecting CSF, a difference between opening and closing fluid pressure greater than 100 mm H2O indicates:",
    "options": [
      "Low CSF volume",
      "Subarachnoid hemorrhage",
      "Meningitis",
      "Hydrocephalus"
    ],
    "answer": "A",
    "explanation": "Normal CSF volume in adults is 100 to 160 mL. When volume is low, an abnormally high difference is observed between the opening and closing pressure. The difference is normally 10 to 30 mm H20, after removal of 15 to 20 mL. Low opening pressure is caused by reduced volume or block above the puncture site. High opening pressure may result from high CSF volume, CNS hemorrhage, or malignancy."
  },
  {
    "id": 410,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following findings is consistent with a subarachnoid hemorrhage rather than a traumatic tap?",
    "options": [
      "Clearing of the fluid as it is aspirated",
      "A clear supernatant after centrifugation",
      "Xanthochromia",
      "Presence of a protein in the sample"
    ],
    "answer": "C",
    "explanation": "Xanthochromia is pigmentation of CSF caused by subarachnoid hemorrhage, high CSF protein, free hemoglobin, or bilirubin. The bilirubin may be caused by hepatic disease, CNS hemorrhage, or prior traumatic tap. In subarachnoid hemorrhage, the fluid will be pink if the RBC count is greater than 500/µL It will turn orange as RBCs lyse in the first few hours and then will turn yellow after about 12 hours. Granulocyte infiltration occurs immediately after a subarachnoid hemorrhage and disappears after 24 hours. It is followed by an increase in macrophages, showing evidence of erythrophagocytosis that remains for up to 2 weeks. After subarachnoid hemorrhage, D-dimer is present in CSF and can be used to distinguish between a traumatic tap and subarachnoid hemorrhage."
  },
  {
    "id": 411,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The term used to denote a high WBC count in the CSF is:",
    "options": [
      "Empyema",
      "Neutrophilia",
      "Pleocytosis",
      "Hyperglycorrhachia"
    ],
    "answer": "C",
    "explanation": "Pleocytosis refers to an increase in WBCs within CSF. Bacterial meningitis causes a neutrophilic pleocytosis, viral meningitis a lymphocytic pleocytosis, and tuberculous and fungal meningitis a mixed-cell pleocytosis. Other causes of pleocytosis include multiple sclerosis (MS), cerebral hemorrhage or infarction, and leukemia."
  },
  {
    "id": 412,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the adult CSF values in the table below are consistent with bacterial meningitis? WBCs Lymphocytes Monocytes Eosinophils Neutrophils Neuroectodermal Cells",
    "options": [
      "50/μL 44% 55% 0% 0% 1%",
      "300/μL 75% 21% 3% 0% 1%",
      "2,000/ 5% 15% 0% 80% 0% μL",
      "2,500/ 40% 50% 0% 10% 0% μL"
    ],
    "answer": "C",
    "explanation": "Normal WBC counts for CSF are 0 to 5/µL for adults and 0 to 30/µL for children. Neutrophils predominate the differential in bacterial meningitis, whereas lymphocytes predominate in viral meningitis. Hemorrhage and traumatic tap will also cause increased PMNs, and WBC counts should be corrected using the CSF RBC count."
  },
  {
    "id": 413,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following data, determine the corrected CSF WBC count. CSF Values Peripheral Blood Values RBCs 6,000/μL 4.0 × 106/μL WBCs 150/μL 5.0 × 103/μL",
    "options": [
      "8/µL",
      "142/µL",
      "120/µL",
      "145/µL"
    ],
    "answer": "B",
    "explanation": "Corrected WBC count = WBCs in CSF – [(Blood WBCs × CSF RBCs) ÷ Blood RBCs] Corrected WBC count = 150/µL – [(5,000/µL WBCs × 6,000/µL RBCs) ÷ 4,000,000/µL RBCs] Corrected WBC count = 150/µL – 7.5/µL Corrected WBC count = 142/µL"
  },
  {
    "id": 414,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: What is the most likely cause of the following CSF results? CSF glucose 20 mg/dL; CSF protein 200 mg/dL; CSF lactate 50 mg/dL (reference range 5–25 mg/dL)",
    "options": [
      "Viral meningitis",
      "Viral encephalitis",
      "Cryptococcal meningitis",
      "Acute bacterial meningitis"
    ],
    "answer": "D",
    "explanation": "Acute bacterial meningitis causes increased production of immunoglobulin (Ig) in CSF. Glucose levels are below normal (less than 40 mg/dL) as a result of consumption by PMNs and bacteria. Lactate levels rise because of increased pressure and hypoxia (greater than 35 mg/dL being correlated with bacterial meningitis). When associated with increased PMNs and lactate dehydrogenase (LD), these findings point to bacterial meningitis."
  },
  {
    "id": 415,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is most often associated with normal CSF glucose and protein?",
    "options": [
      "Multiple sclerosis",
      "Malignancy",
      "Subarachnoid hemorrhage",
      "Viral meningitis"
    ],
    "answer": "D",
    "explanation": "In viral (aseptic) meningitis, the CSF glucose is usually above 40 mg/dL and the total protein is normal or slightly increased. Some types of viral meningitis can cause low glucose and high protein levels, making the differentiation of bacterial and viral meningitis difficult. In such cases, an elevated CSF C-reactive protein (CRP) and procalcitonin (PCT) strongly support the diagnosis of bacterial meningitis. PCT is increased in response to inflammation. Like lactate and CRP, it is useful for diagnosis of septic shock and following the response to antibiotic therapy. Low CSF glucose and elevated total protein are also seen in malignancy and subarachnoid hemorrhage and in some persons with MS. Low glucose in malignancy and MS results from increased utilization. Glucose is reduced in subarachnoid hemorrhage as a result of release of glycolytic enzymes from the RBCs. All three conditions result in high CSF protein, but MS is associated with an increased IgG index owing to local production of IgG."
  },
  {
    "id": 416,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The diagnosis of MS is suggested by which finding?",
    "options": [
      "The presence of elevated protein and low glucose",
      "A decreased IgG index",
      "The presence of oligoclonal bands by electrophoresis",
      "An increased level of CSF β-microglobulin"
    ],
    "answer": "C",
    "explanation": "The total CSF protein is increased in less than half of persons with MS. The IgG index is increased in 80% or more of MS cases. Although the IgG index is sensitive, it is increased in many other disorders. The presence of oligoclonal banding (two or more discrete bands in the gamma zone following electrophoresis) is seen in 90% of persons with MS, and in few other diseases. Although not entirely definitive, it is the single most effective laboratory test for the diagnosis of MS. When performing CSF electrophoresis, the serum pattern must be compared with the CSF pattern. At least some of the oligoclonal bands must not be found in the serum pattern for the test result to be considered positive. β2-Microglobulins are increased in CSF in inflammatory diseases (especially malignant diseases)."
  },
  {
    "id": 417,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following results is consistent with fungal meningitis?",
    "options": [
      "Normal CSF glucose",
      "Pleocytosis of mixed cellularity",
      "Normal CSF protein",
      "High CSF lactate"
    ],
    "answer": "B",
    "explanation": "In fungal meningitis, the glucose is low and the total protein elevated; however, unlike bacterial meningitis, the lactate is usually below 35 mg/dL. Fungal meningitis usually produces a pleocytosis of mixed cellularity consisting of lymphocytes, PMNs, monocytes, and eosinophils. In some cases, lymphocytes predominate, whereas in others, PMNs comprise the majority of WBCs."
  },
  {
    "id": 418,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In what suspected condition should a wet prep using a warm slide be examined?",
    "options": [
      "Cryptococcal meningitis",
      "Amoebic meningoencephalitis",
      "Mycobacterium tuberculosis infection",
      "Neurosyphilis"
    ],
    "answer": "B",
    "explanation": "Amoeba in CSF appear very similar to monocytes in stained films but can be differentiated by their characteristic pseudopod mobility in a wet prep on a prewarmed slide. Naegleria fowleri and Acanthamoeba spp. are causative agents of primary amoebic meningoencephalitis."
  },
  {
    "id": 419,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following CSF test results is most commonly increased in patients with MS?",
    "options": [
      "Glutamine",
      "Lactate",
      "IgG index",
      "Ammonia"
    ],
    "answer": "C",
    "explanation": "IgG Index = An IgG–albumin index is the ratio of CSF IgG:serum IgG divided by the CSF albumin:serum albumin ratio. Values greater than 0.85 indicate CSF IgG production, as seen in MS; or increased CSF production combined with increased permeability, as seen in CNS infections. MS is characterized by the presence of oligoclonal banding in the CSF in greater than 90% of patients with active disease. The total protein and myelin basic protein are often increased, and glucose is decreased. Reye syndrome results in hepatic failure, causing high CSF levels of ammonia and glutamine. CSF lactate is usually normal in patients with MS."
  },
  {
    "id": 420,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is an inappropriate procedure for performing routine CSF analysis?",
    "options": [
      "A differential is done only if the total WBC count is greater than 10/µL",
      "A differential should be done on a stained CSF concentrate",
      "A minimum of 30 WBCs should be differentiated",
      "A Wright-stained slide should be examined, rather than a chamber differential"
    ],
    "answer": "A",
    "explanation": "A relative (percent) increase in PMNs may be significant even when the WBC count does not exceed the upper limit of normal. For this reason, a WBC differential using a concentrated CSF sample is always performed on neonates and when the WBC count is greater than 5/µL. Cytocentrifugation should be used to concentrate the cells followed by staining with the Wright stain."
  },
  {
    "id": 421,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which cell is present in CSF in greater numbers in newborns than in older children or adults?",
    "options": [
      "Eosinophils",
      "Lymphocytes",
      "Monocytes",
      "Neutrophils"
    ],
    "answer": "C",
    "explanation": "In newborns, the URL for WBCs is 30/µL (URL for adults is 5/µL) with the majority of WBCs being monocytes or macrophages. In normal neonates, monocytes (including macrophages and histiocytes) account for about 75% of the WBCs, lymphocytes for about 20%, and PMNs for about 3%. In normal adults, lymphocytes account for about 60% of the WBCs, monocytes for about 35%, and PMNs for about 2%."
  },
  {
    "id": 422,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Neutrophilic pleocytosis is usually associated with all of the following except:",
    "options": [
      "Cerebral infarction",
      "Malignancy",
      "Myelography",
      "Neurosyphilis"
    ],
    "answer": "D",
    "explanation": "Neutrophils may appear in CSF as a result of many causes, making it necessary to correlate results of biochemical assays with hematologic findings. Low glucose and high protein levels occur in both malignancy and bacterial meningitis. Tumor markers and lactate may be helpful in distinguishing malignancy from bacterial meningitis. In neurosyphilis, there is usually an absolute lymphocytosis and increased total protein and IgG index."
  },
  {
    "id": 423,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement about CSF protein is true?",
    "options": [
      "An abnormal serum protein electrophoretic pattern does not affect the CSF pattern",
      "The upper reference limit (URL) for CSF total protein in newborns is one half the adult level",
      "CSF IgG is increased in panencephalitis, malignancy, and neurosyphilis",
      "Antibodies to Treponema pallidum disappear after successful antibiotic therapy"
    ],
    "answer": "C",
    "explanation": "Although the blood–brain barrier excludes most plasma proteins, abnormal serum proteins can cause parallel CSF electrophoretic patterns. Therefore, an abnormal CSF pattern indicates CNS disease only if not duplicated by the serum pattern. Normal CSF total protein in newborns may be up to two times higher than adult levels. Antibodies to T. pallidum remain in CSF after treatment, but nontreponemal antibodies disappear. Although the T. pallidum particle agglutination (TP-PA) test for specific antibodies is more sensitive, the Venereal Disease Research Laboratory (VDRL) test is often performed concurrently. A positive result for both tests is diagnostic of active tertiary syphilis."
  },
  {
    "id": 424,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding routine microbiological examination of CSF is true?",
    "options": [
      "A Gram stain is performed on the CSF prior to concentration",
      "The Gram stain is positive in fewer than 40% of cases of acute bacterial meningitis",
      "India ink and acid fast stains are indicated if neutrophilic pleocytosis is present",
      "All CSF specimens should be cultured using sheep blood agar, chocolate agar, and supplemented broth"
    ],
    "answer": "D",
    "explanation": "A culture should be performed on the sediment of the third aliquot of CSF after it is centrifuged. Blood and chocolate agar and anaerobic broth should always be used, and, if sterile, held for a minimum of 3 days. Blood cultures should be done because septicemia occurs in about one half of bacterial meningitis cases. Gram staining is always performed by using the sediment of the CSF because it is positive in more than 70% of acute bacterial meningitis cases. India ink, acid-fast, and wet preparations may be ordered if an absolute monocytosis is present."
  },
  {
    "id": 425,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which organism is the most frequent cause of bacterial meningitis in neonates?",
    "options": [
      "Neisseria meningitidis",
      "Group B Streptococcus",
      "Haemophilus influenzae",
      "Klebsiella pneumoniae"
    ],
    "answer": "B",
    "explanation": "Group B Streptococcus and E. coli are the two most common isolates in neonates. H. influenzae, S. pneumoniae, and N. meningitidis are the most common isolates in children. S. pneumoniae is the most frequent isolate in older adults."
  },
  {
    "id": 426,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Following a head injury, which protein will identify the presence of CSF leakage through the nose?",
    "options": [
      "Transthyretin",
      "Myelin basic protein",
      "Tau protein",
      "C-reactive protein"
    ],
    "answer": "C",
    "explanation": "In cases of trauma, it may be necessary to differentiate rhinorrhea from CSF leakage, and this can be done by immunofixation electrophoresis to identify the tau protein found in CSF, but not in serum. Tau protein is an enzymatically modified form of transferrin that migrates in the slow beta zone just behind unmodified transferrin. Transthyretin or prealbumin is present in far greater concentration in CSF than in blood but may not be seen if CSF is diluted with nasal fluid. Myelin basic protein is a component of nerve sheaths and is present in CSF in about 60% of persons with MS. It is also found in persons with other demyelinating diseases, SLE, stroke, and brain injury. CRP is elevated in the CSF of approximately two thirds of persons with bacterial meningitis."
  },
  {
    "id": 427,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding serous fluids is true?",
    "options": [
      "The normal volume of pleural fluid is 30 to 50 mL",
      "Mesothelial cells, PMNs, lymphocytes, and macrophages may be present in normal fluids",
      "Radiography can detect a 10% increase in the volume of a serous fluid",
      "Normal serous fluids are colorless"
    ],
    "answer": "B",
    "explanation": "Serous fluids include pleural, pericardial, and peritoneal fluids. They form from ultrafiltration of plasma through serous membranes. These are lined with specialized epithelium called mesothelium. They comprise about 5% of the cells in serous fluid and may be difficult to differentiate from malignant cells. Pleural fluid volume is normally less than 10 mL. The volume of pericardial fluid is normally 10 to 50 mL and peritoneal fluid 30 to 50 mL. Radiography can detect an increase in serous fluids of 300 mL or more. Normal serous fluids are clear and range in color from straw to light yellow."
  },
  {
    "id": 428,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "The term effusion refers to:",
    "options": [
      "A chest fluid that is purulent",
      "A serous fluid that is chylous",
      "An increased volume of serous fluid",
      "An inflammatory process affecting the appearance of a serous fluid"
    ],
    "answer": "C",
    "explanation": "Effusions are classified as either transudates, exudates, or chylous. Transudates result from abnormal hemodynamics (e.g., congestive heart failure, liver disease), and exudates and chylous fluids from local disease. Pleural fluid that is purulent is called empyemic fluid. Such fluid has a WBC count of 10,000/µL or greater."
  },
  {
    "id": 429,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following laboratory results is characteristic of a transudative fluid?",
    "options": [
      "SG = 1.018",
      "Total protein = 3.2 g/dL",
      "LD fluid/serum ratio = 0.25",
      "Total protein fluid:serum ratio = 0.65"
    ],
    "answer": "C",
    "explanation": "Transudative fluids are distinguished from exudative fluids by the physical appearance, cellularity, SG, total protein, LD, cholesterol, and bilirubin. Exudative fluids have a fluid:serum LD ratio greater than 0.6 caused by release of the enzyme from inflammatory or malignant cells. Exudative fluids have a total protein greater than 3.0 g/dL, SG greater than 1.015, fluid:serum total protein ratio greater than 0.6, cholesterol greater than 60 mg/dL (fluid:serum ratio greater than0.3) and fluid:serum bilirubin ratio greater than 0.6. Exudates are caused by infection, infarction, malignancy, rheumatoid diseases, and trauma."
  },
  {
    "id": 430,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which observation is least useful in distinguishing a hemorrhagic serous fluid from a traumatic tap?",
    "options": [
      "Clearing of fluid as it is aspirated",
      "Presence of xanthochromia",
      "The formation of a clot",
      "Diminished RBC count in successive aliquots"
    ],
    "answer": "C",
    "explanation": "Xanthochromia indicates either an exudative process or prior traumatic tap. Hemorrhagic pleural fluids usually have RBC counts greater than 100,000/µL and are usually caused by lung neoplasms. Clearing of fluid or diminished RBC counts in successive tubes favors a diagnosis of a traumatic tap. A clot may form in a hemorrhagic fluid or following a traumatic tap. However, a transudative fluid will not clot."
  },
  {
    "id": 431,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following laboratory results on a serous fluid is most likely to be caused by a traumatic tap?",
    "options": [
      "An RBC count of 8,000/µL",
      "A WBC count of 6,000/µL",
      "A hematocrit of 35%",
      "A neutrophil count of 55%"
    ],
    "answer": "A",
    "explanation": "Normal fluids have a WBC count less than 1,000/µL, but counts between 1,000 and 2,500/µL may be seen in both exudates or transudates. All WBC types are present, but no type should account for greater than 50% of the leukocyte count. An RBC count less than 10,000/µL is usually caused by a traumatic tap. A fluid hematocrit similar to blood is caused by a hemothorax. Pleural fluids containing greater than 100,000/µL RBCs are associated most often with malignancies but are also seen in trauma and pulmonary infarction."
  },
  {
    "id": 432,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is commonly associated with an exudative effusion?",
    "options": [
      "Congestive heart failure",
      "Malignancy",
      "Nephrotic syndrome",
      "Cirrhosis"
    ],
    "answer": "B",
    "explanation": "Transudative fluids are caused by circulatory problems, usually decreased oncotic pressure or increased hydrostatic pressure. In contrast, exudative effusions are caused by inflammatory processes and cellular infiltration as seen in malignancy. In addition to an RBC count greater than 100,000/µL, malignancies often involve the lung, colon, breast, or pancreas and often produce carcinoembryonic antigen."
  },
  {
    "id": 433,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is associated with a chylous effusion?",
    "options": [
      "Necrosis",
      "Pulmonary infarction or infection",
      "Systemic lupus erythematosus or rheumatoid arthritis (RA)",
      "Lymphatic obstruction"
    ],
    "answer": "D",
    "explanation": "Malignancy, pulmonary infarction, SLE, and RA are characterized by inflammation, with increases in protein, WBCs, and LD. Exudates can also be caused by tuberculosis, pancreatitis, and lymphoma. Lymphatic obstruction is often associated with lymphoma and other malignancies that block the flow of lymph into the azygous vein. This causes chylous effusions. Chylous effusions are also caused by traumatic injury to the thoracic duct. Necrosis causes a pseudochylous effusion. This resembles a chylous effusion in appearance but has a foul odor. Chylous fluids contain chylomicrons, stain positive for fat globules, show lymphocytosis, and have a triglyceride concentration over twofold higher than plasma (or greater than 110 mg/dL). Pseudochylous effusions are characterized by mixed cellularity and elevated cholesterol."
  },
  {
    "id": 434,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is most often associated with a pleural fluid glucose below 30 mg/dL?",
    "options": [
      "Diabetes mellitus",
      "Pancreatitis",
      "Rheumatoid arthritis",
      "Bacterial pneumonia"
    ],
    "answer": "C",
    "explanation": "Normal pleural fluid has the same glucose concentration as plasma. Hyperglycemia is the only condition that is associated with a high pleural fluid glucose. Low glucose levels (less than 60 mg/dL) may be seen in infection, malignancy, and rheumatic diseases. However, glucose levels are lowest (often below 30 mg/dL) and are a constant finding when rheumatoid disease affects the lungs. Pancreatitis causes an exudative peritoneal and pleural effusion with an elevated peritoneal fluid amylase (without a low glucose)."
  },
  {
    "id": 435,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In which condition is the pleural fluid pH likely to be above 7.3?",
    "options": [
      "Bacterial pneumonia with parapneumonic exudate",
      "Rheumatoid pleuritis",
      "Esophageal rupture",
      "Pneumothorax"
    ],
    "answer": "D",
    "explanation": "The pH of pleural fluid is approximately 7.64, and values below 7.30 are usually associated with a poorer prognosis and usually require drainage. Esophageal rupture produces the lowest pH with values in the range of 6.0 to 6.3. In addition, pleural fluid pH is low in rheumatoid disease involving the lungs and pleura, some malignancies, and SLE. Low pH and glucose in pleural fluid are seen in lung abscesses and exudative bacterial pneumonia (called parapneumonic effusion). Pneumothorax results from air entering the pleural space and does not produce a low pH."
  },
  {
    "id": 436,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following hematology values best frames the URLs for peritoneal fluid? WBC Count Percentage of PMNs RBC Count",
    "options": [
      "300/μL 25% 100,000/μL",
      "10,000/μL 50% 500,000/μL",
      "50,000/μL 50% 500,000/μL",
      "100,000/μL 75% 1,000,000/μL"
    ],
    "answer": "A",
    "explanation": "Peritoneal fluid normally has a WBC count less than 300/µL. Neutrophils should account for no more than 25% of the WBCs. A majority of PMNs indicates bacterial infection of the peritoneum. Lymphocytosis suggests malignancy, tuberculosis, cirrhosis, and lymphatic leakage. Peritoneal fluid amylase is elevated in most cases of acute pancreatitis. Peritonitis is suspected when the fluid LD is greater than 40% of the serum level. In contrast, normal pleural fluid has a WBC count usually less than 1,000/ µL. Exudative pleural fluids usually have a WBC count greater than 10,000/µL, but values tend to overlap noninflammatory fluids. The PMNs should comprise 50% of the WBCs or less, and the RBC count should be less than 100,000/µL. Lesser numbers are usually caused by a traumatic tap."
  },
  {
    "id": 437,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following characteristics is higher for synovial fluid than for the serous fluids?",
    "options": [
      "Specific gravity",
      "Glucose",
      "Total protein",
      "Viscosity"
    ],
    "answer": "D",
    "explanation": "Synovial fluid has approximately the same SG and glucose as plasma and the serous fluids but is far more viscous because of a high content of mucoprotein (hyaluronate) secreted by the synovium. Viscosity is estimated by pulling the fluid from the tip of a syringe or pipet. Normal fluid gives a string longer than 4 cm. Low viscosity indicates inflammation. The total protein of synovial fluid is usually lower than serous fluids, the URL being 2.0 g/dL."
  },
  {
    "id": 438,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In which type of arthritis is the synovial WBC count likely to be greater than 50,000/ µL?",
    "options": [
      "Septic arthritis",
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Hemorrhagic arthritis"
    ],
    "answer": "A",
    "explanation": "The WBC count is elevated in all types of arthritis but is greatest (50,000–100,000/ µL) in septic arthritis. Neutrophils comprise less than 25% of WBCs in normal and noninflammatory arthritis but are greater than 50% in inflammatory and septic arthritis. Fluids are diluted in saline because acetic acid causes a mucin clot to form. WBC counts should be performed within 1 hour of collection because the WBC count will diminish over time."
  },
  {
    "id": 439,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "What type of cell is a “ragocyte”?",
    "options": [
      "Cartilage cell seen in inflammatory arthritis",
      "A PMN with inclusions formed by immune complexes",
      "A plasma cell seen in RA",
      "A macrophage containing large inclusions"
    ],
    "answer": "B",
    "explanation": "Ragocytes are PMNs containing dark granules composed of immunoglobulins, but they may be seen in gout and septic arthritis as well as RA. LE cells may be seen in fluid from patients with SLE. Reiter cells, macrophages with ingested globular inclusions, are seen in Reiter syndrome and other inflammatory diseases."
  },
  {
    "id": 440,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following crystals is the cause of gout?",
    "options": [
      "Uric acid or monosodium urate",
      "Calcium pyrophosphate or apatite",
      "Calcium oxalate",
      "Cholesterol"
    ],
    "answer": "A",
    "explanation": "Although all of the crystals mentioned can cause crystal-induced arthritis, uric acid and sodium urate crystals cause gout and are seen in about 90% of patients with gout."
  },
  {
    "id": 441,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which crystal causes “pseudogout”?",
    "options": [
      "Oxalic acid",
      "Calcium pyrophosphate",
      "Calcium oxalate",
      "Cholesterol"
    ],
    "answer": "B",
    "explanation": "Calcium pyrophosphate crystals occur as needles or small rhombic plates and can be confused with uric acid. They rotate plane polarized light but not as strongly as uric acid. Synovial fluid should never be collected in tubes containing powdered EDTA because it may form crystals that can be mistaken for in vivo crystals. The recommended anticoagulant is sodium heparin, although liquid EDTA may be used."
  },
  {
    "id": 442,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A synovial fluid sample is examined by using a polarizing microscope with a red compensating filter. Crystals are seen that are yellow when the long axis of the crystal is parallel to the slow vibrating light. When the long axis of the crystal is perpendicular to the slow vibrating light, the crystals appear blue. What type of crystal is present?",
    "options": [
      "Calcium oxalate",
      "Calcium pyrophosphate",
      "Uric acid",
      "Cholesterol"
    ],
    "answer": "C",
    "explanation": "Polarized microscopy with a red compensating filter differentiates uric acid from pseudogout crystals. When the long axis of uric acid needles is parallel to the slow vibrating light, the crystals appear yellow. When the long axis is perpendicular to the slow vibrating light, the crystals appear blue. Calcium pyrophosphate gives the reverse effect."
  },
  {
    "id": 443,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In which condition is the synovial fluid glucose most likely to be within normal limits?",
    "options": [
      "Septic arthritis",
      "Inflammatory arthritis",
      "Hemorrhagic arthritis",
      "Gout"
    ],
    "answer": "C",
    "explanation": "Synovial fluid glucose is normally less than 10 mg/dL below serum glucose, and should be collected after an 8-hour fast to ensure that the fluid and plasma are equilibrated. In septic arthritis, the glucose level is often greater than 40 mg/dL below the serum level and about 25 to 40 mg/dL lower in inflammatory arthritis, which includes gout. Osteoarthritis and hemorrhagic arthritis are not usually associated with low joint fluid glucose."
  },
  {
    "id": 444,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement about synovial fluid in RA is true?",
    "options": [
      "Synovial:serum IgG is usually 1:2 or higher",
      "Total hemolytic complement is elevated",
      "Ninety percent of RA cases test positive for rheumatoid factor in synovial fluid",
      "Demonstration of rheumatoid factor in joint fluid is diagnostic for RA"
    ],
    "answer": "A",
    "explanation": "Rheumatoid factor can be present in both serum and synovial fluids from patients with RA, SLE, and other inflammatory diseases. Rheumatoid factor is present in synovial fluid of approximately 60% of patients with RA. Normally, IgG in synovial fluid is about 10% of the serum IgG level. CH50 levels in serum and synovium are more differential. Both are increased in Reiter syndrome but are often low in SLE; synovial CH50 is decreased and serum CH50 is normal (or increased) in RA."
  },
  {
    "id": 445,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following organisms accounts for the majority of septic arthritis cases in young and middle-age adults?",
    "options": [
      "H. influenzae",
      "Neisseria gonorrhoeae",
      "Staphylococcus aureus",
      "Borrelia burgdorferi"
    ],
    "answer": "B",
    "explanation": "Synovial fluid is normally sterile, and all of the organisms listed may cause septic arthritis. N. gonorrhoeae is responsible for about 75% of septic arthritis cases occurring in young and middle-aged adults. Staphylococcus is responsible for the majority of cases involving older adults and is the most frequently found isolate from infected joint replacements. Haemophilus spp., Staphylococcus spp., and Streptococcus spp. are the most common causes of arthritis in young children."
  },
  {
    "id": 446,
    "section": "Cerebrospinal, Serous, and Synovial Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following hematology values best frames the URLs for synovial fluid? WBC Count Percentage of PMNs RBC Count",
    "options": [
      "200/μL 25% 2,000/μL",
      "5,000/μL 50% 10,000/μL",
      "10,000/μL 50% 50,000/μL",
      "20,000/μL 5% 500,000/μL"
    ],
    "answer": "A",
    "explanation": "The WBC count of normal joint fluid is 200/µL or less. Values greater than 5,000/µL"
  },
  {
    "id": 447,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements about amniotic fluid bilirubin measured by scanning spectrophotometry is true?",
    "options": [
      "The 410-nm peak is caused by hemoglobin and the 450-nm peak is caused by bilirubin",
      "Baseline correction is not required because a diode array detector is used",
      "Chloroform extraction is necessary only when meconium is present",
      "In normal amniotic fluid, bilirubin increases with gestational age"
    ],
    "answer": "A",
    "explanation": "Amniotic fluid bilirubin reflects the extent of fetal RBC destruction in cases of HDFN. The fluid is centrifuged and absorbance measured from 350 to 600 nm simultaneously by using a photodiode array detector. Background absorbance is corrected by constructing a baseline using the absorbances at 365 nm and 550 nm. The delta absorbance (∆A) of hemoglobin at 410 nm and of bilirubin at 450 nm is determined by subtracting the absorbance of the baseline from the respective peaks. Samples that are not grossly hemolyzed can be corrected for oxyhemoglobin by subtracting 5% of the ∆A at 410 nm from the ∆A at 450 nm. When hemolysis is severe or meconium is present, bilirubin must be extracted in chloroform before measuring absorbance. Bilirubin normally decreases with increasing gestational age because fetal urine contributes more to amniotic fluid volume as the fetus matures. The bilirubin concentration must be correlated with gestational age to correctly evaluate the severity of HDFN."
  },
  {
    "id": 448,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which test best correlates with the severity of hemolytic disease of the fetus and newborn (HDFN)?",
    "options": [
      "Rh antibody titer of the mother",
      "Lecithin/sphingomyelin (L/S) ratio",
      "Amniotic fluid bilirubin",
      "Urinary estradiol"
    ],
    "answer": "C",
    "explanation": "Amniotic fluid bilirubin is the best index of the severity of HDFN and is measured by diode array spectrophotometry across the 365 to 550 nm range. When hemoglobin produces a positive slope at 410 nm, the bilirubin should be extracted with chloroform prior to scanning. Extraction methods give the best correlation with RBC destruction."
  },
  {
    "id": 449,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which is the reference method for determining fetal lung maturity (FLM)?",
    "options": [
      "Human placental lactogen",
      "L/S ratio",
      "Amniotic fluid bilirubin",
      "Urinary estriol"
    ],
    "answer": "B",
    "explanation": "Respiratory distress syndrome (RDS) develops when surfactants are insufficient to prevent collapse of the infant’s alveoli during expiration. Tests measuring pulmonary phospholipid surfactants are the most specific and sensitive indicators of RDS. An L/S ratio greater than 2:1 (in some laboratories 2.5:1) is the most widely accepted measure of FLM. Most of the surfactants in the amniotic fluid are present in the form of lamellar bodies. These can be counted using an electronic cell counter at the settings for enumerating platelets. Laboratories must correlate the LBC that corresponds to an LS ratio of 2:1. The LBC cutoff will differ depending on the counter."
  },
  {
    "id": 450,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding the L/S ratio is true?",
    "options": [
      "A ratio of 2:1 or greater usually indicates adequate pulmonary surfactant to prevent RDS",
      "A ratio of 1.5:1 indicates fetal lung maturity in pregnancies associated with diabetes mellitus",
      "Sphingomyelin levels increase during the third trimester, causing the L/S ratio to fall slightly during the last 2 weeks of gestation",
      "A phosphatidylglycerol (PG) spot indicates the presence of meconium in the amniotic fluid"
    ],
    "answer": "A",
    "explanation": "Pulmonary surfactants are mainly disaturated lecithins produced by type II granular pneumocytes. The L/S ratio increases toward the end of the third trimester because of increased production of lecithin. The concentration of sphingomyelin remains constant throughout gestation and serves as an internal reference. Meconium contains less lecithin than amniotic fluid and will usually decrease the L/S ratio; however, meconium produces a spot that can be misinterpreted as lecithin, leading to a falsely increased L/S ratio. Sufficient PG to produce a spot is seen only when the L/S ratio is 2:1 or higher. PG is not present in either blood or meconium, and therefore, its presence indicates fetal lung maturity. In diabetes, the fetal lungs may mature more slowly than normal, and infants may develop RDS when the L/S ratio is 2:1 or slightly higher. For this reason, an L/S of 3:1 more closely correlates with fetal lung maturity when testing amniotic fluid from mothers with diabetes. As in all other cases, when the amniotic fluid from a diabetic mother is positive for PG, fetal lung maturity is established."
  },
  {
    "id": 451,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following conditions is most likely to cause a falsely low L/S ratio?",
    "options": [
      "The presence of PG in amniotic fluid",
      "Freezing the specimen for one month at –20°C",
      "Centrifugation at 1,000 × g for 10 minutes",
      "Maternal diabetes mellitus"
    ],
    "answer": "C",
    "explanation": "Pulmonary surfactants are largely present in the form of lamellar bodies and can be lost by centrifuging the amniotic fluid at high g force. Centrifuge speed should be the minimum required to spin down cells (450 g for 10 minutes at 4°C). Samples that cannot be measured immediately should be refrigerated or frozen. Samples are stable for up to 3 days at 2°C to 8°C and for months when frozen at –20°C or lower. Meconium and blood may also introduce errors when measuring the L/S ratio. Blood has an L/S ratio of approximately 2:1 and will falsely raise the L/S ratio when fetal lungs are immature and depress the L/S ratio when fetal lungs are mature."
  },
  {
    "id": 452,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements accurately describes human chorionic gonadotropin (hCG) levels in pregnancy?",
    "options": [
      "Levels of hCG rise throughout pregnancy",
      "In ectopic pregnancy, serum hCG doubling time is below expected levels",
      "Molar pregnancies are associated with lower levels than expected for the time of gestation",
      "hCG returns to nonpregnant levels within 2 days following delivery, stillbirth, or abortion"
    ],
    "answer": "B",
    "explanation": "In normal pregnancy, hCG levels rise exponentially following implantation and peak at weeks 9 to 12, reaching in excess of 100,000 mIU/mL. The hCG doubling time averages 2.2 days. In ectopic pregnancy, the expected increase between consecutive days is below normal. Levels fall after the first trimester to about 20,000 mIU/mL and then remain at about that level through term. Hydatiform moles are associated with greatly elevated levels of hCG. Serum hCG can take up to 4 weeks to return to nonpregnant (less than 25 mIU/mL) or baseline (less than 5 mIU/mL) levels following delivery, stillbirth, or abortion."
  },
  {
    "id": 453,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements regarding pregnancy testing is true?",
    "options": [
      "β-Subunits of hCG, thyroid-stimulating hormone (TSH), and follicle-stimulating hormone (FSH) are identical",
      "Antibodies against the β-subunit of hCG cross-react with luteinizing hormone (LH)",
      "A false-positive result may occur in patients with heterophile antibodies",
      "Serum should not be used for pregnancy tests because proteins interfere"
    ],
    "answer": "C",
    "explanation": "The α-subunit of hCG is very similar to the α-subunit of TSH and FSH and identical to LH. Although the β-subunits of hCG and LH are very similar, antibodies can be made to the β-subunit of hCG that do not cross-react with LH or other pituitary hormones. Most enzyme immunoassay (EIA) methods utilize two monoclonal antibodies against different sites of the hCG molecule. One antibody is specific for the carboxy terminal end of the β-chain, and the other reacts with the α-chain, resulting in a positive test only when intact hCG is present. Because monoclonal antibodies are usually derived from mouse hybridomas, rare false-positive results may occur in patients who have anti-mouse immunoglobulin antibodies. Although the test can detect lower levels of hCG, 25 mIU/mL is the positive cutoff for pregnancy. Serum is preferred over urine because serum levels are more consistently above the cutoff compared with random urine in very early pregnancy."
  },
  {
    "id": 454,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A pregnant woman was seen by her physician, who suspected a molar pregnancy. An hCG test was ordered, and hCG levels were found to be low. The sample was diluted 10-fold and the assay was repeated. The level was found to be grossly elevated. What best explains this situation?",
    "options": [
      "The wrong specimen was diluted",
      "A pipeting error was made in the first analysis",
      "Antigen excess caused a falsely low result in the undiluted sample",
      "An inhibitor of the antigen–antibody reaction was present in the sample"
    ],
    "answer": "C",
    "explanation": "Assays of intact hCG are double antibody sandwich immunoassays. One antibody reacts with the α-subunit and the other with the β-subunit. In assays where both antibodies are added together, a process called the “hook effect” is known to occur. In extreme antigen excess, the hCG saturates both antibodies, preventing sandwich formation. This results in measurement of falsely low levels of hCG."
  },
  {
    "id": 455,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which assay result is often approximately 25% below the expected level in pregnancies associated with Down syndrome?",
    "options": [
      "Serum unconjugated estriol",
      "L/S ratio",
      "Amniotic fluid bilirubin",
      "Urinary chorionic gonadotropin"
    ],
    "answer": "A",
    "explanation": "Estriol is produced by the placenta as well as the fetal and maternal adrenal glands and liver. Free estriol produced by the placenta is rapidly conjugated by the maternal liver. Almost all of maternal serum unconjugated (free) estriol is derived from the fetus and is a direct reflection of current fetal placental function. Serum unconjugated estriol (uE3) measured during the second trimester is used along with serum AFP, hCG, and dimeric inhibin A as part of the quad marker screening test for Down syndrome. AFP and uE3 are decreased by approximately 25%, inhibin A is increased by a factor of approximately 1.8, and hCG is increased by a factor of approximately 2.5 in Down syndrome pregnancies. When all four assays are combined with adjustments for maternal age, gestational age, race, maternal weight, and diabetes, the detection rate is approximately 70% to 80% and the false-positive rate 7%."
  },
  {
    "id": 456,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following statements about alpha fetoprotein (AFP) is correct?",
    "options": [
      "Maternal serum may be used to screen for open neural tube defects",
      "Levels above 4 ng/mL are considered positive",
      "Elevated levels in amniotic fluid are specific for spina bifida",
      "AFP levels increase in pregnancies associated with Down syndrome"
    ],
    "answer": "A",
    "explanation": "Maternal serum AFP increases steadily until 2 months prior to full term as AFP passes from the fetal urine into the amniotic fluid. Because serum levels are dependent on gestational age, URLs depend on the date of the last menstrual period. AFP is measured between 14 and 18 weeks gestation, and levels are reported as multiples of the median to permit interlaboratory comparison. When serum levels are high, ultrasonography is used to determine fetal age and rule out twins. Increased maternal serum AFP levels (greater than 2.5 MoM) may result from many diseases in addition to open neural tube defects, such as spina bifida. These include anencephaly, ventral wall defects, congenital hypothyroidism, and Turner syndrome. Decreased levels (less than 0.75 MoM) may be seen in approximately 25% of Down syndrome pregnancies."
  },
  {
    "id": 457,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "First-trimester screening for Down syndrome can be performed using which markers?",
    "options": [
      "AFP and unconjugated estriol",
      "Free β hCG and pregnancy-associated plasma protein A",
      "Intact hCG and dimeric inhibin A",
      "Dimeric inhibin B and AFP"
    ],
    "answer": "B",
    "explanation": "Maternal serum AFP levels are too low to measure accurately during the first trimester, and intact hCG and estriol do not discriminate well between 21 trisomy pregnancy and normal pregnancy before the second trimester. First trimester screening for Down syndrome (and trisomy 18) can be performed between weeks 10 and 13 by using free β-hCG (almost twofold higher in Down syndrome) and pregnancy- associated plasma protein A (PAPP-A) which has a median in Down syndrome less than half of that seen in normal pregnancy. These two markers used together with high-resolution ultrasonography to determine nuchal fold thickness (swelling at the base of the neck) have a sensitivity of 85% to 90%. Nuchal fold thickness (NT) in Down syndrome averages 1.5 MoM compared with 1.0 MoM for normal pregnancy."
  },
  {
    "id": 458,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "When performing marker screening tests for Down syndrome, why are results expressed in multiples of the median (MoM), rather than in concentration?",
    "options": [
      "Concentration is not normally distributed",
      "MoM normalizes for gestational age",
      "Some tests cannot be reported in mass units",
      "Mean cannot be determined accurately for these analytes"
    ],
    "answer": "B",
    "explanation": "Reporting of screening markers as MoM has two advantages: (1) It eliminates interlaboratory variation in reference ranges seen when concentration units are reported. Laboratories using different methods (antibodies or calibrators) may have significantly different mass unit results for the same sample, necessitating different reference ranges. (2) The reference range in concentration units is also dependent on the gestational age at the time of sample collection; however, the average result for normals is always 1.0 MoM, regardless of the gestational age of the cohort. Use of MoM obviates the need to report specific reference ranges based on method or gestational age and makes calculation of risk less complicated."
  },
  {
    "id": 459,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which test for 21 trisomy is not recommended for women who are carrying twins?",
    "options": [
      "First trimester triple marker screening",
      "Maternal plasma cell free fetal DNA",
      "Chorionic villus sampling",
      "Second trimester quad marker screening"
    ],
    "answer": "B",
    "explanation": "Down syndrome can result from a 14–21 translocation or isochromosome formation, but most cases arise from nondisjunction of chromosome 21 during meiosis. Plasma cell free DNA testing can be done as early as week 10 and detects fetal DNA released from fetal cells that has crossed the placenta. The test measures the ratio of fetal DNA:maternal DNA from chromosomes X, Y, 13, 18, and 21 with use of single nucleotide polymorphisms on the respective chromosomes to distinguish fetal DNA from maternal DNA. This ratio can be misinterpreted if more than one fetus is present. If any screening test is positive, amniocentesis or chronic villus sampling is performed, and trisomy is investigated by using chromosome karyotyping, microarray, or fluorescence in situ hybridization (FISH) on fetal cells."
  },
  {
    "id": 460,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which statement regarding the fetal fibronectin test is true?",
    "options": [
      "A positive test is correlated with a low probability of delivery within 14 days",
      "The test should not be performed before week 24 or after the end of week 34",
      "The test is performed on amniotic fluid",
      "The test is used to identify amniotic fluid after rupture of the fetal membranes"
    ],
    "answer": "B",
    "explanation": "The fetal fibronectin test is used mainly to rule out the likelihood of preterm delivery in high-risk pregnancies or in women with signs of preterm labor. Fetal fibronectin is a basement membrane protein produced by the amnion and chorion. It is present in cervical secretions in early pregnancy but disappears by about week 20. When there is inflammation to the membranes preceding delivery, fibronectin is released and can be found in cervicovaginal secretions. A positive test (greater than 50 ng/mL) has a sensitivity of about 60% in predicting preterm birth. However, a negative test has a 92% negative predictive value for the likelihood of preterm delivery and effectively rules out preterm delivery within the next 2 weeks. Amniotic fluid that has escaped from ruptured membranes is identified by testing a vaginal swab for pH. Vaginal fluid is normally acidic, with a pH between 5.0 and 6.0. After rupture of the membranes, the pH of the fluid changes to 6.5 to 7.5. This change can be detected by using Nitrazine paper or a swab containing Nitrazine yellow."
  },
  {
    "id": 461,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "What is the term for spermatozoa in which the anterior portion of the headpiece is smaller than normal?",
    "options": [
      "Azoospermia",
      "Microcephaly",
      "Acrosomal deficiency",
      "Necrozoospermia"
    ],
    "answer": "C",
    "explanation": "Spermatozoa have a well-defined headpiece consisting of the acrosome and nucleus. The acrosome comprises the anterior portion of the head and contains nutrients and enzymes needed for penetration of the ovum. A thin filament, the neckpiece, connects the head and tail. The tail is divided into the midpiece, principal piece (mainpiece), and endpiece. The midpiece is the thick anterior end of approximately 5 μ. It contains a 9 × 2 + 2 longitudinal arrangement of microtubules (two central microtubules surrounded by nine doublets so that a cross section resembles a pinwheel). This is called the axoneme and it is surrounded radially by nine outer dense fibers which in the midpiece are covered by a sheath containing mitochondria. The longest portion of the tail (40–45 μ) is the principal piece. Its axoneme is thinner than the midpiece. The distal portion, called the endpiece, is approximately 5 μ. It contains the axoneme but is unsheathed."
  },
  {
    "id": 462,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "What is the most common cause of male infertility?",
    "options": [
      "Mumps",
      "Klinefelter syndrome",
      "Varicocele",
      "Malignancy"
    ],
    "answer": "C",
    "explanation": "Varicocele is the hardening of veins that drain the testes. This causes blood from the adrenal vein to flow into the spermatic vein. Adrenal corticosteroids retard the development of spermatozoa. Mumps, Klinefelter syndrome, and malignancy cause testicular failure, which accounts for about 10% of infertility cases in men."
  },
  {
    "id": 463,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following values is the lower limit of normal for sperm concentration?",
    "options": [
      "15 million per milliliter",
      "40 million per milliliter",
      "60 million per milliliter",
      "100 million per milliliter"
    ],
    "answer": "A",
    "explanation": "The reference range for spermatozoa is 15 to 150 × 106/mL. Concentrations below 15 × 106/mL are considered abnormal. The sperm concentration is multiplied by the seminal fluid volume to determine the sperm count. The lower limit of normal for the sperm count is 40 × 106 per ejaculate. This often results from obstruction of the ejaculatory duct or testicular failure."
  },
  {
    "id": 464,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which morphological abnormality of sperm is most often associated with varicocele?",
    "options": [
      "Tapering of the head",
      "Cytoplasmic droplet below the neckpiece",
      "Lengthened neckpiece",
      "Acrosomal deficiency"
    ],
    "answer": "A",
    "explanation": "Acrosomal deficiency, nuclear abnormalities, and lengthened neckpiece are the most common morphological abnormalities of spermatozoa. Tapering of the head is a nuclear abnormality. Sperm morphology should be evaluated by classifying 200 mature sperm in duplicate by strict criteria. There are several strict criteria in use. The normal sperm head is approximately 4.0 to 5.0 µm in length, 2.5 to 3.5 µm in width, has an L/W ratio of 1.3 to 1.8, and an acrosomal area of 40% to 70%. Using strict criteria, there is a high likelihood of infertility when the number of normal forms is below 4%."
  },
  {
    "id": 465,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following stains is used to determine sperm viability?",
    "options": [
      "Eosin Y",
      "Hematoxylin",
      "Papanicolaou",
      "Methylene blue"
    ],
    "answer": "A",
    "explanation": "Eosin Y is excluded by living sperm and is used to determine the percentage of living cells. Papanicolaou, Giemsa, and hematoxylin stains are used to evaluate sperm morphology. The viability test should be performed whenever the results of the motility test are subnormal."
  },
  {
    "id": 466,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following semen analysis results is abnormal?",
    "options": [
      "Volume 1.0 mL",
      "Liquefaction 40 minutes at room temperature",
      "pH 7.6",
      "Motility 50% progressive movement"
    ],
    "answer": "A",
    "explanation": "The normal volume of seminal fluid is 1.5 to 5.0 mL. A lower volume than 1.5 mL causes a low sperm count (sperm/mL × volume) and can be caused by absence of the seminal vesicles or prostate, ductal obstruction, or retrograde ejaculation of seminal fluid into the urinary bladder. The seminal fluid should coagulate within 5 minutes after ejaculation because of secretions of the seminal vesicles. Proteases, such as prostate-specific antigen (PSA) hydrolyze semenogelin and fibronectin, causing liquefaction to occur within 1 hour at room temperature. The seminal fluid pH should be between 7.2 and 8.0. Motility is evaluated by grading the movement of two replicates of 200 sperm in five high-power fields. It is normal when 32% or greater show progressive movement or when 40% or greater show progressive and nonprogressive movement."
  },
  {
    "id": 467,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following sample collection and processing conditions will lead to inaccurate seminal fluid analysis results?",
    "options": [
      "Sample stored at room temperature for 1 hour before testing",
      "Sample collected following coitus",
      "Sample collected without an anticoagulant",
      "Sample collected without use of a condom"
    ],
    "answer": "B",
    "explanation": "A seminal fluid sample should not be collected following coitus. The patient should abstain from ejaculation for at least 2 days but no more than 7 days prior to submitting the sample. A condom should not be used because it may contain spermicides. The sample should be collected at the testing site in a sterile jar with a wide opening, and stored at room temperature. The specimen should be analyzed as soon as possible. The time between collection and delivery to the laboratory must be documented. Motility should be determined as soon as the fluid has liquefied (maximum storage time is 1 hour). Anticoagulants are not used; if the sample fails to liquefy, it can be treated with chymotrypsin before analysis."
  },
  {
    "id": 468,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "When performing a seminal fluid analysis, what is the upper limit of normal for WBCs?",
    "options": [
      "1 × 106/mL",
      "5 × 106/mL",
      "10 × 106/mL",
      "20 × 106/mL"
    ],
    "answer": "A",
    "explanation": "When evaluating sperm morphology, the number of round cells (immature spermatozoa and WBCs) should also be determined. The number of each is counted along with 200 mature sperm and then divided by 2 to determine their percentage. This is multiplied by the sperm concentration to give the absolute count per milliliter. An increased number of WBCs is an indicator of infection and is usually associated with prostatitis. Round cells are also estimated by noting their number per high-power field. Each round cell per field counted with the 40× objective corresponds to one million per milliliter. The upper limit of normal for WBCs is 1 × 106/mL and for immature sperm 5 × 106/mL."
  },
  {
    "id": 469,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which carbohydrate measurement is clinically useful when performing a seminal fluid analysis?",
    "options": [
      "Glucose",
      "Galactose",
      "Fructose",
      "Maltose"
    ],
    "answer": "C",
    "explanation": "Fructose is the primary nutrient in the seminal fluid and is needed for motility. It is supplied by the seminal vesicles and is low when the vas deferens or seminal vesicles are absent. The lower limit of normal is 150 mg/dL, or 13 µmol, per ejaculate."
  },
  {
    "id": 470,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which condition is most often associated with gastric ulcers?",
    "options": [
      "Cancer of the stomach",
      "Helicobacter pylori infection",
      "Zollinger-Ellison (Z-E) syndrome",
      "Pernicious anemia"
    ],
    "answer": "B",
    "explanation": "Peptic ulcer disease may be caused by either gastric or duodenal ulcers, which are associated with discomfort, hyperacidity, and bleeding. Hyperacidity is most often caused by H. pylori infection, which can cause both gastric and duodenal ulcers. In the absence of a positive test for H. pylori (e.g., endoscopic biopsy, breath test, enzyme- linked immunosorbent assay [ELISA], polymerase chain reaction [PCR]) and no history of drug induced ulcers, Z-E syndrome (gastrinoma) should be suspected, and can usually be identified by a plasma gastrin assay. Cancer of the stomach is associated with increased gastric fluid volume but not hyperacidity. Pernicious anemia is associated with gastric hypoacidity, and not ulcers."
  },
  {
    "id": 471,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In which condition is the highest level of serum gastrin usually seen?",
    "options": [
      "Atrophic gastritis",
      "Pernicious anemia",
      "Z-E syndrome",
      "Cancer of the stomach"
    ],
    "answer": "C",
    "explanation": "Gastrin is produced by specialized epithelium of the stomach and stimulates secretion of HCl by parietal cells. Secretion is controlled by negative feedback causing levels to be high in conditions associated with achlorhydria, such as atrophic gastritis. Z-E syndrome results from a gastrin-secreting tumor, gastrinoma, usually originating in the pancreas. It is characterized by very high levels of plasma gastrin and excessive gastric acidity. In duodenal ulcers, increased gastric acidity occurs, but fasting plasma gastrin levels are normal. However, postprandial gastrin levels may be elevated in these patients because they do not respond to the negative feedback signal caused by HCl release. In stomach cancer, gastric volume is increased but acidity is not, and plasma gastrin levels are variable."
  },
  {
    "id": 472,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "In determining free HCl, the gastric fluid is titrated to pH ______.",
    "options": [
      "6.5",
      "4.5",
      "3.5",
      "2.0"
    ],
    "answer": "C",
    "explanation": "Gastric analysis is performed rarely because endoscopic procedures usually are sufficient to diagnose hypo- and hyperacidity states. In difficult cases, analysis of gastric fluid can be used to make a definitive diagnosis. Free HCl in gastric residue from a 12-hour fasting sample obtained by nasogastric suction is measured by titrating with 0.1 N NaOH to a pH 3.5. Total acidity is titrated to pH 7.0, and includes contributions of other acids, including proteins and salts of chloride. Basal acid output (BAO) and peak acid output (PAO) are determined by using timed collection of gastric sample aliquots before and after stimulation of HCl release by pentagastrin. In achlorhydria, the fasting gastric pH is often greater than 6.0, and this is considered diagnostic. The BAO:PAO ratio is normally less than 0.2. Patients with gastric ulcers may also have a ratio less than 0.2 or between 0.2 and 0.4. In duodenal ulcers, the ratio is usually between 0.2 and 0.6. The ratio is greater than 0.6 only in Z-E syndrome."
  },
  {
    "id": 473,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which test can identify persons with gastrin-secreting tumors that do not demonstrate a definitively increased plasma gastrin concentration?",
    "options": [
      "Secretin stimulation",
      "Pentagastrin",
      "Cholecystokinin–pancreozymin",
      "Trypsinogen"
    ],
    "answer": "A",
    "explanation": "Plasma gastrin levels greater than 1,000 pg/mL are usually diagnostic of Z-E syndrome. Smaller elevations can occur in other types of hyperacidity, including gastric ulcers, in renal disease, and after vagotomy. Z-E syndrome can be differentiated from the others by using the secretin stimulation test. Secretin is administered intravenously, and timed plasma samples are collected and measured for gastrin. In Z- E syndrome, at least one specimen should show an increase of 200 pg/mL above the baseline for gastrin. Cholecystokinin–pancreozymin (CCK-PZ), a hormone produced by the small intestine, stimulates HCl production in the stomach, pancreatic release of bicarbonate, and intestinal motility. It may be measured to diagnose intestinal malabsorption, or used along with tests of other gastric regulatory peptides to evaluate dysfunction. Trypsinogen is a precursor of trypsin and is produced by the pancreas. Urinary trypsinogen is increased in acute pancreatitis, whereas fecal trypsin and chymotrypsin are decreased in cystic fibrosis because of pancreatic duct obstruction."
  },
  {
    "id": 474,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following tests would be normal in pancreatic insufficiency?",
    "options": [
      "Secretin stimulation",
      "D-Xylose absorption",
      "Twenty-four-hour fecal fat",
      "β-Carotene absorption"
    ],
    "answer": "B",
    "explanation": "The xylose absorption test differentiates pancreatic insufficiency from malabsorption syndrome (both cause deficient fat absorption). Xylose is absorbed by the small intestine without the aid of pancreatic enzymes. It is not metabolized and is excreted into urine. Low levels indicate gastrointestinal malabsorption."
  },
  {
    "id": 475,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which of the following is commonly associated with occult blood?",
    "options": [
      "Colon cancer",
      "Atrophic gastritis",
      "Pernicious anemia",
      "Pancreatitis"
    ],
    "answer": "A",
    "explanation": "Blood in feces is a very sensitive indicator of gastrointestinal bleeding and is an excellent screening test to detect asymptomatic ulcers and malignancy of the gastrointestinal tract. However, the test is nonspecific and contamination with vaginal blood is a frequent source of error."
  },
  {
    "id": 476,
    "section": "Amniotic, Gastrointestinal, and Seminal Fluids",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Which test is most sensitive in detecting persons with chronic pancreatitis?",
    "options": [
      "Fecal trypsin",
      "Fecal chymotrypsin",
      "Fecal elastin-1",
      "Plasma lipase"
    ],
    "answer": "C",
    "explanation": "Digestive enzyme tests are used to identify infants and children with pancreatic"
  },
  {
    "id": 477,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following dry reagent strip urinalysis results, select the most appropriate course of action: pH = 8.0 Protein = 1+ Glucose = Neg Blood = Neg Ketone = Neg Nitrite = Neg Bilirubin = Neg",
    "options": [
      "Report the results, assuming acceptable quality control",
      "Check pH with a pH meter before reporting",
      "Perform a turbidimetric protein test, instead of the dipstick protein test, and report",
      "Request a new specimen"
    ],
    "answer": "C",
    "explanation": "Highly buffered alkaline urine may cause a false-positive result on the dry reagent strip protein test by titrating the acid buffer on the reagent pad. Protein should be measured by an alternate method that is not subject to positive interference by highly buffered alkaline urine."
  },
  {
    "id": 478,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following urinalysis results, select the most appropriate course of action: pH = 8.0 Protein = Trace Glucose = Neg Ketone = Small Blood = Neg Nitrite = Neg Microscopic findings: RBCs = 0–2/HPF WBCs = 20–50/HPF Bacteria = Large Crystals = Small, CaCO3",
    "options": [
      "Call for a new specimen because urine was contaminated in vitro",
      "Recheck pH because CaCO3 does not occur at alkaline pH",
      "No indication of error is present; results indicate a UTI",
      "Report all results except bacteria because the nitrite test was negative"
    ],
    "answer": "C",
    "explanation": "A positive nitrite result requires infection with a nitrate-reducing organism, dietary nitrate, and incubation of urine in the bladder. The test is positive in about 70% of UTI cases. Alkaline pH, bacteriuria, and leukocytes point to UTI."
  },
  {
    "id": 479,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A 6-mL pediatric urine sample is processed for routine urinalysis in the usual manner. The sediment is prepared by centrifuging all of the urine remaining after performing the biochemical tests. The following results are obtained: SG = 1.015 Blood = Large Leukocytes = Moderate Protein = 2+ RBCs: 5–10/HPF WBCs: 5–10/HPF Select the most appropriate course of action.",
    "options": [
      "Report these results; blood and protein correlate with microscopic results",
      "Report biochemical results only; request a new sample for the microscopic examination",
      "Request a new sample and report as quantity not sufficient (QNS)",
      "Recentrifuge the supernatant and repeat the microscopic examination"
    ],
    "answer": "B",
    "explanation": "This discrepancy between the blood reaction and RBC count resulted from spinning less than 12 mL of urine. When volume is below 12 mL, the sample should be diluted with saline to 12 mL before concentrating. Results are multiplied by the dilution (12 mL/mL urine) to give the correct range."
  },
  {
    "id": 480,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following urinalysis results, select the most appropriate course of action: pH = 6.5 Protein = Neg Glucose = Neg Ketone = Trace Blood = Neg Bilirubin = Neg Microscopic findings: Mucus = Small Ammonium urate = Large",
    "options": [
      "Recheck urine pH",
      "Report these results, assuming acceptable quality control",
      "Repeat the dry reagent strip tests to confirm the ketone result",
      "Request a new sample and repeat the urinalysis"
    ],
    "answer": "A",
    "explanation": "Ammonium urate crystals occur at alkaline pH only. The pH should be checked, and if it is below 7.0, the crystals should be reviewed for correct identification. The trace ketone does not require confirmation, provided that the quality control of the reagent strips is acceptable."
  },
  {
    "id": 481,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following urinalysis results, select the most appropriate first course of action: pH = 6.0 Protein = Neg Glucose = Neg Ketone = Neg Blood = Neg Bilirubin = Neg Other findings: Color: Intense Transparency: Microscopic: yellow Clear Crystals, Bilirubin granules = Small",
    "options": [
      "Repeat the dry reagent strip test for bilirubin",
      "Request a new sample",
      "Recheck the pH",
      "Perform a test for urinary urobilinogen"
    ],
    "answer": "A",
    "explanation": "Bilirubin crystals cannot occur in urine without bilirubin. The dry reagent strip test should be repeated, and if the result is negative, a new specimen should be requested as bilirubin may have degraded due to storage. If a second sample yields a negative result, the crystals should be reviewed before reporting. Abnormal crystals occur only in acid or neutral urine."
  },
  {
    "id": 482,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A biochemical profile gives the following results: Creatinine = 1.4 mg/dL BUN = 35 mg/dL K = 5.5 mmol/L All other results are normal, and all tests are in control. Urine from the patient has an osmolality of 975 mOsm/kg. Select the most appropriate course of action.",
    "options": [
      "Check for hemolysis",
      "Repeat the BUN, and report only if normal",
      "Repeat the serum creatinine, and report only if elevated",
      "Report these results"
    ],
    "answer": "D",
    "explanation": "Patients with prerenal failure usually have a BUN:creatinine ratio greater than 20:1. Reduced renal blood flow causes increased urea reabsorption and high urine osmolality. Patients are usually hypertensive and show fluid retention and hyperkalemia."
  },
  {
    "id": 483,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A 2 p.m. urinalysis shows trace glucose on the dry reagent strip test. Fasting blood glucose drawn 8 hours earlier is 100 mg/dL. No other results are abnormal. Select the most appropriate course of action.",
    "options": [
      "Repeat the urine glucose, and report if positive",
      "Perform a test for reducing sugars, and report the result",
      "Perform a quantitative urine glucose; report as trace if greater than 100 mg/dL",
      "Request a new urine specimen"
    ],
    "answer": "A",
    "explanation": "Urine glucose concentration is dependent on blood glucose concentration at the time urine is formed. The postprandial glucose (2 p.m.) level exceeded the renal threshold, resulting in trace glycosuria. Tests for reducing sugars are not used to confirm a positive urine glucose test result."
  },
  {
    "id": 484,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Following a transfusion reaction, urine from a patient gives positive test results for blood and protein. The SG is 1.015. No RBCs or WBCs are seen in the microscopic examination. These results:",
    "options": [
      "Indicate renal injury induced by transfusion reaction",
      "Support the finding of an extravascular transfusion reaction",
      "Support the finding of an intravascular transfusion reaction",
      "Rule out a transfusion reaction caused by RBC incompatibility"
    ],
    "answer": "C",
    "explanation": "RBCs usually remain intact at a SG of 1.015. The absence of RBCs, WBCs, and casts points to hemoglobinuria caused by intravascular hemolysis rather than glomerular injury. A positive protein reaction will occur if sufficient hemoglobin is present."
  },
  {
    "id": 485,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A urine sample taken after a suspected transfusion reaction has a positive test result for blood, but intact RBCs are not seen on microscopic examination. Which test result would rule out an intravascular hemolytic transfusion reaction?",
    "options": [
      "Negative urine urobilinogen",
      "Serum unconjugated bilirubin below 1.0 mg/dL",
      "Serum potassium below 6.0 mmol/L",
      "Normal plasma haptoglobin"
    ],
    "answer": "D",
    "explanation": "The plasma free hemoglobin will be increased immediately after a hemolytic transfusion reaction, and the haptoglobin will be decreased. The hemoglobin will be eliminated by the kidneys, but the haptoglobin will remain low or undetectable for 2 to 3 days. Normal urine urobilinogen and serum unconjugated bilirubin help in ruling out extravascular hemolysis. Pretransfusion potassium is needed to evaluate the contribution of hemolysis to the post-transfusion result."
  },
  {
    "id": 486,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following urinalysis results, select the most appropriate course of action: pH = 5.0 Protein = Neg Glucose = 1,000 mg/dL Blood = Neg Bilirubin = Neg Ketone = Moderate SSA protein = 1+",
    "options": [
      "Report the SSA protein test result instead of the dry reagent strip test result",
      "Call for a list of medications administered to the patient",
      "Perform a quantitative urinary albumin",
      "Perform a test for microalbuminuria"
    ],
    "answer": "B",
    "explanation": "The combination of glucose and ketone positivity of urine points to a patient with insulin-dependent diabetes. A false-positive SSA test result is likely if tolbutamide (Orinase) has been administered."
  },
  {
    "id": 487,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Urinalysis results from a 35-year-old woman are as follows: SG = 1.015 pH = 7.5 Protein = Trace Glucose = Small Ketone = Neg Blood = Neg Leukocytes = Moderate Microscopic findings: RBCs: 5–10/HPF WBCs: 25–50/HPF Select the most appropriate course of action.",
    "options": [
      "Recheck the blood reaction; if negative, look for budding yeast",
      "Repeat the WBC count",
      "Report all results except that for blood",
      "Request the list of medications used"
    ],
    "answer": "A",
    "explanation": "A nonhemolyzed trace may have been overlooked and the blood test should be repeated. A false-negative result (e.g., megadoses of vitamin C) rarely occurs. Yeast cells often accompany pyuria and glycosuria and are easily mistaken for RBCs."
  },
  {
    "id": 488,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A routine urinalysis gives the following results: pH =6.5 Protein = Neg Blood = Neg Glucose= Trace Ketone = Neg Microscopic findings: Blood casts: Mucus: Crystals: Large, 5–10/LFP Small amorphous These results are most likely explained by:",
    "options": [
      "False-negative blood reaction",
      "False-negative protein reaction",
      "Pseudocasts of urate mistaken for true casts",
      "Mucus mistaken for casts"
    ],
    "answer": "C",
    "explanation": "At pH 6.5, amorphous crystals are most often urate. These form yellow- or reddish- brown refractile deposits sometimes resembling blood or granular casts. The number of blood casts reported could not have occurred with negative protein and blood test results."
  },
  {
    "id": 489,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: When examining a urinary sediment under 400× magnification, the medical laboratory scientist (MLS) noted many RBCs to have cytoplasmic blebs and an irregular distribution of the hemoglobin. This phenomenon is most often caused by:",
    "options": [
      "Intravascular hemolytic anemia",
      "Glomerular disease",
      "Hypotonic or alkaline urine",
      "Severe dehydration"
    ],
    "answer": "B",
    "explanation": "When RBCs pass through the damaged endothelial wall of the glomerulus, they become distorted, and such cells are described as dysmorphic in appearance. They are characterized by uneven distribution of hemoglobin, cytoplasmic blebs, and an asymmetrical membrane distinct from crenation. The cytoplasm may be extruded from the cell and may aggregate at the membrane giving the cell a wavy appearance. A predominance of dysmorphic RBCs in the microscopic examination points to glomerular bleeding as opposed to hematuria from other causes. Intravascular hemolytic anemia causes hemoglobinuria, rather than hematuria. RBCs lyse in hypotonic and alkaline urine. Severe dehydration is not a cause of hematuria."
  },
  {
    "id": 490,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A urine specimen is dark orange and turns brown after storage in the refrigerator overnight. The MLS requests a new specimen. The second specimen is bright orange and is tested immediately. Which test result would differ between the two specimens?",
    "options": [
      "Ketone",
      "Leukocyte esterase",
      "Urobilinogen",
      "Nitrite"
    ],
    "answer": "C",
    "explanation": "Urinary urobilinogen is increased in persons with extravascular hemolysis or hepatocellular liver disease. A freshly voided specimen is needed to detect urobilinogen because it is rapidly photo-oxidized to urobilin. This is accompanied by a color change from orange to brown. Urobilin does not react with 2,4 dimethylaminobenzaldehyde or 4-methoxybenzene diazonium tetrafluoroborate, which are used to detect urobilinogen. Consequently, the urobilinogen test in the first sample will be normal but will be increased in the second sample if tested immediately after collection. The best sample for detecting urobilinogen is a 2-hour timed urine sample collected in the midafternoon, when urobilinogen excretion is highest. Ketones and nitrites do not alter the pigment of the urine sample. Leukocytes cause the urine to be turbid but do not cause abnormal color. These three tests are stable for 24 hours when urine is refrigerated within 30 minutes of collection."
  },
  {
    "id": 491,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A patient’s random urine sample consistently contains a trace of protein but no casts, cells, or other biochemical abnormality. The first voided morning sample is consistently negative for protein. These findings can be explained by:",
    "options": [
      "Normal diurnal variation in protein loss",
      "Early glomerulonephritis",
      "Orthostatic or postural albuminuria",
      "Microalbuminuria"
    ],
    "answer": "C",
    "explanation": "Protein and other constituents of urine will often be highest in the first morning void. A normal first-voided sample makes glomerular disease highly unlikely. Orthostatic albuminuria is a benign condition sometimes seen in adolescents who are tall and have a bent posture that puts back pressure on the kidneys. The quantity of albumin excreted into the urine is small. Diagnosis is made by demonstrating a positive test after the person is erect for several hours, and the absence of proteinuria when the person is recumbent. Microalbuminuria seen in persons with diabetes is usually accompanied by a positive test result for urinary glucose."
  },
  {
    "id": 492,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A urine sample with a pH of 8.0 and a specific gravity of 1.005 had a small positive blood reaction but is negative for protein, and no RBCs are present in the microscopic examination of urinary sediment. What best explains these findings?",
    "options": [
      "High pH and low SG caused a false-positive blood reaction",
      "The blood reaction and protein reaction are discrepant",
      "Hemoglobin is present without intact RBCs because of hemolysis",
      "An error was made in the microscopic examination"
    ],
    "answer": "C",
    "explanation": "RBCs will lyse in alkaline or dilute urine, and this sample displays both. The blood test is sensitive to as little is 0.015 mg/dL hemoglobin, and the protein test is significantly less sensitive. As a result, trace to small positive blood and negative protein are commonly encountered."
  },
  {
    "id": 493,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A urine sample has a negative blood reaction and 5 to 10 cells per high-power field that resemble RBCs. What is the best course of action?",
    "options": [
      "Mix a drop of sediment with 1 drop of WBC counting fluid and re-examine",
      "Report the results without further testing",
      "Repeat the blood test, and if negative, report the results",
      "If the leukocyte esterase test is positive, report the cells as WBCs"
    ],
    "answer": "A",
    "explanation": "When 5 to 10 RBCs/HPFs are seen, the blood test should show a nonhemolyzed trace. Therefore, it is likely that the cells are not RBCs. RBCs are easily confused with nonbudding yeast and may also be mistaken for WBCs. RBCs will lyse in dilute acetic acid, but yeast and WBCs will not. If a yeast infection is present, then the leukocyte esterase test result will likely be positive; therefore, the leukocyte esterase test cannot be used to determine the identity of the cells. The Sternheimer-Malbin stain can be used to differentiate WBCs from RBCs and yeast."
  },
  {
    "id": 494,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A toluidine blue chamber count on CSF gives the following values: CSF Counts Peripheral Blood Counts WBCs 10 × 106/L WBCs 5 × 109/L RBCs 1,000 × 106/L RBCs 5 × 1012/L After correcting the WBC count in CSF, the MLS should next:",
    "options": [
      "Report the WBC count as 9 × 106/L without additional testing",
      "Report the WBC count and number of PMNs identified by the chamber count",
      "Perform a differential on a direct smear of the CSF",
      "Concentrate CSF using a cytocentrifuge and perform a differential"
    ],
    "answer": "D",
    "explanation": "A differential is performed by using CSF concentrate on all neonatal samples and whenever the WBC count is greater than 5μL. A toluidine blue chamber count of PMNs is not sufficiently sensitive to detect neutrophilic pleocytosis."
  },
  {
    "id": 495,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A blood-tainted pleural fluid is submitted for culture. Which test result would be most conclusive in classifying the fluid as an exudate? Test Result",
    "options": [
      "LD fluid/serum 0.65",
      "Total protein 3.2 g/dL",
      "RBC count 10,000/µL",
      "WBC count 1500/µL"
    ],
    "answer": "A",
    "explanation": "A traumatic tap makes classification of fluids difficult on the basis of cell counts and protein. The values reported for protein, RBCs, and WBCs can occur in either an exudate or bloody transudate, but the LD ratio is significant."
  },
  {
    "id": 496,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A pleural fluid submitted to the laboratory is milky in appearance. Which test would be most useful in differentiating between a chylous and pseudochylous effusion?",
    "options": [
      "Fluid to serum triglyceride ratio",
      "Fluid WBC count",
      "Fluid total protein",
      "Fluid:serum LD ratio"
    ],
    "answer": "A",
    "explanation": "Chylous effusions are caused by extravasation of lymphatic fluid into the pleural cavity. Pseudochylous effusions are caused by necrosis. Both fluids often appear white and opalescent, but both effusions can also be bloody, green, or yellow, in addition to being turbid. However, chylous effusions are odorless and have a twofold higher triglyceride compared with plasma. They also usually show a lymphocytosis. Pseudochylous effusions are foul smelling and usually have a mixed cellularity and an elevated cholesterol. These effusions may have triglyceride, but it is usually below 50 mg/dL. Chylous effusions are most often caused by lymphoma or other malignancy or trauma, and, like pseudochylous effusions, may have an increased LD fluid:serum ratio, total protein, and WBC count."
  },
  {
    "id": 497,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A CSF sample from an 8-year-old child with a fever of unknown origin was tested for glucose, total protein, lactate, and IgG index. Glucose was 180 mg/dL, but all other results were within the reference range. The CSF WBC count was 9 × 106/L, and the RBC count was 10 × 106/L. The differential showed 50% lymphocytes, 35% monocytes, 10% macrophages, 3% neutrophils, and 2% neuroectodermal cells. What is the most likely cause of these results?",
    "options": [
      "Aseptic meningitis",
      "Traumatic tap",
      "Subarachnoid hemorrhage",
      "Hyperglycemia"
    ],
    "answer": "D",
    "explanation": "CSF glucose is approximately 60% of the plasma glucose but may be somewhat lower in a person with diabetes. The reference range is approximately 40 to 70 mg/dL. A CSF glucose level above 70 mg/dL is caused by a high plasma glucose that equilibrated with CSF. Therefore, hyperglycorrhachia is caused by hyperglycemia. The WBC count in a child between 5 and 12 years of age is 0 to 10 × 106/L (0–10/µL). The normal RBC count and protein rule out subarachnoid hemorrhage and traumatic tap. Although aseptic meningitis cannot be ruled out conclusively, it is unlikely given a normal WBC count and IgG index."
  },
  {
    "id": 498,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A WBC count and differential performed on ascites fluid gave a WBC count of 20,000/ µL with 90% macrophages. The gross appearance of the fluid was described by the MLS as “thick and bloody.” It was noted on the report that several clusters of these cells were observed and that the majority of the cells contained many vacuoles resembling paper-punch holes. What do the observations above suggest?",
    "options": [
      "Malignant mesothelial cells were counted as macrophages",
      "Adenocarcinoma from a metastatic site",
      "Lymphoma infiltrating the peritoneal cavity",
      "Nodular sclerosing type Hodgkin disease"
    ],
    "answer": "A",
    "explanation": "Bloody, exudative fluids with a preponderance of a singular cell type are suggestive of malignancy. The cellularity in malignancy is variable but lymphocytosis occurs in about half the cases. Mesothelial cells normally comprise less than 10% of the cells in serous fluid. They may be resting cells, reactive, degenerated, or phagocytic in nonmalignant conditions. In inflammatory conditions, they are often increased and resemble macrophages. However, clusters or balls of such cells and paper-punch vacuoles throughout the cytoplasm and over the nucleus are characteristics of malignant mesothelial cells. Such cells secrete hyaluronic acid, making the fluid highly viscous. The gross appearance of this fluid suggests malignancy. The description of these cells points to mesothelioma, and this specimen should be referred for cytological examination to confirm the diagnosis."
  },
  {
    "id": 499,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Given the following data for creatinine clearance, select the most appropriate course of action. Volume = 2.8 L/day; surface area = 1.73 m2; urine creatinine = 100 mg/dL; serum creatinine = 1.2 mg/dL",
    "options": [
      "Report a creatinine clearance of 162 mL/min",
      "Repeat the urine creatinine; results point to a dilution error",
      "Request a new 24-hour urine sample",
      "Request the patient’s age and gender"
    ],
    "answer": "C",
    "explanation": "A calculated clearance in excess of 140 mL/min is greater than the upper physiological limit. The high volume per day suggests addition of H2O, or urine that should have been voided and discarded at the start of sample collection. The result should be considered invalid."
  },
  {
    "id": 500,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "An elevated amylase is obtained on a stat serum collected at 8 p.m. An amylase performed at 8 a.m. that morning was within normal limits. The MLS also noted that urine amylase was measured at 6 p.m. Select the most appropriate course of action.",
    "options": [
      "Repeat the stat amylase; report only if within normal limits",
      "Repeat both the morning and afternoon serum amylase, and report only if they agree",
      "Request a new specimen; do not report results of the stat sample",
      "Review the amylase result on the 6 p.m. urine sample; if elevated, report the stat amylase"
    ],
    "answer": "D",
    "explanation": "Serum amylase peaks 2 to 10 hours after an episode of acute pancreatitis, and this may have caused the elevated serum amylase at 8 p.m. Urinary amylase parallels serum amylase; therefore, a positive urine test at 6 p.m. makes sample collection error unlikely."
  },
  {
    "id": 501,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Results of an FLM study from a patient with diabetes mellitus are as follows: L/S ratio = 2.0; Phosphatidyl glycerol = Neg; Creatinine = 2.5 mg/dL Given these results, the MLS should:",
    "options": [
      "Report the result and recommend repeating the L/S ratio in 24 hours",
      "Perform scanning spectrophotometry on the fluid to determine if blood is present",
      "Repeat the L/S ratio after 4 hours and report those results",
      "Report results as invalid"
    ],
    "answer": "A",
    "explanation": "In patients with poorly controlled diabetes, lung maturity may be delayed and an L/S ratio of 2:1 may be associated with respiratory distress syndrome. A positive PG spot correlates with an L/S ratio of 2:1 or higher and rules out a falsely increased result caused by blood contamination. However, the appearance of PG in amniotic fluid is often delayed in diabetes. The best course of action is to wait an additional 24 hours and perform another L/S ratio on a fresh sample of amniotic fluid because an L/S ratio of 3:1 would indicate a high probability of lung maturity."
  },
  {
    "id": 502,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A 24-hour urine sample from an adult submitted for catecholamines gives a result of 140 µg/day (upper reference limit 150 µg/day). The 24-hour urine creatinine level is 0.6 g/day. Select the best course of action.",
    "options": [
      "Check the urine pH to verify that it is less than 2.0",
      "Report the result in µg catecholamines per milligram of creatinine",
      "Request a new 24-hour urine sample",
      "Measure the VMA, and report the catecholamine result only if elevated"
    ],
    "answer": "C",
    "explanation": "Urine creatinine of less than 0.8 g/day indicates incomplete sample collection. The patient’s daily catecholamine excretion would be misinterpreted from this result."
  },
  {
    "id": 503,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A sperm motility test was performed and 200 sperm were evaluated in each of two duplicates. The first sample showed progressive movement in 50% and nonprogressive movement in 35%, and 15% were immotile. The second showed progressive movement in 35% and nonprogressive movement in 35%, and 30% were immotile. What is the best course of action?",
    "options": [
      "Report the average of the two values for progressive movement",
      "Report the higher of the two values",
      "Repeat the motility test",
      "Call for a new specimen"
    ],
    "answer": "C",
    "explanation": "Sperm motility should be performed in duplicate and 200 cells per sample in several fields should be evaluated for movement. Agreement between duplicates must be within a specified percentage based on the category with the highest percentage. In this case, progressive movement is highest at 50%, and the difference between replicates should be no greater than 10%."
  },
  {
    "id": 504,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A quantitative serum hCG is ordered on a male patient. The technologist should:",
    "options": [
      "Perform the test and report the result",
      "Request that the order be cancelled",
      "Perform the test and report the result if negative",
      "Perform the test and report the result only if greater than 25 IU/L"
    ],
    "answer": "A",
    "explanation": "hCG may be produced in men by tumors of trophoblastic origin, such as teratoma and seminoma, and is an important marker for nontrophoblastic tumors, as well."
  },
  {
    "id": 505,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A lamellar body count (LBC) was performed on an amniotic fluid sample that was slightly pink within 1 hour of specimen collection. The sample was stored at 4°C prior to analysis. The result was 25,000/µL, classified as intermediate risk of RDS. The physician waited 24 hours and collected a new sample that was counted within 2 hours of collection on the same instrument. The LCB count of the new sample was 14,000/µL and the patient was reclassified as high risk for delivery. Which statement best explains these results?",
    "options": [
      "Loss of lamellar bodies occurred in the second sample because of storage",
      "Blood caused a falsely elevated result for the first sample",
      "The fetal status changed in 24 hours because of respiratory illness",
      "The difference in counts is the result of day-to-day physiological and instrument variance"
    ],
    "answer": "B",
    "explanation": "Lamellar bodies are small particles containing pulmonary surfactants that are made by type II pneumocytes, and their number in amniotic fluid increases as the concentration of phospholipids increases. They are about the same size as platelets and are counted in the platelet channel of cell counters. If the amniotic fluid sample is contaminated with blood, platelets will falsely raise the LBC. Amniotic fluid samples for LBC are stable for several days when stored at 4°C. However, cutoffs for FLM need to be established by each laboratory because there are significant differences in LBCs between different counters."
  },
  {
    "id": 506,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "When testing for drugs of abuse in urine, which of the following test results indicate dilution and would be cause for rejecting the sample?",
    "options": [
      "Temperature at sample submission 92°F",
      "SG 1.002; creatinine 15 mg/dL,",
      "pH 5.8; temperature 94°C",
      "SG 1.012; creatinine 25 mg/dL"
    ],
    "answer": "B",
    "explanation": "Tampering with a sample submitted for abuse substance testing can be either by dilution or substitution. Substance Abuse and Mental Health Services Administration (SAMHSA) certified workplace drug testing laboratories are required to test for both, and reject samples based on SAMHSA cutoffs. A specimen is too dilute for testing if the creatinine is less than 20 mg/dL and SG below 1.003. A sample is considered substituted if creatinine is less than 5.0 mg/dL and SG less than 1.002. Values in A and C for pH and temperature are within acceptable limits."
  },
  {
    "id": 507,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "SITUATION: A urine specimen has an SG of 1.025 and is strongly positive for nitrite. All other dry reagent strip test results are normal, and the microscopic examination was unremarkable, showing no WBCs or bacteria. The urine sample was submitted as part of a pre-employment physical examination that also includes drug testing. Which most likely caused these results?",
    "options": [
      "A viral infection of the kidney",
      "A urinary tract infection in an immunosuppressed person",
      "An adulterated urine specimen",
      "Error in reading the nitrite pad caused by poor reflectometer calibration"
    ],
    "answer": "C",
    "explanation": "Urine validity testing for drugs of abuse includes tests for nitrite, glutathione, pyridinium dichromate, and peroxide in addition to pH, SG, and creatinine. These substances are known to cause negative interference in the enzyme-multiplied immunoassay technique (EMIT test). A viral infection of the kidney would be associated with high numbers of renal tubular epithelial cells and leukocytes. An infection in an immunosuppressed person would still produce urinary WBCs. Although laboratory error is possible, a false-positive result caused by reflectometer error would be suspected if the test pad were negative when reading it manually."
  },
  {
    "id": 508,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A CSF sample submitted for cell counts has a visible clot. What is the best course of action?",
    "options": [
      "Count RBCs and WBCs manually after diluting the fluid with normal saline",
      "Tease the cells out of the clot before counting, then dilute with WBC counting fluid",
      "Request a new sample",
      "Perform a WBC count without correction"
    ],
    "answer": "C",
    "explanation": "Although the sample is still suitable for microbiological analysis, it will not give reliable cell counts or biochemistry results because of extensive contamination with peripheral blood."
  },
  {
    "id": 509,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "Total hemolytic complement and glucose are ordered on a synovial fluid sample that is too viscous to pipet. What is the best course of action?",
    "options": [
      "Dilute the sample in saline",
      "Add 1 mg/mL hyaluronidase to the sample, and incubate at room temperature for 30 minutes",
      "Warm the sample to 65°C for 10 minutes",
      "Request a new specimen"
    ],
    "answer": "B",
    "explanation": "Joint fluid too viscous to pipet accurately cannot be diluted accurately. Complement is heat labile, and total hemolytic complement is destroyed when the sample is heated to 56°C for 5 minutes. Joint fluid is difficult to collect, and a new sample is likely to have the same problem."
  },
  {
    "id": 510,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "A CSF cytospin smear shows many smudge cells and macrophages with torn cell membranes. What most likely caused this problem?",
    "options": [
      "Failure to add albumin to the cytospin cup",
      "Failure to collect the CSF in EDTA",
      "Centrifuge speed too low",
      "Improper alignment"
    ],
    "answer": "A",
    "explanation": "Cellular distortion caused by centrifugation is a common problem and can be reduced by adding 22% bovine albumin or 10% dextran to the cytospin cup along with the sample. In the absence of a large subarachnoid hemorrhage, CSF does not clot because it contains no fibrinogen, and the sample can be collected and counted without anticoagulant."
  },
  {
    "id": 511,
    "section": "Urinalysis and Body Fluids Problem-Solving",
    "chapter": "Urinalysis & Body Fluids",
    "question": "An automated electronic blood cell counter was used to count RBCs and WBCs in a turbid pleural fluid sample. The WBC count was 5 × 1010/L (50,000/µL) and the RBC count was 5.5 × 1010/L (55,000/µL). What is the significance of the RBC count?",
    "options": [
      "The RBC count is not significant and should be reported as 5,000/µL",
      "The RBC count should be reported as determined by the analyzer",
      "A manual RBC count should be performed",
      "A manual RBC and WBC count should be performed and reported instead"
    ],
    "answer": "A",
    "explanation": "Electronic cell counters are validated for body fluid cell counts with specific"
  }
];
