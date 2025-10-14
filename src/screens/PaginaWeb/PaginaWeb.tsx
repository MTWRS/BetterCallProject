import React from "react";

export const PaginaWeb = (): JSX.Element => {
  return (
    <div className="w-full min-w-[100vw] h-[4936px] relative bg-[#e6e900] overflow-hidden">
      {/* Background contínuo amarelo - cobre toda a página */}
      <div className="absolute inset-0 bg-[#e6e900]" />

      <img
        className="absolute top-[472px] left-0 w-[507px] h-[511px] object-cover"
        alt="Pngwing com"
        src="/pngwing-com-1.png"
      />

      <img
        className="absolute top-2 left-0 w-[100vw] h-[1078px] object-cover"
        alt="Bcs"
        src="/bcs-1.png"
      />

      <img
        className="absolute top-[74px] left-[106px] w-[875px] h-[424px] object-cover"
        alt="Atatsta"
        src="/atatsta-1.png"
      />

      {/* Card IN LEGAL TROUBLE? */}
      <div className="absolute top-[46px] left-[130px] w-[519px] h-[108px] border-0 shadow-none">
        <div className="p-0 w-full h-full relative">
          <img
            className="w-full h-full"
            alt="Rectangle"
            src="/rectangle-2.png"
          />
          <div className="absolute top-[26px] left-[18px] rotate-[-5.56deg] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[40px] tracking-[0] leading-[normal]">
            IN&nbsp;&nbsp;LEGAL TROUBLE?
          </div>
        </div>
      </div>

      {/* Botões reposicionados conforme a imagem */}
  <a href="https://bettercallsaul-contact.com" target="_blank" rel="noopener noreferrer" className="no-underline">
  <div className="absolute top-[500px] left-[600px] w-[270px] h-[70px] bg-black rotate-[-5deg] cursor-pointer transition-colors flex items-center justify-center hover:bg-[#e6e900] group">
    <div className="[font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[30px] tracking-[0] leading-[normal] transition-colors group-hover:text-black">
      CONTACT US
    </div>
  </div>
</a>

<a href="https://bettercallsaul-location.com" target="_blank" rel="noopener noreferrer" className="no-underline">
  <div className="absolute top-[600px] left-[610px] w-[270px] h-[70px] bg-black rotate-[-5deg] cursor-pointer transition-colors flex items-center justify-center hover:bg-[#e6e900] group">
    <div className="[font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[30px] tracking-[0] leading-[normal] transition-colors group-hover:text-black text-center w-full">
      LOCATION
    </div>
  </div>
</a>

<a href="https://bettercallsaul-info.com" target="_blank" rel="noopener noreferrer" className="no-underline">
  <div className="absolute top-[700px] left-[620px] w-[270px] h-[70px] bg-black rotate-[-5deg] cursor-pointer transition-colors flex items-center justify-center hover:bg-[#e6e900] group">
    <div className="[font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[30px] tracking-[0] leading-[normal] transition-colors group-hover:text-black">
      MORE INFO.
    </div>
  </div>
</a>

      {/* Card LAW AND SAUL: */}
      <div className="absolute top-[1131px] left-[750px] w-[521px] h-[148px] border-0 shadow-none">
        <div className="p-0 w-full h-full relative">
          <img
            className="w-full h-full"
            alt="Rectangle"
            src="/rectangle-6.svg"
          />
          <div className="absolute top-[44px] left-[20px] rotate-[-5.56deg] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[40px] tracking-[0] leading-[normal]">
            LAW AND SAUL:
          </div>
        </div>
      </div>

      {/* Card "Speedy Justice For You!" CORRIGIDO */}
      <div className="absolute top-[1740px] left-[74px] w-[598px] h-[385px] border-0 shadow-none">
        <div className="p-0 w-full h-full relative">
          <img
            className="w-full h-full"
            alt="Rectangle"
            src="/rectangle-9.svg"
          />
          <h3 className="absolute top-[150px] left-[29px] w-[540px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[40px] tracking-[0] leading-[normal] text-center">
            "Speedy Justice For You!"
          </h3>
          <h2 className="absolute top-[210px] left-[30px] w-[538px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[25px] text-center tracking-[0] leading-[normal]">
            - SAUL GOODMAN
          </h2>
        </div>
      </div>

      {/* Card THE WORLD ACCORDING TO */}
      <div className="absolute top-[3023px] left-[110px] w-[598px] h-[385px] border-0 shadow-none">
        <div className="p-0 w-full h-full relative">
          <img
            className="w-full h-full"
            alt="Rectangle"
            src="/rectangle-9.svg"
          />
          <h3 className="absolute top-[150px] left-[29px] w-[540px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[32px] tracking-[0] leading-[normal] text-center">
            THE WORLD ACCORDING TO
          </h3>
          <h2 className="absolute top-[190px] left-[30px] w-[538px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-5xl text-center tracking-[0] leading-[normal]">
            SAUL GOODMAN
          </h2>
        </div>
      </div>

      {/* Card "If you like piña coladas..." CORRIGIDO */}
      <div className="absolute top-[4330px] left-[100px] w-[598px] h-[385px] border-0 shadow-none">
        <div className="p-0 w-full h-full relative">
          <img
            className="w-full h-full"
            alt="Rectangle"
            src="/rectangle-9.svg"
          />
          <h3 className="absolute top-[120px] left-[29px] w-[540px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[32px] tracking-[0] leading-[normal] text-center">
            If you like piña coladas <br />And gettin' caught in the rain <br />If you're not into yoga <br />If you have half a brain
          </h3>
        </div>
      </div>

      <header className="absolute top-[953px] left-0 w-[100vw] h-[140px] bg-[#d01313]">
        <div className="absolute top-[27px] left-[295px] w-[1392px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[64px] tracking-[0] leading-[normal]">
          (505) 503 - 4405 - SE HABLA ESPANOL
        </div>
      </header>

      <div className="absolute top-[617px] left-[148px] w-[270px] rotate-[-20.19deg] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-[64px] tracking-[0] leading-[normal]">
        CALL NOW!
      </div>

      <img
        className="absolute top-[1157px] left-[91px] w-[562px] h-[562px] object-cover"
        alt="Better call saul"
        src="/better-call-saul--1.png"
      />

      <article className="absolute top-[1303px] left-[769px] w-[994px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        In the shadowy underbelly of Albuquerque&#39;s legal landscape, where
        the line between justice and survival blurs into a haze of moral
        ambiguity, stands Saul Goodman—a name synonymous with cunning, charisma,
        and unyielding advocacy for those entangled in the web of criminal
        accusations. Saul Goodman isn&#39;t just a lawyer; he&#39;s a lifeline
        for the desperate, the accused, and the overlooked, operating under the
        banner of his iconic firm, &#34;Better Call Saul.&#34; This isn&#39;t
        your run-of-the-mill legal service; it&#39;s a high-stakes operation
        tailored for clients who find themselves on the wrong side of the law,
        whether through misfortune, poor choices, or the relentless grind of a
        system stacked against them. With a flair for the dramatic and a
        wardrobe as bold as his strategies, Saul embodies the archetype of the
        criminal defense attorney who thrives in chaos, turning seemingly
        hopeless cases into triumphs through a blend of legal acrobatics, street
        smarts, and an unorthodox network of connections.
      </article>

      <article className="absolute top-[2423px] left-[106px] w-[1722px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
        At the heart of &#34;Better Call Saul&#34; is a comprehensive suite of
        services designed to navigate the treacherous waters of criminal law.
        Saul specializes in defending clients facing a wide array of charges,
        from white-collar crimes like money laundering and fraud to more gritty
        offenses such as drug trafficking, assault, and even homicide. His
        approach is holistic: it begins with an initial consultation that&#39;
        as discreet as it is thorough, where he listens intently to your story,
        dissecting every detail to uncover angles that others might miss. What
        sets Saul apart is his mastery of plea bargaining—he&#39;s a wizard at
        negotiating deals that minimize sentences or even secure outright
        dismissals, often by leveraging procedural loopholes, questionable
        evidence chains, or the overburdened schedules of prosecutors. But Saul
        doesn&#39;t stop at the courtroom; his services extend to crisis
        management, including bail bonds facilitation through trusted
        associates, witness preparation (or, in some cases, witness relocation
        advice), and post-trial support like expungement petitions or appeals.
        He&#39;s known for his &#34;no stone unturned&#34; philosophy, employing
        private investigators to dig up dirt on accusers, expert witnesses to
        challenge forensic evidence, and even psychological evaluations to
        humanize his clients before juries.
      </article>

      {/* Card com texto */}
      <div className="absolute top-[3071px] left-[950px] w-[949px] h-[326px] bg-[#000000] border-0 shadow-none">
        <div className="p-0 w-full h-full flex items-center justify-end pr-8">
          <p className="w-[420px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-base tracking-[0] leading-[normal]">
            &#34;Better Call Saul,&#34; the premier criminal defense firm led by
            the irrepressible Saul Goodman, is headquartered in a vibrant,
            no-nonsense office in Albuquerque, New Mexico. Nestled in a bustling
            strip mall, the office is as bold as its owner, marked by a flashy
            sign and a welcoming yet chaotic interior filled with legal files,
            kitschy décor, and a constant hum of activity. This is where Saul
            works his magic, offering top-tier legal defense for those facing
            criminal charges, from petty offenses to high-stakes felonies, all
            with his signature blend of wit, hustle, and unorthodox strategy.
          </p>
        </div>
      </div>

      <img
        className="absolute top-[3709px] left-[81px] w-[955px] h-[620px]"
        alt="Saull"
        src="/saull-1.png"
      />

      <img
        className="absolute top-[3094px] left-[993px] w-[419px] h-[280px] object-cover"
        alt="Babababab"
        src="/babababab-1.png"
      />

      <article className="absolute top-[3717px] left-[1050px] w-[830px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal]">
        In a world where the scales of justice often tip toward the powerful,
        Saul Goodman and &#34;Better Call Saul&#34; level the playing field for
        the underdog. Whether you&#39;re a small-time entrepreneur caught in a
        tax evasion snare, a family man defending against domestic violence
        allegations, or someone deeper in the criminal underworld needing
        extraction from a federal indictment, Saul&#39;s firm offers not just
        representation, but reinvention. His track record speaks volumes:
        countless acquittals, reduced charges, and lives salvaged from the
        brink. Critics may call him sleazy or unethical, but to his clients,
        he&#39;s a savior—a beacon in the storm of legal peril. If you&#39;re in
        trouble, if the cops are knocking, if the DA is breathing down your
        neck—don&#39;t hesitate. Better Call Saul, and watch as he transforms
        your nightmare into a negotiable reality. With Saul Goodman at your
        side, the law isn&#39;t an enemy; it&#39;s a puzzle waiting to be
        solved.
      </article>

      <footer className="absolute top-[4713px] left-0 w-[100vw] h-[223px] bg-[#d01313]">
        <div className="absolute top-[58px] left-[785px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-2xl text-center tracking-[0] leading-[normal]">
          ©Copyright. Better Call Saul LTDA.
        </div>
        <a 
          href="mailto:name555125@gmail.com" 
          className="absolute top-[112px] left-[852px] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-[#e6e900] text-2xl text-center tracking-[0] leading-[normal] not-italic no-underline hover:underline cursor-pointer"
        >
          name555125@gmail.com
        </a>
      </footer>

      <div className="absolute top-[799px] left-[189px] rotate-[-19.83deg] [font-family:'Alfa_Slab_One',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
        (NOT TOLL FREE)
      </div>
    </div>
  );
};