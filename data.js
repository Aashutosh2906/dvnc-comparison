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

      claude: `This is an interesting materials design challenge. Here's a proposed composite biomaterial:

Base scaffold: A polycaprolactone (PCL) matrix with re-entrant hexagonal auxetic geometry, fabricated via fused deposition modelling. The negative Poisson's ratio (target: −0.2 to −0.4) allows the patch to deform compatibly with myocardial wall motion during systole and diastole.

Conductive component: Graphene oxide (GO) flakes reduced in situ (rGO) during scaffold post-processing, distributed through the PCL matrix at 1–3 wt%. This provides electrical conductivity without compromising mechanical properties significantly. Alternatively, PEDOT:PSS coating applied to scaffold surfaces.

Immunomodulatory component: IL-4 and IL-10 co-loaded into gelatin microspheres (50–150 µm) embedded within the scaffold pores. Dual cytokine loading promotes M2 polarisation more effectively than single cytokine approaches. Release kinetics governed by gelatin crosslink density.

The main fabrication challenge is achieving uniform distribution of conductive fillers within the auxetic geometry without disrupting the precise strut angles that define auxetic behaviour. A two-phase fabrication approach — printing the auxetic scaffold first, then infiltrating with conductive hydrogel — may offer better control than single-step co-printing.

This design addresses mechanical compliance, electrical integration, and immune environment but does not incorporate vascularisation strategies, which would likely be needed for patches thicker than ~200 µm.`,

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
        { dvnc: "Very High", competitor: "High",     dvncNote: "Geometric co-location with deliberate functional decoupling strategy", competitorNote: "Two-phase fabrication insight is genuinely useful but narrowly scoped" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Helical anisotropy replication is a distinct mechanistic contribution", competitorNote: "rGO in situ reduction is interesting but not contextualised for cardiac use" },
        { dvnc: "Medium",    competitor: "Low",      dvncNote: "Interface impedance under wet cycling is the main uncharacterised variable", competitorNote: "Explicitly acknowledges fabrication challenge; lower risk than it appears" },
        { dvnc: "Low",       competitor: "Low",      dvncNote: "Differential wall thickness for sequencing is a known and controllable parameter", competitorNote: "Gelatin crosslink density is well-characterised; predictable release" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Clear cell ratios, surface densities, and layer-level validation targets", competitorNote: "Identifies key limitation (200 µm thickness) but does not resolve it" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "GMP-compatible unit operations throughout the fabrication sequence", competitorNote: "PCL-based scaffold scales well; conductive infiltration step less clear" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "Specific cell ratios, peptide densities, and gradient concentrations given", competitorNote: "Fabrication logic present but no experimental programme or metrics" },
        { dvnc: "High",      competitor: "Moderate", dvncNote: "MSC co-seeding adds paracrine immunomodulatory layer beyond cytokines", competitorNote: "Dual cytokine approach noted; acknowledges vascularisation gap honestly" },
      ],
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
