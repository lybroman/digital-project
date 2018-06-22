<template>
  <div>
    <div class="container">
      <section class="section" style="text-align: left; padding-left:0px">
        <div class="container">
          <h1 class="title">{{ $t('service.title') }}</h1>
        </div>
      </section>
    </div>
    <div class="container" align="left">
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border" v-html="$t('homePage.section1')" style="width:19%">
      </div >
      <div v-else class="box box_addon_default box_left_border" v-html="$t('homePage.section1')" style="width:24%">
      </div>
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border" v-html="$t('homePage.section2')" style="width:28%">
      </div >
      <div v-else class="box box_addon_default box_left_border" v-html="$t('homePage.section2')" style="width:24%">
      </div>
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border" v-html="$t('homePage.section3')" style="width:24%">
      </div >
      <div v-else class="box box_addon_default box_left_border" v-html="$t('homePage.section3')" style="width:24%">
      </div>
      <div v-if="this.$i18n.locale=='en-US'" class="box box_addon_default box_left_border box_right_border" v-html="$t('homePage.section4')" style="width:28%">
      </div>
      <div v-else class="box box_addon_default box_left_border box_right_border" v-html="$t('homePage.section4')" style="width:24%">
      </div>
    </div>
    <br/>
    <br/>

    <!--div class="container" style="padding:0px 10% 0px 10%">
      <figure class="image">
        <img src="../assets/service.png">
      </figure>
    </div-->
    <div class="container" align="left">
      <p>CONSULTANCY SERVICE{{ $t('service.t0') }}<br/><br/>
      DESIGN MANAGEMENT<br/>
      THE MAIN OBJECTIVE OF THE DESIGN CO-ORDINATION AND MANAGEMENT DURING THE SERVICE IS TO ORGANISE, MAINTAIN AND CONTROL AN EFFECTIVE COMMUNICATION WITH PROMPT INFORMATION FLOW BETWEEN CLIENT, OVERSEAS DESIGNER, LDI AND CONTRACTOR(S), THEREBY ACHIEVING THE TARGETS ON TIME UNDER BUDGET.
      <br/><br/><br/>
      PROJECT MANAGEMENT{{ $t('service.t1') }}<br/>
      THE REQUIREMENT OF THE PROJECT MANAGER (PROJECT MANAGEMENT) IS TO ACT AS THE SINGLE POINT OF CONTACT ON BEHALF O AND TO REPRESENT CLIENT TO MANAGE AND CONTROL THE RISKS INHERENT IN THE PROJECT PROCESS THROUGHOUT ALL PHASES OF THE PROJECT OR AS REQUIRED IN THE RFP.
      <br/><br/><br/>
      PROJECT CONTROLS{{ $t('service.t2') }}<br/>
      THE PROJEC CONTROLS IS A SUBSET OF PROJECT MANAGEMENT WITH THE PRIMARY FOCUS OF MANAGING THE PROJECT COST AND SCHEDULE.
      <br/><br/><br/>
      QUANTITY SURVEYING & COST MANAGEMENT{{ $t('service.t3') }}<br/>
      THE QUANTITY SURVEYOR IS TASKED WITH CONTROLLING PROJECT COST BY ACCURATE MEASUREMENT OF THE WORKS REQUIRED AND APPLICATION OF EXPERT KNOWLEDGE OF COSTS OF LABOUR, MATERIALS AND PLANT REQUIRED." THE PURPOSE OF COST MANAGEMENT IS TO PROVIDE INDEPENDENT, OBJECTIVE, ACCURATE, AND RELIABLE CAPITAL AND OPERATING COST ASSESSMENTS USABLE FOR INVESTMENT FUNDING AND PROJECT COST CONTROL AS WELL AS PLANNING.
      <br/><br/><br/>
      VALUE ENGINEERING ANALYSIS{{ $t('service.t4') }}<br/>
      THE OBJECTIVE OF VALUE ENGINEERING ANALYSIS APPROACH IS TO OFFER A STRATEGIC VALUE ENGINEERING MANAGEMENT PROCESS, OF WHICH, IS DEDICAED TO ASSIST WITH THE IMPROVEMENT OF VALUE OBTAINED IN CAPTIAL EXPENDITURE THROUGH PARTICIPATORY WORKSHOPS BY CHALLENGING OPTION AND DESIGN ASSUMPTIONS TO ENCOURAGE CREATIVE AND LATERAL CONSIDERATION FOR BETTER VALUE SOLUTIONS, ESPECIALLY DURING THE DESIGN PROCESS.
      <br/><br/><br/>
      TECHNICAL DUE DELIGENCE{{ $t('service.t5') }}<br/>
      THE TECHNICAL DUE DELIGENCE INVESTIGATION SERVICE IS TO PROVIDE WITH THE PROCESS OF SYSTEMATIC REVIEW, ANALYSIS AND DISCOVERY IN WHICH A PROSPECTIVE PURCHASE, OCCUPIER OR FINANCIER OF PROPERTY GATHERS INFORMATION ABOUT THE PHYSICAL CHARACTERISTICS OF THE PROPERTY OR ALERTS ISSUES THAT WILL AFFECT THE PROPERTY AS AN INVESTMENT AND/OR AS AN ASSET IN ORDER TO ENABLE THE PURCHASER TO MAKE AN INFORMED ASSESSMENT OF THE RISKS INHERENT IN THE ACQUISITION.
      <br/><br/><br/>
      SITE SELECTION & LAND ACQUISITION{{ $t('service.t6') }}<br/>
      THE SITE SELECTION & LAND ACQUISITION PROCESS IS "A DETAILED EVALUATION OF PROJECT REQUIREMENTS WHICH ARE THEN MEASURED AGAINST THE MERITS OF POTENTIAL LOCATIONS. THE PROCESS TYPICALLY INCLUDES SELECTING AND EVALUATING COMMUNITIES, REAL ESTATE SITE ANALYSIS AND ACQUISITION, AND MAY INCLUDE NEGOTIATING TAX INCENTIVES".
      <br/><br/><br/>
      AUTHORITY PERMIT & APPROVALS{{ $t('service.t7') }}<br/>
      IN OBEDIENCE TO THE ROLE OF THE CLIENT IN THE PERMIT AND AUTHORITY APPROVALS AS DESCRIBED IN THE RFP, THIS SERVICE IS TO SUPPORT THE CLIENT IN THE PROCESS TO IDENTIFY AND OBTAIN ALL NECESSARY PERMITS AND AUTHORITY APPROVALS.
      <br/><br/><br/>
      PROJECT DIAGNOSIS ADVISORY{{ $t('service.t8') }}<br/>
      THE PURPOSE OF PROJECT DIAGNISIS ADVISORY SERVICE IS TO ACT AS A TROUBLESHOOTER WITH SOLUTIONS, WHILE THE PROJECT IS SUFFERING FROM SIGNIFICANT CHALLENGES OR DIFFICULTIES DURING THE PROCESS OF PROJECT LIFE CYCLE,  FROM A PERSPECTIVE OF 2nd PARTY  DIAGNOSIS CONSULTANT.
      <br/><br/><br/>
      BIM & BIM⁺ TECHNOLOGY SERVICE{{ $t('service.t9') }}<br/>
      BUILDING INFORMATION MODELING (BIM) IS "A DIGITAL REPRESENTATION OF PHYSICAL AND FUNCTIONAL CHARACTERISTICS OF A FACILITY. A BIM IS A SHARED KNOWLEDGE RESOURCE FOR INFORMATION IN TERMS OF A FACILITY FORMING A RELIABLE BASIS FOR DECISIONS DURING ITS LIFE-CYCLE; DEFINED AS EXISTING FROM EARLIEST CONCEPTION TO DEMOLITION."
      <br/><br/><br/>
      </p>
      <figure class="image" style="width:70%; margin:0 auto">
        <img src="../assets/service-1.png">
      </figure>
      <br/><br/><br/>
      <p>
      FOR ABOVE PROFESSIONALS INVOLVED IN A PROJECT, BIM IS AN INTELLIGENT 3D MODEL-BASED PROCESS AND A COMMUNICATION HUB THAT ENABLES SUCH A VIRTUAL INFORMATION MODEL WITH INSIGHTS TO BE SHARED FROM THE DESIGN TEAM (ARCHITECTS, SURVEYORS, STRUCTURAL, MEP, BUILDING SERVICE AND OTHER ENGINEERS) TO THE CONTRACTORS AND THEN ON TO THE OWNER/FM OPERATOR; EACH PROFESSIONAL ADDS DISCIPLINE-SPECIFIC DATA TO THE SINGLE SHARED MODLE. THIS REDUCES INFORMATION LOSSES THAT TRADITIONALLY OCCURRED WHILE A NEW TEAM TAKES 'OWNERSHIP' OF THE PROJECT, AND  PROVIDES MORE EXTENSIVE INFORMATION TO OWNERS OF COMPLEX STRUCTURES.
      <br/><br/><br/>
      APPLICATION OF BIM (BIM & BIM⁺) GOES BEYONG THE PLANNIN AND DESIGN PHASE OF THE PROJECT, EXTENDING THROUGHOUT THE BUILDIN LIFE CYCLE, SUPPORTING PROCESSES INCLUDIN COST MANAGEMENT, CONSTRUCTION MANAGEMENT, PROJECT MANAGEMENT AND FACILITY OPERATION.
      <br/><br/><br/>
      </p>
      <figure class="image" style="width:70%; margin:0 auto">
        <img src="../assets/service-2.png">
      </figure>
      <br/><br/><br/>
      <ul style="list-style-type:square">
        <li><p>IN 3D COMPUTER GRAPHICS, 3D MODELING IS THE PROCESS OF DEVELOPING A MATHEMATICAL REPRESENTATION OF AN SURFACE OF AN OBJECT (EITHER INANIMATE OR LIVINGG) IN THREE DIMENSIONS VIA SPECIALISED SOFTWARE.
        </p></li><br/><br/><br/>
        <div class="columns">
          <div class="column">
            <p>3D - BIM</p>
          </div>
          <div class="column">
            <ul style="list-style-type:disc; text-align: left;">
              <li class="sub_item">DESIGN MODELS</li>
                <p class="sub_item">- GEOMETRY</p>
                <p class="sub_item">- SPATIAL DATA (FROM GEOGRAPHIC INFORMATION SYSTEMS)</p>
                <p class="sub_item">- SPECIFICATIONS</p>
                <p class="sub_item">- AESTHETICS (EG. COLOR)</p>
                <p class="sub_item">- THERMAL PROPERTIES</p>
                <p class="sub_item">- ACOUSTIC PROPERTIES</p>
              <li class="sub_item">ANIMATIONS, RENDERINGS, WALKTHROUGHS</li>
              <li class="sub_item">EXISTING CONDITIONS MODLES</li>
                <p class="sub_item">- LASER SCANNING</p>
                <p class="sub_item">- GROUND PENERATING RADAR (GPR) OR GEORADAR CONVERSIONS</p>
              <li class="sub_item">SAFETY & LOGISTICS MODLES</li>
              <li class="sub_item">BIM DRIVEN PREFABRICATION</li>
              <li class="sub_item">LASER ACCURATE BIM DRIVEN FIELD LAYOUT</li>
            </ul>
          </div>
        </div>
        <br />
        <p>
        THE 3D - BIM VISUALISATION CAPABILITIES PROVIDE ALL INVOLVED PROFESSIONALS TO NOT ONLY PREVIEW  THE PROJECT IN THREE-DIMENTION BASIS AHEAD OF THE CEREMONY OF GROUNG-BREAKING, BUT ALSO TO AUTOMATICALLY UPDATE THEIR VIEWS THROUGH THE PROJECT LIFE CYCLE, FROM INITIAL CONCEPTION TO DEMOLITION. 3D - BIM ASSISTS THE PROFESSIONALS TO MANAGE THEIR MULTI-DISCIPLINARY COLLABORATION MORE EFFECTIVELY AND PROACTIVELY IN MODELING AND ANALYSING COMPLEX SPATIAL AND STRUCTURAL ISSUES. 3D THUS PROVIDES THE HIGHEST ROI ON BIM PROJECTS WITH GREATLY IMPROVED WORKFLOWS FOR DESIGN AND COORDINATION.
        <br/><br/><br/>
        </p>
        <li><p>4D - BIM, REFERS TO THE INTELLIGENT LINKING OF INDIVIDUAL 3D CAD COMPONENTS OR ASSEMBLIES WITH TIME- OR SCHEDULE-RELATED INFORMATION. 4D IS 3D PLUS SCHEDULE (TIME).
        </p></li><br/><br/>
        <p>
        THE CONSTRUCTION OF THE 4D MODELS ENABLES THE VARIOUS PARTICIPANTS (FROM ARCHITECTS, DESINERS, CONTRACTORS TO CLIENTS) OF A CONSTRUCTION PROJECT, TO VISUALISE THE ENTIRE DURATION OF A SERIES OF EVENTS AND DEMONSTRATE THE PROGRESS OF CONSTRUCTION ACTIVITIES THROUGH THE LIFETIME OF THE PROJECT. THIS BIM-CENTRIC APPROACH TOWARDS PROJECT MANAGEMENT TECHNIQUE HAS A VERY HIGH POTENTIAL TO IMPROVE THE PROJECT MANAEMENT AND DELIVERY OF CONSTRUCTION PROJECT, OF ANY SIZE OR COMPLEXITY.
        </p><br/><br/><br/>
        <div class="columns">
          <div class="column">
            <p>4D - BIM  SCHEDULEING</p>
          </div>
          <div class="column">
            <ul style="list-style-type:disc; text-align: left;">
              <li class="sub_item">PROJECT PHASING SIMULATIONS</li>
              <li class="sub_item">LEAN SCHEDULING</li>
                <p class="sub_item">- LAST PLANNER</p>
                <p class="sub_item">- JUST IN TIME (JIT) EQUIPMENT DELIVERIES</p>
                <p class="sub_item">- JUST IN TIME (JIT) EQUIPMENT DELIVERIES</p>
              <li class="sub_item">VISUAL VALIDATION FOR PAYMENT APPROVAL </li>
            </ul>
          </div>
        </div>
        <p>
        4D - BIM CAN BE USED TO OBTAIN ACCURATE PROGRAMME INFFORMATION AND VISUALISATIONS SHOWING HOW THE PROJECT WILL DEVELOP SEQUENTIALLY. 4D MODELS PROVIDE METHODS FOR MANAGING AND VISUALISING ACTUAL STATUSINFORMATION, DYNAMIC IMPACTS FROM SITE DURING THE CONSTRUCTION COURSE OF PROJECT.
        <br/><br/><br/>
        </p>
        <li><p>5D - BIM IS A TERM USED IN THE CAD AND CONSTRUCTION INDUSTRIES, AND REFERS TO THE INTELLIGENT LINKING OF INDIVIDUAL 3D CAD COMPONENTS OR ASSEMBLIES WITH SCHEDULE (TIME-4D BIM) CONSTRAINS AND THEN WITH COST-RELATED INFORMATION.
        </p></li><br/><br/>
        <p>
        THE CREATION OF 5D MODELS ENABLES THE VARIOUS PARTICIPATES (FROM ARCHITECTS, DESINERS, CONTRACTORS TO CLIENTS) OF A CONSTRUCTION PROJECT TO VISUALISE THE PROGRESS OF CONSTRUCTION ACTIVITIES AND ITS RELATED COST OVER TIME. THIS BIM-CENTRIC PROJECT MANAGEMENT TECHNIQUE HAS POTENTIAL TO IMPROVE MANAGEMENT AND DELIVERY OF PROJECTS OF ANY SIZE OR COMPLEXITY.
        <br/><br/><br/>
        </p>
        <div class="columns">
          <div class="column">
            <p>5D - BIM  ESTIMATING</p>
          </div>
          <div class="column">
            <ul style="list-style-type:disc; text-align: left;">
              <li class="sub_item">REAL TIME CONCEPTUAL MODLING AND COST PLANNING (DProfiler)</li>
              <li class="sub_item">QUANTITY EXTRACTION TO SUPPORT DETAILED COST ESTIMATES</li>
              <li class="sub_item">TRADE VERIFICATIONS FROM FABRICATION MODLES</li>
                <p class="sub_item">- STRUCTURAL STEEL</p>
                <p class="sub_item">- REBAR</p>
                <p class="sub_item">- MECHNICAL/PLUMBING</p>
                <p class="sub_item">- ELECTRICAL</p>
              <li class="sub_item">VALUE ENGINEERING</li>
                <p class="sub_item">- WHAT-IF SCENARIOS</p>
                <p class="sub_item">- VISUALISATIONS </p>
                <p class="sub_item">- QUANTITY EXTRACTIONS</p>
              <li class="sub_item">PREFABRICATION SOLUTIONS </li>
                <p class="sub_item">- EQUIPMENT ROOMS </p>
                <p class="sub_item">- MEP SYSTEMS</p>
                <p class="sub_item">- MULTI-TRADE PREFABRICATION</p>
                <p class="sub_item">- UNIQUE ARCHITECTURAL AND STRUCTURAL ELEMENTS</p>
            </ul>
          </div>
        </div>
        <p>
        5D - BIM IS USED FOR BUDGET TRACKING AND COST ANALYSIS RELATED ACTIVITIES. THE 5D MODELS ASSOCIATED WITH 3D AND 4D (TIME) ENABLES PROFESSIONALS TO VISUALISE THE PROGRESS OF THEIR ACTIVITIES AND RELATED COSTS OVER TIME.
        <br/><br/>
        OUR EXPERTISE IN MODELIN ALLOWS US TO GET ACCURATE QUANTITIES WITH OR WITHOUT USE OF SPECIALTY SOFTWARE ALLOW US TO ASSOCIATE   COST DATA TO BE LINKED TO OBJECTS TO FACILITATE BUDGET AND COST MANAGEMENT.
        <br/><br/><br/>
        </p>
        <li><p>6D - BIM, A TERM WIDELY USED IN THE CONSTRUCTION INDUSTRIES, REFERS TO THE INTELLIGENT LINKING OF INDIVIDUAL 3D CAD COMPONENTS OR ASSEMBLIES WITH ALL ASPECTS OF PROJECT LIFE-CYCLE MANAGEMENT INFORMATION.
        </p></li><br/><br/><br/>
        <div class="columns">
          <div class="column">
            <p>6D - BIM  SUSTAINABILITY</p>
          </div>
          <div class="column">
            <ul style="list-style-type:disc; text-align: left;">
              <li class="sub_item">CONCEPTURAL ENERGY ANALYSIS VIA Dprofiler</li>
              <li class="sub_item">DETAILED ENERGY ANALYSIS VIA ECO-TECH</li>
              <li class="sub_item">SUSTAINABLE ELEMENT TRACKING</li>
              <li class="sub_item">LEED TRACKING</li>
            </ul>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p>6D - BIM  FACILITY MANAGEMENT APPLICATIONS</p>
          </div>
          <div class="column">
            <ul style="list-style-type:disc; text-align: left;">
              <li class="sub_item">LIFE CYCLE BIM STRATEGIES</li>
              <li class="sub_item">BIM AS-BUILTS</li>
              <li class="sub_item">TBIM EMBEDED O&M MANUALS</li>
              <li class="sub_item">COBie DATA POPULATION AND EXTRACTION </li>
              <li class="sub_item">BIM MAINTENANCE PLANS AND TECHNICAL SUPPORT </li>
            </ul>
          </div>
        </div>
        <p>
        THE 6D MODEL IS USUALLY DELIVERED TO THE OWNER ONCE A CONSTRUCTION PROJECT IS FINISHED. THE "AS-BUILT" BIM MODEL IS POPULATED WITH RELEVANT BUILDIN INFORMATION SUCH AS PRODUCT DATA AND DETAILS, MAINTENANCE/OPERATION MANUALS, CUT SHEET SPECIFICATIONS, PHOTOS, WARANTY DATA, WEB LINKS TO PRODUCT ONLINE SOURCES, MANUFACTURER INFORMATION AND CONTACTS, ETC. THIS DATABASE IS MADE ACCESSIBLE TO THE USERS/OWNERS THROUGH A CUSTOMISED PROPRIETARY WEB-BASED ENVIRONMENT.
        <br/><br/>
        MEANWHILE, 6D - BIM TECHNOLOGY CAN BE APPLIED FOR FACILITY ENERGY CONSUMPTION ANALYSIS AND ESTIMATES EARLIER IN THE DESIGN PROCESS, FURTHERMORE, IT ALLOWS FOR MEASUREMENT AND VERIFICATION DURING BUILDING OCCUPATION, AS WELL AS IMPROVED PROCESSES FOR GATHERING LESSONS LEARNED IN HIGH PERFORMANCE FACILITIES, THEREBY TO RESULT IN AN OVERALL REDUCTION OF ENERGY COMSUMPTION.
        <br/><br/>
        BIM DATA PRODUCED DURING THE PROJECT DELIVERY PROCESS SHOULD BE EASILY ACCESSIBLE TO FACILITY  OPERATORS FOR MAINTENANCE. WE ARE THE LEADER IN PROVIDING CUSTOM BIM FM SOLUTIONS.
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style scoped>
  .box_addon_default {
    font-size: 0.65em;
    display:inline-block;
    width:24.0%;
    text-align:left;
    border-radius: 0px;
    box-shadow:none;
    border-style:none none none none;
    padding:2px 0px 2px 9px;
  }
  .box_left_border {
    border-left:solid;
    border-width:1px;
  }
  .box_right_border {
    border-right: solid;
    border-width:1px;
    float:right;
  }
  .box_right_align{
    text-align:right;
    padding-right:15px;
  }
  span:hover{
    cursor:pointer;
  }
  li.sub_item{
    font-size:0.85em;
  }
  .sub_item{
    padding-bottom: 0.75em;
  }
  p.sub_item{
    padding-left:2.5em;
  }
  .container p{
    font-size:0.85em;
  }
</style>
