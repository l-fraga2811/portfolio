/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/***********
 * IMPORTS *
 ***********/
import perfImg from "/images/avatar-1.jpg"
import bannerImg from "/images/hero-banner.png"
import { ButtonOutline, PrimaryButton } from "./Button"

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-[100px] lg:pt-[120px]">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            {/************************
                             * TODO-TROCAR AVATAR *
                             ************************/}
                            <img
                                src={perfImg}
                                width={40}
                                height={40}
                                alt="Perf img"
                                className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                                <span className="absolute inset-0 animate-ping w-2 h-2 rounded-full bg-emerald-400"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15xh] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Desenvolvendo APIs e projetos full-stack
                    </h2>

                    <div className="flex items-center gap-3">
                        <PrimaryButton
                        label={"Download CV"}
                        icon={"download"}
                        href={"#"}
                        />    

                        <ButtonOutline
                        label={"Scoll down"}
                        href={"#about"}
                        icon={"arrow_downward"}
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] 
                    ml-auto bg-gradient-to-t 
                    from-sky-400/40 
                    to-65% rounded-[60px] overflow-hidden">
                        <img
                            src={bannerImg}
                            width={656}
                            height={800}
                            alt="Banner img"
                            className="w-full"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero