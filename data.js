// ============================================================
//  DVNC COMPARE — DATA CONFIG
//  Edit this file to change prompts, answers, and scores.
//  All other files read from this one.
// ============================================================

const CRITERIA = [
  { id: "novelty",      label: "Novelty of approach" },
  { id: "mechanistic",  label: "Depth of mechanistic reasoning" },
  { id: "platform",     label: "Platform / execution risk" },
  { id: "mechanism",    label: "Core mechanism risk" },
  { id: "validation",   label: "Near-term testability" },
  { id: "scalability",  label: "Scalability potential" },
  { id: "specificity",  label: "Programme / action specificity" },
  { id: "domain",       label: "Domain-specific depth" },
];

// Score levels: "Very High" | "High" | "Moderate" | "Low" | "Very Low"
// note: one short sentence explaining the rating

const PROMPTS = [
  {
    id: "p1",
    label: "Cardiac Biomaterial",
    fullText:
      "Design a novel composite biomaterial for myocardial infarction combining auxetic mechanics, electrical conductivity, and immunomodulation.",
    answers: {
      dvnc: `╔══════════════════════════════════════════╗
║     DVNC FINAL INNOVATION CARD          ║
╚══════════════════════════════════════════╝

BRIEF: Design a composite cardiac patch that integrates auxetic mechanics, electrical conductivity, and immunomodulation for myocardial infarction treatment, with the specific innovation of strain-synchronized immunomodulatory release from geometrically-defined void compartments.

ROUTE: biomaterial → platform[CO_OCCURS] → cardiac_biomaterials[EVOKES]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CROSS-DOMAIN LEAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The re-entrant honeycomb geometry that enables auxetic behavior in cardiac patches [S5, S6] creates void spaces that expand under tensile strain—a phenomenon demonstrated for tunable mechanical properties [S7]. This geometric feature, originally optimized for mechanical compliance matching, can be repurposed as strain-modulated release compartments when loaded with immunomodulatory cargo. The innovation is NOT heartbeat-powered pumping (which has prior art in piezoelectric and strain-responsive systems), but rather the geometric co-location of auxetic struts serving triple duty: mechanical compliance, electrical conduction pathways, and boundaries defining immunomodulatory reservoirs [S5, S8]. The specific novelty lies in exploiting the void geometry—not the strain energy—to spatially organize immunomodulatory and conductive functions within a single architecture already validated for cardiac mechanical matching [S5, S6, S7].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REFINED HYPOTHESIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A hierarchical cardiac patch can integrate the established auxetic-conductive scaffold architecture [S5, S6, S7] with immunomodulatory strategies for cardiac regeneration [S8] by utilizing the re-entrant void spaces as compartments for M2-polarizing factor depots, achieving spatial organization of three functional components within a single geometry. Rather than claiming mechano-activated pumping (which requires validation), the hypothesis proposes that geometric co-registration of auxetic compliance, conductive networks, and immunomodulatory reservoirs reduces interfacial complexity and enables synchronized degradation kinetics aligned with cardiac remodeling phases [S7, S8]. The immunomodulatory component addresses the limitation of existing auxetic-conductive patches, which demonstrate mechanical and electrical integration but lack immunoengineering [S5, S8].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPERIMENTAL PROGRAMME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Step 1 [S6]: Fabricate auxetic scaffolds using laser ablation of chitosan-polyester films per established protocols, targeting Poisson ratio between -0.3 and -0.8 (measured via optical strain tracking under uniaxial tension) and conductivity 0.13 S/cm achieved through PEDOT:PSS integration as documented [S6, S7].
  → IF Poisson ratio within range AND conductivity ≥0.1 S/cm: proceed to Step 2
  → ELSE: Adjust unit cell geometry (re-entrant angle, strut thickness) per parametric modeling

Step 2 [S8]: Load PLGA microspheres (10-50 μm diameter, containing IL-4 at 100 ng/mg loading based on immunomodulation literature [S8]) into void spaces using vacuum infiltration. Characterize retention under cyclic loading (12% strain, 1.5 Hz, 1000 cycles) via fluorescent tracking.
  → IF ≥70% microsphere retention after 1000 cycles: proceed to Step 3
  → ELSE: Apply fibrin glue surface treatment to void walls for enhanced adhesion

Step 3 [S7]: Measure conduction velocity across loaded vs. unloaded patches using microelectrode array mapping per cardiac patch characterization methods. Baseline target: conduction velocity ≥15 cm/s for unloaded auxetic-conductive patch [S7].
  → IF loaded patch maintains ≥85% of unloaded conduction velocity (≥12.75 cm/s): proceed to Step 4
  → ELSE: Reduce microsphere loading density to 50% of void volume

Step 4 [S5, S7]: Implant in rodent MI model (LAD ligation). At days 7, 21, 42: explant subsets for histological assessment of scaffold degradation (mass loss, molecular weight), fibrotic area (Masson's trichrome), and wall thickness (echocardiography). Compare degradation timeline to target phases: acute (1-7d), proliferative (7-21d), maturation (21-90d) [S7, S8].
  → IF scaffold retains ≥50% mass at day 21 AND ≤20% mass at day 60: proceed to Step 5
  → ELSE: Modify polyester blend ratio to adjust degradation kinetics

Step 5 [S7, S8]: At day 14, quantify macrophage phenotype via flow cytometry (CD86+/CD206+ ratio for M1/M2). At week 4, measure ejection fraction via echocardiography. Compare to: (a) untreated MI control, (b) auxetic-conductive patch without immunomodulation [S7], (c) immunomodulatory patch without auxetic architecture.
  → IF M2/M1 ratio significantly elevated vs. control (p<0.05) AND ΔEF ≥5% improvement vs. auxetic-only group: advance to large animal validation
  → ELSE: Increase IL-4 loading or add IL-10 co-delivery per immunomodulation strategies [S8]`,

      chatgpt: `A composite cardiac patch for MI treatment can be designed using three integrated functional components.

For auxetic mechanics, a re-entrant honeycomb structure made from polyurethane or silicone provides a negative Poisson's ratio that accommodates the complex strain environment of the beating heart. This geometry allows the patch to expand in multiple directions under cyclic loading.

For electrical conductivity, carbon nanotubes or gold nanowires can be incorporated into the polymer matrix. These conductive fillers create percolating networks that facilitate electrical signal propagation across the infarcted zone, potentially reducing arrhythmia risk.

For immunomodulation, anti-inflammatory cytokines such as IL-10 or TGF-β can be encapsulated in PLGA microspheres and distributed throughout the scaffold. Controlled release over 2–4 weeks can help shift the local immune environment toward a pro-regenerative M2 macrophage phenotype.

The three components would be fabricated as a single scaffold using 3D printing or electrospinning, with the auxetic geometry defining the overall architecture while the conductive and immunomodulatory components are integrated during fabrication. In vitro and in vivo testing in rodent MI models would validate mechanical, electrical, and immunological performance.`,

      claude: `CORE DESIGN PHILOSOPHY The infarcted myocardium presents three simultaneous failure modes: mechanical mismatch with healthy tissue causing wall stress and remodeling, loss of electrical continuity causing arrhythmias and contractile dysfunction, and a sustained pro-inflammatory macrophage environment preventing regeneration. AuxoCard-IE addresses all three through a single layered construct rather than sequential or competing interventions. STRUCTURAL LAYER: AUXETIC SCAFFOLD Conventional cardiac patches are stiffer than myocardium or fail to match its anisotropic strain, creating stress concentrations at the patch-tissue boundary. An auxetic geometry, meaning one with a negative Poisson's ratio, expands laterally when stretched longitudinally, which mirrors the complex biaxial deformation of beating myocardium more faithfully than conventional materials. The scaffold is fabricated from a polycaprolactone-gelatin methacrylate (PCL-GelMA) blend electrospun or 3D-printed into a re-entrant honeycomb or rotating-rectangle auxetic unit cell geometry. The cell dimensions are tuned to a Poisson's ratio of approximately -0.3 to -0.5, matching reported values for native myocardium under physiological strain. PCL provides long-term mechanical durability across 40 million cardiac cycles per year, while GelMA provides cell-adhesive RGD sequences and degrades gradually as new tissue forms. Fiber orientation follows the helical angle of native ventricular cardiomyocytes (roughly 60 degrees transmurally) to reproduce the anisotropic stiffness gradient. Key mechanical targets: circumferential stiffness 20 to 40 kPa, longitudinal stiffness 10 to 20 kPa, strain-to-failure greater than 40 percent. CONDUCTIVE LAYER: ELECTRICAL INTEGRATION Embedded within the scaffold matrix is a percolating network of reduced graphene oxide (rGO) nanosheets co-deposited with gold nanowires (AuNWs). This combination is deliberate. rGO provides bulk conductivity through pi-pi stacking and a large surface area for cell interaction, while AuNWs bridge gaps between rGO domains, lowering the percolation threshold and avoiding the need for high rGO concentrations that would compromise biocompatibility. The conductive network is loaded at 0.5 to 1.5 weight percent rGO and 0.2 weight percent AuNW, targeting a bulk conductivity of 1 to 5 mS/cm, within the range of native myocardium at roughly 1 to 10 mS/cm depending on direction. The network serves two functions. First, it propagates electrical signals across the scar-patch interface, reducing conduction delay and the risk of re-entrant arrhythmia. Second, the conductive substrate enhances cardiomyocyte maturation through electromechanical stimulation, upregulating connexin-43 expression and promoting sarcomere alignment. An optional feature is embedding piezoelectric PVDF-TrFE nanofibers within the conductive network so that mechanical deformation from heartbeat generates local microvolt-range electrical signals autonomously, sustaining cardiomyocyte priming without external stimulation. IMMUNOMODULATORY LAYER: MACROPHAGE POLARIZATION CONTROL Post-MI inflammation is dominated by M1 pro-inflammatory macrophages in the first 72 hours, followed by inadequate transition to M2 reparative macrophages. The biomaterial exploits this timing by incorporating two sequentially released bioactive agents within PLGA microspheres of two distinct degradation rates. Fast-release microspheres (PLGA 50:50, degradation 3 to 7 days) carry IL-4 and IL-13 at nanogram-per-day doses. These cytokines drive macrophage polarization toward M2 phenotype during peak inflammation. Slow-release microspheres (PLGA 75:25, degradation 14 to 28 days) carry stromal cell-derived factor 1-alpha (SDF-1 alpha) and vascular endothelial growth factor (VEGF). SDF-1 alpha recruits cardiac progenitor cells from bone marrow and local niches while VEGF drives neovascularization of the infarct border zone. Additionally, the scaffold surface is functionalized with short peptide sequences mimicking the CD200 receptor ligand. CD200-CD200R signaling on macrophages constitutively suppresses excessive NLRP3 inflammasome activation without globally immunosuppressing the host, a critical distinction for a cardiac patient already at infection risk. This peptide coating acts as a tonic brake on hyper-inflammation independent of drug release kinetics. ASSEMBLY AND DELIVERY FORMAT The material can be deployed in two formats depending on infarct size and timing. For acute intervention (within 6 hours), an injectable hydrogel precursor form is used: the rGO-AuNW network and microspheres are suspended in a GelMA-hyaluronic acid hydrogel that crosslinks in situ at 37 degrees Celsius via visible light or enzymatic crosslinking, conforming to the irregular infarct geometry. For subacute or chronic infarcts, a pre-formed auxetic patch is epicardially sutured or adhered using a mussel-inspired polydopamine adhesive layer that bonds to wet cardiac tissue without requiring sutures through the myocardium. ANTICIPATED FUNCTIONAL OUTCOMES Mechanical: reduced wall stress at infarct zone due to load-sharing with auxetic geometry, prevention of adverse ventricular remodeling and aneurysm formation. Electrical: restored conduction velocity across scar by 40 to 60 percent in preclinical estimates, reduced arrhythmia burden, enhanced cardiomyocyte maturation at patch interface. Immunological: accelerated M1-to-M2 macrophage transition by day 5 to 7 post-implantation, increased angiogenic density by week 3, reduced fibrotic scar area at 4 weeks compared to passive scaffold controls. OPEN CHALLENGES AND HONEST LIMITATIONS Long-term rGO biocompatibility at cardiac interfaces remains under active investigation, and chronic inflammatory response to graphene derivatives is not fully characterized in humans. Auxetic geometry fabricated at the sub-millimeter scale required for cardiac patches demands high-resolution additive manufacturing that is not yet easily scalable to clinical volumes. The dual cytokine release strategy assumes predictable degradation kinetics in the inflammatory cardiac microenvironment, which is more erosive than in vitro models suggest. Finally, regulatory classification of this construct as a combination product (device plus biologic plus drug) creates significant approval complexity in both FDA and EMA frameworks. This design represents a convergence of mechanobiology, bioelectronics, and immunoengineering into a single spatiotemporally programmed construct. Each element is individually precedented in the literature; the novelty lies in their integration and the auxetic geometric strategy for mechanical matching, which remains underexplored in cardiac tissue engineering relative to its potential.`,

      gemini: `A novel composite biomaterial for myocardial infarction treatment could combine the following elements:

Auxetic scaffold: Using a star-shaped or re-entrant honeycomb microarchitecture fabricated from biodegradable polymers like PLGA or PCL. The auxetic geometry provides a negative Poisson's ratio, allowing the scaffold to expand laterally when stretched longitudinally, which better matches the mechanical behaviour of cardiac tissue during contraction.

Electrical conductivity: Incorporating polyaniline (PANI) or polypyrrole (PPy) conducting polymers into the scaffold matrix. These biocompatible conducting polymers can be electrochemically deposited or blended with the base polymer to achieve conductivities in the range needed for cardiac signal propagation.

Immunomodulation: Surface functionalisation with anti-CD163 antibodies or IL-4 conjugates to promote local M2 macrophage polarisation. Alternatively, loading the scaffold with curcumin nanoparticles, which have demonstrated anti-inflammatory properties in cardiac repair models.

The integration challenge lies in ensuring the conducting polymer coating does not significantly alter the auxetic mechanical response. A thin conformal coating approach would be preferable to bulk blending. Immunomodulatory agents could be incorporated into the polymer backbone via ester linkages for degradation-controlled release, avoiding the burst release profile typical of physical encapsulation methods.`,
    },
    scores: {
      chatgpt: [
        { dvnc: "Very High", competitor: "High",     dvncNote: "Layered architecture with explicit interfacial coupling strategy", competitorNote: "Solid integration concept but layers described independently" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Circumferential fibre alignment + sequenced cytokine release are novel", competitorNote: "Standard CNT/nanowire + PLGA approach; no new mechanisms" },
        { dvnc: "Medium",    competitor: "Medium",   dvncNote: "4-step fabrication validated in literature but untested as integrated system", competitorNote: "3D print + electrospun approach is established but lacks specificity" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "Passive degradation with temporal sequencing; predictable kinetics", competitorNote: "Standard PLGA passive release; low risk but also low novelty" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Each layer individually validated; rodent MI model achievable 12–18 months", competitorNote: "Testable but lacks quantitative targets or decision criteria" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Electrospinning and dip-coating are GMP-compatible processes", competitorNote: "Generic fabrication methods; no scale-up pathway discussed" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Fabrication sequence, cell ratios, and target metrics all specified", competitorNote: "No quantitative targets, go/no-go criteria, or experimental steps" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Dual cytokine, temporally sequenced, spatially separated from angiogenics", competitorNote: "Single cytokine strategy; M2 polarisation goal stated but not designed for" },
      ],
      claude: [
        { dvnc: "Very High", competitor: "High", dvncNote: "Unique void-compartment innovation beyond standard integration.", competitorNote: "Primarily integrates known components into one construct." },
        { dvnc: "Very High", competitor: "Very High", dvncNote: "Explains geometry-function coupling clearly.", competitorNote: "Rich mechanistic rationale across all functional layers." },
        { dvnc: "Very High", competitor: "Very High", dvncNote: "Requires multi-material fabrication and validation.", competitorNote: "Combination product adds major manufacturing complexity." },
        { dvnc: "Moderate", competitor: "Moderate", dvncNote: "Relies on partially validated geometric release concept.", competitorNote: "Uses mostly established biological mechanisms." },
        { dvnc: "High", competitor: "Moderate", dvncNote: "Provides direct experimental validation pathway.", competitorNote: "Lacks detailed validation sequence and milestones." },
        { dvnc: "High", competitor: "Moderate", dvncNote: "Architecture can extend across regenerative biomaterials.", competitorNote: "Complex multi-component design may hinder scaling." },
        { dvnc: "Very High", competitor: "Moderate", dvncNote: "Detailed steps, thresholds, decision gates provided.", competitorNote: "Targets given but no execution programme." },
        { dvnc: "Very High", competitor: "Very High", dvncNote: "Strong cardiac biomaterials expertise demonstrated.", competitorNote: "Exceptional breadth across immunology and bioelectronics." },
      gemini: [
        { dvnc: "Very High", competitor: "Moderate", dvncNote: "Four functionally distinct layers with resolved inter-layer conflicts", competitorNote: "Combination of known elements; no integration architecture described" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Temporal cytokine sequencing via wall thickness is a specific design choice", competitorNote: "PANI/PPy coating approach is standard; curcumin nanoparticles underdeveloped" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Wet-state impedance characterisation remains the key open question", competitorNote: "Conformal coating insight is practical and reduces mechanical disruption risk" },
        { dvnc: "Low",       competitor: "Medium",   dvncNote: "Sequential passive release with controlled temporal offset", competitorNote: "Ester linkage backbone conjugation is higher risk than physical encapsulation" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Layer-by-layer validation pathway is clear and literature-supported", competitorNote: "No experimental targets, timelines, or validation criteria provided" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "All four fabrication steps use scalable, GMP-compatible processes", competitorNote: "PLGA/PCL base scales well; conducting polymer deposition at scale is harder" },
        { dvnc: "High",      competitor: "Very Low", dvncNote: "Quantitative targets at cell, material, and tissue level all specified", competitorNote: "Concepts described but no programme, metrics, or decision points given" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Spatially decoupled cytokine and angiogenic signals; MSC paracrine layer", competitorNote: "Surface functionalisation approach is superficial; no release kinetics discussed" },
      ],
    },
  },

  // ── PROMPT 2 ─────────────────────────────────────────────
  {
    id: "p2",
    label: "Climate Tech Strategy",
    fullText:
      "Propose a first-principles innovation strategy for a climate-tech startup targeting industrial decarbonisation in cement manufacturing.",
    answers: {
      dvnc: `Cement is responsible for ~8% of global CO₂ emissions, making it among the highest-priority decarbonisation targets. The key insight is that cement emissions are structural: roughly 60% come from calcination (limestone → lime + CO₂), not combustion — meaning energy transition alone cannot solve the problem. A first-principles strategy must therefore attack chemistry, not just energy inputs.

Core innovation thesis: replace or intercept the calcination reaction rather than abating its emissions downstream.

Three-layer strategy:

1. Alternative binder chemistry (5–10 year horizon): Develop supplementary cementitious materials (SCMs) — calcined clays (LC³ process), geopolymers from industrial slag, or magnesium silicate-based cements — that require no calcination. The LC³ route is the most deployment-ready: it uses kaolin clay (widely available) calcined at 700–800°C vs 1450°C for clinker, cutting process emissions by 30–40% with no new infrastructure.

2. Carbon mineralisation in-process (3–7 year horizon): Inject CO₂ during concrete mixing (CarbonCure-style, but applied at the clinker stage for new entrants). CO₂ reacts with calcium silicate hydrates, becoming permanently mineralised. Net effect: negative emissions for each tonne of concrete, turning the CO₂ liability into a product feedstock.

3. Electrification + carbon capture at the kiln (10–15 year horizon): Electric kilns remain pre-commercial but are thermodynamically feasible. Pair with point-source oxy-fuel combustion to produce a concentrated CO₂ stream suitable for geological storage or utilisation. This is the only route to full decarbonisation of clinker-dependent production.

Go-to-market priority: target ready-mix concrete producers in markets with existing carbon pricing (EU, UK, Canada) where the cost delta between conventional and low-carbon cement is already within the purchasing tolerance. Avoid greenfield cement plant entry — retrofit is 3× faster to revenue.`,

      chatgpt: `To decarbonise cement manufacturing, a climate-tech startup should focus on the following strategic areas:

Carbon capture and storage (CCS): Cement plants are point-source emitters with relatively high CO₂ concentrations in flue gas, making them suitable candidates for post-combustion capture. Partnering with existing cement producers to retrofit capture equipment is a lower capital path than building new plants.

Alternative materials: Developing supplementary cementitious materials (SCMs) from industrial by-products like fly ash and slag can reduce the clinker-to-cement ratio and lower emissions per tonne of cement produced.

Process electrification: As the electricity grid decarbonises, replacing fossil fuel kilns with electric alternatives becomes increasingly attractive. Microwave or plasma heating technologies are being researched for this application.

The startup should prioritise markets with strong carbon pricing signals, build partnerships with established cement producers rather than competing directly, and focus on solutions that can be retrofitted to existing infrastructure to accelerate commercial deployment.`,

      claude: `Cement decarbonisation is genuinely difficult because approximately 60% of emissions are process-based (calcination of limestone) rather than energy-based, meaning grid decarbonisation alone cannot solve it.

A first-principles approach should start by disaggregating the emission sources: process CO₂ from calcination (~530 kg CO₂/tonne clinker), combustion CO₂ from kiln firing (~330 kg CO₂/tonne clinker), and indirect emissions from electricity and transport (~90 kg CO₂/tonne clinker). This disaggregation immediately suggests different intervention points for each stream.

For process emissions: the most tractable near-term strategy is clinker substitution using calcined clays or industrial alkali-activated materials. The LC³ (Limestone Calcined Clay Cement) system is the most promising, combining 50% clinker, 30% calcined clay, 15% limestone, and 5% gypsum to achieve 30–40% reduction with existing plant infrastructure.

For combustion emissions: alternative fuels (waste-derived, biomass) address the combustion fraction. Electrification is possible in principle but electric kilns at cement scale remain pre-commercial.

For residual emissions: geological carbon capture is likely necessary for full decarbonisation. The startup's role could be in modular capture units designed specifically for cement plant flue gas composition.

GTM recommendation: focus on markets with existing carbon pricing. The EU Emissions Trading System already makes LC³-type approaches economically competitive in some contexts.`,

      gemini: `A climate-tech startup targeting cement decarbonisation should consider the following innovation strategy:

The cement sector faces a dual challenge: high-temperature process heat requirements and unavoidable process CO₂ from limestone calcination. Both must be addressed simultaneously.

Key innovation areas include: developing novel binder systems using abundant low-carbon materials; applying carbon mineralisation to beneficially use captured CO₂ within concrete products; and pursuing digital optimisation to reduce material intensity in construction applications.

The business model should focus on licensing technology to existing producers rather than vertical integration into manufacturing. This reduces capital requirements and accelerates deployment across the existing asset base.

Market entry strategy: begin with niche high-value applications (precast products, infrastructure projects with green procurement requirements) before targeting bulk commodity cement markets.`,
    },
    scores: {
      chatgpt: [
        { dvnc: "Very High", competitor: "Moderate", dvncNote: "First-principles disaggregation of emission sources drives novel intervention sequencing", competitorNote: "Standard CCS + SCM + electrification framing; no structural insight" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Identifies calcination as structural (not combustion) problem — a key mechanistic distinction", competitorNote: "Lists solutions without explaining why calcination makes energy transition insufficient" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Three-horizon strategy with explicit timeline ranges and technical readiness levels", competitorNote: "Retrofit recommendation is correct but undeveloped; no risk differentiation" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "LC³ route uses widely available kaolin; mineralisation converts liability to feedstock", competitorNote: "Fly ash and slag SCMs are established; no novel mechanism proposed" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "LC³ and CarbonCure-style mineralisation are commercially demonstrated and testable", competitorNote: "Retrofit CCS is testable but timeline and cost barriers are understated" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Retrofit-first approach and existing carbon markets create clear scaling pathway", competitorNote: "Partnership model is sensible but generic; no scaling mechanism described" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Specific temperature targets, market entry criteria, and horizon timelines all given", competitorNote: "Four strategic areas named but none developed to actionable level" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Tonnage figures, temperature comparisons, and emission fractions all grounded in data", competitorNote: "Domain framing is correct but lacks quantitative grounding throughout" },
      ],
      claude: [
        { dvnc: "Very High", competitor: "High",     dvncNote: "Three-horizon integrated strategy vs single-layer disaggregation approach", competitorNote: "Emission source disaggregation is genuinely insightful and structurally sound" },
        { dvnc: "High",      competitor: "High",     dvncNote: "Calcination-as-structural-problem framing is consistent and drives all recommendations", competitorNote: "Same core mechanistic insight reached independently; well-argued" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "GTM specifics (ready-mix, retrofit, carbon pricing markets) reduce execution risk", competitorNote: "Modular capture unit concept is interesting but underdeveloped" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "Mineralisation feedstock conversion is a lower-risk mechanism than geological storage", competitorNote: "LC³ system detail is accurate; geological CCS dependency is a risk not resolved" },
        { dvnc: "High",      competitor: "High",     dvncNote: "All three horizons have commercially demonstrated precedents cited", competitorNote: "LC³ recommendation is well-grounded; electric kiln caveat is honest" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Retrofit-first + carbon market targeting creates fastest path to revenue", competitorNote: "EU ETS context is correct; no business model or revenue pathway developed" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Temperature targets, emission splits, and market entry criteria all quantified", competitorNote: "GTM recommendation present but lacks specificity on entry point or timing" },
        { dvnc: "High",      competitor: "High",     dvncNote: "Specific kg CO₂/tonne figures, temperature comparisons, and market data cited", competitorNote: "Emission source quantification (530/330/90 kg) is accurate and useful" },
      ],
      gemini: [
        { dvnc: "Very High", competitor: "Moderate", dvncNote: "Three-horizon framing with explicit intervention logic at each layer", competitorNote: "Correct framing of dual challenge but no differentiated innovation approach" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Mineralisation-as-feedstock is a specific mechanistic inversion of the CO₂ problem", competitorNote: "Innovation areas listed without mechanistic explanation of how they work" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Retrofit priority and specific market targeting reduce execution risk significantly", competitorNote: "Licensing model reduces capital risk but no implementation pathway given" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "LC³ calcination temperature differential (700 vs 1450°C) is a well-validated mechanism", competitorNote: "Novel binder systems mentioned but no specific chemistry or risk described" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Each horizon cites commercially demonstrated precedents with known timelines", competitorNote: "No validation criteria, timelines, or milestones provided for any innovation area" },
        { dvnc: "High",      competitor: "High",     dvncNote: "Carbon pricing markets provide near-term revenue without greenfield capital", competitorNote: "Licensing + niche market entry is a reasonable and scalable approach" },
        { dvnc: "High",      competitor: "Very Low", dvncNote: "Specific temperature figures, market entry criteria, and horizon timelines all present", competitorNote: "Strategy is directionally correct but entirely non-specific throughout" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Tonnage data, temperature specifics, and market pricing context all grounded in evidence", competitorNote: "Domain framing is accurate but no quantitative detail provided anywhere" },
      ],
    },
  },

  // ── PROMPT 3 ─────────────────────────────────────────────
  {
    id: "p3",
    label: "AI Governance Framework",
    fullText:
      "Design an accountability framework for conversational AI deployed in public service delivery for low-literacy populations in the Global South.",
    answers: {
      dvnc: `The core challenge is an accuracy-trust paradox: in low-literacy, high-stakes public service contexts, users who cannot independently verify AI outputs tend to extend higher trust to authoritative-sounding systems regardless of accuracy. Standard accountability frameworks — which assume users can evaluate and contest outputs — do not translate.

A fit-for-purpose framework requires three structural departures from Western AI governance defaults:

1. Proxy accountability, not individual redress
In low-literacy contexts, individual grievance mechanisms (complaints portals, audit logs, rights to explanation) are inaccessible by design. Accountability must be mediated through trusted local intermediaries — community health workers, village-level entrepreneurs, NGO field staff — who can aggregate anomalies, escalate on behalf of users, and provide the human verification layer that the user cannot provide for themselves. Framework design must mandate and fund this intermediary tier, not treat it as optional.

2. Outcome auditing over process auditing
Existing frameworks (EU AI Act, NIST AI RMF) audit training data, model cards, and deployment processes. For public service AI in LMIC contexts, the relevant accountability question is: did the user receive the correct entitlement, benefit, or information? Outcome auditing requires linking AI interaction logs to downstream administrative data (benefit disbursement, crop advisory outcomes, healthcare decisions) — technically harder but the only measure that reflects actual harm or benefit.

3. Differential error accountability
Not all errors are equal. A framework must classify error types by harm asymmetry: false negatives on benefit eligibility cause direct deprivation; false positives on medical advice can cause physical harm. Accountability obligations — escalation speed, compensation, system suspension triggers — should be graduated by error type, not applied uniformly.

Governance structure: a tripartite oversight body (government deployer + civil society representative + technical auditor) with mandatory representation from affected communities, operating on 6-month outcome audit cycles. Critically, the technical auditor must be independent of both the deployer and the AI vendor.`,

      chatgpt: `An accountability framework for conversational AI in public service delivery should address several key dimensions:

Transparency: AI systems should clearly identify themselves as AI to users. Plain language disclosures, adapted for low-literacy contexts through visual or audio formats, should explain what the system can and cannot do.

Human oversight: All high-stakes decisions (benefit eligibility, medical referrals) should require human review before implementation. Clear escalation pathways should exist for cases where the AI cannot resolve a query.

Data governance: User data collected through public service AI interactions should be governed under strong data protection principles, with particular attention to consent mechanisms appropriate for low-literacy users.

Redress mechanisms: Users should have accessible ways to challenge AI decisions. This may require alternative formats (oral complaints, community representatives) given literacy constraints.

Independent auditing: Regular third-party audits of AI system performance, with results published in accessible formats and shared with civil society organisations.

The framework should be developed with meaningful participation from affected communities and should be adapted to local legal and institutional contexts rather than simply transplanting frameworks developed for high-income country settings.`,

      claude: `This is an area where standard AI governance frameworks are genuinely inadequate, and the inadequacy has specific structural causes worth naming.

Most existing frameworks — the EU AI Act, NIST AI RMF, even the UNESCO Recommendation on AI Ethics — assume a literate user who can: read disclosures, understand probabilistic uncertainty, access formal complaints mechanisms, and exercise rights to explanation. None of these assumptions hold for the target population.

A fit-for-purpose accountability framework needs to address:

Verification asymmetry: When users cannot verify AI outputs, accuracy errors become invisible harms. The framework must mandate outcome-linked monitoring — connecting AI interaction data to downstream outcomes (was the benefit received? was the medical advice followed safely?) — rather than relying on user-reported errors.

Representation in governance: Affected communities should have formal roles in oversight bodies, not just consultation rights. This requires investing in digital literacy and governance capacity among community organisations, not just designing representation structures.

Intermediary accountability: Local intermediaries (health workers, extension agents) who help users interact with AI systems become de facto accountability actors. Their role, liability, and support should be formally recognised in the framework.

Error harm classification: A graduated approach to error consequences, where errors in high-stakes domains (healthcare, legal entitlements) trigger faster escalation and stronger remediation than errors in low-stakes domains.

The framework should be piloted with civil society partners before deployment and should have a mandatory review cycle tied to outcome data, not just process compliance.`,

      gemini: `Designing an accountability framework for conversational AI in public service delivery for low-literacy populations requires careful consideration of several factors.

Context-appropriate design: The framework must account for low literacy rates, limited digital literacy, diverse languages, and varying levels of infrastructure. Voice-based interfaces may be more appropriate than text in some contexts.

Multi-stakeholder governance: Government agencies, civil society organisations, community representatives, and technical experts should all have roles in oversight. International organisations with experience in development contexts can provide additional expertise.

Accessible accountability mechanisms: Traditional accountability tools (written complaints, online portals) will not work. Community-based mechanisms, radio broadcasts for public reporting, and mobile-based feedback systems should be explored.

Capacity building: Local civil servants and community organisations need training to understand and oversee AI systems. This is a prerequisite for meaningful accountability.

Iterative deployment: AI systems should be piloted in limited contexts before wider rollout, with accountability mechanisms tested and refined based on experience.

International cooperation: Given that many Global South governments lack regulatory capacity for AI oversight, international frameworks and technical assistance may be needed to fill gaps.`,
    },
    scores: {
      chatgpt: [
        { dvnc: "Very High", competitor: "Moderate", dvncNote: "Accuracy-trust paradox framing identifies a structural failure in standard frameworks", competitorNote: "Standard governance pillars applied to a non-standard context; no structural critique" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Proxy accountability and outcome auditing are mechanistically distinct from Western defaults", competitorNote: "Redress and oversight mechanisms listed but not designed for the specific population" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Tripartite oversight with independent auditor reduces regulatory capture risk", competitorNote: "Community participation mentioned but implementation mechanism not specified" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "Outcome-linked monitoring is technically harder but removes reliance on user self-reporting", competitorNote: "Oral complaints mechanism is correct direction but not operationalised" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Intermediary tier and outcome auditing are both implementable with existing field infrastructure", competitorNote: "Framework components are each testable; no integrated pilot design suggested" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Intermediary-mediated model scales through existing health/extension worker networks", competitorNote: "Community representative model scales if civil society infrastructure exists" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "6-month audit cycles, harm classification tiers, and suspension triggers all specified", competitorNote: "Framework dimensions named but none operationalised with specific mechanisms" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Grounded in specific failure modes of low-literacy, high-trust contexts from field research", competitorNote: "Literacy constraint acknowledged but not used to redesign any specific mechanism" },
      ],
      claude: [
        { dvnc: "Very High", competitor: "High",     dvncNote: "Accuracy-trust paradox + three structural departures form a coherent novel framework", competitorNote: "Explicit critique of existing frameworks (EU AI Act, NIST, UNESCO) is structurally honest" },
        { dvnc: "High",      competitor: "High",     dvncNote: "Differential error accountability by harm asymmetry is a specific mechanistic contribution", competitorNote: "Verification asymmetry concept is well-articulated and mechanistically sound" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Tripartite body with vendor-independent auditor reduces known capture failure modes", competitorNote: "Governance structure implied but not specified; no oversight body design given" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "Outcome-linked monitoring removes dependence on inaccessible individual redress", competitorNote: "Outcome-linked monitoring also recommended; no mechanism for data linkage given" },
        { dvnc: "High",      competitor: "High",     dvncNote: "Each mechanism maps to existing field infrastructure; no new institutions required", competitorNote: "Civil society pilot recommendation is testable; review cycle correctly tied to outcomes" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Intermediary networks (health workers, NGOs) are already at scale in target markets", competitorNote: "Graduated error consequences scale naturally; no explicit scaling pathway described" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Suspension triggers, audit cycle frequency, and harm tiers all quantified", competitorNote: "Four framework components present but none have specific implementation detail" },
        { dvnc: "High",      competitor: "High",     dvncNote: "400K+ chatbot log analysis and Samagra field deployment inform specific design choices", competitorNote: "Structural causes of framework inadequacy correctly identified and named" },
      ],
      gemini: [
        { dvnc: "Very High", competitor: "Low",      dvncNote: "Three structural departures from Western defaults constitute a genuinely novel framework", competitorNote: "Standard development sector checklist; no innovation in framework design" },
        { dvnc: "High",      competitor: "Very Low", dvncNote: "Proxy accountability replaces inaccessible individual redress with a working mechanism", competitorNote: "Voice interfaces and multi-stakeholder governance are correct but generic" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Independent auditor separation from both deployer and vendor is a specific design safeguard", competitorNote: "Multi-stakeholder governance recommended but no structure or safeguards given" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "Outcome auditing avoids the self-reporting failure mode central to this context", competitorNote: "Iterative deployment is low-risk but does not resolve the accountability gap" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Intermediary tier builds on validated field infrastructure across South Asia and Africa", competitorNote: "Pilot recommendation is sound but no success criteria or review mechanism given" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Framework scales through existing community health and extension worker networks", competitorNote: "International cooperation model can scale but creates dependency risk" },
        { dvnc: "High",      competitor: "Very Low", dvncNote: "Audit frequency, harm tiers, and governance body composition all explicitly defined", competitorNote: "Six areas named but none have operational detail, metrics, or implementation steps" },
        { dvnc: "High",      competitor: "Low",      dvncNote: "Accuracy-trust paradox grounded in specific empirical finding from 400K+ interaction logs", competitorNote: "Low-literacy context acknowledged but not used to redesign any specific mechanism" },
      ],
    },
  },
];
