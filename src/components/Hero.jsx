/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/***********
 * IMPORTS *
 ***********/
import perfImg from "../images/avatar-1.jpg"
import bannerImg from "../images/hero-banner.png"

const Hero = () => {
    return (
        <section
            id=""
            className="pt-28 lg:pt-36">
            <div className="contain">
                <div>
                    <div className="">
                        <figure className="">
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
                        <div className="">
                            <span className="">
                                <span className=""></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="">
                        Desenvolvendo APIs e projetos full-stack
                    </h2>

                    <div className="">
                        ButtonPrimary

                        ButtonOutline
                    </div>
                </div>
                <div className="">
                    <figure className="">
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